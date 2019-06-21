import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiAuthService } from '../../service/api-auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {


    formGroup: FormGroup;

    constructor(
        private fb: FormBuilder,
        private apiAuthService: ApiAuthService
    ) {
    }

    ngOnInit() {
        this.formGroup = this.fb.group({
            email: '',
            password: ''
        });
    }

    submit() {
        const values = this.formGroup.getRawValue();
        this.apiAuthService.login(values).subscribe(data => {
            alert(data.result);
        });
    }

    login(values: { email: string, password: string }) {
        this.apiAuthService.login(values);
    }

}
