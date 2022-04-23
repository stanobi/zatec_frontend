export class Joke {

    categories : string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;

    constructor(categories : string[], created_at: string, icon_url: string, 
        id: string, updated_at: string, url: string, value: string) {
            this.categories = categories;
            this.created_at = created_at;
            this.icon_url = icon_url;
            this.id = id;
            this.updated_at = updated_at;
            this.url = url;
            this.value = value;
        }

}
