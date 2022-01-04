import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {

    window.cardFrontBack = {}
    window.cardFrontBack.handleClick = ({target}) => {
        const $origin = target 
        const $cardFrontBack = $origin.closest('.card-front-back')
        $cardFrontBack.classList.toggle('-active')
    }

  return /*html*/ `
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                 ${CardGame()}
            </div>

            <div class="card -back">
                ${CardGame("javascript", "logo do js")}
            </div>
        </article>
    `;
}

export default CardFrontBack;
