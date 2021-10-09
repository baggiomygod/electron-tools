
import * as child_process from 'child_process'
import path from 'path'
// import { v4 as uuidv4 } from 'uuid'

// simplePdfWatermark.exe  -c "#FF0000" -o 0.3 -s 20 -x 180 -y 0 -w "zbd-watermark" -d output.pdf 1.pdf`
export const addWaterMarkToPdf = (targetFile: string, output = '', optionArg?: any[]): Promise<any> => {
      console.log('path', __dirname)
      console.log(123)
  const defaultOptions = [
    '-c',
    '#000000',
    '-s',
    40,
    '-o',
    0.2,
    '-x',
    350,
    '-y',
    450,
    '-w',
    uuidv4().substring(0, 8),
  ]
  try {
    const p = new Promise((resolve: any, reject: any) => {
      // const pdfWaterMarkExe = path.resolve($tools.LIBS_PATH, 'simplePdfWatermark', 'simplePdfWatermark.exe')
      // let options: any[] = optionArg ? optionArg : defaultOptions
      // // console.log(options.split(' '))
      // if (output) {
      //   options = options.concat(['-d', output, targetFile])
      // } else {
      //   options = options.concat([targetFile])
      // }
      // const pdfProcess: any = child_process.execFile(pdfWaterMarkExe, options)
      // // 获取子进程输出信息
      // pdfProcess.stdout.on('data', function (data: any) {
      //   $tools.log.info('encryptoBigFileOnChildProcress stdout data:', data)
      //   // 加密进度
      //   if (data.indexOf('progress') !== -1) {
      //     const cpData = data.split(':')
      //     const progress = cpData[1]
      //     const startOrDone = cpData[2]
      //     $tools.sendProcessToRender(progress, startOrDone)
      //   }
      // })
      // // 子进程报错输出
      // pdfProcess.stderr.on('data', function (data: any) {
      //   $tools.log.error('addWaterMarkToPdf stderr data:', data)
      //   reject({ type: 'error', message: '子进程出错', success: true })
      // })

      // pdfProcess.on('exit', function (data: any) {
      //   $tools.log.info('addWaterMarkToPdf 进程已退出', data)
      //   const win: any = $tools.getMainWindow('Login')
      //   win.webContents.send('watermarkSuccess')
      //   resolve({ type: 'exit', message: '子进程退出', success: true })
      // })
    })
    return p
  } catch (e) {
    return Promise.resolve({ success: true })
  }
}
