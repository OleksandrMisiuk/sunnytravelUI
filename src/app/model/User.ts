import { Role } from './Role';

export class User{
    id: number;
    username: string;
    active: boolean;
    roles: Role[];
}