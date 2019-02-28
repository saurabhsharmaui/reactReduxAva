// src/reducers.test.js 
import test from 'ava';
import { todos } from './reducers';
import { toggleTodo } from './actions';

test('todos reducer', t => {
  t.deepEqual(todos([
    { id: 0, completed: false, text: 'buy milk' },
    { id: 1, completed: false, text: 'walk the dog' },
    { id: 2, completed: false, text: 'study' } 
  ], toggleTodo(1)), [
    { id: 0, completed: false, text: 'buy milk' },
    { id: 1, completed: true, text: 'walk the dog' }, 
    { id: 2, completed: false, text: 'study' } 
  ]);
});