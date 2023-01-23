import React from "react"

export default function Badge(props) {

    const {
            firstName,
            lastName,
            date,
            nickName,
            agency,
            country,
            aboutMe,
            badgeNumber,
            affiliation,
            image,
            signature,
            logo,
            clearance,
            jobTitle
        } = props

    const styles = {
        backgroundColor: clearance
    }

    return (
        <div className="person-wrapper">
            <div className="badge">
                <h3>{country}</h3>
                <section className="main-section">
                    <img className="employee-photo" src={image} alt="Photo"/>
                    <div className="employee-details">
                        <h1 className="badge-number">{badgeNumber}</h1>
                        <h1 className="nick-name">{nickName}</h1>
                        <p className="affil">Affiliation</p>
                        <h3>{affiliation}</h3>
                        <p className="agency">Agency/Department</p>
                        <h3>{agency}</h3>
                        <p className="expire">Expires</p>
                        <h3>{date}</h3>
                    </div>
                </section>
                <div className="clearance" style={styles}>
                    <div className="employee-name">
                        <h1>{firstName}</h1>
                        <h1>{lastName}</h1>
                    </div>
                </div>
                <img className="signature" src={signature} alt="Signature"/>
                <div className="main-wrapper">
                    <div className="wrapper">
                        <img className="bar-code" src="src/images/barcode.png" alt="Bar Code"/>
                        <img className="chip" src="src/images/chip.jpg" alt="Card Chip"/>
                        <div className="rank-details">
                            <img className="logo" src={logo} alt="logo" />
                            <div className="rank">
                            </div>
                        </div>
                    </div>
                    <div className="footer">{jobTitle}</div>
                </div>
            </div>
            <div className="about">
                <h1>{firstName} {lastName}</h1>
                <p>{aboutMe}</p>
            </div>
        </div>
    )
}