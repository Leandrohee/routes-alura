import './inicio.css'
import Banner from "../../components/banner/banner";
import Post from "../../components/post/post";
import posts from "../../json/posts.json"
import foto1 from '../../assets/posts/1/capa.png'
import foto2 from '../../assets/posts/2/capa.png'
import foto3 from '../../assets/posts/3/capa.png'
import foto4 from '../../assets/posts/4/capa.png'
import foto5 from '../../assets/posts/5/capa.png'
import foto6 from '../../assets/posts/6/capa.png'
import foto7 from '../../assets/posts/7/capa.png'
import foto8 from '../../assets/posts/8/capa.png'


export default function Inicio(){

    const fotoPost = [
        foto1,foto2,foto3,foto4,foto5,foto6,foto7,foto8
    ]

    return(
        <>
        <ul className="posts">
            {posts.map(post => {
                return (
                    <li>
                        <Post 
                            key={post.id}
                            titulo={post.titulo} 
                            img={fotoPost[Number(post.id)-1]}
                        />  
                    </li>   
                )
            })}
        </ul>
        </>

    )

}