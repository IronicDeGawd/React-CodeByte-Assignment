# Section 4: Debugging & Code Review

## Original Buggy Code:

```javascript
import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState;
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}
```

## Issues Found and Explanations:

### Issue 1: Missing initial value for useState

**Problem:** `const [count, setCount] = useState;`

- The `useState` hook is missing its initial value parameter
- This will cause `count` to be `undefined`

**Fix:** `const [count, setCount] = useState(0);`

### Issue 2: Missing export

**Problem:** The function is missing proper export statement

- The component needs to be exported to be used by other files

**Fix:** Add `export default Counter;` at the end

### Issue 3: Better State update

**Problem:** Current increment uses `setCount(count + 1)` which may cause issues if used multiple places.

**Fix:** Use `setCount((prevCount) => prevCount + 1);`

## Corrected Code:

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Fix 1: Add initial value (0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>Click me</button>
    </div>
  );
}

export default Counter; // Fix 2: Export the component
```
