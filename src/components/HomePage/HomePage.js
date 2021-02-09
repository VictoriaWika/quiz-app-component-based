import createElement from '../../lib/createElement'
import Card from '../Card'

export default function HomePage(cards) {
  const el = createElement('main', { className: 'HomePage', hidden: false })

  cards && setCards(cards)

  function setCards(cards) {
    const cardElements = cards.map(({ question, answer }) =>
      Card(question, answer)
    )
    el.innerHTML = ''
    el.append(...cardElements)
  }

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    setCards,
    show,
    hide,
  }
}
