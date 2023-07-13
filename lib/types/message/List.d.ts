/** Lista */
export type List = {
    /** Titulo da lista */
    title: string;
    /** Itens da lista */
    items: ListItem[];
};
/** Item da lista */
export type ListItem = {
    /** Titulo do item */
    title: string;
    /** Descrição do item */
    description: string;
    /** Identificador do item */
    id: string;
};
