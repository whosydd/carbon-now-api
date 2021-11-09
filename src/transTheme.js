const default_theme = {
  paddingVertical: '56px',
  paddingHorizontal: '56px',
  backgroundImage: null,
  backgroundImageSelection: null,
  backgroundMode: 'color',
  backgroundColor: 'rgba(171, 184, 195, 1)',
  dropShadow: true,
  dropShadowOffsetY: '20px',
  dropShadowBlurRadius: '68px',
  theme: 'seti',
  windowTheme: 'none',
  language: 'auto',
  fontFamily: 'Hack',
  fontSize: '14px',
  lineHeight: '133%',
  windowControls: true,
  widthAdjustment: true,
  lineNumbers: false,
  firstLineNumber: 1,
  exportSize: '2x',
  watermark: false,
  squaredImage: false,
  hiddenCharacters: false,
  name: '',
  width: 680,
}

module.exports = (code, theme = default_theme) => {
  const url = new URL('https://carbon.now.sh')

  url.searchParams.set('bg', theme.backgroundColor)
  url.searchParams.set('t', theme.theme)
  url.searchParams.set('wt', theme.windowTheme)
  url.searchParams.set('l', theme.language)
  url.searchParams.set('ds', theme.dropShadow.toString())
  url.searchParams.set('dsyoff', theme.dropShadowOffsetY)
  url.searchParams.set('dsblur', theme.dropShadowBlurRadius)
  url.searchParams.set('wc', theme.windowControls.toString())
  url.searchParams.set('wa', theme.widthAdjustment.toString())
  url.searchParams.set('pv', theme.paddingVertical)
  url.searchParams.set('ph', theme.paddingHorizontal)
  url.searchParams.set('ln', theme.lineNumbers.toString())
  url.searchParams.set('fl', theme.firstLineNumber.toString())
  url.searchParams.set('fm', theme.fontFamily)
  url.searchParams.set('fs', theme.fontSize)
  url.searchParams.set('lh', theme.lineHeight)
  url.searchParams.set('es', theme.exportSize)
  url.searchParams.set('wm', theme.watermark.toString())
  url.searchParams.set('code', encodeURI(code))

  return url
}
