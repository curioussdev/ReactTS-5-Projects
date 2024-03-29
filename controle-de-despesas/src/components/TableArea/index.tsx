import { Table, TableHeadColumn } from './styles';
import { Item } from '../../types/Item';

type Props = {
    list: Item[];
}

export const TableArea = ({ list }: Props) =>{

    console.log(list)
    return(
        <Table>
            <thead>
                <tr>
                    <TableHeadColumn width={100}>Data</TableHeadColumn>
                    <TableHeadColumn width={130}>Categoria</TableHeadColumn>
                    <TableHeadColumn>Título</TableHeadColumn>
                    <TableHeadColumn width={150}>Valor</TableHeadColumn>
                </tr>
            </thead>

            <tbody>
                {list.map((item, index ) => (
                    <tr key={index}>
                        <td></td>
                        <td></td>
                        <td>{item.title} teste</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>

            
        </Table>
    )
}