'use strict';

let Enum = require('enum');

module.exports = {
    CorsairDeviceType: new Enum([
        'CDT_Unknown',
        'CDT_Mouse',
        'CDT_Keyboard',
        'CDT_Headset'
    ]),
    CorsairPhysicalLayout: new Enum([
        'CPL_Invalid',
        'CPL_US',
        'CPL_UK',
        'CPL_BR',
        'CPL_JP',
        'CPL_KR',
        'CPL_Zones1',
        'CPL_Zones2',
        'CPL_Zones3',
        'CPL_Zones4'
    ]),
    CorsairLogicalLayout: new Enum([
        'CLL_Invalid',
        'CLL_US_Int',
        'CLL_NA',
        'CLL_EU',
        'CLL_UK',
        'CLL_BE',
        'CLL_BR',
        'CLL_CH',
        'CLL_CN',
        'CLL_DE',
        'CLL_ES',
        'CLL_FR',
        'CLL_IT',
        'CLL_ND',
        'CLL_RU',
        'CLL_JP',
        'CLL_KR',
        'CLL_TW',
        'CLL_MEX'
    ]),
    CorsairDeviceCaps: new Enum([
        'CDC_None',
        'CDC_Lighting'
    ]),
    CorsairAccessMode: new Enum([
        'CAM_ExclusiveLightingControl'
    ]),
    CorsairError: new Enum([
        'CE_Success',
        'CE_ServerNotFound',
        'CE_NoControl',
        'CE_ProtocolHandshakeMissing',
        'CE_IncompatibleProtocol',
        'CE_InvalidArguments'
    ]),
    CorsairLedId: new Enum([
        'CLI_Invalid',
        'CLK_Escape',
        'CLK_F1',
        'CLK_F2',
        'CLK_F3',
        'CLK_F4',
        'CLK_F5',
        'CLK_F6',
        'CLK_F7',
        'CLK_F8',
        'CLK_F9',
        'CLK_F10',
        'CLK_F11',
        'CLK_GraveAccentAndTilde',
        'CLK_1',
        'CLK_2',
        'CLK_3',
        'CLK_4',
        'CLK_5',
        'CLK_6',
        'CLK_7',
        'CLK_8',
        'CLK_9',
        'CLK_0',
        'CLK_MinusAndUnderscore',
        'CLK_Tab',
        'CLK_Q',
        'CLK_W',
        'CLK_E',
        'CLK_R',
        'CLK_T',
        'CLK_Y',
        'CLK_U',
        'CLK_I',
        'CLK_O',
        'CLK_P',
        'CLK_BracketLeft',
        'CLK_CapsLock',
        'CLK_A',
        'CLK_S',
        'CLK_D',
        'CLK_F',
        'CLK_G',
        'CLK_H',
        'CLK_J',
        'CLK_K',
        'CLK_L',
        'CLK_SemicolonAndColon',
        'CLK_ApostropheAndDoubleQuote',
        'CLK_LeftShift',
        'CLK_NonUsBackslash',
        'CLK_Z',
        'CLK_X',
        'CLK_C',
        'CLK_V',
        'CLK_B',
        'CLK_N',
        'CLK_M',
        'CLK_CommaAndLessThan',
        'CLK_PeriodAndBiggerThan',
        'CLK_SlashAndQuestionMark',
        'CLK_LeftCtrl',
        'CLK_LeftGui',
        'CLK_LeftAlt',
        'CLK_Lang2',
        'CLK_Space',
        'CLK_Lang1',
        'CLK_International2',
        'CLK_RightAlt',
        'CLK_RightGui',
        'CLK_Application',
        'CLK_LedProgramming',
        'CLK_Brightness',
        'CLK_F12',
        'CLK_PrintScreen',
        'CLK_ScrollLock',
        'CLK_PauseBreak',
        'CLK_Insert',
        'CLK_Home',
        'CLK_PageUp',
        'CLK_BracketRight',
        'CLK_Backslash',
        'CLK_NonUsTilde',
        'CLK_Enter',
        'CLK_International1',
        'CLK_EqualsAndPlus',
        'CLK_International3',
        'CLK_Backspace',
        'CLK_Delete',
        'CLK_End',
        'CLK_PageDown',
        'CLK_RightShift',
        'CLK_RightCtrl',
        'CLK_UpArrow',
        'CLK_LeftArrow',
        'CLK_DownArrow',
        'CLK_RightArrow',
        'CLK_WinLock',
        'CLK_Mute',
        'CLK_Stop',
        'CLK_ScanPreviousTrack',
        'CLK_PlayPause',
        'CLK_ScanNextTrack',
        'CLK_NumLock',
        'CLK_KeypadSlash',
        'CLK_KeypadAsterisk',
        'CLK_KeypadMinus',
        'CLK_KeypadPlus',
        'CLK_KeypadEnter',
        'CLK_Keypad7',
        'CLK_Keypad8',
        'CLK_Keypad9',
        'CLK_KeypadComma',
        'CLK_Keypad4',
        'CLK_Keypad5',
        'CLK_Keypad6',
        'CLK_Keypad1',
        'CLK_Keypad2',
        'CLK_Keypad3',
        'CLK_Keypad0',
        'CLK_KeypadPeriodAndDelete',
        'CLK_G1',
        'CLK_G2',
        'CLK_G3',
        'CLK_G4',
        'CLK_G5',
        'CLK_G6',
        'CLK_G7',
        'CLK_G8',
        'CLK_G9',
        'CLK_G10',
        'CLK_VolumeUp',
        'CLK_VolumeDown',
        'CLK_MR',
        'CLK_M1',
        'CLK_M2',
        'CLK_M3',
        'CLK_G11',
        'CLK_G12',
        'CLK_G13',
        'CLK_G14',
        'CLK_G15',
        'CLK_G16',
        'CLK_G17',
        'CLK_G18',
        'CLK_International5',
        'CLK_International4',
        'CLK_Fn',
        'CLM_1',
        'CLM_2',
        'CLM_3',
        'CLM_4',
        'CLH_LeftLogo',
        'CLH_RightLogo',
        'CLK_Logo'
    ])
};
