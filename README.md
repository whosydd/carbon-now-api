# carbon-now-api

一个简单的[carbon-now-sh](https://carbon.now.sh/)api

## 问题

由于本项目只是简单的使用`puppeteer`进行模拟，响应时间过长，故只用作学习研究。**如果有相关需求，建议可以使用[petersolopov/carbonara](https://github.com/petersolopov/carbonara)代替**

## 部署

已添加[vercel](https://vercel.com/)相关配置文件，可直接进行部署

## 使用

- path: `/api`
- method: `post`
- request body:

```json
{
    "code": "console.log('hello world1')",
    "theme": {
        "paddingVertical": "56px",
        "paddingHorizontal": "56px",
        "backgroundImage": null,
        "backgroundImageSelection": null,
        "backgroundMode": "color",
        "backgroundColor": "rgba(171, 184, 195, 1)",
        "dropShadow": true,
        "dropShadowOffsetY": "20px",
        "dropShadowBlurRadius": "68px",
        "theme": "dracula-pro",
        "windowTheme": "none",
        "language": "auto",
        "fontFamily": "Droid Sans Mono",
        "fontSize": "14px",
        "lineHeight": "133%",
        "windowControls": true,
        "widthAdjustment": true,
        "lineNumbers": false,
        "firstLineNumber": 1,
        "exportSize": "2x",
        "watermark": false,
        "squaredImage": false,
        "hiddenCharacters": false,
        "name": "",
        "width": 680
    }
}
```

> - 如果不传递`theme`，使用默认主题
> - `theme`可直接使用[carbon-now-sh](https://carbon.now.sh/)导出的配置项

