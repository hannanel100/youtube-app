import { Component } from '@angular/core';
import { YouTubeItem } from './models/video-list-response.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    videoList: YouTubeItem[] = [];
    selectedVideoId: string;

    videoListReceived(videoData: YouTubeItem[]) {
        this.videoList = videoData;
    }

    onVideoSelected(videoId: string) {
        this.selectedVideoId = videoId;
    }
}
