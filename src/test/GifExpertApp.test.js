import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifExpertApp } from '../GifExpertApp';

describe('Probando GifExpertApp', () => { 
    test('debe de mostrar GifExpertApp correctamente', () => { 
        const wrapper = shallow( <GifExpertApp /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de emostrar una lista de categorias', () => { 
        const categories = ['One Piece', 'Dragon Ball'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories } /> );
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    });
});