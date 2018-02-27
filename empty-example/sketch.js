let value;
let lastValue;
let resultsArray = [];

function preload(){
  info = loadJSON('sandwiches.json');
  backgroundImage = loadImage('Website Background.png')
}

function setup() {
  search(value);
}

function search() {
  value = document.getElementById("myDropdown").value;
  findFood(value);
}

function findFood(selectedIngredient) {
  
  if (resultsArray.length > 0) {
    
  //Because an array already exists, delete the current divs and delete all items in the array and replace them with new items.
    
    for (var index = 0; index < resultsArray.length; index++) {
      resultsArray[index].remove();
    }
    
    resultsArray.splice(0, resultsArray.length);
  
    }
    
  if (selectedIngredient == "all") {
    for(i = 0; i < info.sandwiches.length; i++) {
      tempSandwich = info.sandwiches[i];
      var myDiv = createDiv(
        '<div class="resultDiv">' + 
          '<h2>' +
            tempSandwich.name +
          '</h2>' +
          '<p>' +
            tempSandwich.description +
          '</p>' +
        '</div>'
      );
      
      resultsArray.push(myDiv);
      
    }
    
  } else {
    
    for(i = 0; i < info.sandwiches.length; i++) {
      
      tempSandwich = info.sandwiches[i];
      var fixedDescription = tempSandwich.description.toLowerCase();
      var fixedName = tempSandwich.name.toLowerCase();  
      
      if(fixedDescription.includes(selectedIngredient) || fixedName.includes(selectedIngredient)) {
        var myDiv = createDiv(
          '<div class="resultDiv">' + 
            '<h2>' +
              tempSandwich.name +
            '</h2>' +
            '<p>' +
              tempSandwich.description +
            '</p>' +
          '</div>'
        );
        
        resultsArray.push(myDiv);            
      
      }
      
    }
  }
}