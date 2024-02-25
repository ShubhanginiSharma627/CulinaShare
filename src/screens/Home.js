import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Card, Button, Badge } from 'react-bootstrap';
import RecipeList from '../components/RecipeList';
import FeaturedRecipes from '../components/FeaturedRecipes';
import { FaSearch } from 'react-icons/fa'; 
import CategoryList from '../components/CategoryList';
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [cat, setCat] = useState('');
  const [categories] = useState([
    'carrot', 'broccoli', 'asparagus', 'cauliflower', 'corn', 'cucumber', 'green pepper', 'lettuce', 'mushrooms',
    'onion', 'potato', 'pumpkin', 'red pepper', 'tomato', 'beetroot', 'brussel sprouts', 'peas', 'zucchini',
    'radish', 'sweet potato', 'artichoke', 'leek', 'cabbage', 'celery', 'garlic', 'basil', 'coriander',
    'parsley', 'dill', 'rosemary', 'oregano', 'cinnamon', 'saffron', 'green bean', 'bean', 'chickpea', 'lentil',
    'apple', 'apricot', 'avocado', 'banana', 'blackberry', 'blackcurrant', 'blueberry', 'boysenberry', 'cherry',
    'coconut', 'fig', 'grape', 'grapefruit', 'kiwifruit', 'lemon', 'lime', 'lychee', 'mandarin', 'mango', 'melon',
    'nectarine', 'orange', 'papaya', 'passion fruit', 'peach', 'pear', 'pineapple', 'plum', 'pomegranate', 'quince',
    'raspberry', 'strawberry', 'watermelon', 'salad', 'pizza', 'pasta', 'popcorn', 'lobster', 'steak', 'bbq',
    'pudding', 'hamburger', 'pie', 'cake', 'sausage', 'tacos', 'kebab', 'poutine', 'seafood', 'chips', 'fries',
    'masala', 'paella', 'som tam', 'chicken', 'toast', 'marzipan', 'tofu', 'ketchup', 'hummus', 'chili', 'maple syrup',
    'parma ham', 'fajitas', 'champ', 'lasagna', 'poke', 'chocolate', 'croissant', 'arepas', 'bunny chow', 'pierogi',
    'donuts', 'rendang', 'sushi', 'ice cream', 'duck', 'curry', 'beef', 'goat', 'lamb', 'turkey', 'pork', 'fish',
    'crab', 'bacon', 'ham', 'pepperoni', 'salami', 'ribs'
  ]);
  const [categoriRecipe, setCategorieRecipe] = useState([]);
  
  const fetchRecipes = async () => {
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchTerm}&key=${"1e218485-8acb-4811-bd90-753ba4865533"}`);
      const data = await response.json();
      console.log("pizza", data.data.recipes)
      setRecipes(data.data.recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  const fetchRecipesByCategory = async (category) => {
    try {
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${category}&key=${"1e218485-8acb-4811-bd90-753ba4865533"}`);
      const data = await response.json();
      console.log("data",data.data.recipes[0])
      setRecipes(data.data.recipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };
  const handleCategoryClick = (category,clicked) => {
    if(clicked){
      setCat(category);
      fetchRecipesByCategory(category);
    }
    else{
      setRecipes([]);
    }
  };
  return (
    <Container className="mt-5 pt-5" >
      <Row className="mt-2" >
        <Col className="mb-4 text-center">
          <h1 style={{color:"#E07A5F",fontFamily: 'Pacifico, sans-serif'}}>CulinaShare</h1>
          <p style={{color:"#81B29A"}}>Discover, share, and save delicious recipes!</p>
          <Form onSubmit={handleSubmit} inline className="d-flex rounded p-2" style={{backgroundColor:"white",border:'0.5px solid #E07A5F'}} >
            <Form.Group controlId="searchTerm" className="mr-2" style={{width:"80rem"}}>
              <Form.Control
                type="text"
                placeholder="Search for recipes..."
                value={searchTerm}
                style={{border:"none",boxShadow: 'none'}}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
            <Button  type="submit" className='ml-2' style={{backgroundColor:"white",border:"none"}} >
              <FaSearch color='#E07A5F'/> 
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2 style={{color:"#E07A5F",fontFamily: 'Quicksand, sans-serif'}}>Categories</h2>
          {categories.map((category) => (
              <CategoryList category={category} handleCategoryClick={handleCategoryClick} cat={cat}/>
            ))}
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
         <RecipeList recipes={recipes} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2 style={{color:"#E07A5F",fontFamily: 'Quicksand, sans-serif'}}>Featured Recipes</h2>
          <FeaturedRecipes />
        </Col>
      </Row>
     
    </Container>
  );
};

export default Home;
