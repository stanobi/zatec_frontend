import { Joke } from "src/app/joke/model/joke";
import { People } from "src/app/people/model/people";

export class Search {

    jokes : Joke[];
    people : People[];

    constructor(jokes: Joke[], people: People[]) {
        this.jokes = jokes;
        this.people = people;
    }

}
