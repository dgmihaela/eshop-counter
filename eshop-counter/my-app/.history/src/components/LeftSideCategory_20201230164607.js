
import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {updateFlagIsClicked } from '../slices/flagIsClickedSlice';

const LeftSideCategory = ({category}) => {
    
    const { value } = useSelector((state) => state).flagIsClickedSlice;

    const dispatch = useDispatch();
 
    const [copyflag, setCopyFlag] = useState();
    
    function changeFlag() {
        setCopyFlag(true);
        console.log(copyflag)
        // dispatch(updateFlagIsClicked({flag: copyflag, id: category.id}));
    }

    return(
        <ul>
            <li onClick={changeFlag} key={category.id} className='hover:bg-gray-400 pl-5 h-12 text-2xl cursor-pointer leading-loose font-medium'>{category.name}</li>
        </ul>
    )
}

export default LeftSideCategory;