import gameEndReducer from '../../reducers/game-end-reducer'
import { describe, expect, it } from "vitest"

describe('formVisibleReducer', () => {

    it('should return default state if no action type is recognized', () => {
        expect(gameEndReducer(false, {type: null})).toEqual(false)
    });

    it('should toggle game end state to true', () => {
        expect(gameEndReducer(false, { type: "TOGGLE_END"})).toEqual(true)
    });
});