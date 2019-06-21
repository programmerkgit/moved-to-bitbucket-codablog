// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiBase: 'http://localhost:3000',
    firebase: {
        apiKey: 'AIzaSyCNPFlsOBP91bDoFM8nIbKz8aZqYgyo5rU',
        authDomain: 'codablog-26957.firebaseapp.com',
        databaseURL: 'https://codablog-26957.firebaseio.com',
        projectId: 'codablog-26957',
        storageBucket: 'codablog-26957.appspot.com',
        messagingSenderId: '757794612795',
        appId: '1:757794612795:web:0517879cdb227870'
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
