import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
      private router: Router,
      private translateService: TranslateService
    ){
      translateService.addLangs(['ru', 'en', 'uk']);
      translateService.setDefaultLang('uk');
      let browserLang = translateService.getBrowserLang();
      // translateService.use(browserLang.match(/ru|en|uk/) ? browserLang : 'en');
      translateService.use('ru');
    }


  ngOnInit(): void {
      this.router.navigate(['/mainmenu']).then();
    }
}


