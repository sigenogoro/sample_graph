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

    var cy = cytoscape({
        container: document.getElementById('cy'),
        // エッジとノードを指定
        elements: sample_data ,
        style: sample_style,
    });

    // バージョン変更の影響を受けている 3.2.12以降
    var layout = cy.elements().layout(
        {
            name: 'grid',
            columns: 2
        }
    );


    layout.run();

    const btn = document.getElementById('btn');
    console.log(btn);
    btn.addEventListener('click', () => {
        console.log('OK');
    });

}