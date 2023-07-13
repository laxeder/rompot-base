export type Button = {
    /** Posição do botão */
    index: number;
    /** Tipo do botão */
    type: ButtonType;
    /** Texto do botão */
    text: string;
    /** Conteúdo do botão */
    content: string;
};
export type ButtonType = "reply" | "call" | "url";
