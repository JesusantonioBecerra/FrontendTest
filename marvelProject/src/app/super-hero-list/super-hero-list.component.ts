import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostListener,
} from '@angular/core';
import { MarvelServiceService } from '../services/marvel-service.service';
import { AppModel } from '../models/app.model';
import IDataCharacters = AppModel.IDataCharacters;
import DATA_CHARACTERS = AppModel.DATA_CHARACTERS;

@Component({
  selector: 'app-super-hero-list',
  templateUrl: './super-hero-list.component.html',
  styleUrls: ['./super-hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuperHeroListComponent implements OnInit {
  superHeroData: IDataCharacters[] = [];
  searchData: IDataCharacters[] = [];
  dataEdit: IDataCharacters = DATA_CHARACTERS;
  showLoadingModal: boolean = false;
  endScroll: boolean = false;
  offset: number = 0;
  offsetSearch: number = 0;
  limit: number = 100;
  isSearch: boolean = false;
  indexEdit: number = 0;
  idSearch: string = 'modalLoading';
  constructor(
    private marvelService: MarvelServiceService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    try {
      this.marvelService.changeStateLoading(true, this.idSearch);
      this.isSearch = false;
      this.marvelService
        .getSuperheros(this.offset, this.limit)
        .subscribe((data: IDataCharacters[]) => {
          if (data) {
            if (this.searchData.length > 0) {
              this.superHeroData = [];
            }
            this.superHeroData = [...this.superHeroData, ...data];
            this.searchData = [];
            this.marvelService.changeStateLoading(false, this.idSearch);
            if (data.length > 0) {
              this.offset += this.limit;
              this.offsetSearch = 0;
            } else {
              alert('No hay mas resultados');
            }
            this.changeDetectorRef.detectChanges();
          }
        });
    } catch (error) {
      alert(error);
      this.marvelService.changeStateLoading(false, this.idSearch);
    }
  }

  searchSuperHero() {
    try {
      this.marvelService.changeStateLoading(true, this.idSearch);
      this.isSearch = true;
      const dataSearch = (<HTMLInputElement>(
        document.getElementById('superHeroSearch')
      )).value;
      if (dataSearch.length == 0) {
        throw 'Ingresa algun valor';
      }
      this.marvelService
        .searchSuperHero(dataSearch, this.offsetSearch, this.limit)
        .subscribe((data: IDataCharacters[]) => {
          if (data) {
            this.superHeroData = [];
            this.searchData = [...this.searchData, ...data];
            this.superHeroData = [...this.superHeroData, ...this.searchData];
            this.marvelService.changeStateLoading(false, this.idSearch);
            if (data.length > 0) {
              this.offset = 0;
              this.offsetSearch += this.limit;
            } else {
              alert('No hay mas resultados');
            }
            this.changeDetectorRef.detectChanges();
          }
        });
    } catch (error) {
      alert(error);
      this.marvelService.changeStateLoading(false, this.idSearch);
    }
  }

  trackById(index: number, superHeroData: IDataCharacters): number {
    return superHeroData.id;
  }

  editCard(idEdit:number) {
    this.marvelService.changeStateLoading(true, 'modalEdit');
    this.indexEdit = this.superHeroData.findIndex((item)=>{
      return item.id == idEdit
    })
    this.dataEdit = this.superHeroData[this.indexEdit];
  }

  cancelEditCard() {
    this.marvelService.changeStateLoading(false, 'modalEdit');
  }

  saveCard(){
    const editName = (<HTMLInputElement>(
      document.getElementById('editName')
    )).value;
    const editDescription = (<HTMLInputElement>(
      document.getElementById('editDescription')
    )).value;
    const editData:IDataCharacters = {
      name: editName,
      description: editDescription,
      thumbnail: this.superHeroData[this.indexEdit].thumbnail,
      modified: this.superHeroData[this.indexEdit].modified,
      id: this.superHeroData[this.indexEdit].id
    }; 
    this.superHeroData.splice(this.indexEdit, 1, editData);
    this.marvelService.changeStateLoading(false, 'modalEdit');
    this.changeDetectorRef.markForCheck();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.endScroll =
      event.target.offsetHeight + event.target.scrollTop >=
      event.target.scrollHeight;
    if (this.endScroll) {
      if (this.isSearch) {
        this.searchSuperHero();
      } else {
        this.getList();
      }
    }
  }
}
