import { MessageType } from "@enums/Message";

import IMediaMessage from "./IMediaMessage";

/** Interface da mensagem de tipo audio */
export default interface IAudioMessage extends IMediaMessage {
  readonly type: MessageType.Audio;

  /** @returns Retorna o aúdio da mensagem */
  getAudio(): Promise<Buffer>;
}
