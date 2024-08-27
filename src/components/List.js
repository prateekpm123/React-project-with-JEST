import ListItem from "./ListItem";

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
    { title: 'this', isFruit: true, id: 4 },
    { title: 'that', isFruit: true, id: 5 },
];


export default function ShoppingList() {
    const listItems = products.map(product =>
        <ListItem title={product.title} isFruit={product.isFruit} id={product.id}/>
    );

    return (
        <ul>{listItems}</ul> 
    );
}
