import { Component } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private AllIcons
  currentIcon
  constructor() {
    this.AllIcons = Array.from(Object.entries({ ...icons }))
    this.currentIcon = ''
  }

  randomInteger() {
    let rand = 0 - 0.5 + Math.random() * (this.AllIcons.length - 0 + 1);
    return Math.round(rand);
  }

  show = () => {
    const { prefix, iconName } = this.AllIcons[this.randomInteger()][1] as { prefix: string, iconName: string }

    const timeOut = setTimeout(() => {
      this.currentIcon = `${prefix} fa-${iconName}`
      clearTimeout(timeOut)
    }, 3000);
  }
}
