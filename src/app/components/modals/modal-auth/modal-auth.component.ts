import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { ModalRegComponent } from '@components/modals/modal-reg/modal-reg.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalEnterCodeComponent } from '@components/modals/modal-enter-code/modal-enter-code.component';
import { ModalAuthPartnersComponent } from '@components/modals/modal-auth-partners/modal-auth-partners.component';
import { ToastService } from '@services/toast.service';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-modal-auth',
  templateUrl: './modal-auth.component.html',
  styleUrls: ['./modal-auth.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalAuthComponent {

	form: FormGroup;

	constructor(
	  private dialogRef: DialogRef<ModalAuthComponent>,
	  private dialog: DialogService,
	  private toast: ToastService,
	  private authService: AuthService,
	  private fb: FormBuilder,
	  ) {
		this.form = this.fb.group({
			login: ['', [Validators.required]],
			password: ['', [Validators.required]],
		})
	}

	onSubmit(): void {
	  const password = this.form.get('password')?.value;
	  const login = this.form.get('login')?.value;
	  console.log('modal password', password);
	  console.log('modal login', login);
		if (!this.form.valid) {
			this.toast.error('Заполните все поля!');
			return;
		}
		this.authService.authorize(this.form.value).subscribe(res => {
			this.toast.success('Добро пожаловать');
			this.authService.token = res.token;
		}, err => {
			console.log(err);
		})
	  this.dialogRef.close({ login: login, password: password })
	}

	openEnterCodeModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalEnterCodeComponent);
	}

	openRegModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalRegComponent);
	}

	openAuthPartnersModal(): void {
		this.dialogRef.close();
		this.dialog.openDialog(ModalAuthPartnersComponent);
	}
}
