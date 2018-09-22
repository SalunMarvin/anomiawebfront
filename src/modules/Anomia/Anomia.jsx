import React, { Component } from 'react'
import { inject, observer, Provider } from 'mobx-react'
import { AnomiaController } from './AnomiaController'
import './Anomia.scss'

import { AnomiaCard } from '../AnomiaCard/AnomiaCard' 
import { observable } from 'mobx';

@observer
export default class Anomia extends Component {
  @observable card = this.anomiaController.card
  
  constructor(props) {
    super(props)
    this.anomiaController = new AnomiaController(this.store)
  }

  renderCard = () => {
    return (
      <AnomiaCard title={this.anomiaController.card.title} icon={this.anomiaController.card.icon} color={this.anomiaController.card.color} />
    )
  }

  render() {
    return (
      <Provider AnomiaController={this.anomiaController}>
        <div>
          {this.renderCard()}
        </div>
      </Provider>
    )
  }
}