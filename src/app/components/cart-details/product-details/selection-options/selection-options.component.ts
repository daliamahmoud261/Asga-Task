import { TranslateModule } from '@ngx-translate/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { selectionOptions } from '../../../models/selection.model';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selection-options',
  standalone: true,
  imports: [TranslateModule, MatRadioModule, FormsModule],
  templateUrl: './selection-options.component.html',
})
export class SelectionOptionsComponent {
  @Input() selectionOptions: selectionOptions[] = [];
  selectedOption: any;
  @Output() selection = new EventEmitter();
  showSelectedOption() {
    this.selection.emit(this.selectedOption);
  }
}
