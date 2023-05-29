export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('tasks');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (e) {
      console.log(e);
      return undefined;
    }
  };
  
  export const saveState = state => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('tasks', serializedState);
    } catch (e) {
      console.log(e);
    }
  };
  
 
  