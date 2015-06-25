Declarative binding sample
==========================

One of the most common features used by app builders is that of binding data to the controls of the app. The Windows Library for JavaScript provides an easy way to do binding declaratively. The declarative binding sample shows you how to use simple declarative data binding and data binding with templates to make it easier to display lots of data using the same controls and user interface.

The basic binding scenario uses data binding expressions to connect the DOM display to elements of the data object. When you change the fields, the destination DOM elements get updated by means of binding.

The template control scenario shows you how to render the same user interface multiple times with different data by using a template control. WinJS binding templates let you specify the UI and binding once, then render the template itself multiple times for each set of data. This example renders the template control three times, bound to different data. When you change the data, the bindings fire to update the individual items that were rendered from the template.

To obtain an evaluation copy of Windows 8.1, go to [Windows 8.1](http://go.microsoft.com/fwlink/p/?linkid=301696).

To obtain an evaluation copy of Microsoft Visual Studio 2013, go to [Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=301697).

**Note**  For Windows 8 app samples, download the [Windows 8 app samples pack](http://go.microsoft.com/fwlink/p/?LinkId=301698). The samples in the Windows 8 app samples pack will build and run only on Microsoft Visual Studio 2012.

Related topics
--------------

[Windows 8 app samples](http://go.microsoft.com/fwlink/p/?LinkID=227694)

[Roadmap for apps using JavaScript](http://msdn.microsoft.com/library/windows/apps/hh465037)

**Tasks**

[Quickstart: binding data and styles](http://msdn.microsoft.com/library/windows/apps/hh700358)

**Concepts**

[Data binding](http://msdn.microsoft.com/library/windows/apps/hh758311)

**Reference**

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

1.  Start Visual Studio 2013 and select **File** \> **Open** \> **Project/Solution**.
2.  Go to the directory in which you unzipped the sample. Go to the directory named for the sample, and double-click the Visual Studio 2013 Solution (.sln) file.
3.  Press F7 or use **Build** \> **Build Solution** to build the sample.

Run the sample
--------------

You can run this application on a touch device, or in the Visual Studio simulator.

To debug the app and then run it, press F5 or use **Debug** \> **Start Debugging**. To run the app without debugging, press Ctrl+F5 or use **Debug** \> **Start Without Debugging**.

