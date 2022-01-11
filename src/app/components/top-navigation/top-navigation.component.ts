import { AfterContentInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const CURRENT_LANG_CACHE = "current-lang";

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  CurrentLang!: string;
  CurrentPage: string = "summary";
  Pages!: string[];

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    let lang = localStorage.getItem(CURRENT_LANG_CACHE) ?? this.translate.getDefaultLang();
    this.changeLang(lang);
    this.translate.onLangChange.subscribe((res) => {
      this.Pages = [];
      Object.keys(res.translations).forEach(k => {
        if (res.translations[k]['TITLE'] && k != "NAV")
          this.Pages.push(res.translations[k].TITLE);
      })
    })
  }


  changeLang(lang: string): void {
    this.translate.use(lang).subscribe({
      next: () => {
        this.CurrentLang = lang;
        localStorage.setItem(CURRENT_LANG_CACHE, lang);
      }
    });
  }

}
