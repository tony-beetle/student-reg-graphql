import { useQuery } from '@apollo/client';
import {  GET_STUDENTS } from './queris';
import { useEffect } from 'react';

function DisplayTable() {
  //
  useEffect(()=>{
    console.log(data);
    
   },[])

  const { loading, error, data } = useQuery(GET_STUDENTS);
  if (loading) return <p>Loading...</p>;
   if (error) return <p>Error: {error.message}</p>;
 
   
  
  // const studentData = JSON.parse(localStorage.getItem("studentData"));
  return (
    <>
      <div className="container p-5">
        <table class="table">
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Gender</th>
              {/* <th>Date of Birth</th> */}
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
           
              {data.studentData?.map((item, index) => (
              
              <>
              <tr>
              <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.course}</td>
              </tr>
                 

</>
              
              ))}

              {/* <td>{studentData.name}</td>
            <td>{studentData.address}</td>
            <td>{studentData.mobile}</td>
            <td>{studentData.email}</td>
            <td>{studentData.gender}</td>
            {/* <td>{studentData.dob}</td> */}
              {/* <td>{studentData.course}</td> */}
           
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DisplayTable;
