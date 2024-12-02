#include <iostream>
#include <unordered_map>
#include <vector>
#include <algorithm>

using namespace std;

// Product structure
struct Product {
    int id;
    string name;
    string category;
    double price;
};

// HashMap (unordered_map) to store product data
unordered_map<string, Product> productMap;

// Function to add products to the map
void addProduct(int id, const string &name, const string &category, double price) {
    Product product = {id, name, category, price};
    productMap[name] = product; // Store by product name
}

// Binary Search Function to find a product in a sorted list of products
Product binarySearch(const vector<Product> &products, const string &target) {
    int low = 0, high = products.size() - 1;
    
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (products[mid].name == target) {
            return products[mid];
        } else if (products[mid].name < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    // Return an empty Product if not found
    return Product();
}

// Function to search product
void searchProduct(const string &query) {
    // Convert query to lowercase for case-insensitive search
    string lowerQuery = query;
    transform(lowerQuery.begin(), lowerQuery.end(), lowerQuery.begin(), ::tolower);
    
    // Sort products by name for binary search
    vector<Product> sortedProducts;
    for (const auto &entry : productMap) {
        sortedProducts.push_back(entry.second);
    }
    
    sort(sortedProducts.begin(), sortedProducts.end(), [](const Product &a, const Product &b) {
        return a.name < b.name;
    });
    
    // Perform binary search
    Product result = binarySearch(sortedProducts, lowerQuery);
    
    if (result.id != 0) {
        cout << "Found: " << result.name << endl;
        cout << "Category: " << result.category << endl;
        cout << "Price: ₹" << result.price << endl;
    } else {
        cout << "No product found with that name!" << endl;
    }
}
 
