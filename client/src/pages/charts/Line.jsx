import React from "react";
import { Card } from 'antd';
import {
  Chart,
  Axis,
  Tooltip,
  Coordinate,
  Legend,
  Interval
} from "bizcharts";
import DataSet from "@antv/data-set";

class Line extends React.Component {
  render() {
    const data = [
      {
        label: "星期一",
        销量: 2800,
        库存: 2260
      },
      {
        label: "星期二",
        销量: 1800,
        库存: 1300
      },
      {
        label: "星期三",
        销量: 950,
        库存: 900
      },
      {
        label: "星期四",
        销量: 500,
        库存: 390
      },
      {
        label: "星期五",
        销量: 170,
        库存: 100
      }
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["销量", "库存"],
      // 展开字段集
      key: "type",
      // key字段
      value: "value" // value字段
    });
    return (
      <Card
        title="商品销量柱状图"
        style={{ width: 600, margin:'30px'}}
      >
        <Chart
          height={200}
          data={dv.rows}
          width={400}
        >
          <Legend />{/* 图例 */}
          <Coordinate actions={[['scale', 1, -1], ['transpose']]} /> {/*坐标系组件 */}
          <Axis
            //坐标轴
            name="label"
            label={{
              offset: 12
            }}
          />
          <Axis name="value" position={"right"} />
          <Tooltip /> {/*鼠标悬浮在图上时的提示信息 */}
          <Interval
            position="label*value"
            color={"type"}
            adjust={[
              {
                type: "dodge",
                marginRatio: 1 / 32
              }
            ]}
          />
        </Chart>
      </Card>
    );
  }
}
export default Line;