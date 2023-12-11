function fillQueryWithParams(query, paramsArray) {
  let formattedQuery = query;
  for (const param of paramsArray) {
    formattedQuery = formattedQuery.replace(
      "?",
      typeof param === "string" ? `"${param}"` : param
    );
  }
  return formattedQuery;
}

module.exports = fillQueryWithParams;
