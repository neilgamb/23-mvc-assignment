window.addEventListener('load', function () {
    let ShopModel = require('./shopmodel');
    let ShopView = require('./shopview');

    let repairShop = new ShopModel();
    
    repairShop.tires = 0;
    repairShop.paint = 'Red';
    repairShop.exhaust = "Broken";
    repairShop.horsepower = 40;
    repairShop.mpg = 15;
    repairShop.total = 0;

    let sv = new ShopView({
        el: document.querySelector('section'),
        model: repairShop,
    });

    sv.render();

});