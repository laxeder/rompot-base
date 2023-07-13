import type { PromiseMessage, PromiseMessageConfig } from "../../types/client/PromiseMessages";
import IMessage from "../message/IMessage";
export default interface IPromiseMessages {
    /** Mensagens em promessa */
    promisses: PromiseMessage;
    /** Adiciona uma nova promessa de mensagem
     * @param chatId Sala de bate-papo que irá receber a mensagem
     * @param config Configuração da promessa de mensagem
     */
    addPromiseMessage(chatId: string, config: Partial<PromiseMessageConfig>): Promise<IMessage>;
    /** Resolve promessas de mensagens que estão esperando ser recebidas
     * @param message Mensagem recebida
     * @returns Retorna se é para continuar a leitura da mensagem na sala de bate-papo ou não
     */
    resolvePromiseMessages(message: IMessage): boolean;
}
