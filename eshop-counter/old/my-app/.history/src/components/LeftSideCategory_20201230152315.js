
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {isClicked, updateFlagIsClicked  } from "module";
import axios from 'axios'

const LeftSideCategory = ({category}) => {
    
  const dispatch = useDispatch();
  const isClicked = useSelector(isClicked)
  

    return(
        <ul>
            <li className='hover:bg-gray-400 pl-5 h-12 text-2xl cursor-pointer leading-loose font-medium'  onClick={showProducts} key={category.id}>{category.name}</li>
        </ul>
    )
}

export default LeftSideCategory;