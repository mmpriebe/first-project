
import TelefoneButton from "../components/TelefoneButton";

type FooterProps = {
    mensagensNaoLigas?: String
}

export default function Footer(props: FooterProps){
    return (
        <>
            <TelefoneButton />
            <br />
            <p>FOOTER</p>

            <p>Você tem <strong>{props.mensagensNaoLigas} mensagens</strong> não lidas.</p>
        </>
    )
}
