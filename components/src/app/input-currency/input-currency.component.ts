import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'jb-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss']
})
export class InputCurrencyComponent implements OnInit {

  @Input() placeholder?: boolean;
  @Input() error = false;
  @Input() label: string;
  @Input() name: string;
  @Input() disabled: boolean;
  @Input() required?: boolean;
  @Input() currencyMaskOpts: any = { prefix: 'MXN$ ', thousands: ',', decimal: '.' };

  private _value: any;

  constructor() {
  }

  get value(): any {
    return this._value;
  }

  @Input()
  set value(newValue: any) {
    if (newValue !== this.value) {
      this._value = newValue;
    }
  }

  ngOnInit() {

  }

}
