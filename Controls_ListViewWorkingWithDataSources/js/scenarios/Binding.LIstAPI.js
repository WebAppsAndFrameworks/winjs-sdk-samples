(function () {
    var _tIndex = 0;
    //Create an array of the letters in the alphabet
    var _letterSrc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    // Our Binding.List
    var lettersList = {};

    // Initializes the first set of tiles
    // Uses an array that will be converted into a Binding.List
    function initTiles() {
        var letters = [];
        for (var i = 0; i < 7; i++) {
            letters[i] = generateTile();
        }
        lettersList = new WinJS.Binding.List(letters);

        var list2 = document.getElementById("listView2").winControl;
        list2.itemDataSource = lettersList.dataSource;
        list2.itemTemplate = document.getElementById("tileTemplate");
        list2.forceLayout();
    }

    // Generates a tile with a random letter and counter
    function generateTile() {
        var tile = {
            letter: _letterSrc[Math.floor(Math.random() * _letterSrc.length)],
            counter: _tIndex
        };
        _tIndex++;

        return tile;
    }

    // Shuffles the order of the tiles
    function shuffleTiles() {
        var count = lettersList.length;
        if (count > 0) {
            // To shuffle the items, we pick one from the array of items, then move it to the front of the list
            // and then continue for the remaining items
            for (var itemIndex = 0; itemIndex < count; itemIndex++) {
                // find an item from the array
                var randomIndex = Math.floor(Math.random() * (count - itemIndex));
                //move the item to the start
                lettersList.move(randomIndex, 0);
            }
        }
    }

    // Remove the selected tile
    function removeSelected() {
        // Get the control
        var list2 = document.getElementById("listView2").winControl;

        if (list2.selection.count() > 0) {
            list2.selection.getItems().then(function (items) {
                //Work backwards as the removal will affect the indices of subsequent items
                for (var j = items.length - 1; j >= 0; j--) {
                    // To remove the items, call splice on the list, passing in a count and no replacements
                    lettersList.splice(items[j].index, 1);
                }
            });
        }
    }

    // Demonstrates how to modify data for the selected items
    function swapSelected() {

        // Get the control, itemDataSource and selected items
        var list2 = document.getElementById("listView2").winControl;

        if (list2.selection.count() > 0) {
            list2.selection.getItems().then(function (items) {
                // To edit the item, call change on the itemDataSource passing in the key and new data
                items.forEach(function (currentItem) {
                    lettersList.setAt(currentItem.index, generateTile());
                });
            });
        }
    }

    // Adds a new tile to the end of the collection
    function addTile() {
        //Create the data for the tile
        var tile = generateTile();
        lettersList.push(tile);
    }

    WinJS.Namespace.define("Scenario2Name", {
        initialize: function () {
            WinJS.UI.processAll();

            document.querySelector("#scenario2Input #shuffle").addEventListener("click", shuffleTiles, false);
            document.querySelector("#scenario2Input #removeSelected").addEventListener("click", removeSelected, false);
            document.querySelector("#scenario2Input #swapSelected").addEventListener("click", swapSelected, false);
            document.querySelector("#scenario2Input #addTile").addEventListener("click", addTile, false);

            initTiles();
        }
    });
})();
