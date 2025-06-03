# Section 2: To-Do List React App

## How to Run

1. Navigate to the project directory:

   ```powershell
   cd "e:\reacttest-pune\Section 2\todo-app"
   ```

2. Install dependencies (if not already installed):

   ```powershell
   npm install
   ```

3. Start the development server:

   ```powershell
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

## Key Implementation Details

### State Management

- Uses `useState` for managing tasks array, input value, and filter state
- Each task has: `id`, `text`, and `completed` properties
- Generates unique IDs using `Date.now()`

### localStorage Integration

- Automatically saves tasks whenever the tasks array changes
- Loads saved tasks when the component first mounts
- Uses `JSON.stringify/parse` for data serialization

### Filter Functionality

- Three filter states: "all", "active", "completed"
- Dynamically filters the displayed tasks
- Shows task counts for each category
