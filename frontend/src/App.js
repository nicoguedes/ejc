import React from 'react';
import Header from './components/Header';
import PersonTable from './components/Tables/Person';

export default () => {
  return (
    <React.Fragment>
      <Header />
      <PersonTable />
    </React.Fragment>
  )
}
