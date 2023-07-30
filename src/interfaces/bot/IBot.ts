import type { ChatStatus } from "../../types/chat/ChatStatus";
import type { BotStatus } from "../../types/bot/BotStatus";
import type { Media } from "../../types/message/Media";

import IReactionMessage from "@interfaces/message/IReactionMessage";
import IMessage from "@interfaces/message/IMessage";
import IChat from "@interfaces/chat/IChat";
import IUser from "@interfaces/user/IUser";

import IBotEvents from "./IBotEvents";
import IAuth from "./IAuth";

/** Interface do bot */
export default interface IBot {
  //! =================================================================
  //! ========== CONFIGURAÇÃO
  //! =================================================================

  /** ID do bot */
  id: string;

  /* Status do Client */
  status: BotStatus;

  /** Gerenciador de eventos */
  ev: IBotEvents;

  //! =================================================================
  //! ========== CONEXÃO
  //! =================================================================

  /** Conectar bot
   * @param auth Autenticação do bot
   */
  connect(auth: IAuth | string): Promise<void>;

  /**
   * * Conectar bot por código
   * @param number Número do bot
   * @param auth Autenticação do bot
   */
  connectFromCode(number: number, auth: IAuth | string): Promise<string>;

  /** Reconectar bot
   * @param alert Alerta que está reconectando
   */
  reconnect(alert?: boolean): Promise<void>;

  /** Parar bot
   * @param reason Razão por parar o bot
   */
  stop(reason?: any): Promise<void>;

  //! =================================================================
  //! ========== MENSAGEM
  //! =================================================================

  /** Marca uma mensagem como visualizada
   * @param message Mensagem que será visualizada
   */
  readMessage(message: IMessage): Promise<void>;

  /** Adiciona uma reação na mensagem
   * @param message Mensagem
   * @param reaction Reação
   */
  addReaction(message: IReactionMessage): Promise<void>;

  /** Remove a reação da mensagem
   * @param Mensagem que terá sua reação removida
   */
  removeReaction(message: IReactionMessage): Promise<void>;

  /** Edita o texto de uma mensagem enviada
   * @param message Mensagem com o texto editado
   */
  editMessage(message: IMessage): Promise<void>;

  /** Enviar mensagem
   * @param message Mensagem que será enviada
   */
  send(message: IMessage): Promise<IMessage>;

  /** Remover mensagem
   * @param message Mensagem que será removida da sala de bate-papo
   */
  removeMessage(message: IMessage): Promise<void>;

  /** Deletar mensagem
   * @param message Mensagem que será deletada da sala de bate-papos
   */
  deleteMessage(message: IMessage): Promise<void>;

  /** Retorna a stream da mídia
   * @param message Mídia que será baixada
   * @returns Stream da mídia
   */
  downloadStreamMessage(media: Media): Promise<Buffer>;

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

  /** Define foto de perfil do bot
   * @param image Foto de perfil do bot
   */
  setBotProfile(image: Buffer): Promise<void>;

  //! =================================================================
  //! ========== SALA DE BATE-PAPO
  //! =================================================================

  /** Adiciona uma sala de bate-papo
   * @param chat Sala de bate-papo
   */
  addChat(chat: IChat): Promise<void>;

  /** Remove uma sala de bate-papo
   * @param chat Sala de bate-papo
   */
  removeChat(chat: IChat): Promise<void>;

  /** Adiciona um novo usuário a uma sala de bate-papo
   * @param chat Sala de bate-papo
   * @param user Usuário
   */
  addUserInChat(chat: IChat, user: IUser): Promise<void>;

  /** Adiciona um novo usuário a uma sala de bate-papo
   * @param chat Sala de bate-papo
   * @param user Usuário
   */
  removeUserInChat(chat: IChat, user: IUser): Promise<void>;

  /** Promove há administrador um usuário da sala de bate-papo
   * @param chat Sala de bate-papo
   * @param user Usuário
   */
  promoteUserInChat(chat: IChat, user: IUser): Promise<void>;

  /** Remove a administração um usuário da sala de bate-papo
   * @param chat Sala de bate-papo
   * @param user Usuário
   */
  demoteUserInChat(chat: IChat, user: IUser): Promise<void>;

  /** Altera o status da sala de bate-papo
   * @param chat Sala de bate-papo
   * @param status Status da sala de bate-papo
   */
  changeChatStatus(chat: IChat, status: ChatStatus): Promise<void>;

