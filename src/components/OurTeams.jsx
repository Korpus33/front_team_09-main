import React from 'react';
import one from 'image/ourTeams1.jpg';
import two from 'image/ourTeams2.jpg';
import three from 'image/ourTeams3.jpg';
import four from 'image/ourTeams4.jpg';
import five from 'image/ourTeams5.jpg';
import six from 'image/ourTeams6.jpg';
import seven from 'image/partners1.png';
import eight from 'image/partners2.png';
import nine from 'image/partners3.png';
import ten from 'image/partners4.png';
import eleven from 'image/partners5.png';
import twelve from 'image/partners6.png';
import thirteen from 'image/partners7.png';
import forteen from 'image/partners6.png';

function OurTeams() {
  window.scrollTo({
    top: 0,
    left: 0,
  });
  return (
    <div className="ourTeams">
      <div className="ourTeams__wrapper">
        <h2 className="ourTeams__title">Наша команда</h2>
        <div className="ourTeams__first-foto">
          <img src={one} alt="Роман Грибков" />
        </div>
        <span className="ourTeams__boss-name">Роман Грибков</span>
        <span className="ourTeams__job-title">Засновник фонду</span>
        <span className="ourTeams__boss-content">
          Засновник та людина, котра зібрала та надихнула усю нашу команду. До війни Роман мав
          успішний бізнес у сфері дитячої освіти. Але з перших днів війни він разом зі своїми
          партнерами організував на базі дитячого центру «Арбуз» - хаб гуманітарної допомоги,
          Благодійний фонд «A-HELP UKRAINE».
        </span>
        <div className="ourTeams__people-block__wrapper">
          <div className="ourTeams__people-block">
            <div className="ourTeams__people-block__img">
              <img src={two} alt="Водомєрова Ірина Володимирівна" />
            </div>
            <span>
              <strong>
                Водомєрова <br /> Ірина <br /> Володимирівна
              </strong>
            </span>
            <br />
            <span className='ourTeams__people-block-light'>Cпівзасновник, керівник фонду</span>
          </div>
          <div className="ourTeams__people-block">
            <div className="ourTeams__people-block__img">
              <img src={three} alt="Пушай Ірина Анатоліївна" />
            </div>
            <span>
              <strong>
                Пушай <br /> Ірина <br /> Анатоліївна
              </strong>
            </span>{' '}
            <br />
            <span className='ourTeams__people-block-light'>Cпівзасновник, менеджер проектів</span>
          </div>
          <div className="ourTeams__people-block">
            <div className="ourTeams__people-block__img">
              <img src={four} alt="Шамайко Наталія Олександрівна" />
            </div>
            <span>
              <strong>
                Шамайко <br /> Наталія <br /> Олександрівна
              </strong>
            </span>{' '}
            <br />
            <span className='ourTeams__people-block-light'>Волонтер</span>
          </div>
          <div className="ourTeams__people-block">
            <div className="ourTeams__people-block__img">
              <img src={five} alt="Попова Юлія Олександрівна" />
            </div>
            <span>
              <strong>
                Попова <br /> Юлія <br /> Олександрівна
              </strong>
            </span>{' '}
            <br />
            <span className='ourTeams__people-block-light'>Волонтер</span>
          </div>
          <div className="ourTeams__people-block">
            <div className="ourTeams__people-block__img">
              <img src={six} alt="Долгов Сергій Єлізаровичв" />
            </div>
            <span>
              <strong>
                Долгов <br /> Сергій <br /> Єлізарович
              </strong>
            </span>{' '}
            <br />
            <span className='ourTeams__people-block-light'>Водій-волонтер</span>
          </div>
        </div>
        <h2 className="ourTeams__title-pertners">Наші партнери</h2>

        <div className="ourTeams__partners-block__wrapper">
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src={seven} alt="World Food Programme" />
            </div>
            <span>World Food Programme</span>
            <span className='ourTeams__partners-block__light'>Гумінатарна організація</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src={eight} alt="Голоси дітей" />
            </div>
            <span>Голоси дітей</span>
            <span className='ourTeams__partners-block__light'>Благодійний фонд</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src={nine} alt="Сила берегині" />
            </div>
            <span>Сила берегині</span>
            <span className='ourTeams__partners-block__light'>Громадська організація</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src={ten} alt="World Central Kitchen" />
            </div>
            <span>World Central Kitchen</span>
            <span className='ourTeams__partners-block__light'>Благодійна організація</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src={eleven} alt="Інфочат Харків" />
            </div>
            <span>Інфочат Харків</span>
            <span className='ourTeams__partners-block__light'>Громадська організація</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src={twelve} alt="Роман Грибков" />
            </div>
            <span>Good bread</span>
            <span className='ourTeams__partners-block__light'>Соціальна пекарня</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src={thirteen} alt="Япошка" />
            </div>
            <span>Япошка</span>
            <span className='ourTeams__partners-block__light'>Мережа ресторанів японської та італійської кухні</span>
          </div>
          <div className="ourTeams__partners-block">
            <div className="ourTeams__partners-block__img">
              <img src={forteen} alt="GLOBAL 2000" />
            </div>
            <span>GLOBAL 2000</span>
            <span className='ourTeams__partners-block__light'>Організація з охорони навколишнього середовища</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeams;
