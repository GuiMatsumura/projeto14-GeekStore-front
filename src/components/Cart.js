import styled from "styled-components";

function Cart () {

    function BuildCartOrder () {
        return (
            <>

            </>
        )
    };

    function RenderAddress () {
        return (
            <>
                <RenderAddressStyles>
                    <p>Endereço de entrega</p>
                    <p>Catapimbas<br/>Rua São Jabiroca n°0<br/>Ratanaba / MG<br/>CEP: 00000-00</p>

                </RenderAddressStyles>
            </>
        )
    };

    function RenderCartOrder () {
        return (
            <>
            
            </>
        )
    };

    return (
        <>
            <CartStyles>
                <div className="header">header</div>
                <RenderAddress />
                <RenderCartOrder />
                <div className="installment"></div>
            </CartStyles>
        </>
    )
};

const CartStyles = styled.div`


`;

const RenderAddressStyles = styled.div`

`;

export default Cart;