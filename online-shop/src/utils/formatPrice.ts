export const formatPrice = (price: number) => {

    const formattedPrice = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,

    }).format(price);

    return formattedPrice;
}