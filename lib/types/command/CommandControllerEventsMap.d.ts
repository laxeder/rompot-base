import { ICommand, ICommandPermission } from "../../interfaces/command";
import IMessage from "../../interfaces/message/IMessage";
export type CommandControllerEventsMap = {
    /** Permissão negada */
    ["no-allowed"]: {
        message: IMessage;
        command: ICommand;
        permission: ICommandPermission;
    };
};
