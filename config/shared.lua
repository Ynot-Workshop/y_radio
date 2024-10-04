return {
    -- If false restrictedChannels restricts all decimals, if true you need to manually add each subchannel (100.01, 100.02 etc)
    whitelistSubChannels = false,

    ---@alias channelNumber number
    ---@type table<channelNumber, {jobName: boolean, jobName2: boolean}>
    ---Table of all restricted channels and the jobs that can use them
    restrictedChannels = {
        [100] = {
            police = true,
            sheriff = true,
        },
        [101] = {
            police = true,
            sheriff = true,
        },
        [102] = {
            police = true,
            sheriff = true,
        },
        [103] = {
            police = true,
            sheriff = true,
        },
        [104] = {
            police = true,
            sheriff = true,
        },
        [105] = {
            police = true,
            sheriff = true,
        },
        [106] = {
            police = true,
        },
        [107] = {
            police = true,
        },
        [108] = {
            police = true,
        },
        [109] = {
            police = true,
        },
        [110] = {
            police = true,
        },
        [111] = {
            sheriff = true,
        },
        [112] = {
            sheriff = true,
        },
        [113] = {
            sheriff = true,
        },
        [114] = {
            sheriff = true,
        },
        [115] = {
            sheriff = true,
        },
        [116] = {
            ambulance = true,
        },
        [117] = {
            ambulance = true,
        },
        [118] = {
            ambulance = true,
        },
        [119] = {
            ambulance = true,
        },
        [120] = {
            ambulance = true,
        },
        [121] = {
            police = true,
            sheriff = true,
            ambulance = true,
        },
        [122] = {
            police = true,
            sheriff = true,
            ambulance = true,
        },
        [123] = {
            police = true,
            sheriff = true,
            ambulance = true,
        },
        [124] = {
            police = true,
            sheriff = true,
            ambulance = true,
        },
        [125] = {
            police = true,
            sheriff = true,
            ambulance = true,
        },
        [126] = {
            police = true,
            sheriff = true,
            ambulance = true,
        },
        [127] = {
            police = true,
            sheriff = true,
            ambulance = true,
        },
        [128] = {
            police = true,
            sheriff = true,
            ambulance = true,
        },
        [129] = {
            police = true,
            sheriff = true,
            ambulance = true,
        },
        [130] = {
            police = true,
            sheriff = true,
            ambulance = true,
        },
    }
}
