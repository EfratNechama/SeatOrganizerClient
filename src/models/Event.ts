export class Event {
    public id: number;
    public separatedSeats?: boolean;
    public numTablesMale?: number;
    public numTablesFemale?: number;
    public numChairsMale?: number;
    public numChairsFemale?: number;
    public numSpecialTableChairsMale?: number;
    public numSpecialTableChairsFemale?: number;
    public invitationImage?: ImageBitmap
    public eventDate?: Date;
    //ch///

    /**
     *
     */
    constructor(id: number,
        separatedSeats: boolean,

        numTablesMale?: number,
        numTablesFemale?: number,
        numChairsMale?: number,
        numChairsFemale?: number,
        numSpecialTableChairsMale?: number,
        numSpecialTableChairsFemale?: number,
        invitationImage?: ImageBitmap,
        eventDate?: Date) {
this.id=id;

    }
}