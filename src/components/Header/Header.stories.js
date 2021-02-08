import Header from './Header'

export default {
  title: 'Header',
  component: Header,
}

export const base = () => Header('Quiz App', 'May the best win!').el
