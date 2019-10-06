'use strict'

{
    const sample_data = [
        {
            data: {
                id: 'a',
                type: 'bezier'
            }
        },
        {
            data: {id: 'b'}
        },
        {
            data: {source: 'a', target: 'b'},
            "classes": "bezier"
        },
        {
            data: {source: 'a', target: 'b'},
            "classes": "bezier"
        },
        {
            data: {source: 'a', target: 'b'},
            "classes": "bezier"
        }

    ]

    const sample_style = [
        {
            // 選択をする相手は
            selector: 'node',
            style: {
                'background-color': 'red',
                'label': 'data(id)'
            }
        },

        {
            selector: "edge",
            style: {
                // widthは線の太さを表している
                'width': 2,
                'line-color': 'green',
                'curve-style': 'bezier',
                "control-point-step-size": 40,
                'target-arrow-shape': 'triangle'
            }
        },
    ]

    class Cygraph {
        display_graph(){
            const cy = cytoscape({
                container: document.getElementById('cy'),
                // エッジとノードを指定
                elements: sample_data ,
                style: sample_style,
            });
            const layout = cy.elements().layout(
                {
                    name: 'grid',
                    columns: 2
                }
            );
           layout.run();
        }
    }

    // バージョン変更の影響を受けている 3.2.12以降
    

    
    const cygraph = new Cygraph();
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        cygraph.display_graph();
    });

}