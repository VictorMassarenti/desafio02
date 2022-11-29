import { CartValueContainer } from "./styles"
import { ShoppingCart } from 'phosphor-react'

interface CartValueProps{
    counter?: number
}

export function CartValue({ counter }: CartValueProps) {
    return (
        <CartValueContainer>
            <div>{counter}</div>
            <ShoppingCart size={22} weight='fill' />
        </CartValueContainer>
    )
}