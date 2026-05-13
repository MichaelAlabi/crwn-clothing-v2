# Use a Node.js base image with Playwright
FROM mcr.microsoft.com/playwright:v1.37.0-focal

WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install Playwright browsers (chromium, firefox, webkit)
RUN npx playwright install

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Install a small static server for the built app
RUN npm install -g serve

# Expose the app port
EXPOSE 3000

# Run the app and then Playwright tests
RUN echo '#!/bin/bash\nserve -s build -l 3000 &\nSERVER_PID=$!\nsleep 5\necho "Starting Playwright tests..."\nnpx playwright test tests/ --reporter=line\ntest_exit=$?\nkill $SERVER_PID\nexit $test_exit' > /app/run-tests.sh && chmod +x /app/run-tests.sh

CMD ["/app/run-tests.sh"]
