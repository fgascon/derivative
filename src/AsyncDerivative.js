'use strict';
const Derivative = require('./Derivative');
const slice = [].slice;

class AsyncDerivative extends Derivative {
    constructor (sourcesOrInit, onResolve, onError) {
        if (Array.isArray(sourcesOrInit)) {
            super(sourcesOrInit, function compute() {
                const sources = slice.call(arguments);
                const values = new Array(sources.length);
                let loading = false;
                for (let i = 0; i < sources.length; i++) {
                    const source = sources[i];
                    if (source.error) {
                        try {
                            return {
                                loading: false,
                                error: onError ? onError(source.error) : source.error,
                            };
                        } catch (error) {
                            return {
                                loading: false,
                                error: error,
                            };
                        }
                    } else if (source.loading) {
                        loading = true;
                    } else {
                        values[i] = source.value;
                    }
                }

                if (loading) {
                    return {
                        loading: true,
                    };
                }

                try {
                    return {
                        loading: false,
                        value: onResolve ? onResolve.apply(this, values) : values[0],
                    };
                } catch (error) {
                    return {
                        loading: false,
                        error,
                    };
                }
            });
        } else if (typeof sourcesOrInit === 'function') {
            super({
                loading: true,
            });
            sourcesOrInit(value => {
                this.resolve(value);
            }, error => {
                this.reject(error);
            });
        } else if (typeof sourcesOrInit === 'object' && typeof sourcesOrInit.then === 'function') {
            super({
                loading: true,
            });
            sourcesOrInit.then(value => {
                this.resolve(value);
            }, error => {
                this.reject(error);
            });
        } else {
            super(sourcesOrInit || {
                loading: true,
            });
        }
    }

    derive (onResolve, onError) {
        return new AsyncDerivative([this], onResolve, onError);
    }

    catch (onError) {
        return this.derive(null, onError);
    }

    get isLoading () {
        return this.getValue().loading;
    }

    get value () {
        return this.getValue().value;
    }

    get error () {
        return this.getValue().error;
    }

    startLoading () {
        this.setValue({
            loading: true,
        });
    }

    resolve (value) {
        this.setValue({
            loading: false,
            value,
        });
    }

    reject (error) {
        this.setValue({
            loading: false,
            error,
        });
    }
}

module.exports = AsyncDerivative;
