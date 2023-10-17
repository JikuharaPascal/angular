export class User {
    id!:number;
    name!:string;
    mail!:string;
    hashed_password!:string;
    tel!:string;
    prefecture_id!:number;
    address!:string;
}

export const USERDATA:User[] = [
    {
        id:1,
        name:"admin621",
        mail:"admin@email",
        hashed_password:"password",
        tel:"4-621-1945",
        prefecture_id:2,
        address:"C4-621号室"
    }
];