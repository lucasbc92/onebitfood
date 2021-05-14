import Details from './Details';
import CategoryProducts from './CategoryProducts';

export default function DetailsRestaurant(props) {

    return (
        <>
            <Details {...props.restaurant}/>
            {props.restaurant.product_categories.map((product_category) => <CategoryProducts restaurant={props.restaurant} {...product_category} key={product_category.id}/> )}
        </>
    )
}