import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'xyz-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
