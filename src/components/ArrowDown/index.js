import './style.css'

function ArrowDown(currentPlayer = 1) {
  return /*html*/ `
        <img class="arrow-down" 
            data-currentPlayer="${currentPlayer}"
            src="images/arrowDown.png" 
            alt="ícone seta para baixo"
        />
    `;
}

export default ArrowDown;
