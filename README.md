# Recap Reels Client Portal

A modern React-based client portal for Recap Reels, providing event management, payment tracking, file sharing, and rating functionality for videography services.

## Features

- **Event Dashboard**: View and manage event details, status, and metadata
- **Payment Tracking**: Monitor payment history, amounts due, and transaction records
- **File Management**: Access reels, pictures, and raw footage organized by event
- **OTP Display**: Secure access codes for event verification
- **Rating System**: Client feedback and rating collection
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Real-time Updates**: Live data fetching with React Query

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom components
- **UI Components**: Radix UI primitives with shadcn/ui
- **Routing**: React Router DOM
- **State Management**: React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Testing**: Vitest for unit tests, Playwright for E2E tests
- **Linting**: ESLint with TypeScript support

## Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or bun package manager

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd reel-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

The application uses dynamic routing with unique links. Access a specific client's dashboard using:

```
http://localhost:5173/p/{unique-id}
```

Where `{unique-id}` is the client's unique identifier provided by the system.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests once
- `npm run test:watch` - Run tests in watch mode

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Feature-specific components
├── pages/              # Route components
├── services/           # API service functions
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
├── test/               # Test files
└── mock/               # Mock data (if any)
```

## Development

### Code Style

This project uses ESLint for code linting. Run `npm run lint` to check for issues.

### Testing

- Unit tests: `npm run test`
- E2E tests: Configure Playwright for end-to-end testing

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## License

This project is private and proprietary. All rights reserved.
