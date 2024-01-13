import { useState } from "react";

import { Container, Header, HeaderText, Body } from "./styles";

import { Categoy } from "../../types/Category";
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";
import { items } from "../../data/items";

export function Dashboard() {
    const [list, setList] = useState<Item[]>(items);
    const [currentMonth, setCurrentMonth] = useState();
    
    return(
        <Container>
            <Header>
                <HeaderText>Dashboard Finanças</HeaderText>
            </Header>

            <Body>
                CORPO DA DASHBOARD

                {/**ÁREA DE INFORMAÇÕES */}

                {/**ÁREA DE INSERÇÃO */}

                {/**ÁREA DE ITENS */}
            </Body>
        </Container>
    )
}