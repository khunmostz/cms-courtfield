export interface ILogin {
    user: User;
    token: string;
}

export interface User {
    user_id: number;
    image_url: string;
    name: string;
    email: string;
    identification: string;
    created_at: Date;
    updated_at: Date;
}

export class ModelLogin implements ILogin {
    user: User;
    token: string;
    constructor(props: any = {}) {
        this.user = props.user;
        this.token = props.token;
    }
}