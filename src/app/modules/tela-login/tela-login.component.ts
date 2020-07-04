import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null],
      senha: [null]
    });
  }

  disableButton() {
    if (this.formulario.value.email !== null &&
      this.formulario.value.email !== '' &&
      this.formulario.value.senha !== null &&
      this.formulario.value.senha !== '') {
      return false;
    } else {
      return true;
    }
  }

}
