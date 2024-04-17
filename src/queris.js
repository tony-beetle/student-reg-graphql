import { gql } from '@apollo/client';

export const GET_STUDENTS = gql`
  query {
    studentData {
      name
      email
    }
  }
`;


export const ADD_STUDENT = gql`
  mutation($student: String!) {
    insert_studentData(object: { task: $task }) {
      id
      task
      completed
    }
  }
`;

// export const ADD_STUDENT = gql`
//   mutations {
//     studentData {
//       name
//       email
//     }
//   }
// `;