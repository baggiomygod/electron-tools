import { ipcMain, dialog } from 'electron'
// import {mergePdfWaterMark, createCvsMask} from '@main/tools/index'
import {addWaterMarkToPdf} from '../../tools/index'
export function pdfWatermark() {
    ipcMain.handle('pdf-watermark', (event, arg) => {
      try {
        addWaterMarkToPdf('12')
      } catch (error) {
        dialog.showErrorBox(
          '错误',
          error
        )
      }
    })
}
  