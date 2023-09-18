import { i18nData } from "./i18n";
import { fetchProducts } from "./api";
import { productListComponent } from "./productListComponent";

document.addEventListener("DOMContentLoaded", function () {
  const productListDiv = document.querySelector(
    '[data-js-component-id="JS_COMPONENT_PRODUCT_LIST"]'
  );

  // Extract i18n data
  const i18n = i18nData(productListDiv);

  // Fetch products
  fetchProducts(i18n, productListDiv, productListComponent);
});
