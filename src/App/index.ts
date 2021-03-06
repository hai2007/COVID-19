import { Component, ref } from 'nefbl'
import xhr from '@hai2007/xhr'

import Clunch from 'clunch'
import map from '../../node_modules/@clunch/map/index.js'

Clunch.series('ui-map', map)

import chinaGeoJSON from '@datapool/china.geojson'
import image from './index.clunch'

import style from './index.scss'
import template from './index.html'

@Component({
    selector: "app-root",
    template,
    styles: [style]
})
export default class {

    process: number
    hadLoad: boolean
    flag: boolean
    left: number
    top: number
    title: any
    rumors: any

    $setup() {
        return {
            process: ref(0),
            hadLoad: ref(true),
            flag: ref(false),
            left: ref(0),
            top: ref(0),
            title: ref(''),
            rumors: ref({})
        }
    }

    evalCallback(_data, callback) {
        let chinaData = {}
        for (let i = 0; i < _data.results.length; i++) {
            if (_data.results[i].countryEnglishName == 'China') {
                chinaData[_data.results[i].provinceShortName] = _data.results[i]
            }
        }
        callback({
            chinaData
        })
    }

    getData(callback) {

        let data = sessionStorage.getItem("covid-19/area")
        if (data) {
            this.evalCallback(JSON.parse(data), callback)
            return
        }

        this.hadLoad = false

        xhr({
            method: "GET",
            url: "https://lab.isaaclin.cn/nCoV/api/area",
            timeout: 60000,
            xhr: () => {
                let xmlhttp = new XMLHttpRequest()
                xmlhttp.onprogress = data => {
                    this.process = +((data.loaded / data.total) * 100).toFixed(2)
                }
                return xmlhttp
            }
        }, data => {

            this.hadLoad = true
            this.evalCallback(JSON.parse(data.data), callback)

            sessionStorage.setItem("covid-19/area", data.data);

        }, (error) => {

            // 错误回调
            console.error(error)
            alert('载入出错，请刷新浏览器重试~')

        })
    }

    getRumorsData() {
        let data = sessionStorage.getItem("covid-19/rumors")
        if (data) {
            this.rumors = JSON.parse(data)
            return
        }

        xhr({
            method: "GET",
            url: "https://lab.isaaclin.cn/nCoV/api/rumors",
            timeout: 60000
        }, data => {

            this.rumors = JSON.parse(data.data)
            sessionStorage.setItem("covid-19/rumors", data.data);

        }, (error) => {
            console.error(error)
        })
    }

    $mounted() {

        let _this = this
        this.getData(data => {

            new Clunch({
                el: document.getElementById('map'),
                render: image,
                data() {
                    return {
                        chinaGeoJSON,
                        hoverData: {
                            flag: false
                        }
                    }
                },
                methods: {
                    calcColor(properties) {
                        let count = data.chinaData[properties.name].currentConfirmedCount

                        if (count >= 10000) {
                            return "#7a361f"
                        } else if (count >= 1000) {
                            return "#c95539"
                        } else if (count >= 500) {
                            return "#f77649"
                        } else if (count >= 100) {
                            return "#f8a077"
                        } else if (count >= 10) {
                            return "#f9c8b1"
                        } else if (count >= 1) {
                            return "#f5e6de"
                        } else {
                            return "white"
                        }
                    }
                }
            }).$bind('mousemove', function (target) {

                if (target.region) {

                    let _cityName = target.data.properties.name

                    let curData = data.chinaData[_cityName]
                    let _title = _cityName + "(" + curData.currentConfirmedCount + ")"

                    // 右边有空余的地方就右边显示，不然去左边
                    _this.left = target.left > (this._width * 0.5) ? (target.left - 310) : (target.left + 10)
                    _this.top = target.top - curData.cities.length * 5

                    if (_this.title != _title) {

                        _this.title = _title

                        let template = ''
                        for (let city of curData.cities) {
                            template += `<li>${city.cityName} : ${city.currentConfirmedCount}</li>`
                        }
                        document.getElementById('hover-list').innerHTML = template
                    }

                    _this.flag = true

                } else {
                    _this.flag = false
                }

            })

        })

        this.getRumorsData()

    }

}
