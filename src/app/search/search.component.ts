import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VideoService } from '../video.service';
import { YouTubeItem } from '../models/video-list-response.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    @Output() videoListEvent: EventEmitter<YouTubeItem[]> = new EventEmitter<YouTubeItem[]>();
    lastTimeOutNumber: number;
  constructor(private videoService: VideoService) { }

  ngOnInit() {
    
  }

  searchQuery(q: string) {
      clearTimeout(this.lastTimeOutNumber);
      this.lastTimeOutNumber = window.setTimeout(() => {
        this.videoService.get(q).subscribe(videoRes => {
            this.videoListEvent.emit(videoRes.items);
          });
    
      }, 1000 * environment.searchInputDelay)
  }
}
