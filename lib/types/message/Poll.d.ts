export type PollOption = {
    /** Identificador da opção */
    id: string;
    /** Nome da opção */
    name: string;
};
/** Ação realizada na enquete */
export type PollAction = "create" | "add" | "remove";
