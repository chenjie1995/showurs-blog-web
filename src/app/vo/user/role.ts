import { Power } from './power';

export class Role {
    id: number;
    name: string;
    description?: string;
    powers?: Array<Power>;
}