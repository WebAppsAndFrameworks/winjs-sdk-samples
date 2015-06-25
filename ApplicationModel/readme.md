App model sample
================

This sample shows how to use the Windows Runtime [**Windows.ApplicationModel**](http://msdn.microsoft.com/library/windows/apps/br224691) API in aWindows Store app using JavaScript and the WinJS Toolkit.

Some things to note about the [**Windows.ApplicationModel**](http://msdn.microsoft.com/library/windows/apps/br224691) API:

-   The Windows Runtime provides applications three buckets to store unstructured state (files):
    -   a local container which is unique to a single user on a single machine inside of a single application
    -   a roaming container which is unique to a single user from a single application but roams across multiple machines
    -   a temporary container which has the same limitations as the local container, but may be automatically be purged by the system

    The [**Windows.ApplicationModel**](http://msdn.microsoft.com/library/windows/apps/br224691) API provides rich access to the full Windows Runtime file I/O functionality, such as creating sub directories, multiple file formats, and full async programming at multiple layers. For apps that store significant data in their local or roaming container, use the base Windows Runtime APIs.
-   The job of the WinJS library is to mesh the various Windows Runtime application events (such as process lifetime management (PLM) and app object or type activation) with HTML5 DOM events (like DOMContentLoaded) in your app's code. To understand the technical implementation (as opposed to the end developer model), you need to understand two concepts: event queuing and event dispatching. An event is queued to the application object based on some external activity, such as a screen touch or a mouse click. Events are dispatched after any previous events have been dispatched (first in, first out rules). No event is dispatched until "run" is called on the app. By queuing events until the app code is ready to receive them,your app is in control of when it will start receiving these various events.
-   A simple checkpoint event, [**oncheckpoint**](http://msdn.microsoft.com/library/windows/apps/br229839), is offered for Windows Store app using JavaScript developers. The **oncheckpoint** event is raised by the system automatically as a preparation for suspension. In addition, the **oncheckpoint** event can be raised manually if needed.

This sample is written in HTML5 and JavaScript.

To obtain an evaluation copy of Windows 8.1, go to [Windows 8.1](http://go.microsoft.com/fwlink/p/?linkid=301696).

To obtain an evaluation copy of Microsoft Visual Studio 2013, go to [Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=301697).

**Note**  For Windows 8 app samples, download the [Windows 8 app samples pack](http://go.microsoft.com/fwlink/p/?LinkId=301698). The samples in the Windows 8 app samples pack will build and run only on Microsoft Visual Studio 2012.

Related topics
--------------

[Windows 8 app samples](http://go.microsoft.com/fwlink/p/?LinkID=227694)

**Tasks**

[How to activate an app (JavaScript)](http://msdn.microsoft.com/library/windows/apps/hh465102)

[How to suspend an app (JavaScript)](http://msdn.microsoft.com/library/windows/apps/hh465138)

[How to resume an app (JavaScript)](http://msdn.microsoft.com/library/windows/apps/hh465114)

**Guidelines**

[Guidelines for app suspend and resume](http://msdn.microsoft.com/library/windows/apps/hh465088)

**Concepts**

[Application lifecycle](http://msdn.microsoft.com/library/windows/apps/hh464925)

**Reference**

[**Windows.ApplicationModel**](http://msdn.microsoft.com/library/windows/apps/br224691)

[**Windows.ApplicationModel.Activation**](http://msdn.microsoft.com/library/windows/apps/br224766)

[**Windows.ApplicationModel.Core**](http://msdn.microsoft.com/library/windows/apps/br205865)

Operating system requirements
-----------------------------

Client

Windows 8.1

Server

Windows Server 2012 R2

Build the sample
----------------

1.  Start Visual Studio 2013 and select **File** \> **Open** \> **Project/Solution**.
2.  Go to the directory in which you unzipped the sample. Go to the directory named for the sample, and double-click the Visual Studio 2013 Solution (.sln) file.
3.  Press F7 or use **Build** \> **Build Solution** to build the sample.

Run the sample
--------------

To debug the app and then run it, press F5 or use **Debug** \> **Start Debugging**. To run the app without debugging, press Ctrl+F5 or use **Debug** \> **Start Without Debugging**.

