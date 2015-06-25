JavaScript object definition sample
===================================

This sample shows how to use the methods provided by the [**WinJS.Class**](http://msdn.microsoft.com/library/windows/apps/br229776) namespace of the Windows Library for JavaScript to define and modify Windows Runtime object prototypes.This namespace defines a set of helper classes and methods used to modify and extend the underlying object model.

Specifically, this sample uses the following APIs from the [**WinJS.Class**](http://msdn.microsoft.com/library/windows/apps/br229776) namespace:

-   [**WinJS.Class.define**](http://msdn.microsoft.com/library/windows/apps/br229813)
-   [**WinJS.Class.derive**](http://msdn.microsoft.com/library/windows/apps/br229815)
-   [**WinJS.Class.mix**](http://msdn.microsoft.com/library/windows/apps/br229836)

This sample demonstrates the following scenarios:

-   Defining a simple JavaScript object, placing the methods and default properties on the function prototype by using the [**WinJS.Class.define**](http://msdn.microsoft.com/library/windows/apps/br229813) method.
-   Combining methods from multiple prototypes to create new combinatorial types, called "mixin" types. You can accomplish this by using the [**WinJS.Class.mix**](http://msdn.microsoft.com/library/windows/apps/br229836) method.
-   Constructing types through a prototype chain, providing an effect similar to inheritance in class-oriented languages. You can accomplish this by reviewing the implementation of the "Shape" class hierarchy in the sample, which uses the [**WinJS.Class.derive**](http://msdn.microsoft.com/library/windows/apps/br229815) method.

To obtain an evaluation copy of Windows 8.1, go to [Windows 8.1](http://go.microsoft.com/fwlink/p/?linkid=301696).

To obtain an evaluation copy of Microsoft Visual Studio 2013, go to [Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=301697).

**Note**  For Windows 8 app samples, download the [Windows 8 app samples pack](http://go.microsoft.com/fwlink/p/?LinkId=301698). The samples in the Windows 8 app samples pack will build and run only on Microsoft Visual Studio 2012.

Related topics
--------------

[Windows 8 app samples](http://go.microsoft.com/fwlink/p/?LinkID=227694)

[Roadmap for apps using JavaScript](http://msdn.microsoft.com/library/windows/apps/hh465037)

[Defining and deriving types with WinJS.Class](http://msdn.microsoft.com/library/windows/apps/hh967790)

[Adding functionality with WinJS mixins](http://msdn.microsoft.com/library/windows/apps/hh967789)

[**WinJS.Class.define**](http://msdn.microsoft.com/library/windows/apps/br229813)

[**WinJS.Class.derive**](http://msdn.microsoft.com/library/windows/apps/br229815)

[**WinJS.Class.mix**](http://msdn.microsoft.com/library/windows/apps/br229836)

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

