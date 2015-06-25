//// Copyright (c) Microsoft Corporation. All rights reserved

(function () {
    "use strict";

    function activated(eventObject) {
        if (eventObject.detail.kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
            // Use setPromise to indicate to the system that the splash screen must not be torn down
            // until after processAll and navigate complete asynchronously.
            eventObject.setPromise(WinJS.UI.processAll().then(function () {
                // Navigate to either the home view or to the last running scenario
                // before suspension or termination.
                var url = WinJS.Application.sessionState.lastUrl || "/pages/home/home.html";
                return WinJS.Navigation.navigate(url);
            }));
        }
    }

    WinJS.Navigation.addEventListener("navigating", function (eventObject) {
        var url = eventObject.detail.location;
        var host = document.getElementById("contentHost");
        var isNavigatingBack = eventObject.detail.delta < 0;
        var animationType = WinJS.UI.PageNavigationAnimation.turnstile;
        var animations = WinJS.UI.Animation.createPageNavigationAnimations(animationType, animationType, isNavigatingBack);
        WinJS.Application.sessionState.lastUrl = url;
        eventObject.detail.setPromise(animations.exit(host.children).
            then(function () {
                // Call unload method on current scenario, if there is one
                host.winControl && host.winControl.unload && host.winControl.unload();
                WinJS.Utilities.empty(host);
                return WinJS.UI.Pages.render(url, host, eventObject.detail.state);
            }).
            then(function () { animations.entrance(host.children); }));
    });

    WinJS.Application.addEventListener("activated", activated, false);
    WinJS.Application.start();
})();
