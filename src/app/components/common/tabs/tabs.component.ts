import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {

  @Input() tabList: string[] = [];

  @Output() onTabClicked = new EventEmitter<string>()

  currentTab: string = '';

  onTabChange(tabName: string | undefined){
    this.currentTab = tabName || '';
    this.onTabClicked.emit(tabName)
  }

}
