import React from 'react';
import { Navigation } from './components';
import { Sheet } from './features';
import { sampleCharacterSheet } from './data/sampleSheet';
// import TestFs from './model/TestFs';

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="container mx-auto px-4 mt-2">
        <Sheet character={sampleCharacterSheet} />
        {/* <textarea
          className="bg-green-500"
          value={TestFs.getDirectoryListing()}
          readOnly
          rows={20}
        /> */}
      </div>
    </>
  );
};

export default App;
