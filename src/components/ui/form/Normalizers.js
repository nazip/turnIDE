export function phoneNormalize(value) {
  if (!value) return value;
  const onlyNums = value.replace(/[^\d]/g, '');
  return `(${onlyNums.slice(0, 3)})
           -${onlyNums.slice(3,6)}
           -${onlyNums.slice(6,8)}
           -${onlyNums.slice(8,onlyNums.length)}`.replace(/[^\S]/g, '')
           .replace(/-[-]/g, '');
}
