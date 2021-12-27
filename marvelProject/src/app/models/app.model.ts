export namespace AppModel {
  export interface IDataCharacters {
    name: string;
    description: string;
    thumbnail: string;
    modified: Date;
    id: number;
  }

  export const DATA_CHARACTERS: IDataCharacters = {
    name: '',
    description: '',
    thumbnail: '',
    modified: new Date(),
    id: 0
  } 
}
