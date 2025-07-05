const API_URL = "https://6862c40396f0cc4e34bae5ce.mockapi.io/api/Product";

//GET /Products
//get all products
export async function getProducts() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Resposta interna não obteve sucesso");
  }
  const data = await response.json();
  return data.map((product) => ({
    id: product.id,
    Name: product.Name,
    Price: product.Price,
    Categories: product.Categories,
    Description: product.Description,
    Storage: product.Storage,
  }));
}

//GET /Products/{id}
//get by id
export async function getProductById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Resposta interna não obteve sucesso");
  }
  const product = await response.json();
  return {
    id: product.id,
    Name: product.Name,
    Price: product.Price,
    Categories: product.Categories,
    Description: product.Description,
    Storage: product.Storage,
  };
}

//POST /Products
//product registration
export async function registerProduct(product) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: product.id,
      Name: product.Name,
      Price: product.Price,
      Categories: product.Categories,
      Description: product.Description,
      Storage: product.Storage,
    }),
  });
  if (!response.ok) {
    throw new Error("Resposta interna não obteve sucesso");
  }
  const data = await response.json();
  return {
    id: data.id,
    Name: data.Name,
    Price: data.Price,
    Categories: data.Categories,
    Description: data.Description,
    Storage: data.Storage,
  };
}

//PUT /Products/{id}
//update product
export async function updateProduct(id, product) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: product.id,
      Name: product.Name,
      Price: product.Price,
      Categories: product.Categories,
      Description: product.Description,
      Storage: product.Storage,
    }),
  });
  if (!response.ok) {
    throw new Error("Resposta interna não obteve sucesso");
  }
  const data = await response.json();
  return {
    id: data.id,
    Name: data.Name,
    Price: data.Price,
    Categories: data.Categories,
    Description: data.Description,
    Storage: data.Storage,
  };
}

//DELETE /Products/{id}
//delete product
export async function deleteProduct(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Resposta interna não obteve sucesso");
  }
  return { message: "Produto deletado com sucesso" };
}
