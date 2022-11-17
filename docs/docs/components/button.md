# Button 按钮

给你的应用加上好看的按钮吧


## 基本使用

可以使用`type`、`plain` 属性配置不同的按钮类型，展示不同的颜色状态

::: demo
<template #example>
<toy-button>default</toy-button>
<toy-button type="primary">primary</toy-button>
<toy-button type="success">success</toy-button>
<toy-button type="danger">danger</toy-button>
<toy-button type="info">info</toy-button>
<toy-button type="warning">warning</toy-button>
<div style="margin:10px 0"></div>
<toy-button plain>plain</toy-button>
<toy-button plain type="primary">primary</toy-button>
<toy-button plain type="success">success</toy-button>
<toy-button plain type="danger">danger</toy-button>
<toy-button plain type="info">info</toy-button>
<toy-button plain type="warning">warning</toy-button>
<div style="margin:10px 0"></div>
<toy-button round>round</toy-button>
<toy-button round type="primary">primary</toy-button>
<toy-button round type="success">success</toy-button>
<toy-button round type="danger">danger</toy-button>
<toy-button round type="info">info</toy-button>
<toy-button round type="warning">warning</toy-button>
<div style="margin:10px 0"></div>
<toy-button circle>circle</toy-button>
<toy-button circle type="primary">primary</toy-button>
<toy-button circle type="success">success</toy-button>
<toy-button circle type="danger">danger</toy-button>
<toy-button circle type="info">info</toy-button>
<toy-button circle type="warning">warning</toy-button>
</template>


```html
<toy-button>default</toy-button>
<toy-button type="primary">primary</toy-button>
<toy-button type="success">success</toy-button>
<toy-button type="danger">danger</toy-button>
<toy-button type="info">info</toy-button>
<toy-button type="warning">warning</toy-button>

<toy-button plain>plain</toy-button>
<toy-button plain type="primary">primary</toy-button>
<toy-button plain type="success">success</toy-button>
<toy-button plain type="danger">danger</toy-button>
<toy-button plain type="info">info</toy-button>
<toy-button plain type="warning">warning</toy-button>

<toy-button round>round</toy-button>
<toy-button round type="primary">primary</toy-button>
<toy-button round type="success">success</toy-button>
<toy-button round type="danger">danger</toy-button>
<toy-button round type="info">info</toy-button>
<toy-button round type="warning">warning</toy-button>

<toy-button circle>circle</toy-button>
<toy-button circle type="primary">primary</toy-button>
<toy-button circle type="success">success</toy-button>
<toy-button circle type="danger">danger</toy-button>
<toy-button circle type="info">info</toy-button>
<toy-button circle type="warning">warning</toy-button>
```

:::


## 文字按钮

可以使用`text`属性来展示没有边框和背景色的按钮

::: demo
<template #example>
<toy-button text>text</toy-button>
<toy-button text type="primary">primary</toy-button>
<toy-button text type="success">success</toy-button>
<toy-button text type="danger">danger</toy-button>
<toy-button text type="info">info</toy-button>
<toy-button text type="warning">warning</toy-button>
</template>


```html
<toy-button text>text</toy-button>
<toy-button text type="primary">primary</toy-button>
<toy-button text type="success">success</toy-button>
<toy-button text type="danger">danger</toy-button>
<toy-button text type="info">info</toy-button>
<toy-button text type="warning">warning</toy-button>
```
:::


## 禁用按钮

可以使用`disabled`属性来定义按钮是否被禁用

::: demo
<template #example>
<toy-button disabled>default</toy-button>
<toy-button disabled type="primary">primary</toy-button>
<toy-button disabled type="success">success</toy-button>
<toy-button disabled type="danger">danger</toy-button>
<toy-button disabled type="info">info</toy-button>
<toy-button disabled type="warning">warning</toy-button>
<div style="margin:10px 0"></div>
<toy-button disabled plain>plain</toy-button>
<toy-button disabled plain type="primary">primary</toy-button>
<toy-button disabled plain type="success">success</toy-button>
<toy-button disabled plain type="danger">danger</toy-button>
<toy-button disabled plain type="info">info</toy-button>
<toy-button disabled plain type="warning">warning</toy-button>
<div style="margin:10px 0"></div>
<toy-button disabled text>text</toy-button>
<toy-button disabled text type="primary">primary</toy-button>
<toy-button disabled text type="success">success</toy-button>
<toy-button disabled text type="danger">danger</toy-button>
<toy-button disabled text type="info">info</toy-button>
<toy-button disabled text type="warning">warning</toy-button>
</template>


```html
<toy-button disabled>default</toy-button>
<toy-button disabled type="primary">primary</toy-button>
<toy-button disabled type="success">success</toy-button>
<toy-button disabled type="danger">danger</toy-button>
<toy-button disabled type="info">info</toy-button>
<toy-button disabled type="warning">warning</toy-button>

<toy-button disabled plain>default</toy-button>
<toy-button disabled plain type="primary">primary</toy-button>
<toy-button disabled plain type="success">success</toy-button>
<toy-button disabled plain type="danger">danger</toy-button>
<toy-button disabled plain type="info">info</toy-button>
<toy-button disabled plain type="warning">warning</toy-button>

<toy-button disabled text>default</toy-button>
<toy-button disabled text type="primary">primary</toy-button>
<toy-button disabled text type="success">success</toy-button>
<toy-button disabled text type="danger">danger</toy-button>
<toy-button disabled text type="info">info</toy-button>
<toy-button disabled text type="warning">warning</toy-button>
```
:::

## 按钮尺寸

可以使用`size`属性来控制按钮的大小尺寸

::: demo
<template #example>
<toy-button size="small">small</toy-button>
<toy-button>default</toy-button>
<toy-button size="large">large</toy-button>
<toy-button plain size="small">small</toy-button>
<toy-button plain>default</toy-button>
<toy-button plain size="large">large</toy-button>
<div style="margin:10px 0"></div>
<toy-button round size="small">small</toy-button>
<toy-button round>default</toy-button>
<toy-button round size="large">large</toy-button>
<toy-button round plain size="small">small</toy-button>
<toy-button round plain>default</toy-button>
<toy-button round plain size="large">large</toy-button>
<div style="margin:10px 0"></div>
<toy-button circle size="small">xx</toy-button>
<toy-button circle>xx</toy-button>
<toy-button circle size="large">xx</toy-button>
</template>


```html
<toy-button size="small">small</toy-button>
<toy-button>default</toy-button>
<toy-button size="large">large</toy-button>
<toy-button plain size="small">small</toy-button>
<toy-button plain>default</toy-button>
<toy-button plain size="large">large</toy-button>

<toy-button round size="small">small</toy-button>
<toy-button round>default</toy-button>
<toy-button round size="large">large</toy-button>
<toy-button round plain size="small">small</toy-button>
<toy-button round plain>default</toy-button>
<toy-button round plain size="large">large</toy-button>

<toy-button circle size="small">xx</toy-button>
<toy-button circle>xx</toy-button>
<toy-button circle size="large">xx</toy-button>
```
:::