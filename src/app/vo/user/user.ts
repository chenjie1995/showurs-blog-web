import { Role } from './role';

export class User {
    id: number;
    username: string;
    email: string;
    nickname: string;
    avatar?: string;
    sex?: number;
    birthday?: Date;
    signature?: string;
    backgroundImage?: string;
    createTime: string;
    lastLoginTime?: string;
    status: string;
    roles?: Array<Role>;
}