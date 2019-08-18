import { Role } from './role';
import { Power } from './power';

export class UserAuth {
    isLogin: boolean;
    token: string;
    roles?: Role[];
    powers?: Power[];
}