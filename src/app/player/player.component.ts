import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
    private _videoId: string;

    @Input()
    get videoId(): string {
        return this._videoId;
    }
    set videoId(value: string) {
        this._videoId = value;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + value);
    }

    url: SafeResourceUrl;

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {

    }

}
