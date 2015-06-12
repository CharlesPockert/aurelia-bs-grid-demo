import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class RemoteData {

  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  getComments(gridOptions) {
    // Return a promise that resolves to the data
    // The data currently must contain a data and count property
    // TODO: Make this work on any iterable and just check length if 
    // no count is provided
    return this.httpClient.createRequest("http://jsonplaceholder.typicode.com/comments")
          .asGet()
          .send()
          .then(response => {
              return {
                data: response.content,
                count: response.content.length
              };  
          });  
  }
}