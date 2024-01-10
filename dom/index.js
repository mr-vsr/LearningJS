/*The document object model in java script is used to manupulate the html elements in the web page.
The document object model is a tree like structure which is created by the browser when it laods the html page.
We can use it to add, remove, change the html elements in the web page.
Different object models give different ways to access the html elements in the web page.
In java script we have Nodelist and html collections to access the html elements in the web page.
When we use queryselector or query selector all we get a nodelist and when we use getElementsByClassName or getElementByTagName we get a html collection.
Various function are available inside this collections or lists to access the elements inside it.
like innerHTML, innerText, textContent, value, getAttribute, setAttribute etc.

The difference between innerText and textContent is that innerText will not show the text which is hidden by css.
innerHTML will show the html elements inside the selected element.

To select a particular element inside a nodelist or html collection we can use the index number.
To select a particular element using a query selector we can use the tag name, id name or class name in the same way as we use in css.
querySelector will select the first element with the given tag name, id name or class name.
querySelectorAll will select all the elements with the given tag name, id name or class name.
*/

/* Creating new element using dom:
    1. create a new element using createElement method.
    2. create a text node using createTextNode method. (we can also use innerText or innerHTML to add text inside the element)
    3. append the text node to the element using appendChild method.
    4. append the element to the html document using append child method.

    Example code:
    const newDiv = document.createElement('div');
    const newTextNode = document.createTextNode('This is a new div');
    newDiv.appendChild(newTextNode);
    document.body.appendChild(newDiv); 

    we can also set id and class name to the new element using setAttribute(key,value) or newDiv.id = 'main' or newDiv.className = 'main'
*/

