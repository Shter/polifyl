    Object.prototype.create = function creating(prop) {
        function Create(){}
        Create.prototype = prop;
        return new Create()
    };

    Object.prototype.keys1 = function keys(prop){
        let res = [];
        let i = 0;
        for(let key in prop){
            res[i] = key;
            i++;

        }
        return res;
    };

    Array.prototype.pop1 = function(){
            let lastInd = this.length-1;
            let deleted = this[lastInd];
            this.length -= 1;
            return deleted;
    };

    Array.prototype.push1 = function(){
        for(let i = 0; i < arguments.length; i++){
            let indToPusH = this.length;
            this[indToPusH] = arguments[i];
        }
    };

    Array.prototype.shift = function(){
        let deleted = this[0];
        this[0] = undefined;
        let arr = this.filter(function (el) {
            return el != null;
        });
        return arr;
    };

    Array.prototype.unshift = function () {
        let count = arguments.length;
        for(let i = this.length - 1; i >= 0; i--) {
            this[count + i] = this[i]
        }
        for(let i=0; i < count; i++){
            this[i] = arguments[i]
        }
    };

    Array.prototype.map1 = function (callback) {
        let res = [];
        for(let i = 0; i < this.length; i++) {
            resElem = callback(this[i], i, this);
            res[i] = resElem;
        }
        return res;
    };

    Array.prototype.forEach1 = function (callback) {
        for(let i = 0; i < this.length;  i++){
            callback(this[i], i, this)
        }
    };

    Array.prototype.filter1 = function (callback) {
        let res = [];
        let count = 0;
        for(let i = 0; i < this.length; i++) {
            if(callback(this[i], i, this)) {
                res[count] = this[i];
                count++;
            }
        }
    };

    Array.prototype.reverse1 = function () {
        let temporary = [];
        let count = 0;
        for(let i = this.length - 1; i >= 0; i--) {
            temporary[count] = this[i];
            count++;
        }
        for(let i = 0; i < this.length; i++) {
            this[i] = temporary[i]
        }
        return this
    };

    Array.prototype.join1 = function (separator) {
        let res = '';
        for(let i = 0; i < this.length; i++) {
            if(i === this.length) {
                res = res + this[i] + separator;
            }else{
                res = res + this[i]
            }
        }
        return res;
    };

    Array.prototype.reduce1 = function (callback, initialValue) {
        let temporary = initialValue !== undefined ? initialValue : 0;
        for(let i = 0; i < this.length; i++) {
            temporary = callback(temporary, this[i], i, this)
        }
        return temporary;
    };

    Array.prototype.sort = function (a,b) {

    };

    Object.prototype.freeze = function (prop) {
        
    };
    
    Array.prototype.some = function (callback) {
        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) { return true }
            else { return false }
        }
     };

    Array.prototype.every = function (callback) {
        for (let i = 0; i < this.length; i++) {
            if (!callback(this[i], i, this)) { return false }
            else { return true; }
        }
    };

    Promise.prototype.ALL = function promise(promises) {
        return new Promise(function(resolve, reject){
            let result = [];
            let coutPromises = promises.length;
            promises.forEach(function (promise, i) {
                if(!(promise instanceof Promise)) {
                    result[i] = promise;
                    coutPromises--;
                } else {
                    promise.then(
                    data => {
                        result[i] = data;
                        coutPromises--;
                        if(!coutPromises){
                            resolve(result);
                        }
                    }
                ).catch(err => reject(err))
                }
            })
        })
    };

    Function.prototype.BIND = function (context) {
        let newArg = Array.prototype.slice.call(arguments, 1);
        let toBind = this;
        if(typeof(toBind) !== 'function') {
            throw new Error('not a func')
        }
        return function () {
            return toBind.apply(context,newArg)
        }
    };
