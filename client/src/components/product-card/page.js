'use client'
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;
const ProductCard = (props) => (
  <Card
    hoverable
    style={{
      width: 240, margin: 24
    }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title={props.item.productName} description={props.item.description} />
  </Card>
);
export default ProductCard;