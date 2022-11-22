import { ColorService } from './../../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors:Color[]=[]

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors()
  }

  getColors(){
    this.colorService.getColors().subscribe((data)=>{
      this.colors = data
    })
  }
}
