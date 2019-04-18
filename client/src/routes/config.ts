import React, { ComponentType, LazyExoticComponent } from 'react'

/**
 * 懒加载组件
 *
 * @param {string} path
 */
const LazyComponent = (path: string) => React.lazy(() => import('../containers' + path))

/**
 * 路由子项配置
 *
 * @export
 * @interface IRouteItemConfig
 */
export interface IRouteItemConfig {
  id: string
  path: string
  title: string
  icon?: string
  component: LazyExoticComponent<ComponentType>
  children?: IRouteItemConfig[]
}

/**
 * 路由配置
 *
 * @export
 * @interface IRouteConfig
 */
export interface IRouteConfig {
  [key: string]: IRouteItemConfig[]
  menus: IRouteItemConfig[]
  nonMenus: IRouteItemConfig[]
}

const config: IRouteConfig = {
  menus: [
    {
      id: '01',
      path: '/app/dashboard',
      title: '首页',
      component: LazyComponent('/dashboard/Dashboard'),
      children: []
    }
  ],
  nonMenus: []
}

export default config
