import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AlertBoxComponent } from '../alert-box/alert-box.component';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css'],
})
export class FormPageComponent {
  reactiveForm: FormGroup<{ time: FormControl<null> }>;
  timezones = ["America/New_York", "America/Chicago", "America/Denver", "America/Los_Angeles", "America/Adak" , "America/Anchorage", "Pacific/Honolulu",
  "Pacific/Samoa", "Pacific/Guam", "America/Puerto_Rico", "America/Virgin"]

  result: result | null = null;
  constructor(private httpService: HttpService, public dialog: MatDialog) {
    this.reactiveForm = new FormGroup({
      time: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250),
      ]),
    });
  }

  get time() {
    return this.reactiveForm?.get('time')!;
  }

  submit() {
    this.result = null;
    if (this.reactiveForm?.invalid) return;
    const data = this.reactiveForm?.get('time')?.value || ''
    this.httpService.get(data).subscribe((res: any) => {
      this.result = res;
    }, err => {
      this.dialog.open(AlertBoxComponent, {
        data: {
          message: 'Please Input Valid Data',
        },
      });
    })
  }
}



interface result {
  abbreviation: string,
  datetime: string,
  timezone: string
}