export class Document {
  title: string;
  content: string;

  constructor(values?: { title?: string, content?: string }) {
    Object.keys(values).forEach(key => {
      this[ key ] = values[ key ];
    });
  }
}
