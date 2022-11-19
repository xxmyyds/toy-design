import { openBlock as e, createElementBlock as o, createElementVNode as t } from "vue";
const n = {
  width: "32",
  height: "32",
  viewBox: "0 0 512 512"
}, r = /* @__PURE__ */ t("path", {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "32",
  d: "M256 112v288m144-144H112"
}, null, -1), c = [
  r
];
function d(i, s) {
  return e(), o("svg", n, c);
}
const h = { render: d };
export {
  h as default,
  d as render
};
