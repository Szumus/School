import getData from "./Data";

const endpoints = {
  getAllProducts: async () => {
    const data = await getData();
    return data;
  },

  getProductsByCategory: async (category) => {
    const data = await getData();
    const productsByCategory = data.filter((product) => product.category === category);
    return productsByCategory;
  },

  getProductsByPriceRange: async (minPrice, maxPrice) => {
    const data = await getData();
    const productsByPriceRange = data.filter((product) => product.price >= minPrice && product.price <= maxPrice);
    return productsByPriceRange;
  },

  getProductsByRating: async (minRating) => {
    const data = await getData();
    const productsByRating = data.filter((product) => product.rating.rate >= minRating);
    return productsByRating;
  },

  getProductById: async (id) => {
    const data = await getData();
    const product = data.find((product) => product.id === id);
    return product;
  }
};

export default endpoints;