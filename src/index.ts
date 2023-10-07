import type { Preset } from 'unocss'
import presetAutoprefixer from 'unocss-preset-autoprefixer'

export interface PublicStylesResetOption {
  projBrand: string
  menuBgPicPath?: string
  primaryColor?: string
}

const defaultOption: Required<PublicStylesResetOption> = {
  projBrand: 'psm',
  menuBgPicPath: '',
  primaryColor: '#3a78f2',
}

export default function publicStylesReset(option?: PublicStylesResetOption): Preset {
  const config = Object.assign({}, defaultOption, option)
  const { projBrand, menuBgPicPath, primaryColor } = config

  return {
    name: '@trinapower/unocss-public-reset',
    presets: [presetAutoprefixer()],
    preflights: [
      {
        getCSS: () => {
          let menuBg = ''
          if (menuBgPicPath) {
            menuBg += `
              .ant-layout-sider-light.${projBrand}-layout-sideBar {
                background-image: url(${menuBgPicPath});
                background-position: top;
                background-repeat: no-repeat;
                background-size: cover;
              }\n
            `
          }
          return `${menuBg}
            [data-theme='light'] .ant-layout-sider-light.${projBrand}-layout-sideBar {
              background-image: url(${menuBgPicPath});
              background-position: top;
              background-repeat: no-repeat;
              background-size: cover;
            }
            
            .${projBrand}-menu-light {
              background-color: transparent !important;
            }
            
            [data-theme='light'] .${projBrand}-menu-light.${projBrand}-menu-vertical .${projBrand}-menu-item-active.${projBrand}-menu-submenu {
              color: ${primaryColor} !important;
            }
            
            [data-theme='light'] .${projBrand}-menu-light.${projBrand}-menu-vertical .${projBrand}-menu-item-active:not(.${projBrand}-menu-submenu) {
              color: ${primaryColor} !important;
            }
            
            [data-theme='light'] .${projBrand}-menu-light.${projBrand}-menu-vertical .${projBrand}-menu-item-active:not(.${projBrand}-menu-submenu)::before, .${projBrand}-menu-light .${projBrand}-menu-item-selected::before, .${projBrand}-menu-light .${projBrand}-menu-submenu-active-border::before {
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              display: block;
              width: 4px;
              content: '';
              background-color: ${primaryColor};
            }
            
            [data-theme='light'] .${projBrand}-menu-light.${projBrand}-menu-vertical .${projBrand}-menu-item-active:not(.${projBrand}-menu-submenu)::after, .${projBrand}-menu-light .${projBrand}-menu-item-selected::after, .${projBrand}-menu-light .${projBrand}-menu-submenu-active-border::after {
              content: none !important;
            }
          `
        },
      },
    ],
  }
}
