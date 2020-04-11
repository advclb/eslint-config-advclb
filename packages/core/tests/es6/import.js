import Foobar from "./export";
import doc from "!!@advclb/foobar-loader!./foobar.tsx";

/**
 * Foobar function
 *
 * @param {string} foo is foo
 * @param {string} bar is bar
 */
export function foobar(foo, bar) {
  return new Foobar(foo, bar);
}
