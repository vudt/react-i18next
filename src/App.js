import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import i18n from './constants/i18n';
import { useTranslation } from 'react-i18next'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    let currentLang = localStorage.getItem('current_lang')
    if (!currentLang) {
      currentLang = 'en'
    } 
    this.state = { lang: currentLang }
    this.setLanguage = this.setLanguage.bind(this)
    i18n.changeLanguage(this.state.lang);
  }

  setLanguage(event) {
    const lang = event.target.value
    this.setState({ lang: lang })
    localStorage.setItem("current_lang", lang);
    i18n.changeLanguage(lang);
  }

  render() {
    return (
      <div className="App">
        <h2>{ i18n.t('welcome') }</h2>
        <h4>{ i18n.t('key', { name: 'Vu Dang' }) }</h4>
        <input type="radio" name="language" onChange={ this.setLanguage } value="en" defaultChecked={ this.state.lang === 'en' ? true : false } /><label>En</label>
        <input type="radio" name="language" onChange={ this.setLanguage } value="vi" defaultChecked={ this.state.lang === 'vi' ? true : false } /><label>Vi</label>
      </div>
    )
  }
}

export default App;
