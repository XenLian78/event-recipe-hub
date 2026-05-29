import { defineField, defineType } from 'sanity'

export const recipe = defineType({
  name: 'recipe',
  title: 'Συνταγή',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Τίτλος Συνταγής',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'event',
      title: 'Όνομα Εκδήλωσης (Event)',
      type: 'string',
      description: 'π.χ. Crete Forum 2026',
    }),
    defineField({
      name: 'pdfFile',
      title: 'Αρχείο PDF Συνταγής',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Φωτογραφία / Cover',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})