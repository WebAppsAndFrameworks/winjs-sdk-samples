HTML ListView grouping and SemanticZoom sample
==============================================

This sample demonstrates how to group items in a [**ListView**](http://msdn.microsoft.com/library/windows/apps/br211837) and how to use it with the [**SemanticZoom**](http://msdn.microsoft.com/library/windows/apps/br229690) control.

It uses the [**List.createGrouped**](http://msdn.microsoft.com/library/windows/apps/hh700742) method to create a grouped version of a [**WinJS.Binding.List**](http://msdn.microsoft.com/library/windows/apps/hh700774). Then it uses two [**ListView**](http://msdn.microsoft.com/library/windows/apps/br211837) controls and a [**SemanticZoom**](http://msdn.microsoft.com/library/windows/apps/br229690) to create separate zoomed-out and zoomed-in views of the data.

For more info about the concepts and APIs demonstrated in this sample, see these topics:

-   [How to group items in a ListView](http://msdn.microsoft.com/library/windows/apps/hh465464)
-   [Quickstart: adding a SemanticZoom](http://msdn.microsoft.com/library/windows/apps/hh465492)
-   [Guidelines and checklist for SemanticZoom](http://msdn.microsoft.com/library/windows/apps/hh465319)
-   [SemanticZoom templates](http://msdn.microsoft.com/library/windows/apps/hh770118)
-   [Quickstart: adding Windows Library for JavaScript controls and styles](http://msdn.microsoft.com/library/windows/apps/hh465493)
-   [Quickstart: adding a ListView](http://msdn.microsoft.com/library/windows/apps/hh465496)
-   [Item templates for grid layouts](http://msdn.microsoft.com/library/windows/apps/hh465463)
-   [Item templates for list layouts](http://msdn.microsoft.com/library/windows/apps/hh465478)
-   [**ListView reference**](http://msdn.microsoft.com/library/windows/apps/br211837)
-   [**SemanticZoom reference**](http://msdn.microsoft.com/library/windows/apps/br229690)

This sample is written in HTML, CSS, and JavaScript. For the XAML version, see the [XAML grouped data controls sample](http://go.microsoft.com/fwlink/p/?linkid=242399).

To obtain an evaluation copy of Windows 8.1, go to [Windows 8.1](http://go.microsoft.com/fwlink/p/?linkid=301696).

To obtain an evaluation copy of Microsoft Visual Studio 2013, go to [Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=301697).

**Note**  For Windows 8 app samples, download the [Windows 8 app samples pack](http://go.microsoft.com/fwlink/p/?LinkId=301698). The samples in the Windows 8 app samples pack will build and run only on Microsoft Visual Studio 2012.

Related topics
--------------

[How to group items in a ListView](http://msdn.microsoft.com/library/windows/apps/hh465464)

[Quickstart: adding a SemanticZoom](http://msdn.microsoft.com/library/windows/apps/hh465492)

[Guidelines and checklist for SemanticZoom](http://msdn.microsoft.com/library/windows/apps/hh465319)

[Quickstart: adding a ListView](http://msdn.microsoft.com/library/windows/apps/hh465496)

[Quickstart: adding Windows Library for JavaScript controls and styles](http://msdn.microsoft.com/library/windows/apps/hh465493)

[Item templates for grid layouts](http://msdn.microsoft.com/library/windows/apps/hh465463)

[Item templates for list layouts](http://msdn.microsoft.com/library/windows/apps/hh465478)

[**ListView reference**](http://msdn.microsoft.com/library/windows/apps/br211837)

[**SemanticZoom reference**](http://msdn.microsoft.com/library/windows/apps/br229690)

Related technologies
--------------------

[Windows 8 apps using JavaScript](http://msdn.microsoft.com/library/windows/apps/br211385), [**ListView**](http://msdn.microsoft.com/library/windows/apps/br211837) , [**SemanticZoom**](http://msdn.microsoft.com/library/windows/apps/br229690)

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

To debug the app, press F5 or use **Debug** \> **Start Debugging**. To run the app without debugging, press Ctrl+F5 or use **Debug** \> **Start Without Debugging**.

To switch between the different [**SemanticZoom**](http://msdn.microsoft.com/library/windows/apps/br229690) views:

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Input mechanism
Zoom out
Zoom in</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">Touch
Pinch out
Pinch in, tap</td>
<td align="left">Keyboard
Ctrl + Minus sign, Enter, Space
Ctrl + Plus sign, Enter, Space</td>
<td align="left">Mouse
Ctrl + Rotate the mouse wheel backward
Ctrl + Rotate the mouse wheel forward</td>
</tr>
</tbody>
</table>


