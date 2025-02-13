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

export const userData = [
  {
    id: 1,
    fullName: 'Canvasser Pertama',
    username: 'canvasserpertama',
    role: 'admin',
    phoneNumber: '6281331631777',
    email: 'canv_pert@wiz.web',
    status: 'active',
  },
  {
    id: 1,
    fullName: 'Alex Hazim',
    username: 'alexhazim',
    role: 'distributor',
    phoneNumber: '6281331631777',
    email: 'admin@wiz.web',
    status: 'non_active',
  },
]

export const roleDataTable = [
  {
    id: '001929',
    roleName: 'Role 1',
    description: 'Lorem Ipsum',
  },
  {
    id: '817383',
    roleName: 'Role 2',
    description: 'Lorem Ipsum',
  },
]

export const productMasterTable = [
  {
    id: 1,
    productCode: '20230323020',
    url: '/images/product.png',
    productName: 'PAKET 1: SEMBAKO',
    productDesc: 'Lorem Ipsum',
    category: 'Kuliner',
    status: 'active',
    productPrice: 'Rp3.200.000',
  },
]

export const productCategoryTable = [
  {
    id: 1,
    initial: 'AP',
    categoryCode: '20230323123',
    categoryName: 'Agribisnis/Peternakan/Pertanian',
    total: 8,
  },
]

export const leadsData = [
  {
    id: 1,
    distributorName: 'Distributor Pertama',
    businessName: 'Warung Sunda Budi',
    fullName: 'Rezky Kurniawan',
    businessAddress: 'Jalan ABC No. 129, Kebayoran Lama, Jakarta Selatan, DKI Jakarta',
    phoneNo: '6281331631888',
    averagesBuy: 'Rp9.378.383',
    averagesBuyMonth: 'Rp28.135.149',
    saldoPlafonRecommendation: 'Rp20.000.000 - Rp50.000.000',
    topOrCash: 'TOP 7 Hari',
    branchDKI: 'KC Balaikota',
  },
]

export const multiDistributorData = [
  {
    id: 1,
    distributorName: 'PDC',
    distributorCode: 'PDC001',
    distributorAddress: 'Jalan ABC No. 129,...',
    phone: '6281331631000',
    email: 'pdc@gmail.com',
    total_umkm: 140,
  },
]
