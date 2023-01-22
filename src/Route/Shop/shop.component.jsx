import { Routes, Route } from 'react-router-dom';
import CategoriesPreviewRoute from '../../Route/Categories-preview-route/categories-preview'
import CategoryO from '../../Components/Category/Category';

const Shop = () => {
  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreviewRoute />} />
        <Route path=':category' element={<CategoryO />} />
      </Routes>
    </>
  )
};


export default Shop

