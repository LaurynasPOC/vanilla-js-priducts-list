import { API_BASE_URL } from "./_configuration";
export const fetchProducts = async (
  i18n,
  productListDiv,
  productListComponent
) => {
  const products = await fetch(`${API_BASE_URL}/products/search`)
    .then((response) => response.json())
    .then((products) => {
      productListDiv.innerHTML = productListComponent(products, i18n); //Fetches products from the API and renders them using the provided component
    })
    .catch((error) => {
      console.error("Error fetching products data:", error);
    });

  return products;
};
