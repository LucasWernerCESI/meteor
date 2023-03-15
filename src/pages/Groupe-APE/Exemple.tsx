import React, { useEffect, useState } from 'react';

interface ConversionData {
    forecast : [{
        datetime : string,
        tsoil2: number
    }]
}
const API_KEY = '45eb54d1f30b67a31d6aa41ab941d3e9d917b7f0f98e23bb125c9073deb69774';
export const GroupeApe = () => {
    const [conversionData, setConversionData] = useState<ConversionData | null>(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                'https://api.meteo-concept.com/api/forecast/nextHours?token=45eb54d1f30b67a31d6aa41ab941d3e9d917b7f0f98e23bb125c9073deb69774&latlng=45.764043,4.835659', {
                method: 'GET',
            });
            const data = await response.json();
            setConversionData(data as ConversionData);
        }

        fetchData();
    }, []);

    if (!conversionData) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <ul>
            {conversionData.forecast.map((item) => (
                <div><p>{item.datetime}</p>
                <p>{item.tsoil2}</p>
                </div>
            ))}

            </ul>
        </div>
    );
};
