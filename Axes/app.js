let SVG = d3.select('svg')
    .attr('width', '500')
    .attr('height', '500');

SVG.style('background-color', 'pink');

const SVG_WIDTH = document.querySelector('svg').clientWidth;
const SVG_HEIGHT = document.querySelector('svg').clientHeight;


let DATA = [23, 26, 67, 55, 49];

// to create an axis we need a scale
let dataScale = d3.scaleLinear()
                    .domain([0, Math.max(...DATA)])
                    .range([0, SVG_HEIGHT]);


// create left y-axis: expect scale as input
let yAxisLeft = d3.axisLeft(dataScale);

// render the left y-axis
let yAxisLeftG = SVG.append('g')
                        .attr('id', 'yAxisLeftG');


yAxisLeft(yAxisLeftG); // expect selection as input

yAxisLeftG.attr('transform', 'translate(25, 0)');

// redefine the scale
dataScale = d3.scaleLinear()
                .domain([0, Math.max(...DATA)])
                .range([25, SVG_HEIGHT-25]);

yAxisLeft = d3.axisLeft(dataScale);

yAxisLeft(yAxisLeftG);

// create right y-axis
let yAxisRight = d3.axisRight(dataScale);

// to render right y-axis
let yAxisRightG = SVG.append('g').attr('id', 'yAxisRightG');

yAxisRight(yAxisRightG);

yAxisRightG.attr('transform', `translate(${SVG_WIDTH - 25}, 0)`);




// create top x-axis
let xAxisTop = d3.axisTop(dataScale);

// to render top x-axis
let xAxisTopG = SVG.append('g').attr('id', 'xAxisTopG');

xAxisTop(xAxisTopG);

xAxisTopG.attr('transform', 'translate(0,25)');


// create bottom x-axis
let xAxisBottom = d3.axisBottom(dataScale);

// to render bottom x-axis
let xAxisBottomG = SVG.append("g").attr('id', 'xAxisBottomG');

xAxisBottom(xAxisBottomG);

xAxisBottomG.attr('transform', `translate(0, ${SVG_HEIGHT - 25})`);



//
yAxisLeft.ticks(6);
yAxisLeft(yAxisLeftG);
xAxisBottom.ticks(4, '%');
xAxisBottom(xAxisBottomG);

// axis.ticks(interval, specifier(optional)) // only on a time scale

console.log(yAxisLeft.tickValues());
yAxisLeft.tickValues(DATA);
yAxisLeft(yAxisLeftG);
console.log(yAxisLeft.tickValues());


//
console.log(xAxisBottom.tickFormat());
xAxisBottom.tickFormat(d3.format(",.0"))
xAxisBottom(xAxisBottomG);


//
console.log(yAxisLeft.tickPadding());
yAxisLeft.tickPadding(0);
yAxisLeft(yAxisLeftG);
yAxisLeft.tickPadding(1.5);
yAxisLeft(yAxisLeftG);
console.log(yAxisLeft.tickPadding());

//
console.log(yAxisLeft.tickSizeInner());
yAxisLeft.tickSizeInner(3);
yAxisLeft(yAxisLeftG);
yAxisLeft.tickSizeInner(0);
yAxisLeft(yAxisLeftG);
yAxisLeft.tickSizeInner(-6);
yAxisLeft(yAxisLeftG);
console.log(yAxisLeft.tickSizeInner());

//
console.log(yAxisLeft.tickSizeOuter());
yAxisLeft.tickSizeOuter(3);
yAxisLeft(yAxisLeftG);