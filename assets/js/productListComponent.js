import { toggleLayout } from "./toggleLayout";
import { generateProductHTML } from "./generateProductHTML";

export const productListComponent = (products, i18n) => {
  let layout = localStorage.getItem("productLayout") || "list";
  const isMobile = () => {
    return window.innerWidth <= 768;
  };

  const initialProductsToShow =
    isMobile() && layout === "grid" ? products.slice(0, 10) : products;
  // Create the top bar with title and toggle buttons
  let html = `
        <div>
          <div class='products-header'>
            <div>
              <span></span>
              <h1>${i18n.title}</h1>
            </div>
            <div>
              <button class='view' id="toggleListView">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 7C7 6.44772 7.44772 6 8 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H8C7.44772 8 7 7.55228 7 7Z" fill="#1A1D1F"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12Z" fill="#1A1D1F"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 17C7 16.4477 7.44772 16 8 16H20C20.5523 16 21 16.4477 21 17C21 17.5523 20.5523 18 20 18H8C7.44772 18 7 17.5523 7 17Z" fill="#1A1D1F"/>
                  <path d="M5 7C5 7.55228 4.55228 8 4 8C3.44772 8 3 7.55228 3 7C3 6.44772 3.44772 6 4 6C4.55228 6 5 6.44772 5 7Z" fill="#1A1D1F"/>
                  <path d="M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12Z" fill="#1A1D1F"/>
                  <path d="M5 17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16C4.55228 16 5 16.4477 5 17Z" fill="#1A1D1F"/>
                </svg>          
              </button>
              <button class='view' id="toggleGridView">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V17C0 18.6569 1.34315 20 3 20H17C18.6569 20 20 18.6569 20 17V3C20 1.34315 18.6569 0 17 0H3ZM12 2H8V6H12V2ZM14 2V6H18V3C18 2.44771 17.5523 2 17 2H14ZM12 8H8V12H12V8ZM14 12V8H18V12H14ZM12 14H8V18H12V14ZM14 18V14H18V17C18 17.5523 17.5523 18 17 18H14ZM3 2H6V6H2V3C2 2.44772 2.44771 2 3 2ZM2 8H6V12H2V8ZM2 14H6V18H3C2.44772 18 2 17.5523 2 17V14Z" fill="#9A9FA5"/>
                </svg>
             </button>
            </div>
          </div>
        </div>  
        <div id="productsData" class="${layout}">
        <div class="main-header">
          <div>
            <input class="checkbox" type="checkbox" id="selectAll"/>
            <span class="custom-checkbox"></span>
          </div>
          <p>${i18n.product}</p>
          <p>${i18n.price}</p>
          <p>${i18n.lastEdited}</p>
          <p></p>
        </div> 
      `;

  html += generateProductHTML(initialProductsToShow);

  html += `</div>`;

  if (isMobile() && layout === "grid") {
    html += `
    <div class="loadMoreContainer">
      <button id="loadMoreBtn">Load More</button>
    </div>
    `;
  }

  // Attach event listeners after the component is rendered
  setTimeout(() => {
    const checkboxes = document.getElementsByClassName("productCheckbox");

    Array.from(checkboxes).forEach((checkbox) => {
      checkbox.addEventListener("change", () => {
        const parentDiv = checkbox.closest(".product");
        if (parentDiv) {
          const img = parentDiv.querySelector(".checkedProduct");
          if (checkbox.checked) {
            img.classList.add("border");
          } else {
            img.classList.remove("border");
          }
        }
      });
    });

    const savedLayout = localStorage.getItem("productLayout");

    const layout = savedLayout || "list";
    if (layout === "list") {
      document.getElementById("toggleListView").classList.add("pressed");
    } else if (layout === "grid") {
      document.getElementById("toggleGridView").classList.add("pressed");
    }
    document
      .getElementById("toggleListView")
      .addEventListener("click", () => toggleLayout("list"));
    document
      .getElementById("toggleGridView")
      .addEventListener("click", () => toggleLayout("grid"));
    document.getElementById("selectAll").addEventListener("click", (e) => {
      document
        .querySelectorAll(".productCheckbox")
        .forEach((item) => (item.checked = e.target.checked));
    });

    const loadMoreBtn = document.getElementById("loadMoreBtn");

    if (loadMoreBtn) {
      let loadedProducts = 10;
      loadMoreBtn.addEventListener("click", () => {
        console.log("Load more button clicked");
        const productsToLoadNext = products.slice(
          loadedProducts,
          loadedProducts + 10
        );
        loadedProducts += 10;
        const newProductsHTML = generateProductHTML(productsToLoadNext);
        document
          .getElementById("productsData")
          .insertAdjacentHTML("beforeend", newProductsHTML); // Append new products to the existing product list in the DOM

        if (loadedProducts >= products.length) {
          loadMoreBtn.style.display = "none";
        }
      });
    }
  }, 0);

  return html;
};
