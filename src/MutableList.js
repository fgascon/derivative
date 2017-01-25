'use strict';
const List = require('immutable').List;
const Mutable = require('./Mutable');

class MutableList extends Mutable {
    constructor (initialValue) {
        const formattedValue = initialValue ? (
                List.isList(initialValue) ? initialValue : new List(initialValue)
            ) :
            new List();
        super(formattedValue);
    }

    set (value) {
        super.set(List.isList(value) ? value : new List(value));
    }

    //persistent changes
    setSize (size) {
        this.set(this.get().setSize(setSize));
    }

    setKey (key, value) {
        this.set(this.get().set(key, value));
    }

    remove (index) {
        this.set(this.get().remove(index));
    }

    delete (index) {
        this.remove(index);
    }

    insert (index, value) {
        this.set(this.get().insert(index, value));
    }

    clear () {
        this.set(this.get().clear());
    }

    push (item) {
        const list = this.get();
        const newList = arguments.length > 1 ? list.push.apply(list, arguments) : list.push(item);
        this.set(newList);
    }

    pop () {
        return this.set(this.get().pop());
    }

    shift () {
        return this.set(this.get().shift());
    }

    unshift (item) {
        const list = this.get();
        const newList = arguments.length > 1 ? list.unshift.apply(list, arguments) : list.unshift(item);
        this.set(newList);
    }

    update (number, notSetValue, updater) {
        this.set(this.get().update(number, notSetValue, updater));
    }

    toggle (value) {
        const list = this.get();
        if (list.includes(value)) {
            this.set(list.remove(value));
        } else {
            this.set(list.push(value));
        }
    }

    splice (index, removeNum, item) {
        if (arguments.length > 3) {
            this.set(this.get().splice.apply(list, arguments));
        } else {
            this.set(this.get().splice(index, removeNum, item));
        }
    }
}

module.exports = MutableList;
