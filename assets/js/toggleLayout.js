export const toggleLayout = (layout) => {
  // Remove pressed class from all view buttons
  document.getElementById("toggleListView").classList.remove("pressed");
  document.getElementById("toggleGridView").classList.remove("pressed");

  // Set the pressed class to the clicked button
  if (layout === "list") {
    document.getElementById("toggleListView").classList.add("pressed");
  } else if (layout === "grid") {
    document.getElementById("toggleGridView").classList.add("pressed");
  }

  // Update the productsData layout
  const productsData = document.querySelector("#productsData");
  productsData.className = layout;

  // Save the layout in localStorage
  localStorage.setItem("productLayout", layout);
};
