import './Button.css'

export default function Button(text) {
  const el = document.createElement('button')
  el.className = 'Button'
  el.innerHTML = text
  return el
}
