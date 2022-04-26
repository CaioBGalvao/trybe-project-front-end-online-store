export async function getCategories() {
  const apiCategoryUrl = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(apiCategoryUrl);
  const responseAsJson = await response.json();
  return responseAsJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const queryAndCategoryEndpoint = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}&q=$${query}`;
  const onlyQueryEndpoint = `https://api.mercadolibre.com/sites/MLB/search?q=$${query}`;
  const onlyCategoryEndpoint = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}`;

  if (categoryId !== undefined && query !== undefined) {
    const response = await fetch(queryAndCategoryEndpoint);
    const responseAsJson = await response.json();
    return responseAsJson;
  }

  if (query !== undefined) {
    const response = await fetch(onlyQueryEndpoint);
    const responseAsJson = await response.json();
    return responseAsJson;
  }

  if (categoryId !== undefined) {
    const response = await fetch(onlyCategoryEndpoint);
    const responseAsJson = await response.json();
    return responseAsJson;
  }
}
