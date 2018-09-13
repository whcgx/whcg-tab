import '@vaadin/vaadin-tabs/src/vaadin-tabs.js';
import '@vaadin/vaadin-tabs/src/vaadin-tab.js';
import '../theme/whcg-lit-tabs-styles.js';
import '../theme/whcg-lit-tab-styles.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

export class WhcgLitTab extends PolymerElement {
  static get template() {
    return html`
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