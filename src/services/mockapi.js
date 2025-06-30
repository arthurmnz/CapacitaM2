const API_URL = 'https://6862c40396f0cc4e34bae5ce.mockapi.io/api/Product';

//get all products
export async function getProducts(){
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        categories: product.category,
        description: product.description,
        storage: product.storage
    }));
}

//get by id 
export async function getProductById(id) {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const product = await response.json();
    return {
        id: product.id,
        name: product.name,
        price: product.price,
        categories: product.category,
        description: product.description,
        storage: product.storage
    };
}

//product registration
export async function registerProduct(product) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: product.id,
            name: product.name,
            price: product.price,
            categories: product.category,
            description: product.description,
            storage: product.storage
        })
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return {
        id: data.id,
        name: data.name,
        price: data.price,
        categories: data.category,
        description: data.description,
        storage: data.storage
    };
}
