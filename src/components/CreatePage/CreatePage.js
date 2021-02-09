import createElement from '../../lib/createElement'
import CreateForm from '../CreateForm'

export default function CreatePage(onSubmit) {
  const el = createElement(
    'main',
    { className: 'CreatePage', hidden: true },
    CreateForm(onSubmit)
  )

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    show,
    hide,
  }
}
