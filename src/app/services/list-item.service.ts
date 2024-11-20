import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListItemService {
  private apiUrl = 'https://server-notes-zwfa.onrender.com/list-items'; // Replace with your Render deployment URL

  constructor(private http: HttpClient) {}

  getListItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getListItem(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createListItem(item: { name: string; isComplete: boolean }): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  updateListItem(
    id: string,
    item: { name: string; isComplete: boolean }
  ): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, item);
  }

  deleteListItem(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
