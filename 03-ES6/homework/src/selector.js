var traverseDomAndCollectElements = function(matchFunc, startEl= document.body) {//(sefdocument.body))
  var resultSet = [];
  /*
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }
  */

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)){resultSet.push(startEl)}

  for(let i = 0; i < startEl.children.length; i++){
    let results = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = [...resultSet, ...results];
  }
  return resultSet
  
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aqu
    if (selector[0] === ".") return "class";
    if (selector[0] === "#") return "id";
    if (selector.split(".").length>1) return 'tag.class';
    return "tag";

  }

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento HTML como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {//"#price"  ".heading" "img.photo"
  var selectorType = selectorTypeMatcher(selector);
  console.log(selector);
  // selectorType =selectorTypeMatcher("#price")  => ("id")
  // selectorType ="id"  ".heading"
  var matchFunction // = (selector) => {}
  if (selectorType === "id") { 
    matchFunction=function(elementoHTML){
      return "#"+elementoHTML.id===selector;
    };
  } else if (selectorType === "class") {
    matchFunction=function(elementoHTML){
      return elementoHTML.classList.contains(selector.substring(1));//heading
    };
    
  } else if (selectorType === "tag") {
    matchFunction=function(elementoHTML){
      return elementoHTML.tagName.toLowerCase()===selector.toLowerCase();
    }
   }else if (selectorType === "tag.class") {
    matchFunction=function(elementoHTML){
      //    [img, photo] = selector (Selector) img photo
      const [tag,clase] = selector.split(".");
      return (elementoHTML.tagName.toLowerCase()===tag.toLowerCase())&&(elementoHTML.classList.contains(clase))
  }}
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);// func     matchFunctionMaker(selector)(document.body)  
  //selectorMatchFunc(des);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

