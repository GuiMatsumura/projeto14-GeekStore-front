import styled from "styled-components";
import { Link } from "react-router-dom"

function Profile () {
    let verdadeiro = true  //pegar user de UseContext
    let user = verdadeiro? "fulano" : "ciclano"



    function RenderButtons () {
        return (
            <>
                <ButtonsStyles>
                    <LinkStyles to={"/carrinho"}>
                        <div className="buttonMyCart button">
                            <ion-icon name="cart-outline"></ion-icon>
                            <p>Meu Carrinho</p>
                        </div>
                    </LinkStyles>
                    <LinkStyles to={"/pedidos"}>
                        <div className="buttonMyRequests button">
                            <ion-icon name="bag-check-outline"></ion-icon>
                            <p>Meus Pedidos</p>
                        </div>
                    </LinkStyles>
                    <LinkStyles to={"/endereco"}>
                        <div className="buttonMyDeliveryAddress button">
                            <ion-icon name="earth-outline"></ion-icon>
                            <p>Endereço de Entrega</p>
                        </div>
                    </LinkStyles>
                    <LinkStyles to={"/atendimento"}>
                        <div className="buttonCallCenter button">
                            <ion-icon name="headset-outline"></ion-icon>
                            <p>Central de Atendimento</p>
                        </div>
                    </LinkStyles>
                    <LinkStyles to={"/home"}>
                        <div className="buttonGoOut button">
                            <ion-icon name="log-out-outline"></ion-icon>
                            <p>Sair</p>
                        </div>
                    </LinkStyles>
                </ButtonsStyles>
            </>
        )
    };

    function RenderFooter () {
        return (
            <>
                <FooterStyles>
                    <div className="footer">
                        <p>Preços e condições de pagamento exclusivos para compras via internet,podendo variar nas lojas físicas. Ofertas válidas na compra de até 10 peças de cada produto por cliente, até o término dos nossos estoques para internet. Caso os produtos apresentem divergências de valores, o preço válido é o da sacola de compras. Vendas sujeitas a análise e confirmação de dados.</p>
                        <p>Política de privacidade</p>
                        <p>GeekStore S/A - CNPJ: 47.960.950/1088-36 <br/>Rua Driven de Lucas, 2385 - Vila Guilherme Cruz<br/>CEP: 14.403-471 - Frank/SP<br/>Endereço eletrônico: www.GeekStore.com.br<br/>www.GeekStore.com.br/formulariocontato<br/>® GeekStore - Todos os direitos reservados</p>
                    </div>
                </FooterStyles>
            </>
        )
    };

    return (
        <>
            <ProfileStyles>
                <div className="userTitle"><p>Olá, {user}</p></div>
                <RenderButtons />
                <RenderFooter />
            </ProfileStyles>
        </>
    )
};

const ProfileStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .userTitle {
        width: 326px; 
        margin-top: 40px;
        margin-bottom: 30px;
    }

    .userTitle  p {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 23px;
    }
`;

const ButtonsStyles = styled.div`
    .button {
        width: 326px;
        height: 46px;
        background: #025EB2;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
    }

    .button p {
        height: 23px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
    }

    .buttonCallCenter {
        margin-top: 110px;
        margin-bottom: 100px;
    }

    .buttonGoOut {
        margin-top: 100px;
    }

    ion-icon {
        font-size: 20px;
        color: #FFFFFF;
        margin-right: 10px;
    }
`;

const FooterStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 200px;
    background-color: #0086FF;
    position: fixed;
    bottom: 0px;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    .footer {
        width: 326px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        font-family: 'Raleway';
        font-style: normal;
        font-size: 10px;
        color: #FFFFFF;
    }
`;

const LinkStyles = styled(Link)`
     text-decoration: none;
`;

export default Profile;