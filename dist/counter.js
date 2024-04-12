let s = 0, r = [];
function d() {
  return document.querySelectorAll("[topic]");
}
function m(e) {
  return document.querySelector(`[topic='${e}']`).children[1].childElementCount;
}
s = d().length;
for (let e = 1; e <= s; e++)
  r.push(m(e));
console.log(`问题数量为${s}`);
console.log(`答案数量列表为${r}`);
let u = document.createElement("div");
u.style.cssText = "position: absolute; top: 0; right: 0;";
document.body.appendChild(u);
function _(e, t, n) {
  let l = document.createElement("input");
  l.value = t, l.id = n, e.appendChild(l);
}
function p(e, t, n) {
  let l = document.createElement("label");
  l.innerText = t, l.htmlFor = n, e.appendChild(l);
}
function h() {
  for (let [e, t] of r.entries()) {
    let n = document.createElement("div"), l = e + 1;
    p(n, "问题 " + l, "mq" + e), _(n, t, "mq" + e), u.appendChild(n);
  }
}
h();
let c = document.createElement("button");
c.innerText = "提交";
c.addEventListener("click", function() {
  v([1, 3, 4, 3, 3, 2, 2, 3, 5, 4, 3]), g(u);
});
u.appendChild(c);
function g(e) {
  let t = e.querySelectorAll("[id^='mq']");
  for (let [n, l] of t.entries()) {
    let o = l.value.split(",").map((i) => parseFloat(i));
    r[n] = o;
  }
  console.log(r);
}
function v(e) {
  for (let [t, n] of e.entries()) {
    let l = document.querySelector("#mq" + t);
    l.value = b(n).toString();
  }
}
function b(e) {
  let t = [];
  if (e === 1)
    return [1];
  for (let n = 0; n < e; n++)
    if (n === 0) {
      let l = Math.ceil(Math.random() * 100) / 100;
      t.push(l);
    } else if (n < e - 1) {
      let l = 0;
      for (; !(l > 100); ) {
        l++, console.log("1");
        let o = Math.ceil(Math.random() * 100) / 100;
        if (o < 1 - f(t)) {
          t.push(o);
          break;
        }
      }
    } else
      n === e - 1 && t.push(Math.ceil(100 - f(t) * 100) / 100);
  return t;
}
function f(e) {
  let t = 0;
  for (let [n, l] of e.entries())
    t += l;
  return t;
}
function w(e, t) {
  document.querySelector(`[for='q${e}_${t}']`).click();
}
function q(e) {
  var n;
  let t = (n = localStorage.getItem("answer_count_lists")) == null ? void 0 : n.split(",");
  if (t)
    y(e, t);
  else {
    let l = [];
    for (let [o, i] of r.entries()) {
      l.push(Array(i).fill(0));
      let a = S(i);
      w(o + 1, a), l[o][a] += 1;
    }
    localStorage.setItem("answer_count_lists", l);
  }
}
function y(e, t) {
  for (let [n, l] of t.entries())
    for (let [o, i] of l.entries())
      if (E(n, list) < e[n][o]) {
        i(n, o);
        break;
      }
}
function S(e) {
  return Math.ceil(Math.random() * e);
}
function E(e, t) {
  let n = 0;
  for (let l of t)
    n += l;
  return t[e] / n;
}
q();
