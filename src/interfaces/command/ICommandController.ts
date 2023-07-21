import IMessage from "@interfaces/message/IMessage";

import ICommandControllerConfig from "./ICommandControllerConfig";
import ICommandControllerEvent from "./ICommandControllerEvent";
import IClientModule from "../client/IClientModule";
import ICommand from "./ICommand";

/** Interface do controlador de comandos */
export default interface ICommandController extends ICommandControllerEvent, IClientModule {
  /** Configuração do controlador */
  config: ICommandControllerConfig;
  /** Comandos */
  commands: ICommand[];

  /** Define os comandos
   * @param commands Novos comandos
   * */
  setCommands(commands: ICommand[]): void;

  /** @retuns Retorna os comandos */
  getCommands(): ICommand[];

  /** Adiciona um comando
   * @param command Novo comando
   */
  addCommand(command: ICommand): void;

  /**
   * Remove um comando
   * @param command Comando que será removido
   * */
  removeCommand(command: ICommand): boolean;

  /** Busca pelo comando
   * @param text Texto onde será verificado se inclui o comando
   */
  searchCommand(text: string): ICommand | null;

  /** Execução do comando
   * @param command Comando que será executado
   * @param message Mensagem que chamou o comando
   * @param type Tipo da execução doo comando
   */
  runCommand(command: ICommand, message: IMessage, type?: string): any;

  /** Executa o comando
   * @param message Mensagem que chamou o comando
   * @param command Comando que será executado
   */
  execCommand(message: IMessage, command: ICommand): any;

  /** Resposta ao comando
   * @param message Mensagem que chamou o comando
   * @param command Comando que receberá a resposta
   */
  replyCommand(message: IMessage, command: ICommand): any;
}
