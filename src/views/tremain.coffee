doctype 5
html ->
  head ->
    title "Johnny Tremain"
    meta name: 'viewport', content: 'width=device-width, initial-scale=0.7, maximum-scale=1'
    link rel: 'stylesheet', href: '/css'
    script src: '/js'
  body ->
    div '.navbar.navbar-fixed-top', ->
      div '.navbar-inner', ->
        div '.container', ->
          a '.btn.btn-navbar', ->
            a '.brand', href: '/', 'Apprentice'
            div '.nav-collapse', ->
              ul '.nav', ->
                li ->
                  a href: '/johnny', 'Johnny'
                li ->
                  a href: '/tremain', 'Tremain'
    a href: 'http://en.wikipedia.org/wiki/Apprenticeship', 'Apprenticeship'
