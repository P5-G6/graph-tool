# Back-end

This section comprises all resources and processes related to the back-end of the base graph-oriented blockchain.

# Setting up the environment

![images/backend/Screen_Shot_2021-04-22_at_22.13.31.png](images/backend/Screen_Shot_2021-04-22_at_22.13.31.png)

To set up the environment of the back-end we already set a `Makefile` the install the requirements to run the server, to do that run `make all`.
To run the server you need to start the python virtual environment using `source .env/bin/activate` and run `make run`. This command should check if the requirements are installed and run the flask server.

## Dependencies

- python 3.6
- make
- flask
- pytest
- urllib3
- flas_cors

# **Getting Started**

![images/backend/Screen_Shot_2021-04-22_at_23.02.27.png](images/backend/Screen_Shot_2021-04-22_at_23.02.27.png)

It's important to abstract the logic of applications, due to that we chose to split the application into 4 different sections:

- Models → Classes that represent the data structures that we are using
- Services → All the applied logic rules, such as manipulating objects and operations.
- Controller → File that only receives and return http requests
- Tests → Tests scripts to make sure that the application's back-end is working fine

## Models

The models section has 2 defined classes:

- Graph
- Vertex

The **Graph** is the class that implements a graph using an adjacency list. This list is represented as a python dictionary:

```json
{
        "1": [["4", 3, True],
              ["2", 4, False],
              ["3", 4, False]],
        "2": [["1", 4, False]],
        "3": [["1", 4, False]],
        "4": [["2", 2, True]],
        "5": [["6", 5, True]],
        "6": [["3", 0, True]]
    }
```

![images/backend/Screen_Shot_2021-04-22_at_23.54.32.png](images/backend/Screen_Shot_2021-04-22_at_23.54.32.png)

This is an example of the representation of our system, that the key represents the vertex and the list its edges. 

Each key points to a another object that is defined as the **Vertex** class that has the list of all ajacent vertices.

## Services

Here we have the operations that we can perform in the graph object, all of them receive the current graph as an argument. There is a list of all functions and their respective returns:

- `adjacency_list_(graph)` → returns the graph adjacency list as a dictionary
- `graph_order(graph)` → returns an integer that represents the graph's order
- `graph_size(graph)` → returns an integer that represents the graph's size
- `check_if_are_adjacents(vertex_1, vertex_2, graph)` → receive 2 vertex and compare if        they are adjacents then returns a boolean.
- `vertex_degree(vertex_label, graph)` → returns a dictionary that contains the number of edges(as degree) and if there are directional edges returns the ins and outs vertices.
- `vertex_adjacent_list(vertex_label, graph)` → returns the vertex's adjacency list as applying the same logic as the vertex degree for directional and non-directional vertices.

## Controller

The `[app.py](http://app.py)` file is our Controller file, it has all the endpoins and is the abstraction point between our logic and the front-end. It is a Flask server. Here are the list of endpoints:

**GET:**

- `'/adjacency-list'`
- `'/graph-order'`
- `'/graph-size'`
- `'/check-if-are-adjacents'`
- `'/vertex-degree'`
- `'/vertex-adjacent-list'`
- `'/graph/delete_graph'`

**POST:**

- `'/graph/add-vertex'`
- `'/graph/add-edge'`
- `'/graph/delete_vertex'`
- `'/graph/delete_edge'`

At the moment, the application hadn't been deployed, it's running on the [localhost](http://localhost) so and an example of the application call is '[http://127.0.0.1:5000/adjacency-list](http://127.0.0.1:5000/adjacency-list)'. 

Note that for GET calls that receive parameters we use the query string parameters, so for example:

To call the endpoint `'/check-if-are-adjacents'` we need to pass 2 vertices to check if they're adjacent. To do that we need to pass the parameters like that → [`http://localhost](http://localhost):5000/check-if-are-adjacents?vertex_1=vertex_label_1&vertex_2=vertex_label_2`.

## Tests

Is a good practice in software developement to create test scripts to validade how the application is running and test the endpoints responses. We did that using an integration test class that simulates the calls of the front-end. We used the pytest lib to perform the tests to run that start the python virtual env using `source .env/bin/activate` go to the root directory of the back-end module and run `pytest test/integration_tests.py`, note that the server must be running to the test class make the respective requests.

# Development Workflow

![images/backend/Screen_Shot_2021-04-22_at_23.19.18.png](https://github.com/P5-G6/graph-tool/blob/docs/images/Screen_Shot_2021-04-22_at_23.19.18.png)

For the development of new features, we use a specific workflow that was defined before we started the project.

1. Create a feature branch that has the name of the feature
2. For Python code, we use the PEP8 code pattern, so LINT YOUR CODE!!
3. Do not commit on the master(main) branch, open a pull request and wait for the code review. If is approved then you can merge the feature branch and discard it
4. Be careful with git rebase, sometimes it can mess up the developing tree.
5. Always after developing a feature write the documentation in detail.
