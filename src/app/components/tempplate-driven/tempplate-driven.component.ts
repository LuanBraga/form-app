import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempplate-driven',
  templateUrl: './tempplate-driven.component.html',
  styleUrls: ['./tempplate-driven.component.css']
})
export class TempplateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(myForm: NgForm){
    console.log(myForm)
  }

}
