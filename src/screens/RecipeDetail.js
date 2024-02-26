import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaHeart, FaRegHeart,FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions/favoritesActions';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=${"1e218485-8acb-4811-bd90-753ba4865533"}`);
        const data = await response.json();
        setRecipe(data.data.recipe);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipe();
  }, [id]);

  const [fav,setFav] = useState(favorites.some((favRecipe) => favRecipe.id === id));
  const toggleFavorite = (recipe) => {
        if (favorites.some((favRecipe) => favRecipe.id === id)) {
          setFav(false)
          console.log("fav is set false")
          dispatch(removeFromFavorites(recipe));
        } else {
           setFav(true)
          dispatch(addToFavorites(recipe));
        }
      };

  return (
    <Container className="mt-5 pt-5" style={{minHeight:"42.8rem"}}>
      {recipe && (
        <Row>
          <Col md={8} >
            <h4 className="d-flex align-items-center">
             <Link to="/" style={{marginRight:"1rem"}} >
                <FaArrowLeft color='#3D405B'/>
              </Link>
              {recipe.title} by {recipe.publisher}
              <button
                className="btn btn-link ml-auto"
                onClick={toggleFavorite}
                aria-label={fav? 'Remove from favorites' : 'Add to favorites'}
              >
                {fav ? <FaHeart color="red" size={20} /> : <FaRegHeart size={20} color='#3D405B' />}
              </button>
            </h4>
            <img src={recipe.image_url} alt={recipe.title} className="img-fluid rounded mx-5" style={{border:"1px solid #3D405B",height: '500px', objectFit: 'cover'}}/>
            <p className="mt-3">{` Cooking Time - ${recipe.cooking_time} minutes`}</p>
            <p>Source URL: {recipe.source_url}</p>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Ingredients</Card.Title>
                <ListGroup variant="flush">
                  {recipe.ingredients.map((ingredient, index) => (
                    <ListGroup.Item key={index}>
                      {`${ingredient.quantity == null ? "1" : ingredient.quantity} ${ingredient.unit} ${ingredient.description}`}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>User Ratings</Card.Title>
                <Card.Text>{recipe.socialRank ? recipe.socialRank : 'No Ratings' }</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default RecipeDetail;
