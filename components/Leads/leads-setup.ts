export const useLeads = () => {
  const { t } = useI18n()
  const visibleCSV = ref(false)
  const isModalImport = ref(false)
  const isModalExport = ref(false)

  const listCSV = ref([
    { label: t('text.importCsv'), icon: 'import' },
    { label: t('text.exportCsv'), icon: 'export' },
  ])

  function onChangeVisibleCSV() {
    visibleCSV.value = !visibleCSV.value
  }

  function onToggleModalImport() {
    isModalImport.value = !isModalImport.value
  }

  function onToggleModalExport() {
    isModalExport.value = !isModalExport.value
  }

  return {
    listCSV,
    visibleCSV,

    isModalImport,
    onToggleModalImport,

    isModalExport,
    onToggleModalExport,

    onChangeVisibleCSV,
  }
}

export default { useLeads }
