import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-super-header',
  templateUrl: './super-header.component.html',
  styleUrls: ['./super-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuperHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
