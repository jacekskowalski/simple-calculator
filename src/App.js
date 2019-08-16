import React from 'react';
import './index.css';
import  Calculator  from './Calculator';

function App() {
  return (
      <div className="calculator">
          <div className="calc_input">  <input type="text" name="inputValue" /></div>
            <div class='row'>
              <div class='column'>
                  <div>7 </div>
              </div>
              <div class='column'>
                  <div>8</div>
              </div>
              <div class='column'>
                  <div >9</div>
              </div>
              <div class='column'>
                  <div>x</div>
              </div>
          </div>
          <div class='row'>
              <div class='column'>
                  <div >4</div>
              </div>
              <div class='column'>
                  <div>5</div>
              </div>
              <div class='column'>
                  <div>6</div>
              </div>
              <div class='column'>
                  <div>/ </div>
              </div>
          </div>
          <div class='row'>
              <div class='column'>
                  <div>1</div>
              </div>
              <div class='column'>
                  <div>2</div>
              </div>
              <div class='column'>
                  <div>3</div>
              </div>
              <div class='column'>
                  <div>-</div>
              </div>
          </div>
          <div class='row'>
              <div class='column'>
                  <div>0</div>
              </div>
              <div class='column'>
                  <div>,</div>
              </div>
              <div class='column'>
                  <div>=</div>
              </div>
              <div class='column'>
                  <div>+</div>
              </div>
          </div>
          </div>
        
  );
}

export default App;
