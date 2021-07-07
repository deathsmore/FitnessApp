import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/auth/shared/services/auth.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  async registerUser(event: FormGroup){
    const { email, password} = event.value;

    try{
      await this.authService.createUser(email, password);
    }
    catch(err) {
      this.error = err.message;
    }
  }
}
