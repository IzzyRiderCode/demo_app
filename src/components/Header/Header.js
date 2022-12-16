import React from "react";



export const Header= () => {
    return (
            <div style={{
                height: 200,
                marginBottom: 20,
                borderRadius: 10,
                backgroundImage: `url("./images/headerimg/tlo_header.png")`,
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

                }} src="./images/headerimg/logo_ortocare_stopka.png" alt="header_logo"/>
                <h1 style={{
                    color: "purple",
                    fontFamily: "Open Sans",
                    flexGrow: 1,
                    textAlign: "center",
                    alignSelf: "center"
                }}>Demo App</h1>
            </div>
    )
}

