import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.scss"],
})
export class StudentFormComponent implements OnInit {
  sections: any[];
  form: FormGroup;

  _studentId = -1;

  get studentId() {
    return this._studentId;
  }

  @Input()
  set studentId(id: number) {
    this._studentId = id;
    if (id > 0)
      this.http
        .get(`http://localhost:3000/api/students/${id}`)
        .subscribe((data: any) => {
          this.form.patchValue(data);
        });
  }

  @Output()
  onFormSubmit = new EventEmitter();

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ["", [Validators.required]],
      regNo: ["", [Validators.required]],
      rollNo: ["", [Validators.required]],
      sectionId: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.http
      .get("http://localhost:3000/api/sections")
      .subscribe((data: any) => {
        this.sections = data;
      });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.studentId);
      if (this.studentId === -1)
        this.http
          .post("http://localhost:3000/api/students", this.form.value)
          .subscribe((data: any) => {
            this.form.reset();
            this.onFormSubmit.emit();
          });
      else
        this.http
          .put(`http://localhost:3000/api/students/${this.studentId}`, {
            id: this.studentId,
            ...this.form.value,
          })
          .subscribe((data: any) => {
            this.studentId = -1;
            this.form.reset();
            this.onFormSubmit.emit();
          });
    } else {
      Object.values(this.form.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}