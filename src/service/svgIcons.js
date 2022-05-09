import { Map } from 'immutable';
const svg = (key,color) => {return Map({
    toggle : '<svg x="0px" y="0px" viewBox="0 0 18 13" width="100%" height="100%" xml:space="preserve"><style type="text/css">.st0{fill:none;stroke:#212121;stroke-width:2;stroke-linecap:round;}</style><g id="그룹_5092" transform="translate(-15 -44.5)"><line id="선_7" class="st0" x1="16" y1="45.5" x2="32" y2="45.5"/><line id="선_8" class="st0" x1="16" y1="51" x2="32" y2="51"/><line id="선_9" class="st0" x1="16" y1="56.5" x2="32" y2="56.5"/></g></svg>',
    dotThree: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="4" viewBox="0 0 18 4"><g id="그룹_6130" data-name="그룹 6130" transform="translate(10444 2447)"><circle id="타원_113" data-name="타원 113" cx="2" cy="2" r="2" transform="translate(-10444 -2447)" fill="#2a2a2a"/><circle id="타원_114" data-name="타원 114" cx="2" cy="2" r="2" transform="translate(-10437 -2447)" fill="#2a2a2a"/><circle id="타원_115" data-name="타원 115" cx="2" cy="2" r="2" transform="translate(-10430 -2447)" fill="#2a2a2a"/></g></svg>',
    selectBoxArrow : '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5"><path id="다각형_5" data-name="다각형 5" d="M4,0,8,5H0Z" transform="translate(8 5) rotate(180)" fill="'+color+'"/></svg>',
    arrowRight: ' <svg xmlns="http://www.w3.org/2000/svg" width="6.832" height="12.866" viewBox="0 0 6.832 12.866"><path id="패스_4882" data-name="패스 4882" d="M-7144.922,1111.485l-5.021,5.473,5.021,5.273" transform="translate(-7143.862 1123.291) rotate(180)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/></svg>',
    arrowLeft:'<svg xmlns="http://www.w3.org/2000/svg" width="9.808" height="16.117" viewBox="0 0 9.808 16.117"><path id="패스_484" data-name="패스 484" d="M8,14,0,7,8,0" transform="translate(0.75 1.058)" fill="none" stroke="#212121" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    modalCloseX : '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21 21"><g id="그룹_5094" data-name="그룹 5094" transform="translate(-1072.086 -94.086)"><line id="선_29" data-name="선 29" x2="18.596" y2="18.596" transform="translate(1073.5 95.5)" fill="none" stroke="'+color+'" stroke-linecap="round" stroke-width="black"/><line id="선_30" data-name="선 30" x1="18.596" y2="18.596" transform="translate(1073.5 95.5)" fill="none" stroke="'+color+'" stroke-linecap="round" stroke-width="black"/></g></svg>',
    editorPlus:'<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"><g id="그룹_5801" data-name="그룹 5801" transform="translate(-912.204 -82.204)"><line id="선_135" data-name="선 135" x2="10" transform="translate(912.204 87.204)" fill="none" stroke="'+color+'" stroke-width="2"/><line id="선_134" data-name="선 134" x2="10" transform="translate(917.204 82.204) rotate(90)" fill="none" stroke="'+color+'" stroke-width="2"/></g></svg>',
    memberAdd:'<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 21.726 15.649"><g id="그룹_5709" data-name="그룹 5709" transform="translate(0.5 0.5)"><g id="그룹_5693" data-name="그룹 5693" transform="translate(0 0)"><ellipse id="타원_91" data-name="타원 91" cx="3.601" cy="3.65" rx="3.601" ry="3.65" transform="translate(2.222)" fill="#3b3b3b" stroke="#3b3b3b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><path id="패스_4840" data-name="패스 4840" d="M620.324,1613.161H608.5a4.63,4.63,0,0,1,4.6-4.661h2.628a4.63,4.63,0,0,1,4.6,4.661Z" transform="translate(-608.5 -1598.513)" fill="#3b3b3b" stroke="#3b3b3b" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><g id="그룹_5694" data-name="그룹 5694" transform="translate(13.024 3.173)"><line id="선_112" data-name="선 112" y2="7.3" transform="translate(3.601 0)" fill="none" stroke="#3b3b3b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><line id="선_113" data-name="선 113" x2="7.202" transform="translate(0 3.65)" fill="none" stroke="#3b3b3b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></g></svg>',
    watch:'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><g id="그룹_5773" data-name="그룹 5773" transform="translate(-1273 -1176)"><circle id="타원_98" data-name="타원 98" cx="7" cy="7" r="7" transform="translate(1273.5 1176.5)" fill="none" stroke="#ABABAC" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line id="선_128" data-name="선 128" y2="4" transform="translate(1280.5 1179.5)" fill="none" stroke="#ABABAC" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line id="선_129" data-name="선 129" x1="3" y1="3" transform="translate(1280.5 1183.5)" fill="none" stroke="#ABABAC" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g></svg>',
    fileDown:'<svg xmlns="http://www.w3.org/2000/svg" width="9.157" height="8.741" viewBox="0 0 9.157 8.741"><g id="그룹_6081" data-name="그룹 6081" transform="translate(60.022 -324)"><g id="그룹_6080" data-name="그룹 6080" transform="translate(-57.476 328.167)"><line id="선_175" data-name="선 175" x1="2.037" y2="2.037" transform="translate(2.037)" fill="none" stroke="#57595f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line id="선_176" data-name="선 176" x2="2.037" y2="2.037" fill="none" stroke="#57595f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g><line id="선_177" data-name="선 177" x1="8.157" transform="translate(-59.522 332.241)" fill="none" stroke="#57595f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/><line id="선_178" data-name="선 178" y2="5.704" transform="translate(-55.439 324.5)" fill="none" stroke="#57595f" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"/></g></svg>',
    fileUpload:'<svg xmlns="http://www.w3.org/2000/svg" width="14.524" height="16.124" viewBox="0 0 14.524 16.124"><path id="패스_3438" data-name="패스 3438" d="M1587.68,391.7l6-6a3.919,3.919,0,1,1,5.542,5.542l-7.159,7.159a2.939,2.939,0,0,1-4.157-4.157l7.159-7.159a1.96,1.96,0,0,1,2.771,2.771l-6.465,6.466" transform="translate(-1586.45 -383.951)" fill="none" stroke="'+color+'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/></svg>',
    emoji:'<svg xmlns="http://www.w3.org/2000/svg" width="16.2" height="16.2" viewBox="0 0 16.2 16.2"><g id="그룹_6082" data-name="그룹 6082" transform="translate(-538.4 -78.4)"><circle id="타원_58" data-name="타원 58" cx="1" cy="1" r="1" transform="translate(541.948 83)" fill="'+color+'"/><circle id="타원_59" data-name="타원 59" cx="1" cy="1" r="1" transform="translate(548.926 83)" fill="'+color+'"/><circle id="타원_60" data-name="타원 60" cx="7.5" cy="7.5" r="7.5" transform="translate(539 79)" fill="none" stroke="'+color+'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/><path id="패스_3439" data-name="패스 3439" d="M1237.469,254.5a3.984,3.984,0,1,1-7.969,0Z" transform="translate(-686.884 -166.742)" fill="none" stroke="'+color+'" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"/></g></svg>',
    calendar:'<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14.259" viewBox="0 0 14 14.259"><g id="그룹_6084" data-name="그룹 6084" transform="translate(-556 -78.741)"><g id="사각형_1327" data-name="사각형 1327" transform="translate(556 80)" fill="none" stroke="'+color+'" stroke-linecap="round" stroke-width="1.2"><rect width="14" height="13" rx="1" stroke="none"/><rect x="0.6" y="0.6" width="12.8" height="11.8" rx="0.4" fill="none"/></g><line id="선_181" data-name="선 181" x2="13" transform="translate(556.5 84.5)" fill="none" stroke="'+color+'" stroke-width="1.2"/><g id="그룹_6083" data-name="그룹 6083" transform="translate(0.5)"><line id="선_182" data-name="선 182" y1="2.37" transform="translate(559.5 79.341)" fill="none" stroke="'+color+'" stroke-linecap="round" stroke-width="1.2"/><line id="선_183" data-name="선 183" y1="2.37" transform="translate(565.5 79.341)" fill="none" stroke="'+color+'" stroke-linecap="round" stroke-width="1.2"/></g></g></svg>',
    crown:'<svg xmlns="http://www.w3.org/2000/svg" width="10.039" height="8.64" viewBox="0 0 10.039 8.64"><path id="패스_4919" data-name="패스 4919" d="M-9418.531,234.659l-2.207-5.458,3.408,1.62,1.832-4.8,1.982,4.8,2.816-1.62-1.754,5.458Z" transform="translate(9420.738 -226.02)" fill="#fff"/></svg>',
}).get(key)} 

export const getInitialSvgIcon = (key,color) => {
    const newColor = color ? color : '#000';
   return svg(key,newColor);
}