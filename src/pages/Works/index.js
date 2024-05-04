import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import {
  Container,
  Text,
  TextBold,
  Title,
  WorkBody,
  WorkContainer,
  WorkDescription,
  WorkImage,
  WorkTag,
  WorkTags,
  WorkTitle,
  WorkYear,
} from './style';

const wokumo = require('../../assets/works/Wokumo.png');
const stella = require('../../assets/works/Stella.png');
const ifg = require('../../assets/works/IFG.png');
const fooma = require('../../assets/works/Fooma.png');
const foomaCrm = require('../../assets/works/FoomaCrm.png');

const works = [
  {
    title: 'Wokumo',
    description: 'An official app for MyRepublic engineer-partners.',
    year: '2021',
    image: wokumo,
    tags: ['mobile', 'rest', 'spring-boot'],
  },
  {
    title: 'Stella',
    description: 'The central hub for MyRepublic staff members.',
    year: '2021 - 2022',
    image: stella,
    tags: ['web', 'rest', 'quarkus'],
  },
  {
    title: 'Life By IFG',
    description:
      'An insurance app designed to provide policyholders with essential information about their life insurance policies.',
    year: '2022 - 2023',
    image: ifg,
    tags: ['web', 'rest', 'quarkus'],
  },
  {
    title: 'Fooma',
    description:
      'Lifestyle apps seamlessly integrates food discovery, culinary experiences, and event management.',
    year: '2023 - 2024',
    image: fooma,
    tags: ['web', 'mobile', 'rest', 'quarkus'],
  },
  {
    title: 'Fooma CRM',
    description:
      'CRM system seamlessly integrates guest data, personalized marketing, and operational efficiency for restaurants and hospitality businesses.',
    year: '2023 - 2024',
    image: foomaCrm,
    tags: ['web', 'rest', 'quarkus'],
  },
];

function Works() {
  return (
    <Container>
      <Navbar page="works" />
      <Title>
        <Text size="32px" weight="400">
          Some of Nanda's
        </Text>
        <TextBold size="100px">Works</TextBold>
      </Title>
      {works.map((work) => {
        return (
          <WorkContainer>
            <WorkDescription>
              <WorkTitle>{work.title}</WorkTitle>
              <WorkBody>{work.description}</WorkBody>
              <WorkTags>
                {work.tags.map((tag) => (
                  <WorkTag>#{tag}</WorkTag>
                ))}
              </WorkTags>
              <WorkYear>{work.year}</WorkYear>
            </WorkDescription>
            <WorkImage src={work.image} />
          </WorkContainer>
        );
      })}
      <Footer />
    </Container>
  );
}

export default Works;
