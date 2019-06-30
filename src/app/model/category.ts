import { Model } from './model';


export class Category extends Model<Category> {
    type?: string;
    name?: string;
    documents: Document[];
}
