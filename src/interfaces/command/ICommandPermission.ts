/** Interface de permissão do comando */
export default interface ICommandPermission {
  /** Identificador da permissão */
  id: string;
  /** Se tem permissão */
  isPermited?: boolean;
}
