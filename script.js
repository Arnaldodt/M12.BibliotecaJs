class each{
    _arreglo = []
    _valor;
    constructor(){
        this._arreglo = new Array;
        this._valor = undefined;
    }
    map(arr, callback) {
        for(let i = 0; i < arr.length; i++) {
            this.arreglo = callback(arr[i]);
        }
    }
    reduce(arr, callback, inicio){
        this.valor = inicio;
        for(let i = 0; i < arr.length; i++) {
            this.valor = callback(this.valor, arr[i]);
        }
    }
    find(arr, callback, condicion) {
        let i = 0;
        while (this.valor === undefined){
            if (callback(arr[i]) === condicion){
                this.valor = arr[i];
            } 
            i++
        }
    }
    filter(arr, callback, condicion) {
        for(let i = 0; i < arr.length; i++) {
            if (callback(arr[i]) === condicion){
                this.arreglo = arr[i];
            } 
        }
    }
    set arreglo(valor){
        this._arreglo.push(valor);
    }
    get arreglo(){
        return this._arreglo
    }

    set valor(valor){
        this._valor = valor;
    }
    get valor(){
        return this._valor
    }
}
var _ = {
    map: function(arr,func) {
        let buscar = new each();
        buscar.map(arr,func)
        return buscar.arreglo;
    },
    reduce: function(arr,func,inicio) { 
        let buscar = new each();
        buscar.reduce(arr,func,inicio)
        return buscar.valor;
    },
    find: function(arr,func,cond) {   
        let buscar = new each();
        buscar.find(arr,func,cond)
        return buscar.valor;
    },
    filter: function(arr,func,cond) { 
        let buscar = new each();
        buscar.filter(arr,func,cond)
        return buscar.arreglo;
    },
    reject: function(arr,func,cond) { 
        let buscar = new each();
        buscar.filter(arr,func,cond)
        return buscar.arreglo;
    }
}

var evens
evens =_.map([1, 2, 3], function(num){ return num * 3; });
console.log(evens); // [3, 6, 9]

evens = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
console.log(evens); // 6

evens = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }, true);
console.log(evens); // 2

evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }, true);
console.log(evens); // [2,4,6].

evens = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }, false);
console.log(evens); // [1, 3, 5].