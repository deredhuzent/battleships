/**
 * MAIN
 * 
 * @Copyright: (C) 2020 deredhuzent
 * @Author: Deryana Dhuzent
 * @Version: 1.0.0
 * 
 * @summary:
 */

'use strict';

import { Map, MAP_SIZE } from './map.js'

class Game {

    constructor ( size = MAP_SIZE) {
        // TODO: initialize local variables
        this.size = size;
        this.map = new Map ( size );

        // TODO: need to initialize the ship list per requirements
        this.shipList = []; 
        this.message = "Pressed";

        // TODO: generate map UI
        this.generateMap ( this.size );
        
        // TODO: tell map to place ships
        this.map.place ( this.shipList)

        // TODO: show splash screen
        document.querySelector("#play-btn")
            .addEventListener('click', event => this.setupGameHandlers(event));

        document.querySelector("#game-area")
            .addEventListener('click', event => {

                document.querySelector('#console').innerHTML = "Make it here";
                //go get the row, col from the event.target
                let col =event.target.getAttribute("data-col");
                let row = event.target.getAttribute("data-row");

                //check the map for a ship at row, col

                //do the right thing depeding on what if anything was hit
                
            })
    }

    run() {
        //TODO: give player control to find ships
    }

    generateMapHeader ( size ) {

        let markup = "";
        let startingColumnChar = 'A';
        let currentCharCode = startingColumnChar.charCodeAt(0);

        for (let colId = 0; colId < size; colId++) {

            currentCharCode = startingColumnChar.charCodeAt(0) + colId;
            markup += `<th class="center">${String.fromCharCode(currentCharCode)}</th>`;
        
        }

        return markup;
    }

    setupGameHandlers(event) {

        let assert = true;
        event.target.innerHTML = this.message;

        //hide the splash, show the game screen
        let splashE1 = document.querySelector('#splash'); 
        splashE1.classList.remove("show");
        splashE1.classList.ass("hide");

        let gameScreenE1 = document.querySelector("#game.screen");
        gameScreenE1.classList.remove("hide");
        gameScreenE1.classList.add("show");
    }

    transition( fromScId, toScreenId ) {
        let fromE1 = document.querySelector(fromScreenId);
        el.classList.remove("hide");
        el.classList.add("show");
    }

    transitionFrom(screenId)

    generateMap( size ) {

        // TODO: Build the game map at the size specified
        let demoAreal = document.querySelector('game-screen');
        //let demoAreal = document.querySelector('game-screen-enemy');

        //Build a table of cells
        let markup = `<table class="game-screen">` ;
            markup += `<th class="center">` ;
            markup += `</th>` ;
            markup += this.generatMapHeader ( size );

            for (let eachRow = 0; eachRow < size; eachRow++) {

                markup += `<tr class="game-table-row">` ;
                markup +=   `<th class="middle">${eachRow + 1}</th>`;
                for (let eachCol = 0; eachCol < size; eachCol++){

                    markup += `<td class="empty"></td>` ;

                }

                markup += "</tr>";
            }
        markup += "</table>";

        demoAreal.innerHTML = markup;
        demoAreal.innerHTML = markup;
    }
}

let game = new Gamepad();
game.run();