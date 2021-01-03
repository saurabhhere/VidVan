import React, { Component } from 'react';
import './MemoryGame.css';
import om from './Images/om.png';
import chair from './Images/chair.png';
import chairw from './Images/chairw.png';
import bow from './Images/bow.png';
import boww from './Images/boww.png';
import bag from './Images/bag.png';
import bagw from './Images/bagw.png';
import ironbox from './Images/ironbox.png';
import ironboxw from './Images/ironboxw.png';
import mat from './Images/mat.png';
import matw from './Images/matw.png';
import mirror from './Images/mirror.png';
import mirrorw from './Images/mirrorw.png';
import torch from './Images/torch.png';
import torchw from './Images/torchw.png';
import tubelight from './Images/tubelight.png';
import tubelightw from './Images/tubelightw.png';
import white from './Images/white.png';
import Navbar from '../Navbar/Navbar';


class Game extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const cardArray = [
      { name: "chair", img: chair, },
      { name: "chair", img: chairw, },
      { name: "bow", img: bow, },
      { name: "bow", img: boww, },
      { name: "bag", img: bag, },
      { name: "bag", img: bagw, },
      { name: "ironbox", img: ironbox, },
      { name: "ironbox", img: ironboxw, },
      { name: "mat", img: mat, },
      { name: "mat", img: matw, },
      { name: "mirror", img: mirror, },
      { name: "mirror", img: mirrorw, },
      { name: "torch", img: torch, },
      { name: "torch", img: torchw, },
      { name: "tubelight", img: tubelight, },
      { name: "tubelight", img: tubelightw, },
    ];



    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.memoryGame-grid')
    const resultDisplay = document.querySelector('#memoryGame-result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', om)
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }

    //check for matches
    function checkForMatch() {
      var cards = document.querySelectorAll('.memoryGame-grid img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]

      if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', om)
        cards[optionTwoId].setAttribute('src', om)

      }
      else if (cardsChosen[0] == cardsChosen[1]) {
        //   alert('अत्युत्तम (you have found a match)')
        cards[optionOneId].setAttribute('src', white)
        cards[optionTwoId].setAttribute('src', white)
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', om)
        cards[optionTwoId].setAttribute('src', om)

      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.textContent = 'अभिनन्दनानि!'
      }
    }

    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
      }
    }

    createBoard()

  }

  render() {
    return (
      <div className="memoryGame-container">
        <Navbar />
        <div className="memoryGame-heading">Memory Game</div>
        <div className="memoryGame-flex">
          <div className="memoryGame-instruction">
            <div className="memoryGame-instr-heading" >Instructions</div>
            <div className="memoryGame-instr-content">1:- Matching Game is the traditional matching game where you flip two cards to see if they match.</div>
            <div className="memoryGame-instr-content">2:- This game consist of 16 cards that is to be fliped.</div>
            <div className="memoryGame-instr-content">3:- 8 cards contains images and other 8 consist of a corresponding word to the image.</div>
            <div className="memoryGame-instr-content">4:- If the two cards are identical, they will disappear.</div>
            <div className="memoryGame-instr-content">5:- If however, the two cards are not identical, it will automatically be faced down in the same place</div>
            <div className="memoryGame-instr-content">6:- Make sure that all the cards disappear to complete the game.</div>
          </div>
          <div className="memoryGame-game">
            <h3 className="memoryGame-score">Score:<span id="memoryGame-result"></span></h3>
            <div className="memoryGame-grid"></div>
          </div>
        </div>


      </div>
    )
  }
}

export default Game;