
import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {updateFlagIsClicked } from '../slices/flagIsClickedSlice';

const LeftSideCategory = ({category}) => {
    
    const { value } = useSelector((state) => state).flagIsClickedSlice;

    const dispatch = useDispatch();
 
    const [copyflag, setCopyFlag] = useState(false);
    
    // function changeFlag() {
    //     setCopyFlag({copyflag: true});
        
       
    //     console.log(value.flag)
    // }

    useEffect(() => {
        if(copyflag){
            dispatch(updateFlagIsClicked({flag: copyflag, id: category.id}));
        }
      }, [copyflag])
    

    return(
        <ul>
            <li onClick={() => setCopyFlag(true)} key={category.id} className='hover:bg-gray-400 pl-5 h-12 text-2xl cursor-pointer leading-loose font-medium'>{category.name}</li>
        </ul>
    )
}

export default LeftSideCategory;