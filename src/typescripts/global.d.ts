interface AnyObj {
  /* eslint-disable */
  [key: string]: any
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?: 'development' | 'production' | 'none' | 'test'
    BUILD_ENV?: 'mock' | 'dev' | 'prod' | 'test' | 'prodzb' | 'prodtb'

    /** API 协议 */
    API_PROTOCOL: string
    /** API 域名 */
    API_HOST: string
    /** API 根路径 */
    API_BASE_PATH: string
  }
}


// ok
declare module 'docxtemplater'
declare module 'pizzip'
declare module 'libreoffice-convert'
declare module 'officegen'
declare module 'pdfjs-dist'
declare module 'mammoth' // 页面展示docx
declare module 'pdfjs-dist/build/pdf.worker.entry'
declare module 'archiver-zip-encrypted'
declare module 'pdf2json'
declare module 'convert-multiple-files'
declare module 'mammoth-style'
declare module 'loadsh'
declare module 'nzh/cn'

// 图片
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'