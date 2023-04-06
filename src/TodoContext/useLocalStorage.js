import React from 'react';

function useLocalStorage(itemName, initialValue) {
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      try {
        setTimeout(() => {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify());
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          
          parsedItem.sort((a, b) => a.completed - b.completed);
          setItem(parsedItem);
          setLoading(false);
          
        }, 2500);
      } catch (error) {
        setError(error);
      }
    });
  
    const saveItem = (newItem) => {
    try {
        const stringifiedTodos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedTodos);
        setItem(newItem);
        
    } catch (error) {
        setError(error);
    }
    };
  
    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };