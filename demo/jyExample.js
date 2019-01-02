/* eslint-disable no-nested-ternary,no-restricted-syntax,prefer-const,no-plusplus,max-len */
import React, { Component } from 'react';
import { render, Text, Document, Hr, Table } from '../src/index';
import { TitleStyle, SubTitleStyle, HrStyle, OneTitleStyle, TableHeaderStyle, TableBodyStyle, TextStyle } from './jyStyles';

const { values, entries } = Object;

/**
 * 表格
 * @param props
 * @returns {*}
 * @constructor
 */
function TableComponent(props) {
  const { headers, data } = props;
  const headerDatas = [];
  // 设置表头样式
  headers.forEach((item) => {
    const header = {};
    header.value = item;
    header.styles = TableHeaderStyle;
    headerDatas.push(header);
  });
  return (
    <Table headers={headerDatas} data={data} style={TableBodyStyle}/>
  );
}


// 时间数据
const dateData = { year: 2018,
  month: 1,
  day: 10,
  issue: 1
};

// 表格1数据
const table1Headers = ['监控名称', '余额', '比上日', '比上月', '比年初', '年增幅'];
const table1Data = [['人民币', '1000.00', '1000.00', '1000.00', '1000.00', '1000.00']];

// 贷款汇总
const lnBal = { sz: 100, pj: -100, gr: 0 };

// 净增Top5
const lnAddTop5 = [{ name: '大连', value: '30' },
  { name: '湖南省', value: '15.24' },
  { name: '厦门', value: '9.26' },
  { name: '湖北省', value: '7.05' },
  { name: '河南省', value: '7.04' }];

// 回落Top5
const lnReduceTop5 = [{ name: '上海市', value: '-12.1' },
  { name: '江西省', value: '-11.74' },
  { name: '山东省', value: '-9.26' },
  { name: '天津市', value: '-7.05' },
  { name: '陕西省', value: '-7.04' }];

// 表格2
const table2Headers = [{ value: '省', styles: { ...TableHeaderStyle } },
  { value: '客户', styles: { ...TableHeaderStyle } },
  { value: '金额', styles: { ...TableHeaderStyle } },
  { value: '行业', styles: { ...TableHeaderStyle } }];
let table2Data = [['湖南省', '张三', '1000.00', '互联网']];

const lnTrade = { count: 3000, amt: 189.12, count5000: 15 };

class MyDocument extends Component {
  // 副标题
  subTitle() {
    const { date } = this.props;
    // 生成填充空格
    const tab = ' '.repeat(60);
    // 生成文本
    return `${date.year}年${date.month}月${date.day}日${tab}第${date.issue}期`;
  }

  // 一级标题1
  oneTitle1() {
    const { date } = this.props;
    return `一、${date.month}月${date.day}日境内机构数据摘要：`;
  }

  // 名字和金额映射
  nameAndValue(topValue) {
    let str = '';
    topValue.forEach((item) => {
      if (str === '') {
        str = `${item.name}(${(item.value >= 0) ? `+${item.value}` : `${item.value}`})`;
      } else {
        str = `${str}、${item.name}(${(item.value >= 0) ? `+${item.value}` : `${item.value}`})`;
      }
    });
    return str;
  }

  // 第一段
  text1() {
    const { date, lnBal, lnAddTop5, lnReduceTop5 } = this.props;

    // 汇总
    let [a, d, r] = [0, 0, 0];
    for (let bal of values(lnBal)) {
      (bal > 0) ? a++ : (bal === 0) ? d++ : r++;
    }
    const numMap = new Map([[1, '一'], [2, '二'], [3, '三']]); // 数字与汉字映射
    let lnTotal = `${(a > 0) ? `${numMap.get(a)}升` : ''}${
      (d > 0) ? `${numMap.get(d)}平` : ''}${
      (r > 0) ? `${numMap.get(r)}降` : ''}`;

    // 各项贷款
    const lnName = new Map([['sz', 'XXXX款'], ['pj', 'XXXX款'], ['gr', 'XXXX款']]);
    for (let [key, bal] of entries(lnBal)) {
      lnTotal = `${lnTotal}，${lnName.get(key)}${
        (bal > 0) ? `增加${bal}亿元` : ''}${
        (bal === 0) ? '持平' : ''}${
        (bal < 0) ? `减少${Math.abs(bal)}亿元` : ''}`;
    }

    let str = `    ${date.month}月${date.day}日,`;
    str = `${str}境内机构XXXX款、XXXX款、XXXX款较上日表现为${lnTotal}。`;
    str = `${str}XXXX款是${this.nameAndValue(lnAddTop5)}，`;
    str = `${str}较上月末回落较多的省分别是${this.nameAndValue(lnReduceTop5)}。`;
    return str;
  }

  // 一级标题2
  oneTitle2() {
    const { date } = this.props;
    return `二、${date.month}月${date.day}日发放情况：`;
  }

  // 第二段
  text2() {
    const { lnTrade } = this.props;
    let str = `    境内累计发放${lnTrade.count}笔，金额${lnTrade.amt}亿元。`;
    str = `${str}5000万元（含）以上发放${lnTrade.count5000}笔，具体见下表。`;
    return str;
  }


  render() {
    return (
      <Document>
        <Text style={ TitleStyle } align="center">交易情况</Text>
        <Text style={ SubTitleStyle } align="center">{this.subTitle()}</Text>
        <Hr/>
        <Text style={ OneTitleStyle }>{this.oneTitle1()}</Text>
        <TableComponent headers={this.props.tableHeaders} data={this.props.tableData}/>
        <Text style={ TextStyle }>{this.text1()}</Text>
        <Text style={ OneTitleStyle }>{this.oneTitle2()}</Text>
        <Text style={ TextStyle }>{this.text2()}</Text>
        <Table headers={this.props.table2Headers} data={this.props.table2Data} style={TableBodyStyle} />
      </Document>
    );
  }
}

render(<MyDocument date={dateData} tableHeaders={table1Headers} tableData={table1Data}
  lnBal={lnBal} lnAddTop5={lnAddTop5} lnReduceTop5={lnReduceTop5}
  lnTrade={lnTrade}
  table2Headers={table2Headers} table2Data={table2Data}/>, `${__dirname}/jy.docx`);

