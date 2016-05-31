#搭建linux环境与node环境

##使用virturebox、ubuntu 14.0.4搭建linux

使用虚拟机搭建一个ubuntu的linux版本

[教程](http://jingyan.baidu.com/article/d5a880eb68fc7c13f047cc5e.html)

##使用nvm搭建node开发环境

[教程](http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html) `它上面的步骤很明显了`

心得：在linux上使用nvm搭建node开发环境好处：

1、避免了麻烦步骤，不用再去下载 `.tar.gz` 文件，然后再次编译了，特别是对于我使用纯服务器版的ubuntu来说；

2、方便管理，如果不想要了，直接删除整个nvm文件，环境干净；

3、nvm: node version manager，可以很方便在node的各个版本之间切换


###常用命令总结：

`nvm --version` nvm的版本

`nvm ls` 查看已安装的版本

`nvm ls-remote` 查看可以安装的版本

`nvm install <version>` 安装指定的版本

`nvm uninstall <version>` 删除指定的版本

`nvm use <version>` 使用/切换到选定版本