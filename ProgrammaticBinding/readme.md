Programmatic binding sample
===========================

One of the most common features used by app builders is that of binding data to the controls of the app. The Windows Library for JavaScript provides several ways to do binding programmatically. This sample demonstrates how to write the code to perform advanced types of data binding, adding change notification on data objects, using binding descriptors and multiple bindings for more complex bindings, and defining bindable types to support binding directly.

This sample includes several different scenarios:

1.  The Basic Binding scenario demonstrates the most basic binding, adding change notifications to a data object that causes a function to execute. The bindable object has already been created. All you need to do is use the input fields to change their values.

2.  The Binding Descriptors scenario shows you how to use a binding descriptor to describe multiple fields in a complex object that you want to bind to.

3.  The Creating Bindable Types scenario shows you how to define a JavaScript type that supports binding directly. This scenario defines a bindable type to manage the position and color of the drawn rectangle.

To obtain an evaluation copy of Windows 8.1, go to [Windows 8.1](http://go.microsoft.com/fwlink/p/?linkid=301696).

To obtain an evaluation copy of Microsoft Visual Studio 2013, go to [Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=301697).

**Note**  For Windows 8 app samples, download the [Windows 8 app samples pack](http://go.microsoft.com/fwlink/p/?LinkId=301698). The samples in the Windows 8 app samples pack will build and run only on Microsoft Visual Studio 2012.

Related topics
--------------

[Windows 8 app samples](http://go.microsoft.com/fwlink/p/?LinkID=227694)

[Roadmap for apps using JavaScript](http://msdn.microsoft.com/library/windows/apps/hh465037)

[Data binding](http://msdn.microsoft.com/library/windows/apps/hh758311)

[Quickstart: binding data and styles](http://msdn.microsoft.com/library/windows/apps/hh700358)

[WinJS.Binding Namespace](http://msdn.microsoft.com/library/windows/apps/br229775)

[declarativeBind](http://msdn.microsoft.com/library/windows/apps/hh701577)

[bind](http://msdn.microsoft.com/library/windows/apps/br211857)

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

You can run this application on a touch device, or in the Visual Studio simulator.

To debug the app and then run it, press F5 or use **Debug** \> **Start Debugging**. To run the app without debugging, press Ctrl+F5 or use **Debug** \> **Start Without Debugging**.

