export const manageDashboardDataTable = [
  { id: 1, title: 'Status Anggota', description: 'description', priority: '1', role: 'admin' },
  { id: 2, title: 'List Anggota', description: 'description', priority: '1', role: 'admin produk' },
]

export const manageMemberHistoryTable = [
  {
    id: 1,
    codeMember: 'LM0019012',
    fullName: 'Budiman Agus',
    gender: 'L',
    businessType: 'Kuliner',
    submissionDate: '2022-12-12',
    reasonRejected: 'description',
    status: 'Ditolak Distributor',
    status_approval: 'bank_confirmation',
    noHp: '098123123123123',
    age: '20',
  },
  {
    id: 2,
    codeMember: 'LM0019012',
    fullName: 'Budiman Agus',
    gender: 'L',
    businessType: 'Kuliner',
    submissionDate: '2022-12-12',
    reasonRejected: 'description',
    status: 'Ditolak Distributor',
    status_approval: 'waiting_approval',
    noHp: '098123123123123',
    age: '20',
  },
]

export const dataUMKM = [
  {
    id: 1,
    nama: 'John',
    telepon: '0987654321',
    jenis_usaha: 'Toko Bangunan',
    nama_usaha: 'Toko Jaya',
    alamat_usaha: 'Jakarta Pusat',
  },
  {
    id: 2,
    nama: 'Smith',
    telepon: '0987654321123',
    jenis_usaha: 'Toko Kelontong',
    nama_usaha: 'Toko Abadi',
    alamat_usaha: 'Jakarta Barat',
  },
]

export const orderTransactionData = [
  {
    id: 1,
    transactionNumber: 'SW01112028392',
    purchaseDate: '30 Okt 2022, 09:41',
    completionDate: '-',
    totalOrder: '2',
    orderer: 'Budi Agusta',
    totalPayment: 'Rp6.400.000',
    status: 'waiting_confirmation',
  },
  {
    id: 2,
    transactionNumber: 'SW01112028392',
    purchaseDate: '30 Okt 2022, 09:41',
    completionDate: '-',
    totalOrder: '2',
    orderer: 'Budi Agusta',
    totalPayment: 'Rp6.400.000',
    status: 'order_processed',
  },
  {
    id: 3,
    transactionNumber: 'SW01112028392',
    purchaseDate: '30 Okt 2022, 09:41',
    completionDate: '-',
    totalOrder: '2',
    orderer: 'Budi Agusta',
    totalPayment: 'Rp6.400.000',
    status: 'in_delivery',
  },
  {
    id: 4,
    transactionNumber: 'SW01112028392',
    purchaseDate: '30 Okt 2022, 09:41',
    completionDate: '-',
    totalOrder: '2',
    orderer: 'Budi Agusta',
    totalPayment: 'Rp6.400.000',
    status: 'canceled_distributor',
  },
  {
    id: 5,
    transactionNumber: 'SW01112028392',
    purchaseDate: '30 Okt 2022, 09:41',
    completionDate: '-',
    totalOrder: '2',
    orderer: 'Budi Agusta',
    totalPayment: 'Rp6.400.000',
    status: 'canceled_system',
  },
  {
    id: 6,
    transactionNumber: 'SW01112028392',
    purchaseDate: '30 Okt 2022, 09:41',
    completionDate: '-',
    totalOrder: '2',
    orderer: 'Budi Agusta',
    totalPayment: 'Rp6.400.000',
    status: 'done',
  },
]

export default { manageDashboardDataTable, dataUMKM, orderTransactionData }
