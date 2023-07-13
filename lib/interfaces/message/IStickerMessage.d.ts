/// <reference types="node" />
import { MessageType } from "../../enums/Message";
import IMediaMessage from "./IMediaMessage";
/** Interface da mensagem de tipo figura */
export default interface IStickerMessage extends IMediaMessage {
    readonly type: MessageType.Sticker;
    /** * Categoria da figurinha */
    categories: string[];
    /** * ID da figurinha */
    stickerId: string;
    /** * Criador da figurinha */
    author: string;
    /** * Pacote da figurinha */
    pack: string;
    /** @returns Retorna a figura da mensagem */
    getSticker(): Promise<Buffer>;
}
