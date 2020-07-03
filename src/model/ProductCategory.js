// export default interface product {
//   product_id: string
//   name: string
//   description: string
//   image: string
//   product_url: string
// }

export function mapProductCategory(values) {
  return {
    id: values.category_id,
    name: values.name,
    description: values.description,
    image: values.image,
  }
}
