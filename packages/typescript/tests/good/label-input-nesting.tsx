import React, { ReactNode } from "react";

export default function MyComponent(): ReactNode {
  return (
    <div>
      <label>
        Name
        <input id="name-input" name="name" value="" />
      </label>
    </div>
  );
}
