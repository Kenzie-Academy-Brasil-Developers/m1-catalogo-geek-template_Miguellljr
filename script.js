const productsArray = [
  //produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  //produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$ 99,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$ 275,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$ 160,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$ 120,00",
    type: "Paintings",
  },
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$ 700,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$ 950,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$ 1030,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$ 870,00",
    type: "Action Figures",
  },
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$ 510,00",
    type: "Action Figures",
  },
];


function createItems(str, arr) {
  let paintingsList = document.querySelector(".paintings");
 
  
  for (let i = 0; i < arr.length; i++) {
    const productsArray = arr[i];
    
    let li = document.createElement("li");
    let img = document.createElement("img");
    let product = document.createElement("h3");
    let price = document.createElement("p");
    
    li.classList.add("card");
    
    img.src = productsArray.image;
    
    product.classList.add("product-name");
    product.innerText = productsArray.name;
    
    price.classList.add("text");
    price.innerText = productsArray.price;
    
    li.appendChild(img);
    li.appendChild(product);
    li.appendChild(price);
    
    paintingsList.appendChild(li);
  }

  let figuresList = document.querySelector(".figures");
  
  for (let i = 0; i < str.length; i++) {
    const productsArray = str[i];
    
    let li = document.createElement("li");
    let img = document.createElement("img");
    let product = document.createElement("h3");
    let price = document.createElement("p");
    
    li.classList.add("card");
    
    img.src = productsArray.image;
    
    product.classList.add("product-name");
    product.innerText = productsArray.name;
    
    price.classList.add("text");
    price.innerText = productsArray.price;
    
    li.appendChild(img);
    li.appendChild(product);
    li.appendChild(price);
    
    figuresList.appendChild(li);
  }

}


const actionFiguresArray = [];

const paintingsArray = [];

function separateItems(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    if (productsArray[i].type === "Action Figures") {
      actionFiguresArray.push(productsArray[i]);
    } else if (productsArray[i].type === "Paintings") {
      paintingsArray.push(productsArray[i]);
    }
  }
  return actionFiguresArray, paintingsArray;
}

separateItems(productsArray);

createItems(actionFiguresArray,paintingsArray);