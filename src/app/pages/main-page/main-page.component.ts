import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent {
}
