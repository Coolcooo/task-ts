import { backgroundColors, effects, fontColors, Reset } from './model';
function addColor(text: string, color: keyof typeof backgroundColors, isBackground: boolean = false) {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList: Array<keyof typeof effects>) {
    return effectList.map(effect => effects[effect]).join('');
}

export type FontColors = keyof typeof fontColors;
export type BackgroundColors = keyof typeof backgroundColors;
export type Effects = keyof typeof effects;

export type OptionsOfColor = {
    font?: FontColors,
    background?: BackgroundColors,
    effects?: Array<Effects>,
}
export function color(text: string, options?: OptionsOfColor): string {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
