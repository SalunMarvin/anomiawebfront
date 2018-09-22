import { observable, action } from 'mobx'
import axios from 'axios'

export class AnomiaController {
  @observable card = { _id: 1, title: 'N/A', icon: 'ban', turned: false, color: '#000000' }

  @action getNewCard = () => {
    console.log('Change Card From API');
    axios.get('http://127.0.0.1:8083/cards/random')
      .then(response => {
        this.card = response.data.Card

        console.log(this.card);
      });
  };
}