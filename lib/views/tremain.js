
doctype(5);

html(function() {
  head(function() {
    title("Johnny Tremain");
    meta({
      name: 'viewport',
      content: 'width=device-width, initial-scale=0.7, maximum-scale=1'
    });
    link({
      rel: 'stylesheet',
      href: '/bootstrapCSS'
    });
    return script({
      src: '/bootstrapJS'
    });
  });
  return body(function() {
    return div('.navbar.navbar-fixed-top', function() {
      return div('.navbar-inner', function() {
        return div('.container', function() {
          return a('.btn.btn-navbar', function() {
            a('.brand', {
              href: '/'
            }, 'Apprentice');
            return div('.nav-collapse', function() {
              return ul('.nav', function() {
                li(function() {
                  return a({
                    href: '/johnny'
                  }, 'Johnny');
                });
                return li(function() {
                  return a({
                    href: '/tremain'
                  }, 'Tremain');
                });
              });
            });
          });
        });
      });
    });
  });
});
