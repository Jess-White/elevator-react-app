import React from "react"

function Nebula(props) {
    console.log(props)
    return (
        <div className="nebula">
            <div>
            <img style={{width: "700px", height: "500px"}}
            src={props.url}></img>
            <ol>
            <li>{props.title}</li>
            <li>{props.date}</li>
            <li>{props.description}</li>
            <li>{props.apod_site}</li>
            </ol>
            </div>
        </div>
    )
}

export default Nebula