import { useState } from "react";

export const AddItem = () => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    return (
        <div className="add-item">
            <input
                type="text"
                placeholder="Nome do item"
                value={name}
                onChange={(e) => setName(e.target.value)} 
            />
        </div>
    )
}