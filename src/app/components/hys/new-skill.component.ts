import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkilService } from 'src/app/service/skil.service';
import { Skill } from '../../model/skill';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css'],
})
export class NewSkillComponent implements OnInit {
  nombre: string;
  porcentaje: number;

  constructor(private skillS: SkilService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje);
    this.skillS.save(skill).subscribe(
      (data) => {
        alert('Skill creada correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al añadir skill');
        this.router.navigate(['']);
      }
    );
  }
}
