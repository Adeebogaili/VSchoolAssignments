import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';

// Media
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';

import Subtitle from '../shared/Subtitle';

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';

// components
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonaryImagesGallery from '../components/Image-gallery/MasonaryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import NewsLetter from '../shared/NewsLetter';

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='hero__content'>
                <div className='hero__subtitle d-flex align-items-center'>
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt='world' />
                </div>
                <h1>
                  Traveling opens the door to creating{' '}
                  <span className='highlight'> memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eligendi, facilis explicabo vitae autem distinctio placeat
                  atque mollitia aut consequatur dolorem commodi dolorum nostrum
                  nemo at neque culpa assumenda, non deleniti.
                </p>
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box'>
                <img src={heroImg} alt='hero' />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-4'>
                <video src={heroVideo} alt='hero' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className='hero__img-box mt-5'>
                <img src={heroImg02} alt='hero' />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* hero section start */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className='services__subtitle'>What we serve</h5>
              <h5 className='services__title'>We offer our best services</h5>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* feature tour section start */}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'>Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* feature tour section end */}
      {/* experience section start */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='experience__content'>
                <Subtitle subtitle={'Experience'} />
                <h2>
                  With our all Experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                  officiis!
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className='counter__wrapper d-flex align-items-center gap-5'>
                <div className='counter__box'>
                  <span>12k+</span>
                  <h6>Successfull Trips</h6>
                </div>
                <div className='counter__box'>
                  <span>3k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className='counter__box'>
                  <span>15</span>
                  <h6>Years of experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className='experience__img'>
                <img src={experienceImg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* experience section end */}
      {/* gallery section start */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery__title'>
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg='12'>
              <MasonaryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* gallery section end */}
      {/* testimonial section start */}
      <section>
      <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'} />
              <h2 className='testimonial__title'>
                What our fans say about us
              </h2>
            </Col>
            <Col lg='12'>
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* testimonial section end */}
      <NewsLetter/>
    </>
  );
};

export default Home;
