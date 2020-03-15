import React, { ReactNode } from "react";

export default function MyComponent(): ReactNode {
  return (
    <div>
      <label htmlFor="name-input">Name</label>
      <input id="name-input" name="name" value="" />
    </div>
  );
}
