import CreatePage from './CreatePage'

export default {
  title: 'Pages/CreatePage',
  component: CreatePage,
}

export const base = () => CreatePage([{}]).el
