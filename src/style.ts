import { color, OptionsOfColor } from './colors';
import { markdown, OptionsOfMarkdown } from './md';

type FullOptions = OptionsOfColor | OptionsOfMarkdown;
export function style(text: string, options: FullOptions) {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if ('bold' in options || 'italic' in options || 'mono' in options || 'link' in options) {
        return markdown(text, options);
    }
    return text;
}
