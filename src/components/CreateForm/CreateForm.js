import createElement from '../../lib/createElement'
import './CreateForm.css'

export default function CreateForm() {
  const el = createElement('form', {
    className: 'CreateForm',
    innerHTML: `
      <label>Question:
      <input name="question" placeholder="What is...?">
      </label>
      <label>Answer:
      <input name="answer" placeholder="It is...?">
      </label>
      <button>Create Question</button>
      
      `,
  })
  return el
}
