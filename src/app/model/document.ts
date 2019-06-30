import { FeedBack, FeedBackType } from './feed-back';
import { Model } from './model';
import { Category } from './category';

export type DocumentType = 'simple' | 'memo' | 'blog' | string

export class Document extends Model<Document> {
    title?: string;
    content?: string;
    thumbnailUrl?: string;
    show?: boolean;
    categories?: Category[];
    usefulFeedBacks?: FeedBack[];
    reliableFeedBacks?: FeedBack[];
    likeFeedBacks?: FeedBack[];
    type?: DocumentType;

    get likeCount() {
        return this.countFeedBacks('like');
    }

    get reliableCount() {
        return this.countFeedBacks('reliable');
    }

    get usefulCount() {
        return this.countFeedBacks('useful');
    }

    countFeedBacks(type: FeedBackType): number {
        let count: number;
        switch (type) {
            case 'useful':
                count = this._countFeedBacks(this.usefulFeedBacks);
                break;
            case 'reliable':
                count = this._countFeedBacks(this.reliableFeedBacks);
                break;
            case 'like':
                count = this._countFeedBacks(this.likeFeedBacks);
                break;
            default:
                throw new TypeError(`Unexpected type ${ type }`);
        }
        return count;
    }

    private _countFeedBacks(feedBacks: FeedBack[]): number {
        return feedBacks.reduce((count, feedBack) => {
            return count + feedBack.value;
        }, 0);
    }
}
