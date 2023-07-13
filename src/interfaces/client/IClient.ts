import type { PromiseMessageConfig } from "../../types/client";
import type { ConnectionConfig } from "../../types/connection";
import type { ChatStatus } from "../../types/chat/ChatStatus";
import type { BotStatus } from "../../types/bot/BotStatus";

import ICommandController from "@interfaces/command/ICommandController";
import IMediaMessage from "@interfaces/message/IMediaMessage";
import IMessage from "@interfaces/message/IMessage";
import IAuth from "@interfaces/bot/IAuth";

import ICommand from "@interfaces/command/ICommand";
import IChat from "@interfaces/chat/IChat";
import IUser from "@interfaces/user/IUser";
import IBot from "@interfaces/bot/IBot";

import IPromiseMessages from "./IPromiseMessage";
import IClientEvents from "./IClientEvents";

export default interface IClient extends IClientEvents {
  //! =================================================================
  //! ========== CONFIGURAÇÃO
  //! =================================================================

  /** Bot */
  bot: IBot;
  /** Configuração */
  config: ConnectionConfig;
  /** * Vezes que o bot reconectou */
  reconnectTimes: number;
  /** Espera de mensagens */
  promiseMessages: IPromiseMessages;
  /** Controlador de comandos  */
  commandController: ICommandController;

  get id();

  set id(id: string);

  get status();

  set status(status: BotStatus);

  /** Configura os eventos do cliente */
  configEvents(): void;

  //! =================================================================
  //! ========== COMANDO
  //! =================================================================

  /** Define os comandos do bot
   * @param commands Comandos que será injetado
   */
  setCommands(commands: ICommand[]): void;

  /** @returns Retorna os comandos do bot */
  getCommands(): ICommand[];

  /** Adiciona um comando na lista de comandos
   * @param command Comando que será adicionado
   */
  addCommand(command: ICommand): void;

  /** Remove um comando na lista de comandos
   * @param command Comando que será removido
   */
  removeCommand(command: ICommand): boolean;

  /** Procura um comando no texto */
  searchCommand(text: string): ICommand | null;

  /** Execução do comando */
  runCommand(command: ICommand, message: IMessage, type?: string): any;

  //! =================================================================
  //! ========== CONEXÃO
  //! =================================================================

  /** Conectar bot
   * @param auth Autenticação do bot
   */
  connect(auth: IAuth | string): Promise<void>;

  /** Reconectar bot
   * @param alert Alerta que está reconectando
   */
  reconnect(alert?: boolean): Promise<void>;

  /** Parar bot
   * @param reason Razão por parar bot
   */
  stop(reason?: any): Promise<void>;

  //! =================================================================
  //! ========== MENSAGEM
  //! =================================================================

  /** Adiciona uma reação na mensagem
   * @param message Mensagem
   * @param reaction Reação
   */
  addReaction(message: IMessage, reaction?: string): Promise<void>;

  /** Remove a reação da mensagem
   * @param message Mensagem que terá sua reação removida
   */
  removeReaction(message: IMessage): Promise<void>;

  /** Adiciona animações na reação da mensagem
   * @param message Mensagem que receberá a animação
   * @param reactions Reações em sequência
   * @param interval Intervalo entre cada reação
   * @param maxTimeout Maximo de tempo reagindo
   */
  addAnimatedReaction(message: IMessage, reactions: string[], interval?: number, maxTimeout?: number): (reactionStop?: string) => Promise<void>;

  /** Marca uma mensagem como visualizada
   * @param message Mensagem que será visualizada
   */
  readMessage(message: IMessage): Promise<void>;

  /** Edita o texto de uma mensagem enviada
   * @param message Mensagem que será editada
   * @param text Novo texto da mensagem
   */
  editMessage(message: IMessage, text: string): Promise<void>;

