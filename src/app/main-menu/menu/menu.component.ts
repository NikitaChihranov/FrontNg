import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../core/models/user';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() authorizedUser: User;
  constructor( private translateService: TranslateService) { }

  ngOnInit() {
  }

  setLanguage(lang: string){
    this.translateService.use(lang);
  }

}
