export default function orderByProps(obj, order) {
  const keysNotInOrder = Object.keys(obj).filter((key) => !order.includes(key));
  return [...order, ...keysNotInOrder.sort()].map((key) => ({ key, value: obj[key] }));
}
