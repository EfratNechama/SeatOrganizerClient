export class Event {
    public id: number;
    public name:string;
    public separatedSeats?: boolean;
    public numTablesMale?: number;
    public numTablesFemale?: number;
    public numChairsMale?: number;
    public numChairsFemale?: number;
    public numSpecialTableChairsMale?: number;
    public numSpecialTableChairsFemale?: number;
    public invitationImage?: ImageBitmap
    public eventDate?: Date;
    public invitationImageName?:string;
    public invitationImagePath?:string;
    binaryData?: string;

    //ch///

    /**
     *
     */
    constructor(id: number,
        name:string,
        separatedSeats: boolean,

        numTablesMale?: number,
        numTablesFemale?: number,
        numChairsMale?: number,
        numChairsFemale?: number,
        numSpecialTableChairsMale?: number,
        numSpecialTableChairsFemale?: number,
        invitationImage?: ImageBitmap,
        eventDate?: Date,
        invitationImageName?:string,
        invitationImagePath?:string,
        
        binaryData?: string
          ) {
this.id=id;
this.name=name;
    }
}