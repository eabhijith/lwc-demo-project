import { LightningElement } from 'lwc';

export default class GitSearchBox extends LightningElement {
    handleClick(event) {

        console.time('gameengine time');
        // 50 lines of bussines logic
        console.log('%c something!!! clicked for  🔥','background: #222; color: #bada55;font-size:10rem');
        console.timeEnd('gameengine time');
    }
}