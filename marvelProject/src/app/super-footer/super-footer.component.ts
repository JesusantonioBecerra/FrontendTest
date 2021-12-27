import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-super-footer',
  templateUrl: './super-footer.component.html',
  styleUrls: ['./super-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuperFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
