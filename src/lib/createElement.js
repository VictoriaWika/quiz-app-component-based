export default function createElement(type, props) {
  const el = document.createElement(type)
  Object.assign(el, props)
  return el
}
