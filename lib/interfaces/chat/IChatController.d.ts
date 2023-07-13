/// <reference types="node" />
import type { ChatStatus } from "../../types/chat/ChatStatus";
import IClientModule from "../client/IClientModule";
import IMessage from "../message/IMessage";
import IUser from "../user/IUser";
/** Interface do controlador da sala de bate-papo */
export default interface IChatController extends IClientModule {
    /** @returns Retorna o nome da sala de bate-papo */
    getName(): Promise<string>;
    /** Define o nome da sala de bate-pao
     * @param name Nome da sala de bate-papo
     */
    setName(name: string): Promise<void>;
    /** @returns Retorna a descrição da sala de bate-papo */
    getDescription(): Promise<string>;
    /**
     * Define a descrição da sala de bate-papo
     * @param description Descrição da sala de bate-papo
     */
    setDescription(description: string): Promise<void>;
    /** @returns Retorna a imagem de perfil da sala de bate-papo */
    getProfile(): Promise<Buffer>;
    /**
     * Define a foto de perfil da sala de bate-papo
     * @param image Nova foto de perfil da sala de bate-papo
     */
    setProfile(image: Buffer): Promise<void>;
    /**
     * @param user Usuário que será verificado
     * @returns Retorna se o usuário é administrador da sala de bate-papo
     */
    isAdmin(user: IUser | string): Promise<boolean>;
    /**
     * @param user Usuário que será verificado
     * @returns Retorna se o usuário é lider da sala de bate-papo
     */
    isLeader(user: IUser | string): Promise<boolean>;
    /** @returns Retorna os administradores da sala de bate-papo */
    getAdmins(): Promise<Record<string, IUser>>;
    /** @returns Retorna os usuários da sala de bate-papo */
    getUsers(): Promise<Record<string, IUser>>;
    /**
     * Adiciona um usuário a sala de bate-papo
     * @param user Usuário que será adicionado
     */
    addUser(user: IUser | string): Promise<void>;
    /**
     * Remove um usuário da sala de bate-papo
     * @param user Uusário que será removido
     */
    removeUser(user: IUser | string): Promise<void>;
    /**
     * Promove a administrador um usuário da sala de bate-papo
     * @param user Usuário que será promovido
     */
    promote(user: IUser | string): Promise<void>;
    /**
     * * Remove o administrador de um usuário da sala de bate-papo
     * @param user Usuário que terá sua administração removida
     */
    demote(user: IUser | string): Promise<void>;
    /** Sai da sala de bate-papo */
    leave(): Promise<void>;
    /**
     * Envia uma mensagem na sala de bate-papo que a mensagem foi enviada
     * @param message Mensagem que será enviada
     */
    send(message: IMessage | string): Promise<IMessage>;
    /**
     * Altera o status da sala de bate-pappo
     * @param status Status da sala de bate-papo
     */
    changeStatus(status: ChatStatus): Promise<void>;
}
