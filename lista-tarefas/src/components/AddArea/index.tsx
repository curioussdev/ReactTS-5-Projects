import { useState } from 'react';
import * as C from './styles';

export const AddArea = () => {
    const [inputText, setInputText] = useState('')
    return (
        <C.Container>
            <div className="image">+</div>
            <input type="text"
                placeholder='Adicione uma tarefa'
            />
        </C.Container>

    )
}