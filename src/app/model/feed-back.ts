import { User } from './user';

export type FeedBackType = 'reliable' | 'useful' | 'like'

export interface FeedBackParams {
    id?: string;
    type?: FeedBackType,
    value?: number,
    userId?: string
    user?: User,
    documentId?: string;
    document?: Document
    updatedAt?: Date,
    createdAt?: Date,
}

export class FeedBack implements FeedBackParams {

    id?: string;
    type?: FeedBackType;
    value?: number;

    userId?: string;
    user?: User;

    documentId?: string;
    document?: Document;

    updatedAt?: Date;
    createdAt?: Date;

    constructor(values?: FeedBackParams) {
        Object.keys(values).forEach(key => {
            this[ key ] = values[ key ];
        });
    }

}
