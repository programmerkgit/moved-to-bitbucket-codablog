import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { UploadMetadata } from '@angular/fire/storage/interfaces';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FirebaseStorageError } from './message';

export abstract class FirebaseStorageService {

    abstract basePath: string;


    protected constructor(
        protected angularFireStorage: AngularFireStorage
    ) {
    }

    ref(path: string): AngularFireStorageReference {
        return this.angularFireStorage.ref(this.basePath).child(path);
    }

    delete(path: string): Observable<any> {
        return this.ref(path).delete();
    }

    put(path: string, data: any, metadata?: UploadMetadata | undefined): AngularFireUploadTask {
        return this.ref(path).put(data, metadata);
    }

    getDownloadURL(path: string) {
        return this.ref(path).getDownloadURL().pipe(
            catchError((err, caught) => {
                switch (err.code) {
                    case FirebaseStorageError.code.objectNotFound:
                        break;
                    default:
                        console.error(err);
                }
                return of(null);
            })
        );
    }

}
