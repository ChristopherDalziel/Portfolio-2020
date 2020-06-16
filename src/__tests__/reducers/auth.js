import authReducer from "../../reducers/auth";
import { auth } from "firebase";

test("Should setup default login", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});

test("Should set uid for login", () => {
  const action = { type: "LOGIN", uid: 1 };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("Should set uid for logout", () => {
  const action = { type: "LOGOUT" };
  const state = authReducer(
    { uid: "login id would be defined until action is completed" },
    action
  );
  // State would now be empty
  expect(state).toEqual({});
});
