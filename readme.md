# **Front-End Developer Screening Task: Vanilla JavaScript Product List/Grid Component**

## **Task Description:**

Imagine that you are working on a Server-side rendered application, and you do not have access to edit the HTML structure. Your task is to develop a product list/grid component that will be rendered within a `div` element with the attribute `data-js-component-id="JS_COMPONENT_PRODUCT_LIST"`.

```html
<div
  data-js-component-id="JS_COMPONENT_PRODUCT_LIST"
  data-i18n-products-title="Products"
  data-i18n-buy-now="Buy Now"
  data-i18n-table-product="Product"
  data-i18n-table-price="Price"
  data-i18n-table-last-edited="Last edited"
>
  <div class="js-component-loader">Loading...</div>
</div>
```

This component will also include internationalization (i18n) strings that you need to utilize. To fetch the product list, you will need to make an API GET request to /products/search.

## **Basic Acceptance Criteria:**

- By default, the component is displayed in List View.
- Users can change the layout to either List or Grid view by clicking the appropriate button at the top right corner of the component.
- Each product can be selected by clicking on the checkbox next to it.
- Users can select all products at once by clicking on the checkbox in the header.
- Hovering over a product reveals three action buttons.

## **Bonus:**

- The webpage remembers the user's selected layout option, even after refreshing the page.
- All hover and active state changes have smooth animations for a more engaging user experience.

## **Instructions:**

1. Use Vanilla JavaScript to create the functionality for the product list/grid component.
2. Ensure that the i18n strings are properly integrated into the component.
3. Implement the API call to fetch the product list.
4. Do not edit index.html file
5. Apply SCSS styling and animations as needed to meet the acceptance criteria and bonus objectives.
6. Provide clear and organized code with comments where necessary.
7. Create a GitHub repository for your project and share the link with us when you are ready for review.

**Note:** Remember to follow best practices for front-end development, including code modularity, error handling, and cross-browser compatibility.

Good luck with your task!

## Resources:

**Designs:**

```

https://www.figma.com/file/FDSxWSyZqQ2UAmexeZfse8/Vanilla-JS-Task---Horion-Digital?type=design&node-id=1314%3A185298&mode=design&t=oz6bSKAMca8dnOAW-1

password: 99805901
```

**API**

Base URL: `https://64f5c56d2b07270f705dab82.mockapi.io/`

Product list endpoint: `GET products/search`

## Prerequisites

- [Node.js](https://nodejs.org/) v18.x
- [yarn](https://yarnpkg.com/) v1.22.x or newer

### Install dependencies:

`yarn install`

## Development

To run the application in development mode:

`yarn start`

Then, open your browser and navigate to http://localhost:1234.

## Building for Production

`yarn build`

The built files will be available in the dist directory.
