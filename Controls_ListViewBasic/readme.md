HTML ListView essentials sample
===============================

This sample demonstrates the basics of using the [**WinJS.UI.ListView**](http://msdn.microsoft.com/library/windows/apps/br211837) control on both Windows and Windows Phone 8.1: binding to data, creating an item template, responding to events, selecting items, and retrieving selected items.

**Note**  This sample was created using one of the universal app templates available in Visual Studio. It shows how its solution is structured so it can run on both Windows 8.1 and Windows Phone 8.1. For more info about how to build apps that target Windows and Windows Phone with Visual Studio, see [Build apps that target Windows and Windows Phone 8.1 by using Visual Studio](http://msdn.microsoft.com/library/windows/apps/dn609832).

Specifically, this sample shows you how to:

-   Use a [**WinJS.Binding.List**](http://msdn.microsoft.com/library/windows/apps/hh700774) to create an [**IListDataSource**](http://msdn.microsoft.com/library/windows/apps/br211786) that the [**ListView**](http://msdn.microsoft.com/library/windows/apps/br211837) can display.
-   Use a [**WinJS.Binding.Template**](http://msdn.microsoft.com/library/windows/apps/br229723) to display data.
-   Handle the [**iteminvoked**](http://msdn.microsoft.com/library/windows/apps/br211827) event.
-   Change the [**ListView**](http://msdn.microsoft.com/library/windows/apps/br211837) control's [**layout**](http://msdn.microsoft.com/library/windows/apps/br211833) from grid to list.
-   Programmatically manipulate the [**ListView**](http://msdn.microsoft.com/library/windows/apps/br211837) control's [**selection**](http://msdn.microsoft.com/library/windows/apps/br211852).
-   Store the selection state of the [**ListView**](http://msdn.microsoft.com/library/windows/apps/br211837) so that it can be restored after your app is suspended and resumed.
-   Change the orientation between horizontal and vertical, grid and list layout.

For more info about the concepts and APIs demonstrated in this sample, see these topics:

-   [Quickstart: adding a ListView](http://msdn.microsoft.com/library/windows/apps/hh465496)
-   [Quickstart: adding Windows Library for JavaScript controls and styles](http://msdn.microsoft.com/library/windows/apps/hh465493)
-   [How to change the selection mode](http://msdn.microsoft.com/library/windows/apps/hh465449)
-   [How to group items in a ListView](http://msdn.microsoft.com/library/windows/apps/hh465464)
-   [Item templates for grid layouts](http://msdn.microsoft.com/library/windows/apps/hh465463)
-   [Item templates for list layouts](http://msdn.microsoft.com/library/windows/apps/hh465478)
-   [**ListView reference**](http://msdn.microsoft.com/library/windows/apps/br211837)
-   [Roadmap for apps using JavaScript](http://msdn.microsoft.com/library/windows/apps/hh465037)

This sample is written in HTML, CSS, and JavaScript. For the XAML version, see the [XAML ListView and GridView control sample](http://go.microsoft.com/fwlink/p/?linkid=242397).

To obtain an evaluation copy of Windows 8.1, go to [Windows 8.1](http://go.microsoft.com/fwlink/p/?linkid=301696).

To obtain an evaluation copy of Microsoft Visual Studio 2013 Update 2, go to [Microsoft Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=301697).

**Note**  For Windows 8 app samples, download the [Windows 8 app samples pack](http://go.microsoft.com/fwlink/p/?LinkId=301698). The samples in the Windows 8 app samples pack will build and run only on Microsoft Visual Studio 2012.

Related topics
--------------

[How to change the selection mode](http://msdn.microsoft.com/library/windows/apps/hh465449)

[How to group items in a ListView](http://msdn.microsoft.com/library/windows/apps/hh465464)

[Item templates for grid layouts](http://msdn.microsoft.com/library/windows/apps/hh465463)

[Item templates for list layouts](http://msdn.microsoft.com/library/windows/apps/hh465478)

[**ListView reference**](http://msdn.microsoft.com/library/windows/apps/br211837)

[Quickstart: adding a ListView](http://msdn.microsoft.com/library/windows/apps/hh465496)

[Quickstart: adding Windows Library for JavaScript controls and styles](http://msdn.microsoft.com/library/windows/apps/hh465493)

[Windows 8 app samples](http://go.microsoft.com/fwlink/p/?LinkID=227694)

Related technologies
--------------------

[Windows 8 apps using JavaScript](http://msdn.microsoft.com/library/windows/apps/br211385), [**ListView**](http://msdn.microsoft.com/library/windows/apps/br211837)

Operating system requirements
-----------------------------

Client

Windows 8.1

Server

Windows Server 2012 R2

Phone

Windows Phone 8.1

Build the sample
----------------

1.  Start Visual Studio 2013 Update 2 and select **File** \> **Open** \> **Project/Solution**.
2.  Go to the directory to which you unzipped the sample. Then go to the subdirectory named for the sample and double-click the Visual Studio 2013 Update 2 Solution (.sln) file.
3.  Follow the steps for the version of the sample you want:
    -   To build the Windows version of the sample:

        1.  Select **Controls\_ListViewBasic.Windows** in **Solution Explorer**.
        2.  Press Ctrl+Shift+B, or use **Build** \> **Build Solution**, or use **Build** \> **Build Controls\_ListViewBasic.Windows**.
    -   To build the Windows Phone version of the sample:

        1.  Select **Controls\_ListViewBasic.WindowsPhone** in **Solution Explorer**.
        2.  Press Ctrl+Shift+B or use **Build** \> **Build Solution** or use **Build** \> **Build Controls\_ListViewBasic.WindowsPhone**.

Run the sample
--------------

The next steps depend on whether you just want to deploy the sample or you want to both deploy and run it.

**Deploying the sample**

-   To deploy the built Windows version of the sample:

    1.  Select **Controls\_ListViewBasic.Windows** in **Solution Explorer**.
    2.  Use **Build** \> **Deploy Solution** or **Build** \> **Deploy Controls\_ListViewBasic.Windows**.
-   To deploy the built Windows Phone version of the sample:

    1.  Select **Controls\_ListViewBasic.WindowsPhone** in **Solution Explorer**.
    2.  Use **Build** \> **Deploy Solution** or **Build** \> **Deploy Controls\_ListViewBasic.WindowsPhone**.

**Deploying and running the sample**

-   To deploy and run the Windows version of the sample:

    1.  Right-click **Controls\_ListViewBasic.Windows** in **Solution Explorer** and select **Set as StartUp Project**.
    2.  To debug the sample and then run it, press F5 or use **Debug** \> **Start Debugging**. To run the sample without debugging, press Ctrl+F5 or use **Debug** \> **Start Without Debugging**.
-   To deploy and run the Windows Phone version of the sample:

    1.  Right-click **Controls\_ListViewBasic.WindowsPhone** in **Solution Explorer** and select **Set as StartUp Project**.
    2.  To debug the sample and then run it, press F5 or use **Debug** \> **Start Debugging**. To run the sample without debugging, press Ctrl+F5 or use **Debug** \> **Start Without Debugging**.

