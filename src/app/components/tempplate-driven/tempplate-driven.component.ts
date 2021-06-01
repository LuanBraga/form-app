import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempplate-driven',
  templateUrl: './tempplate-driven.component.html',
  styleUrls: ['./tempplate-driven.component.css']
})
export class TempplateDrivenComponent implements OnInit {

  @ViewChild('myForm') templateForm;

  informacoes = {
    nome: '',
    idade: 0,
    email: '',
    confirmaEmail: ''
  };

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(myForm: NgForm){
    console.log(myForm);
    console.log(this.informacoes);
  }

  getAddress(cep){
    this.http.get(`http://viacep.com.br/ws/${cep}/json/`).subscribe(
      endereco => {
        // metodo path value
        this.templateForm.form.patchValue({endereco});

        // metodo set value:
        /*  const values = this.templateForm.values;
        values.endereco.bairro = 'meu bairro';
        this.templateForm.setValue(values); */
      }
    );
  }

}
