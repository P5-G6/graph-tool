# Graph-tool an graph-oriented blockchain project

# The Stellar  Group

![images/stellar-lumens.jpeg](images/stellar-lumens.jpeg)

## Members

- José Cláudio Soares Neto(jcsn@cesar.school) → Back-end Developer
- Pedro Barbosa(pb@cesar.school) → Front-end Developer
- Giovanni Netto Procida(gnp@cesar.school) → Front-end Developer

## Roadmap

- [x]  Implement a software that can interpret a graph
    - [x]  Front-end
    - [x]  Back-end
        - [x]  Create, update and delete a graph
        - [x]  Graph operations
        - [x]  Graph minimum cost path algorithms(Dijkstra)
- [ ]  Graph-oriented blockchain
	- [x]  Network Concept
    - [ ]  Blocks implementation
    - [ ]  Proof-of-Stake implementation

# First Implementation

## Timeline

## 04/04(Sunday) → 3h

Before we started the activity it was discussed whether the group would want an application using Front-end, with everyone in favor of it, the group was divided into two, where two members would be responsible for the Back-end application and two for the Frontend. Before starting the code, it was decided which technologies would be used, for the frontend it was chosen used to React JS and for the backend, it would be Python. With that, an initial environment for both applications was created, as well as a repository on Github for a better version of the code with a branch for each application.

Back-end → It was initially studied how the graph algorithm implementation works, choosing to use an implementation using adjacent lists.

![https://www.researchgate.net/profile/Joao-Paulo-Souza-Medeiros/publication/279962622/figure/fig12/AS:670708828999681@1536920854028/Figura-A2-Representacao-de-redes-por-meio-de-lista-de-adjacencia-composta-por-n-listas.png](https://www.researchgate.net/profile/Joao-Paulo-Souza-Medeiros/publication/279962622/figure/fig12/AS:670708828999681@1536920854028/Figura-A2-Representacao-de-redes-por-meio-de-lista-de-adjacencia-composta-por-n-listas.png)

Front-end → A quick search was made to find a library for better visualization and implementation of graphs, choosing VisJS. In addition to the initial code creation

![https://i.pinimg.com/236x/e1/df/59/e1df59c6d0ca7aaf3746c2238e075c48.jpg](https://i.pinimg.com/236x/e1/df/59/e1df59c6d0ca7aaf3746c2238e075c48.jpg)

## 17/04(Saturday) → 3h

With the leaving of one of the group members, a brief discussion was made of how the division of the activity's work would be from that moment on, so it was decided that everything that had already been decided and done would be maintained, but only one member would be left with the Back-end, receiving support from the other two members who would be responsible for the Front-end. To test each application, mocks were used throughout the process, while the integration was not carried out.

Backend → Initialization of the construction of the graph and vertex classes.

Frontend:

- Creation of a low-fidelity prototype using Figma, to better visualize how the solution would look in the end.

![images/Untitled1.png](images/Untitled1.png)

- Beginning of the discussion on how the user's input would be, in addition to aligning how the request and response part would be between the applications.

## 19/04(Monday) → 5h

Back-end → Finalization of the graph class and final tests, in addition to starting to create the API to integrate the applications.
Front-end → I finish the discussion of how the user input would be done, finalization of the rest of the components, and the styling part.

## 20/04(Tuesday) → 3h

We started writing documentation for both applications. The whole part of the Back-end was done, so it was decided to successfully integrate the Front-end and Back-end.

## 22/04(Thursday) → 4h

Finalization of the documentation, front-end and bug fixes.

# Second Implementation

# Activities Table
imagem da tabela(atividades.png)

Backend Code - Implementing the code for the dijkstra algorithm in the backend

Frontend Layout - Thinking about redesigning the frontend layout and how the new features would be implemented

imagem do layout(layout.png)

Frontend Code - Implementing code for the new layout and dijkstra algorithm for frontend

Intregation - Implement backend and frontend integration

Tests - Time spent for:
1) Test the functioning of the dijkstra algorithm on the backend, making the test with more than one example of graphs.
2) The operation of the new frontend layout in addition to the use of a mock to evaluate the operation of the djkstra algorithm by the frontend.
3) Testing the backend and frontend integration.

Documentation - Working on the document

## Dijkstra Algorithm

### About
### Pseudo Code
### Complexity

# About the project

![images/Screen_Shot_2021-04-22_at_23.44.43.png](images/Screen_Shot_2021-04-22_at_23.44.43.png)

This is a project of CESAR School University that aims to implement a tool that is capable of creating a graph and executing graph operations functions.
The students that developed this project are highly interested in blockchain technology, so the team started to think about how could integrate this project with our objectives of learning more of blockchain.
Until now, we had developed a software that is capable of interpreting and operate a graph using adjacency list, and in the future, we probably will implement algorithms like the Dijkstra algorithm.
Having that in mind, since we are interested in blockchain technology we will try to build a graph-oriented proof-of-work blockchain. 

# Plans for the future

For the near future as said before we plan to implement the base of a blockchain that the transactions are graph-oriented. We brainstormed that each block should be a ramdom generated graph with different cost edges, the worker that find the less cost path to the transaction will validate it.

For example let's sai that we have the graph below:

![images/Screen_Shot_2021-04-23_at_00.02.46.png](images/Screen_Shot_2021-04-23_at_00.02.46.png)

The path that we want to reach is E → A, so the less costly path is E → D → C → B → A. So the worker that finds this path first will validate the transaction. Keep in mind that is a simple example and can be way more complex as the graph grows.

## Network Concept

For the network rules, we decided to use a delegated proof-of-stake as consensus mechanisms.  That means that owners can delegate their tokens to validators, to become a validator you need to hold a minimum amount of tokens that can be or not delegated to you, as the network grows that amount increase accordingly.

The network will initially use 1-5-1 validation:
1 -> A graph will be generated by this validator using a pre-defined algorithm by the network and 2 vertices will be randomly chosen to find the costless path.

5 -> Five validators will be picked to find the path, all of them had to find the path using their algorithms, resources, thread management, and so on. They are free to use any algorithm to figure out the costless path.

1 -> After the previous 5 validators submit their answer to the graph, the final one will call voting to validate which costless paths are correct.
When a consensus is reached, the current validator can do the minting of the block.
Those validators who agreed in a consensus will be rewarded accordingly their throughput time, also the ones that created the graph and minted the block.