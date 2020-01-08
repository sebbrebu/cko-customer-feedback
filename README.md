Build and tag the Docker image:

`docker build -t cko-customer-feedback:dev .`

Spin up the container once the build is done:

`docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm cko-customer-feedback:dev`

Component tree (includes only the custom components, not the third-party ones):

```Index
        App
            Layout
                Header
                FormContainer
                    ReviewForm
                GraphContainer
                    Chart
                FeedbackContainer
                    Review
```

### Charts
#### History
This line chart shows ratings on the relative timeline.
#### Summary
This bar chart counts the number of reviews per rating.

### Reviews
When a review is submitted, it is added to the top of the Reviews section. This only shows the last 5 reviews.
If the total number of reviews is greater than 5, the section title will specify "last 5 out of {total}".
