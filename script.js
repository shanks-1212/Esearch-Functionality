// Sample product data (hash map)
const products = [
  { id: 1, name: "Apple iPhone 13", category: "Electronics", price: 999 },
  { id: 2, name: "Samsung Galaxy S21", category: "Electronics", price: 799 },
  { id: 3, name: "Sony WH-1000XM4", category: "Audio", price: 350 },
  { id: 4, name: "Dell XPS 13", category: "Laptops", price: 1200 },
  { id: 5, name: "MacBook Air M1", category: "Laptops", price: 999 },
  { id: 6, name: "Nintendo Switch", category: "Gaming", price: 299 },
];

// Hash map to store products by name for quick search
const productMap = {};
products.forEach(product => {
  productMap[product.name.toLowerCase()] = product;
});

// Binary Search Function (for sorted product names)
function binarySearch(arr, target) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid].name.toLowerCase() === target) return arr[mid];
    else if (arr[mid].name.toLowerCase() < target) low = mid + 1;
    else high = mid - 1;
  }
  return null;
}

// Function to search products
function searchProduct() {
  const query = document.getElementById('searchQuery').value.trim().toLowerCase();
  const resultsContainer = document.getElementById('searchResults');
  
  if (query === "") {
    resultsContainer.innerHTML = "";
    return;
  }
  
  // Binary Search on sorted products list
  const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));
  const result = binarySearch(sortedProducts, query);

  if (result) {
    resultsContainer.innerHTML = `
      <p><strong>Found:</strong> ${result.name}</p>
      <p>Category: ${result.category}</p>
      <p>Price: $${result.price}</p>
    `;
  } else {
    resultsContainer.innerHTML = "<p>No product found</p>";
  }
}
