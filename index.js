// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    toss: 0,
    Heads: 0,
    Tails: 0,
    Total: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossBtn = () => {
    const n = parseInt(Math.random() * 10)
    if (n < 5) {
      this.setState({toss: 0})
      } else {
      this.setState({toss: 1})
      }

const{toss}=this.state
    
    if(toss===0){
      this.setState(prevState => ({Total: prevState.Total + 1}))
      this.setState(prevState => ({Tails: prevState.Tails + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }else{
      this.setState(prevState => ({Total: prevState.Total + 1}))
      this.setState(prevState => ({Heads: prevState.Heads + 1}))
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    }

  render() {
    const {toss, Total, Heads, Tails, imageUrl} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="i" />
          <button type="button" onClick={this.tossBtn}>
            Toss Coin
          </button>
          <div className="counts">
            <p>Total:{Total}</p>
            <p>Heads:{Heads}</p>
            <p>Tails:{Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
