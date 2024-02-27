import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mentors',
  title: 'Mentors',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'university',
      title: 'University',
      type: 'string',
    }),
    defineField({
      name: 'branch',
      title: 'Branch',
      type: 'string',
    }),
    defineField({
      name: 'profile',
      title: 'Profile image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [
        {
          title: 'skill',
          type: 'string',
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'charge',
      title: 'Charge in INR',
      type: 'number',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'university',
      media: 'profile',
    },
  },
})
