import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import {useSelector, useDispatch} from 'react-redux';
import CartContainer from './components/CartContainer';
import {selectProducts, getProducts} from './slices/productsSlice';

import axios from "axios";



const allProducts = useSelector(selectProducts);
const selectedProduct = allProducts[category.id] || []
const {value} = useSelector((state) => state).flagIsClickedSlice;

const dispatch = useDispatch();

useEffect(() => {
    const fetchData = async() => {
        
        const result = await axios.get(`http://localhost:9000/products?id_category=${category.id}`);
       
        dispatch(getProducts({products: result.data, id: category.id}));
    }
    fetchData();
}, []);

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  const cartFlagValue = useSelector((state) => state.flagCartClickedSlice.cartFlagValue);
  const {value} = useSelector((state) => state).flagIsClickedSlice;

  const product = selectedProduct.map((prod, index) => {
        return <CartContainer product={prod} />
    
});

  return (
    <div className="container mx-auto  py-5">
      <Header />
    <div className='px-10'>
      {cartFlagValue ? product : <MainContainer />}
    </div>
    </div>
  );
}

export default App;
