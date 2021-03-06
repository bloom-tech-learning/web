import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`

const StyledDetails  = styled.div`
  opacity: 0;
  transform: scale(2) rotateZ(180deg);
  animation: ${kf} 0.5s ease-in-out forwards;
  background-color: ${props => props.color ? props.color : 'initial'}
  p {
    color: ${props => props.theme.tertiaryColor};
  }
  h2 {
    color: ${props => props.theme.primaryColor};
  }
`

const mockFriends = [
  { id: '1', name: 'Bea', email: 'bea@bea.com', age: 32, hobbies: ['coding', 'science fiction', 'sightseeing'] },
  { id: '2', name: 'Bikesh', email: 'bikesh@bikesh.com', age: 28, hobbies: ['fishing', 'coding', 'death metal'] },
  { id: '3', name: 'Cora', email: 'cora@cora.com', age: 25, hobbies: ['hiking', 'netflix', 'coding'] },
  { id: '4', name: 'Deborah', email: 'deborah@deborah.com', age: 22, hobbies: ['heavy metal', 'coding', 'death metal'] },
  { id: '5', name: 'Devin', email: 'devin@devin.com', age: 35, hobbies: ['reading', 'coding', 'bird watching'] },
  { id: '6', name: 'Micherre', email: 'micherre@micherre.com', age: 24, hobbies: ['hiking', 'heavy metal', 'coding'] },
]

export default function Details(props) {
  const { friendId, close, color } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    setDetails(mockFriends[friendId - 1]);
  }, [friendId])

  return (
    <StyledDetails color={color}>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.age}</p>
          <p>email is {details.email}</p>
          {name} likes:
          <ul>
            {
              details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </>
      }
      <button onClick={close}>Close</button>
    </StyledDetails>
  )
}