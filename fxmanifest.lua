fx_version 'cerulean'
game 'gta5'

description 'y_radio'
repository 'https://github.com/Ybox-project/y_radio'
version '1.0.1'

ox_lib 'locale'
shared_scripts {
    '@ox_lib/init.lua',
    '@qbx_core/modules/lib.lua'
}

client_scripts {
    '@qbx_core/modules/playerdata.lua',
    'client/main.lua',
}

server_script 'server/main.lua'

ui_page "html/index.html"

files {
    'html/index.html',
    'html/js/script.js',
    'html/css/style.css',
    'html/img/radio.png',
    'config/*.lua',
    'locales/*.json'
}

dependency 'pma-voice'

lua54 'yes'
use_experimental_fxv2_oal 'yes'