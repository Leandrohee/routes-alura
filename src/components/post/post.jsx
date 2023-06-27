import './post.css'

export default function Post({img,titulo}){

    return(
        <div className='post'>
            <img className='capa' src={img}/>
            <h2 className='titulo'>{titulo}</h2>
            <button className='botaoLer'>Ler</button>
        </div>
    )
}