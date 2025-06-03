# Section 3: User Cards API Integration

## API Used

- **JSONPlaceholder** - `https://jsonplaceholder.typicode.com/users`
- Provides 10 sample users with complete profile information

## How to Run

1. Navigate to the project directory:

   ```powershell
   cd "e:\reacttest-pune\Section 3\user-cards"
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

## Implementation Details

### API Integration

- Uses `useEffect` hook to fetch data on component mount
- Implements proper async/await pattern with try-catch
- Checks response status and handles HTTP errors

### State Management

- `users` - Array of user objects from API
- `loading` - Boolean for loading state
- `error` - String for error messages

### User Card Display

Each card shows:

- **Avatar** - First letter of name in styled circle
- **Name** - User's full name
- **Email** - Contact email with icon
- **Company** - Company name and catchphrase
- **Contact Details** - Phone, website, and address
- **Company Motto** - Styled quote box
