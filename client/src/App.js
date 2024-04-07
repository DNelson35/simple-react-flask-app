import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch('/members')
    .then(resp => resp.json())
    .then(resp => {
      setData(resp)
    })
    
  },[])


  const membersList = data.members?.map(member => <li key={member}>{member}</li> )
  
  return (
    <div>
      <ul>
        {membersList}
      </ul>
    </div>
  )
}

export default App