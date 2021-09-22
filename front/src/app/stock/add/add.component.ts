import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  f = new FormGroup({
    name: new FormControl('tutu', [Validators.required]),
    price: new FormControl(2.3, [Validators.required]),
    qty: new FormControl(12, [Validators.required]),
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  submit() {
    console.log('submit');
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
