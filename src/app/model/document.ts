export class Document {
    id: string;
    title: string;
    content: string;
    thumbnailUrl: string;

    constructor(values?: { title?: string, content?: string, id?: string }) {
        Object.keys(values).forEach(key => {
            this[ key ] = values[ key ];
        });
    }

    getParams() {
        return {
            title: this.title,
            content: this.content,
            thumbnailUrl: this.thumbnailUrl
        };
    }
}
