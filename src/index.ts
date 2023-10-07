import type { Preset } from 'unocss'
import presetAutoprefixer from 'unocss-preset-autoprefixer'

export interface PublicStylesResetOption {
  menuBgPicPath?: string
  primaryColor?: string
}

const defaultOption: Required<PublicStylesResetOption> = {
  menuBgPicPath: '',
  primaryColor: '#3a78f2',
}

export default function publicStylesReset(option?: PublicStylesResetOption): Preset {
  const config = Object.assign({}, defaultOption, option)
  const { menuBgPicPath, primaryColor } = config

  return {
    name: '@trinapower/unocss-public-reset',
    presets: [presetAutoprefixer()],
    preflights: [
      {
        getCSS: () => {
          let menuBg = ''
          if (menuBgPicPath) {
            menuBg += `
              .ant-layout-sider-light.psm-layout-sideBar {
                background-image: url(${menuBgPicPath});
                background-position: top;
                background-repeat: no-repeat;
                background-size: cover;
              }\n
            `
          }
          return `${menuBg}
            [data-theme="light"] .ant-layout-sider-light.psm-layout-sideBar {
              background-image: url(${menuBgPicPath});
              background-position: top;
              background-repeat: no-repeat;
              background-size: cover;
            }
            
            .psm-menu-light {
              background-color: transparent !important;
            }
            
            [data-theme="light"] .psm-menu-light.psm-menu-vertical .psm-menu-item-active.psm-menu-submenu {
              color: ${primaryColor} !important;
            }
            
            [data-theme="light"] .psm-menu-light.psm-menu-vertical .psm-menu-item-active:not(.psm-menu-submenu) {
              color: ${primaryColor} !important;
            }
            
            [data-theme="light"] .psm-menu-light.psm-menu-vertical .psm-menu-item-active:not(.psm-menu-submenu)::before, .psm-menu-light .psm-menu-item-selected::before, .psm-menu-light .psm-menu-submenu-active-border::before {
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              display: block;
              width: 4px;
              content: '';
              background-color: ${primaryColor};
            }
            
            [data-theme="light"] .psm-menu-light.psm-menu-vertical .psm-menu-item-active:not(.psm-menu-submenu)::after, .psm-menu-light .psm-menu-item-selected::after, .psm-menu-light .psm-menu-submenu-active-border::after {
              content: none !important;
            }
          `
        },
      },
    ],
  }
}
