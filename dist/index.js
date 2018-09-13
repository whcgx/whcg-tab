'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('@vaadin/vaadin-tabs/src/vaadin-tabs.js');
require('@vaadin/vaadin-tabs/src/vaadin-tab.js');
var polymerElement_js = require('@polymer/polymer/polymer-element.js');

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="whcg-lit-tabs-styles" theme-for="vaadin-tabs">
  <template>
  <style>
      :host {
        box-shadow: var(--whcg-host-box-shadow);
        display: inline-flex;
        padding-top: var(--whcg-host-padding-top);
        padding-bottom: var(--whcg-host-padding-bottom);
        padding-left: var(--whcg-host-padding-left);
        padding-right: var(--whcg-host-padding-right);
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

const $_documentContainer$1 = document.createElement('template');

$_documentContainer$1.innerHTML = `<dom-module id="whcg-lit-tab-styles" theme-for="vaadin-tab">
  <template>
  <style>
      :host {
        box-sizing: border-box;
        padding-top: var(--whcg-host-padding-top);
        padding-bottom: var(--whcg-host-padding-bottom);
        padding-left: var(--whcg-host-padding-left);
        padding-right: var(--whcg-host-padding-right);
        font-family: var(--whcg-host-font-family);
        font-size: var(--whcg-host-font-size);
        line-height: var(--whcg-host-line-height);
        font-weight: var(--whcg-host-font-weight);
        text-align: center;
        opacity: 1;
        color: var(--whcg-host-color);
        flex-shrink: 0;
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        min-height: var(--whcg-host-min-height);
        min-width: 0;
      }

      :host(:hover) {
        color: var(--whcg-host-hover-color);
      }

      :host([selected]) {
        color: var(--whcg-host-selected-color);
      }

      :host([disabled]) {
        pointer-events: none;
        color: var(--whcg-host-disabled-color);
      }


      :host::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 50%;
        width: 2px;
        height: var(--whcg-host-before-height);
        background-color: var(--whcg-host-before-background-color);
        border-radius: var(--whcg-host-before-border-radius);
        transform: translateY(50%) scale(1);
        opacity: 0
      }

      :host([selected])::before {
        opacity: 1;
      }


    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer$1.content);

class WhcgLitTab extends polymerElement_js.PolymerElement {
  static get template() {
    return polymerElement_js.html`
        <style>
            vaadin-tabs {
                --whcg-host-box-shadow: var(--whcg-tabs-host-box-shadow);
                --whcg-host-padding-top: var(--whcg-tabs-host-padding-top);
                --whcg-host-padding-bottom: var(--whcg-tabs-host-padding-bottom);
                --whcg-host-padding-left: var(--whcg-tabs-host-padding-left);
                --whcg-host-padding-right: var(--whcg-tabs-host-padding-right);
            }
            
            vaadin-tab {
                --whcg-host-font-family: var(--whcg-tab-host-font-family);
                --whcg-host-font-size: var(--whcg-tab-host-font-size);
                --whcg-host-line-height: var(--whcg-tab-host-line-height);
                --whcg-host-font-weight: var(--whcg-tab-host-font-weight);
                --whcg-host-color: var(--whcg-tab-host-color);
                --whcg-host-hover-color: var(--whcg-tab-host-hover-color);
                --whcg-host-min-height: var(--whcg-tab-host-min-height);
                --whcg-host-selected-color: var(--whcg-tab-host-selected-color);
                --whcg-host-before-height: var(--whcg-tab-host-before-height);
                --whcg-host-before-background-color: var(--whcg-tab-host-before-background-color);
                --whcg-host-before-border-radius: var(--whcg-tab-host-before-border-radius);
                --whcg-host-disabled-color: var(--whcg-tab-host-disabled-color);
                --whcg-host-padding-top: var(--whcg-tab-host-padding-top);
                --whcg-host-padding-bottom: var(--whcg-tab-host-padding-bottom);
                --whcg-host-padding-left: var(--whcg-tab-host-padding-left);
                --whcg-host-padding-right: var(--whcg-tab-host-padding-right);
            }
        </style>
        <vaadin-tabs orientation="vertical" selected="{{page}}"><vaadin-tab>ALLMÄNT</vaadin-tab><vaadin-tab>ÄGA</vaadin-tab><vaadin-tab>HYRA</vaadin-tab><vaadin-tab>RESULTAT</vaadin-tab></vaadin-tabs>
    `;
  }

  static get properties() {
    return {

      page: {
          type: String,
          notify: true,
          readOnly: false,
          observer: '_valueChanged'
      }
    };
  }

  _valueChanged() {
      console.log(this.page);
  }
}

window.customElements.define('whcg-lit-tab', WhcgLitTab);

exports.WhcgLitTab = WhcgLitTab;
