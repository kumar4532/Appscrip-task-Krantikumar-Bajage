export const getProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=20");
    return res.json();
};