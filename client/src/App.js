import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/front/Home';
import CreatePost from './pages/dashboard/CreatePost';
import CreateAds from './pages/dashboard/CreateAds';
import SignUp from './pages/dashboard/Signup';
import Login from './pages/dashboard/Login';
import PostTable from './pages/tables/PostTable';
import AdsTable from './pages/tables/AdsTable';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/create-ads" element={<CreateAds />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<PostTable />} />
          <Route path="/ads" element={<AdsTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;