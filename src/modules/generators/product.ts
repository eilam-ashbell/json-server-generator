import products from "../providers/products/products";
import selectFromArray from "../utils/select-from-array";


function name(category?: Omit<keyof typeof products, "productCategories"|"randomProducts">): string {
    if (!category) return selectFromArray(products.randomProducts)
    return selectFromArray(products[`${category}`])
}

function category(): string {
    return selectFromArray(products.productCategories)
}

export default {
    name,
    category,
}