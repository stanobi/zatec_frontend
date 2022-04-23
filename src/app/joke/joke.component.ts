import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataResponse } from 'src/shared/model/data-response';
import { Joke } from './model/joke';
import { JokeService } from './service/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnDestroy, OnInit {

  categories: string[] = [];
  joke: Joke = new Joke([], "", "", "", "", "", "");

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  isLoading : boolean = false;
  isExceptionThrown : boolean = false;
  errorMessage : string;

  constructor(private jokeService: JokeService) { 
  }

  ngOnInit(): void {

    this.dtOptions = {
      autoWidth: false,
      pageLength: 5,
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]], 
      pagingType: "simple"
    }

    this.isExceptionThrown = false;
    this.isLoading = true;
    this.jokeService.getCategories().subscribe({
      next: (response : DataResponse<string[]>) => {
        this.categories = response.data;
        this.dtTrigger.next(this.dtOptions);
        this.isLoading = false;
      },
      error: (e) => {
        this.isExceptionThrown = true;
        this.errorMessage = e;
        this.isLoading = false;
      }
    });
  }

  getRandomJoke(category: string) : void {
    this.isLoading = true;
    this.jokeService.getRandomJoke(category).subscribe({
      next: (response : DataResponse<Joke>) => {
        this.joke = response.data;
        this.isLoading = false;
        },
      error: (e) => {
        this.isExceptionThrown = true;
        this.errorMessage = e;
        this.isLoading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
