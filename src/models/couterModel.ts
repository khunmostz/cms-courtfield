export interface IModelCounter {
    count: number;
}

export class ModelCounter implements IModelCounter {
    count: number;
    constructor(props: any = {}) {
        this.count = props.name;
    }
}