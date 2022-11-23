import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Audience from "../../components/Audience/Audience";
import NavBar from "../../components/NavBar/NavBar";
import Graph from '../../components/Graph/Graph'
import Program from "../../components/Program/Program";
import Format from "../../components/Format/Format";
import Results from "../../components/Results/Results";
import Tariffs from "../../components/Tariffs/Tariffs";
import Mentors from '../../components/Mentors/Mentors'
import Feedbacks from "../../components/Feedbacks/Feedbacks";
import CommonQuestions from "../../components/CommonQuestions/CommonQuestions";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="wrapper">
      <NavBar></NavBar>
      <div className='main'>
        <Header></Header>
        <Audience></Audience>
        <Graph></Graph>
        <Program></Program>
        <Format></Format>
        <Results></Results>
        <Tariffs></Tariffs>
        <Mentors></Mentors>
        <Feedbacks></Feedbacks>
        <CommonQuestions></CommonQuestions>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
