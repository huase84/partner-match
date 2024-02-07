## 项目框架搭建

### 依赖和环境

* **npm create vite**
* 选择**vue+ts**（js超集，规范数据类型）

### git仓库

* 登录git账号，通过**new按钮**新建项目

#### 推送项目到git上

```sh
git init   # 把项目初始化,相当于在项目的跟目录生成一个 .git 目录
git add .    # 把项目的所有文件加入暂存区
git commit -am '项目初始化'     # 把项目提交到本地仓库，引号里面的是这次提交的注释，方便以后查看。
git remote rm origin  # 先删除远程 Git 仓库
git remote add origin https://github.com/huase84/partner-match.git
git push origin master # 将本地缓存仓库的文件推送到远程。master这个是分支名
```

