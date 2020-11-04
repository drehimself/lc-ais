/* global algoliasearch instantsearch */

const searchClient = algoliasearch('S6HGYYXTEH', '58ea448ae14bad7e16d86038b534fa0c');

const search = instantsearch({
  indexName: 'users',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<article>
  <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
  <div>{{#helpers.highlight}}{ "attribute": "email" }{{/helpers.highlight}}</div>
</article>
`,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
  instantsearch.widgets.stats({
    container: '#stats',
  }),
  instantsearch.widgets.hitsPerPage({
    container: '#hits-per-page',
    items: [
      { label: '8 hits per page', value: 8, default: true },
      { label: '16 hits per page', value: 16 },
    ],
  })
]);

search.start();
