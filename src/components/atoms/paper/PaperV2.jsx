export default function PaperV2() {
  return (
    <div
      className='relative flex flex-col justify-center items-center w-[600px] h-auto p-4 box-border'
    >
      <div className='paper-pin absolute left-0 top-0'></div>
      <div className='paper-pin absolute right-0 top-0'></div>
      <div className='paper-pin absolute left-0 bottom-0'></div>
      <div className='paper-pin absolute right-0 bottom-0'></div>
      <div className='mt-[15px]'>
        <div className='flex flex-row'>
          <div className='flex flex-row border-b-2 border-r-2 border-black py-4 w-1/4'>
            <p className='[writing-mode:vertical-lr] rotate-180 text-[10pt] font-bold px-1 text-center'>FORMULIR</p>
            <div className='flex flex-col items-center px-2 w-full'>
              <h4 className='text-[28pt] font-bold'>1770 S</h4>
              <h5 className='text-[9pt] font-bold'>KEMENTRIAN KEUANGAN RI</h5>
              <h5 className='text-[9pt] font-bold'>DIREKTORAT JENDRAL PAJAK</h5>
            </div>
          </div>
          <div className='flex flex-col w-3/5'>
            <div className='flex flex-col gap-2 items-center px-8 border-b-2 border-black'>
              <h4 className='text-[14pt] font-bold'>SPT TAHUNAN</h4>
              <h5 className='text-[11pt] font-bold'>PAJAK PENGHASILAN WAJIB PAJAK ORANG PRIBADI</h5>
            </div>
            <div className='flex flex-col items-start border-b-2 border-black pb-1.5'>
              <h5 className='text-[9pt] font-bold'>BAGI WAJIB PAJAK YANG MEMPUNYAI PENGHASILAN :</h5>
              <ul className='list-disc px-6'>
                <li className='text-[9pt]'>DARI SATU ATAU LEBIH PEMBERI KERJA;</li>
                <li className='text-[9pt]'>DALAM NEGERI LAINYA; DAN/ATAU</li>
                <li className='text-[9pt]'>YANG DIKENAKAN PPh FINAL DAN/ATAU BERSIFAT FINAL.</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-row border-b-2 border-l-2 border-black py-4 w-[15%]'>
            <p className='[writing-mode:vertical-lr] rotate-180 text-[10pt] font-bold px-1 text-center'>TAHUN PAJAK</p>
            <div className='flex flex-col items-start gap-7 w-full'>
              <div className='flex flex-row w-full'>
                <div className='border-slim text-[24pt] w-1/4 text-center font-bold'>
                  2
                </div>
                <div className='border-slim text-[24pt] w-1/4 text-center font-bold'>
                  0
                </div>
                <div className='border-slim text-[24pt] w-1/4 text-center font-bold'>

                </div>
                <div className='border-slim text-[24pt] w-1/4 text-center font-bold'>

                </div>
              </div>
              <div className='flex flex-row items-center gap-1 w-full'>
                <div className='border-2 border-black w-[15%] h-[20px]'></div>
                <h5 className='text-[8pt] font-bold'>SPT PEMBETULAN KE - ...</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center px-6 gap-notice w-full'>
          <div className='flex flex-row items-center gap-2'>
            <h5 className='text-[8pt] font-bold'>PERHATIAN</h5>
            <span className='text-[10pt]'>&#8226;</span>
            <h6 className='text-[5pt]'>SEBELUM MENGISI BACA DAHULU PETUNJUK PENGISIAN</h6>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <span className='text-[10pt]'>&#8226;</span>
            <h6 className='text-[5pt]'>ISI DENGAN HURUF CETAK /DIKETIK DENGAN TINTA HITAM</h6>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <span className='text-[10pt]'>&#8226;</span>
            <div className='flex flex-row items-center gap-2'>
              <h6 className='text-[5pt]'>BERI TANDA &quot;X&quot; PADA</h6>
              <div className='border-2 border-black w-[30px] h-[30px]'></div>
              <h6 className='text-[5pt]'>(KOTAK PILIHAN) YANG SESUAI</h6>
            </div>
          </div>
        </div>
        <div className='flex flex-row border-2 border-black'>
          <p className='[writing-mode:vertical-lr] rotate-180 text-[9pt] font-bold px-1 text-center py-12 border-l-2 border-black'>IDENTITAS</p>
          <div className='flex flex-col'>
            <div className='p-1.5'>
              <table>
                <tbody>
                <tr>
                  <td className='text-[8pt]'>NPWP</td>
                  <td className='text-[8pt]'>:</td>
                  <td className='text-[8pt]'>
                    62.166.466.6-665.666
                  </td>
                </tr>
                <tr>
                  <td className='text-[8pt]'>NAMA WAJIB PAJAK</td>
                  <td className='text-[8pt]'>:</td>
                  <td className='text-[8pt]'>
                    MOANALISA
                  </td>
                </tr>
                <tr>
                  <td className='text-[8pt]'>PEKERJAAN</td>
                  <td className='text-[8pt]'>:</td>
                  <td className='flex flex-row gap-8'>
                    <h6 className='text-[8pt]'>KARYAWAN</h6>
                    <div className='flex flex-row'>
                      <div className='w-[66px] h-[22px] text-[8pt] text-center'>KLU : 990000</div>
                    </div>
                  </td>
                </tr>
                <tr>
                <td className='text-[8pt]'>NO.TELEPON</td>
                  <td className='text-[8pt]'>:</td>
                  <td className='flex flex-row'>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='w-[22px] h-[22px] text-[8pt] text-center'>-</div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='w-[110px] h-[22px] text-[8pt] text-center'>NO. FAKS :</div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='w-[22px] h-[22px] text-[8pt] text-center'>-</div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6 className='text-[8pt] w-[145px] text-wrap'>STATUS KEWAJIBAN PERPAJAKAN SUAMI-ISTERI</h6>
                  </td>
                  <td className='text-[8pt]'>:</td>
                  <td className='flex flex-row items-center'>
                    <div className='border-2 border-black w-[22px] h-[22px]'></div>
                    <div className='w-[22px] h-[22px] text-[8pt] text-center pt-0.5'>KK</div>
                    <div className='w-[22px] h-[22px]'></div>
                    <div className='border-2 border-black w-[22px] h-[22px]'></div>
                    <div className='w-[22px] h-[22px] text-[8pt] text-center pt-0.5'>HB</div>
                    <div className='w-[22px] h-[22px]'></div>
                    <div className='border-2 border-black w-[22px] h-[22px]'></div>
                    <div className='w-[22px] h-[22px] text-[8pt] text-center pt-0.5'>PH</div>
                    <div className='w-[22px] h-[22px]'></div>
                    <div className='border-2 border-black w-[22px] h-[22px]'></div>
                    <div className='w-[22px] h-[22px] text-[8pt] text-center pt-0.5'>MT</div>
                    <div className='w-[22px] h-[22px]'></div>
                  </td>
                </tr>
                <tr>
                  <td className='text-[8pt]'>NPWP ISTERI / SUAMI</td>
                  <td className='text-[8pt]'>:</td>
                  <td className='flex flex-row'>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className='flex flex-col items-center px-4 border-t-2 border-black'>
              <h6 className='text-[10pt] font-bold'>
                Permohonan perubahan data disampaikan terpisah dari pelaporan SPT Tahunan PPh Orang Pribadi ini, dengan
                menggunakan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h6>
              <h6 className='text-[10pt] font-bold'>Formulir Perubahan Data Wajib Pajak dan dilengkapi dokumen yang
                disyaratkan.</h6>
            </div>
          </div>
        </div>
        <div className='w-full h-[5px]'></div>
        <div className='flex flex-row border-slim'>
          <div className='flex flex-col'>
            <div className='flex flex-row items-center'>
              <div className='text-[7pt] w-full min-w-[628px] pl-2 border-super-slim-b py-thin'>*) Pengisian kolom-kolom
                yang berisi nilai
                rupiah harus tanpa nilai desimal (contoh penulisan lihat petunjuk pengisian halaman 3)
              </div>
              <div
                className='text-[9pt] font-bold w-full border-super-slim-l border-super-slim-b text-center min-w-[250px]'>RUPIAH
                *)
              </div>
            </div>
            <div className='flex flex-row items-center border-b border-black'>
              <p
                className='[writing-mode:vertical-lr] rotate-180 text-[8pt] font-bold px-3 text-center'>A.
                PENGHASILAN
                NETO</p>
              <div className='w-full min-w-[589px] border-super-slim-l flex flex-col gap-0.5'>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 pt-2 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>1</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        PENGHASILAN NETO DALAM NEGERI SEHUBUNGAN DENGAN
                        PEKERJAAN &nbsp;&nbsp;&nbsp;&nbsp;....................................................
                      </h6>
                      <h5 className='text-[6pt]'>
                        [Diisi akumulasi jumlah penghasilan neto pada setiap Formulir 1721-A1 dan/atau 1721-A2 angka 14
                        yang dilampirkan atau Bukti Potong Lain]
                      </h5>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>1</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>2</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        PENGHASILAN NETO DALAM NEGERI
                        LAINYA &nbsp;&nbsp;&nbsp;&nbsp;.......................................................................................................
                      </h6>
                      <h5 className='text-[6pt]'>
                        [Diisi sesuai Formulir 1770 S-I Jumlah Bagian A ]
                      </h5>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>2</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 py-1 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>3</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        PENGHASILAN NETO LUAR
                        NEGERI&nbsp;&nbsp;&nbsp;&nbsp;.........................................................................................................................
                      </h6>
                      <h5 className='text-[6pt]'>
                        [Apabila memiliki penghasilan dari luar negeri agar diisi dari Lampiran Tersendiri, lihat
                        petunjuk
                        pengisian]
                      </h5>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>3</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 py-1 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>4</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        JUMLAH PENGHASILAN NETO
                        (1+2+3) &nbsp;&nbsp;&nbsp;&nbsp;....................................................................................................................
                      </h6>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>4</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 py-1 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>5</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        ZAKAT/SUMBANGAN KEAGAMAAN YANG SIFATNYA
                        WAJIB &nbsp;&nbsp;&nbsp;&nbsp;..................................................................................
                      </h6>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>5</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 py-1 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>6</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        JUMLAH PENGHASILAN NETO SETELAH PENGURANGAN ZAKAT /SUMBANGAN KEAGAMAAN YANG SIFATNYA WAJIB (4-5)
                      </h6>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>6</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center border-b border-black'>
              <p
                className='[writing-mode:vertical-lr] rotate-180 text-[8pt] font-bold px-1 py-1 text-center text-wrap border-super-slim-l'>
                KENA PAJAK <br/> B. PENGHASILAN
              </p>
              <div className='w-full min-w-[589px] flex flex-col gap-0.5'>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 pt-2 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>7</h6>
                    <div className='flex flex-row gap-4 items-start'>
                      <h6 className='text-[8pt]'>
                        PENGHASILAN TIDAK KENA PAJAK
                      </h6>
                      <div className='flex flex-row items-start gap-0.5'>
                        <h6 className='text-[8pt]'>TK</h6>
                        <h6 className='text-[8pt]'>/</h6>
                        <div className='text-[8pt] w-[22px] h-[22px] border-super-slim mt-[-5px]'></div>
                      </div>
                      <div className='flex flex-row items-start gap-0.5'>
                        <h6 className='text-[8pt]'>K</h6>
                        <h6 className='text-[8pt]'>/</h6>
                        <div className='text-[8pt] w-[22px] h-[22px] border-super-slim mt-[-5px]'></div>
                      </div>
                      <div className='flex flex-row items-start gap-0.5'>
                        <h6 className='text-[8pt]'>K</h6>
                        <h6 className='text-[8pt]'>/</h6>
                        <h6 className='text-[8pt]'>I</h6>
                        <h6 className='text-[8pt]'>/</h6>
                        <div className='text-[8pt] w-[22px] h-[22px] border-super-slim mt-[-5px]'></div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>7</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>8</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        PENGHASILAN KENA PAJAK
                        (6-7) &nbsp;&nbsp;&nbsp;&nbsp;............................................................................................................................
                      </h6>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>8</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center border-b border-black'>
              <p
                className='[writing-mode:vertical-lr] rotate-180 text-[8pt] font-bold px-3 text-center'>
                C. PPh TERUTANG
              </p>
              <div className='w-full min-w-[589px] border-super-slim-l flex flex-col gap-0.5'>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 pt-2 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>9</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        PPh TERUTANG (TARIF PASAL 17 UU PPh x ANGKA
                        8) &nbsp;&nbsp;&nbsp;&nbsp;....................................................
                      </h6>
                      <h5 className='text-[6pt]'>
                        [Bagi Wajib Pajak dengan status PH atau MT diisi dari Lampiran Perhitungan PPh Terutang
                        sebagaimana dimaksud dalam bagian G: Lampiran huruf d]
                      </h5>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>9</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 py-1 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>10</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        PENGEMBALIAN / PENGURANGAN PPh PASAL 24 YANG TELAH
                        DIKREDITKAN &nbsp;&nbsp;&nbsp;&nbsp;....................................
                      </h6>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>10</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 py-1 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>11</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        JUMLAH PPh TERUTANG
                        (9+10) &nbsp;&nbsp;&nbsp;&nbsp;..................................................................................
                      </h6>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>11</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center border-b border-black'>
              <p
                className='[writing-mode:vertical-lr] rotate-180 text-[8pt] font-bold px-3 text-center'>
                D. KREDIT PAJAK
              </p>
              <div className='w-full min-w-[589px] border-super-slim-l flex flex-col gap-0.5'>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 pt-2 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>12</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        PPh YANG DIPOTONG/DIPUNGUT PIHAK LAIN/DITANGGUNGKAN PEMERINTAH DAN/ATAU KREDIT PAJAK LUAR NEGERI
                        DAN/ATAU TERUTANG DI LUAR NEGERI [Diisi dari Formulir 1770 S-I Jumlah Bagian C Kolom (7)]
                      </h6>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>12</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 py-1 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>13</h6>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='flex flex-col gap-2'>
                        <div className='flex flex-row gap-4'>
                          <div className='flex flex-row gap-2'>
                            <h6 className='text-[8pt]'>a.</h6>
                            <div className='w-[30px] h-[20px] border-slim'></div>
                          </div>
                        </div>
                        <div className='flex flex-row gap-4'>
                          <div className='flex flex-row gap-2'>
                            <h6 className='text-[8pt]'>b.</h6>
                            <div className='w-[30px] h-[20px] border-slim'></div>
                          </div>
                        </div>
                      </div>
                      <div className='flex flex-col items-start'>
                        <h6 className='text-[8pt]'>PPh YANG HARUS DIBAYAR SENDIRI</h6>
                        <div className='flex flex-row gap-2 items-center'>
                          <div className='border-super-slim w-[230px]'></div>
                          <h6 className='text-[8pt]'>(11-12)</h6>
                        </div>
                        <h6 className='text-[8pt]'>PPh YANG LEBIH DIPOTONG/DIPUNGUT</h6>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>13</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 py-1 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>14</h6>
                    <div className='flex flex-row items-start gap-2'>
                      <h6 className='text-[8pt] w-[150px]'>
                        PPh YANG DIBAYAR SENDIRI
                      </h6>
                      <div className='flex flex-col gap-2 mt-[-7px]'>
                        <div className='flex flex-row items-center'>
                          <div className='flex flex-row items-start gap-2 w-[401.59px]'>
                            <h6 className='text-[8pt]'>a.</h6>
                            <div className='flex flex-col'>
                              <h6 className='text-[8pt]'>
                                PPh PASAL 25
                              </h6>
                            </div>
                          </div>
                          <div className='flex flex-row'>
                            <div className='border-2 border-black w-[25px] h-[30px] text-xs text-center'>14a</div>
                            <div
                              className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                          </div>
                        </div>
                        <div className='flex flex-row items-center'>
                          <div className='flex flex-row items-start gap-2 w-[401.59px]'>
                            <h6 className='text-[8pt]'>a.</h6>
                            <div className='flex flex-col'>
                              <h6 className='text-[8pt]'>
                                STP PPh PASAL 25 (Hanya Pokok Pajak)
                              </h6>
                            </div>
                          </div>
                          <div className='flex flex-row'>
                            <div className='border-2 border-black w-[25px] h-[30px] text-xs text-center'>14b</div>
                            <div
                              className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 pt-2 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>15</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        JUMLAH KREDIT PAJAK (14a + 14b)
                      </h6>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>15</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center border-b border-black'>
              <p
                className='[writing-mode:vertical-lr] rotate-180 text-[8pt] font-bold px-3 text-center'>
                E. PPh KURANG/LEBIH BAYAR
              </p>
              <div className='w-full min-w-[589px] border-super-slim-l flex flex-col gap-0.5 py-6'>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 py-1 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>16</h6>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='flex flex-row items-center gap-4'>
                        <div className='flex flex-col items-start gap-0.5'>
                          <div className='flex flex-row gap-2'>
                            <div className='w-[30px] h-[20px] border-slim'></div>
                            <h6 className='text-[8pt]'>a. PPh YANG KURANG DIBAYAR (PPh PASAL 29)</h6>
                          </div>
                          <div className='flex flex-row gap-4 pl-10'>
                            <div className='flex flex-row gap-8 items-center'>
                              <div className='border-super-slim w-[250px]'></div>
                            </div>
                          </div>
                          <div className='flex flex-row gap-2'>
                            <div className='w-[30px] h-[20px] border-slim'></div>
                            <h6 className='text-[8pt]'>b. PPh YANG LEBIH DIBAYAR (PPh PASAL 28 A)</h6>
                          </div>
                        </div>
                        <div className='flex flex-row'>
                          <h6 className='text-[8pt]'>(13-15)</h6>
                        </div>
                        <div className='flex flex-row mt-[-25px]'>
                          <div className='flex flex-col gap-4'>
                            <h6 className='text-[8pt] text-center'>TGL LUNAS</h6>
                            <div className='flex flex-row gap-4'>
                              <div className='flex flex-col items-center gap-0.5'>
                                <div className='flex flex-row'>
                                  <div className='text-[8pt] w-[22px] h-[22px] border-super-slim mt-[-5px]'></div>
                                  <div className='text-[8pt] w-[22px] h-[22px] border-super-slim mt-[-5px]'></div>
                                </div>
                                <h6 className='text-[8pt]'>TGL</h6>
                              </div>
                              <div className='flex flex-col items-center gap-0.5'>
                                <div className='flex flex-row'>
                                  <div className='text-[8pt] w-[22px] h-[22px] border-super-slim mt-[-5px]'></div>
                                  <div className='text-[8pt] w-[22px] h-[22px] border-super-slim mt-[-5px]'></div>
                                </div>
                                <h6 className='text-[8pt]'>BLN</h6>
                              </div>
                              <div className='flex flex-col items-center gap-0.5'>
                                <div className='flex flex-row'>
                                  <div className='text-[8pt] w-[22px] h-[22px] border-super-slim mt-[-5px]'></div>
                                  <div className='text-[8pt] w-[22px] h-[22px] border-super-slim mt-[-5px]'></div>
                                </div>
                                <h6 className='text-[8pt]'>THN</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[50px] flex flex-row items-center'>
                      <span>16</span>
                    </div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[50px] text-center'></div>
                  </div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 pt-2 pr-2'>
                    <h6 className='text-[8pt]'>17</h6>
                    <div className='flex flex-col gap-2'>
                      <h6 className='text-[8pt]'>
                        PERMOHONONAN : PPh Lebih Bayar pada 16b mohon :
                      </h6>
                      <div className='flex flex-row gap-8'>
                        <div className='flex flex-col gap-2'>
                          <div className='flex flex-row items-center gap-2'>
                            <h6 className='text-[8pt]'>a.</h6>
                            <div className='flex flex-row items-end gap-2'>
                              <div className='w-[30px] h-[20px] border-slim'></div>
                              <h6 className='text-[8pt]'>DIRESTITUSIKAN</h6>
                            </div>
                          </div>
                          <div className='flex flex-row items-center gap-2'>
                            <h6 className='text-[8pt]'>b.</h6>
                            <div className='flex flex-row items-end gap-2'>
                              <div className='w-[30px] h-[20px] border-slim bg-black'></div>
                              <h6 className='text-[8pt] w-[140px] mb-[-20px]'>DIPERHITUNGKAN DENGAN UTANG PAJAK</h6>
                            </div>
                          </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <div className='flex flex-row items-center gap-2'>
                            <h6 className='text-[8pt]'>c.</h6>
                            <div className='flex flex-row items-end gap-2'>
                              <div className='w-[30px] h-[20px] border-slim'></div>
                              <h6 className='text-[8pt]'>DIKEMBALIKAN DENGAN SKPPKP PASAL 17C (WP dengan Kriteria
                                Tertentu)</h6>
                            </div>
                          </div>
                          <div className='flex flex-row items-center gap-2'>
                            <h6 className='text-[8pt]'>d.</h6>
                            <div className='flex flex-row items-end gap-2'>
                              <div className='w-[30px] h-[20px] border-slim'></div>
                              <h6 className='text-[8pt]'>DIKEMBALIKAN DENGAN SKKPP PASAL 17D (WP yang Memenuhi
                                Persyaratan Tertentu)</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center border-b border-black'>
              <p
                className='[writing-mode:vertical-lr] rotate-180 text-[5.35pt] font-bold px-1 py-1 text-center text-wrap border-super-slim-l h-[120px]'>
                PAJAK BERIKUTNYA<br/> PASAL 25 TAHUN <br/> F. ANGSURAN PPh
              </p>
              <div className='w-full min-w-[589px] flex flex-col gap-0.5 py-2'>
                <div className='flex flex-row items-center gap-1'>
                  <div className='flex flex-row items-start gap-2 pl-2 pr-2 w-[583.59px]'>
                    <h6 className='text-[8pt]'>18</h6>
                    <div className='flex flex-col'>
                      <h6 className='text-[8pt]'>
                        ANGSURAN PPh PASAL 25 TAHUN PAJAK BERIKUTNYA SEBESAR
                        (6-7) &nbsp;&nbsp;&nbsp;&nbsp;..............................................
                      </h6>
                    </div>
                  </div>
                  <div className='flex flex-row'>
                    <div className='border-2 border-black w-[25px] h-[30px] text-center'>18</div>
                    <div className='border-super-slim-t border-super-slim-b w-[231px] h-[30px] text-center'></div>
                  </div>
                </div>
                <div className='flex flex-col gap-2 pl-2 pr-2 w-[583.59px]'>
                  <h6 className='text-[8pt]'>DIHITUNG BERDASARKAN : </h6>
                  <div className='flex flex-row items-center gap-2'>
                    <h6 className='text-[8pt]'>a.</h6>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='w-[30px] h-[20px] border-slim'></div>
                      <h6 className='text-[8pt]'>1/12 X JUMLAH PADA ANGKA 13</h6>
                    </div>
                  </div>
                  <div className='flex flex-row items-center gap-2'>
                    <h6 className='text-[8pt]'>b.</h6>
                    <div className='flex flex-row items-center gap-2'>
                      <div className='w-[30px] h-[20px] border-slim'></div>
                      <h6 className='text-[8pt] '>PERHITUNGAN DALAM LAMPIRAN TERSENDIRI</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center border-b border-black'>
              <p
                className='[writing-mode:vertical-lr] rotate-180 text-[8pt] font-bold px-3  border-super-slim-l text-center h-[100px]'>
                G. LAMPIRAN
              </p>
              <div className='w-full min-w-[589px] flex flex-col gap-0.5 py-2'>
                <div className='flex flex-row gap-8 pl-2 pr-2'>
                  <div className='flex flex-col gap-0.5'>
                    <div className='flex flex-row items-center gap-2 w-full'>
                      <h6 className='text-[8pt]'>a.</h6>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='w-[30px] h-[20px] border-slim'></div>
                        <h6 className='text-[8pt]'>Fotokopi Formulir 1721-A1 atau 1721-A2 atau Bukti Potong PPh Pasal
                          21</h6>
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <h6 className='text-[8pt]'>b.</h6>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='w-[30px] h-[20px] border-slim'></div>
                        <h6 className='text-[8pt] '>Surat Setoran Pajak Lembar Ke-3 PPh Pasal 29</h6>
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <h6 className='text-[8pt]'>c.</h6>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='w-[30px] h-[20px] border-slim'></div>
                        <h6 className='text-[8pt] '>Surat Kuasa Khusus (Bila dikuasakan)</h6>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-0.5'>
                    <div className='flex flex-row items-center gap-2'>
                      <h6 className='text-[8pt]'>d.</h6>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='w-[30px] h-[20px] border-slim'></div>
                        <h6 className='text-[8pt]'>Perhitungan PPh Terutang bagi Wajib Pajak dengan status perpajakan PH atau MT</h6>
                      </div>
                    </div>
                    <div className='flex flex-row items-center gap-2'>
                      <h6 className='text-[8pt]'>e.</h6>
                      <div className='flex flex-row items-center gap-2'>
                        <div className='w-[30px] h-[20px] border-slim'></div>
                        <h6 className='text-[8pt] '>........................................................................................</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center w-full py-1 border-slim'>
          <div className='flex flex-col gap-2'>
            <h6 className='text-[10pt] font-bold text-center w-full bg-gray-300'>PERNYATAAN</h6>
            <div className='flex flex-row gap-4 items-start'>
              <div className='flex flex-col gap-4 w-3/5'>
                <h6 className='text-[8pt] font-bold p-1'>
                  Dengan menyadari sepenuhnya akan segala akibatnya termasuk sanksi-sanksi sesuai dengan ketentuan
                  peraturan perundang-undangan yang berlaku, saya menyatakan bahwa yang telah beritahukan diatas beserta
                  lampiran-lampiranya adalah benar, lengkap dan jelas.
                </h6>
                <div className='flex flex-row gap-4 px-4'>
                  <div className='flex flex-row gap-0.5 items-center'>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <h4 className='text-[9pt]'>WAJIB PAJAK</h4>
                  </div>
                  <div className='flex flex-row gap-0.5 items-center'>
                    <div className='border-super-slim w-[22px] h-[22px]'></div>
                    <h4 className='text-[9pt]'>KUASA</h4>
                  </div>
                  <div className='flex flex-row gap-4 items-center'>
                    <h4 className='text-[9pt]'>TANGGAL</h4>
                    <div className='flex flex-col items-center gap-0.5'>
                      <div className='flex flex-row'>
                        <div className='border-super-slim w-[22px] h-[22px]'></div>
                        <div className='border-super-slim w-[22px] h-[22px]'></div>
                      </div>
                      <h6 className='text-[8pt]'>TGL</h6>
                    </div>
                    <div className='flex flex-col items-center gap-0.5'>
                      <div className='flex flex-row'>
                        <div className='border-super-slim w-[22px] h-[22px]'></div>
                        <div className='border-super-slim w-[22px] h-[22px]'></div>
                      </div>
                      <h6 className='text-[8pt]'>BLN</h6>
                    </div>
                    <div className='flex flex-col items-center gap-0.5'>
                      <div className='flex flex-row'>
                        <div className='border-super-slim w-[22px] h-[22px]'></div>
                        <div className='border-super-slim w-[22px] h-[22px]'></div>
                        <div className='border-super-slim w-[22px] h-[22px]'></div>
                        <div className='border-super-slim w-[22px] h-[22px]'></div>
                      </div>
                      <h6 className='text-[8pt]'>THN</h6>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row'>
                  <div className='p-1.5'>
                    <table>
                      <tbody>
                      <tr>
                        <td className='text-[8pt]'>NAMA LENGKAP</td>
                        <td className='text-[8pt]'>:</td>
                        <td className='flex flex-row'>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                        </td>
                      </tr>
                      <tr>
                        <td className='text-[8pt]'>NPWP</td>
                        <td className='text-[8pt]'>:</td>
                        <td className='flex flex-row'>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                          <div className='border-super-slim w-[22px] h-[22px]'></div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='flex flex-col gap-4 w-2/5 px-4 py-2'>
                <h4 className='text-[9pt] font-bold text-center'>TANDA TANGAN</h4>
                <div className='w-full h-[130px] border-slim'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
