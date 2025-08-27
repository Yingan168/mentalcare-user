import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { q } from 'framer-motion/client';

function MainLayout() {
  return (
    <>
    <Header />
      <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout;