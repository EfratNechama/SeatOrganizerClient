export class Event {
    public id: number;
    public seperatedSeats?: boolean;
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
        seperatedSeats: boolean,

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