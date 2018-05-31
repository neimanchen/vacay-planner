import React from 'react';
import { Button, Card, Image, Icon, Input, Segment, Tab, Item } from 'semantic-ui-react';

import FavFoodCard from './FavFoodCard.jsx';

const FoodAndEventsSidebar = (props) => {
    const panes = [
        {
            menuItem: 'Favorites', render: () => (
                <Tab.Pane>
                    <Input focus placeholder="Enter your trip name here" /><br /><br />
                    <Card.Group>
                        {props.foodFavorites.map((restaurant, index) => {
                            return <FavFoodCard restaurant={restaurant} key={"favfood"+restaurant.id}/>;
                        })}
                    </Card.Group>
                </Tab.Pane>
            )
        }
    ];
    return <Tab panes={panes} />;
}

export default FoodAndEventsSidebar;