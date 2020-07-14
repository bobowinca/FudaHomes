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
    category_id: values.category_id,
    description: values.description,
    thumbnail: values.thumbnail,
    image: values.image,
    video: values.video,
    footer_image: values.footer_image,
    product_url: values.product_url,
  }
}