import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import {
  Container,
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
  FlagIcon,
} from './style';
import { FileEarmarkPdf } from 'react-bootstrap-icons';
import Resume from '../../assets/resume.pdf';

const profile = require('../../assets/profile.jpeg');
const flag = require('../../assets/flag.gif');

function Home() {
  return (
    <Container>
      <Navbar />
      <HeaderContainer>
        <HeaderPhotoProfile src={profile} />
        <HeaderFullName>Ananda Dana Pratama</HeaderFullName>
        <HeaderNickName>
          <a href="https://open.spotify.com/track/74bzlwFt2z6WNsDcNPkgYF?si=3905fc7170064ecf">
            <FlagIcon src={flag} title="Indonesia" />
          </a>{' '}
          nanda/dana
        </HeaderNickName>
      </HeaderContainer>
      <DescriptionContainer>
        <DescriptionHeadlineText>
          Nanda is a backend developer who builds and maintains the “under the
          hood” components of websites and applications.
        </DescriptionHeadlineText>
        <DescriptionBodyText>
          Currently, Nanda is working at Ecomindo Saranacipta, where he develop
          server-side for Bank Multiarta Sentosa. Nanda have a expertise in{' '}
          <CustomLinkWithColor
            href="https://spring.io"
            color="#31983A"
            target="_blank"
          >
            Spring Boot
          </CustomLinkWithColor>{' '}
          and{' '}
          <CustomLinkWithColor
            href="https://quarkus.io"
            color="#1679AB"
            target="_blank"
          >
            Quarkus
          </CustomLinkWithColor>
          , gained from his experience at MyRepublic, IFG Life, Legit Group.
        </DescriptionBodyText>
        <DescriptionDownloadSection>
          <DescriptionDownloadButton href={Resume} target="_blank">
            Download Resume <FileEarmarkPdf />
          </DescriptionDownloadButton>
        </DescriptionDownloadSection>
      </DescriptionContainer>
      <Footer />
    </Container>
  );
}

export default Home;
