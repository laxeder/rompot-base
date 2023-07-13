import IMessage from "@interfaces/message/IMessage";

export type PromiseMessage = Record<string, Array<PromiseMessageConfig>>;

export type PromiseMessageConfig = {
  stopRead: boolean;
  ignoreMessageFromMe: boolean;
  ignoreMessages: IMessage[];
  resolve(message: IMessage): void;
};
