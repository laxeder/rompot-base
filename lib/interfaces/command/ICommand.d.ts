import IClientModule from "../client/IClientModule";
import IMessage from "../message/IMessage";
import ICommandControllerConfig from "./ICommandControllerConfig";
import ICommandPermission from "./ICommandPermission";
import ICommandKey from "./ICommandKey";
/** Interface do comando */
export default interface ICommand extends IClientModule {
    keys: ICommandKey[];
    permissions: string[];
    /** Quando o comando está sendo procurado
     * @param text Texto que será verificado se incluí o comando
     * @param config Configuração do controlador de comando
     */
    onSearch(text: string, config: ICommandControllerConfig): ICommandKey | null;
    /** Verifica se o comando pode ser executado
     * @param message Mensagem que está executando o comando
     */
    checkPerms(message: IMessage): Promise<ICommandPermission | null>;
    /** Quando o comando é lido */
    onRead(): any;
    /** Configuração do comando
     * @param message Mensagem que está executando o comando
     */
    onConfig(message: IMessage): any;
    /** Execução do comando
     * @param message Mensagem que está executando o comando
     */
    onExec(message: IMessage): any;
    /** Respota ao comando
     * @param message Mensagem que está executando o comando
     */
    onReply(message: IMessage): any;
}
