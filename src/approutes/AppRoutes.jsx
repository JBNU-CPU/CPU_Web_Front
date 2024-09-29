import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import About from '../pages/About';
import Community from '../pages/Community';
import Gallery from '../pages/Gallery';
import Join from '../pages/Join';
import Login from '../pages/Login';
import Notification from '../pages/Notification';
import Recruit from '../pages/Recruit';
import Management from '../pages/Management';
import Mypage from '../pages/Mypage';
import Join2 from '../pages/Join2';
import FindPassword from '../pages/FindPassword';
import ReviseMemInfo from '../pages/ReviseMemInfo';
import ReviseMemInfo2 from '../pages/ReviseMemInfo2';
import StudyMainPage from '../pages/StudyMainPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/community' element={<Community />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/join' element={<Join />} />
            <Route path='/join2' element={<Join2/>}/>
            <Route path='/login' element={<Login />} />
            <Route path='/notification' element={<Notification />} />
            <Route path='/recruit' element={<Recruit />} />
            <Route path='/management' element={<Management />} />
            <Route path = '/mypage' element={<Mypage/>}/>
            <Route path='/findpassword' element={<FindPassword/>}/>
            <Route path='/revisememberinfo' element={<ReviseMemInfo/>}/>
            <Route path='/revisememberinfo2' element={<ReviseMemInfo2/>}/>
            <Route path='/studymain' element={<StudyMainPage/>}/>
        </Routes>
    );
};

export default AppRoutes;
