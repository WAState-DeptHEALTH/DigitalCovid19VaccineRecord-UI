/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import LanguageIcon from '@material-ui/icons/Language';
import parse from 'html-react-parser';


const Header = () => {

  const { t, i18n } = useTranslation();

  // Language
  const changeLanguage = (language) => {
    //be sure the language code STOPs at the hyphen
    //var WhereBegin = language.indexOf("-");
    //if (WhereBegin > 1) {
     // language = language.substring(0, WhereBegin)
    //}

    i18n.changeLanguage(language);
    i18n.reloadResources();
    setLanguage(language);
    document.documentElement.lang = language;
  };

  const [expand, setExpand] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [language, setLanguage] = useState(window.navigator.userLanguage || navigator.language.length > 3 ? navigator.language.substring(0, 3).toLowerCase() : navigator.language);
  

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setExpand(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setExpand(false);
  };

  const handleKeyboardLanguage = (e, lang) => {
    const code = e.keyCode || e.charCode;
    if (code === 13 || code === 32) {
      if (code === 32) {
        e.preventDefault();
      }
      changeLanguage(lang);
    }
  }

  const menuLanguages = {
    'am': '<span lang="en">Amharic</span>&nbsp;-&nbsp;<span lang="am">አማርኛ</span>',
    'ar': '<span lang="en">Arabic</span>&nbsp;-&nbsp;<span lang="ar">العَرَبِيةُ</span>',
    'hy': '<span lang="en">Armenian</span>&nbsp;-&nbsp;<span lang="hy">Հայերեն</span>',
    'eu': '<span lang="en">Basque</span>&nbsp;-&nbsp;<span lang="eu">euskara</span>',
    'my': '<span lang="en">Burmese</span>&nbsp;-&nbsp;<span lang="my">မြန်မာ</span>',
    'ca': '<span lang="en">Catalan</span>&nbsp;-&nbsp;<span lang="ca">català</span>',
    'zh': '<span lang="en">Chinese (Simplified)</span>&nbsp;-&nbsp;<span lang="zh">简体中文</span>',
    'zh-TW': '<span lang="en">Chinese (Traditional)</span>&nbsp;-&nbsp;<span lang="zh-TW">繁體中文</span>',
    'chk': '<span lang="en">Chuukese</span>&nbsp;-&nbsp;<span lang="chk">Fosun Chuuk</span>',
    'prs': '<span lang="en">Dari</span>&nbsp;-&nbsp;<span lang="prs">دری</span>',
    'en' : '<span lang="en">English</span>',
    'fa': '<span lang="en">Farsi</span>&nbsp;-&nbsp;<span lang="fa">فارسی</span>',
    'fr': '<span lang="en">French</span>&nbsp;-&nbsp;<span lang="fr">Français</span>',
    'fj': '<span lang="en">Fijian</span>&nbsp;-&nbsp;<span lang="fj">Vosa vakaviti</span>',
    'de': '<span lang="en">German</span>&nbsp;-&nbsp;<span lang="de">Deutsch</span>',
    'gu': '<span lang="en">Gujarati</span>&nbsp;-&nbsp;<span lang="gu">ગુજરાતી</span>',
    'ht': '<span lang="en">Haitian Creole</span>&nbsp;-&nbsp;<span lang="ht">Kreyòl ayisyen</span>',
    'he': '<span lang="en">Hebrew</span>&nbsp;-&nbsp;<span lang="he">עִברִית</span>',
    'hi': '<span lang="en">Hindi</span>&nbsp;-&nbsp;<span lang="hi">हिन्दी</span>',
    'hmn': '<span lang="en">Hmong</span>&nbsp;-&nbsp;<span lang="hmn">Hmoob</span>',
    'it': '<span lang="en">Italian</span>&nbsp;-&nbsp;<span lang="it">Italiano</span>',
    'ja': '<span lang="en">Japanese</span>&nbsp;-&nbsp;<span lang="ja">日本語</span>',
    'kar': '<span lang="en">Karen</span>&nbsp;-&nbsp;<span lang="kar">ကညီၤ</span>',
    'km': '<span lang="en">Khmer (Cambodian)</span>&nbsp;-&nbsp;<span lang="km">ភាសាខ្មែរ</span>',
    'ko': '<span lang="en">Korean</span>&nbsp;-&nbsp;<span lang="ko">한국어</span>',
    'lo': '<span lang="en">Lao</span>&nbsp;-&nbsp;<span lang="lo">ພາ​ສາ​ລາວ</span>',
    'ml': '<span lang="en">Malayalam</span>&nbsp;-&nbsp;<span lang="ml">മലയാളം</span>',
    'mam': '<span lang="en">Mam</span>&nbsp;-&nbsp;<span lang="mam">Qyol Mam</span>',
    'mr': '<span lang="en">Marathi</span>&nbsp;-&nbsp;<span lang="mr">मराठी</span>',
    'mh': '<span lang="en">Marshallese</span>&nbsp;-&nbsp;<span lang="mh">Kajin Ṃajeḷ</span>',
    'mxb': '<span lang="en">Mixteco Bajo</span>&nbsp;-&nbsp;<span lang="mxb">Ñuu savi</span>',
    'ne': '<span lang="en">Nepali</span>&nbsp;-&nbsp;<span lang="ne">नेपाली</span>',
    'om': '<span lang="en">Oromo</span>&nbsp;-&nbsp;<span lang="om">Oromiffa</span>',
    'ps': '<span lang="en">Pashto</span>&nbsp;-&nbsp;<span lang="ps">پښتو</span>',
    'pt-BR': '<span lang="en">Portuguese</span>&nbsp;-&nbsp;<span lang="pt-BR">Português (Brasil)</span>',
    'pa': '<span lang="en">Punjabi</span>&nbsp;-&nbsp;<span lang="pa">ਪੰਜਾਬੀ</span>',
    'ro': '<span lang="en">Romanian</span>&nbsp;-&nbsp;<span lang="ro">Română</span>',
    'ru': '<span lang="en">Russian</span>&nbsp;-&nbsp;<span lang="ru">Русский</span>',
    'sm': '<span lang="en">Samoan</span>&nbsp;-&nbsp;<span lang="sm">Faa-Samoa</span>',
    'so': '<span lang="en">Somali</span>&nbsp;-&nbsp;<span lang="so">Af Soomaali</span>',
    'es': '<span lang="en">Spanish</span>&nbsp;-&nbsp;<span lang="es">Español</span>',
    'sw': '<span lang="en">Swahili</span>&nbsp;-&nbsp;<span lang="sw">Kiswahili</span>',
    'ta': '<span lang="en">Tamil</span>&nbsp;-&nbsp;<span lang="ta">தமிழ்</span>',
    'tl': '<span lang="en">Tagalog</span>&nbsp;-&nbsp;<span lang="tl">Tagalog</span>',
    'te': '<span lang="en">Telugu</span>&nbsp;-&nbsp;<span lang="te">తెలుగు</span>',
    "th": '<span lang="en">Thai</span>&nbsp;-&nbsp;<span lang="th">ภาษาไทย</span>',
    'ti': '<span lang="en">Tigrinya</span>&nbsp;-&nbsp;<span lang="ti">ትግርኛ</span>',
    'to': '<span lang="en">Tongan</span>&nbsp;-&nbsp;<span lang="to">Lea fakaTonga</span>',
    'tr': '<span lang="en">Turkish</span>&nbsp;-&nbsp;<span lang="tr">Türkçe</span>',
    'uk': '<span lang="en">Ukrainian</span>&nbsp;-&nbsp;<span lang="uk">Український</span>',
    'ur': '<span lang="en">Urdu</span>&nbsp;-&nbsp;<span lang="ur">اُردُو</span>',
    'vi': '<span lang="en">Vietnamese</span>&nbsp;-&nbsp;<span lang="vi">Tiếng Việt</span>'
  }

  
  const searchByLanguage = () => {
    //const toSearch = language;
    let required = undefined;
    Object.entries(menuLanguages).forEach((key) => {
      if(i18n.resolvedLanguage !== null){
       if(key.toString().substring(0,key.toString().indexOf(',')) === i18n.resolvedLanguage.toString().replace(/-$/,'')){
        required = key.toString().substring(key.toString().indexOf(',')+1);
       }
      }
    });
    return required;
  };

  return (
    <header>
    <nav>
      <div className="headerContainer" style={{ backgroundColor: '#f9f9f9', borderBottom: '1px solid #ccc' }}>
        <div className="fluid-container">
          <div className="subheaderContainer">
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', minHeight: 70 }}>
              <div style={{ display: 'flex', alignItems: 'center' }} >
                <div style={{ textAlign: 'middle' }}>
                  <img className={i18n.dir(i18n.language) === "rtl"?"doh_logo_doh-black_rtl":"doh_logo_doh-black"} alt={"Washington State Department of Health Logo"} width="240px" src="/imgs/doh_logo_doh-black.png" />
                </div>
                <div style={{ verticalAlign: "middle", textAlign: 'middle' }}>
                <Trans i18nKey="header.dohlogotext">Washington State<p style={{margin: 0, padding: 0, lineHeight: 0}} /> Department of Health</Trans>
                </div>
              </div>
              {/* Temporarily disabled until we have all the Translations */}
              <div className="translationContainer" style={{ display: 'flex', alignItems: 'center' }}>
                <Button aria-controls="simple-menu" aria-label={t("header.selectlanguage")} aria-haspopup="true" onClick={handleClick} style={{ fontWeight: '400', padding: '2px 0px 0px 0px', textTransform: 'none' }}>
                  <LanguageIcon id="langIcon" /> {expand === false ? <ExpandMoreIcon /> : <ExpandLessIcon /> } { parse(searchByLanguage() ? searchByLanguage() : "") }
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {Object.entries(menuLanguages).map(([key, value]) => {
                    return <MenuItem id={key} onClick={() => { handleClose(value); changeLanguage(key) }} style={{ textDecoration: 'underline' }}>{parse(value)}</MenuItem>
                  })
                  }
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-nav-container" style={{ borderBottom: '1px solid #ccc' }}>
        <div className="fluid-container">
          <div className='vaccineLogo' style={{ padding: '5px 1.5vw' }}>
            <Link to='/' style={{ display: 'inline-block', height: 'inherit', margin: '0', width: 'inherit' }}>
              <Trans><img style={{ alignSelf: "center" }} alt={"WaVerify Logo"} width="200px" src={'/imgs/' + t('header.waverifylogo')} /></Trans>
              <span className='logoDescription' style={{ fontSize: '18px', display: 'inline-block', paddingLeft: '17px', color: '#22489c' }}><Trans i18nKey="dashboardpage.contentheader">Digital COVID-19 Vaccine Record</Trans></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    </header>
  );

};

export default Header;
