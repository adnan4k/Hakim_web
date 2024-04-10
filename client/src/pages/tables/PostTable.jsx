import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './table';

const fetchData = async () => {
  // Example API call
  const response = await axios.get('http://localhost:4000/post/get-post');
  console.log(response)
  return response.data;
};

function PostTable() {
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
      render: (row) => <img  src={`http://localhost:4000/images/${row.image}`} alt={row.title} style={{ width: '50px' }} /> 
    },
  ];
  const type = "post"
  return <Table columns={columns} initialRows={data}   type={type} />;
}

export default PostTable;
