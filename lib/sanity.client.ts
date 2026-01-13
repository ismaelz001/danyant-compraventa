import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 't7q5p46k',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: false, // Queremos datos frescos siempre para el inventario
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function getCars() {
  return await client.fetch(`*[_type == "car"] {
    _id,
    brand,
    model,
    price,
    km,
    year,
    fuel,
    videoUrl,
    description,
    "images": images[].asset->url
  }`);
}
