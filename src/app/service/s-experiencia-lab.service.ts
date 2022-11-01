import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExperienciaLab } from '../model/experiencia-lab';

@Injectable({
  providedIn: 'root',
})
export class SExperienciaLabService {
  URL = environment.URL + 'explab/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<ExperienciaLab[]> {
    return this.httpClient.get<ExperienciaLab[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<ExperienciaLab> {
    return this.httpClient.get<ExperienciaLab>(this.URL + `detail/${id}`);
  }

  public save(experienciaLab: ExperienciaLab): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', experienciaLab);
  }

  public update(id: number, experienciaLab: ExperienciaLab): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, experienciaLab);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
