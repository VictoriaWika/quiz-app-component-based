import CreateForm from './components/CreateForm'
import Header from './components/Header'
import HomePage from './components/HomePage/HomePage'
import Navigation from './components/Navigation/Navigation'
import createElement from './lib/createElement'

const cards = []

const header = Header('Quiz App')

const navigation = Navigation(onNavigate) // dependency injection

const homePage = HomePage()

const form = CreateForm(onSubmit)

const createPage = createElement(
  'main',
  { className: 'CreatePage', hidden: true },
  form
)

const grid = createElement(
  'div',
  { className: 'appGrid' },
  header,
  homePage,
  createPage,
  navigation
)

document.body.append(grid)

function onSubmit(question, answer) {
  cards.push({ question, answer })
  homePage.setCards(cards)
}

function onNavigate(text) {
  if (text === 'Home') {
    homePage.show()
    // createPage.hide()
    header.setText('Homepage')
  }

  if (text === 'Create') {
    homePage.hide()
    // createPage.show()
    header.setText('Create cards')
  }
}
