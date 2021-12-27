import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { pathOr } from 'ramda';
import { AppHttpModel } from '../models/app.http.model';
import { AppModel } from '../models/app.model';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import IDataCharacters = AppModel.IDataCharacters;
import IDataResponseCharacters = AppHttpModel.IDataResponseCharacters;
import IDataResponseHeroes = AppHttpModel.IDataResponseHeroes;
import IDataResponseHeroesCount = AppHttpModel.IDataResponseHeroesCount;

@Injectable({
  providedIn: 'root',
})
export class MarvelServiceService {
  private readonly url: string = 'https://gateway.marvel.com/v1/public';
  private readonly ts: string = '1';
  private readonly apiKey: string = 'e6efc1730ff6933f1b7645bcd17c9c09';
  private readonly hash: string = '385c7fb97dec2543d0e4701f3cba7fae';
  constructor(public http: HttpClient) {}

  getSuperheros(offset: number = 0, limit: number=0) {
    let response: IDataCharacters[] = [];
    return this.http
      .get<IDataResponseCharacters>(
        `${this.url}/characters?limit=${limit}&offset=${offset}&ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`,
        {}
      )
      .pipe(
        map((dataResponse:IDataResponseCharacters):IDataCharacters[] => {
          if(dataResponse.status === 'Ok') {
            const dataHeroes:IDataResponseHeroes[] = pathOr<IDataResponseHeroes[]>([], ['results'], dataResponse.data);
            if(dataHeroes.length>0){
              for (let index = 0; index < dataHeroes.length; index+=1) {
                const element = dataHeroes[index];
                const name = element?.name ?? '';
                const description = element?.description ?? '';
                let thumbnail = '';
                if(element.thumbnail.extension.length>0 && element.thumbnail.path.length>0){
                  thumbnail = element.thumbnail.path+'.'+element.thumbnail.extension;
                }
                const modified = new Date(element.modified);
                const id = parseInt((element.id ?? '0').toString(), 10);
                response = [...response, {
                  name,
                  description,
                  thumbnail,
                  modified,
                  id
                }];
              }
            }
            
          }
          return response;
        }),
        catchError(
          (responseError: HttpErrorResponse): Observable< IDataCharacters[]> => {
            return of(response);
          },
        ),
      );
  }
  searchSuperHero(nameStartsWith:string = '',offset: number = 0,limit: number = 100){
    let response: IDataCharacters[] = [];
    return this.http
      .get<IDataResponseCharacters>(
        `${this.url}/characters?nameStartsWith=${nameStartsWith}&offset=${offset}&limit=${limit}&ts=${this.ts}&apikey=${this.apiKey}&hash=${this.hash}`,
        {}
      )
      .pipe(
        map((dataResponse:IDataResponseCharacters):IDataCharacters[] => {
          if(dataResponse.status === 'Ok') {
            const dataHeroes:IDataResponseHeroes[] = pathOr<IDataResponseHeroes[]>([], ['results'], dataResponse.data);
            if(dataHeroes.length>0){
              for (let index = 0; index < dataHeroes.length; index+=1) {
                const element = dataHeroes[index];
                const name = element?.name ?? '';
                const description = element?.description ?? '';
                let thumbnail = '';
                if(element.thumbnail.extension.length>0 && element.thumbnail.path.length>0){
                  thumbnail = element.thumbnail.path+'.'+element.thumbnail.extension;
                }
                const modified = new Date(element.modified);
                const id = parseInt((element.id ?? '0').toString(), 10);
                response = [...response, {
                  name,
                  description,
                  thumbnail,
                  modified,
                  id
                }];
              }
            }
            
          }
          return response;
        }),
        catchError(
          (responseError: HttpErrorResponse): Observable< IDataCharacters[]> => {
            return of(response);
          },
        ),
      );
  }
  changeStateLoading(event:boolean, idChangeStatus: string = '') {
    const modalId = document.getElementById(idChangeStatus);
    const timeOut = 1000;
    if(event){
      if(!(modalId?.classList.contains('modal--container-visible'))){
        modalId?.classList.add('modal--container-visible');
      }
    } else {
      setTimeout(() => {
        modalId?.classList.remove('modal--container-visible');
      }, timeOut);
    }
  }
}
