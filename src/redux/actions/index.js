import {
  DEFAULT,
  TEST,
} from '../actionTypes';

export function testAction(text) {
  return { type: TEST, text };
}
export function defaultRun(text) {
  return { type: DEFAULT, text };
}
