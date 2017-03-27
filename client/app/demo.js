/**
 * Created by dinhceo on 23/03/2017.
 */
const _ = require('lodash');
class Demo {
    constructor() {

    }

    render() {
        let element = document.createElement('div');

        /* lodash is required for the next line to work */
        element.innerHTML = _.join(['<button webpack component demo'], ' ');

        return element;
    }
}

module.exports = Demo;