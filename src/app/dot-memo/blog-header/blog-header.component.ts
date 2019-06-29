import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../../service/api-auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-blog-header',
    templateUrl: './blog-header.component.html',
    styleUrls: [ './blog-header.component.scss' ]
})
export class BlogHeaderComponent implements OnInit {


    isAdmin$: Observable<boolean>;

    constructor(
        private apiAuthService: ApiAuthService
    ) {
    }

    scrollToTop() {
        window.scrollTo({top: 0});
    }

    ngOnInit() {
        this.isAdmin$ = this.apiAuthService.user$.pipe(
            map(user => {
                if (user) {
                    return user.isAdmin();
                } else {
                    return false;
                }
            })
        );
    }

}
