import { Role } from './role';
import { Power } from './power';

export class UserToken {
    token: string;
    roles?: Role[];
    powers?: Power[];
}