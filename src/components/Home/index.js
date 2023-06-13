import {Component} from 'react'
import JokesContainer from '../JokesContainer'
import './index.css'

class Home extends Component {
  state = {
    data: [],
  }

  async componentDidMount() {
    const url =
      'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10'
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    const json = await response.json()

    const {jokes} = json

    console.log(jokes)

    this.setState({data: jokes})
  }

  render() {
    const {data} = this.state
    return (
      <>
        <h1 className="heading"> Jokes Container</h1>
        <ul>
          {data.map(eachJoke => (
            <JokesContainer key={eachJoke.id} jokes={eachJoke} />
          ))}
        </ul>
      </>
    )
  }
}

export default Home
