import createElement from '../../lib/createElement'
import Button from '../Button'
import './CreateForm.css'

export default function CreateForm(onSubmit) {
  const form = createElement('form', {
    className: 'CreateForm',
    innerHTML: `
      <label>Question:
      <input required name="question" placeholder="What is...?">
      </label>
      <label>Answer:
      <input required name="answer" placeholder="It is...">
      </label>
      `,
  })

  form.append(Button('Submit Your Question!'))

  form.addEventListener('submit', event => {
    event.preventDefault()
    const { question: questionInput, answer: answerInput } = form.elements
    const question = questionInput.value
    const answer = answerInput.value

    onSubmit(question, answer)
  })

  return form
}
