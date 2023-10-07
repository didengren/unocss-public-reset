import type { Preset } from 'unocss'
import presetAutoprefixer from 'unocss-preset-autoprefixer'

export interface PublicStylesResetOption {
  /**
   * default number of nodes covered by enter animation
   * @default 6
   */
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
              }
            `
          }
          return `${menuBg}\n
            .ant-layout-sider-light.psm-layout-sideBar {
              background-image: url(${menuBgPicPath});
              background-position: top;
              background-repeat: no-repeat;
              background-size: cover;
            }
            
            .psm-menu-light {
              background-color: transparent !important;
            }
            
            .psm-menu-light.psm-menu-vertical .psm-menu-item-active.psm-menu-submenu {
              color: ${primaryColor} !important;
            }
            
            .psm-menu-light.psm-menu-vertical .psm-menu-item-active:not(.psm-menu-submenu) {
              color: ${primaryColor} !important;
            }
            
            .psm-menu-light.psm-menu-vertical .psm-menu-item-active:not(.psm-menu-submenu)::before {
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              display: block;
              width: 2px;
              content: '';
              background-color: ${primaryColor};
            }
            
            .psm-menu-light.psm-menu-vertical .psm-menu-item-active:not(.psm-menu-submenu)::after {
              content: none !important;
            }
          `
        },
      },
    ],
  }
}
