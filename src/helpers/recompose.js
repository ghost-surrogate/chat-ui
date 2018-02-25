
// Convert
export default function recompose(obj) {
  return Object.keys(obj).map(id => obj[id]);
}