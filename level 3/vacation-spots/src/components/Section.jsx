import React from "react"   

export default function Section(props) {

    const season = props.item.timeToGo
    let color

    switch (season) {
        case "Spring":
            color = "#9FF086"
            break;
        case "Winter":
            color = "#769ECA"
            break;
        case "Summer":
            color = "#F9E895"
            break;
        case "Fall":
            color = "#EBC75E"
            break;
    }

    const price = props.item.price
    let cost

    if(price < 500){
        cost = "$"
    } else if ( price > 500 && price < 1000) {
        cost = "$$"
    } else {
        cost = "$$$"
    }

    return (
        <div className="wrapper">
            <section style={{backgroundColor: color}}>
            <img className="section-img" src={props.item.imageUrl}></img>
            <div className="section-details">
                <div className="destination">
                    <i className=" des-icon fa-solid fa-location-dot"></i>
                    <h3 className="des-country">{props.item.location}</h3>
                    <a className="des-map"href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="location">{props.item.title}</h1>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="cost-text">Cost:<span className="cost">{cost}</span></p>
                <p className="description">{props.item.description}</p>
            </div>
            </section>
        </div>
    )
}