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
        name:"admin",
        mail:"admin@email",
        hashed_password:"password",
        tel:"111-1111-1111",
        prefecture_id:2,
        address:"1県1市1丁目1-111号室"
    }
];