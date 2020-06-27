import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    })
  }
  toHTML() {
    return ` <div class="info"><b>ƒ</b>x</div>
            <div class="input" contenteditable="true" spellcheck="false"></div>`
  }
  onInput(event) {
    console.log('Formula: onInput: ', event.target.textContent.trim())
  }
}
