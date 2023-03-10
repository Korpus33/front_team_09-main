import React, { useState, useEffect } from 'react';
import FormPopap from './FormPopap';
import one from 'image/support1.png';

// const sendForm = () => {
//   const supportForm = document.querySelector('.support__form')

//   supportForm.addEventListener('submit', e => {
//     e.preventDefault();
//   })

// }

function Support() {
  const [isModalOpen, setModalOpen] = useState(false);
  const setModalState = (state) => {
    setModalOpen(state);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [text, setText] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);
  const [textDirty, setTextDirty] = useState(false);
  const [nameError, setNameError] = useState('*Це поле є обов’язковим до заповнення');
  const [emeilError, setEmeilError] = useState('*Це поле є обов’язковим до заповнення');
  const [numberError, setNumberError] = useState('');
  const [textError, setTextError] = useState('*Це поле є обов’язковим до заповнення');
  const [formValid, setFormValid] = useState(false);
  const [checked, setChecked] = useState(false);


  useEffect(() => {
    if (nameError || emeilError || textError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, emeilError, textError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length >= 1) {
      setNameError('');
    } else {
      setNameError('*Це поле є обов’язковим до заповнення');
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    let result =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!result.test(String(e.target.value))) {
      setEmeilError('*Невірний формат email');
    }
    if (result.test(String(e.target.value))) {
      setEmeilError('');
    }
    if (e.target.value.length < 0) {
      setEmeilError('*Це поле є обов’язковим до заповнення');
    }
  };

  const numberHandler = (e) => {
    setNumber(e.target.value);
    const reg = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    if (!reg.test(e.target.value)) {
      setNumberError('*Невірний формат номеру');
    }
    if (reg.test(e.target.value)) {
      setNumberError('');
    }
    if (e.target.value.length === 0) {
      setNumberError('*Опціонально');
    }
  };

  const textHandler = (e) => {
    setText(e.target.value);
    if (e.target.value.length > 500) {
      setTextError('*Ви ввели більше 500 символів');
    } else if (e.target.value.length === 0) {
      setTextError('*Це поле є обов’язковим до заповнення');
    } else if (e.target.value.length > 0 && e.target.value.length < 500) {
      setTextError('');
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'tel':
        setNumberDirty(true);
        break;
      case 'text':
        setTextDirty(true);
        break;
      default:
    }
  };

  return (
    <div className="support">
      <div className="support-wrapper _container">
        <div className="left-block">
          <h2>Ви можете допомогти в будь-який інший спосіб</h2>
          <div>
            <img src={one} alt="food, pills, toys" />
          </div>
          <p>
            Гроші, ліки, дитячі іграшки, корм для тварин. Зараз потреба є у всьому. Тож, якщо у вас
            є можливість допомогти нам не фінансово, а в інший спосіб, то заповніть контактну форму
            праворуч. Будь яка підтримка дуже цінна.
          </p>
        </div>
        <div className="right-block">
          <form className='support__form'>
            <div className="right-block__input-content">
              <input
                onChange={(e) => nameHandler(e)}
                value={name}
                onBlur={(e) => blurHandler(e)}
                name="name"
                className={nameError && nameDirty ? 'active-error' : 'right-block-name'}
                type="text"
                placeholder="Ваше ім’я"
                required
              />
              {nameError && nameDirty && <div className="input-error">{nameError}</div>}
            </div>
            <div className="right-block__input-content">
              <input
                onChange={(e) => emailHandler(e)}
                value={email}
                className={emeilError && emailDirty ? 'active-error' : 'right-block-name'}
                onBlur={(e) => blurHandler(e)}
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              {emeilError && emailDirty && <div className="input-error">{emeilError}</div>}
            </div>
            <div className="right-block__input-content">
              <input
                onChange={(e) => numberHandler(e)}
                value={number}
                className={numberError && numberDirty ? 'active-error' : 'right-block-name'}
                onBlur={(e) => blurHandler(e)}
                name="tel"
                type="tel"
                placeholder="Номер телефону"
              />
              {numberError && numberDirty ? (
                <div className="input-error">{numberError} </div>
              ) : (
                <div className="text-under-block">*Опціонально</div>
              )}
            </div>

            <div className="right-block__input-content">
              <textarea
                onChange={(e) => textHandler(e)}
                value={text}
                onBlur={(e) => blurHandler(e)}
                className={
                  textError && textDirty ? 'right-block-name3__active-error' : 'right-block-name3'
                }
                name="text"
                placeholder="Повідомлення"
                required
              ></textarea>
              <div className="right-block__input-content">
                {textError && textDirty ? (
                  <div className="input-error">{textError} </div>
                ) : (
                  <div className="text-under-block">Не більше 500 символів</div>
                )}
              </div>
            </div>
            <div className="right-block-checkbox">
              <input
                type="checkbox"
                checked={checked} onChange={() => setChecked(!checked)}
                required />
              <label onClick={() => setModalState(true)} className={checked === false && formValid ? 'right-block-check-erorr' : 'right-block-check'}>
                Я погоджуюся з політикою конфіденційності
              </label>
              {checked === false && formValid && <div className="text-under-block-check">*Погодження з політикою конфіденційності є обов’язковим</div>}
            </div>
            <button type='submit'
              disabled={!formValid}
              className={formValid ? 'support-button' : 'support-button__disabled'}            >
              Відправити форму
            </button>
          </form>
        </div>
      </div>
      <FormPopap isModalOpen={isModalOpen} setModalState={setModalState} />
    </div>
  );
}

export default Support;
