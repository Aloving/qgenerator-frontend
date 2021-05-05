import { get } from '../config';

console.log(get('LANGUAGES'));

export const DEFAULT_LANGUAGE = get('DEFAULT_LANGUAGE');
// export const LANGUAGES = get('LANGUAGES').split(', ');
export const LANGUAGES = JSON.parse(get('LANGUAGES')) as string[];
