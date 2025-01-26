import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-event',
  imports: [],
  templateUrl: './life-cycle-event.component.html',
  styleUrl: './life-cycle-event.component.css'
})
export class LifeCycleEventComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  constructor(){
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit.');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit.');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked.');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit.', performance.now());
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked.');
  }

  ngOnDestroy(): void {
    alert("Are you sure to leave this page?")
    console.log('ngOnDestory')
  }

}
