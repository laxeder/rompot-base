import type { BotEventsMap } from "../../types/bot/BotEventsMap";

import { EventEmitter } from "events";

/** Interface dos eventos do bot */
export default interface IBotEvents {
  ev: EventEmitter;

  on<T extends keyof BotEventsMap>(eventName: T, listener: (arg: BotEventsMap[T]) => void): void;

  off<T extends keyof BotEventsMap>(eventName: T, listener: (arg: BotEventsMap[T]) => void): void;

  removeAllListeners<T extends keyof BotEventsMap>(event: T): void;

  emit<T extends keyof BotEventsMap>(eventName: T, arg: BotEventsMap[T]): boolean;
}
