// export default interface product {
//   product_id: string
//   name: string
//   description: string
//   image: string
//   product_url: string
// }

export function mapProduct(values) {
  return {
    product_id: values.product_id,
    name: values.name,
    description: values.description,
    image: values.image,
    product_url: values.product_url,
  }
}
