    // Implements the MFN Loader javascript file
    if (!window._MFN) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "https://widget.mfn.se/v1/serve/assets/js/mfn-loader-v0.2.0.js";
        s.async = true;
        document.getElementsByTagName("body")[0].appendChild(s);
    }

    window._MFN = {
        // Element where the news feed should end up
        outlet: '#container',

        // Default language of the news items shown
        lang: 'all',

        // 'selected' uses locale from lang, other options are 'en', 'sv' eg.
        // and so on
        l10nLang: 'sv',

        // The type of view
        type: 'listview',

        // Feed ID, provided by MFN
        feed_id: '1ef79c4a-3220-4d33-af20-530d4c7331ea',

        // Path to the page where a single view version has been implemented
        single_view_url: 'cs/single.html',

        // Enable if you want to activate a disclaimer page for news items
        // of a specific tag
        
        //disclaimer_redirect_tag: 'cus:disclaimer',
        //disclaimer_redirect_url: 'disclaimer.html',
        

        // Default limit of items shown
        limit: 10,

        // Adds a summary of the article
        show_summary: true,

        // Set preferred length of the summary, default: 250
        // summary_len: 100,

        // Cut length of summary to 'summary_len'
        // good if you want to prevent long text, eg Disclaimer
        summary_cut: true,

        // 'default' (:regulatory, sub:report:interim, sub:report:annual)
        // or add your own eg [{tag: ':regulatory'}]
        show_tags: [{tag: ':regulatory'},{tag: 'sub:report:interim'},{tag: 'sub:report:annual'}],

        // Show attachments
        show_attachments: true,

        // Enable clickable tags
        clickable_tags: true,

        // Query Param Prefix, to prevent 404 in for example wordpress that also uses 'year' for other purposes
        // query_param_prefix: 'mfn-',

        // Toolbar
        // Note: you can hide the toolbar by uncommenting it, and instead perhaps use 'tags' below for a default filter
        toolbar: [
            {
                // show search
                item: 'search',
                // if true an Ajax search is added to the search bar
                live_search: true,
                // the debounce time for the ajax search if enabled
                live_search_delay: 300,
                // save space by combining search field, search button and clear button
                slim_mode: false,
                // auto hides the clear button
                auto_hide_clear_button: true
            },
            // 'default' or [{tag: ':regulatory'},
            // {tag: 'sub:report:interim'}] etc.
            {item: 'category', tags: 'default'},
            {item: 'year', start: 2010},
            {item: 'lang', languages: ['sv', 'en']},
            {item: 'clear'}
        ],

        // Shows for example 'All (Categories)' in select inputs (Default)
        show_select_info: true,

        // Filter feed by the following tags
        // Typical use cases:
        // * Setting the default filtering in the toolbar
        // * For custom 'listview' without a toolbar where you want to choose what to filter by in code
        // tags: [':regulatory'],

        // Your own local to override text selection or add for
        // other l10n languages (For the toolbar text and tags)
        l10n: {
            'Search': {
                sv: 'Sök',
                en: 'Search'
            },
            'Search placeholder': {
                sv: 'Sök',
                en: 'Search'
            },
        },

        // Show additional filter info, default: false
        show_info: true,
        // Show not found element, default: false
        show_notfound: true,

        // Override default 'not found' element
        // notfound_tmpl: {
        //  sv: '<div class="mfn-notfound"><span>Kunde inte hitta några nyhetsartiklar.</span></div>',//  en: '<div class="mfn-notfound"><span>Couldn\'t find any news articles.</span></div>',
        // },

        // Should most likely be true (Enables proxy attachments)
        use_proxied_attachment_urls: true,

        // Shows the date
        show_date: true,

        // Example of configuring locale and time zone,
        // Swedish timezone is default if date_setting is not set
        
        // date_setting: {
        //     // eg. for US: 'en-US',
        //     locale: 'sv-SE',
        //      option: {
        //         // or 'long', 'short',
        //         month: 'numeric',
        //         // or '2-digit',
        //         year: 'numeric',
        //         // or '2-digit',
        //         day: 'numeric',
        //         // eg. 'America/New_York'
        //         timeZone: 'Europe/Stockholm'
        //     }
        // },
        

        // If you want to implement your own custom date formatter
        // you can add your own function
        // format_date: function(date) {
        //     return date.toLocaleTimeString('sv-SE', {
        //         month: 'long',
        //         year: 'numeric',
        //         day: 'numeric',
        //         timeZone: 'Europe/Stockholm'
        //     });
        // },

        // Example of implementing your own HTML for a news item
        // post_processor: function(current, item) {
        //  console.log(item);
        //     return '<div>' + item.content.title + '</div>';
        // }

    }
