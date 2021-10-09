/**
 * 读取文件的工具方法
 */
import { dialog } from 'electron'

// 打开选择pdf 窗口
export const openDialog = async (fileType: string[]): Promise<any> => {
  const result = await dialog.showOpenDialogSync({
    properties: ['openFile'],
    filters: [
      { name: 'PDF', extensions: [...fileType] },
    ],
  })
  return result
}

// 打开选择文件夹
export const openDialogDir = async (): Promise<any> => {
  const result = await dialog.showOpenDialogSync({
    properties: ['openDirectory'],
  })
  return result
}
