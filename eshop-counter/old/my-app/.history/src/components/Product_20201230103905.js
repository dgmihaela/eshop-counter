import React from 'react';

const Product = ({category}) => {

    console.log(category)
    return(
        <div>
            <li className='hover:bg-gray-400 pl-5 h-12 text-2xl cursor-pointer leading-loose font-medium' key={category.id}>{category.name}</li>
                
        </div>
    )
}

export default Product;