export const dataPluto = {
  operators: [
    {
      id: 1,
      name: 'John Doe',
      boxAssigned: 10,
    }
  ],
  boxScanner: {
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
            id: 1,
            src: '/moanalisa/form-1770-s-moanalisa.png',
            label: 'Form 1770 S'
          },
          {
            id: 2,
            src: '/moanalisa/lampiran-1-moanalisa.png',
            label: 'Lampiran 1'
          },
          {
            id: 3,
            src: '/moanalisa/lampiran-2-moanalisa.png',
            label: 'Lampiran 2'
          },
          {
            id: 4,
            src: '/moanalisa/perhitungan-ph-mt.png',
            label: 'Perhitungan PH MT'
          }
        ],
        rejectedReason: {
          option: '',
          text: '',
          state: ''
        }
      },
      {
        id: 2,
        code: 'Kode 3882',
        name: 'WP John Doe',
        taxIdNumber: '62.126.426.2-265.266',
        attachments: [
          {
            id: 1,
            src: '/moanalisa/form-1770-s-moanalisa.png',
            label: 'Form 1770 S'
          },
          {
            id: 2,
            src: '',
            label: 'Lampiran 1'
          },
          {
            id: 3,
            src: '/moanalisa/lampiran-2-moanalisa.png',
            label: 'Lampiran 2'
          },
          {
            id: 4,
            src: '/moanalisa/perhitungan-ph-mt.png',
            label: 'Perhitungan PH MT'
          }
        ],
        rejectedReason: {
          option: '',
          text: '',
          state: ''
        }
      },
      {
        id: 3,
        code: 'Kode 3883',
        name: 'WP Roy',
        taxIdNumber: '62.136.436.3-365.366',
        attachments: [
          {
            id: 1,
            src: '/moanalisa/form-1770-s-moanalisa.png',
            label: 'Form 1770 S'
          },
          {
            id: 2,
            src: '/moanalisa/lampiran-1-moanalisa.png',
            label: 'Lampiran 1'
          },
          {
            id: 3,
            src: '',
            label: 'Lampiran 2'
          },
          {
            id: 4,
            src: '/moanalisa/perhitungan-ph-mt.png',
            label: 'Perhitungan PH MT'
          }
        ],
        rejectedReason: {
          option: '',
          text: '',
          state: ''
        }
      },
      {
        id: 4,
        code: 'Kode 3884',
        name: 'WP Ruslan',
        taxIdNumber: '62.136.437.3-375.377',
        attachments: [
          {
            id: 1,
            src: '/moanalisa/form-1770-s-moanalisa.png',
            label: 'Form 1770 S'
          },
          {
            id: 2,
            src: '',
            label: 'Lampiran 1'
          },
          {
            id: 3,
            src: '',
            label: 'Lampiran 2'
          },
          {
            id: 4,
            src: '',
            label: 'Perhitungan PH MT'
          }
        ],
        rejectedReason: {
          option: '',
          text: '',
          state: ''
        }
      }
    ]
  }
}
