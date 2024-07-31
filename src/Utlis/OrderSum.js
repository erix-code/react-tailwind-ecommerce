/**
 * @param {[]} products
 * @returns {string}
 * */
export const OrderSum = (products) => {
    if (products.length > 0) {
        const sum = products.reduce((accumulator, currentProduct) => {
            return accumulator + (currentProduct.price * currentProduct.quantity);
        }, 0);
        return parseFloat(sum).toFixed(2);
    }
}
