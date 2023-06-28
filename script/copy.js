import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __newDirname = fileURLToPath(path.dirname(import.meta.url))

/**
 * 将指定src目录下的所有文件剪切到指定目标dest目录下
 * @param {string} src 源目录
 * @param {string} dest 目标目录
 */
function copyDirectory(src, dest) {
  var files = fs.readdirSync(src)
  files.forEach((item, index) => {
    var itemPath = path.join(src, item)
    var itemStat = fs.statSync(itemPath) // 获取文件信息
    var savedPath = path.join(dest, itemPath.replace(src, ''))
    var savedDir = savedPath.substring(0, savedPath.lastIndexOf('\\'))
    if (itemStat.isFile()) {
      // 如果目录不存在则进行创建
      if (!fs.existsSync(savedDir)) {
        fs.mkdirSync(savedDir, { recursive: true })
      }
      // 写入到新目录下
      var data = fs.readFileSync(itemPath)
      fs.writeFileSync(savedPath, data)
      // 并且删除原文件
      fs.unlinkSync(itemPath)
    } else if (itemStat.isDirectory()) {
      copyDirectory(itemPath, path.join(savedDir, item))
    }
  })
  // 并且删除原目录
  fs.rmdirSync(src)
}

copyDirectory(
  path.resolve(__newDirname, '../docs/.vitepress/dist/'),
  path.resolve(__newDirname, '../doc')
)
