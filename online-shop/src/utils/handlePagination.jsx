export default function handlePagination(results, page, resultsPerPage){
    if(!results.length) return [];

    const end = page * resultsPerPage;
    const start = end - resultsPerPage;
    const sortedResults = results.slice(start, end);

    return sortedResults;
}