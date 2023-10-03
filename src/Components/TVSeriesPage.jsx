import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const TVSeriesPage = () => {
    const navigate = useNavigate()
  return (
    <div style={{ padding: '20px' }}>
      <h1>TV Series</h1>
      <p>Currently, TV series are not available.</p>
      <Button type="primary" onClick={()=>{navigate("/movies")}}>
        Browse Movies Instead
      </Button>
    </div>
  );
};

export default TVSeriesPage;
