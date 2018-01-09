import { Action } from 'redux';

export interface AbstractAction extends Action {
  type: string;
  payload?: object;
  meta?: object;
  error: boolean;
}
