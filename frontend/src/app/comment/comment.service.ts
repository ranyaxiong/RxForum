import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Configuration } from '../app.constants';

@Injectable()
export class CommentService {
    private actionUrl: string;
    constructor(private http: Http, private configration: Configuration) {
        this.actionUrl = configration.API_URL + 'posts/';
    }
    getAllByPost(postId: number) {
        return this.http.get(this.actionUrl + String(postId) + '/').map(res => res.json());
    }

    addComment(data) {
        return this.http.post(this.actionUrl, data);
    }
}
