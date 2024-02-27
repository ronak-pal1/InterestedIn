const toURL = (query) => {
  const encodedQuery = encodeURIComponent(query);

  const url = `https://3deulgf1.api.sanity.io/v2022-03-07/data/query/production?query=${encodedQuery}`;

  return url;
};

export default toURL;
