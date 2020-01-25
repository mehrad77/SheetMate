import React from 'react';
import { Sheet } from './features';
import { sampleCharacterSheet } from './data/sampleSheet';
// import TestFs from './model/TestFs';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sheet character={sampleCharacterSheet} />
      {/* <textarea
          className="bg-green-500"
          value={TestFs.getDirectoryListing()}
          readOnly
          rows={20}
        /> */}
    </div>
  );
};

export default App;
