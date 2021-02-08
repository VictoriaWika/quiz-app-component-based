import createElement from '../../lib/createElement'
import './Header.css'

export default function Header(title, subtitle) {
  const el = createElement('header', {
    className: 'Header',
  })

  setText(title, subtitle)

  function setText(title, subtitle) {
    el.innerHTML = `
      <h1 class="Header__title">
        ${title}
        <span class="Header__subtitle">${subtitle}</span>
      </h1>
    `
  }

  return {
    el,
    setText,
  }
}
