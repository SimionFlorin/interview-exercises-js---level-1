/**
 * REFERENCE EXAMPLE: Chat Room Component
 * 
 * This is the example provided to candidates before the interview.
 * It demonstrates the basic React patterns they'll need:
 * - useState for managing local state
 * - useEffect for side effects
 * - Cleanup in useEffect
 * - Basic form handling
 * - Conditional rendering
 * 
 * Candidates don't need to understand React deeply beyond these concepts.
 * This file serves as a reference they can look back to during the interview.
 */

import { useState, useEffect } from 'react';
import { createConnection } from './chat.js';

/**
 * ChatRoom Component
 * 
 * Demonstrates:
 * - useState: serverUrl state that can be changed by user input
 * - useEffect: Connects to chat room when component mounts or dependencies change
 * - Cleanup: Disconnects when component unmounts or dependencies change
 * - Props: Receives roomId from parent
 */
function ChatRoom({ roomId }) {
  // useState: Declares state variable and setter function
  // Initial value is 'https://localhost:1234'
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  // useEffect: Runs after render
  // Dependencies [roomId, serverUrl] mean it re-runs when these change
  useEffect(() => {
    // Setup: Connect to chat room
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    
    // Cleanup: Return function that runs before next effect or unmount
    return () => {
      connection.disconnect();
    };
  }, [roomId, serverUrl]); // Dependency array

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

/**
 * App Component
 * 
 * Demonstrates:
 * - Multiple useState calls
 * - Conditional rendering with &&
 * - Event handlers
 * - Select dropdown handling
 */
export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      
      {/* Conditional rendering: Only show if 'show' is true */}
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </>
  );
}

/**
 * Simulated Chat Connection
 * 
 * In a real app, this would connect to an actual server.
 * For this example, it just logs to console.
 */
export function createConnection(serverUrl, roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '" room at ' + serverUrl + '...');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room at ' + serverUrl);
    }
  };
}

/**
 * KEY PATTERNS TO REMEMBER:
 * 
 * 1. useState Pattern:
 *    const [value, setValue] = useState(initialValue);
 *    - value: current state
 *    - setValue: function to update state
 *    - initialValue: starting value
 * 
 * 2. useEffect Pattern:
 *    useEffect(() => {
 *      // code to run
 *      return () => {
 *        // cleanup code
 *      };
 *    }, [dependencies]);
 *    - Runs after render
 *    - Re-runs when dependencies change
 *    - Cleanup runs before next effect or unmount
 * 
 * 3. Event Handlers:
 *    <button onClick={() => doSomething()}>
 *    <input onChange={e => setValue(e.target.value)} />
 * 
 * 4. Conditional Rendering:
 *    {condition && <Component />}
 *    {condition ? <ComponentA /> : <ComponentB />}
 * 
 * 5. Controlled Inputs:
 *    <input value={state} onChange={e => setState(e.target.value)} />
 *    - Input value always matches state
 *    - State is "single source of truth"
 */
