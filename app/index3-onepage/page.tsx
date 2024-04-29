"use client";
import AkpagerAccordion from "@/components/AkpagerAccordion";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Accordion, Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";

const accordionItems = [
  {
    id: 1,
    title: "How To Get Our Services?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 2,
    title: "What Is Data Analysis For Business ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 3,
    title: "Why Need Marketing Data Analysis ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 4,
    title: "Have Any Dedicated Support Team ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 5,
    title: "Why Join Our Courses ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
  {
    id: 6,
    title: "Have Any Dedicated Support Team ?",
    value:
      "At vero eoset accusamus etiusto dignissimos duci blanditiis praesentium corrupti dolores molest excepturi sint occaecati cupiditate",
  },
];

const page = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("home-three");
  }, []);
  const [active, setActive] = useState("collapse1");
  return (
    <AkpagerLayout header={3} footer={3} bodyClass={"home-three"} onePage>
      {/* Hero area start */}
      <section
        id="home"
        className="hero-area-three bgs-cover bgc-lighter pt-210 rpt-150 pb-100"
        style={{ backgroundImage: "url(assets/images/hero/hero-three-bg.png)" }}
      >
        <div className="container">
          <div className="row gap-55 align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content style-three rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h1>
                  Have your own personalized <span>Restaurant App</span>
                </h1>
                <p>
                  Our company helps empower restaurants into the modern age by
                  providing a reliable, affordable and quality app
                </p>
                <Link href="contact" className="theme-btn mt-15 mb-10">
                  Get 7-Days Trail <i className="far fa-arrow-right" />
                </Link>
                <ul className="icon-list style-two">
                  <li>
                    <i className="fal fa-check" /> 7-day free trial
                  </li>
                  <li>
                    <i className="fal fa-check" /> No credit card required
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 rel z-1">
              <div
                className="hero-three-image"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/hero/hero-three.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero area End */}
      {/* Client Logos Area Start */}
      <section className="client-logo-area pt-120 rpt-100 pb-90 rpb-70 bgc-navyblue">
        <div
          className="section-title text-center text-white mb-60"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h4>I’ve 1253+ Global Clients &amp; lot’s of Project Complete</h4>
        </div>
        <div className="client-logo-wrap logo-white">
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo-two1.png"
                alt="Client Logo"
              />
            </a>
          </div>
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-delay={50}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo-two2.png"
                alt="Client Logo"
              />
            </a>
          </div>
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-delay={100}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo-two3.png"
                alt="Client Logo"
              />
            </a>
          </div>
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-delay={150}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo-two4.png"
                alt="Client Logo"
              />
            </a>
          </div>
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-delay={200}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo-two5.png"
                alt="Client Logo"
              />
            </a>
          </div>
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-delay={250}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo-two6.png"
                alt="Client Logo"
              />
            </a>
          </div>
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-delay={300}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo-two7.png"
                alt="Client Logo"
              />
            </a>
          </div>
          <div
            className="client-logo-item"
            data-aos="fade-up"
            data-aos-delay={350}
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <a href="#">
              <img
                src="assets/images/client-logos/client-logo-two8.png"
                alt="Client Logo"
              />
            </a>
          </div>
        </div>
      </section>
      {/* Client Logos Area End */}
      {/* Tab Area Start */}
      <section id="about" className="tab-area-two bgc-lighter pt-125 rpt-105">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-7 col-lg-9 col-md-11"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title text-center mb-35">
                <span className="subtitle-one mb-20">
                  <i className="flaticon-layers" /> Why Get Akpager
                </span>
                <h2>
                  All-in-one, simple, and powerful SaaS customizable software
                </h2>
              </div>
            </div>
          </div>
          <Tab.Container defaultActiveKey={"tabTwo1"}>
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="col-lg-10">
                <Nav
                  as={"ul"}
                  className="nav advanced-tab style-two mb-55"
                  role="tablist"
                >
                  <Nav.Item as={"li"}>
                    <Nav.Link as={"button"} eventKey="tabTwo1">
                      Innovative Solutions
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link as={"button"} eventKey="tabTwo2">
                      Easy to Go Live
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link as={"button"} eventKey="tabTwo3">
                      Great Analytics
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <Tab.Content className="tab-content">
              <Tab.Pane className="tab-pane fade" eventKey="tabTwo1">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-5 col-lg-6">
                    <div
                      className="content rmb-55"
                      data-aos="fade-left"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <div className="section-title mb-30">
                        <h3>Appropriate features for proper use of time</h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusantium doloremque laudantium totamto aperiame eaque
                        ipsa quae ab illo inventore veritatis
                      </p>
                      <ul className="icon-list style-two my-35">
                        <li>
                          <i className="fal fa-check" /> Connect with leads with
                          zero hassle.
                        </li>
                        <li>
                          <i className="fal fa-check" /> Take quick payments
                          direct from meetings
                        </li>
                      </ul>
                      <a href="#" className="theme-btn">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      className="image text-left text-lg-end"
                      data-aos="fade-right"
                      data-aos-duration={1500}
                      data-aos-offset={50}
                    >
                      <img src="assets/images/tabs/tab-two.png" alt="Tab" />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabTwo2">
                <div className="row align-items-center justify-content-center">
                  <div className="col-lg-6">
                    <div className="image">
                      <img src="assets/images/tabs/tab-two.png" alt="Tab" />
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-6">
                    <div className="content rmt-55">
                      <div className="section-title mb-30">
                        <h3>Appropriate features for proper use of time</h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusantium doloremque laudantium totamto aperiame eaque
                        ipsa quae ab illo inventore veritatis
                      </p>
                      <ul className="icon-list style-two my-35">
                        <li>
                          <i className="fal fa-check" /> Connect with leads with
                          zero hassle.
                        </li>
                        <li>
                          <i className="fal fa-check" /> Take quick payments
                          direct from meetings
                        </li>
                      </ul>
                      <a href="#" className="theme-btn">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade" eventKey="tabTwo3">
                <div className="row align-items-center justify-content-center">
                  <div className="col-xl-5 col-lg-6">
                    <div className="content rmb-55">
                      <div className="section-title mb-30">
                        <h3>Appropriate features for proper use of time</h3>
                      </div>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus voluptatem
                        accusantium doloremque laudantium totamto aperiame eaque
                        ipsa quae ab illo inventore veritatis
                      </p>
                      <ul className="icon-list style-two my-35">
                        <li>
                          <i className="fal fa-check" /> Connect with leads with
                          zero hassle.
                        </li>
                        <li>
                          <i className="fal fa-check" /> Take quick payments
                          direct from meetings
                        </li>
                      </ul>
                      <a href="#" className="theme-btn">
                        Learn More <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="image text-left text-lg-end">
                      <img src="assets/images/tabs/tab-two.png" alt="Tab" />
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Tab Area End */}
      {/* What We Offer Area Start */}
      <section
        id="services"
        className="what-we-offer-area bgc-lighter pt-100 rpt-80 pb-90 rpb-70"
      >
        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="col-xl-7 col-lg-9 col-md-11">
              <div className="section-title text-center mb-55">
                <span className="subtitle-one mb-20">
                  <i className="fas fa-cog" /> What We Offer
                </span>
                <h2>Powerful Features To Help You Close Sales Faster</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-five">
                <div className="icon">
                  <i className="flaticon-security" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Secure &amp; Confidential
                    </Link>
                  </h5>
                  <p>
                    Quis autem veleumiure repreh enderites voluptate esse quam
                    molestiae
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-five">
                <div className="icon">
                  <i className="flaticon-goal" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">
                      Track Online &amp; Offline time
                    </Link>
                  </h5>
                  <p>
                    Quis autem veleumiure repreh enderites voluptate esse quam
                    molestiae
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-five">
                <div className="icon">
                  <i className="flaticon-sketching" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Live Collaboration</Link>
                  </h5>
                  <p>
                    Quis autem veleumiure repreh enderites voluptate esse quam
                    molestiae
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-five">
                <div className="icon">
                  <i className="flaticon-web-address" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Manage all your projects</Link>
                  </h5>
                  <p>
                    Quis autem veleumiure repreh enderites voluptate esse quam
                    molestiae
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-five">
                <div className="icon">
                  <i className="flaticon-efficiency" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">effective work schedules</Link>
                  </h5>
                  <p>
                    Quis autem veleumiure repreh enderites voluptate esse quam
                    molestiae
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="iconic-box style-five">
                <div className="icon">
                  <i className="flaticon-market-research" />
                </div>
                <div className="content">
                  <h5>
                    <Link href="service-details">Automatically track work</Link>
                  </h5>
                  <p>
                    Quis autem veleumiure repreh enderites voluptate esse quam
                    molestiae
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Offer Area End */}
      {/* Management Area Start */}

      {/* Management Area End */}
      {/* How To Manage Area Start */}

      {/* How To Manage Area End */}
      {/* Price Three Area Start */}
      <section
        id="pricing"
        className="how-to-manage-area bgc-lighter bgp-bottom pb-90 rpb-70"
        style={{
          backgroundImage: "url(assets/images/backgrounds/bg-line-shape.png)",
        }}
      >
        <div className="container">
          <Tab.Container defaultActiveKey={"yearly"}>
            <div className="row justify-content-between pb-50 align-items-center">
              <div
                className="col-xl-6 col-lg-7"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="subtitle-one mb-20">
                    <i className="fas fa-usd-square" /> Pricing Package
                  </span>
                  <h2>Explore Our Pricing Package and choose your plan</h2>
                </div>
              </div>
              <div
                className="col-lg-5 text-start text-lg-end"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <span className="save-percent">Save 40%</span>
                <Nav as={"ul"} className="nav pricing-tab mb-25" role="tablist">
                  <Nav.Item as={"li"}>
                    <Nav.Link as={"button"} eventKey="monthly">
                      Monthly
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as={"li"}>
                    <Nav.Link as={"button"} eventKey="yearly">
                      Yearly
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <Tab.Content className="tab-content wow fadeInUp delay-0-4s">
              <Tab.Pane className="tab-pane fade" eventKey="monthly">
                <div className="row">
                  <div className="col-xl-4 col-md-6 col-sm-10">
                    <div className="pricing-item style-two">
                      <div className="circle">
                        <img
                          src="assets/images/shapes/price-circle2.png"
                          alt="Shape"
                        />
                      </div>
                      <h5 className="title">Regular Plan</h5>
                      <div className="text">For Small Businesses</div>
                      <ul className="list">
                        <li>Email marketing</li>
                        <li>Unlimited chat history</li>
                        <li>Unlimited landing pages</li>
                        <li className="hide">Automation templates</li>
                        <li className="hide">Great Customer Support</li>
                      </ul>
                      <hr />
                      <div className="price">
                        <span className="prev">$</span>19
                        <span className="next">/month</span>
                      </div>
                      <div className="text">For Small Businesses</div>
                      <a href="#" className="theme-btn">
                        Choose Package <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 col-sm-10">
                    <div className="pricing-item style-two">
                      <h6 className="popular">Popular Package</h6>
                      <div className="circle">
                        <img
                          src="assets/images/shapes/price-circle2.png"
                          alt="Shape"
                        />
                      </div>
                      <h5 className="title">Standard Plan</h5>
                      <div className="text">Most Popular for your business</div>
                      <ul className="list">
                        <li>Email marketing</li>
                        <li>Unlimited chat history</li>
                        <li>Unlimited landing pages</li>
                        <li>Automation templates</li>
                        <li className="hide">Great Customer Support</li>
                      </ul>
                      <hr />
                      <div className="price">
                        <span className="prev">$</span>39
                        <span className="next">/month</span>
                      </div>
                      <div className="text">For Small Businesses</div>
                      <a href="#" className="theme-btn">
                        Choose Package <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 col-sm-10">
                    <div className="pricing-item style-two">
                      <div className="circle">
                        <img
                          src="assets/images/shapes/price-circle2.png"
                          alt="Shape"
                        />
                      </div>
                      <h5 className="title">Premium Plan</h5>
                      <div className="text">Most Popular for your business</div>
                      <ul className="list">
                        <li>Email marketing</li>
                        <li>Unlimited chat history</li>
                        <li>Unlimited landing pages</li>
                        <li>Automation templates</li>
                        <li>Great Customer Support</li>
                      </ul>
                      <hr />
                      <div className="price">
                        <span className="prev">$</span>93
                        <span className="next">/month</span>
                      </div>
                      <div className="text">For Small Businesses</div>
                      <a href="#" className="theme-btn">
                        Choose Package <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane className="tab-pane fade yearly" eventKey="yearly">
                <div className="row">
                  <div className="col-xl-4 col-md-6 col-sm-10">
                    <div className="pricing-item style-two">
                      <div className="circle">
                        <img
                          src="assets/images/shapes/price-circle2.png"
                          alt="Shape"
                        />
                      </div>
                      <h5 className="title">Regular Plan</h5>
                      <div className="text">For Small Businesses</div>
                      <ul className="list">
                        <li>Email marketing</li>
                        <li>Unlimited chat history</li>
                        <li>Unlimited landing pages</li>
                        <li className="hide">Automation templates</li>
                        <li className="hide">Great Customer Support</li>
                      </ul>
                      <hr />
                      <div className="price">
                        <span className="prev">$</span>23
                        <span className="next">/month</span>
                      </div>
                      <div className="text">For Small Businesses</div>
                      <a href="#" className="theme-btn">
                        Choose Package <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 col-sm-10">
                    <div className="pricing-item style-two">
                      <h6 className="popular">Popular Package</h6>
                      <div className="circle">
                        <img
                          src="assets/images/shapes/price-circle2.png"
                          alt="Shape"
                        />
                      </div>
                      <h5 className="title">Standard Plan</h5>
                      <div className="text">Most Popular for your business</div>
                      <ul className="list">
                        <li>Email marketing</li>
                        <li>Unlimited chat history</li>
                        <li>Unlimited landing pages</li>
                        <li>Automation templates</li>
                        <li className="hide">Great Customer Support</li>
                      </ul>
                      <hr />
                      <div className="price">
                        <span className="prev">$</span>43
                        <span className="next">/month</span>
                      </div>
                      <div className="text">For Small Businesses</div>
                      <a href="#" className="theme-btn">
                        Choose Package <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6 col-sm-10">
                    <div className="pricing-item style-two">
                      <div className="circle">
                        <img
                          src="assets/images/shapes/price-circle2.png"
                          alt="Shape"
                        />
                      </div>
                      <h5 className="title">Premium Plan</h5>
                      <div className="text">Most Popular for your business</div>
                      <ul className="list">
                        <li>Email marketing</li>
                        <li>Unlimited chat history</li>
                        <li>Unlimited landing pages</li>
                        <li>Automation templates</li>
                        <li>Great Customer Support</li>
                      </ul>
                      <hr />
                      <div className="price">
                        <span className="prev">$</span>120
                        <span className="next">/month</span>
                      </div>
                      <div className="text">For Small Businesses</div>
                      <a href="#" className="theme-btn">
                        Choose Package <i className="far fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </section>
      {/* Price Three Area End */}
      {/* Testimonials Area Start */}
      <section
        id="testimonials"
        className="testimonials-area bg-dark py-120 rpy-100"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-xl-7 col-lg-9"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="section-title text-center mb-60">
                <span className="subtitle-one mb-20">
                  <i className="fas fa-star" /> Customer Feedback
                </span>
                <h2 className="text-white">
                  1523+ Global Clients Say About Our Software
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div
              className="col-lg-9"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Slider
                {...sliderProps.testiSliderEight}
                className="testi-slider-eight text-white rmb-55"
              >
                <div>
                  <div className="testimonial-item-five">
                    <div className="image">
                      <img
                        src="assets/images/testimonials/testimonial-author1.png"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <div className="author-text">
                        At vero eoset accusamus et iusto dignissimos ducimus qui
                        blanditiis praesentium voluptatum delenitie corruptie
                        dolores molestias
                      </div>
                      <div className="author-description">
                        <div className="icon">
                          <i className="flaticon-double-quotes" />
                        </div>
                        <div className="author">
                          <h4>Nicholas S. Moore</h4>
                          <span>CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="testimonial-item-five">
                    <div className="image">
                      <img
                        src="assets/images/testimonials/testimonial-author1.png"
                        alt="Author"
                      />
                    </div>
                    <div className="content">
                      <div className="author-text">
                        At vero eoset accusamus et iusto dignissimos ducimus qui
                        blanditiis praesentium voluptatum delenitie corruptie
                        dolores molestias
                      </div>
                      <div className="author-description">
                        <div className="icon">
                          <i className="flaticon-double-quotes" />
                        </div>
                        <div className="author">
                          <h4>Nicholas S. Moore</h4>
                          <span>CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
            <div
              className="col-lg-3"
              data-aos="fade-up"
              data-aos-delay={200}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="trustpilot-review text-white bgc-primary br-20 p-40">
                <h6>Clients Reviews</h6>
                <div className="rattings mb-5">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <p>4.7/5 on Trustpilot</p>
                <hr />
                <h6>Global Clients</h6>
                <div className="authors">
                  <img src="assets/images/hero/client1.png" alt="Client" />
                  <img src="assets/images/hero/client2.png" alt="Client" />
                  <img src="assets/images/hero/client3.png" alt="Client" />
                  <img src="assets/images/hero/client4.png" alt="Client" />
                  <img src="assets/images/hero/client2.png" alt="Client" />
                  <span className="plus">
                    <i className="far fa-plus" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* FAQs Area Start */}
      <section
        id="faqs"
        className="faqs-area bgc-lighter pt-125 rpt-105 pb-105 rpb-85"
      >
        <div className="container">
          <div className="row gap-120">
            <div className="col-lg-5">
              <div
                className="faq-left-content rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-25">
                  <span className="subtitle-one mb-20">
                    <i className="fas fa-usd-square" /> FAQs
                  </span>
                  <h2>Frequently Asked Questions</h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus voluptatem
                  accusantium doloremque laudantium totamto aperiame eaque ipsa
                  quae ab illo inventore veritatis
                </p>
                <a href="#" className="theme-btn style-three mt-10">
                  Learn More <i className="far fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <Accordion
                className="accordion"
                defaultActiveKey={active}
                id="accordionOne"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                {accordionItems.map((item) => (
                  <AkpagerAccordion
                    key={item.id}
                    title={item.title}
                    event={`collapse${item.id}`}
                    onClick={() =>
                      setActive(
                        active == `collapse${item.id}`
                          ? ""
                          : `collapse${item.id}`
                      )
                    }
                    active={active}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* FAQs Area End */}
      {/* Newsletter Area Start */}
      <section className="newsletter-area bgc-lighter">
        <div className="container">
          <div
            className="newsletter-one-wrap border bgs-cover px-2 px-lg-5 py-120 rpy-100"
            style={{
              backgroundImage: "url(assets/images/backgrounds/newsletter.png)",
            }}
          >
            <div
              className="row justify-content-center text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="col-lg-7">
                <div className="section-title mb-30">
                  <h3>Have Any Question On Minds!</h3>
                  <p>Please enter your email and get your answer</p>
                </div>
                <form className="newsletter-form style-three" action="#">
                  <input type="email" placeholder="Email Address" required="" />
                  <button type="submit">
                    Sign Up <i className="far fa-arrow-right" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Area End */}
    </AkpagerLayout>
  );
};
export default page;
