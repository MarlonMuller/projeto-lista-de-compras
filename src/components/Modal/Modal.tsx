import { useState } from "react"
import { useShoppingListContext } from "../../contexts"
import type { ModalProps } from "./Modal.types";


export const Modal = ( {onClose}: ModalProps) => {
    const [listName, setListName] = useState<string>("");
    const { saveList } = useShoppingListContext();

    function handleSaveList() {
        if(listName.trim() !== "") {
            saveList(listName)
            onClose()
        }
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Salvar List de Compras</h2>
                <input type="text" value={listName} placeholder="Nome da lista" onChange={(e) => setListName(e.target.value)} />
                <button onClick={handleSaveList}>Salvar</button>
                <button onClick={onClose}>Cancelar</button>
            </div>
        </div>
    )
}