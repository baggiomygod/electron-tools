import * as tools from '../core/tools'

declare global {
  type Tools = typeof tools

  const $tools: Tools

  namespace NodeJS {
    interface Global {
      __$tools: Tools
    }
  }
}

interface CoreOptions {
  statConcurrency?: number
}

interface TransformOptions {
  allowHalfOpen?: boolean
  readableObjectMode?: boolean
  writeableObjectMode?: boolean
  decodeStrings?: boolean
  encoding?: string
  highWaterMark?: number
  objectmode?: boolean
}
