"""Graph controller class."""
import app.service.services as services
from app.model.graph import Graph
from flask import Flask
from flask import request

app = Flask(__name__)
graph = Graph()


@app.route('/adjacency-list', methods=['GET'])
def get_adjacency_list():
    """Hello flask."""
    if graph.vertices:
        adjacency_list = services.adjacency_list_(graph)
    else:
        return {"error": "Graph does not exists"}

    adjacency_list = {
        "adjacency_list": adjacency_list
    }

    response = {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": adjacency_list
                }
    return response


@app.route('/graph-order', methods=['GET'])
def get_graph_order():
    """Hello flask."""
    if graph.vertices:
        graph_order = services.graph_order(graph)
    else:
        return {"error": "Graph does not exists"}

    graph_order = {
        "graph_order": graph_order
    }

    response = {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": graph_order
                }
    return response


@app.route('/graph-size', methods=['GET'])
def get_graph_size():
    """Hello flask."""
    if graph.vertices:
        graph_size = services.graph_size(graph)
    else:
        return {"error": "Graph does not exists"}

    graph_size = {
        "graph_size": graph_size
    }

    response = {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": graph_size
                }
    return response


@app.route('/check-if-are-adjacents', methods=['GET'])
def get_check_if_are_adjacents():
    """Hello flask."""
    vertex_1 = request.args.get('vertex_1')
    vertex_2 = request.args.get('vertex_2')

    if graph.vertices:
        are_adjacents = services.check_if_are_adjacents(vertex_1,
                                                        vertex_2,
                                                        graph)
    else:
        return {"error": "Graph does not exists"}

    are_adjacents = {
        "are_adjacents": are_adjacents
    }

    response = {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": are_adjacents
                }
    return response


@app.route('/vertex-degree', methods=['GET'])
def get_vertex_degree():
    """Hello flask."""
    vertex = request.args.get('vertex')

    if graph.vertices:
        vertex_degree = services.vertex_degree(vertex, graph)
    else:
        return {"error": "Graph does not exists"}

    vertex_degree = {
        "vertex_degree": vertex_degree
    }

    response = {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": vertex_degree
                }
    return response


@app.route('/vertex-adjacent-list', methods=['GET'])
def get_vertex_adjacent_list():
    """Hello flask."""
    print("oi")
    vertex = request.args.get('vertex')
    if graph.vertices:
        vertex_adjacent_list = services.vertex_adjacent_list(vertex, graph)
    else:
        return {"error": "Graph does not exists"}

    vertex_adjacent_list = {
        "vertex_adjacent_list": vertex_adjacent_list
    }

    response = {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": vertex_adjacent_list
                }
    print(vertex_adjacent_list)
    return response


@app.route('/graph/add-vertex', methods=['POST'])
def post_add_vertex():
    """Hello flask."""
    request_json = request.get_json()
    vertex = request_json["vertex_label"]
    graph.add_vertex(str(vertex))
    added_vertex = {"added_vertex_label": str(vertex)}
    response = {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": added_vertex
                }
    return response


@app.route('/graph/add-edge', methods=['POST'])
def post_add_edge():
    """Hello flask."""
    request_json = request.get_json()
    edge = request_json['edge']
    graph.add_vertex(vertex_label=edge[0],
                     adjacent=edge[1],
                     weight=edge[2],
                     direction=edge[3])
    added_edge = {"added_edge": edge}
    response = {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": added_edge
                }
    return response
