import { FavoriteLocationsService } from "../../services/FavoriteLocationsService"

export const GroupePfou = () => {
    const service = new FavoriteLocationsService();

    service.addFavoriteLocation("New York").then(
        () => {service.getFavoriteLocations()
            .then(response => {console.log(response)})}
    )

    console.log(service.getFavoriteLocations());

    // service.removeFavoriteLocation("New York");

    // console.log(service.getFavoriteLocations());

    return (
        <>
        <h1>Groupe Pfou</h1>
        </>
    )
}