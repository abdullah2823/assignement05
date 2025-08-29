1. Difference between 
    getElementById:Selects one single element by its unique id.
        document.getElementById("title");

    getElementsByClassName: Selects all elements with the given class name.
        document.getElementsByClassName("btn");

    querySelector: Selects the first element that matches a CSS selector (id, class, tag, attribute, etc.).
        document.querySelector(".btn");

    querySelectorAll: Selects all elements matching the CSS selector.


2. Create and insert a new element into the DOM:

    Create element → document.createElement("tag")
    Set attributes / content: .innerText, .classList.add(), .setAttribute()
    Insert it : .appendChild() , .append() , .insertBefore()

3. Event Bubbling and work:

    <div id="parent">
  <button id="child">Click Me</button>
    </div>

    document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked!");
    });


4. Event Delegation in JavaScrip:

    document.getElementById("parent").addEventListener("click", function(event){
    })


5. Difference between preventDefault() and stopPropagation():

    preventDefault(): Stops the default browser behavior.

    stopPropagation(): Stops the event from bubbling (or going up the DOM tree).


