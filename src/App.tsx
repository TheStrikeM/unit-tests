import React from 'react';

function App({ name, message }: { name: string, message: string }) {
  return (
    <div className="App">
      {name} + {message}
    </div>
  );
}

export default App;
