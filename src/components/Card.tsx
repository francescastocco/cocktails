import { useState } from 'react'
import '../App.css'
import placeholder from '../resources/placeholder.png'

interface Props {
    name: string
    id: number
    image: string
    flipped: boolean
    onClick: (id: number, name: string) => void
}

export const Card = (props: Props) => {

    const onCardClick = () => {
        props.onClick(props.id, props.name)
    }

    const getImage = () => {
        if (!props.flipped) {
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