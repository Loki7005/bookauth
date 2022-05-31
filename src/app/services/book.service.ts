import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _httpClient: HttpClient, private _auth: AuthService) { }

  saveBook(books: any[]): Observable<any>{
    const tk = this._auth.getToken();
    return this._httpClient.post('https://anghttp-3dc54-default-rtdb.firebaseio.com/data.json?auth=' + tk ,books)
  }

  getBook(books: any[]): Observable<any>{
    const tk = this._auth.getToken();
    return this._httpClient.get('https://anghttp-3dc54-default-rtdb.firebaseio.com/data.json?auth=' + tk)
  }
}
