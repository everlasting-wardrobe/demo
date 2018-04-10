import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {
  scaleBand,
  scaleLinear,
  axisLeft,
  axisBottom,
  max as d3max,
  select as d3select
 } from'd3';


const styles = StyleSheet.create({
  opacity: {
    ':hover':{
      opacity: 0.7
    }
  }
})

export default ({
  width,
  marginLeft,
  marginRight,
  height,
  marginTop,
  marginBottom,
  data
}) => {
  const x = scaleBand()
    .domain(data.map(d => {return d.label;}))
    .range([0, width])
    .paddingInner(0.3)
    .paddingOuter(0.2);

  const y = scaleLinear()
    .domain([0, d3max(data, d => {return d.num.reduce((a, b) => a+b, 0)})])
    .range([height, 0]);

  const xAxis = axisBottom(x);
  const yAxis = axisLeft(y)
            .ticks(10);

  const handleRect = (data) => {
    const rectColor = ['#E98074','#A9B7C0'];
    return (
      data.map((d, i) => {
        const xCoord = x(d.label);
        let yDummy = 0;
        return(
          d.num.map((row, i) => {
            const yCoord = y(row) - yDummy;
            yDummy = yDummy - y(row) + height;
            return (
              <rect className={css(styles.opacity)} key = {i}
                x = {xCoord}
                y = {yCoord}
                width = {x.bandwidth()}
                height = {height - y(row)}
                fill = {rectColor[i]}
                transform = {'translate(' + marginLeft + ', '+marginTop + ')'}>
              </rect>
            )
          })
        )
      })
    )
  }

  const xAxisHeight = height + marginTop;
  return (
    <div>
      <svg height={height + marginTop + marginBottom}
        width={width + marginLeft + marginRight}>
        <g ref={node => d3select(node).call(yAxis)}
          transform = {'translate(' + marginLeft + ', '+marginTop + ')'}/>
        <g ref={ node => d3select(node).call(xAxis)}
          transform = {'translate('+ marginLeft + ','+  xAxisHeight +')'}/>
        {handleRect(data)}
      </svg>
    </div>
  )
}
