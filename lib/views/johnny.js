
module.exports = function() {
  doctype(5);
  return html(function() {
    head(function() {
      title("Johnny Tremain");
      meta({
        name: 'viewport',
        content: 'width=device-width, initial-scale=0.7, maximum-scale=1'
      });
      link({
        rel: 'stylesheet',
        href: '/public/css/bootstrap.min.css'
      });
      return script({
        src: '/public/javascripts/bootstrap.min.js'
      });
    });
    return body(function() {
      div('.navbar.navbar-fixed-top', function() {
        return div('.navbar-inner', function() {
          return div('.container', function() {
            return a('.btn.btn-navbar', function() {
              a('.brand', {
                href: '/'
              }, 'johnny-tremain');
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
      return div('.container', function() {
        return a({
          href: 'http://en.wikipedia.org/wiki/Johnny_Tremain'
        }, 'Johnny Tremain');
      });
    });
  });
};
