import React from 'react';
import { Button } from 'antd';


const TVSeriesPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>TV Series</h1>
      <p>Currently, TV series are not available.</p>
      <Button type="primary" href="/movies">
        Browse Movies Instead
      </Button>
    </div>
  );
};

export default TVSeriesPage;
