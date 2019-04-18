import { produce } from 'immer'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import config, { IRouteConfig, IRouteItemConfig } from './config'

/**
 * 渲染路由子项
 *
 * @param {string} path
 * @param {IRouteItemConfig} route
 * @returns {*}
 */
const renderRouteItem = (path: string, route: IRouteItemConfig): any => {
  const nowPath = produce(path, (draft) => {
    return draft + route.path
  })

  if (route.children && route.children.length > 0) {
    return route.children.map((child) => renderRouteItem(nowPath, child))
  } else {
    return <Route key={nowPath} exact={true} path={nowPath} component={route.component} />
  }
}

/**
 * 渲染路由
 *
 * @param {IRouteConfig} routes
 * @returns
 */
const renderRoutes = (routes: IRouteConfig) => {
  return <Switch>{Object.keys(routes).map((key) => routes[key].map((route) => renderRouteItem('', route)))}</Switch>
}

export default function index() {
  return renderRoutes(config)
}
