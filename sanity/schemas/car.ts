import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'car',
  title: 'Coche',
  type: 'document',
  fields: [
    defineField({ name: 'brand', title: 'Marca', type: 'string' }),
    defineField({ name: 'model', title: 'Modelo', type: 'string' }),
    defineField({ name: 'price', title: 'Precio (€)', type: 'number' }),
    defineField({ name: 'km', title: 'Kilómetros', type: 'number' }),
    defineField({ name: 'year', title: 'Año', type: 'number' }),
    defineField({
      name: 'fuel',
      title: 'Combustible',
      type: 'string',
      options: { list: ['Gasolina', 'Diésel', 'Híbrido', 'Eléctrico'] }
    }),
    defineField({ name: 'videoUrl', title: 'URL del Vídeo', type: 'url' }),
    defineField({ name: 'description', title: 'Descripción', type: 'text' }),
    defineField({ name: 'image', title: 'Imagen Principal', type: 'image', options: { hotspot: true } }),
  ],
});
