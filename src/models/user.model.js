export class UserModel {
    constructor(obj) {
        this._id = obj._id;
        this.email = obj.email;
        this.fullName = obj.fullName;
    }
    static formArray(arr){
        return arr.map(obj => new UserModel(obj));
    }
    static form(obj){
        return new UserModel(obj);
    }
}