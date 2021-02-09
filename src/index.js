import Card from './components/Card'
import CreateForm from './components/CreateForm'
import Header from './components/Header'
import Navigation from './components/Navigation/Navigation'
import createElement from './lib/createElement'

const { el: headerEl } = Header('Quiz App', 'May the best win!')

const navigation = Navigation(onNavigate) // dependency injection

const homePage = createElement(
  'main',
  { className: 'HomePage', hidden: false },
  Card('Foo bar?', 'Bar baz!'),
  Card('Bar bar?', 'Bar baz!'),
  Card('Baz bar?', 'Bar baz!')
)

const form = CreateForm(onSubmit)

const createPage = createElement(
  'main',
  { className: 'CreatePage', hidden: true },
  form
)

const grid = createElement(
  'div',
  { className: 'appGrid' },
  headerEl,
  homePage,
  createPage,
  navigation
)

document.body.append(grid)

function onSubmit(question, answer) {
  console.log(question, answer)
}

function onNavigate(text) {
  if (text === 'Home') {
    homePage.hidden = false
    createPage.hidden = true
  }

  if (text === 'Create') {
    homePage.hidden = true
    createPage.hidden = false
  }
}
