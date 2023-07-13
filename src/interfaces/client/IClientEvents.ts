import type { ClientEventsMap } from "../../types/client/ClientEventsMap";

import { EventEmitter } from "events";

/** Interface dos eventos do cliente */
export default interface IClientEvents {
  ev: EventEmitter;

  on<T extends keyof ClientEventsMap>(eventName: T, listener: (arg: ClientEventsMap[T]) => void): void;

  off<T extends keyof ClientEventsMap>(eventName: T, listener: (arg: ClientEventsMap[T]) => void): void;

  removeAllListeners<T extends keyof ClientEventsMap>(event: T): void;

  emit<T extends keyof ClientEventsMap>(eventName: T, arg: ClientEventsMap[T]): boolean;
}
