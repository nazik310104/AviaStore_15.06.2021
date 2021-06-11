import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import ProductsList from "../../components/ProductsList";
import { storeContext } from "../../contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";

function BrandPage(props) {
  const { id } = useParams();
  const { products, fetchBrandProducts } = useContext(storeContext);
  useEffect(() => {
    fetchBrandProducts(id);
  }, []);
  return <MainLayout>
      {
          products.length ? <ProductsList products={[products/>
      }
      
  </MainLayout>;
}

export default BrandPage;
