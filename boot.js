(function(){
  var h = window.__HART || "";
  var s = "";
  for (var i = 0; i < h.length; i += 2) s += String.fromCharCode(parseInt(h.substr(i, 2), 16));
  var el = document.createElement("script");
  el.textContent = s;
  document.body.appendChild(el);
})();
