import { Item } from "../types/Item";

export function getCurrentMonth() {
    let now = new Date();
    return `${now.getFullYear()} - ${now.getMonth() + 1}`
}

export function filterListByMonth(list:Item[] , date: string): Item[] {
    let newList: Item[] = [];
    let [year, month] = date.split("-");

    for(let i in list) {
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            list[i].date.getMonth() + 1 === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }



    /*
    list.forEach(item => {
        if(item.date.getFullYear() === Number(year) && item.date.getMonth() + 1 === Number(month)) {
            newList.push(item);
        }
    })

*/

    return newList;
}