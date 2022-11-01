import { Component, OnInit } from '@angular/core';
import { ExperienciaLab } from 'src/app/model/experiencia-lab';
import { SExperienciaLabService } from 'src/app/service/s-experiencia-lab.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  expe: ExperienciaLab[] = [];
  SExperienciaLabService: any;
  constructor(
    private sExperienciaLab: SExperienciaLabService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperienciaLab();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperienciaLab(): void {
    this.sExperienciaLab.lista().subscribe((data) => {
      this.expe = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sExperienciaLab.delete(id).subscribe(
        (data) => {
          this.cargarExperienciaLab();
        },
        (err) => {
          alert('No se pudo borrar la experiencia');
        }
      );
    }
  }
}
