# Created by Jesus Islam with MIT License

*Dependency : [JQuery](http://jquery.com) - Optional, [Showdown](https://github.com/coreyti/showdown).*

## USAGE EXAMPLE

suppose the html is

    <!DOCTYPE html>
    <html>
    <head>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
      <script src="https://github.com/coreyti/showdown/raw/master/src/showdown.js"></script>
    <meta charset=utf-8 />
    <title>JS Bin</title>
    </head>
    <body>
      <textarea></textarea>
      <div id="preview"></div>
    </body>
    </html>

Then we can make a preview by doing this: 

    var makePreview = MarkPreview;

    makePreview.observing('textarea').triggeredBy('keyup').renderTo('#preview').render();

Friggin easy


### API :

    .observing(element)

element -> an element you wish to observe. e.g: 'textarea', '#text', etc.

    .triggeredBy(event, element)

event -> an event to trigger MarkPreview. e.g: 'keyup', 'keydown', 'onclick', etc.
element -> an element to trigger the event. e.g: 'button', '#previewButton', etc.

    .renderTo(element)
element -> a target element for MarkPreview. e.g: '#preview', 'div.preview', etc.

    .render()
Apply this method after you've done the configuration above.


see [here](http://jsbin.com/uterud/14) for live demo