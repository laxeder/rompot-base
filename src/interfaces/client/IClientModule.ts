import IClient from "./IClient";

/** Interface do modulo do cliente */
export default interface IClientModule {
  set client(client: IClient);
  get client(): IClient;
  get clientId(): string;
  set clientId(clientId: string);
}
