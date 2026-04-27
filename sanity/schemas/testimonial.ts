// ============================================================
// SCHEMA: Testimonial - Opiniones de clientes
// ============================================================
export default {
  name: 'testimonial',
  title: '⭐ Testimonios',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nombre', type: 'string' },
    { name: 'role', title: 'Cargo / Ubicación', type: 'string' },
    {
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'text', title: 'Testimonio', type: 'text', rows: 4 },
    { name: 'rating', title: 'Valoración (estrellas)', type: 'number', initialValue: 5 },
    { name: 'order', title: 'Orden', type: 'number' },
  ],
}
