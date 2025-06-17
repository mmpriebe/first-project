import Header from "../Header";
import Footer from "../layouts/Footer";


export default function Home(){
    return (
        <div>
            <Header nomeDoCliente ='Marciano Priebe' idadeDoCliente='10' />
                <br /><br /><br /><br /><br /><br />
            <Footer mensagensNaoLigas='20'/>
        </div>
    )
}

