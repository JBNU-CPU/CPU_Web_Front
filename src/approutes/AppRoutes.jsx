import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import About from '../pages/About';
import Community from '../pages/Community';
import Gallery from '../pages/Gallery';
import Join from '../pages/Join';
import Login from '../pages/Login';
import Notification from '../pages/Notification';
import Project from '../pages/Project';
import Section from '../pages/Section';
import Study from '../pages/Study';
import Recruit from '../pages/Recruit';
import Management from '../pages/Management';
import Mypage from '../pages/Mypage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/community' element={<Community />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/join' element={<Join />} />
            <Route path='/login' element={<Login />} />
            <Route path='/notification' element={<Notification />} />
            <Route path='/project' element={<Project />} />
            <Route path='/section' element={<Section />} />
            <Route path='/study' element={<Study />} />
            <Route path='/recruit' element={<Recruit />} />
            <Route path='/management' element={<Management />} />
            <Route path = '/mypage' element={<Mypage/>}/>
        </Routes>
    );
};

export default AppRoutes;
