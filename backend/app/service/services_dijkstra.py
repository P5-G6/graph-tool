"""This file contains the Dijkstra logic to the API."""
import app.service.services_graph as services_graph
from app.model.graph import Graph


def get_least_cost_all_vertices(graph, vertex_label):
    """Get least-cost path to each graph vertex."""
    adjacency_list = services_graph.adjacency_list_(graph)
    vertices_least_cost = {}

    for vertex in adjacency_list.keys():
        if vertex != vertex_label:
            least_cost = dijkstra(graph, vertex_label, vertex)
            if least_cost != "-":
                vertices_least_cost[vertex] = \
                    least_cost["least_cost"]
            else:
                vertices_least_cost[vertex] = "-"

    return vertices_least_cost


def get_least_sequence_all_vertices(graph, vertex_label):
    """Get least-cost path to each graph vertex."""
    adjacency_list = services_graph.adjacency_list_(graph)
    vertices_least_sequence = {}

    for vertex in adjacency_list.keys():
        if vertex != vertex_label:
            least_sequence = dijkstra(graph, vertex_label, vertex)
            if least_sequence != "Not reachable":
                vertices_least_sequence[vertex] = \
                    least_sequence["least_path"]
            else:
                vertices_least_sequence[vertex] = "Not reachable"

    return vertices_least_sequence


def dijkstra(graph, start_vertex, end_vertex):
    """Dijkstra algorithm."""
    graph_transformed = {}

    adjacency_list = services_graph.adjacency_list_(graph)
    for vertex in adjacency_list:
        graph_transformed[vertex] = {}
        for edge in adjacency_list[vertex]:
            graph_transformed[vertex][edge[0]] = edge[1]

    shortest_distance = {}
    unvisited = graph_transformed
    infinity = 9999999
    pred = {}
    path = []

    for vertex in unvisited:
        shortest_distance[vertex] = infinity
    shortest_distance[start_vertex] = 0

    while unvisited:
        least_vertex = None
        for vertex in unvisited:
            if least_vertex is None:
                least_vertex = vertex
            elif shortest_distance[vertex] < shortest_distance[least_vertex]:
                least_vertex = vertex

        for p_vertex, weight in graph_transformed[least_vertex].items():
            if weight + shortest_distance[least_vertex] < shortest_distance[p_vertex]:
                shortest_distance[p_vertex] = weight + shortest_distance[least_vertex]
                pred[p_vertex] = least_vertex

        unvisited.pop(least_vertex)

    current_vertex = end_vertex

    while current_vertex != start_vertex:
        try:
            path.insert(0, current_vertex)
            current_vertex = pred[current_vertex]
        except:
            return {"least_cost": "-",
                    "least_path": "Not reachable"}

    path.insert(0, start_vertex)

    if shortest_distance[end_vertex] != infinity:
        return {"least_cost": shortest_distance[end_vertex],
                "least_path": path}

if __name__ == '__main__':
    graph = Graph()
    graph.add_vertex("A")
    graph.add_vertex("B")
    graph.add_vertex("C")
    graph.add_vertex("D")
    graph.add_vertex("E")
    graph.add_vertex("F")
    graph.add_vertex("A", adjacent="B", weight=10, direction=True)
    graph.add_vertex("B", adjacent="F", weight=15, direction=True)
    graph.add_vertex("F", adjacent="E", weight=5, direction=True)
    graph.add_vertex("B", adjacent="D", weight=12, direction=True)
    graph.add_vertex("D", adjacent="F", weight=1, direction=True)
    graph.add_vertex("D", adjacent="E", weight=2, direction=True)
    graph.add_vertex("A", adjacent="C", weight=15, direction=True)
    graph.add_vertex("C", adjacent="E", weight=10, direction=True)

    # g = {}

    # adjacency_list = services_graph.adjacency_list_(graph)
    # for vertex in adjacency_list:
    #     g[vertex] = {}
    #     for edge in adjacency_list[vertex]:
    #         g[vertex][edge[0]] = edge[1]

    # print(g)
    dijkstra(graph, "A", "E")
    print(get_least_cost_all_vertices(graph, "A"))
    print(get_least_sequence_all_vertices(graph, "A"))
    print(dijkstra(graph, "A", "E"))
