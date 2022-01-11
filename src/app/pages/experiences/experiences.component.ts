import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { TranslateObjectService } from 'src/app/services/translate-object.service';

interface Experience {
  Title: string;
  Date: string;
  Text: string;
}

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  Experiences: Observable<Experience[]> = this.translateObject.getTranslatedObject<Experience[]>("EXPERIENCES.EXPERIENCES");

  constructor(private translateObject: TranslateObjectService, private translate: TranslateService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe(() => this.Experiences = this.translateObject.getTranslatedObject<Experience[]>("EXPERIENCES.EXPERIENCES"));
  }

}
