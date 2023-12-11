// Takes in query string, a parameter array, and fills in all "?"s with the parameters.
// This is used to insert user choices and eventually runQueryShowTable with it
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
