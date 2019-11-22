import { Role } from './role';
import { User } from './user';

export class UserAuth {
    isLogin: boolean;
    token: string;
    user: User;
}