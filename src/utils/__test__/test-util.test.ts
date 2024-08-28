import {testUtil} from "../test.util";

describe('testUtil', () => {
    it('test string without param', () => {
        const result = testUtil()

        expect(result).toBe("String");
    })

    it('test string with param', () => {
        const result = testUtil(true)

        expect(result).toBe("String with param");
    })
});