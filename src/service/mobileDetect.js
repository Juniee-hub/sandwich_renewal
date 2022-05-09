import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);

export const isPhone = () => {
     return md.phone();
}

export const mobileDetect = () => {
     return md.mobile();
}
