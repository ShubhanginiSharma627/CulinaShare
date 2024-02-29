import React, { useState } from 'react';
import { Card, Col, Row, Pagination, Button } from 'react-bootstrap';
import CardDeck from './Card';


const RecipeList = ({ recipes }) => {
    const recipesPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
  
    
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);



    return (
        <div>
            <Row>
                {currentRecipes.map((recipe) => (
                    <CardDeck recipe={recipe}/>
                ))}
            </Row>
            {
                recipes && recipes.length > 6 &&(
                    <Pagination className="mt-3 overflow-auto">
                {Array.from({ length: Math.ceil(recipes.length / recipesPerPage) }, (_, i) => (
                    <Pagination.Item key={i + 1} active={i + 1 === currentPage} onClick={() => paginate(i + 1)} >
                        {i + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
                )
            }
        </div>
    );
};

export default RecipeList;
