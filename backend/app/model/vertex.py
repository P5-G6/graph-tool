"""Node definition class."""


class Vertex:
    """Defines a vertex."""

    def __init__(self, label):
        """Vertex class constructor."""
        self.adjacent_vertices = []
        self.label = label

    def add_adjacent(self, vertex_label, weight, direction=False):
        """Add a vertex to the adjacent list."""
        new_adjacent_vertex = [vertex_label, weight, direction]
        if new_adjacent_vertex not in self.adjacent_vertices:
            self.adjacent_vertices.append(new_adjacent_vertex)

    def print_vertex(self):
        """Print adjacent_vertices."""
        print("{} : {}".format(self.label, self.adjacent_vertices))

    def get_vertex_adjacent_list(self):
        """Get adjacent list."""
        return self.adjacent_vertices
