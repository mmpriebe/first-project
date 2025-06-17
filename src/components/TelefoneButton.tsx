import { useState } from "react";

export default function TelefoneButton() {


    const [isVisible, setIsVisible] = useState(true);
    const telefone = '(51) 98409-7822';

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Esconder' : 'Mostrar'} Telefone
            </button>
            <div style={{ display: isVisible ? 'block' : 'none' }}>
                <p>{telefone}</p>
            </div>
        </div>
    )
}