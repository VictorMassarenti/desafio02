import { RemoveButtonContainer } from "./styles";
import { Trash } from 'phosphor-react'

export function RemoveButton() {
    return (
        <RemoveButtonContainer>
            <Trash size={16} />
            <p>remover</p>
        </RemoveButtonContainer>
    )
}