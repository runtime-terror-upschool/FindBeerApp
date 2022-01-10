export const BASE_URL = 'https://api.punkapi.com/v2';
/* This function takes query as a param and returns the array of beer objects.*/
export const fetchSearchResults = async query => {
if (query && query.length > 0) {
/* replaces all whitespaces in the query with + symbol in order to 
send it as a query param in the GET request */
const parsedQuery = query.replaceAll(' ', '+');
const url = `${BASE_URL}/beers?beer_name=${parsedQuery}`;
const res = await fetch(url);
// .search-container {
// display: flex;
// justify-content: center;
// margin-bottom: 24px;
// }
// .search-container input {
// height: 32px;
// width: 300px;
// padding: 0px 12px 0px 12px;
// }
const resJson = res.json();
return resJson;
} 
else {
return [];
}
};