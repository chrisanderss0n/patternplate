import * as actions from "../actions";
import toggle from "./toggle";

export default toggle(actions.toggleCode, { defaultValue: false });
