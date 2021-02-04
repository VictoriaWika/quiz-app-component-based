import './Header.css'

export default function Header() {
  const el = document.createElement('header')
  el.className = 'Header'
  el.innerHTML = `
<h1 class="header__title">
    Quiz App
    <span class="header__subtitle">May the best win!</span>
  </h1>
`
  return el
}