  /** Envia uma mensagem
   * @param message Menssagem que será enviada
   * @returns Retorna o conteudo enviado
   */
  send(message: IMessage): Promise<IMessage>;

  /** Envia uma mensagem
   * @param chat Sala de bate-papo onde irá ser enviado a mensagem
   * @param message Mensagem que será enviada
   * @param mention Mensagem que será mencionada
   */
  sendMessage(chat: IChat | string, message: string | IMessage, mention?: IMessage): Promise<IMessage>;

  /** Aguarda uma mensagem ser recebida em uma sala de bate-papo
   * @param chatId Sala de bate-papo que irá receber a mensagem
   * @param config Configuração do aguardo da mensagem
   */
  awaitMessage(chat: IChat | string, config: Partial<PromiseMessageConfig>): Promise<IMessage>;

  /** Remover mensagem
   * @param message Mensagem que será removida da sala de bate-papo
   */
  removeMessage(message: IMessage): Promise<void>;

  /**
   * * Deletar mensagem
   * @param message Mensagem que será deletada da sala de bate-papos
   */
  deleteMessage(message: IMessage): Promise<void>;

  /** Retorna a stream da mídia
   * @param message Mídia que será baixada
   * @returns Stream da mídia
   */
  downloadStreamMessage(message: IMediaMessage): Promise<Buffer>;

  //! =================================================================
  //! ========== BOT
  //! =================================================================

  /** @returns Retorna o nome do bot */
  getBotName(): Promise<string>;

  /** Define o nome do bot
   * @param name Nome do bot
   */
  setBotName(name: string): Promise<void>;

  /** @returns Retorna a descrição do bot */
  getBotDescription(): Promise<string>;

  /** Define a descrição do bot
   * @param description Descrição do bot
   */
  setBotDescription(description: string): Promise<void>;

  /** @returns Retorna foto de perfil do bot */
  getBotProfile(): Promise<Buffer>;

  /** Define a imagem de perfil do bot
   * @param image Imagem de perfil do bot
   */
  setBotProfile(image: Buffer): Promise<void>;

  //! =================================================================
  //! ========== SALA DE BATE-PAPO
  //! =================================================================

  /** Adiciona uma sala de bate-papo
   * @param chat Sala de bate-papo
   */
  addChat(chat: IChat | string): Promise<void>;

  /** Remove uma sala de bate-papo
   * @param chat Sala de bate-papo
   */
  removeChat(chat: IChat | string): Promise<void>;

  /** Adiciona um novo usuário a uma sala de bate-papo
   * @param chat Sala de bate-papo
   * @param user Usuário
   */
  addUserInChat(chat: IChat | string, user: IUser | string): Promise<void>;

  /** Adiciona um novo usuário a uma sala de bate-papo
   * @param chat Sala de bate-papo
   * @param user Usuário
   */
  removeUserInChat(chat: IChat | string, user: IUser | string): Promise<void>;

  /** Promove há administrador um usuário da sala de bate-papo
   * @param chat Sala de bate-papo
   * @param user Usuário
   */
  promoteUserInChat(chat: IChat | string, user: IUser | string): Promise<void>;

  /** Remove a administração um usuário da sala de bate-papo
   * @param chat Sala de bate-papo
   * @param user Usuário
   */
  demoteUserInChat(chat: IChat | string, user: IUser | string): Promise<void>;

  /** Altera o status da sala de bate-papo
   * @param chat Sala de bate-papo
   * @param status Status da sala de bate-papo
   */
  changeChatStatus(chat: IChat | string, status: ChatStatus): Promise<void>;

  /** Cria uma sala de bate-papo
   * @param chat Sala de bate-papo
   */
  createChat(chat: IChat): Promise<void>;

  /** Sai de uma sala de bate-papo
   * @param chat Sala de bate-papo
   */
  leaveChat(chat: IChat | string): Promise<void>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna uma sala de bate-papo
   */
  getChat(chat: IChat | string): Promise<IChat | null>;

