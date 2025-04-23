import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/productSlice';
import ProductList from '../components/ProductList';
import Loader from '../components/Loader';

export default function Home() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Loader />;

  return <ProductList products={products} />;
}