export interface Item {
    name: string;
    quantity: number;
}

export interface SavedLists {
    name: string;
    items: Item[];
}

export interface ShoppingListContextType {
    items: Item[];
    savedLists: SavedLists[];
    addItem: (name: string, quantity: number) => void
    removeItem: (index: number) => void
    saveList: (nameList: string) => void
}