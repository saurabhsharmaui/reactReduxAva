import test from "ava";
import { TOGGLE_TODO, toggleTodo } from "./actions";

test("toogleTodo action", t => {
  t.deepEqual(toggleTodo(5), {
    type: TOGGLE_TODO,
    payload: 5
  });
});
