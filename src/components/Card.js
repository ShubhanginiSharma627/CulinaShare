import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions/favoritesActions';
import { Card, Col, Button } from 'react-bootstrap';
import { useState } from 'react';
 const CardDeck = ({recipe}) =>{
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
   // console.log(favorites);
    const [fav,setFav] = useState(favorites.some((favRecipe) => favRecipe.id === recipe.id));
    const toggleFavorite = (recipe) => {
        if (favorites.some((favRecipe) => favRecipe.id === recipe.id)) {
          setFav(false)
          console.log("fav is set false")
          dispatch(removeFromFavorites(recipe.id));
        } else {
           setFav(true)
          dispatch(addToFavorites(recipe));
        }
      };
      console.log("recipie id",recipe.id)
    return(
        <Col key={recipe.id} xs={12} sm={6} md={4} className="mb-4">
                        <Card className="h-100 d-flex flex-column position-relative" style={{border:"0.5px solid #3D405B "}}>
                            <div style={{ position: 'relative' }}>
                                <Card.Img variant="top" src={recipe.image_url} style={{ height: '200px', objectFit: 'cover' }} />
                                <Button
                                    variant="link"
                                    className="position-absolute top-0 end-0 m-2"
                                    onClick={() => toggleFavorite(recipe)}
                                >
                                    { fav ? (
                                        <FaHeart color="red" size={20} />
                                    ) : (
                                        <FaRegHeart size={20} color='#3D405B'  />
                                    )}
                                </Button>
                            </div>
                            <Card.Body className="flex-grow-1">
                                <Card.Title>{recipe.title}</Card.Title>
                                <Link to={`/recipe/${recipe.id}`}>
                                    <Button style={{backgroundColor:"#3D405B",border:"none"}}>View Recipe</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
    )
 }


    export default CardDeck