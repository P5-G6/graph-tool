"""This file contains the graph logic of the API."""


def adjacency_list_(graph):
    """Get graph adjacency_list."""
    adjacency_list = {}
    graph = graph.get_vertices()

    for vertex in graph:
        vertex_adjacent_list = graph[vertex].get_vertex_adjacent_list()
        adjacency_list[vertex] = vertex_adjacent_list
    return adjacency_list


def graph_order(graph):
    """Get graph order."""
    graph = graph.get_vertices()

    order = len(graph.keys())

    return order


def graph_size(graph):
    """Get graph size."""
    adjacency_list = adjacency_list_(graph)
    bidirectional = 0
    unidirectional = 0

    for vertex in adjacency_list:
        for adjacent in adjacency_list[vertex]:
            if adjacent[2]:
                unidirectional += 1
            else:
                bidirectional += 1

    size = unidirectional + (bidirectional / 2)

    return size


def check_if_are_adjacents(vertex_1, vertex_2, graph):
    """Check if vertices are adjacents."""
    adjacency_list = adjacency_list_(graph)
    for edge in adjacency_list[vertex_1]:
        if edge[0] == vertex_2:
            return True
    return False


def vertex_degree(vertex_label, graph):
    """Get vertex adjacent degree count."""
    adjacency_list = adjacency_list_(graph)
    vertex = adjacency_list[vertex_label]

    in_edges = 0
    edges = 0
    out_edges = 0

    # Count bi-directional edges
    for edge in vertex:
        if not edge[2]:
            edges += 1

    # Count out unidirectional edges
    for edge in vertex:
        if edge[2]:
            out_edges += 1

    # Count in unidirectional edges
    del adjacency_list[vertex_label]

    for vertex_ in adjacency_list:
        for edge_ in adjacency_list[vertex_]:
            if edge_[0] == vertex_label and edge_[2]:
                in_edges += 1

    degree = {
        "in": in_edges,
        "out": out_edges,
        "edges": edges
    }

    return degree


def vertex_adjacent_list(vertex_label, graph):
    """Get vertex adjacent list."""
    adjacency_list = adjacency_list_(graph)
    vertex = adjacency_list[vertex_label]

    in_edges = []
    edges = []
    out_edges = []

    # Get bi-directional edges
    for edge in vertex:
        if not edge[2]:
            edges.append(edge)

    # Get out unidirectional edges
    for edge in vertex:
        if edge[2]:
            out_edges.append(edge)

    # Get in unidirectional edges
    del adjacency_list[vertex_label]

    for vertex_ in adjacency_list:
        for edge_ in adjacency_list[vertex_]:
            if edge_[0] == vertex_label and edge_[2]:
                in_edges.append(edge_)

    vertex_adjacent_list = {
        "in": in_edges,
        "out": out_edges,
        "edges": edges
    }

    return vertex_adjacent_list
