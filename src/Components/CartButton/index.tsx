import { Button } from "./styles";

interface ButtonProps {
    content: string
}

export function CartButton({ content }: ButtonProps) {
    return(<Button>{content}</Button>)
}