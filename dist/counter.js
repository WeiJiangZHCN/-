let r = [], f = document.querySelectorAll("[topic]");
if (localStorage.getItem("questions_info"))
  r = JSON.parse(localStorage.getItem("questions_info"));
else
  for (let [t, l] of f.entries()) {
    let e = {
      id: `${t + 1}`,
      //问题序号
      type: l.getAttribute("type"),
      //问题类型
      number: void 0,
      //问题选项数量
      maxvalue: l.getAttribute("maxvalue"),
      value: l
    };
    (e.type = "5") ? e.number = l.querySelectorAll("li").length : e.number = l.children[1].childElementCount, r.push(e);
  }
function s(t, l) {
  document.querySelector(`[for='q${t}_${l}']`).click();
}
function o(t) {
  return Math.ceil(Math.random() * t);
}
function m(t) {
  for (let [l, e] of r.entries()) {
    if (e.type === "4") {
      let i = o(e.maxvalue);
      console.log(i);
      let c = {};
      for (let a = 0; a < i; a++)
        for (; ; ) {
          let u = o(e.number);
          if (c[u] === void 0) {
            c[u] = 1, s(l + 1, u);
            break;
          }
        }
      continue;
    }
    if (e.type === "5") {
      let i = o(100);
      i <= 8 ? e.value.querySelectorAll("li")[0].click() : i <= 12 ? e.value.querySelectorAll("li")[1].click() : i <= 20 ? e.value.querySelectorAll("li")[2].click() : i <= 40 ? e.value.querySelectorAll("li")[3].click() : e.value.querySelectorAll("li")[4].click();
      continue;
    }
    let n = o(e.number);
    s(l + 1, n);
  }
}
setTimeout(function() {
  document.getElementById("ctlNext").click();
}, 2e4);
setTimeout(m, 2e3);
function d() {
  for (var t = document.cookie.split(";"), l = 0; l < t.length; l++) {
    var e = t[l], n = e.indexOf("="), i = n > -1 ? e.substr(0, n) : e;
    document.cookie = i + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
d();
