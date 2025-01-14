import type {
  treeAddLevelReturnInterface as a,
  dataInterface as b
} from '../_interface'

/**
 * 扁平化树形结构
 * @param data 
 * @returns 
 */
export const treeToFlat = (data: b[]): a[] => {
  const result: a[] = []

  data.forEach((item: b): void => {
    const obj = {
      label: item.label,
      level: item.level,
      show: item.show
    } as a

    result.push(obj)

    if (item.children) {
      result.push(...treeToFlat(item.children))
    }
  })

  return result
}

/**
 * 给 tree 添加 level 层级标注
 * @param tree 
 * @returns 
 */
export const treeAddLevel = (tree: b[]): b[] => {
  if (!Array.isArray(tree)) {
    return []
  }

  const recursive = (array: b[], level = 0): b[] => {
    level++

    return array.map((item: b): b => {
      item.level = level
      item.show = level === 1 ? true : false

      const child: b[] = item.children as b[]

      if (child && child.length) {
        recursive(child, level)
      }

      return item
    })
  }

  return recursive(tree)
}
