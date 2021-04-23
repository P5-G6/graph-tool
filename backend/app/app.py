"""Graph controller class."""
import app.service.services as services
from app.model.graph import Graph
from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)
graph = Graph()
CORS(app, support_credentials=True)


@app.route('/adjacency-list', methods=['GET'])
@cross_origin(supports_credentials=True)
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
                    'Access-Control-Allow-Origin': 'http://localhost:3000'},
                "body": adjacency_list
                }
    return response


@app.route('/graph-order', methods=['GET'])
@cross_origin(supports_credentials=True)
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
@cross_origin(supports_credentials=True)
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
@cross_origin(supports_credentials=True)
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
@cross_origin(supports_credentials=True)
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
@cross_origin(supports_credentials=True)
def get_vertex_adjacent_list():
    """Hello flask."""
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
    return response


@app.route('/graph/add-vertex', methods=['POST'])
@cross_origin(supports_credentials=True)
def post_add_vertex():
    """Hello flask."""
    request_json = request.get_json()
    vertex = request_json["vertex_label"]
    if vertex in graph.vertices:
        return {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": {"error": "vertex already exists"}
                }

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
@cross_origin(supports_credentials=True)
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


@app.route('/graph/delete_vertex', methods=['POST'])
@cross_origin(supports_credentials=True)
def post_delete_vertex():
    """Hello flask."""
    request_json = request.get_json()
    vertex_label = request_json["vertex_label"]
    if vertex_label in graph.vertices:
        graph.delete_vertex(vertex_label)
    else:
        return {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": {"error": "vertex does not exist"}
                }

    deleted_vertex = {"deleted_vertex": vertex_label}
    response = {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": deleted_vertex
                }
    return response


@app.route('/graph/delete_edge', methods=['POST'])
@cross_origin(supports_credentials=True)
def post_delete_edge():
    """Hello flask."""
    request_json = request.get_json()
    edge = request_json["edge"]

    edge_without_vertex = edge[1:]
    deleted_flag = False

    for vertex in graph.vertices:
        adjacency_list = \
            graph.get_vertices()[vertex].get_vertex_adjacent_list()
        if vertex == edge[0] and edge_without_vertex in adjacency_list:
            graph.delete_edge(edge)
            deleted_flag = True
            break

    if not deleted_flag:
        return {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": {"error": "edge does not exist"}
                }

    deleted_edge = {"deleted_edge": edge}
    response = {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": deleted_edge
                }
    return response


@app.route('/graph/delete_graph', methods=['GET'])
@cross_origin(supports_credentials=True)
def get_clear_graph():
    """Hello flask."""
    graph.clear_graph()

    response = {"statusCode": 200,
                "headers": {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'},
                "body": {"message": "graph reseted"}
                }
    return response
