import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PatientsService {

    constructor(private http:HttpClient) {}

    // Uses http.get() to load data from a single API endpoint
    getPatients() {
        let header = new HttpHeaders();
        header.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9kZXYuZGlldG1lLml0IiwiaWF0IjoxNTIyMzU5NjI0LCJuYmYiOjE1MjIzNTk2MjQsImV4cCI6MTUyMjk2NDQyNCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMyJ9fX0.SULKygyviCuP9csdcvECIl-ZaRSpmknU_INJr5aPjSY");
        return this.http.get('http://dev.dietme.it/wp-json/dm/v1/dm-patient', {"headers": header});
    }
}
