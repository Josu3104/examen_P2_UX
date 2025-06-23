import RestaurantCard from './comps/RestaurantCard';

function Restaurants() {
    return (
        <div style={{display: "flex"}}>
            <div id='grid-cards'>
                <RestaurantCard></RestaurantCard>

            </div>
        </div>

    );
}

export default Restaurants;