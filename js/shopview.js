let View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#shop-template').innerHTML,
    bindings: {
        'model.tires' : '.tires',
        'model.paint' : '.paint',
        'model.exhaust' : '.exhaust',
        'model.horsepower' : '.horsepower',
        'model.mpg' : '.mpg',
        'model.total' : '.total',
    },
    render: function () {
        let model = this.model;
        this.renderWithTemplate();
        let tireBtn = document.querySelector('#tireRepair');
        tireBtn.addEventListener('click', function () {
            if (model.tires < 4) {
                model.tires++;
                model.total = model.total + 200;
            }
            if (model.tires === 4) {
                tireBtn.disabled = true;
            }
        });
        let redBtn = document.querySelector('#redPaint');
        redBtn.addEventListener('click', function () {
            model.paint = "Red";
            model.total = model.total + 300;
        }); 
        let greenBtn = document.querySelector('#greenPaint');
        greenBtn.addEventListener('click', function () {
            model.paint = "Green";
            model.total = model.total + 300;
        }); 
        let orangeBtn = document.querySelector('#orangePaint');
        orangeBtn.addEventListener('click', function () {
            model.paint = "Orange";
            model.total = model.total + 300;
        }); 
        let blackBtn = document.querySelector('#blackPaint');
        blackBtn.addEventListener('click', function () {
            model.paint = "Black";
            model.total = model.total + 300;
        }); 
        let exhaustBtn = document.querySelector('#exhaustfix');
        exhaustBtn.addEventListener('click', function () {
            if (model.exhaust === "Broken") {
                model.exhaust = "Fixed";
                model.total = model.total + 300;
            }
        });
        let hpBtn = document.querySelector('#hpIncrease');
        hpBtn.addEventListener('click', function () {
            model.horsepower = model.horsepower + 10;
            model.total = model.total + 100;
        });
        let mpgBtn = document.querySelector('#mpgIncrease');
        mpgBtn.addEventListener('click', function () {
            model.mpg = model.mpg + 5;
            model.horsepower--;
            model.total = model.total + 100;
        })
        
    },
});