import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'universities',
  title: 'Universities',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'string',
    }),
    defineField({
      name: 'ranking',
      title: 'Ranking',
      type: 'number',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'geopoint',
    }),
    defineField({
      name: 'mentors',
      title: 'Mentors',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'mentors'}],
        },
      ],
    }),
    defineField({
      name: 'courses',
      title: 'Courses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Course name'},
            {name: 'details', type: 'string', title: 'Details'},
            {name: 'fees', type: 'string', title: 'Fee structure'},
            {
              name: 'mentors',
              type: 'array',
              title: 'Mentors',
              of: [
                {
                  type: 'reference',
                  to: [{type: 'mentors'}],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
