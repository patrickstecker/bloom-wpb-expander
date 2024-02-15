 # How to use the Plugin
 To use this plugin, you need to have WP Bakery page builder installed and active.  
 You can choose any button as a trigger and any element (Text, Heading, row, ...) as the hidden content, that should be opened.  
 Optionally you can also use a close button.
 
 ## Basic Usage
 Choose a button, give it the class `"expand-button"` and ID `"expand-button-ID"` (expample `"expand-button-1"`).  
 Then choose the element, which you want to toggle. It can be anything from a textbox to a column. Give this element the class `"expand-container"` and the ID `"expand-container-ID"` (expample `"expand-container-1"`).  
 
 <b>IMPORTANT</b>: The Container <b>MUST</b> have the same value for the ID as the button. For example: `"expand-button-1"` and `"expand-container-1"`.  
 
 ## Optionally: Close-Button
 Optionally you can also add a close button with the class `"close-button"` and the id `"close-button-ID"`, that only appears when the content is expanded and can be used to close the content again. The close button must have the same value for the ID as the button and the container. For example: ID: `"close-button-1"` Class: `"close-button"`.