$(document).ready(function () {
    var ToC =
    "<nav role='navigation' class='example toc'>" +
        "<div class='ul-ui vertical menu'>" +
        "<a class='item' href='introduction.html' id='intro'><b>Introduction</b></a>" +
        "<a class='item' href='common-foundation.html' id='cf'><b>Common Foundation</b></a>" +

        // Style Guide
        "<div class='item'>" +
        "<div class='header' id='sg'>Style Guide</div>" +
        "<div class='menu'>" +
        "<a class='item' href='style-guide.html' id='ws-i'>Web Standards</a>" +
        "<a class='item' href='style-guide.html#int-a' id='int-i'>Internationalization (i18n)</a>" +
        "<a class='item' href='style-guide.html#ct-a' id='ct-i'>Common Terminology</a>" +
        "<a class='item' href='style-guide.html#tp-a' id='tp-i'>Typography</a>" +
        "<a class='item' href='style-guide.html#co-a' id='co-i'>Colors</a>" +
        "<a class='item' href='style-guide.html#ca-a' id='ca-i'>Accessibility</a>" +
        "<a class='item' href='style-guide.html#ic-a' id='ic-i'>Icons</a>" +
        "<a class='item' href='style-guide.html#res-a' id='res-i'>Responsiveness</a>" +
        "</div>" +
        "</div>" +

        // Layout
        "<div class='item'>" +
        "<div class='header' id='layout'>Layout</div>" +
        "<div class='menu'>" +
        "<a class='item' href='layout.html' id='hn-i' >Header/Navigation</a>" +
        "<a class='item' href='layout.html#lf-a' id='lf-i' >Footer</a>" +
        "</div>" +
        "</div>" +

        // Accessibility
        "<div class='item'>" +
        "<div class='header' id='accessibility'>Accessibility</div>" +
        "<div class='menu'>" +
        "<a class='item' href='accessibility.html' id='ac-i'>Coding General HTML Elements</a>" +
        "<a class='item' href='accessibility.html#img-a' id='img-i'>Images</a>" +
        "</div>" +
        "</div>" +
        
        // Component Library
        "<div class='item'>" +
        "<div class='header' id='components'>Component Library</div>" +
        "<div class='menu'>" +
        "<a class='item' href='component-library.html'>Alerts</a>" +
        "<a class='item' href='component-library.html#acce-a'>Accessibility</a>" +
        //"<a class='item' href='component-library.html'>Anchors &amp; Buttons</a>" +
        "<a class='item' href='component-library.html#butc-a'>Buttons: Coding</a>" +
        "<a class='item' href='component-library.html#buts-a'>Buttons: Styling</a>" +
        "<a class='item' href='component-library.html#butr-a'>Buttons: Responsiveness</a>" +
        "<a class='item' href='component-library.html#butu-a'>Buttons: Usability</a>" +
        "<a class='item' href='component-library.html#anc-a'>Anchors: Coding</a>" +
        "<a class='item' href='component-library.html#ancs-a'>Anchors: Styling</a>" +
        "<a class='item' href='component-library.html#is-a'>Input/Submits</a>" +
        "<a class='item' href='component-library.html#otc-a'>Other Cases</a>" +
        "<a class='item' href='component-library.html#cond-a'>Confirmation Dialogs</a>" +
        "</div>" +
        "</div>" +

        // Forms
        "<div class='item'>" +
        "<div class='header' id='forms'>Forms</div>" +
        "<div class='menu'>" +
        "<a class='item' href='forms.html'>Input Types</a>" +
        "<a class='item' href='forms.html#bl-a'>Buttons and Links</a>" +
        "<a class='item' href='forms.html#se-a'>Submit Events</a>" +
        "<a class='item' href='forms.html#jv-a'>Javascript Validations</a>" +
        "<a class='item' href='forms.html#seh-a'>Success &amp; Error Handling</a>" +
        "</div>" +
        "</div>" +

        // Images
        "<div class='item'>" +
        "<div class='header' id='images'>Images</div>" +
        "<div class='menu'>" +
        "<a class='item' href='images.html'>Responsive Images</a>" +
        "<a class='item' href='images.html#sr-a'>Image Sizing and Resolution</a>" +
        "<a class='item' href='images.html#ff-a'>Image File Formats</a>" +
        "<a class='item' href='images.html#opt-a'>Image Optimization</a>" +
        "</div>" +
        "</div>" +

        // Modals
        "<a class='item' href='modals.html' id='modals'>Modals</a>" +

        // Tables
        "<div class='item'>" +
        "<div class='header' id='tables'>Tables</div>" +
        "<div class='menu'>" +
        "<a class='item' href='tables.html'>Responsive Tables</a>" +
        "<a class='item' href='tables.html#sort-a'>Sorting</a>" +
        "<a class='item' href='tables.html#tacc-a'>Accessibility</a>" +
        "</div>" +
        "</div>" +

        // Tabs
        "<a class='item' href='tabs.html'>Tabs</a>" +

        // Tooltips
        "<div class='item'>" +
        "<div class='header' id='tooltip'>Tooltips &amp; Popovers</div>" +
        "<div class='menu'>" +
        "<a class='item' href='tooltips.html'>Accessibility</a>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "</nav>";
    $("article").prepend(ToC);

});
