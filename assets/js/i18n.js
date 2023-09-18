export const i18nData = (productListDiv) => {
  return {
    title: productListDiv.getAttribute("data-i18n-products-title"),
    buyNow: productListDiv.getAttribute("data-i18n-buy-now"),
    product: productListDiv.getAttribute("data-i18n-table-product"),
    price: productListDiv.getAttribute("data-i18n-table-price"),
    lastEdited: productListDiv.getAttribute("data-i18n-table-last-edited"),
  };
};
