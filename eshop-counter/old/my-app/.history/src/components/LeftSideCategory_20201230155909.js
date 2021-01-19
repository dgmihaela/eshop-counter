
import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {isClicked, updateFlagIsClicked  } from "module";
import flagIsCliked from '../slices/flagIsClickedSlice';
import axios from 'axios'

const LeftSideCategory = ({category}) => {
    
    const { flag } = useSelector((state) => state).flagIsClickedSlice;

    const dispatch = useDispatch();
 
    const [copyflag, setcopyflag] = useState(flag);

    function changeFalg() {
        setcopyflag(!flag);
    }
  console.log(flag)

   // dispatch(updateFlagIsClicked({flag}))


    return(
        <ul>
            <li className='hover:bg-gray-400 pl-5 h-12 text-2xl cursor-pointer leading-loose font-medium'  onClick={changeFalg} key={category.id}>{category.name}</li>
        </ul>
    )
}

export default LeftSideCategory;