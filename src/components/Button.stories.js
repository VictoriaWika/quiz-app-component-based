import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

export const base = () => Button('Hello World')
export const longText = () => Button('Hello World, this is a wonderfull day!')
