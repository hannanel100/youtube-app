import { Component, OnInit } from '@angular/core';
import { YouTubeItem } from '../models/video-list-response.model';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.css']
})
export class UserAreaComponent implements OnInit {
  videoList: YouTubeItem[] = [];
  selectedVideoId: string;

  videoListReceived(videoData: YouTubeItem[]) {
    this.videoList = videoData;
  }

  onVideoSelected(videoId: string) {
    this.selectedVideoId = videoId;
  }
  ngOnInit() {

  }
}
