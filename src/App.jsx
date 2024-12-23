import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Users from './user/pages/Users'

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  )
}

export default App
