
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
    'use strict';

    var e = [],
        t = [];

    function n(n, r) {
      if (n && "undefined" != typeof document) {
        var a,
            s = !0 === r.prepend ? "prepend" : "append",
            d = !0 === r.singleTag,
            i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

        if (d) {
          var u = e.indexOf(i);
          -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
        } else a = c();

        65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
      }

      function c() {
        var e = document.createElement("style");
        if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) e.setAttribute(t[n], r.attributes[t[n]]);
        var a = "prepend" === s ? "afterbegin" : "beforeend";
        return i.insertAdjacentElement(a, e), e;
      }
    }

    var css = "body {\n    background-color: antiquewhite;\n    padding: 0;\n    margin: 0;\n}\n.js-image {\n    width: 200px;\n    height: 200px;\n}";
    n(css,{});

    console.log('Hello World!');
    const jsImageHtml = document.createElement('img');
    jsImageHtml.className = 'js-image';
    jsImageHtml.src = 'assets/ava11.jpg';
    document.body.append(jsImageHtml);

})();
