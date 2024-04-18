function dijkstra(graph, sourceNode) {
    var length = [];
    var visited = [];
    var nodes = Object.keys(graph);

    for (var node of nodes) {
        length[node] = Infinity;
    }
    
    length[sourceNode] = 0;

    while (nodes.length) {
        var shortestNode = null;
        var shortestDistance = Infinity;

        for (var node of nodes) {
            if (!visited.includes(node)){
                if (length[node] < shortestDistance) {
                    shortestNode = node;
                    shortestDistance = length[node];
                }
            }
        }

        if (shortestDistance == Infinity){
            break;
        }

        visited.push(shortestNode);
        var closeNodes = graph[shortestNode];

        for (var closeNode in closeNodes) {
            var distance = length[shortestNode] + closeNodes[closeNode];
            if (!visited.includes(closeNode)){
                if (distance < length[closeNode]) {
                    length[closeNode] = distance;
                }
            }
        }
    }
    
    return length;
}
