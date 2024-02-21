# BLOOM WP Bakery Expander
This light-weight Plugin adds expander functionality to a button and any content. This Plugin also works without WP Bakery.

## How to use the Plugin
You can choose any button as a trigger and any element (Text, Heading, row, ...) as the hidden content, that should be opened.  
Optionally you can also use a close button.

### Basic Usage
Choose a button, give it the class `"expand-button"` and another class `"expand-button-id-ID"` (example `"expand-button-id-1"`).  
Then choose the element, which you want to toggle. It can be anything from a textbox to a column. Give this element the ID `"expand-container-ID"` (example `"expand-container-1"`).  

<b>IMPORTANT</b>: The Container <b>MUST</b> have the same value for the ID as the button. For example: `"expand-button-id-1"` and `"expand-container-1"`.  

### Optionally: Close-Button
Optionally you can also add a close button with the class `"close-button"` and another class `"close-button-id-ID"`, that only appears when the content is expanded and can be used to close the content again. The close button must have the same value for the ID as the button and the container. For example: Class: `"close-button-id-1"` Class: `"close-button"`.  
<b>IMPORTANT:</b> The Close-Button must be <b>inside</b> the expand-container.