  /** Cria uma sala de bate-papo
   * @param chat Sala de bate-papo
   */
  createChat(chat: IChat): Promise<void>;

  /** Sai de uma sala de bate-papo
   * @param chat Sala de bate-papo
   */
  leaveChat(chat: IChat): Promise<void>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna uma sala de bate-papo
   */
  getChat(chat: IChat): Promise<IChat | null>;

  /** Define uma sala de bate-papo
   * @param chat Sala de bate-papo
   */
  setChat(chat: IChat): Promise<void>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna o nome da sala de bate-papo
   */
  getChatName(chat: IChat): Promise<string>;

  /** Define o nome da sala de bate-papo
   * @param chat Sala de bate-papo
   * @param name Nome da sala de bate-papo
   */
  setChatName(chat: IChat, name: string): Promise<void>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna a descrição da sala de bate-papo
   */
  getChatDescription(chat: IChat): Promise<string>;

  /** Define a descrição da sala de bate-papo
   * @param chat Sala de bate-papo
   * @param description Descrição da sala de bate-papo
   */
  setChatDescription(chat: IChat, description: string): Promise<void>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna a imagem de perfil da sala de bate-papo
   */
  getChatProfile(chat: IChat): Promise<Buffer>;

  /** Define a imagem de perfil da sala de bate-papo
   * @param chat Sala de bate-papo
   * @param profile Imagem de perfil da sala de bate-papo
   */
  setChatProfile(chat: IChat, profile: Buffer): Promise<void>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna os usuários de uma sala de bate-papo
   */
  getChatUsers(chat: IChat): Promise<Record<string, IUser>>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna os administradores de uma sala de bate-papo
   */
  getChatAdmins(chat: IChat): Promise<Record<string, IUser>>;

  /**
   * @param chat Sala de bate-papo
   * @returns Retorna o lider da sala de bate-papo
   */
  getChatLeader(chat: IChat): Promise<IUser>;

  /**
   * @returns Retorna as sala de bate-papo que o bot está
   */
  getChats(): Promise<Record<string, IChat>>;

  /** Define as salas de bate-papo que o bot está
   * @param chats Salas de bate-papo
   */
  setChats(chats: Record<string, IChat>): Promise<void>;

  //! =================================================================
  //! ========== USUÁRIO
  //! =================================================================

  /** Adiciona um novo usuário
   * @param user Usuário
   */
  addUser(user: IUser): Promise<void>;

  /** Remove um usuário
   * @param user Usuário
   */
  removeUser(user: IUser): Promise<void>;

  /**
   * @param user Usuário
   * @returns Retorna um usuário
   */
  getUser(user: IUser): Promise<IUser | null>;

  /** Define um usuário
   * @param user Usuário
   */
  setUser(user: IUser): Promise<void>;

  /**
   * @param user Usuário
   * @returns Retorna o nome do usuário
   */
  getUserName(user: IUser): Promise<string>;

  /** Define o nome do usuário
   * @param user Usuário
   * @param name Nome do usuário
   */
  setUserName(user: IUser, name: string): Promise<void>;

  /**
   * @param user Usuário
   * @returns Retorna a descrição do usuário
   */
  getUserDescription(user: IUser): Promise<string>;

  /** Define a descrição do usuário
   * @param user Usuário
   * @param description Descrição do usuário
   */
  setUserDescription(user: IUser, description: string): Promise<void>;

  /**
   * @param user Usuário
   * @returns Retorna a foto de perfil do usuário
   */
  getUserProfile(user: IUser): Promise<Buffer>;

  /** Define a foto de perfil do usuário
   * @param user Usuário
   * @param profile Imagem de perfil do usuário
   */
  setUserProfile(user: IUser, profile: Buffer): Promise<void>;

  /** Desbloqueia um usuário
   * @param user Usuário
   */
  unblockUser(user: IUser): Promise<void>;

  /** Bloqueia um usuário
   * @param user Usuário
   */
  blockUser(user: IUser): Promise<void>;

  /** @returns Retorna a lista de usuários do bot */
  getUsers(): Promise<Record<string, IUser>>;

  /** Define a lista de usuários do bot
   * @param users Usuários
   */
  setUsers(users: Record<string, IUser>): Promise<void>;
}
