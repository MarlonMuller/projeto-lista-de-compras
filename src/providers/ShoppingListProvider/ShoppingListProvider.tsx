import { useState, type ReactNode } from "react";
import { ShoppingListContext, type Item, type SavedLists } from "../../contexts";

export const ShoppingListProvider = ({ children}: {children: ReactNode}) => {
    const[items, setItems] = useState<Item[]>([])
    const[savedLists, setSavedLists] = useState<SavedLists[]>([])

    const addItem = (name: string, quantity: number) => {
        setItems((prevState) => [...prevState, {name, quantity}])
    }

    const removeItem = (index: number) => {
        setItems((prevState) => prevState.filter((_, i) => i !== index))
    }

    const saveList = (nameList: string) => {
        setSavedLists((prevState) => [...prevState, {name: nameList, items}])
        setItems([])
    }

    return (
        <ShoppingListContext.Provider value={{items, savedLists, addItem, removeItem, saveList}}>
            {children}
        </ShoppingListContext.Provider>
    )
}