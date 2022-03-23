import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Probando GifGridItem', () => { 
    const title = 'Un título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> );

    test('debe mostrar el componente <GifGridItem /> correctamente', () => { 
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener un párrafo con el title', () => { 
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    });

    test('debe de tener la imagen igual al url y alt de los props', () => { 
        const img = wrapper.find('img');
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    });

    test('debe de tener animate_fadeIn', () => { 
        const div = wrapper.find('div');
        // const className = div.prop('className');
        // expect( className.includes('animate__fadeIn') ).toBe( true );
        expect( div.hasClass('animate__fadeIn') ).toBe( true );
    });
});