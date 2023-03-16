import { Geolocation } from '@capacitor/geolocation';

export const askCoord = async () => {

    const permit = await Geolocation.checkPermissions();

    if (permit.location === "granted") {

        const coordinates = await Geolocation.getCurrentPosition();
        return (
                coordinates
        );
    }else{
        console.log("vous n'avez pas autorisé la géolocalisation");
    }

     
}

