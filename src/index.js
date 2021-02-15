import {select, scaleOrdinal, scaleSqrt} from 'd3';
import {colorLegend} from './colorLegend';
import {sizeLegend} from './sizeLegend';

const svg = select('svg');

const colorScale = scaleOrdinal()
    .domain(['apple', 'lemon', 'lime', 'orange'])
    .range(['#FF8888', '#FFED88', 'green', 'orange']);

svg.append('g')
    .attr('transform', `translate(100, 150)`)
    .call(colorLegend, {
        colorScale,
        spacing: 80,
        textOffset: 80,
        circleRadius: 30
    });

const sizeScale = scaleSqrt()
    .domain([0, 10])
    .range([0, 50]);

svg.append('g')
    .attr('transform', `translate(360, 150)`)
    .call(sizeLegend, {
        sizeScale,
        spacing: 80,
        textOffset: 20,
        numTicks: 5,
        circleFill: 'rgba(0,0,0, 0.5)'
    })