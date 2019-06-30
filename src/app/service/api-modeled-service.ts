import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiCreateOptions } from './api-service-create-options';
import { ApiFindOptions } from './api-service-find-options';
import { map } from 'rxjs/operators';

const qs = require('qs');

interface ApiServiceConfig {
    apiBase: string
}

const config: ApiServiceConfig = {
    apiBase: environment.apiBase,
};

const defaultOption = {withCredentials: true};


export abstract class ApiModeledService<T> {

    abstract model;

    /* Example api/users. Dont start with slash like '/api' */
    protected abstract _basePath: string;

    protected constructor(
        protected httpClient: HttpClient,
    ) {
    }

    private get baseUrl() {
        return [ config.apiBase, this._basePath ].join('/');
    };

    /* C */
    create(values: object, options?: ApiCreateOptions): Observable<T> {
        return this._post('', values, options).pipe(
            map(res => {
                return new this.model(res);
            })
        );
    }

    /* Plural */
    findAll(options?: ApiFindOptions<any>): Observable<T[]> {
        return <Observable<T[]>>this._findAll('', options).pipe(
            map(res => {
                return res.map(model => {
                    return new this.model(model);
                });
            })
        );
    }

    /* R */

    /* Singular */
    findById(id: string, options?: ApiFindOptions<any>): Observable<T> {
        return <Observable<T>>this._find(id, options).pipe(
            map(res => {
                return new this.model(res);
            })
        );
    }

    /* U */
    update(id: string, values: object, options?: ApiCreateOptions): Observable<T> {
        return this._put(id, values, options).pipe(
            map(res => {
                return new this.model(res);
            })
        );
    }

    /* D */
    delete(id: string, options?: ApiCreateOptions): Observable<any> {
        return this._delete(id, options);
    }

    /* Default Methods */
    protected _post(path: string, values: object, options?: object): Observable<any> {
        let url = [ this.baseUrl, path ].join('/');
        if (options) {
            const query = qs.stringify(options);
            url = [ url, query ].join('?');
        }
        return this.httpClient.post<any>(url, values, defaultOption);

    }

    protected _findAll(path: string, options?: ApiFindOptions<any>): Observable<T[]> {
        let url = [ this.baseUrl, path ].join('/');
        if (options) {
            const query = qs.stringify(options);
            url = [ url, query ].join('?');
        }
        return this.httpClient.get<T[]>(url, defaultOption);
    }

    protected _find(path: string, options?: ApiFindOptions<any>): Observable<T> {
        let url = [ this.baseUrl, path ].join('/');
        if (options) {
            const query = qs.stringify(options);
            url = [ url, query ].join('?');
        }
        return this.httpClient.get<T>(url, defaultOption);
    }

    protected _put(path: string, values: object, options?: object): Observable<any> {
        let url = [ this.baseUrl, path ].join('/');
        if (options) {
            const query = qs.stringify(options);
            url = [ url, query ].join('?');
        }
        return this.httpClient.put<any>(url, values, defaultOption);
    }

    /* D */
    protected _delete(path: string, options?: object): Observable<any> {
        let url = [ this.baseUrl, path ].join('/');
        if (options) {
            const query = qs.stringify(options);
            url = [ url, query ].join('?');
        }
        return this.httpClient.delete<any>(url, defaultOption);
    }
}
