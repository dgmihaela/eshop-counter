
import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {updateFlagIsClicked } from '../slices/flagIsClickedSlice';

const LeftSideCategory = ({category}) => {
    
    const { value } = useSelector((state) => state).flagIsClickedSlice;

    const dispatch = useDispatch();
 
    const [copyflag, setCopyFlag] = useState(value.flag);

    function changeFlag() {
        setCopyFlag(copyflag === true);

        dispatch(updateFlagIsClicked({flag: copyflag, id: category.id}));
    }
console.log( category.id)
    return(
        <ul>
            <li className='hover:bg-gray-400 pl-5 h-12 text-2xl cursor-pointer leading-loose font-medium'  onClick={changeFlag} key={category.id}>{category.name}</li>
        </ul>
    )
}

export default LeftSideCategory;