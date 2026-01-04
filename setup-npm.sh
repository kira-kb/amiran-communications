#!/bin/bash

# Amiran Communications Website - npm Setup Script

echo "🚀 Setting up Amiran Communications Website with npm..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Run lint check
echo "🔍 Running code quality check..."
npm run lint

if [ $? -eq 0 ]; then
    echo "✅ Code quality check passed!"
else
    echo "⚠️  Code quality check found some issues (non-critical)"
fi

echo ""
echo "🎉 Setup complete! You can now run:"
echo "   npm run dev    - Start development server"
echo "   npm run build  - Build for production"
echo "   npm run lint   - Run code quality check"
echo ""
echo "🌐 The website will be available at: http://localhost:3000"