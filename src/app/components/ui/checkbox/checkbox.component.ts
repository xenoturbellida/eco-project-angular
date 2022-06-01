import { Component, OnInit, ChangeDetectionStrategy, Input, forwardRef, ChangeDetectorRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => CheckboxComponent),
		multi: true
	}]
})
export class CheckboxComponent implements ControlValueAccessor {

	@Input() index?: number;
	@Input() name: string="";
	value: boolean = false;

	constructor(private cdk: ChangeDetectorRef) {
	}

	onChangeCallback = (v: any) => {};
	onTouchedCallback = () => {};


	registerOnChange(fn: any): void {
		this.onChangeCallback = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouchedCallback = fn;
	}

	writeValue(value: boolean): void {
		if (value !== this.value) {
			this.value = value;
		}
		this.cdk.markForCheck()
	}

	checkHandler(): void {
		this.value = !this.value
		this.onChangeCallback(this.value);
		this.onTouchedCallback();
	}
}
