import React, { useEffect, useState } from 'react';

interface ConversionData {
    forecast : [{   
        datetime : string,
        tsoil2: number
    }]
}

type Props = {
    forecast: ConversionData | null
}

export const GroupeApe = ({forecast}: Props) => {

    return (
        <div>
            <ul>
            {!forecast &&
                <div>Loading...</div>
            }
            {forecast && forecast.forecast.map((item, index) => (
                <div key={index}>
                    <p>{item.datetime}</p>
                    <p>{item.tsoil2}</p>
                </div>
            ))}

            </ul>
        </div>
    );
};
