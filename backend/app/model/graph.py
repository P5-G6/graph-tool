"""Node definition class."""
from app.model.vertex import Vertex


class Graph:
    """Class that represents graph with adjacent list."""

    def __init__(self):
        """Initialize empty graph."""
        self.vertices = {}

    def add_vertex(self, vertex_label, adjacent=None,
                   weight=0, direction=False):
        """Add vertex."""
        if vertex_label not in self.vertices:
            new_vertex = Vertex(vertex_label)
            self.vertices[vertex_label] = new_vertex

            if adjacent:
                new_vertex.add_adjacent(adjacent, weight, direction)
                if not direction:
                    self.add_link(vertex_label, adjacent, weight)
        else:
            self.vertices[vertex_label].add_adjacent(adjacent,
                                                     weight,
                                                     direction)
            if not direction:
                self.add_link(vertex_label, adjacent, weight)

    def add_link(self, vertex_label, adjacent, weight):
        """Add link for non-directonal vertices."""
        self.vertices[vertex_label].add_adjacent(adjacent, weight)
        self.vertices[adjacent].add_adjacent(vertex_label, weight)

    def print_graph(self):
        """Print adjacent list."""
        for i in self.vertices.keys():
            self.vertices[i].print_vertex()

    def get_vertices(self):
        """Get vertices dictionary."""
        return self.vertices

    def clear_graph(self):
        """Clear all vertices."""
        self.vertices = {}

    def delete_vertex(self, vertex_label):
        """Delete an vertex."""
        del self.vertices[vertex_label]
        for vertex in self.vertices:
            for edge in self.vertices[vertex].adjacent_vertices:
                if edge[0] == vertex_label:
                    self.vertices[vertex].adjacent_vertices.remove(edge)

    def delete_edge(self, edge):
        """Delete an edge."""
        if edge[-1]:
            self.vertices[edge[0]].adjacent_vertices.remove(edge[1:])
        else:
            self.vertices[edge[0]].adjacent_vertices.remove(edge[1:])
            self.vertices[edge[1]].adjacent_vertices.remove([edge[0],
                                                            edge[2],
                                                            edge[3]])
