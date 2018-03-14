import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class YoutubeService {

  private youtubeUrl = 'https://www.googleapis.com/youtube/v3';
  private apiKey = 'AIzaSyAvitVxmtPMDYIDck5dBPa9vPropKPC0lQ';
  private nextPageToken = '';

  constructor(public http: Http) { }

  getVideos() {
    // tslint:disable-next-line:prefer-const
    let url = `${this.youtubeUrl}/playlistItems`;
    // tslint:disable-next-line:prefer-const
    let params = new URLSearchParams();
    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', 'UULq35g_MyAFUqd1xdkxN5kg');
    params.set('key', this.apiKey);

    if (this.nextPageToken) {
      params.set('pageToken', this.nextPageToken);
    }

    return this.http.get(url, { search: params }).map(res => {
      this.nextPageToken = res.json().nextPageToken;

      // tslint:disable-next-line:prefer-const
      let videos: any[] = [];
      // tslint:disable-next-line:prefer-const
      for (let video of res.json().items) {
        // tslint:disable-next-line:prefer-const
        let snippet = video.snippet;
        videos.push(snippet);
      }
      return videos;
    });
  }

}
