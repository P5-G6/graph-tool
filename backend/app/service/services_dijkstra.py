"""This file contains the Dijkstra logic to the API."""
import app.service.services_graph as services_graph
from app.model.graph import Graph

# def get_least_cost_all_vertices(graph):
#     """Get least-cost path to each graph vertex."""





def get_least_sequence_all_vertices(graph, vertex_label):
    """Get least-cost path to each graph vertex."""
    adjacency_list = services_graph.adjacency_list_(graph)
    vertices_least_sequence = {}

    for vertex in adjacency_list.keys():
        if vertex != vertex_label:
            least_sequence = _dijkstra(graph, vertex_label, vertex)
            if least_sequence != "Not reachable":
                vertices_least_sequence[vertex] = \
                    least_sequence["least_path"]
            else:
                vertices_least_sequence[vertex] = "Not reachable"

    return vertices_least_sequence



def _dijkstra(graph, start_vertex, end_vertex):
    """Get least-cost path to each graph vertex."""
    least_cost = {}
    least_path = {}
    infinity = 999999999999
    unvisited = []
    visited = []
    visited_values = {}
    cost = 0

    adjacency_list = services_graph.adjacency_list_(graph)

    for vertex in adjacency_list:
        unvisited.append(vertex)
        if vertex != start_vertex:
            least_cost[vertex] = infinity
        else:
            least_cost[vertex] = 0

    least_path[start_vertex] = 0
    current_vertex = start_vertex

    while unvisited:
        values = {}
        for vertex in adjacency_list[current_vertex]:
            if visited_values[vertex] != vertex[1]:
                values[vertex[0]] = vertex[1]

        try:
            print("values:", values)
            minimum = min(values, key=values.get)
            visited_values[minimum] = values[minimum]
            cost += values[minimum]
            least_cost[minimum] = cost
            current_vertex = minimum
            if current_vertex != end_vertex:
                visited.append(current_vertex)

        except:
            print("Not reachable")

        if current_vertex == end_vertex or current_vertex == start_vertex:
            current_vertex = start_vertex
            cost = 0
        else:
            print("Visited:", visited)
            print(current_vertex)
            unvisited.remove(current_vertex)

    return {
        "least_cost": least_cost[end_vertex]
    }


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
    graph.add_vertex("D", adjacent="E", weight=2, direction=True)
    graph.add_vertex("A", adjacent="C", weight=15, direction=True)
    graph.add_vertex("C", adjacent="E", weight=10, direction=True)

    print(_dijkstra(graph, "A", "E"))
    print(get_least_sequence_all_vertices(graph, "A"))