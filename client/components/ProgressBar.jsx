import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function WithLabelExample(props) {
  const now = Math.round((props.percent.length / 63) * 100, 2);
  return <ProgressBar now={now} label={`${now}%`} />;
}

export default WithLabelExample;
