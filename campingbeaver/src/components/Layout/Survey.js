import React from 'react'
import Alert from 'react-bootstrap/Alert';

const Survey = () => {
  return (
    <Alert variant="success">
    <Alert.Heading>어서와 캠핑은 처음이지?</Alert.Heading>
    <p>
      여기서 함께할 친구를 골라보렴!
    </p>
    <hr />
    <p className="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things
      nice and tidy.
    </p>
  </Alert>
  )
}

export default Survey