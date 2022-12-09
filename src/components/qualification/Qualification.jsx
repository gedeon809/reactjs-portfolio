import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
  const [togglesState, setTogglesState] = useState(1);

  const toggleTab = (index) => {
    setTogglesState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              togglesState === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={
              togglesState === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              togglesState === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Diploma In BIT</h3>
                <span className="qualification__subtitle">
                  University Of Johannesburg
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2021
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Bachelor In IT</h3>
                <span className="qualification__subtitle">
                  University Of Johannesburg
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Zero to Expert Javascript
                </h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Mastery FullStack React,
                </h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              togglesState === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software Tutor</h3>
                <span className="qualification__subtitle">
                  Univerty Of Johannesburg
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  MERN Full Stack Developer,
                </h3>
                <span className="qualification__subtitle">
                  Vertx Groupe - SA/DRC
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Freelancer/ FullStack developer
                </h3>
                <span className="qualification__subtitle">
                  Remote - Everywhere
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
