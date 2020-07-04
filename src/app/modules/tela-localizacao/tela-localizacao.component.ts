import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConsultaFiltrosService } from '../../shared/provider/service/consulta-filtros.service';


@Component({
  selector: 'app-tela-localizacao',
  templateUrl: './tela-localizacao.component.html',
  styleUrls: ['./tela-localizacao.component.css']
})
export class TelaLocalizacaoComponent implements OnInit {
  formulario: FormGroup;
  listLocalidades: any;



  constructor(
    private formBuilder: FormBuilder,
    private consultaFiltrosService: ConsultaFiltrosService,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      rua: [null],
      bairro: [null],
      cidade: [null],
      estado: [null],
      cep: [null]
    });

    this.listLocalidades = this.consultaFiltrosService.getFiltroBuscarLocalidades();
  }

  disableButton() {
    if (this.formulario.value.rua !== null &&
      this.formulario.value.rua !== '' &&
      this.formulario.value.bairro !== null &&
      this.formulario.value.bairro !== '' &&
      this.formulario.value.cidade !== null &&
      this.formulario.value.cidade !== '' &&
      this.formulario.value.estado !== null &&
      this.formulario.value.estado !== '' &&
      this.formulario.value.cep !== null &&
      this.formulario.value.cep !== '') {
      return false;
    } else {
      return true;
    }
  }
}
