import { Position } from '@capacitor/geolocation';
import { useEffect, useState } from 'react';
import {askCoord} from './permition';


export const ToggleGeolocation = () => {
    
    const [clickButton, setClickButton] = useState(false)

    const [coord, setCoord] = useState<Position>()

    const handleChangeButton = async () => {
        setClickButton(!clickButton)
    }

    const changeCoords = async (): Promise<void> => {
        setCoord(await askCoord());
    }

    useEffect(() => {
        if (clickButton) {
            void changeCoords();
         }
    }, [clickButton])
    

    return (
        <>
        <button onClick={handleChangeButton}>coordonées</button>
        <p>va voir la console et click 2 fois</p>
        <p>longitude {coord?.coords.longitude}</p>
        <p>latitude {coord?.coords.latitude}</p>
        </>
    );
}
