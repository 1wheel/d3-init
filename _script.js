console.clear()
d3.select('body').selectAppend('div.tooltip')

var data = d3.range(300).map(x => { return {x, y: Math.random()*10 + x/100} })

var sel = d3.select('#graph').html('')
var c = d3.conventions({sel, margin: {left: 30}})

c.x.domain(d3.extent(data, d => d.x))
c.y.domain(d3.extent(data, d => d.y))

d3.drawAxis(c)

c.svg.appendMany('circle', data)
  .at({
    cx: d => c.x(d.x),
    cy: d => c.y(d.y),
    stroke: '#000',
    fillOpacity: .4,
    r: 5
  })
  .call(d3.attachTooltip)