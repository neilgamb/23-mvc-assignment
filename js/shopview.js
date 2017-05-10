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

        console.log('rendering');
        this.renderWithTemplate();
        
    },
});