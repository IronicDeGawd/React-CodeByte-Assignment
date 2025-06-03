# Section 1: Multiple Choice & Short Answer - Answers

## 1. What is the difference between a controlled and an uncontrolled component in React?

**Controlled Component:**

- The component's input value is controlled by React state
- You use useState to manage the input value
- The input value is always in sync with state
- Example: `<input value={inputValue} onChange={handleChange} />`

**Uncontrolled Component:**

- The component manages its own state internally using the DOM
- You use refs to get the input value when needed
- React doesn't control the input value directly
- Example: `<input ref={inputRef} />` and access value with `inputRef.current.value`

## 2. Which lifecycle method would you use to fetch data after a component mounts?

In **functional components**: Use `useEffect` with an empty dependency array `[]`

```javascript
useEffect(() => {
  // fetch data here
}, []); // empty array means it runs only once after mount
```

In **class components**: Use `componentDidMount()` method

## 3. Explain the purpose of useEffect in React. Give one real-world use case.

**Purpose of useEffect:**

- Handles side effects in functional components
- Replaces lifecycle methods like componentDidMount, componentDidUpdate, componentWillUnmount
- Runs after the component renders

**Real-world use case:**
Fetching user profile data when a user logs in:

```javascript
useEffect(() => {
  if (userId) {
    fetchUserProfile(userId).then((profile) => setUserProfile(profile));
  }
}, [userId]); // runs when userId changes
```

## 4. What is the virtual DOM and how does it improve performance?

**Virtual DOM:**

- A JavaScript representation of the real DOM kept in memory
- A lightweight copy of the actual DOM elements
- React creates a virtual DOM tree for your components

**Performance Benefits:**

- **Batching**: Multiple changes are batched together instead of updating DOM one by one
- **Diffing**: React compares (diffs) the new virtual DOM with the previous version
- **Minimal Updates**: Only the parts that actually changed are updated in the real DOM
- **Faster**: Manipulating JavaScript objects is faster than manipulating DOM elements

## 5. Choose the correct option: Which of the following is used for state management in React?

**Answer: a) useReducer**

**Explanation:**

- `useReducer` is a React hook specifically designed for managing complex state
- `localStorage` and `sessionStorage` are browser storage APIs, not React state management
- `useMemo` is for memoizing expensive calculations, not state management

## 6. What are the benefits of using functional components with hooks compared to class components?

**Benefits of Functional Components with Hooks:**

- **Simpler syntax**: Less boilerplate code, easier to read and write
- **Better performance**: Hooks are optimized and faster than class lifecycle methods
- **Easier testing**: Pure functions are easier to test
- **Code reuse**: Custom hooks allow sharing logic between components
- **Modern approach**: Hooks are the current React standard and get new features first
- **No `this` binding**: Eliminates confusion about `this` context

## 7. Explain the difference between props and state in React.

**Props (Properties):**

- Data passed from parent component to child component
- Read-only (immutable) - child cannot modify props
- Used to configure and customize child components
- Example: `<Button color="blue" text="Click me" />`

**State:**

- Data that belongs to and is managed by the component itself
- Mutable - can be changed using setState (class) or useState (functional)
- Used for data that changes over time and affects component rendering
- Example: form input values, loading status, user preferences

## 8. What does key prop do in a React list? Why is it important?

**Purpose of key prop:**

- Helps React identify which list items have changed, been added, or removed
- Used by React's reconciliation algorithm to efficiently update the DOM

**Why it's important:**

- **Performance**: React can reuse existing DOM elements instead of recreating them
- **State preservation**: Prevents components from losing their state during re-renders
- **Avoiding bugs**: Prevents unexpected behavior when list items are reordered

**Example:**

```javascript
{
  todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
}
```

## 9. How would you apply conditional styling to a component based on a prop?

**Method 1: Conditional className**

```javascript
<div className={isActive ? "active" : "inactive"}>Content</div>
```

**Method 2: Template literals**

```javascript
<div className={`button ${isPrimary ? "primary" : "secondary"}`}>Button</div>
```

**Method 3: Inline styles**

```javascript
<div
  style={{
    backgroundColor: isHighlighted ? "yellow" : "white",
    border: hasError ? "1px solid red" : "1px solid gray",
  }}
>
  Content
</div>
```

**Method 4: CSS modules or styled-components**

```javascript
import styles from "./Component.module.css";

<div className={isActive ? styles.active : styles.inactive}>Content</div>;
```
