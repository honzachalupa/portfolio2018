import React, { Component } from 'react';
import { AppContext } from 'App';
import './style';
import FlagUsIcon from 'Icons/flag-us';
import FlagCzIcon from 'Icons/flag-cz';

export default (props) => (
    <AppContext.Consumer>
        {({ translations, language, _switchLanguage }) => (
            <LanguageSwitcher {...props} translations={translations} language={language} _switchLanguage={_switchLanguage} />
        )}
    </AppContext.Consumer>
);

class LanguageSwitcher extends Component {
    render() {
        const { translations, language, _switchLanguage } = this.props;

        const icon =
            language === 'en' ?
                FlagCzIcon :
                FlagUsIcon;

        return (
            <button className="language-switcher" onClick={_switchLanguage}>
                <span className="label">{translations.otherLanguage}</span>
                <img className="icon" src={icon} alt="Flag icon" />
            </button>
        );
    }
}
