import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './Table';

const fetchData = async () => {
  // Example API call
  const response = await axios.get('http://backend.hakimethio.et:4000/user/get-user');
  console.log(response)
  return response.data;
};

function UserTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    {key:'password',label:'Password'},
  ];
  const type = "user"
  return <Table columns={columns} initialRows={data}   type={type} />;
}

export default UserTable  ;
