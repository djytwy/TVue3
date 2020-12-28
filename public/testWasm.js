var self = this
importScripts('add.js')
function Test2() {
    // 初始化worker
    this.initWorker()
}

Test2.prototype.initWorker = async function () {
    console.log('初始化worker ！')
}

Test2.prototype.mytest = function (params) {
    console.log(self.Module)
    console.log(self.Module._mytest(params))
}
Module.onRuntimeInitialized = () => {
    if (self.test) {
        console.log('初始化wasm完成！');
    }
}

self.test = new Test2()

// 子进程收到消息处理
self.onmessage = function (evt) {
    if (self.test === undefined) {
        console.log('init error !', self.test)
        return ;
    }
    console.log(`子线程Reveived msg: ${evt.data}`)
    switch (evt.data) {
        case 'init':
            self.test.init();
            break;
        case 'test':
            self.test.mytest();
            break;
        default:
            break;
    }
}

function initModule() {
    return new Promise((r,j) => {
        r(
            {
                onRuntimeInitialized: () => {
                    console.log('初始化wasm!')
                },
            }
        )
    })
}
