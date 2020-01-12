import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { YouTubeVideoListResponseModel } from './models/video-list-response.model';
import { YouTubeUrlBuilder } from './infrastructure/youtube-url.builder';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private httpClient: HttpClient) { 
  }

  get(q: string): Observable<YouTubeVideoListResponseModel> {
      const you = new YouTubeUrlBuilder(environment.youTubeKey);
      you.addPart('snippet');
      you.addQuery(q);
      you.addType("video");
        
      return this.httpClient.get<YouTubeVideoListResponseModel>(you.toString(), {
          headers: {
            'Accept': 'application/json'
          }
      });

      // dummy data
      // return this.httpClient.get<YouTubeVideoListResponseModel>(`${environment.serverUri}/assets/data.json`);
  }

}
