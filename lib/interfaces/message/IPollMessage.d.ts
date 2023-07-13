import type { PollAction, PollOption } from "../../types/message/Poll";
import { MessageType } from "../../enums/Message";
import IMessage from "./IMessage";
/** Interface da mensagem de tipo enquete */
export default interface IPollMessage extends IMessage {
    readonly type: MessageType.Poll | MessageType.PollUpdate;
    /** Last hash votes */
    votes: {
        [user: string]: string[];
    };
    /** Opções da enquete */
    options: PollOption[];
    /** Chave secreta da enquete */
    secretKey: Uint8Array;
    /** Ação da enquete */
    action: PollAction;
    /** Adiciona uma opção a enquete
     * @param name Nome da opção
     * @param id ID da opção
     */
    addOption(name: string, id?: string): void;
    /** Remove uma opção
     * @param option Opção que será removida
     */
    removeOption(option: PollOption): void;
    /**
     * @param user Usuário que contem os votos
     * @returns Retorna os votos de um usuário
     */
    getUserVotes(user: string): string[];
    /** Salva os votos de um usuário
     * @param user Usuário que contem os votos
     */
    setUserVotes(user: string, hashVotes: string[]): void;
}
