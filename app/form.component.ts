import {Component, OnInit} from '@angular/core';

@Component({
  selector : 'app-form',
  templateUrl : './form.component.html',
  styleUrls : ['./form.component.css']
})
export class FormComponent implements OnInit{
  public model : Object = {};
  constructor(){}

  ngOnInit(){}
}
