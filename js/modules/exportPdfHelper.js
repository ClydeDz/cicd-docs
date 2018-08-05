///////////////////////////////
//////   Image related
///////////////////////////////

function getBase64Image(img, oImageWidth, oImageHeight) {
    var canvas = document.createElement("canvas");
    canvas.width = (oImageWidth || img.width);
    canvas.height = (oImageHeight || img.height);
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL; //dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function getEnabledStatusIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAyNJREFUWMPtlk9oVFcUxn/nzptYkHYhAUWzUVynLQYmbzINkVKQgiiRdDfdiLgJoonpzlaxS2dUXLnpJu4KLUGx0EUbkviSDPhv46IgbqIR/wRmREjf5N3jYjIzmcx7k5nJdGW/1TD33Pf7znfunTfwsUva2XToylC34wR7CWyPGFQ0thR0rb7Ijebe/mcG3Kx70GLSghwDPg+rUXgkypQJ7KT3g/e0IwYS1xK7xcZ/BE4B8Sb9FkFumiC47E14r9o2kLyadK2a34A9LeVa1RtjzAnv7MxMVIGJWujPDnxn1fy9DThAt7X2TzeTGmkpATczmFSxfwE7tgHfKN8Y801YEnUG1mf+GNjdAfA74NP1zy/jjvTOnpl9vbGgbgTrB64T8D9sl79fVctd7ykW7YXNRTUG3Kx7kNJp367uFPIrx3OjubfE144CS6Xu5HRfNnUgOgF1vqf5qxbZ+Sd5Z+TJpSc+gBTjY0DP+lqXI6QjDajosQ7Ah6cvTa8C9GdSFxF+qm2yllE5hIeuDHXHzdrrpjDhulPIr5wodx4KL/dJ0D0/Nr9Sk0BM1vaF1OZVJS2w3CE4gFjjlEdSNWCM7t1UWFDlyOL47K1AGUJ40SD2kSbhJZatsioGREU31cVisVgXQG587h9rORxiYuuZhzqosioGAq2Leae19m7y2uBghIn24ABWKo1Ub8EOfymkdKe19nbyatItm5Ag+FqVXwr5leNtwUGh+LyS/MaVRDb1UOCLkE3vjTHfhv2WtwgHuL8wNtdXnwAgylTEpppxbAOOitYwagyYwE4CfgMTtxOZgf524YCva7FbNU3XRZr96gboaIOHFIBfgZMtwhG4Pj82dzYygVIKwWXgZYPnfNYmfNm3zs91vM1feBPeKyN2GPi3VUgDrVrV4fvnp99saQDAO+fNi5LukIlVFUkvjt9biEgmWonMQL+I/E6b/wsFlq3qcBQ8MoGyFsfvLcQd6UX1BtG3I0y+wHXfOr2N4FsmsFF92dQBR0iX3ufyZUTZA0GmgkAmcxMzz5pMqXW5WXcXxPepBD0AorElKD4vv+P/Vyv6AP7tWxzDVgMmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA4LTA0VDA3OjU0OjI0KzAwOjAwrQ8BwwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOC0wNFQwNzo1NDoyNCswMDowMNxSuX8AAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stbFBSS282Zm45r2VhAAAAAElFTkSuQmCC";
}

function getDisabledStatusIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAA8BJREFUWMPtlk1MXFUUx3/nPih2xql0Ukpt0UWliQtjJVMgY9SMDAmyakKipIvZGEkTu2riwg1saOLKjYtWbeJCFjbBkLCyJQVNjEWwaBNjE2MbNlhqg0YYZigfc48L7sw8mA9mOnWlZ/Xueefe3//+73v3XvivhzxKp5VY5JDx6o6KpQXJqJr6BauZewcmZ//81wQsx6KtxttKCHIaOFmi7JYK4xmbGWmcmrv7WASsxjubBYYUHQDqK9S7KcIn1tQNhyZuPHhkAStd7S8bkTGg2W8G6Fci/KKWBUQU4TAqEVS7EJp8tfcN9AUmZ6erFpDsbn9LVD4HGlxqHnQwGE6NyujtjWJ9NBKpTzWafpAh4IRLr6uSCE3NjlYswM18KgsX5GIgnDxfClwgJBrdnwpkrgKvZUUYeL2YE2Z3YjXe2exsdzPX94KTM+cqhQOkg/YM8Iov1WBhLNnb1rS7tkCAwBBuzQW5+OTkDx9WCgZIdXe+raqX3dgW+Na9OmLW6wfLCliORVvd1w4wHwgnz9cCF5GBYNrrEeEOgApn1+KnjpcUYLytBLlfTQersb0o/PrMZzI9vaYw7Mr2WTWJkgLcJgOwHAynRvfGlodn3wcPrl4BlpwLp/19cwJWYpFD5HY4uVrp7PeCA7ixvnbNl5Z7ouECAUa8Y7kOqj8/LrgvbmaH97ZsS4EAEXs0+6zIvSrhKsq5MnBQ9W3JeVZOgIpo3jO1VcLfDU7Nflyuj4h4vkaOlf8IrSzmCzhche3v7AV3k3o670aelRNgDQu+gkiF8IGytu9YAXkx+5ipMzlWToC7TNxy1V0aiew4emuC97Y2AG+41k9PXZv+q3AJABXG3RI0bZ9qtcMBUpvhfiC0PbQZ37Ey/sbfXZHn6sS7DewDfgumvZPpoD1TC1xjsSdSXvpX4Flgw/N4fv/E7HxRBxqn5u6K8KlrnkgFMtdqgQOsmrWPHBzQS354gQAAa+qGgfuu+WpN8O7290Vyh9uizdgLu2sKBIQmbjww0Aes+9LfBVLmi2psT8Y7LqPygUs9NCJ9B76ZW9pdW/pK1tXxpggjZG9Fwh2F4eDB1Sslr2S9rQ2pzXA/ynDedh4qkghNznxZrE/ZS2k63hG1MAYc8aWX2D5YbgJ/oGJEeEbRF9j+1UK+2kUj0he4PvN9Kcae1/Jkb1uTWa8fVOEs239HJbEBeslm7IVitlclIBtr8VPHrZqEO8/bilfpj4IZN56O7P7aaxbgj+WeaNjLcEzsZguAmvqFjMfv/h3u/6g0/gH+ArkQUH1qzwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOC0wNFQxMjowMDoxMiswMDowMLjMbUcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDgtMDRUMTI6MDA6MTIrMDA6MDDJkdX7AAAAKHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy90bXAvbWFnaWNrLV9ZNlpSNGhnjwrmagAAAABJRU5ErkJggg==";
}

///////////////////////////////
//////   Image related
///////////////////////////////

function setH2HeadingStyle(doc) {
    doc.setFontSize(h2FontSize_const);
    doc.setFontType('bold');
    doc.setTextColor(39, 39, 39);
    return doc;
}

function setH3HeadingStyle(doc) {
    doc.setFontSize(h3FontSize_const);
    doc.setFontType('normal');
    doc.setTextColor(142, 45, 226);
    return doc;
}

function setBodyStyle(doc) {
    doc.setFontSize(pFontSize_const);
    doc.setFontType('normal');
    doc.setTextColor(100);
    return doc;
}


///////////////////////////////
//////   Drawing an object
///////////////////////////////

function drawLine(doc) {
    var line = {
        x: pdf.xAxisValue,
        y: pdf.yAxisValue + 7,
        length: 560
    };
    doc.setDrawColor(100);
    doc.line(line.x, line.y, line.length, line.y);
    return doc;
}

