import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Toast, ToastContainer } from 'react-bootstrap';
import { FaTrash, FaPlus } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { useTheme } from '../ThemeContext';
const Contribute = () => {
  const [recipeData, setRecipeData] = useState({
    title: "",
    source_url: "",
    image_url: "",
    publisher: "",
    cooking_time: "",
    servings: "1",
    category:"",
    ingredients: [{ quantity: '', unit: '', description: '' }],
  });
  const [nameError, setNameError] = useState('');
  const [CatError, setCatError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [imgUrlError, setImgUrlError] = useState('');
  const [urlError, setUrlError] = useState('');
  const handleChange = (index, key, value) => {
    const newIngredients = [...recipeData.ingredients];
    newIngredients[index][key] = value;
    setRecipeData({ ...recipeData, ingredients: newIngredients });
  };
  const {  theme } = useTheme();
  const handleAddIngredient = () => {
    setRecipeData({
      ...recipeData,
      ingredients: [...recipeData.ingredients, { quantity: '', unit: '', description: '' }],
    });
  };

  const handleRemoveIngredient = (index) => {
    const newIngredients = [...recipeData.ingredients];
    newIngredients.splice(index, 1);
    setRecipeData({ ...recipeData, ingredients: newIngredients });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

     if (name==='title'){
      setNameError('')
     }
     else if(name === 'source_url'){
      setUrlError('')
     }
     else if(name === 'image_url'){
      setImgUrlError('')
     }
    
    setRecipeData({
      ...recipeData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   // console.log("recipedata", recipeData)
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    let submit = true
    if(recipeData.title.length <= 3) {
      setNameError('Title must be greater than three words');
      submit = false;
    }
    if(!urlRegex.test(recipeData.image_url)){
      setImgUrlError('Please enter a valid URL')
      submit = false;
    }
    if  (!urlRegex.test(recipeData.source_url)){
      setUrlError('Please enter a valid URL')
      submit = false;
    }
    if (recipeData.category.length<=3){
      setCatError("Please Enetr Vaild Category")
      submit = false;
    }
    if(submit){
      try {
        const apiKey = 'e2ff61de-9e0d-463c-aa00-e29a5e986519'; // Replace 'your-api-key' with your actual API key
        const response = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/?key=1e218485-8acb-4811-bd90-753ba4865533", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(recipeData),
        });

        if (response.ok) {
          // Optionally, you can redirect the user to another page or show a success message
          //console.log('Recipe data submitted successfully:', recipeData);
          setShowToast(true);
          setRecipeData({
            title: "",
            source_url: "",
            image_url: "",
            publisher: "",
            cooking_time: "",
            servings: "1",
            category:"",
            ingredients: [{ quantity: '', unit: '', description: '' }]
          })
        } else {
          //console.error('Failed to submit recipe data:', response.statusText);
          setRecipeData({
            title: "",
            source_url: "",
            image_url: "",
            publisher: "",
            cooking_time: "",
            servings: "1",
            ingredients: [{ quantity: '', unit: '', description: '' }]
          })
        }
      } catch (error) {
        //console.error('Error submitting recipe data:', error);
        setRecipeData({
          title: "",
          source_url: "",
          image_url: "",
          publisher: "",
          cooking_time: "",
          servings: "1",
          category:"",
          ingredients: [{ quantity: '', unit: '', description: '' }]
        })
      }
    }
  };

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col md={8} className="mx-auto mb-3 mt-5  p-4 rounded" style={{ backgroundColor: theme === 'dark' ? '#1F2937' : '#DAA588' }}>
          <h1 style={{ color: theme == "dark" ? "#E07A5F":"white", fontFamily: 'Quicksand, sans-serif' }}>Contribute Your Recipe</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title" className="my-2">
              <Form.Label style={{ color: theme == "dark" ? "#FFD700":"white", fontFamily: 'Quicksand, sans-serif', fontWeight: "600" }}>Recipe Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the title of your recipe"
                name="title"
                value={recipeData.title}
                onChange={handleInputChange}
                required
              />
              {nameError && (
                <Form.Text className="text-danger">
                  {nameError}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="ingredients" className="my-2">
              <Form.Label style={{ color: theme == "dark" ? "#FFD700":"white", fontFamily: 'Quicksand, sans-serif', fontWeight: "600" }}>Ingredients</Form.Label>
              {recipeData.ingredients.map((ingredient, index) => (
                <div key={index} className="d-flex my-2">
                  <Form.Control
                    type="number"
                    placeholder="Quantity"
                    value={ingredient.quantity}
                    onChange={(e) => handleChange(index, 'quantity', e.target.value)}
                    className="mx-2 "
                  />
                  <Form.Control
                    type="text"
                    placeholder="Unit"
                    value={ingredient.unit}
                    onChange={(e) => handleChange(index, 'unit', e.target.value)}
                    className="mx-2"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Description"
                    value={ingredient.description}
                    onChange={(e) => handleChange(index, 'description', e.target.value)}
                    className="mx-2"
                  />
                  {
                    recipeData.ingredients.length > 1 && (
                      <OverlayTrigger
                        placement="top"
                        overlay={<Tooltip id={`tooltip-remove-${index}`}>Remove Ingredient</Tooltip>}
                      >
                        <Button
                          variant="danger"
                          className="mx-2"
                          style={{ backgroundColor: "#0000", border: "none" }}
                          onClick={() => handleRemoveIngredient(index)}
                        >
                          <FaTrash size={20} color="red" />
                        </Button>
                      </OverlayTrigger>
                    )
                  }
                </div>
              ))}
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-add-ingredient">Add Ingredient</Tooltip>}
              >
                <Button

                  onClick={handleAddIngredient}
                  style={{ backgroundColor: "white", border: " 1px solid #3D405B" }}
                  className="mt-2 mx-2"
                >
                  <FaPlus size={30} color='#3D405B' className='py-1' />
                </Button>
              </OverlayTrigger>
            </Form.Group>
            <Form.Group controlId="source_url" className="my-2">
              <Form.Label style={{ color: theme == "dark" ? "#FFD700":"white", fontFamily: 'Quicksand, sans-serif', fontWeight: "600" }}>Source URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the URL of an image for your recipe"
                name="source_url"
                value={recipeData.source_url}
                onChange={handleInputChange}
                required
              />
              {urlError && (
                <Form.Text className="text-danger">
                  {urlError}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="category" className="my-2">
              <Form.Label style={{ color: theme == "dark" ? "#FFD700":"white", fontFamily: 'Quicksand, sans-serif', fontWeight: "600" }}>Recipe Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Category of your recipe"
                name="category"
                value={recipeData.category}
                onChange={handleInputChange}
                required
              />
              {CatError && (
                <Form.Text className="text-danger">
                  {CatError}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="cooking_time" className="my-2">
              <Form.Label style={{ color: theme == "dark" ? "#FFD700":"white", fontFamily: 'Quicksand, sans-serif', fontWeight: "600" }}>Preparation Time (minutes)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the preparation time in minutes"
                name="cooking_time"
                value={recipeData.cooking_time}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="image_url" className="my-2">
              <Form.Label style={{ color: theme == "dark" ? "#FFD700":"white", fontFamily: 'Quicksand, sans-serif', fontWeight: "600" }}>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the URL of an image for your recipe"
                name="image_url"
                value={recipeData.image_url}
                onChange={handleInputChange}
                required
              />
              {imgUrlError && (
                <Form.Text className="text-danger">
                  {imgUrlError}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group controlId="publisher" className="my-2">
              <Form.Label style={{ color: theme == "dark" ? "#FFD700":"white", fontFamily: 'Quicksand, sans-serif', fontWeight: "600" }}>Your Name or Publisher</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name or the name of the publisher"
                name="publisher"
                value={recipeData.publisher}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button style={{ backgroundColor: "#81B29A", border: "none" }} type="submit" className="my-2">
              Submit Recipe
            </Button>
          </Form>
        </Col>
      </Row>
      <ToastContainer
        style={{
          position: 'fixed',
          bottom: 40,
          right: 20,
        }}
      >
        <Toast
          show={showToast}
          onClose={() => setShowToast(false)}
          delay={3000}
          autohide
          style={{
            background: '#81B29A',
            color: theme == "dark" ? "#FFD700":"white",
          }}
        >
          <Toast.Body>Your recipe has been submitted!</Toast.Body>
        </Toast>
      </ToastContainer>
    </Container>
  );
};

export default Contribute;
