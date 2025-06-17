type HeaderProps = {
    nomeDoCliente?: String,
    idadeDoCliente? : String,
}

function Header({nomeDoCliente, idadeDoCliente}: HeaderProps) {

    return (
        <>
            PAINEL ADMINISTRATIVO ONP - Usuário Logado: {nomeDoCliente} - {idadeDoCliente}
        </>
    )
}


export default Header;