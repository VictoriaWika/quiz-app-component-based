import createElement from '../../lib/createElement'
import './Navigation.css'

import homeSVG from '../../icons/home.svg'
import bookmarkSVG from '../../icons/bookmark.svg'
import createSVG from '../../icons/create.svg'
import settingsSVG from '../../icons/settings.svg'

const buttonsConfig = [
  { svgPath: homeSVG, text: 'Home' },
  { svgPath: bookmarkSVG, text: 'Bookmarks' },
  { svgPath: createSVG, text: 'Create' },
  { svgPath: settingsSVG, text: 'Settings' },
]

export default function Navigation(onNavigate) {
  // destructuring assignment
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement('img', { src: svgPath, alt: text })
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  const el = createElement('nav', { className: 'Navigation' }, ...buttons)
  return el
}
