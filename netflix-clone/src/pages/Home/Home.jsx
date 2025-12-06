import React from 'react';
import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import RowList from '../../components/Rows/RowList/RowList.jsx';

const Home = () => {
    return (
      <>
        <Header></Header>
        <Banner></Banner>
        <RowList></RowList>
        <Footer></Footer>
      </>
    );
}

export default Home;
