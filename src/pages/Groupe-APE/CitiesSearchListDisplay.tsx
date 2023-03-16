import React, { useEffect, useState } from 'react';

type Props = {
    cities: CitiesData | null
}

export const CitiesSearchListDisplay = ({cities}: Props) => {

    return (
        <div className='cities-display'>
            <ul>
                <form method='GET' name='form'>
                {!cities &&
                    <div>Search the city where you want to show the weather.</div>
                }
                {cities && cities?.cities.map((item, index) => (
                    <li key={index}>
                        <div>
                            <p>Name  : {item.name}</p>
                            <p>CP    :  {item.cp}</p>
                            <p>Insee : {item.insee}°</p>
                            <input type='hidden' name='latlng' value={item.latitude+item.longitude}/>
                            <button>Voir la méteo de ma ville</button>
                        </div>
                    </li>
                ))}
                </form>
            </ul>
        </div>
    );
};
