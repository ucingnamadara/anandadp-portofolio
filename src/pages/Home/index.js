import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  HeaderContainer,
  HeaderPhotoProfile,
  HeaderFullName,
  HeaderNickName,
  DescriptionContainer,
  DescriptionHeadlineText,
  DescriptionBodyText,
  DescriptionDownloadSection,
  DescriptionDownloadButton,
  CustomLinkWithColor,
} from './style';
import { FileEarmarkPdf } from 'react-bootstrap-icons';
import Resume from '../../assets/resume.pdf';

const profile = require('../../assets/profile.jpeg');

function Home() {
  return (
    <div>
      <Navbar />
      <HeaderContainer>
        <HeaderPhotoProfile src={profile} />
        <HeaderFullName>Ananda Dana Pratama</HeaderFullName>
        <HeaderNickName>nanda/dana</HeaderNickName>
      </HeaderContainer>
      <DescriptionContainer>
        <DescriptionHeadlineText>
          Nanda is a backend developer who builds and maintains the “under the
          hood” components of websites and applications.
        </DescriptionHeadlineText>
        <DescriptionBodyText>
          Currently, Nanda working at Ecomindo Saranacipta, where he develop
          server-side for Bank Multiarta Sentosa. Nanda have a expertise in{' '}
          <CustomLinkWithColor href="https://spring.io" color="#31983A">
            Spring Boot
          </CustomLinkWithColor>{' '}
          and{' '}
          <CustomLinkWithColor href="https://quarkus.io" color="#1679AB">
            Quarkus
          </CustomLinkWithColor>
          , gained from his experience at MyRepublic, IFG Life, Legit Group.
        </DescriptionBodyText>
        <DescriptionDownloadSection>
          <DescriptionDownloadButton href={Resume}>
            Download Resume <FileEarmarkPdf />
          </DescriptionDownloadButton>
        </DescriptionDownloadSection>
      </DescriptionContainer>
      <Footer />
    </div>
  );
}

export default Home;
