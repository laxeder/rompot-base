import IUserMethods from "./IUserController";
export default interface IUser extends IUserMethods {
    /** Nome do usuário */
    name: string;
    /** ID do usuário */
    id: string;
}
