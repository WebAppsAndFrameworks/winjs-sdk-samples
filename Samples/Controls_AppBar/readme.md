HTML AppBar control sample
==========================

This sample demonstrates how to use the app bar to present navigation, commands, and tools to users.

**Note**  This sample was created using one of the universal app templates available in Visual Studio. It shows how its solution is structured so it can run on both Windows 8.1 and Windows Phone 8.1. For more info about how to build apps that target Windows and Windows Phone with Visual Studio, see [Build apps that target Windows and Windows Phone 8.1 by using Visual Studio](http://msdn.microsoft.com/library/windows/apps/dn609832).

The sample uses the [**WinJS.UI.AppBar**](http://msdn.microsoft.com/library/windows/apps/br229670) and [**WinJS.UI.AppBarCommand**](http://msdn.microsoft.com/library/windows/apps/hh700497) classes and the [**WinJS.AppBarIcon**](http://msdn.microsoft.com/library/windows/apps/hh770557) enumeration.

On Windows, the app bar is hidden by default and appears when users swipe a finger from the bottom edge of the screen. The app bar covers the content of the app and can be dismissed by the user with an edge swipe or by interacting with the app.

On Windows Phone 8.1, the app bar is visible by default and has two states: "closed" and "opened". When in the closed state, an app bar can either be "minimal" or "compact". The app bar goes to an opened state when the user taps the ellipsis on the app bar.

This sample shows how to add an app bar, customize the app bar, and control the app bar.

This sample is written in HTML, Cascading Style Sheets (CSS), and JavaScript. For the XAML version, see the [XAML AppBar control sample](http://go.microsoft.com/fwlink/p/?linkid=242388).

To obtain an evaluation copy of Windows 8.1, go to [Windows 8.1](http://go.microsoft.com/fwlink/p/?linkid=301696).

To obtain an evaluation copy of Microsoft Visual Studio 2013 Update 2, go to [Microsoft Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=301697).

**Note**  For Windows 8 app samples, download the [Windows 8 app samples pack](http://go.microsoft.com/fwlink/p/?LinkId=301698). The samples in the Windows 8 app samples pack will build and run only on Microsoft Visual Studio 2012.

Related topics
--------------

[Adding app bars](http://msdn.microsoft.com/library/windows/apps/hh465296)

[**WinJS.UI.AppBar**](http://msdn.microsoft.com/library/windows/apps/br229670)

[**WinJS.UI.AppBarCommand**](http://msdn.microsoft.com/library/windows/apps/hh700497)

[**WinJS.UI.Pages.define**](http://msdn.microsoft.com/library/windows/apps/hh770579)

[**WinJS.AppBarIcon**](http://msdn.microsoft.com/library/windows/apps/hh770557)

[**WinJS.log**](http://msdn.microsoft.com/library/windows/apps/jj150612)

[Windows 8 app samples](http://go.microsoft.com/fwlink/p/?LinkID=227694)

[XAML AppBar control sample](http://go.microsoft.com/fwlink/p/?linkid=242388)

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

        1.  Select **Controls\_AppBar.Windows** in **Solution Explorer**.
        2.  Press Ctrl+Shift+B, or use **Build** \> **Build Solution**, or use **Build** \> **Build Controls\_AppBar.Windows**.
    -   To build the Windows Phone version of the sample:

        1.  Select **Controls\_AppBar.WindowsPhone** in **Solution Explorer**.
        2.  Press Ctrl+Shift+B or use **Build** \> **Build Solution** or use **Build** \> **Build Controls\_AppBar.WindowsPhone**.

Run the sample
--------------

The next steps depend on whether you just want to deploy the sample or you want to both deploy and run it.

**Deploying the sample**

-   To deploy the built Windows version of the sample:

    1.  Select **Controls\_AppBar.Windows** in **Solution Explorer**.
    2.  Use **Build** \> **Deploy Solution** or **Build** \> **Deploy Controls\_AppBar.Windows**.
-   To deploy the built Windows Phone version of the sample:

    1.  Select **Controls\_AppBar.WindowsPhone** in **Solution Explorer**.
    2.  Use **Build** \> **Deploy Solution** or **Build** \> **Deploy Controls\_AppBar.WindowsPhone**.

**Deploying and running the sample**

-   To deploy and run the Windows version of the sample:

    1.  Right-click **Controls\_AppBar.Windows** in **Solution Explorer** and select **Set as StartUp Project**.
    2.  To debug the sample and then run it, press F5 or use **Debug** \> **Start Debugging**. To run the sample without debugging, press Ctrl+F5 or use **Debug** \> **Start Without Debugging**.
-   To deploy and run the Windows Phone version of the sample:

    1.  Right-click **Controls\_AppBar.WindowsPhone** in **Solution Explorer** and select **Set as StartUp Project**.
    2.  To debug the sample and then run it, press F5 or use **Debug** \> **Start Debugging**. To run the sample without debugging, press Ctrl+F5 or use **Debug** \> **Start Without Debugging**.

