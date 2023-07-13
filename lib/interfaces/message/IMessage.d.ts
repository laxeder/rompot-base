import { MessageType } from "../../enums/Message";
import IClientModule from "../client/IClientModule";
import IChat from "../chat/IChat";
import IUser from "../user/IUser";
/** Interface da mensagem */
export default interface IMessage extends IClientModule {
    /** Tipo da mensagem */
    type: MessageType;
    /** Sala de bate-papo que foi enviada a mensagem */
    chat: IChat;
    /** Usuário que mandou a mensagem */
    user: IUser;
    /** Texto da mensagem */
    text: string;
    /** Mensagem mencionada na mensagem */
    mention?: IMessage | undefined;
    /** ID da mensagem */
    id: string;
    /** Mensagem enviada pelo bot */
    fromMe: boolean;
    /** Opção selecionada */
    selected: string;
    /** Usuários mencionados na mensagem */
    mentions: string[];
    /** Tempo em que a mensagem foi enviada */
    timestamp: Number;
    /** A mensagem é editada */
    isEdited: boolean;
    /** A Mensagem foi deletada */
    isDeleted: boolean;
    /** A mensagem foi enviada pela api */
    apiSend: boolean;
    /** Adiciona uma reação a mensagem
     * @param reaction Reação
     */
    addReaction(reaction: string): Promise<void>;
    /** Remove a reação da mensagem*/
    removeReaction(): Promise<void>;
    /** Adiciona animações na reação da mensagem
     * @param reactions Reações em sequência
     * @param interval Intervalo entre cada reação
     * @param maxTimeout Maximo de tempo reagindo
     */
    addAnimatedReaction(reactions: string[], interval?: number, maxTimeout?: number): (reactionStop?: string) => Promise<void>;
    /** Envia uma mensagem mencionando a mensagem atual
     * @param message Mensagem que terá enviada
     * @param mention Se verdadeiro a mensagem é mencionada
     */
    reply(message: IMessage | string, mention?: boolean): Promise<IMessage>;
    /** Marca mensagem como visualizada */
    read(): Promise<void>;
}
