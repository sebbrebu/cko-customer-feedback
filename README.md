Build and tag the Docker image:

### `docker build -t cko-customer-feedback:dev .`

Then, spin up the container once the build is done:

### ` docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev`