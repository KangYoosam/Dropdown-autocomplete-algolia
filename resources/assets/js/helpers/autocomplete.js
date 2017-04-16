import autocomplete from 'autocomplete.js'
import algolia from 'algoliasearch'

var index = algolia('3GYL3H2G2V', '34a9cfe88de5c444c7319d05619daafb')

export const userautocomplete = (selector, { hitsPerPage }) => {
    index = index.initIndex('users')

    return autocomplete(selector, {
        hint: true,
    }, {
        source: autocomplete.sources.hits(index, { hitsPerPage: hitsPerPage }),
        templates: {
            suggestion (suggestion) {
                return '<span>' + suggestion._highlightResult.name.value + '</span>';
            },
            displayKey: 'name',
            empty: '<div class="aa-empty">No people found</div>'
        }
    });
}