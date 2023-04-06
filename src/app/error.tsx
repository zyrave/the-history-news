'use client';

import axios from 'axios';
import { useEffect } from 'react';

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(error);

    axios.post(`${process.env.APP_URL}/api/error`, {
      message: error.message,
      stack: error.stack
    });
  }, [error]);

  return (
    <>
      <h2 className="text-6xl text-neutral-100 mb-4">
        Oppsie! A goofy bug must have sneaked into our codebase.
      </h2>
      <p>Try again or refresh the page.</p>
    </>
  );
};

export default Error;