  /** Define uma sala de bate-papo
   * @param chat Sala de bate-papo
   */
  setChat(chat: IChat): Promise<void>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna o nome da sala de bate-papo
   */
  getChatName(chat: IChat | string): Promise<string>;

  /** Define o nome da sala de bate-papo
   * @param chat Sala de bate-papo
   * @param name Nome da sala de bate-papo
   */
  setChatName(chat: IChat | string, name: string): Promise<void>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna a descrição da sala de bate-papo
   */
  getChatDescription(chat: IChat | string): Promise<string>;

  /** Define a descrição da sala de bate-papo
   * @param chat Sala de bate-papo
   * @param description Descrição da sala de bate-papo
   */
  setChatDescription(chat: IChat | string, description: string): Promise<void>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna a imagem de perfil da sala de bate-papo
   */
  getChatProfile(chat: IChat | string): Promise<Buffer>;

  /** Define a imagem de perfil da sala de bate-papo
   * @param chat Sala de bate-papo
   * @param profile Imagem de perfil da sala de bate-papo
   */
  setChatProfile(chat: IChat | string, profile: Buffer): Promise<void>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna os usuários de uma sala de bate-papo
   */
  getChatUsers(chat: IChat | string): Promise<Record<string, IUser>>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna os administradores de uma sala de bate-papo
   */
  getChatAdmins(chat: IChat | string): Promise<Record<string, IUser>>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna o lider da sala de bate-papo
   */
  getChatLeader(chat: IChat | string): Promise<IUser>;

  /** @returns Retorna as sala de bate-papo que o bot está */
  getChats(): Promise<Record<string, IChat>>;

  /** Define as salas de bate-papo que o bot está
   * @param chats Salas de bate-papo
   */
  setChats(chats: Record<string, IChat>): Promise<void>;

  //! =================================================================
  //! ========== USUÀRIO
  //! =================================================================

  /** Adiciona um novo usuário
   * @param user Usuário
   */
  addUser(user: IUser | string): Promise<void>;

  /** Remove um usuário
   * @param user Usuário
   */
  removeUser(user: IUser | string): Promise<void>;

  /**
   * @param user Usuário
   * @returns Retorna um usuário
   */
  getUser(user: IUser | string): Promise<IUser | null>;

  /** Define um usuário
   * @param user Usuário
   */
  setUser(user: IUser | string): Promise<void>;

  /**
   * @param user Usuário
   * @returns Retorna o nome do usuário
   */
  getUserName(user: IUser | string): Promise<string>;

  /** Define o nome do usuário
   * @param user Usuário
   * @param name Nome do usuário
   */
  setUserName(user: IUser | string, name: string): Promise<void>;

  /**
   * @param user Usuário
   * @returns Retorna a descrição do usuário
   */
  getUserDescription(user: IUser | string): Promise<string>;

  /** Define a descrição do usuário
   * @param user Usuário
   * @param description Descrição do usuário
   */
  setUserDescription(user: IUser | string, description: string): Promise<void>;

  /**
   * @param user Usuário
   * @returns Retorna a foto de perfil do usuário
   */
  getUserProfile(user: IUser | string): Promise<Buffer>;

  /** Define a imagem de perfil do usuário
   * @param user Usuário
   * @param profile Imagem de perfil do usuário
   */
  setUserProfile(user: IUser | string, profile: Buffer): Promise<void>;

  /** Desbloqueia um usuário
   * @param user Usuário
   */
  unblockUser(user: IUser | string): Promise<void>;

  /** Bloqueia um usuário
   * @param user Usuário
   */
  blockUser(user: IUser | string): Promise<void>;

  /** @returns Retorna a lista de usuários do bot */
  getUsers(): Promise<Record<string, IUser>>;

  /** Define a lista de usuários do bot
   * @param users Usuários
   */
  setUsers(users: Record<string, IUser>): Promise<void>;
}
