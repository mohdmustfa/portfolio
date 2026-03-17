import React from 'react';
import Brand from '../Brand';
import Navigation from '../Navigation';
import Founder from '../Founder';
import Quote from '../Quote';
import Intro from '../Intro';
import Heading from '../Heading';
import CardSkill from '../CardSkill';
import CardWork from '../CardWork';
import Contact from '../Contact';
import Footer from '../Footer';
import CardSample from '../CardSample';
import SampleFort from '../../assets/sample-fort.png';
import SampleCap from '../../assets/sample-cap.png';
import SampleAcd from '../../assets/sample-acd.png';
import SampleSocal from '../../assets/sample-socal.png';
import SampleMbb from '../../assets/sample-mbb.png';
import SampleHhg from '../../assets/sample-hhg.png';
function Portfolio() {
    const skills = [
        { id: 1, icon: "fab fa-html5", title: "HTML5", color: "html-5" },
        { id: 2, icon: "fab fa-css3-alt", title: "CSS3", color: "css-3" },
        { id: 3, icon: "fab fa-js-square", title: "JavaScript", color: "js" },
        { id: 4, icon: "fab fa-bootstrap", title: "Bootstrap/Tailwind", color: "bs-5" },
        { id: 5, icon: "fab fa-react", title: "ReactJS", color: "js" },
        { id: 6, icon: "fas fa-universal-access", title: "Web Accessibility (WCAG)", color: "scss" },
        { id: 7, icon: "fab fa-wordpress", title: "WP/Hubspot", color: "wp-5" },
        { id: 8, icon: "fab fa-sass", title: "SCSS/LESS", color: "scss" },
        { id: 9, icon: "fab fa-figma", title: "Figma/XD", color: "less" }
        ];

        const projects = [
            {
                id: 1,
                pIcon: "fas fa-link",
                pTitle: "Fortitude",
                pLink: "https://fortitudeadvisors.com",
                pImage: SampleFort,
                pAlt: "Fortitude",
                pDesc: "about Fortitude Advisors."
            },
            {
                id: 2,
                pIcon: "fas fa-link",
                pTitle: "Capitolis",
                pLink: "https://capitolis.com",
                pImage: SampleCap,
                pAlt: "Capitolis",
                pDesc: "about Capitolis."
            },
            {
                id: 3,
                pIcon: "fas fa-link",
                pTitle: "Acadeum",
                pLink: "https://acadeum.com",
                pImage: SampleAcd,
                pAlt: "Acadeum",
                pDesc: "about Acadeum."
            },
            {
                id: 4,
                pIcon: "fas fa-link",
                pTitle: "SoCal Marketing Club",
                pLink: "https://socalmarketingclub.com",
                pImage: SampleSocal,
                pAlt: "SoCal Marketing Club",
                pDesc: "about SoCal Marketing Club."
            },
            {
                id: 5,
                pIcon: "fas fa-link",
                pTitle: "HH Global",
                pLink: "https://www.hhglobal.com",
                pImage: SampleHhg,
                pAlt: "HH Global",
                pDesc: "about HH Global."
            },
            {
                id: 6,
                pIcon: "fas fa-link",
                pTitle: "Mebebot",
                pLink: "https://www.mebebot.com",
                pImage: SampleMbb,
                pAlt: "Mebebot",
                pDesc: "about Mebebot."
            }
        ];

        const experiences = [
            {
                id: 1,
                cname: "C2Perform",
                cposition: "Sr. UI Developer (Web Accessibility)",
                clocation: "Remote, USA",
                cdate: "July 2024 - May 2026"
            },
            {
                id: 2,
                cname: "Rubico",
                cposition: "FrontEnd Engineer",
                clocation: "Dehradun, India",
                cdate: "June 2019 - June 2024"
            },
            {
                id: 3,
                cname: "Pearl Organisation",
                cposition: "FrontEnd Developer",
                clocation: "Dehradun, India",
                cdate: "Sep 2018 - June 2019"
            }
        ];

    return (
        <>
            <main>
                <Navigation/>
                <section className="bg-top-home" id="about">
                    <div className="overlay-bg-home">
                        <div className="container">
                            <div className="row align-items-center h-100-row">
                            <div className="col-lg-6 col-md-12 col-12 z-1 mt-4 position-relative" data-aos="fade-right">
                               <Founder/>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12 z-1 mt-5" data-aos="fade-left">
                                <Quote/>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="intro" className="about-section">
                    <div className="container">
                        <div className="row justify-content-center py-4">
                            <Intro/>
                        </div>
                    </div>
                </section>
                <section className="services-sec" id="experties">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center mb-3">
                            <Heading htitle="Key Skills"/>
                            </div>
                            <div className="col-12">
                                <div className="serve-box">
                                    {skills.map((skill) => (
                                        <CardSkill
                                        key={skill.id}
                                        icon={skill.icon}
                                        title={skill.title}
                                        color={skill.color}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="working-location" id="exp">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <Heading htitle="Professional Journey"/>
                            </div>
                        </div>
                        <div className="row">
                            {experiences.map((exp) => (
                                <CardWork
                                key={exp.id}
                                cname={exp.cname}
                                cposition={exp.cposition}
                                clocation={exp.clocation}
                                cdate={exp.cdate}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="work-section" id="work">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <Heading htitle="Featured Projects"/>
                                <p>A curated selection of projects showcasing my frontend development experience. Only a few representative projects are included here.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            {projects.map((project) => (
                                <CardSample
                                key={project.id}
                                pIcon={project.pIcon}
                                pTitle={project.pTitle}
                                pLink={project.pLink}
                                pImage={project.pImage}
                                pAlt={project.pAlt}
                                pDesc={project.pDesc}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="contact-sec" id="contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12 col-md-11 col-11">
                                <div className='text-center'>
                                    <Heading htitle="Get in Touch"/>
                                </div>
                                  <div className="bg-info-bx">
                                    <div className="info-bx row justify-content-center">
                                        <Contact cicon="fab fa-linkedin" clink="https://www.linkedin.com/in/mohd-mustfa-202666128/" clinkText="LinkedIn" cCol="col-md-5 col-lg-3 col"/>
                                        <Contact cicon="fas fa-envelope" clink="mailto:mdmustfamalik786@gmail.com" clinkText="Email" cCol="col-md-5 col-lg-3 col"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default Portfolio;