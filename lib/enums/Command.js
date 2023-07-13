"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMDRunType = exports.CMDKeyType = exports.CMDPerms = void 0;
/** Permissões do comando */
var CMDPerms;
(function (CMDPerms) {
    /** Permitido apenas ser executado no pv */
    CMDPerms["ChatPv"] = "chat-pv";
    /** Permitido apenas ser executado em grupos */
    CMDPerms["ChatGroup"] = "chat-group";
    /** Permitido apenas se o usuário for admin do chat */
    CMDPerms["UserChatAdmin"] = "chat-admin";
    /** Permitido apenas se o usuário for líder do chat */
    CMDPerms["UserChatLeader"] = "chat-leader";
    /** Permitido apenas se o bot for admin do chat */
    CMDPerms["BotChatAdmin"] = "bot-chat-admin";
    /** Permitido apenas se o  bot for líder do chat */
    CMDPerms["BotChatLeader"] = "bot-chat-leader";
})(CMDPerms || (exports.CMDPerms = CMDPerms = {}));
/** Tipo da chave do comando */
var CMDKeyType;
(function (CMDKeyType) {
    /** Chaves simples (includes all) */
    CMDKeyType["Sample"] = "sample";
    /** Chave exata (startsWith) */
    CMDKeyType["Exact"] = "exact";
})(CMDKeyType || (exports.CMDKeyType = CMDKeyType = {}));
/** Tipo da execução do comando */
var CMDRunType;
(function (CMDRunType) {
    /** Execução normal */
    CMDRunType["Exec"] = "exec";
    /** Resposta ao comando */
    CMDRunType["Reply"] = "reply";
})(CMDRunType || (exports.CMDRunType = CMDRunType = {}));
//# sourceMappingURL=Command.js.map