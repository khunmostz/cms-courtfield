export interface IHotel {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

interface Rating {
    rate: number;
    count: number;
}

export class ModelHotel implements IHotel {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
    constructor(props: any = {}) {

        this.id = props.id;
        this.title = props.title;
        this.price = props.price;
        this.description = props.description;
        this.category = props.category;
        this.image = props.image;
        this.rating = props.rating;
    }
}