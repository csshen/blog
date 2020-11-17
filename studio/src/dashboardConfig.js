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
                  buildHookId: '5fb345900f7495009b6a128d',
                  title: 'Sanity Studio',
                  name: 'blog-studio-w6ydbx16',
                  apiId: '52e14481-52db-40ea-a1a2-34f741f3f110'
                },
                {
                  buildHookId: '5fb34590127d2300a36e079e',
                  title: 'Blog Website',
                  name: 'blog-web-pm3pe7jg',
                  apiId: '504bd6dc-f96a-447a-8dfc-c56ce790dfcd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/csshen/blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://blog-web-pm3pe7jg.netlify.app', category: 'apps' }
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
