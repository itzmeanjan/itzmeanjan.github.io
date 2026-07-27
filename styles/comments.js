/*
  Author: Anjan Roy <hello@itzmeanjan.in>

  Comments for blog posts, powered by giscus ( https://giscus.app ), backed by the GitHub Discussions.
*/

(function () {
  var config = {
    'data-repo': 'itzmeanjan/itzmeanjan.github.io',
    'data-repo-id': 'R_kgDOCs8iGw',
    'data-category': 'Announcements',
    'data-category-id': 'DIC_kwDOCs8iG84DCD5B',
    'data-mapping': 'pathname',
    'data-strict': '1',
    'data-reactions-enabled': '1',
    'data-emit-metadata': '0',
    'data-input-position': 'bottom',
    'data-theme': 'transparent_dark',
    'data-lang': 'en',
    'data-loading': 'lazy',
  };

  var mount = function () {
    var parent = document.getElementById('parentDiv');
    if (!parent || document.getElementById('commentsDiv')) {
      return;
    }

    var card = document.createElement('div');
    card.className = 'childDiv';
    card.id = 'commentsDiv';

    var article = document.createElement('article');

    var heading = document.createElement('h1');
    heading.textContent = 'comments';
    article.appendChild(heading);

    var host = document.createElement('div');
    host.className = 'giscus';
    article.appendChild(host);

    var script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    Object.keys(config).forEach(function (attribute) {
      script.setAttribute(attribute, config[attribute]);
    });
    script.crossOrigin = 'anonymous';
    script.async = true;
    article.appendChild(script);

    card.appendChild(article);
    parent.appendChild(card);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
