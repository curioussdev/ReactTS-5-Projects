import { useState, KeyboardEvent }  from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState<string>('')

    const handleChange = (e: any)  => {
        setInputText(e.target.value);
    }

    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
        }
    };


    return (
        <C.Container>
            <div className="image">+</div>
            <input type="text"
                placeholder='Adicione uma tarefa'
                value={inputText} onChange={handleChange}
                onKeyUp={handleKeyUp}
            />
        </C.Container>

    )
}