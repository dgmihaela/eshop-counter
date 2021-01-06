
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {isClicked, updateFlagIsClicked  } from '../slices/flagIsClickedSlice';
import flagIsCliked from '../slices/flagIsClickedSlice';
import axios from 'axios'

const LeftSideCategory = ({category}) => {
    
    const { flag } = useSelector((state) => state).flagIsClickedSlice;

    const dispatch = useDispatch();
 
    const [copyflag, setCopyFlag] = useState(flag);

    function changeFalg() {
        setCopyFlag(copyflag === true);
    }
  console.log(copyflag);

   dispatch(updateFlagIsClicked({copyflag}));


    return(
        <ul>
            <li className='hover:bg-gray-400 pl-5 h-12 text-2xl cursor-pointer leading-loose font-medium'  onClick={changeFalg} key={category.id}>{category.name}</li>
        </ul>
    )
}

export default LeftSideCategory;