import Vue from 'vue'
// 通过Vue.observable创建一个对象
export const store = Vue.observable(sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    // 导航active
    comNavCurrent: 0,
    // 实时位置画布大小
    canvasWidth: null,
    canvasHeight: null,
})

// 定义 mutations, 修改属性
export const mutations = {
    setState(data) {
        console.log(`%c ${data.name}值为：${data.value}`, 'color:#f00;')
        store[data.name] = data.value
    },
}
