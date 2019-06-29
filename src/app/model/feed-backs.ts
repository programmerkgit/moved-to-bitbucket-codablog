/* TODO define */
import { Model } from './model';
import { User } from './user';
import { Document } from './document';

export class FeedBacks extends Model<FeedBacks> {
    userId: string;
    documentId: string;
    document: Document;
    user: User;
}
