import React from 'react';

import TestFs from './model/TestFs';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <textarea
          className="bg-green-500"
          value={TestFs.getDirectoryListing()}
          readOnly
          rows={20}
        />
      </header>
    </div>
  );
};

export default App;
