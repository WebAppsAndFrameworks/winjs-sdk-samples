HTML ListView working with data sources sample
==============================================

This sample creates a custom [**IListDataAdapter**](http://msdn.microsoft.com/library/windows/apps/br212603) that connects to a web service and displays that data in a [**ListView**](http://msdn.microsoft.com/library/windows/apps/br211837) control. It also shows you how to manipulate data by reordering, adding, and removing items in a [**WinJS.Binding.List**](http://msdn.microsoft.com/library/windows/apps/hh700774) and an [**IListDataSource**](http://msdn.microsoft.com/library/windows/apps/br211786).

This sample implements the [**IListDataAdapter**](http://msdn.microsoft.com/library/windows/apps/br212603) interface and creates a custom [**IListDataSource**](http://msdn.microsoft.com/library/windows/apps/br211786) by inheriting from the [**VirtualizedDataSource**](http://msdn.microsoft.com/library/windows/apps/hh701413) class. For a walkthrough of the sample, see [How to create a custom data source](http://msdn.microsoft.com/library/windows/apps/hh770849).

This sample is written in HTML, CSS, and JavaScript. For the XAML version, see the [XAML data binding sample](http://go.microsoft.com/fwlink/p/?linkid=242405).

To obtain an evaluation copy of Windows 8.1, go to [Windows 8.1](http://go.microsoft.com/fwlink/p/?linkid=301696).

To obtain an evaluation copy of Microsoft Visual Studio 2013, go to [Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=301697).

**Note**  For Windows 8 app samples, download the [Windows 8 app samples pack](http://go.microsoft.com/fwlink/p/?LinkId=301698). The samples in the Windows 8 app samples pack will build and run only on Microsoft Visual Studio 2012.

Related topics
--------------

[How to create a custom data source](http://msdn.microsoft.com/library/windows/apps/hh770849)

[**IListDataAdapter**](http://msdn.microsoft.com/library/windows/apps/br212603)

[**IListDataSource**](http://msdn.microsoft.com/library/windows/apps/br211786)

[**VirtualizedDataSource**](http://msdn.microsoft.com/library/windows/apps/hh701413)

[Windows 8 app samples](http://go.microsoft.com/fwlink/p/?LinkID=227694)

[Roadmap for apps using JavaScript](http://msdn.microsoft.com/library/windows/apps/hh465037)

Related technologies
--------------------

[Windows 8 apps using JavaScript](http://msdn.microsoft.com/library/windows/apps/br211385), [**IListDataAdapter**](http://msdn.microsoft.com/library/windows/apps/br212603) , [**ListView**](http://msdn.microsoft.com/library/windows/apps/br211837)

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

