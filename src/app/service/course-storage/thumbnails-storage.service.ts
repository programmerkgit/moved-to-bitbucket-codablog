import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FirebaseStorageService } from './firebase-storage-service';


@Injectable({
    providedIn: 'root'
})
export class ThumbnailsStorageService extends FirebaseStorageService {

    basePath = 'thumbnails';

    constructor(
        protected angularFireStorage: AngularFireStorage
    ) {
        super(angularFireStorage);
    }

}
