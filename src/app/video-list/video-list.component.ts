import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YouTubeItem } from '../models/video-list-response.model';

@Component({
    selector: 'app-video-list',
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
    @Input() videoList: YouTubeItem[];
    @Output() onVideoSelected: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    play(videoId: string) {
        this.onVideoSelected.emit(videoId);
    }

}
