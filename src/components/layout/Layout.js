import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import CookieBanner from '../CookieConsent';
import ToastWrapper from './ToastWrapper';

export default function Layout({ children }) {
    return (
        <>
            <ToastWrapper />
            <Header />
            <Breadcrumbs />
            {children}
            <CookieBanner />
            <Footer />
        </>
    )
}