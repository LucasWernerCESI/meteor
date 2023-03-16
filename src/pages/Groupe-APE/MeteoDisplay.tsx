import React, { useEffect, useState } from 'react';

type Props = {
    forecast: GeolocationData | null
}

export const MeteoDisplay = ({forecast}: Props) => {

    return (
        <div>
            <ul>
            {!forecast &&
                <div>Loading...</div>
            }
            {forecast && forecast?.forecast.map((item, index) => (
                <div key={index}>
                    <p>Vous êtes à {forecast?.city.name}</p>
                    <p>Prévision pour {item.datetime}</p>
                    <p>Température : {item.tsoil2}°</p>
                </div>
            ))}

            </ul>
        </div>
    );
};
