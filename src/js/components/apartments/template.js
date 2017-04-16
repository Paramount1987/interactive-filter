module.exports.generateTemplate = function(data){
    return `<li>
            <a class="apartment-item" href="#">
                <img class="apartment-item__img" src="${data.img}" alt="img">
                <span class="apartment-item__body">
                <span class="apartment-item__name">${data.name}</span>
            <span class="apartment-item__price">
                <span class="icon-euro">€</span> ${data.price}
                </span>
                </span>
                </a>
            </li>`
};