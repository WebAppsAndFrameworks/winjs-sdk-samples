HTML scrolling, panning and zooming sample
==========================================

This sample demonstrates how to customize the user interaction experience of your Windows Store apps using JavaScript through pan/scroll and zoom app views. (A view is the way in which the content of your app is accessed and manipulated by a user.)

**Note**  This sample was created using one of the universal app templates available in Visual Studio. It shows how its solution is structured so it can run on both Windows 8.1 and Windows Phone 8.1. For more info about how to build apps that target Windows and Windows Phone with Visual Studio, see [Build apps that target Windows and Windows Phone 8.1 by using Visual Studio](http://msdn.microsoft.com/library/windows/apps/dn609832).

Specifically, this sample covers the following pan/scroll and zoom behaviors:

-   Declaring the panning/scrolling axis.
-   Using rails to constrain panning/scrolling movement to a specific axis.
-   Setting snap points to indicate where and how panning/scrolling movement stops.
-   Setting minimum and maximum zooming levels.
-   Supporting pan/scroll and zoom chaining in nested parent and child elements. Chaining involves using a single gesture to manipulate a child element followed by the parent element, after the manipulation of the child element has reached a maximum or minimum threshold.

This sample is written in HTML, Cascading Style Sheets (CSS), and JavaScript. For the Extensible Application Markup Language (XAML) version, see the [XAML ScrollViewer sample](http://go.microsoft.com/fwlink/p/?linkid=242393).

To obtain an evaluation copy of Windows 8.1, go to [Windows 8.1](http://go.microsoft.com/fwlink/p/?linkid=301696).

To obtain an evaluation copy of Microsoft Visual Studio 2013, go to [Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=301697).

**Note**  For Windows 8 app samples, download the [Windows 8 app samples pack](http://go.microsoft.com/fwlink/p/?LinkId=301698). The samples in the Windows 8 app samples pack will build and run only on Microsoft Visual Studio 2012.

Related topics
--------------

[Gestures, manipulations, and interactions](http://msdn.microsoft.com/library/windows/apps/hh761498)

[Getting started with apps](http://msdn.microsoft.com/library/windows/apps/)

[Guidelines for optical zoom and resizing](http://msdn.microsoft.com/library/windows/apps/hh465307)

[Guidelines for panning](http://msdn.microsoft.com/library/windows/apps/hh465310)

[Responding to user interaction](http://msdn.microsoft.com/library/windows/apps/hh700412)

[Windows 8 app samples](http://go.microsoft.com/fwlink/p/?LinkID=227694)

[Roadmap for apps using JavaScript](http://msdn.microsoft.com/library/windows/apps/hh465037)

**Reference**

[Touch: Zooming and Panning](http://msdn.microsoft.com/library/windows/apps/hh453816)

[Document Object Model (DOM) Events](http://msdn.microsoft.com/library/windows/apps/hh767307)

[WinJS.Utilities Namespace](http://msdn.microsoft.com/library/windows/apps/br229783)

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

1.  Start Microsoft Visual Studio 2013 Update 2 and select **File** \> **Open** \> **Project/Solution**.
2.  Go to the directory to which you unzipped the sample. Then go to the subdirectory named for the sample and double-click the Visual Studio 2013 Update 2 Solution (.sln) file.
3.  Follow the steps for the version of the sample you want:
    -   To build the Windows version of the sample:

        1.  Select **Controls\_ScrollView.Windows** in **Solution Explorer**.
        2.  Press Ctrl+Shift+B, or use **Build** \> **Build Solution**, or use **Build** \> **Build Controls\_ScrollView.Windows**.
    -   To build the Windows Phone version of the sample:

        1.  Select **Controls\_ScrollView.WindowsPhone** in **Solution Explorer**.
        2.  Press Ctrl+Shift+B or use **Build** \> **Build Solution** or use **Build** \> **Build Controls\_ScrollView.WindowsPhone**.

Run the sample
--------------

The next steps depend on whether you just want to deploy the sample or you want to both deploy and run it.

**Deploying the sample**

-   To deploy the built Windows version of the sample:

    1.  Select **Controls\_ScrollView.Windows** in **Solution Explorer**.
    2.  Use **Build** \> **Deploy Solution** or **Build** \> **Deploy Controls\_ScrollView.Windows**.
-   To deploy the built Windows Phone version of the sample:

    1.  Select **Controls\_ScrollView.WindowsPhone** in **Solution Explorer**.
    2.  Use **Build** \> **Deploy Solution** or **Build** \> **Deploy Controls\_ScrollView.WindowsPhone**.

**Deploying and running the sample**

-   To deploy and run the Windows version of the sample:

    1.  Right-click **Controls\_ScrollView.Windows** in **Solution Explorer** and select **Set as StartUp Project**.
    2.  To debug the sample and then run it, press F5 or use **Debug** \> **Start Debugging**. To run the sample without debugging, press Ctrl+F5 or use **Debug** \> **Start Without Debugging**.
-   To deploy and run the Windows Phone version of the sample:

    1.  Right-click **Controls\_ScrollView.WindowsPhone** in **Solution Explorer** and select **Set as StartUp Project**.
    2.  To debug the sample and then run it, press F5 or use **Debug** \> **Start Debugging**. To run the sample without debugging, press Ctrl+F5 or use **Debug** \> **Start Without Debugging**.

