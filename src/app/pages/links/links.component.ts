import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  visit(link: string): void {
    window.open(link, "_blank");
  }

  copyEmail(): void {
    navigator.clipboard.writeText("mattheusan@gmail.com");
    this.translate.get("LINKS.EMAIL_CLIP").subscribe((res) => {
      Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        background: "#242424",
        color: "#ffffff",
      }).fire({ icon: "success", title: res })
    })
  }

  copyDiscord(): void {
    navigator.clipboard.writeText("Matthw#4457");
    this.translate.get("LINKS.DISCORD_CLIP").subscribe((res) => {
      Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        background: "#242424",
        color: "#ffffff",
      }).fire({ icon: "success", title: res })
    })
  }


}
