import createElement from '../../lib/createElement'
import homeSVG from '../../icons/home.svg'
import bookmarkSVG from '../../icons/bookmark.svg'
import createSVG from '../../icons/create.svg'
import settingsSVG from '../../icons/settings.svg'
import './Navigation.css'

const buttonsConfig = [
  { text: 'Home', svgPath: homeSVG },
  { text: 'Bookmarks', svgPath: bookmarkSVG },
  { text: 'Create', svgPath: createSVG },
  { text: 'Settings', svgPath: settingsSVG },
]

export default function Navigation(onNavigate) {
  // destructuring assignment
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement(
      'button',
      { className: 'Navigation__button' },
      createElement('img', { src: svgPath, alt: text }),
      text
    )
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons)
  return el
}
