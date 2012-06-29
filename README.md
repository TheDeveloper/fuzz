### Fuzz
Wraps a [node-amqp](https://github.com/postwait/node-amqp) connection object and exposes some useful helpers and properties.

#### Helpers
    fuzz.connect([conf], callback); // Connect to RabbitMQ and execute callback when ready event fired

#### Properties
    fuzz.connected; // Boolean value tracking the status of the RabbitMQ connection

Documentation site at http://thedeveloper.github.com/fuzz/

Source documentation available at http://thedeveloper.github.com/fuzz/doc/README.md.html