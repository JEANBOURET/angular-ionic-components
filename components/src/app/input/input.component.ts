import { Component, forwardRef, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {Subject} from "rxjs";

export const INPUT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true
};

@Component({
  selector: 'jb-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [INPUT_VALUE_ACCESSOR],
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @Input() placeholder?: boolean;
  @Input() error = false;
  @Input() type = 'text';
  @Input() label: string;
  @Input() name: string;
  @Input() icon: string;
  @Input() maxlength?: number;
  @Input() disabled: boolean;
  @Input() required?: boolean;
  @Output() onIconClick?: EventEmitter<void> = new EventEmitter<void>();

  valueChanged: Subject<string> = new Subject<string>();

  private _value: any;
  onChange = (_: any) => { };
  onTouched: any = () => { };

  constructor() {
  }

  get value(): any {
    return this._value;
  }

  @Input()
  set value(newValue: any) {
    if (newValue !== this.value) {
      this._value = newValue;
      this.onChange(newValue);
    }
  }

  handleIconClick(): void {
    this.onIconClick.emit();
  }

  writeValue(value: any): void {
    if (value !== this.value) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  touched(): void {
    this.onTouched();
  }

  onChangeValue(value: any): void {
    this.value = value;
    this.valueChanged.next(value);
  }

  setDisabledState(value: any) {
    this.disabled = value;
  }

  ngOnInit() {

  }

}

