'use strict';

class App {

    constructor( size = 10) {
        // TODO: initialize local variable
        this.size = size;
        this.header = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

        this.generateMap(this.size);

        // TODO: place ships on map

        // TODO: use the greeting to show on the screen
    }

    run() {
        // TODO: give player control to find ships
    }

    generateMap( size ) {
        // TODO: Build the game map at the size specified
        //document.querySelector('#game-screen');
        let demoAreaEl =  $el.get();
 
        //build a table of cells
        let markup = "<table>";
        markup += `<th>`;
            for (let colId = 0; colId < size; colId++) {          
                markup +=  `<td>${this.header[colId]}</td>`;
            }      
        markup += `</th>`;

            for (let eachRow = 0; eachRow < size; eachRow++) {

                markup += "<tr>";
                markup +=   `<td>${eachRow}</td>`;
                for (let eachCo1 = 0; eachCo1 < size; eachCo1++) {
                    markup +=   `<td class="water"></td>`;           
                }    
                  
                markup += "</tr>"; 
            }
        markup += "</table>";

        //demoAreaEl.innerHTML = markup;
        $el.thmll(markup);
    }
}

let app = new App();
app.run();