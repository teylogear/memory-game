import { albums } from './api.js';

document.addEventListener("DOMContentLoaded", () => init()); 

const init = () => {
  albums.sort(() => Math.random() - 0.5);

  albums.forEach( ({ id, name, imgSrc })  => {
    const card = `
      <article class="card" id="${id}" name="${name}"> 
        <img class="face" src="${imgSrc}">
        <div class="back"></div>
      </article>
    `;
    container.innerHTML += card;   
  });

  document.querySelectorAll("article").forEach( e => {
    e.addEventListener("click", () => {
      e.classList.toggle("toggleCard");      
      e.firstElementChild.classList.toggle("toggleCard");
    });
  });
};