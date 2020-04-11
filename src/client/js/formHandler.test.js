import { handleSubmit } from './formHandler';

test('handleSubmit is correctly exported from module', () => {
    expect(typeof handleSubmit).toBe('function');
});