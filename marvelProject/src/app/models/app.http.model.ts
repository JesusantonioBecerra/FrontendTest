export namespace AppHttpModel {
  export interface IDataResponseError {
    /**
     * code {string} - Describe the error code string returned by the backend
     */
    readonly code: string;
    /**
     * description {string} - Describe the error
     */
    readonly description: string;
    /**
     * message {string} - Specify the message to show to the user
     */
    readonly message: string;
  }

  export interface IDataRequest {
    /**
     * token {string} - Specify token of the application used for http requests
     */
    readonly token: string;
  }

  export interface IDataResponse<T> {
    /**
     * data - Describe the response's object given by backend
     */
    readonly data: T;
    /**
     * error - Describe if has occurred an error in the request {@link IDataResponseError}
     */
    readonly error: null | IDataResponseError;
    /**
     * status { boolean } - Describe if the request was success.
     */
    readonly status: boolean;
  }

  export interface IDataResponseCharacters {
    readonly attributionHTML: string;
    readonly attributionText: string;
    readonly code: number;
    readonly copyright: string;
    readonly data: IDataResponseHeroesCount;
    readonly etag: string;
    readonly status: string;
  }

  export interface IDataResponseHeroesCount {
    readonly count: number;
    readonly limit: number;
    readonly offset: number;
    readonly results: IDataResponseHeroes[];
    readonly total: number;
  }

  export interface IDataResponseHeroes {
    comics: IDataResponseComic;
    description: string;
    events: IDataResponseEvent;
    id: number;
    modified: string;
    name: string;
    resourceURI: string;
    series: IDataResponseSeriesList;
    stories: IDataResponseStoryList;
    thumbnail: IDataResponseThumbnail;
    urls: IDataResponseURL[];
  }

  export interface IDataResponseThumbnail {
    path: string;
    extension: string;
  }

  export interface IDataResponseComic {
    available: number;
    returned: number;
    collectionURI: string;
    items: IDataResponseItems[];
  }

  export interface IDataResponseItems {
    resourceURI: string;
    name: string;
  }

  export interface IDataResponseEvent {
    available: number;
    returned: number;
    collectionURI: string;
    items: IDataResponseEventSummary[];
  }
  export interface IDataResponseEventSummary {
    resourceURI: string;
    name: string;
  }

  export interface IDataResponseSeriesList {
    available: number;
    returned: number;
    collectionURI: string;
    items: IDataResponseSeriesSummary[];
  }
  export interface IDataResponseSeriesSummary {
    resourceURI: string;
    name: string;
  }

  export interface IDataResponseStoryList {
    available: number;
    returned: number;
    collectionURI: string;
    items: IDataResponseStorySummary[];
  }
  export interface IDataResponseStorySummary {
    resourceURI: string;
    name: string;
    type: string;
  }
  export interface IDataResponseURL {
    type: string;
    url: string;
  }
}
