 // Function to show the selected component based on the clicked link
 function showComponent(componentId) {
    // Hide all components
    var components = document.querySelectorAll("#content > div");
    for (var i = 0; i < components.length; i++) {
      components[i].style.display = "none";
    }
    
    // Show the selected component
    var component = document.getElementById(componentId);
    component.style.display = "block";
  }
  
  // Attach click event listeners to the links
  var links = document.querySelectorAll("#sidebar a");
  for (var i = 0; i < links.length; i++) {
    var link = links[i];
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default link behavior
      var componentId = this.getAttribute("href").substring(1);
      showComponent(componentId);
    });
  }