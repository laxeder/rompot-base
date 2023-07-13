export interface ConnectionConfig {
  /** Desativar execução de comando automatico */
  disableAutoCommand: boolean;
  /** Desativar a digitação automatica */
  disableAutoTyping: boolean;
  /** Desativar a leitura automatica de uma mensagem */
  disableAutoRead: boolean;
  /** Máximo de reconexões possíveis */
  maxReconnectTimes: number;
  /** Tempo de aguarde para se reconectar */
  reconnectTimeout: number;
}
