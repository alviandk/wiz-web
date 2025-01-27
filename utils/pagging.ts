export function generatePageNumber(page: number, maxPage: number) {
  const showPage = Array.from(Array(maxPage < 5 ? maxPage : 5), (_, i) => ({ value: i + 1, text: (i + 1).toString() }))
  if (maxPage > 7) {
    showPage[5] = { value: -1, text: '...' }
    showPage[6] = { value: maxPage, text: maxPage.toString() }

    if (page > 3) {
      showPage[1] = { value: -1, text: '...' }
      showPage[2] = { value: page - 1, text: (page - 1).toString() }
      showPage[3] = { value: page, text: page.toString() }
      showPage[4] = { value: page + 1, text: (page + 1).toString() }
    }

    if ([maxPage, maxPage - 1].includes(page)) {
      showPage[2] = { value: maxPage - 4, text: (maxPage - 4).toString() }
      showPage[3] = { value: maxPage - 3, text: (maxPage - 3).toString() }
      showPage[4] = { value: maxPage - 2, text: (maxPage - 2).toString() }
      showPage[5] = { value: maxPage - 1, text: (maxPage - 1).toString() }
    }
  }

  return showPage
}

export default { generatePageNumber }
