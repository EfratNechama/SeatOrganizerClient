export class Guest {
    public id: number;
    public eventId?:number;
    public firstName?:string;
    public lastName?: string;
    public phone?:string;
    public email?:string;
    public confirmed?:boolean;
    public categoryId?:number;
    public userId?: number;
    public identifyName?:string;
    public identifyImage?:ImageBitmap;
    public numFamilyMembersMale?:number;
    public numFamilyMembersFemale?:number;
    public dataUrl?:string;

    /**
     *
     */
    constructor(id: number,
          eventId  :number,
          firstName  :string,
          lastName  : string,
          phone  :string,
          email  :string,
          confirmed  :boolean,
          categoryId  :number,
          userId  : number,
          identifyName  :string,
          identifyImage  :ImageBitmap,
          numFamilyMembersMale  :number,
          numFamilyMembersFemale  :number,) {this.id=id; }


}