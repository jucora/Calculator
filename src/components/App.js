import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../css/style.scss';
/* import calculate from '../logic/calculate';-> COMMENTED FOR NOW
                                                  TO AVOID no-unused-vars
                                                 ERROR. IT WILL BE IMPLEMMENTED IN NEXT MILESTONE */

const App = () => (
  <div className="app">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
