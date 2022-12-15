const images = {
    KNEE: '/images/knee.png',
    SMR: '/images/smr.png',
    PROMADE: '/images/promade.png',
    HIP: '/images/hip.png',
    SPACER: '/images/spacer.png',
    LIMA: '/images/lima_sign.png',
    ORTO: '/images/orto_sign.png',
    HIP_BANNER: '/images/rollup_hip.png',
    REV_BANNER: '/images/rollup_hip_rev.png',
    KNEE_BANNER: '/images/rollup_knee.png',
    SMR_BANNER: '/images/rollup_smr.png',
    REJOIN_BANNER: '/images/rejoin_sign.png',
    REJOIN_SMALL_BANNER: '/images/rejoin_sign.png',
}

export const getImage = (imageType) => {
    return images[imageType];
}
