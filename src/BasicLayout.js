import React from 'react';
import './css/style.css';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js';
import Photo from './images/myself.jpg'

const BasicLayout = () => {
    return (
        <>
            {/* Navigation */}
            <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#page-top">Portpolio</a>
                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#skills">SKILLS</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#projects">PROJECTS</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#experience">EXPERIENCE</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Masthead */}
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    {/* Masthead Avatar Image */}
                    <img className="masthead-avatar mb-5" src={Photo} alt="myself" id="myselfPhoto" />
                    {/* Masthead Heading */}
                    <h1 className="masthead-heading text-uppercase mb-0">반주연</h1>
                    {/* Icon Divider */}
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    {/* Masthead Subheading */}
                    <p className="masthead-subheading font-weight-light mb-0">프론트엔드 | 백엔드 | 풀스택 개발자</p>
                </div>
            </header>
{/* introduction Section */}
<section className="page-section mb-0">
<div className="container">
    <h3 style={{ lineHeight: '1.5' }}>"안녕하세요. 9년간 입어온 치료복을 내려놓고 <br/> 신입 개발자로 새로운 도전을 시작한 반주연입니다."</h3>
    <p style={{ marginTop: '40px', fontSize: '1.3rem', lineHeight:'2' }}>9년간 물리치료사로 근무하다가, 케이뱅크 고객상담 계약직을 통해 모바일 애플리케이션 기반 시스템의 복잡한 동작을 이해하며 개발에 대한 관심을 키웠습니다. 이후 개발자로서의 길을 결심하고, 2024년 상반기 K-디지털 트레이닝 과정에 참여하여 본격적으로 개발 공부를 시작했습니다.</p>
    <p style={{ marginTop: '40px', fontSize: '1.3rem', lineHeight:'2' }}>한 줄의 코드가 중요한 것처럼, 개발된 시스템과 현장 운영까지 이해하는 개발자가 되겠습니다. 업무의 전반적인 흐름을 파악하고, 필요한 지식은 끊임없이 공부하여 신뢰받는 전문가가 되겠습니다. 또한, 회사에서 '반주연이 맡으면 확실히 잘 해낼 사람'이라는 신뢰를 얻을 수 있도록 최선을 다하겠습니다.</p>
    </div>
    </section>             


{/* Skills Section */}
<section className="page-section mb-0" id="skills">
                <div className="container">
                    {/* Skills Section Heading */}
                    <h2 className="page-section-heading text-center text-uppercase">Skills</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    {/* Skills Section Content */}
                    <Skills/>
                </div>
            </section>

            {/* Projects Section */}
            <section className="page-section portfolio" id="projects">
                <div className="container">
                    {/* Projects Section Heading */}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <Projects/>
                </div>
            </section>
            
             {/* Experience Section */}
             <section className="page-section mb-0" id="experience">
                <div className="container">
                    {/* Experience Section Heading */}
                    <h2 className="page-section-heading text-center text-uppercase">Experience</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    {/* Experience Section Content */}
                    <Experience/>
                </div>
            </section>

            {/* Contact Section */}
            <section className="page-section" id="contact">
                <div className="container">
                    {/* Contact Section Heading */}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    {/* Icon Divider */}
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                   <Contact/>
                </div>
            </section>
            {/* Footer */}
            <footer className="footer text-center">
                <div className="container">
                    <div className="row">
                    <p>This website was created for portfolio purposes only and is not intended for commercial use.</p>   
                    </div>
                </div>
            </footer>
            {/* Copyright Section */}
            <div className="copyright py-4 text-center text-white">
                <div className="container"><p>Copyright © 2024 Juyeon Van. All Rights Reserved.</p></div>
            </div>
          
            {/* Bootstrap core JS */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            {/* Core theme JS */}
            <script src="js/scripts.js"></script>
            {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */}
            {/* * *                               SB Forms JS                               * * */}
            {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * * */}
            {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */}
            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
                   </>
    );
};

export default BasicLayout;

