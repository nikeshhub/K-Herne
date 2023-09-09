import React from 'react';
import { Card, Typography, Rate } from 'antd';

const { Meta } = Card;
const { Title, Text } = Typography;

const MovieCard = (props) => {
  const {
    title,
    release_date,
    vote_average,
    vote_count,
    poster_path,
  } = props;

  return (
    <Card
      hoverable
      style={{ width: 330 }}
      cover={<img alt={title} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />}
    >
      <Meta title={title} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <Title level={5}>Release </Title>
          <Text>{release_date}</Text>
        </div>
        <div>
          <Title level={5}>Rating</Title>
          <Rate allowHalf disabled defaultValue={vote_average / 2} />
          <Text>({vote_count} <br></br>votes)</Text>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
