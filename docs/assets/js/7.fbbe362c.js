(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{159:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"服务配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 服务配置")]),s._v(" "),a("h2",{attrs:{id:"文件配置方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件配置方式","aria-hidden":"true"}},[s._v("#")]),s._v(" 文件配置方式")]),s._v(" "),a("p",[s._v("支持从 JSON 或 YAML 配置文件倒入配置到 ETCD。")]),s._v(" "),a("h3",{attrs:{id:"json-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-配置文件","aria-hidden":"true"}},[s._v("#")]),s._v(" JSON 配置文件")]),s._v(" "),a("p",[s._v("将如下配置保存到 "),a("code",[s._v("ects.json")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"database"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"host"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ects"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"user"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pass"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PASSWORD"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"char"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf8mb4"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"auth"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"secret"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SECRET"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ttl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"etcd"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"killer"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ects/killer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"locker"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ects/locker"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"service"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ects/nodes"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pipeline"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ects/pipelines"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"config"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ects/config"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"endpoints"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost:2379"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"timeout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("运行如下命令，将配置倒入的 ETCD：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ects init --mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./ects.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("User "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--pass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--email"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("user@mail.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"yaml-配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yaml-配置文件","aria-hidden":"true"}},[s._v("#")]),s._v(" YAML 配置文件")]),s._v(" "),a("p",[s._v("将如下配置保存到 "),a("code",[s._v("ects.yaml")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" localhost\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ects\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" root\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" PASSWORD\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" utf8mb4\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("secret")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" SECRET\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ttl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("86400")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("etcd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("killer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /ects/killer\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("locker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /ects/locker\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /ects/service\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pipeline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /ects/pipeline\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /ects/config\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("endpoints")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2379")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("运行如下命令，将配置倒入的 ETCD：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ects init --mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yaml "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./ects.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("User "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--pass"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Password "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--email"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("user@mail.com\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"web-ui-配置方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-ui-配置方式","aria-hidden":"true"}},[s._v("#")]),s._v(" Web UI 配置方式")]),s._v(" "),a("h3",{attrs:{id:"启动初始化服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动初始化服务","aria-hidden":"true"}},[s._v("#")]),s._v(" 启动初始化服务")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ ects init --mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("web\nNow listening on: http://localhost:9701\nApplication started. Press CMD+C to shut down.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"生成配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 生成配置")]),s._v(" "),a("h4",{attrs:{id:"etcd-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etcd-配置","aria-hidden":"true"}},[s._v("#")]),s._v(" ETCD 配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"/ects/configuration/etcd.png",alt:"ETCD"}})]),s._v(" "),a("h4",{attrs:{id:"jwt-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt-配置","aria-hidden":"true"}},[s._v("#")]),s._v(" JWT 配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"/ects/configuration/jwt.png",alt:"JWT"}})]),s._v(" "),a("h4",{attrs:{id:"mysql-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-配置","aria-hidden":"true"}},[s._v("#")]),s._v(" MySQL 配置")]),s._v(" "),a("p",[a("img",{attrs:{src:"/ects/configuration/db.png",alt:"JWT"}})]),s._v(" "),a("p",[s._v("如果数据库已存在则会提示是否覆盖现有数据：\n"),a("img",{attrs:{src:"/ects/configuration/db_alert.png",alt:"JWT"}})]),s._v(" "),a("h4",{attrs:{id:"创建管理员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建管理员","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建管理员")]),s._v(" "),a("p",[a("img",{attrs:{src:"/ects/configuration/user.png",alt:"JWT"}})]),s._v(" "),a("h4",{attrs:{id:"初始化完成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化完成","aria-hidden":"true"}},[s._v("#")]),s._v(" 初始化完成")]),s._v(" "),a("p",[a("img",{attrs:{src:"/ects/configuration/finish.png",alt:"JWT"}})])])}],!1,null,null,null);t.default=e.exports}}]);