import React, { useEffect, useState } from 'react'
import { GET_SINGLE_GROUP_BY_ID } from '../../api/queries/getSingleGroupById';
import { useQuery } from '@apollo/client'
  
function memberBar() {
  const { error, loading, data } = useQuery(GET_SINGLE_GROUP_BY_ID, { variables: {} });
  const [group, setGroup] = useState([]);

  useEffect(() => {
    if (data) {
      setGroup()
    }
  })
 

  return (
    <div>memberBar</div>
  )
}

export default memberBar