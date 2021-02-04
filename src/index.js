import Button from './components/Button'
import Header from './components/Header'
import Card from './components/Card'

const header = Header('Quiz App', 'May the best win!')
document.body.append(header)

const card = Card('What does git log do?', 'Show the history of commits')
document.body.append(card)

const button = Button('Click me!')

document.body.append(button)
