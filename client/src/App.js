import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/front/Home';
import CreatePost from './pages/dashboard/CreatePost';
import CreateAds from './pages/dashboard/CreateAds';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/create-ads" element={<CreateAds />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;