import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfyLaptopService {

  constructor(private http: Http) { }

  register(data) {
    return null;
  }

  errorHandler(error){
    return Promise.reject(error.json() || error)
  }

}

