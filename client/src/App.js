import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/front/Home';
import CreatePost from './pages/dashboard/CreatePost';
import CreateAds from './pages/dashboard/CreateAds';
import SignUp from './pages/dashboard/Signup';
import Login from './pages/dashboard/Login';
import PostTable from './pages/tables/PostTable';
import AdsTable from './pages/tables/AdsTable';
import SubscriptionTable from './pages/tables/SubscriptionTable';
import Subscription from './components/Subscription';
import UserTable from './pages/tables/UserTable';
import CreateUser from './pages/dashboard/CreateUser';
import PostDetail from './pages/front/PostDetail';

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
          <Route path="/sub" element={<SubscriptionTable />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/user" element={<UserTable />} />
          <Route path="/create-user" element={<CreateUser/>} />
          <Route path="/post-detail" element={<PostDetail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;