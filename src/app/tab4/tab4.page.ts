import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class Tab4Page implements OnInit {
  feedbackForm!: FormGroup;


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Feedback',
      message: 'Thank you for your feedback',
      buttons: ['OK']
    });

    await alert.present();
  }
  constructor(public alertController: AlertController,private fb: FormBuilder) { }

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rating: [5, Validators.required],
      suggestion: ['', Validators.required]
    });
  }

}
