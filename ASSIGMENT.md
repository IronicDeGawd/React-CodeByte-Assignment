## React.js Internship Test

### Section 1: Multiple Choice & Short Answer

1. What is the difference between a controlled and an uncontrolled component in
   React?
2. Which lifecycle method would you use to fetch data after a component mounts?
3. Explain the purpose of useEffect in React. Give one real-world use case.
4. What is the virtual DOM and how does it improve performance?
5. Choose the correct option:
   Which of the following is used for state management in React?
   a) useReducer
   b) localStorage
   c) useMemo
   d) sessionStorage
6. What are the benefits of using functional components with hooks compared to
   class components?
7. Explain the difference between props and state in React.
8. What does key prop do in a React list? Why is it important?
9. How would you apply conditional styling to a component based on a prop?

### Section 2: Coding Challenge – Component Building

Create a React To-Do List App with the following requirements:
Requirements:
• Use functional components and React hooks
• Add new tasks (input + button)
• Mark tasks as complete/incomplete
• Delete a task
• Store and retrieve tasks using localStorage
• Apply basic CSS styling
• Optional: Add filter buttons (All, Completed, Active)
Evaluation Criteria:
• React fundamentals (JSX, props, state, hooks)
• Code structure & modularity
• Responsiveness & styling
• Use of version control (if submitting via GitHub)

### Section 3: Coding Task – API Integration

Build a small React app that fetches user data from an API and displays it in a responsive
card layout.
API: https://jsonplaceholder.typicode.com/users
Requirements:
• Fetch data using useEffect
• Show loading indicator
• Display user name, email, and company
• Handle error states
• Basic responsive styling (Flexbox or Grid)

### Section 4: Debugging & Code Review

You are given a snippet of buggy React code. Identify and fix the issues. (Provide both
explanation and corrected code.)
Buggy Code:

````js
import React, { useState } from 'react';
function Counter() {
const [count, setCount] = useState;
const increment = () ≥ {

setCount(count + 1);
}
return (
<div>
<p>You clicked {count} times</p>
<button onClick={increment}>Click me</button>
</div>
)
}```

````

create 4 folders with names Section 1, 2, 3 , 4
for section 1 & 4 create a .md file explaining the answer and error respectively im very bnasic terms
for sec 2 & 3 create a basic vite dapp with css as mentioned, adding very basic css, and implementing the only aforemetioned features

[PLAN YOUR STEPS PROPERLY BEFORE STARTING THE IMPLEMENTATION, ENSURE ALL METHODS ARE FUNCTIONAL AND PROPERLY IMPLEMENTED ALONG WITH OTHER INITILIZATION. ENSURE NO LOGIC IS AFFECTED IF DOESNT NEED TO BE TOUCHED WHILED COMPLETING YOUR TASK]
