export class YouTubeUrlBuilder {
    private baseUrl: string;
    private queryParameters = {};

    constructor(apiKey: string) {
        this.queryParameters['key'] = apiKey;
        this.baseUrl = 'https://www.googleapis.com/youtube/v3/search';
    }

    addPart(part) {
        this.queryParameters['part'] = part;
    }

    addQuery(q: string) {
        this.queryParameters['q'] = q.replace(' ', '%20');
    }
    
    addType(type: 'channel' | 'playlist' | 'video') {
        this.queryParameters['type'] = type;
    }

    toString(): string {
        const _qs = Object.keys(this.queryParameters).map(k => k + '=' + this.queryParameters[k]).join('&');
        console.log(_qs);
        return `${this.baseUrl}?${_qs}`;
    }
}
