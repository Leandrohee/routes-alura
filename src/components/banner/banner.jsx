import './banner.css'
import circuloColorido from '../../assets/Mask group.svg'
import minhaFoto from '../../assets/Mask group.png'

export default function Banner(){
    return(
        <div className='banner'>
            <div className='apresentacao'>
                <h1 className='titulo'>
                    Ola, Mundo
                </h1>

                <p className='paragrafo'>
                    Boas vindas ao meu novo espaco pessoal, Eu sou Antonio Evaldo
                </p>
            </div>

            <div className='imagens'>
                <img 
                    className='circuloColorido'
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className='minhaFoto'
                    src={minhaFoto}
                    alt='Foto do Antonio'
                />
            </div>
        </div>
    )
}