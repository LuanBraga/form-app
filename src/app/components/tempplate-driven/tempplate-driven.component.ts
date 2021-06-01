import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempplate-driven',
  templateUrl: './tempplate-driven.component.html',
  styleUrls: ['./tempplate-driven.component.css']
})
export class TempplateDrivenComponent implements OnInit {

  informacoes = {
    nome: '',
    idade: 0,
    email: '',
    confirmaEmail: ''
  }

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(myForm){
    console.log(myForm);
    console.log(this.informacoes);
  }


}
