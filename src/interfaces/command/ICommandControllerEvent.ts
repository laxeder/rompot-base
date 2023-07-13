import type { CommandControllerEventsMap } from "../../types/command/CommandControllerEventsMap";

import { EventEmitter } from "events";

/** Interface do controlador de eventos do comando */
export default interface ICommandControllerEvent {
  ev: EventEmitter;

  on<T extends keyof CommandControllerEventsMap>(eventName: T, listener: (arg: CommandControllerEventsMap[T]) => any): void;

  off<T extends keyof CommandControllerEventsMap>(eventName: T, listener: (arg: CommandControllerEventsMap[T]) => any): void;

  removeAllListeners<T extends keyof CommandControllerEventsMap>(event: T): void;

  emit<T extends keyof CommandControllerEventsMap>(eventName: T, arg: CommandControllerEventsMap[T]): boolean;
}
