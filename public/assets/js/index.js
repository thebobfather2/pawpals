const getDogs = () =>
  fetch('/api/dog', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });