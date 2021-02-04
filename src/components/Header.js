import './Header.css'

export default function Header() {
  const el = document.createElement('header')
  el.className = 'Header'
  el.innerHTML = `
<h1 class="Header__title">
    Quiz App
    <span class="Header__subtitle">May the best win!</span>
  </h1>
`
  return el
}
