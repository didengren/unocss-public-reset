import type { Preset } from 'unocss'
import presetAutoprefixer from 'unocss-preset-autoprefixer'

export interface AdminStylesResetOption {
  projBrand: string
  menuBgPicPath?: string
  primaryColor?: string
}

export interface OverseasAdminStylesResetOption {
  projBrand: string
  primaryColor?: string
}

const defaultOption: Required<AdminStylesResetOption> = {
  projBrand: 'psm',
  menuBgPicPath: '',
  primaryColor: '#3a78f2',
}

const overseasDefaultOption: Required<OverseasAdminStylesResetOption> = {
  projBrand: 'psm',
  primaryColor: '#1990FF',
}

export function adminStylesReset(option?: AdminStylesResetOption): Preset {
  const config = Object.assign({}, defaultOption, option)
  const { projBrand, menuBgPicPath, primaryColor } = config

  return {
    name: 'admin-styles-reset',
    presets: [presetAutoprefixer()],
    preflights: [
      {
        getCSS: () => {
          let menuBg = ''
          if (menuBgPicPath) {
            menuBg += `
              [data-theme='light'] .ant-layout-sider-light.${projBrand}-layout-sideBar {
                background-image: url(${menuBgPicPath});
                background-position: top;
                background-repeat: no-repeat;
                background-size: cover;
              }\n
            `
          }
          return `${menuBg}
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

export function overseasAdminStylesReset(option?: OverseasAdminStylesResetOption): Preset {
  const config = Object.assign({}, overseasDefaultOption, option)
  const { projBrand, primaryColor } = config

  return {
    name: 'overseas-admin-styles-reset',
    presets: [presetAutoprefixer()],
    preflights: [
      {
        getCSS: () => {
          return `
            .${projBrand}-menu-light {
              background-color: transparent !important;
            }
            
            [data-theme='light'] .${projBrand}-menu-light.${projBrand}-menu-vertical .${projBrand}-menu-item-active.${projBrand}-menu-submenu {
              color: ${primaryColor} !important;
            }
            
            [data-theme='light'] .${projBrand}-menu-light.${projBrand}-menu-vertical .${projBrand}-menu-item-active:not(.${projBrand}-menu-submenu), .${projBrand}-menu-light .${projBrand}-menu-item-selected {
              color: #fff !important;
              background-color: transparent !important;
            }

            [data-theme='light'] .${projBrand}-menu-light .${projBrand}-menu-submenu-active-border {
              color: ${primaryColor} !important;
              background-color: #fff !important;
            }

            [data-theme='light'] .${projBrand}-menu-light.${projBrand}-menu-vertical:not(.${projBrand}-menu-collapse) .${projBrand}-menu-item-active:not(.${projBrand}-menu-submenu)::before, .${projBrand}-menu-light:not(.${projBrand}-menu-collapse) .${projBrand}-menu-item-selected::before {
              position: absolute;
              top: 0;
              left: 10px;
              bottom: 0;
              right: 10px;
              display: block;
              width: calc(100% - 20px);
              border-radius: 8px;
              z-index: -1;
              content: '';
              background-color: ${primaryColor};
            }

            [data-theme='light'] .${projBrand}-menu-light.${projBrand}-menu-vertical.${projBrand}-menu-collapse > li.${projBrand}-menu-item-active::before, .${projBrand}-menu-light.${projBrand}-menu-vertical.${projBrand}-menu-collapse .${projBrand}-menu-submenu-active::before {
              content: none;
            }

            [data-theme='light'] .ant-popover-inner-content .${projBrand}-menu-light .${projBrand}-menu-item-selected::before {
              position: absolute;
              top: 6px;
              left: 6px;
              bottom: 6px;
              right: 6px;
              display: block;
              width: calc(100% - 12px);
              border-radius: 8px;
              z-index: -1;
              content: '';
              background-color: ${primaryColor};
            }
            
            [data-theme='light'] .${projBrand}-menu-light.${projBrand}-menu-vertical .${projBrand}-menu-item-active:not(.${projBrand}-menu-submenu)::after, .${projBrand}-menu-light .${projBrand}-menu-item-selected::after, .${projBrand}-menu-light .${projBrand}-menu-submenu-active-border::after, [data-theme='light'] .${projBrand}-menu-light .${projBrand}-menu-submenu-active-border::before {
              content: none !important;
            }

            .fjc-menu-dark.fjc-menu-vertical.fjc-menu-collapse > li.fjc-menu-item-active::before, .fjc-menu-dark.fjc-menu-vertical.fjc-menu-collapse .fjc-menu-submenu-active::before {
              content: none !important;
            }
          `
        },
      },
    ],
  }
}
