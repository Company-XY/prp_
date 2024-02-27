import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Forgot from "./pages/Auth/ForgotPassword";
import Reset from "./pages/Auth/ResetPassword";
import Error from "./pages/Misc/Error404";

import Newsmaker from "./pages/Dashboard/Newsmaker/Newsmaker";
import NewsmakerAnalytics from "./pages/Dashboard/Newsmaker/Analytics";
import NewsmakerCompany from "./pages/Dashboard/Newsmaker/Company";
import NewsmakerDistribution from "./pages/Dashboard/Newsmaker/Distribution";
import NewsmakerOutreach from "./pages/Dashboard/Newsmaker/Outreach";
import NewsmakerHelp from "./pages/Dashboard/Newsmaker/Help";
import NewsmakerNewsroom from "./pages/Dashboard/Newsmaker/Newsroom";
import NewsmakerDashboard from "./pages/Dashboard/Newsmaker/Dashboard";
import NewsmakerPress from "./pages/Dashboard/Newsmaker/PressRelease";
import NewsmakerSearch from "./pages/Dashboard/Newsmaker/Search";
import Blogs from "./pages/Dashboard/Blogs";

import Newsroom from "./pages/Dashboard/Newsroom/Newsroom";
import NewsroomDashboard from "./pages/Dashboard/Newsroom/Dashboard";
import NewsroomOutreach from "./pages/Dashboard/Newsroom/Outreach";
import NewsroomPR from "./pages/Dashboard/Newsroom/PressRelease";

import AdminHome from "./pages/Dashboard/Admin/Admin";
import AdminDashboard from "./pages/Dashboard/Admin/Dashboard";
import AdminRoles from "./pages/Dashboard/Admin/Roles";
import AdminList from "./pages/Dashboard/Admin/Lists";

import SupportHome from "./pages/Dashboard/Support/Support";
import SupportDashboard from "./pages/Dashboard/Support/Dashboard";
import SupportIssues from "./pages/Dashboard/Support/Issues";
import SupportLists from "./pages/Dashboard/Support/Lists";

import ScrollToTopOnPageChange from "./components/ScrollToTopOnPageChange";
import BackToTop from "./components/BackToTop";

function App() {
  const userString = localStorage.getItem("user");
  const userObject = userString ? JSON.parse(userString) : null;
  const userRole = userObject ? userObject.role : null;

  return (
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTopOnPageChange />
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot_password" element={<Forgot />} />
          <Route path="/reset_password" element={<Reset />} />
          {/*<Route path="*" element={<Error />} />*/}

          <Route path="/newsmaker" element={<NewsmakerDashboard />}>
            <Route index element={<Newsmaker />} />
            <Route path="distribution" element={<NewsmakerDistribution />} />
            <Route path="newsroom" element={<NewsmakerNewsroom />} />
            <Route path="profile" element={<NewsmakerCompany />} />
            <Route path="analytics" element={<NewsmakerAnalytics />} />
            <Route path="settings" element={<NewsmakerHelp />} />
            <Route path="outreach" element={<NewsmakerOutreach />} />
            <Route path="press" element={<NewsmakerPress />} />
            <Route path="search" element={<NewsmakerSearch />} />
            <Route path="blogs" element={<Blogs />} />
          </Route>

          <Route path="/newsroom" element={<NewsroomDashboard />}>
            <Route index element={<Newsroom />} />
            <Route path="press" element={<NewsroomPR />} />
            <Route path="outreach" element={<NewsroomOutreach />} />
          </Route>

          <Route path="/admin" element={<AdminDashboard />}>
            <Route index element={<AdminHome />} />
            <Route path="list" element={<AdminList />} />
            <Route path="roles" element={<AdminRoles />} />
          </Route>

          <Route path="/support" element={<SupportDashboard />}>
            <Route index element={<SupportHome />} />
            <Route path="issues" element={<SupportIssues />} />
            <Route path="lists" element={<SupportLists />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
