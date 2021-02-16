import { html, css, internalProperty } from 'lit-element';
import lodash, { pad } from 'lodash';
import moment from 'moment';
import { Router } from '@vaadin/router';

import { styles } from '@uprtcl/common-ui';
import { EveesBaseElement } from '@uprtcl/evees';
import { sharedStyles } from '../../styles';

export class ErrorPage extends EveesBaseElement {
  render() {
    return html`
      <div class="root">
        <header>
          <div class="header4">4</div>
          <div class="header0">0</div>
          <div class="header4">4</div>
        </header>

        <div class="subHeading">
          Sorry... The page you’re looking for does not exist
        </div>

        <a href=${window.location.origin} class="button">Go Home</a>
      </div>
    `;
  }
  static get styles() {
    return [
      styles,
      sharedStyles,
      css`
        :host {
          height: 100%;
          width: 100%;
          background: #ccc3;
          font-family: 'Inter', sans-serif;
          padding: 0.5rem;
        }
        a {
          text-decoration: none;
        }

        .root {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          flex-direction: column;
        }

        header {
          font-weight: 600;
          font-size: 3.5rem;
          color: #fff;
          display: flex;
        }
        header > * {
          margin: 0 0.5rem;
          border-radius: 8px;
          padding: 1rem 1.5rem;
          animation: vibrate 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
        }
        .header4 {
          background: #7e7e91;
        }
        .header0 {
          background: #f3d9da;
        }
        .subHeading {
          font-size: 1.1rem;
          text-align: center;
          margin: 1rem 0;
          padding: 1rem;
          border-bottom: 1px solid #9797aacf;
          font-weight: 500;
        }
        .banner {
          width: 100%;
          max-width: 720px;
        }
        .button {
          color: #fff;
          padding: 0.5rem 1rem;
          font-size: 1.1rem;
          background: #4260f6;
          box-shadow: 0px 6px 2px -4px rgba(14, 14, 44, 0.1),
            inset 0px -1px 0px rgba(14, 14, 44, 0.4);
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.2s ease-in-out;
        }
        .button:hover {
          background: #233fce;
        }

        @keyframes vibrate {
          0%,
          2%,
          4%,
          6%,
          8%,
          10%,
          12%,
          14%,
          16%,
          18% {
            -webkit-transform: translate3d(-1px, 0, 0);
            transform: translate3d(-1px, 0, 0);
          }
          1%,
          3%,
          5%,
          7%,
          9%,
          11%,
          13%,
          15%,
          17%,
          19% {
            -webkit-transform: translate3d(1px, 0, 0);
            transform: translate3d(1px, 0, 0);
          }
          20%,
          100% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
          }
        }
      `,
    ];
  }
}
