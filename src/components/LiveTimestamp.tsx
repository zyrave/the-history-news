'use client';

import TimeAgo from 'react-timeago';

type Props = {
  date: string;
};

const LiveTimestamp = ({ date }: Props) => <TimeAgo date={date} />;

export default LiveTimestamp;
