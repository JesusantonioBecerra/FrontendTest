import { Component, OnInit, ChangeDetectionStrategy, Input, SimpleChanges, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { AppModel } from '../models/app.model';
import IDataCharacters = AppModel.IDataCharacters;
import DATA_CHARACTERS = AppModel.DATA_CHARACTERS;
@Component({
  selector: 'app-super-hero-card',
  templateUrl: './super-hero-card.component.html',
  styleUrls: ['./super-hero-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuperHeroCardComponent implements OnInit {
  @Input() superHeroCard: IDataCharacters = DATA_CHARACTERS;
  @Output() idEdit = new EventEmitter<any>();

  cardSuperHero: IDataCharacters = DATA_CHARACTERS;
  constructor(private readonly changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.superHeroCard){
      this.cardSuperHero = {...this.superHeroCard};
      this.changeDetectorRef.detectChanges();
    }
  }

  editCard(id:number) {
    this.idEdit.emit(id);
  }

}
