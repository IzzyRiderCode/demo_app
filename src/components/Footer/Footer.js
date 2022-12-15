import React from "react";
import backgroundFooter from "./image/tlo_footer.jpg"


export const Footer = () => {
    return (
        <>
            <div style={{
                height: 150,
                marginTop: 20,
                marginBottom: 20,
                borderRadius: 10,
                backgroundImage: `url(${backgroundFooter})`,
                backgroundSize: "cover",
                display: "block",
                justifyContent: "flex-end",
                alignItems: "center"
            }}>

                <img style={{
                    marginTop: 25,
                    marginLeft: 15,
                }} src="./images/logo_ortocare.png" alt="header_logo_footer"/>
                <div style={{
                    marginTop: 10,
                    marginRight: 50,
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 80,
                }}>
                <address style={{
                    color: "purple",

                }}>
                    OrtoCare Sp. z o.o.
                    ul. Łopuszańska 95,
                    02-457 Warszawa
                </address>
                <address className="phone" style={{
                    color: "purple"
                }}>
                    +48 22/631-27-86
                </address>
                <address className="email" style={{
                    color: "white"
                }}>
                    biuro@ortocare.pl
                </address>
                </div>
            </div>
        </>

    )

}

