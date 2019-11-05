import { Component, OnInit } from '@angular/core';
import { BeneficioService } from '../service/beneficio.service'
import { Router, NavigationExtras } from "@angular/router";
import { Beneficio } from '../model/beneficio.model';


@Component({
  selector: 'app-beneficio-list',
  templateUrl: './beneficio-list.component.html',
  styleUrls: ['./beneficio-list.component.css']
})
export class BeneficioListComponent implements OnInit {

  headBeneficios = ["CPF", "Nome", "Orgão", "Matricula", "Categoria"];
  beneficios = [];

  constructor(private router: Router, private service: BeneficioService) { }

  ngOnInit() {
    return this.service.getBeneficios().subscribe((data: any[])=>{
      this.beneficios = data;
    });
  }

  edit(beneficio: Beneficio) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "cpf": beneficio.cpf,
          "nome": beneficio.nome,
          "orgao": beneficio.orgao,
          "matricula": beneficio.matricula,
          "categoria": beneficio.categoria
      }
    };
    this.router.navigate(['/beneficio-detail'], navigationExtras);
  }

}
