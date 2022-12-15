import React from "react";
import background from "./images/tlo_header.png"



export const Header= () => {
    return (
        <>
            <div style={{
                height: 200,
                marginBottom: 20,
                borderRadius: 10,
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                display: "flex",
            }}>

                <img style={{
                    width: "25%",
                    height: "25%",
                    marginTop: 70,
                    marginLeft: 20,
                    display: "flex",
                    justifyContent: "flex-start"

                }} src="./images/logo_ortocare_stopka.png" alt="header_logo"/>
                <h1 style={{
                    color: "purple",
                    fontFamily: "Open Sans",
                    marginTop: 140,
                    marginLeft: 440,
                }}>Demo App</h1>
            </div>
        </>
    )
}

