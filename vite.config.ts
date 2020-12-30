/*
 * @Date: 2020-11-02 15:55:10
 * @LastEditTime: 2020-12-30 16:54:28
 * @FilePath: /TVue3-master/vite.config.ts
 * @Author: twy
 * @LastEditors: twy
 */
import { SharedConfig } from "vite";
import path from "path";

const pathResolve = (pathStr: string) => {
    return path.resolve(__dirname, pathStr)
}

const config: SharedConfig = {
    alias: {
        '/@/': pathResolve('.src')
    },
    optimizeDeps: {
        include: ["element-plus"]
    }
}

module.exports = config;