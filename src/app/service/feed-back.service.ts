import { Injectable } from '@angular/core';
import { ApiService } from './api-service';
import { HttpClient } from '@angular/common/http';
import { FeedBack } from '../model/feed-back';

@Injectable({
    providedIn: 'root'
})
export class FeedBackService extends ApiService<FeedBack> {

    protected _basePath = 'feed-backs';

    constructor(
        protected httpClient: HttpClient
    ) {
        super(httpClient);
    }
}
