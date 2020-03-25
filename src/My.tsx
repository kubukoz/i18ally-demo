import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next'
import './App.css';


const MyComponent: React.FC<WithTranslation> = ({ t }) => {

  return <div>
    <span>{t('foo:bar')}</span> and <span>{t('extra:x')}</span>
  </div>
}

export const My = withTranslation(['foo', 'extra'])(MyComponent)
