
import jsonProductsData from "./Products.json";

const getData = async => {
    try{
        const response = jsonProductsData;
        return response;

    } catch(error){
        console.log(error);
        return null;
    }
};
export default getData;