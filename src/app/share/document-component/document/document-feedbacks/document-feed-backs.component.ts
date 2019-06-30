import { Component, Input, OnInit } from '@angular/core';
import { FeedBackService } from '../../../../service/feed-back.service';
import { FeedBack, FeedBackType } from '../../../../model/feed-back';
import { DocumentService } from '../../../../service/document.service';
import { tap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { ApiAuthService } from '../../../../service/api-auth.service';

@Component({
    selector: 'app-document-feed-backs',
    templateUrl: './document-feed-backs.component.html',
    styleUrls: [ './document-feed-backs.component.scss' ]
})
export class DocumentFeedBacksComponent implements OnInit {

    @Input() color: string;
    @Input() selectedColor: string;

    @Input() documentId: string;
    subscription: Subscription;
    counts: { [P in FeedBackType]: number } = {
        'useful': 0,
        'reliable': 0,
        'like': 0
    };
    height = 18;
    width = 18;

    myFeedBack: { [P in FeedBackType]: FeedBack } = {
        useful: null,
        reliable: null,
        like: null
    };

    constructor(
        private feedBackService: FeedBackService,
        private documentService: DocumentService,
        private apiAuthService: ApiAuthService
    ) {
    }

    ngOnInit() {
        this.documentService.findById(this.documentId, {scopes: [ 'usefulFeedBacks', 'reliableFeedBacks', 'likeFeedBacks' ]}).pipe(
            tap(document => {
                this.counts[ 'useful' ] = document.countFeedBacks('useful');
                this.counts[ 'reliable' ] = document.countFeedBacks('reliable');
                this.counts[ 'like' ] = document.countFeedBacks('like');
            }),
            tap(document => {
                this.subscription = this.apiAuthService.user$.subscribe(user => {
                    this.myFeedBack[ 'useful' ] = document.usefulFeedBacks.find(feedback => {
                        return feedback.userId === user.id;
                    });
                    this.myFeedBack[ 'reliable' ] = document.reliableFeedBacks.find(feedback => {
                        return feedback.userId === user.id;
                    });
                    this.myFeedBack[ 'like' ] = document.likeFeedBacks.find(feedback => {
                        return feedback.userId === user.id;
                    });
                });
            })
        ).subscribe();
    }

    iconClick(type: FeedBackType) {
        if (this.myFeedBack[ type ]) {
            this.deleteFeedBack(type).subscribe();
        }
    }

    createFeedBack(type: FeedBackType, value): Observable<any> {
        const feedback = new FeedBack({type: type, value: value, documentId: this.documentId});
        return this.feedBackService.create(feedback).pipe(
            tap((res) => {
                this.counts[ type ] += value;
                this.myFeedBack[ type ] = res;
            })
        );
    }

    updateFeedBack(type: FeedBackType, value: number): Observable<any> {
        const feedback = this.myFeedBack[ type ];
        const prevValue = feedback.value;
        feedback.value = value;
        return this.feedBackService.update(feedback.id, feedback).pipe(
            tap(feedback => {
                this.counts[ type ] -= prevValue;
                this.counts[ type ] += feedback.value;
                this.myFeedBack[ type ] = feedback;
            })
        );
    }

    deleteFeedBack(type: FeedBackType): Observable<any> {
        const feedback = this.myFeedBack[ type ];
        const value = feedback.value;
        return this.feedBackService.delete(feedback.id).pipe(
            tap(result => {
                this.counts[ type ] -= value;
                this.myFeedBack[ type ] = null;
            })
        );
    }

    feedBackFunction(type: FeedBackType, value: number) {
        if (this.myFeedBack[ type ] && this.myFeedBack[ type ].value === value) {
            return this.deleteFeedBack(type);
        } else if (this.myFeedBack[ type ] && this.myFeedBack[ type ].value !== value) {
            return this.updateFeedBack(type, value);
        } else if (!this.myFeedBack[ type ]) {
            return this.createFeedBack(type, value);
        } else {
        }
    }

    usefulUp() {
        const type = 'useful';
        const value = 1;
        this.feedBackFunction(type, value).subscribe();
    }

    usefulDown() {
        const type = 'useful';
        const value = -1;
        this.feedBackFunction(type, value).subscribe();

    }

    likeUp() {
        const type = 'like';
        const value = 1;
        this.feedBackFunction(type, value).subscribe();
    }

    likeDown() {
        const type = 'like';
        const value = -1;
        this.feedBackFunction(type, value).subscribe();
    }


    reliableUp() {
        const type = 'reliable';
        const value = 1;
        this.feedBackFunction(type, value).subscribe();

    }

    reliableDown() {
        const type = 'reliable';
        const value = -1;
        this.feedBackFunction(type, value).subscribe();
    }

}
