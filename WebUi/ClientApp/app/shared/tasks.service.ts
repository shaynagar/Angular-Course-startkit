import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {ITask} from "../models/task.class";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class TasksService {
  

  private baseUrl: string ="http://starterkitapi.lcweb-dev.co.il/api/task"; 

  constructor(private http: HttpClient) {
    
  }

  getAll(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.baseUrl);
  }

  add(task: ITask): Observable<ITask>{
    return this.http.post<ITask>(this.baseUrl, task, httpOptions);
  }

  remove(task: ITask): Observable<ITask> {
    return this.http.delete<ITask>(this.baseUrl +"/"+ task.id.toString());
  }

  edit(task: ITask): Observable<ITask> {
    return this.http.put<ITask>(this.baseUrl + "/" + task.id.toString(), task, httpOptions);
  }
}
