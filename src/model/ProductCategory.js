// export default interface product {
//   product_id: string
//   name: string
//   description: string
//   image: string
//   product_url: string
// }

export function mapProductCategory(values) {
  return {
    category_id: values.category_id,
    name: values.name,
    description: values.description,
    image: values.image,
  }
}
