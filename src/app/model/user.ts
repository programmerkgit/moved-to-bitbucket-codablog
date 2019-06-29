import { Model } from './model';


type UserRole =
    0 /* admin user */
    | 1
    | 2
    | 3
    | 9 /* normal user */


export class User extends Model<User> {
    email?: string;
    password?: string;
    role?: UserRole;

    isAdmin() {
        return this.role === 0;
    }

}
