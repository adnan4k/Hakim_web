import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/front/Home';
import CreatePost from './pages/dashboard/CreatePost';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;