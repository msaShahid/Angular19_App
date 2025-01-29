import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  @Input() tabList: string[] = [];

  @Output() onTabClicked = new EventEmitter<string>()

  onTabChange(tabName: string | undefined){
    this.onTabClicked.emit(tabName)
  }

}
