window.addEventListener('load', function () {
    let ShopModel = require('./shopmodel');
    let ShopView = require('./shopview');

    let repairShop = new ShopModel();
    
    repairShop.tires = 0;
    repairShop.paint = 'Red';
    repairShop.exhaust = false;  // broken
    repairShop.horsepower = 40;
    repairShop.mpg = 15;
    repairShop.total = 0;

    let sv = new ShopView({
        el: document.querySelector('main'),
        model: repairShop,
    });

    sv.render();

    setupButtons(repairShop);
});

function setupButtons(model){

    let tireBtn = document.querySelector("#fix-tire");
    let paintBtn = document.querySelector("#fix-paint ");
    let exhaustBtn = document.querySelector("#fix-exhaust");
    let hpBtn = document.querySelector("#fix-horsepower");
    let mpgBtn = document.querySelector("#fix-mpg");

    tireBtn.addEventListener('click', function (){
        model.fixTire();
    });

    paintBtn.addEventListener('click', function (){
        model.paintCar();
    });

    exhaustBtn.addEventListener('click', function (){
        model.fixExhaust();
    });

    hpBtn.addEventListener('click', function (){
        model.boostHP();
    });

    mpgBtn.addEventListener('click', function (){
        model.boostMPG();
    });

};