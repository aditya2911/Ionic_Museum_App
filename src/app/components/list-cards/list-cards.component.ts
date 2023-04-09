import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { vidsModels } from 'src/app/models/vidsModel';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  standalone:true,
  styleUrls: ['./list-cards.component.scss'],
  imports:[CommonModule]
})
export class ListCardsComponent  implements OnInit {
vid: any;

  constructor() { }
  @Input()   listTitle = '';
  @Input()
  arr!:vidsModels[]
  ngOnInit() {}

}
