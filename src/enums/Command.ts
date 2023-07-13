/** Permissões do comando */
export enum CMDPerms {
  /** Permitido apenas ser executado no pv */
  ChatPv = "chat-pv",
  /** Permitido apenas ser executado em grupos */
  ChatGroup = "chat-group",
  /** Permitido apenas se o usuário for admin do chat */
  UserChatAdmin = "chat-admin",
  /** Permitido apenas se o usuário for líder do chat */
  UserChatLeader = "chat-leader",
  /** Permitido apenas se o bot for admin do chat */
  BotChatAdmin = "bot-chat-admin",
  /** Permitido apenas se o  bot for líder do chat */
  BotChatLeader = "bot-chat-leader",
}

/** Tipo da chave do comando */
export enum CMDKeyType {
  /** Chaves simples (includes all) */
  Sample = "sample",
  /** Chave exata (startsWith) */
  Exact = "exact",
}

/** Tipo da execução do comando */
export enum CMDRunType {
  /** Execução normal */
  Exec = "exec",
  /** Resposta ao comando */
  Reply = "reply",
}
