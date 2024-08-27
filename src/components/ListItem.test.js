import { render, screen } from "@testing-library/react";
import {act} from 'react';
import ListItem from "./ListItem";

describe('ListItem', () => {
    let product = {
        title: 'Cabbage',
        isFruit: false,
        id: 1
    };
    test('renders a list itemw', ()=> {
        render(<ListItem title={product.title} isFruit={product.isFruit} id={product.id}/>);
        const element = screen.getByText('Cabbage');
        expect(element).toBeInTheDocument();
    })
})