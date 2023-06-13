import './index.css'

const JokesContainer = props => {
  const {jokes} = props
  const {category, joke} = jokes
  return (
    <li className="items-container">
      <p>{category}</p>
      <h1>{joke}</h1>
    </li>
  )
}

export default JokesContainer
