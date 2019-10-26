import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private url = 'api/liveprojects.json'

  constructor(private http: HttpClient) { }

  getProjects(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url)
        .toPromise()
        .then(
          res => resolve(res),
          msg => reject(msg)
        );
    });
  }
}
