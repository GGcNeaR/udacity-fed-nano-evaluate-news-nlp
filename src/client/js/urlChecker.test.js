import { validateUrl } from './urlChecker';

const VALID_URL = 'https://classroom.udacity.com/me';
const INVALID_URL = 'qwerty';

test('validates valid url', () => {
    expect(validateUrl(VALID_URL)).toBe(true);
});

test('validates invalid url', () => {
    expect(validateUrl(INVALID_URL)).toBe(false);
});