"""Integration tests file."""
import urllib3
import json
import sys
sys.path.append('../')


class TestClass(object):
    """Test routes class."""

    mock_vetex = ["1", "2", "3", "4", "5", "6"]
    mock_edges = [["1", "4", 3, True],
                  ["4", "2", 2, True],
                  ["2", "1", 4, False],
                  ["3", "1", 4, False],
                  ["5", "6", 5, True],
                  ["6", "3", 0, True]]
    mock_adjacency_list = {
        "1": [["4", 3, True],
              ["2", 4, False],
              ["3", 4, False]],
        "2": [["1", 4, False]],
        "3": [["1", 4, False]],
        "4": [["2", 2, True]],
        "5": [["6", 5, True]],
        "6": [["3", 0, True]]
    }
    mock_graph_size = 6
    mock_graph_order = 6
    mock_are_adjacents_input = ["2", "1"]
    mock_are_adjacents = True
    mock_vertex_degree_input = "1"
    mock_vertex_degree = {'edges': 2, 'in': 0, 'out': 1}
    mock_vertex_adjacent_list_input = "1"
    mock_vertex_adjacent_list = {
        'edges': [['2', 4, False], ['3', 4, False]],
        'in': [],
        'out': [['4', 3, True]]
    }
    mock_delete_vertex = "1"
    mock_delete_edge = ["6", "3", 0, True]

    def test_post_add_vertex(self):
        """Test post_add_vertex."""
        http = urllib3.PoolManager()
        vertex_responses = []

        for vertex in self.mock_vetex:
            body = json.dumps({"vertex_label": vertex})

            request = http.request('POST',
                                   'http://127.0.0.1:5000/graph/add-vertex',
                                   headers={'Content-Type':
                                            'application/json'},
                                   body=body)

            response = json.loads(request.data)
            vertex_responses.append(response['body']["added_vertex_label"])
        assert vertex_responses == self.mock_vetex

    def test_post_add_edge(self):
        """Test post_add_edge."""
        http = urllib3.PoolManager()
        edge_responses = []

        for edge in self.mock_edges:
            body = json.dumps({"edge": edge})

            request = http.request('POST',
                                   'http://127.0.0.1:5000//graph/add-edge',
                                   headers={'Content-Type':
                                            'application/json'},
                                   body=body)
            response = json.loads(request.data)
            edge_responses.append(response['body']['added_edge'])
        assert edge_responses == self.mock_edges

    def test_get_adjacency_list(self):
        """Test get_adjacency_list."""
        http = urllib3.PoolManager()
        request = http.request('GET',
                               'http://127.0.0.1:5000/adjacency-list',
                               headers={'Content-Type':
                                        'application/json'})

        response = json.loads(request.data)
        response_adjacency_list = response['body']['adjacency_list']
        assert self.mock_adjacency_list == response_adjacency_list

    def test_get_graph_order(self):
        """Test get_graph_order."""
        http = urllib3.PoolManager()
        request = http.request('GET',
                               'http://127.0.0.1:5000/graph-order',
                               headers={'Content-Type':
                                        'application/json'})

        response = json.loads(request.data)
        response_graph_order = response['body']['graph_order']
        assert self.mock_graph_order == response_graph_order

    def test_get_graph_size(self):
        """Test get_graph_size."""
        http = urllib3.PoolManager()
        request = http.request('GET',
                               'http://127.0.0.1:5000/graph-size',
                               headers={'Content-Type':
                                        'application/json'})

        response = json.loads(request.data)
        response_graph_size = response['body']['graph_size']
        assert self.mock_graph_size == response_graph_size

    def test_get_check_if_are_adjacents(self):
        """Test get_check_if_are_adjacents."""
        http = urllib3.PoolManager()
        request = http.request('GET',
                               'http://127.0.0.1:5000/check-if-are-adjacents'
                               '?vertex_1={}&vertex_2={}'
                               .format(self.mock_are_adjacents_input[0],
                                       self.mock_are_adjacents_input[1]),
                               headers={'Content-Type':
                                        'application/json'})

        response = json.loads(request.data)
        response_are_adjacents = response['body']['are_adjacents']
        assert self.mock_are_adjacents == response_are_adjacents

    def test_get_vertex_degree(self):
        """Test get_vertex_degree."""
        http = urllib3.PoolManager()
        request = http.request('GET',
                               'http://127.0.0.1:5000/vertex-degree'
                               '?vertex={}'
                               .format(self.mock_vertex_degree_input[0]),
                               headers={'Content-Type':
                                        'application/json'})

        response = json.loads(request.data)
        response_vertex_degree = response['body']['vertex_degree']
        assert self.mock_vertex_degree == response_vertex_degree

    def test_get_vertex_adjacent_list(self):
        """Test get_vertex_adjacent_list."""
        http = urllib3.PoolManager()
        request = http.request('GET',
                               'http://127.0.0.1:5000/vertex-adjacent-list'
                               '?vertex={}'
                               .format(self.mock_vertex_adjacent_list_input),
                               headers={'Content-Type':
                                        'application/json'})

        response = json.loads(request.data)
        response_vertex_adjacent_list = \
            response['body']['vertex_adjacent_list']
        assert self.mock_vertex_adjacent_list == response_vertex_adjacent_list

    def test_post_delete_vertex(self):
        """Test get_vertex_adjacent_list."""
        http = urllib3.PoolManager()
        body = json.dumps({"vertex_label": self.mock_delete_vertex})

        request = http.request('POST',
                               'http://127.0.0.1:5000/graph/delete_vertex',
                               headers={'Content-Type':
                                        'application/json'},
                               body=body)

        response = json.loads(request.data)
        response_deleted_vertex = \
            response['body']['deleted_vertex']
        assert self.mock_delete_vertex == response_deleted_vertex

    def test_post_delete_edge(self):
        """Test get_vertex_adjacent_list."""
        http = urllib3.PoolManager()
        body = json.dumps({"edge": self.mock_delete_edge})

        request = http.request('POST',
                               'http://127.0.0.1:5000/graph/delete_edge',
                               headers={'Content-Type':
                                        'application/json'},
                               body=body)

        response = json.loads(request.data)
        response_deleted_edge = \
            response['body']['deleted_edge']
        assert self.mock_delete_edge == response_deleted_edge

if __name__ == '__main__':
    test = TestClass()
    test.test_get_vertex_adjacent_list()
