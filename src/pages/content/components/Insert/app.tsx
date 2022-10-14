import React, { useEffect } from 'react'

const dom = {
  query: function (selector: string): null | HTMLElement {
    return document.querySelector(selector)
  },
  attr: function (selector: string, attr: string, value: string): void {
    const dom = document.querySelector(selector)
    dom && dom.setAttribute(attr, value)
  },
  append: function (
    selector: string,
    content: Element | string
  ): HTMLDivElement {
    const container = document.createElement('div')
    /* if (isString(content)) {
      container.innerHTML = content
    } else {
      container.appendChild(content)
    } */
    // @ts-ignore
    container.innerHTML = content

    const targetDOM = document.querySelector(selector)
    targetDOM && targetDOM.append(container)
    return container
  },
  remove: function (selector: string): void {
    const targetDOM = document.querySelector(selector)
    targetDOM && targetDOM.remove()
  },
}

const Insert = () => {
  const handleInsert = () => {
    dom.append('head', `<style>@media print { body{ display:block; } }</style>`)

    type TextData = [arg1: string, ...rest: number[]]
    type CanvasDataConstruction = { canvas: Element; data: TextData[] }
    let canvasDataGroup: CanvasDataConstruction[] = []
    const originObject = {
      context2DPrototype: window?.document
        ?.createElement('canvas')
        ?.getContext('2d')?.__proto__,
    }

    document.createElement = new Proxy(document.createElement, {
      apply: function (target, thisArg, argumentsList) {
        const element = Reflect.apply(target, thisArg, argumentsList)

        console.log('element', element)
        console.log('argumentsList', argumentsList)

        if (argumentsList[0] === 'canvas') {
          const tmpData: CanvasDataConstruction = {
            canvas: element,
            data: [],
          }
          element.getContext('2d').fillText = function (...args: TextData) {
            console.log('args', args)
            tmpData.data.push(args)
            originObject.context2DPrototype.fillText.apply(this, args)
          }
          canvasDataGroup.push(tmpData)
        }
        return element
      },
    })

    let pageData: Record<string, Record<string, number>> = {}
    Object.defineProperty(window, 'pageData', {
      set: (v) => (pageData = v),
      get: function () {
        if (!pageData.vipInfo) return (pageData.vipInfo = {})
        pageData.vipInfo.global_svip_status = 1
        pageData.vipInfo.global_vip_status = 1
        pageData.vipInfo.isVip = 1
        pageData.vipInfo.isWenkuVip = 1
        return pageData
      },
    })

    console.log('pageData', pageData)

    const templateCSS = [
      "<style id='copy-template-css'>",
      'body{overflow: hidden !important}',
      '#copy-template-html{position: fixed; top: 0; right: 0; bottom: 0; left: 0; display: flex; align-items: center; justify-content: center;z-index: 999999; background: rgba(0,0,0,0.5);}',
      '#copy-template-html > .template-container{height: 80%; width: 80%; background: #fff; }',
      '.template-container > .title-container{display: flex; align-items: center; justify-content: space-between;padding: 10px;border-bottom: 1px solid #eee;}',
      '#copy-template-text{height: 100%; width: 100%;position: relative; overflow: auto;background: #fff;}',
      '#copy-template-html #template-close{cursor: pointer;}',
      '</style>',
    ].join('')

    const render = () => {
      canvasDataGroup = canvasDataGroup.filter((item) => item.canvas.id)
      const templateText: string[] = canvasDataGroup.map(
        (canvasData, index) => {
          const computedTop = index * Number(canvasData.canvas.clientHeight)
          const textItem: string[] = canvasData.data.map(
            (item) =>
              `<div style="position: absolute; left: ${item[1]}px; top: ${
                item[2] + computedTop
              }px">${item[0]}</div>`
          )
          return textItem.join('')
        }
      )
      const templateHTML = [
        "<div id='copy-template-html'>",
        "<div class='template-container'>",
        "<div class='title-container'>",
        '<div>请自行复制</div>',
        "<div id='template-close'>关闭</div>",
        '</div>',
        "<div id='copy-template-text'>",
        templateText.join(''),
        '</div>',
        '</div>',
        '</div>',
      ].join('')
      dom.append('body', templateHTML)
      dom.append('body', templateCSS)
      const closeButton = document.querySelector(
        '#copy-template-html #template-close'
      )
      const close = () => {
        dom.remove('#copy-template-html')
        dom.remove('#copy-template-css')
        closeButton?.removeEventListener('click', close)
      }
      closeButton?.addEventListener('click', close)
    }
    dom.append(
      'head',
      `<style>#copy-btn-wk{padding: 10px; background: rgba(0,0,0,0.5);position: fixed; left:0; top: 40%;cursor: pointer;color: #fff; z-index: 99999;}</style>`
    )
    dom.append('body', "<div id='copy-btn-wk'>复制</div>")
    const btn = dom.query('#copy-btn-wk')
    btn && (btn.onclick = render)
  }

  useEffect(() => {
    handleInsert()
    // document.addEventListener('DOMContentLoaded', handleInsert)
    // window.onload = handleInsert

    return () => {
      // document.removeEventListener('DOMContentLoaded', handleInsert)
    }
  }, [])
  return <div>index</div>
}

export default Insert
