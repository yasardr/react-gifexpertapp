import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';


describe('Probando el hook useFetchGifs', () => { 
    test('debe de retornar el estado inicial', async() => { 
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Piece' ) );
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect( data ).toEqual([]);
        expect( loading ).toEqual(true);
    });
    
    test('debe de retornar un arreglo de imgs y el loading en false', async() => { 
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Piece' ) );
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect( data.length ).toBe( 10 );
        expect( loading ).toBe(false);
    });
});