export const fetchProducts = async ({ signal }: { signal?: AbortSignal }) => {
    const response = await fetch("https://fakestoreapi.com/products", { signal });
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
};