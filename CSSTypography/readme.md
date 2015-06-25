CSS typography JS sample
========================

This sample demonstrates how to use the CSS Typography classes for CSS font fall back, and how to implement CSS bi-directional support for HTML controls. It also shows how to override the CSS Typography classes.

This sample covers the following scenarios:

-   The typographic CSS classes and HTML element styles provided in the app default **ui-light.css** and **ui-dark.css**.
-   The series of CSS font fallback definitions in **ui-light.css** and **ui-dark.css**. These font fallback definitions are commonly used to support multiple languages within an app, and are particularly helpful when an app hosts content that is a different language than the default language of the app.
-   Overridden CSS Typography classes for **font-family**, **font-weight**, **font-size**, **line-height**, and other common classes in **ui-light.css** and **ui-dark.css**. Overriding these classes is necessary when the default properties and values do not meet the needs of your app. This scenario also demonstrates how to override these CSS classes while ensuring that multi-language font fallback list is still available.
-   CSS style rules that will mirror HTML elements bi-directionally, as defined in **ui-light.css** and **ui-dark.css**. HTML control mirroring happens automatically as the system marks the root element with the application language.

To obtain an evaluation copy of Windows 8.1, go to [Windows 8.1](http://go.microsoft.com/fwlink/p/?linkid=301696).

To obtain an evaluation copy of Microsoft Visual Studio 2013, go to [Visual Studio 2013](http://go.microsoft.com/fwlink/p/?linkid=301697).

**Note**  For Windows 8 app samples, download the [Windows 8 app samples pack](http://go.microsoft.com/fwlink/p/?LinkId=301698). The samples in the Windows 8 app samples pack will build and run only on Microsoft Visual Studio 2012.

Related topics
--------------

[Windows 8 app samples](http://go.microsoft.com/fwlink/p/?LinkID=227694)

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

