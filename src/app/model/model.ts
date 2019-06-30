import { Omit, RecursivePartial } from './type-utils';


export type FilteredModelAttributes<T extends Model<T>> =
    RecursivePartial<Omit<T, keyof Model<any>>> & {
    id?: number | any;
    createdAt?: Date | any;
    updatedAt?: Date | any;
    deletedAt?: Date | any;
    version?: number | any;
};

export abstract class Model<T extends Model<T>> {
    id?: string;
    createdAt?: Date | any;
    updatedAt?: Date | any;
    deletedAt?: Date | any;
    version?: number | any;

    constructor(values: FilteredModelAttributes<T> = {}) {
        Object.keys(values).forEach(key => {
            this[ key ] = values[ key ];
        });
    }

    dataValues() {
        return Object.keys(this).reduce((values, key) => {
            if (this.hasOwnProperty(key)) {
                if (key !== 'id') {
                    values[ key ] = this[ key ];
                }
            }
            return values;
        }, {});
    };
}
