import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLab } from 'src/app/model/experiencia-lab';
import { SExperienciaLabService } from 'src/app/service/s-experiencia-lab.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css'],
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string = '';
  descripcionExp: string = '';

  constructor(
    private sExperienciaLab: SExperienciaLabService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const expe = new ExperienciaLab(this.nombreExp, this.descripcionExp);
    this.sExperienciaLab.save(expe).subscribe(
      (data) => {
        alert('Experiencia añadida correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Falló');
        this.router.navigate(['']);
      }
    );
  }
}
