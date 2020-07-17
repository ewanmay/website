import React from 'react';
import './styles.css';
import Loader from '../shared/Loader';

function Values() {
  return (
    <div className="values-container flex center-item">
      <div className="col-lg-6 values flex column center-item">
        <Loader>
          <div className="values-title">
            My operating guidelines
        </div>
        </Loader>
        <Loader>
          <div className="values-list flex column">
            <div className="values-item">People before anything</div>
            <div className="values-item">Know that you don't</div>
            <div className="values-item">Shoot your shot</div>
            <div className="values-item">A good plan solves its own problems</div>
            <div className="values-item">Do what matters and nothing else</div>
          </div>
        </Loader>
      </div>
    </div>
  );
}

export default Values;
