import React from 'react'

const Card = ({id, name, username, email}) => {
    return (
        <div className="tc card w-25 dib br2 pa2 ma3 grow bw2 shadow-5">
            <h2 className="f4">{name}</h2>
            <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
            <h2 className="f4">{username}</h2>
            <h2 className="f5">{email}</h2>
        </div>
    )
}

export default Card
