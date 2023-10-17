import { Injectable } from '@angular/core';
import { USERDATA, User } from './user/user';
import { PREFECTUREDATA, Prefecture } from './user/prefecture';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  protected userDataList:User[] = USERDATA;
  protected prefectureDataList:Prefecture[] = PREFECTUREDATA;

  constructor() { }

  getPrefectureDataList():Prefecture[] { return this.prefectureDataList; }
  getPrefectureData(id:number):Prefecture { return this.prefectureDataList.find(prefecture=>prefecture.id === id) as Prefecture; }
  getPrefectureName(id:number):string { return this.getPrefectureData(id).name as string; }

  getUserData(id:number):User { return this.userDataList.find(user=>user.id === id) as User; }

  getUser():User { return this.getUserData(1) as User; }
  getUserName():string { return this.getUserData(1).name as string; }
}
