import { useDebugValue, useState } from "react";



function useFriendStatus() {
  const [isOnline, setIsOnline] = useState(null);

  // ...

   useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}


export default useFriendStatus