export const boxScanner = {
  id: 1,
  code: 'Box 1234',
  name: 'KPP Bandung Timur',
  documentType: 'Dokumen Pajak 1770 S',
  docs: [
    {
      id: 1,
      code: 'Kode 3881',
      name: 'WP Moanalisa',
      taxIdNumber: '62.166.466.6-665.666',
      attachments: [
        {
          src: '/moanalisa/form-1770-s-moanalisa.png',
          label: 'Form 1770 S'
        },
        {
          src: '/moanalisa/lampiran-1-moanalisa.png',
          label: 'Lampiran 1'
        },
        {
          src: '/moanalisa/lampiran-2-moanalisa.png',
          label: 'Lampiran 2'
        },
        {
          src: '/moanalisa/perhitungan-ph-mt.png',
          label: 'Perhitungan PH MT'
        }
      ]
    },
    {
      id: 2,
      code: 'Kode 3882',
      name: 'WP John Doe',
      taxIdNumber: '62.126.426.2-265.266',
      attachments: [
        {
          src: '',
          label: 'Form 1770 S'
        },
        {
          src: '',
          label: 'Lampiran 1'
        },
        {
          src: '',
          label: 'Lampiran 2'
        },
        {
          src: '',
          label: 'No Label'
        }
      ]
    }
  ]
}
