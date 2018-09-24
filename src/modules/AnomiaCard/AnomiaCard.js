import React from 'react'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'
import socketIOClient from "socket.io-client";
import './AnomiaCard.scss'

@inject('AnomiaController')
@observer
export class AnomiaCard extends React.Component {

  constructor(props) {
    super(props)
    this.anomiaController = props.AnomiaController
  }

  componentDidMount() {
   
  }

  handleInputChange = (event) => {
    let key = event.target.name
    let value = event.target.value

    return this[key] = value
  }

  changeCard = () => {
    console.log('Change Card')
    this.anomiaController.getNewCard();
  }

  scorePoint = () => {
    this.anomiaController.score++;
  }

  render() {
    return (
      <section className='wrapper' onClick={this.changeCard}>
        
        <div className='cardBackground'>
        {/* <div className="scoreButton" onClick={this.scorePoint}>{this.props.score}</div>   */}
          <div className='title'>{this.props.title}</div>
          <div className='suit' style={{ color: this.props.color }} ><i className={"fa fa-" + this.props.icon} ></i></div>
          <div className='backwardsTitle'>{this.props.title}</div>
        </div>
      </section>
    )
  }
}
