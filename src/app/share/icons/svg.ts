import { Input } from '@angular/core';

export abstract class SVG {
    @Input() width: string | number;
    @Input() height: string | number;
    @Input() color: string;
}
