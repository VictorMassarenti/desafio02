import { AddCartContainer } from "./styles";
import { ShoppingCartSimple } from "phosphor-react";

export function AddCart() {
    return (
        <AddCartContainer>
            <ShoppingCartSimple size={22} color='white' weight='fill'/>
        </AddCartContainer>
    )
}