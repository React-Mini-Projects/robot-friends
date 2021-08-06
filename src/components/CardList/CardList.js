
import Card from "../Card/Card";
import React from 'react'

const CardList = ({robots}) => {
    const cardComponent = robots.map(robot => {
        return <Card key={robot.id} id={robot.id} name={robot.name} username={robot.username} email={robot.email} />
    })
    return (
        <div >
            {cardComponent}
        </div>
    )
}

export default CardList
