import React, { Component } from 'react';
import { FooterSocial } from './FooterSocial';
import { FooterNav } from './FooterNav';
import { FooterTextContent } from './FooterTextContent';
import { FooterCopyright } from './FooterCopyright';
export class FooterComponent extends React.Component {
    render() {
        return (
            <footer>
                <div class="footer-container">
                    <div class="container">
                        <FooterNav />
                        <FooterTextContent />
                    </div>
                </div>
                <FooterSocial />
                <FooterCopyright />
            </footer>
        );
    }
}