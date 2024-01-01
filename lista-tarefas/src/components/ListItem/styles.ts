import styled from "styled-components";


type ContainerProps = {
    done: boolean;
}

export const Container = styled.div<ContainerProps>(( {done }: ContainerProps) =>(`
    display: flex;
    background: #20212C;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    align-items: center;


    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;        
    }

    label{
        font-size: 25px;
        color: #FFF;
        text-decoration: ${done ? 'line-through' : 'none'};

        
    }
`
));
