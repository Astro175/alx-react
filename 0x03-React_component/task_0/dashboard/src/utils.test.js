import { getFooterCopy, getFullYear, getLatestNotification } from "./utils";

describe('Tests for getFullYear', function () {
    test('Checks if it returns the current year', () => {
        expect(getFullYear()).toEqual(2023);
    });
});

describe('Test for getfooterCopy', function() {
    test('Tests if it returns for no index param', () => {
        expect(getFooterCopy()).toEqual('Holberton School main dashboard');
    });
    test('Tests if it returns for index param', () => {
        const isIndex = true
        expect(getFooterCopy(isIndex)).toEqual('Holberton School');
    });
});

describe('Test for getLatestNotification', () => {
    test('Tests for correct return value', () => {
        expect(getLatestNotification()).toEqual(`<strong>Urgent requirement</strong> - complete by EOD`)
    });
})
