import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { WorkExperienceTimeline } from '../../components/Timeline';
import {
  AboutTitle,
  Body,
  Container,
  HeaderDiv,
  HeaderPicture,
  ListB,
  ListLi,
  ListOl,
  TextBold,
  TextNormal,
} from './style';

const Header = require('../../assets/about/Header.png');
const Mentor = require('../../assets/about/Mentor.png');

function About() {
  return (
    <Container>
      <Navbar page="about" />
      <Body>
        <AboutTitle>Sampurasun!</AboutTitle>
        <TextBold>
          I’m a Backend Developer with over 4 years of experience in coding APIs
          and mostly working remotely.
        </TextBold>
        <HeaderDiv>
          <HeaderPicture src={Header}></HeaderPicture>
        </HeaderDiv>
        <TextNormal>
          My Name is Ananda Dana Pratama, often known simply as Dana or Nanda.
          Currently residing in Bandung, Indonesia, I excel at the intersection
          of clean code, database design, and system architecture. My day-to-day
          activities are deeply involved in the agile methodology of the product
          development process.
        </TextNormal>
        <TextBold>
          From Telecommunication Engineer to Backend Developer
        </TextBold>
        <TextNormal>
          I'm a telecommunication engineering graduate from State Polytechnic of
          Bandung, Indonesia, where i gained valuable knowledge about network
          and signal processing. However, my passion for coding and system
          optimization led me to pursue a career in software development, with a
          focus on backend systems.
        </TextNormal>
        <TextNormal>
          Now, as a backend developer, I apply the principles of efficient
          communication and data transfer learned in telecom to create scalable
          and secure server-side applications. With expertise in Java
          programming language, I’m passionate about crafting efficient and
          secure server-side solutions.
        </TextNormal>
        <TextBold>Career Milestones</TextBold>
        <WorkExperienceTimeline />
        <TextBold>Help Others by Becoming a Mentor in a Bootcamp</TextBold>
        <TextNormal>
          Besides my experience as a programmer, I have also served as a mentor
          at a bootcamp from Apr 2022 to May 2023. Kawah Edukasi, where I
          mentored, is a free bootcamp focused on software development. With a
          total of 6 batches, I taught how to use Quarkus so that they could
          quickly be prepared to be assigned to client sites.
        </TextNormal>
        <HeaderDiv>
          <HeaderPicture src={Mentor}></HeaderPicture>
        </HeaderDiv>
        <TextNormal>My tenure as a mentor was marked by significant achievements, including:</TextNormal>
        <ListOl type=''>
          <ListLi><ListB>Developing a comprehensive curriculum</ListB> that covers both theoretical and practical aspects of Quarkus.</ListLi>
          <ListLi><ListB>Guiding students through complex projects</ListB>, which helped them build a solid portfolio to showcase to potential employers.</ListLi>
          <ListLi><ListB>Creating a supportive learning environment</ListB> that encouraged collaboration and peer learning among the participants.</ListLi>
          <ListLi><ListB>Implementing feedback mechanisms</ListB> that allowed for continuous improvement of the bootcamp structure and content.</ListLi>
          <ListLi><ListB>Fostering a community</ListB> where past and present participants can network, share opportunities, and continue learning.</ListLi>
        </ListOl>
        <TextNormal>These efforts not only enhanced the readiness of the participants for the professional world but also contributed to the growth of the local tech community.</TextNormal>
      </Body>
      <Footer />
    </Container>
  );
}

export default About;
