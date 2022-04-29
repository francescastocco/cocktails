import { useState } from 'react'
import '../App.css'
import placeholder from '../resources/placeholder.png'

interface Props {
    id: number
    image: string | undefined
    onClick: (id: number) => void
}

export const Card = (props: Props) => {
    const [flipped, setFlipped] = useState(false)

    const onCardClick = () => {
        props.onClick(props.id)
        setFlipped(!flipped)
    }

    const getImage = () => {
        if (!props.image || !flipped) {
            return placeholder
        } else {
            return props.image
        }
    }

    return (
        <div>
            <img style={{width: "100px"}} onClick={onCardClick} src={getImage()} alt="Random drink" />
        </div>
    )
}