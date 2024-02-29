import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardDeck from './Card';

const FeaturedRecipes = () => {
  const [featuredRecipes, setFeaturedRecipes] = useState([]);

  useEffect(() => {
    const fetchFeaturedRecipes = async () => {
      try {
        const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${"pizza"}&key=${"1e218485-8acb-4811-bd90-753ba4865533"}`);
        const data = await response.json();
        //console.log("featured recipes", data.data.recipes);
        setFeaturedRecipes(data.data.recipes);
      } catch (error) {
        console.error('Error fetching featured recipes:', error);
      }
    };

    fetchFeaturedRecipes();
  }, []);

  return (
    <Row>
      {featuredRecipes.slice(0, 3).map((recipe) => (
       <CardDeck recipe={recipe}/>
      ))}
    </Row>
  );
};

export default FeaturedRecipes;
