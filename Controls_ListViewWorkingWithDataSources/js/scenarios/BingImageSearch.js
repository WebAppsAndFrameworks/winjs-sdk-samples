(function () {
 
    function id(elementId) {
        return document.getElementById(elementId);
    }

    // Save the dev key in app state and toggle the control enablement
    function saveKey() {
        var devkey = id("devkey").value;
        if (devkey !== "" && devkey.length > 12) {
            try {
                var localSettings = Windows.Storage.ApplicationData.current.localSettings;
                localSettings.values["devkey"] = devkey;
            }
            catch (err) {
                //do nothing;
            }
            toggleControls(true);
            doSearch();

        } else {
            toggleControls(false);
        }
    }

    // load the key from app state
    function loadKey() {
        var devkey = "";
       
        try {
            var localSettings = Windows.Storage.ApplicationData.current.localSettings;
            devkey = localSettings.values["devkey"];
            if (devkey !== null || devkey !== undefined) {
                devkey = "";
            }
        }
        catch (err) {
            devkey = "";
        }

        if (devkey !== "" && devkey.length > 12) {
            id("devkey").value = devkey;
            toggleControls(true);

        } else {
            toggleControls(false);
        }
        
    }

    // Toggles the enablement of the controls when we have a dev key
    function toggleControls(enabled) {
        id("queryCtrls").disabled = (!enabled);
        id("scenario1Output").disabled = (!enabled);
        if (enabled) {
            id("savekey").className = "action secondary";
            id("runquery").className = "action";

        } else {
            id("savekey").className = "action";
            id("runquery").className = "action secondary";
        }
    }

    // Initializes the data adapter and pass to the listview
    // Called when the search button is pressed.
    // The code for the data adapter is in js/BingImageSearchDataSource.js
    function doSearch() {
        var devkey = id("devkey").value;
        var searchTerm = id("query").value;

        var listview = id("listview1").winControl;
        var myTemplate = id("itemTemplate");
        
        //Create the bing itemDataSource
        var myDataSrc = new bingImageSearchDataSource(devkey, searchTerm);

        // Set the properties on the list view to use the itemDataSource
        listview.itemDataSource = myDataSrc;
        listview.itemTemplate = myTemplate;
    }

    WinJS.Namespace.define("Scenario1Name", {
        initialize: function () {
            WinJS.UI.processAll();

            WinJS.Utilities.query("#savekey").listen("click", saveKey);
            WinJS.Utilities.query("#runquery").listen("click", doSearch);
            loadKey();
        }
    });

})();
