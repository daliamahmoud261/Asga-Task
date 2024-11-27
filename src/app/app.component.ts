import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'online-ordering';
  language=localStorage.getItem('language')
  constructor(private translationService: TranslateService) {}
  ngOnInit(): void {
    if (!this.language)
      localStorage.setItem('language', 'en');
    document.getElementById('body')?.setAttribute('dir', this.language == 'ar' ? 'rtl' : 'ltr')
    this.translationService.use(this.language?? 'en');
  }
}
