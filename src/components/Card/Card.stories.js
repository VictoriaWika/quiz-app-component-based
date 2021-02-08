import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

export const base = () =>
  Card('What does git log do?', 'Show the history of commits')
