import Header from './components/Header'
import Card from './components/Card'
import Navigation from './components/Navigation/Navigation'
import createElement from './lib/createElement'

const { el: headerEl, setText: setHeaderText } = Header(
  'Quiz App',
  'May the best win!'
)

const navigation = Navigation(navigate)

function navigate(text) {
  console.log(text)
}

const grid = createElement(
  'div',
  { className: 'appGrid' },
  headerEl,
  Card('Foo bar?', 'Bar baz!'),
  navigation
)

setHeaderText('Create', 'a new card')

document.body.append(grid)
