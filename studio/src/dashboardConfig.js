export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffc11345be517b650b1cd1f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-test-studio-tjprkk2r',
                  apiId: 'fcbd4c70-8aa7-4277-94d5-a55766488f87'
                },
                {
                  buildHookId: '5ffc113434de3f7619123cdb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-test-web-3csq662d',
                  apiId: '82283dad-2b0c-4a93-b3b7-c58c8cfaac1b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yepyeh/sanity-gatsby-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-test-web-3csq662d.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
