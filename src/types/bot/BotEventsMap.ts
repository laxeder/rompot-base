import type { ConnectionType } from "../connection/ConnectionType";
import type { UserAction, UserEvent } from "../user";
import type { ChatAction } from "../chat/ChatAction";

import IMessage from "@interfaces/message/IMessage";
import IChat from "@interfaces/chat/IChat";
import IUser from "@interfaces/user/IUser";

export type BotEventsMap = {
  /** Conexão alterada */
  conn: { action: ConnectionType; isNewLogin?: boolean; qr?: string };

  /** Bot conectou */
  open: { isNewLogin: boolean };

  /** Bot está reconectando */
  reconnecting: {};

  /** Bot está conectando */
  connecting: {};

  /** Conexão parada */
  stop: {};

  /** Conexão fechada */
  close: {};

  /** QR code gerado */
  qr: string;

  /** Código de autenticação gerado */
  code: string;

  /** Evento do usuário */
  user: { action: UserAction; event: UserEvent; chat: IChat; user: IUser; fromUser: IUser };

  /** Evento da sala de bate-papo */
  chat: { action: ChatAction; chat: IChat };

  /** Nova mensagem */
  message: IMessage;

  /** Erro ocorrido */
  error: Error;
};
