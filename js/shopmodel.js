let State = require('ampersand-state');

/* Represents single vehilce at shop */
module.exports = State.extend({
    props: {
        tires: 'number',
        paint: 'string',
        exhaust: 'boolean',
        horsepower: 'number',
        mpg: 'number',
        total: 'number',
    },

    fixTire: function () {
        if(this.tires < 4){
            this.tires++;
            this.total += 200;
        }
    },

    paintCar: function (){
        if(this.paint === 'red'){
            this.paint = 'green';
        } else if (this.paint === 'green'){
            this.paint = 'orange'
        } else if (this.paint === 'orange'){
            this.paint = 'black'
        } else { 
            this.paint = 'red'}

            this.total += 300;
    },

    fixExhaust: function(){
        if(!this.exhaust){
            this.exhaust = true;
            this.total += 300;
        }
    },

    boostHP: function(){
        this.horsepower += 10;
        this.total += 100;
    },

    boostMPG: function(){
        if(this.horsepower > 0){
        this.mpg += 5;
        this.horsepower -= 1;

        this.total += 100;
        }
    },


});