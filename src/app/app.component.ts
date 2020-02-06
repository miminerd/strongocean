import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
  }
  public getDate(date: any): void {
    console.log('Picked date: ', date);
    return date;
}
}

