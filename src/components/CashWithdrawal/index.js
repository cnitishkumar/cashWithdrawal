import {Component} from 'react'
import './index.css'
import Currency from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  getValue = value => {
    this.setState(prevAmont => ({
      amount: prevAmont.amount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="bg-container">
        <div className="cash-container">
          <div className="logo-name-container">
            <div className="logo">
              <p>S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="your-balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="balance-container">
              <p className="amount">{amount}</p>
              <p className="rupees">In Rupees </p>
            </div>
          </div>
          <p className="withdrawal">Withdraw</p>
          <p className="choose-amount">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul">
            {denominationsList.map(each => (
              <Currency
                key={each.id}
                denominationsDetails={each}
                getValue={this.getValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
