import { observable, action } from 'mobx'
import axios from 'axios'

export class AnomiaController {
  @observable card = { _id: 1, title: 'N/A', icon: 'ban', turned: false, color: '#000000' }
  @observable score = 0

  @action getNewCard = () => {
    console.log('Change Card From API');
    axios.get('https://88cf9727.ngrok.io/cards/random')
      .then(response => {
        this.card = response.data.Card

        console.log(this.card);
      });
  };
}