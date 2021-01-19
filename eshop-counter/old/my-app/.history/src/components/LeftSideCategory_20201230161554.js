
import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {updateFlagIsClicked } from '../slices/flagIsClickedSlice';

const LeftSideCategory = ({category}) => {
    
    const { flag } = useSelector((state) => state).flagIsClickedSlice;

    const dispatch = useDispatch();
 
    const [copyflag, setCopyFlag] = useState(flag);

    function changeFalg() {
        setCopyFlag(copyflag === true);

        dispatch(updateFlagIsClicked({copyflag}));
    }

    return(
        <ul>
            <li className='hover:bg-gray-400 pl-5 h-12 text-2xl cursor-pointer leading-loose font-medium'  onClick={changeFalg} key={category.id}>{category.name}</li>
        </ul>
    )
}

export default LeftSideCategory;