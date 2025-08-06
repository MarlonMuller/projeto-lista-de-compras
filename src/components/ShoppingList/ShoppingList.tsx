import { useShoppingListContext } from "../../contexts"
import { AddItem } from "../AddItem"

export const ShoppingList = () => {
    const { items } = useShoppingListContext();
    return (
        <div className="shopping-ist">
            <h2>Lista de compras</h2>
            <AddItem />
            {items.map((item) => {
                return (
                    <>
                        <p>{item.name}</p>
                        <p>{item.quantity}</p>
                    </>
                )
            })}
        </div>
    )
}