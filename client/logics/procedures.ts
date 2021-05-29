import groupBy from 'lodash/groupBy'

export function normalizeProcedureParams (procedure) {
  const {
    name,
    price,
    duration,
    category,
    description
  } = procedure

  return {
    name,
    price: Number(price),
    duration,
    categoryId: null,
    ...(category && { categoryId: category.id }),
    description
  }
}

export function normalizeCategories (categories, procedures) {
  const grouped = groupByCategoryId(procedures)

  return [
    ...categories.map(category => {
      return {
        ...category,
        procedures: grouped[category.id] ?? []
      }
    }),

    {
      name: 'Без категории',
      procedures: grouped[0] ?? []
    }
  ]
}

export function groupByCategoryId (procedures) {
  return groupBy(procedures, getCategory)
}

export function getCategory ({ category, categoryId }) {
  if (categoryId) {
    return categoryId
  }

  if (category) {
    return category.id
  }

  return 0
}