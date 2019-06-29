import { FeedBack } from './feed-back';
import { Model } from './model';


export class Document extends Model<Document> {
    title?: string;
    content?: string;
    thumbnailUrl?: string;
    show?: boolean;
    usefulFeedBacks: FeedBack[];
    reliableFeedBacks: FeedBack[];
    likeFeedBacks: FeedBack[];
}
