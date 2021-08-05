import React, { Component } from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import zh_CN from './locales/zh-CN';
import en_US from './locales/en-US';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

addLocaleData([...zh,...en]);



class Inter extends Component {

  render() {
    let { locale, localeMessage, children } = this.props;
    // console.log("lacal",this.props.locale)

    return (
      <IntlProvider key={locale} locale={locale} messages={localeMessage}>
        {children}
      </IntlProvider>
    )
  }
};

function chooseLocale(val) {
  let _val = val || navigator.language.split('_')[0];
  switch (_val) {
    case 'en':
      return en_US;
    case 'zh':
      return zh_CN;
    default:
      return en_US;
  }
}

const mapStateToProps = (state, ownProps) => ({
  locale: state.locale,
  localeMessage: chooseLocale(state.locale)
});

let Intl = connect(mapStateToProps)(Inter);

export default Intl;
