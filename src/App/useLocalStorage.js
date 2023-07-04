import React from "react";

function useLocalStorage(itemName, initialValue){

    const localStorageItem = localStorage.getItem(itemName, initialValue);
  
    let parsedItem;
  
    if(!localStorageItem){
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem = initialValue;
    }else{
      parsedItem = JSON.parse(localStorageItem);
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      localStorage.setItem(newItem, JSON.stringify(newItem));
      
      setItem(newItem);
    };
  
    return [item, saveItem];
  }

  export { useLocalStorage };