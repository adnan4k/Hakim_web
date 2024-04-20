import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';

const fetchData = async () => {
  // Example API call
  const response = await axios.get('http://backend.hakimethio.et:4000/ads/get-ads');
  console.log(response)
  return response.data;
};

function AdsTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const columns = [
    { key: 'title', label: 'Title' },
    { key: 'content', label: 'Content' },
    { 
      key: 'image', 
      label: 'Image', 
      render: (row) => <img  src={`http://backend.hakimethio.et:4000/images/${row.image}`} alt={row.title} style={{ width: '50px' }} /> 
    },
  ];
  const type = "ads"
  return <Table columns={columns} initialRows={data}   type={type} />;
}

export default AdsTable;
