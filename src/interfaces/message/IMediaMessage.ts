import type { Media } from "../../types/message";

import IMessage from "./IMessage";

/** Interface da mensagem de tipo mídia */
export default interface IMediaMessage extends IMessage {
  /** Arquivo da mensagem */
  file: Media | Buffer | string;
  /** O arquivo é um GIF */
  isGIF: boolean;
  /** MimeType */
  mimetype: string;
  /** Nome do arquivo */
  name: string;

  /** @returns Obter arquivo */
  getStream(): Promise<Buffer>;
}
