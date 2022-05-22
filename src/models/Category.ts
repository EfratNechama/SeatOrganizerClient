// export class Category {
//     public id?: number;
//     public name: string;
//     public eventId?: number;
    
//     /**
//      *
//      */
//     constructor(id:number,name:string,eventId:number) {
//         this.id=id;
//         this.name=name;
//         this.eventId=eventId;

//     }
// }

export interface Category {
    id?: number;
    name: string;
    eventId?: number;
    selected?: boolean;
    /**
     *
     */
    // constructor(id:number,name:string,eventId:number) {
    //     this.id=id;
    //     this.name=name;
    //     this.eventId=eventId;

    // }
}