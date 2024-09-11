import getData from "./Data";

const endpoints = {
  getAllProducts: async () => {
    const data = await getData();
    return data;
  }

};

export default endpoints;