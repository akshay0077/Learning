import React from 'react'
import GetData from './APIs/GetData'
import PostData from './APIs/PostData'

const App = () => {
  return (
    <>
      <h2><center>Get Api's Data</center></h2>
      <hr />
      <GetData />
      <hr /><hr />

       <h2><center>Post Api's Data</center></h2>
      <hr />
      <PostData />
      <hr /><hr />
    </>
  )
}

export default App