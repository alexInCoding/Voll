import styled from 'styled-components'
import facebook from './assets/facebook.png'
import google from './assets/google.png'
import instagram from './assets/instagram.png'
import whatsapp from './assets/whatsapp.png'

const RodapeEstilizado = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-claro);
    text-align: center;
`

const ListaEstilizada = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 10%;
    margin: 1em auto;
`

const ItemEstilizado = styled.li`
    list-style-type: none;
`

function Rodape() {
    return (
        <RodapeEstilizado>
            <ListaEstilizada>
                <ItemEstilizado>
                    <a href='#'>
                        <img src={facebook} alt='logo do Facebook'/>
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href='#'>
                        <img src={google} alt='logo do Google'/>
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href='#'>
                        <img src={instagram} alt='logo do Instagram'/>
                    </a>
                </ItemEstilizado>
                <ItemEstilizado>
                    <a href='#'>
                        <img src={whatsapp} alt='logo do Whatsapp'/>
                    </a>
                </ItemEstilizado>
            </ListaEstilizada>
            <p>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
        </RodapeEstilizado>
    )
}

export default Rodape
