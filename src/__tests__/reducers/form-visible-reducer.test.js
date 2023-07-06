import formVibisbleReducer from '../../reducers/form-visible-reducer'
import { describe, expect, it } from "vitest"

describe('formVisibleReducer', () => {

    it('should return default state if no action type is recognized', () => {
        expect(formVibisbleReducer(false, {type: null})).toEqual(false)
    });

    it('should toggle form vibisility state to true', () => {
        expect(formVibisbleReducer(false, { type: "TOGGLE_FORM"})).toEqual(true)
    });
});