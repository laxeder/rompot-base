/// <reference types="node" />
import { MessageType } from "../../enums/Message";
import IMediaMessage from "./IMediaMessage";
/** Interface da mensagem de tipo vídeo */
export default interface IVideoMessage extends IMediaMessage {
    readonly type: MessageType.Video;
    /** @returns Retorna o vídeo da mensagem */
    getVideo(): Promise<Buffer>;
}
