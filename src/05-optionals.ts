export const createProduct = (
  id: string | number,
  isNew: boolean,
  stock?: number,
)=> { return { id, stock, isNew } }

const p1 = createProduct('1', true, 10)
console.log(p1) // { id: '1', stock: 10, isNew: true }
