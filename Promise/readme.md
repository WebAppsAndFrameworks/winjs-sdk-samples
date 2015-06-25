WinJS Promise sample
====================

This sample demonstrates the use of the Windows Library for JavaScript [**Promise**](http://msdn.microsoft.com/library/windows/apps/br211867) object. Promises are a simple way to do asynchronous programming in JavaScript. They allow developers to perform operations on a value (or a set of values) that may only be available in the future, handle possible errors, and provide progress notification.

This sample includes the following scenarios:

1.  The creating async Promises scenario: A Promise is an object that represents a value that may not yet have been computed, an error which has not yet been found, or some work that has not yet been performed. Promises can be chained together using Promise.then to schedule work when a value from the previous chain is available, so you can synchronize a series of asynchronous tasks or events.

2.  The WinJS.Promise.timeout scenario: Creates a Promise that is fulfilled after a specified delay. The parameter is an optional value determining the minimum number of milliseconds to wait before completing the promise. Providing zero or omitting the delay results in the Promise being completed as soon as possible.

3.  The catching errors scenario: Promises support error handling. By passing a second callback function to the **then()** method, you can specify an error handler that will be called if an exception occurs during the promise's execution.

4.  The error event scenario: Exceptions that are generated during asynchronous operations are passed to the optional error handler defined in the **then()** method. There is a class of errors in JavaScript (for example, referencing an undefined variable or method) that aren't something a developer would want to put in an error handler. The **Promise.onerror** event is raised whenever an exception or error is caught inside a promise, regardless of the presence of an actual error handler or not. This provides a central point where a developer can do logging or put a breakpoint and catch exceptions that would otherwise have been handled silently by the Promise object.

5.  The Promise.as scenario: You can wrap a value in a Promise. This is useful if you don't know whether or not the operation is asynchronous, and just want to treat the value as a Promise in order to schedule some work to be done using **then()**.

6.  The cancellation scenario: Request cancellation of any work that is being computed in order to fulfill this Promise. This may chain the cancellation request up through the Promise(s) that this Promise is waiting on.

7.  The WinJS.Promise.join scenario: Creates a Promise that is not fulfilled until a collection of other Promises are all fulfilled.

8.  The WinJS.Promise.any scenario: Creates a Promise that is fulfilled as soon as one of the input Promises is fulfilled.

To obtain an evaluation copy of Windows 8.1, go to [Windows 8.1](http://go.microsoft.com/fwlink/p/?linkid=301696).

To obtain an evaluation copy of Microsoft Visual Studio 2013, go to [Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=301697).

**Note**  For Windows 8 app samples, download the [Windows 8 app samples pack](http://go.microsoft.com/fwlink/p/?LinkId=301698). The samples in the Windows 8 app samples pack will build and run only on Microsoft Visual Studio 2012.

Related topics
--------------

[Windows 8 app samples](http://go.microsoft.com/fwlink/p/?LinkID=227694)

[Roadmap for apps using JavaScript](http://msdn.microsoft.com/library/windows/apps/hh465037)

**Tasks**

[Quickstart: using promises](http://msdn.microsoft.com/library/windows/apps/hh700339)

[How to handle errors with promises](http://msdn.microsoft.com/library/windows/apps/hh700337)

**Concepts**

[Asynchronous programming in JavaScript](http://msdn.microsoft.com/library/windows/apps/hh700330)

**Reference**

[WinJS.Promise](http://msdn.microsoft.com/library/windows/apps/br211867)

[WinJS.Promise.done](http://msdn.microsoft.com/library/windows/apps/hh701079)

[WinJS.Promise.then](http://msdn.microsoft.com/library/windows/apps/br229728)

Operating system requirements
-----------------------------

Client

Windows 8.1

Server

Windows Server 2012 R2

Build the sample
----------------

1.  Start Visual Studio 2013 and select **File \> Open \> Project/Solution**.
2.  Go to the directory in which you unzipped the sample. Go to the directory named for the sample, and double-click the Microsoft Visual Studio Solution (.sln) file.
3.  Press F7 or use **Build \> Build Solution** to build the sample.

Run the sample
--------------

To debug the app and then run it, press F5 or use **Debug** \> **Start Debugging**. To run the app without debugging, press Ctrl+F5 or use **Debug** \> **Start Without Debugging**.

