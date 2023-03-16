import React, { useEffect, useState } from 'react';

type Props = {
    cities: CitiesData | null,
    stateSetter: (city: CityData | null) => void
}

export const CitiesSearchListDisplay = ({cities, stateSetter}: Props) => {

    const [city, setCity] = useState<CityData | null>(null);

    useEffect(() => {
        stateSetter(city);
    }, [city])

    return (
        <div className='cities-display'>
            <ul>
                {!cities &&
                    <div>Search the city where you want to show the weather.</div>
                }
                {cities && cities?.cities.map((item, index) => (
                    <li key={index}>
                        <div>
                            <p>Name  : {item.name}</p>
                            <p>CP    :  {item.cp}</p>
                            <p>Insee : {item.insee}°</p>
                            <button onClick={() => {setCity(item)}}>Voir la méteo de ma ville</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
