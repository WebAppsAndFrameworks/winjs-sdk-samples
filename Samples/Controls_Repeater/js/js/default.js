﻿//// Copyright (c) Microsoft Corporation. All rights reserved

(function () {
    "use strict";

    var sampleTitle = "Repeater Control";

    var scenarios = [
        { url: "/html/scenario1.html", title: "Declarative Repeater Control with Declarative In-line Templates" },
        { url: "/html/scenario2.html", title: "Declarative Repeater Control with Declarative WinJS.Binding.Templates" },
        { url: "/html/scenario3.html", title: "Programmatic Repeater Control with Programmatic template function" },
        { url: "/html/scenario4.html", title: "Repeater Control, WinJS.Binding.Templates, Dynamic data and CSS Layouts" },
        { url: "/html/scenario5.html", title: "Repeater Control, WinJS.Binding.Templates, Dynamic data, CSS Layouts and Animations" },
        { url: "/html/scenario6.html", title: "Repeater Control with nested WinJS.Binding.Templates" }
    ];

    function activated(eventObject) {
        if (eventObject.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            // Use setPromise to indicate to the system that the splash screen must not be torn down
            // until after processAll and navigate complete asynchronously.
            eventObject.setPromise(WinJS.UI.processAll().then(function () {
                // Navigate to either the first scenario or to the last running scenario
                // before suspension or termination.
                var url = WinJS.Application.sessionState.lastUrl || scenarios[0].url;
                return WinJS.Navigation.navigate(url);
            }));
        }
    }

    WinJS.Navigation.addEventListener("navigated", function (eventObject) {
        var url = eventObject.detail.location;
        var host = document.getElementById("contentHost");
        // Call unload method on current scenario, if there is one
        host.winControl && host.winControl.unload && host.winControl.unload();
        WinJS.Utilities.empty(host);
        eventObject.detail.setPromise(WinJS.UI.Pages.render(url, host, eventObject.detail.state).then(function () {
            WinJS.Application.sessionState.lastUrl = url;
        }));
    });

    WinJS.Namespace.define("SdkSample", {
        sampleTitle: sampleTitle,
        scenarios: scenarios
    });

    WinJS.Application.addEventListener("activated", activated, false);
    WinJS.Application.start();
})();
