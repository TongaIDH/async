import fetch from 'node-fetch';

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(apiUrl) {
    const response = await fetch(apiUrl);
    const data = await response.json()
    return data;
}

const anotherFn = async (apiUrl) => {
    try {
        const products = await fetchData(`${apiUrl}/products`);
        const product = await fetchData(`${apiUrl}/products/${products[0].id}`);
        const category = await fetchData(`${apiUrl}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
}

anotherFn(API);