import React, { useState } from 'react';
import {  Button } from 'react-bootstrap';

const CategoryList = ({ category, handleCategoryClick,cat }) => {
  const [clickState,setClickState] = useState(false);
 
  return (
        <Button
          key={category}
          className="mb-2 mx-3 "
           style={{border:"none",backgroundColor:cat==category && clickState?"#DAA588":"ButtonFace",color:cat==category && clickState?"white":"GrayText",borderRadius:50,fontFamily: 'Quicksand, sans-serif'}}
          onClick={() => {
            handleCategoryClick(category,!clickState);
            setClickState(!clickState);
          }}
        >
          {category}
        </Button>
  );
};

export default CategoryList;
