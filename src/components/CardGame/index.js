 import './style.css'
 
 function CardGame(icon="tag" , alt="tag logo"){
    return/*html*/`
    
        <article class="card-game">
            <img class="tag-img" src="images/${icon}.png" alt="${alt}"/>
        </article>

    `

}

export default CardGame;