import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class JournalService {
    BASE_URL: String = 'http://localhost:3000';
    constructor(private http: Http){}

    getList(){
        return this.http.get(`${this.BASE_URL}/api/journal-entries`)
        .map((res) => res.json());
    }

    getListId(id){
        console.log('entro en el servicio id')
        console.log(id)

        return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
        .map((res) => res.json());
    }
}