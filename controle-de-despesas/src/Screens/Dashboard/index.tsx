import { useState, useEffect } from "react";

import { Container, Header, HeaderText, Body } from "./styles";

import { Categoy } from "../../types/Category";
import { Item } from "../../types/Item";
import { categories } from "../../data/categories";
import { items } from "../../data/items";
import { filterListByMonth, getCurrentMonth } from "../../helpers/dateFilter";
import { TableArea } from "../../components/TableArea";

export function Dashboard() {
    const [list, setList] = useState<Item[]>(items);
    const [filteredList, setFilteredList] = useState<Item[]>([list]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
    

    
    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth));
    }, [list, currentMonth])

    
    
    return(
        <Container>
            <Header>
                <HeaderText>Dashboard Finanças</HeaderText>
            </Header>
            
            <Body>
                
                {/**ÁREA DE INFORMAÇÕES */}

                {/**ÁREA DE INSERÇÃO */}

                {/**ÁREA DE ITENS */}
                <TableArea list={filteredList} />

            </Body>
        </Container>
    );
}