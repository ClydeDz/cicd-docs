////////////////////////////////////////
//////   Image processing
////////////////////////////////////////

function getBase64Image(img, oImageWidth, oImageHeight) {
    var canvas = document.createElement("canvas");
    canvas.width = (oImageWidth || img.width);
    canvas.height = (oImageHeight || img.height);
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL;
}

function getEnabledStatusIcon() {
    return "data:image/png;base64,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";
    ///return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAyNJREFUWMPtlk9oVFcUxn/nzptYkHYhAUWzUVynLQYmbzINkVKQgiiRdDfdiLgJoonpzlaxS2dUXLnpJu4KLUGx0EUbkviSDPhv46IgbqIR/wRmREjf5N3jYjIzmcx7k5nJdGW/1TD33Pf7znfunTfwsUva2XToylC34wR7CWyPGFQ0thR0rb7Ijebe/mcG3Kx70GLSghwDPg+rUXgkypQJ7KT3g/e0IwYS1xK7xcZ/BE4B8Sb9FkFumiC47E14r9o2kLyadK2a34A9LeVa1RtjzAnv7MxMVIGJWujPDnxn1fy9DThAt7X2TzeTGmkpATczmFSxfwE7tgHfKN8Y801YEnUG1mf+GNjdAfA74NP1zy/jjvTOnpl9vbGgbgTrB64T8D9sl79fVctd7ykW7YXNRTUG3Kx7kNJp367uFPIrx3OjubfE144CS6Xu5HRfNnUgOgF1vqf5qxbZ+Sd5Z+TJpSc+gBTjY0DP+lqXI6QjDajosQ7Ah6cvTa8C9GdSFxF+qm2yllE5hIeuDHXHzdrrpjDhulPIr5wodx4KL/dJ0D0/Nr9Sk0BM1vaF1OZVJS2w3CE4gFjjlEdSNWCM7t1UWFDlyOL47K1AGUJ40SD2kSbhJZatsioGREU31cVisVgXQG587h9rORxiYuuZhzqosioGAq2Leae19m7y2uBghIn24ABWKo1Ub8EOfymkdKe19nbyatItm5Ag+FqVXwr5leNtwUGh+LyS/MaVRDb1UOCLkE3vjTHfhv2WtwgHuL8wNtdXnwAgylTEpppxbAOOitYwagyYwE4CfgMTtxOZgf524YCva7FbNU3XRZr96gboaIOHFIBfgZMtwhG4Pj82dzYygVIKwWXgZYPnfNYmfNm3zs91vM1feBPeKyN2GPi3VUgDrVrV4fvnp99saQDAO+fNi5LukIlVFUkvjt9biEgmWonMQL+I/E6b/wsFlq3qcBQ8MoGyFsfvLcQd6UX1BtG3I0y+wHXfOr2N4FsmsFF92dQBR0iX3ufyZUTZA0GmgkAmcxMzz5pMqXW5WXcXxPepBD0AorElKD4vv+P/Vyv6AP7tWxzDVgMmAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA4LTA0VDA3OjU0OjI0KzAwOjAwrQ8BwwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOC0wNFQwNzo1NDoyNCswMDowMNxSuX8AAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stbFBSS282Zm45r2VhAAAAAElFTkSuQmCC";
}

function getDisabledStatusIcon() {
    return "data:image/png;base64,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";
    ///return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAA8BJREFUWMPtlk1MXFUUx3/nPih2xql0Ukpt0UWliQtjJVMgY9SMDAmyakKipIvZGEkTu2riwg1saOLKjYtWbeJCFjbBkLCyJQVNjEWwaBNjE2MbNlhqg0YYZigfc48L7sw8mA9mOnWlZ/Xueefe3//+73v3XvivhzxKp5VY5JDx6o6KpQXJqJr6BauZewcmZ//81wQsx6KtxttKCHIaOFmi7JYK4xmbGWmcmrv7WASsxjubBYYUHQDqK9S7KcIn1tQNhyZuPHhkAStd7S8bkTGg2W8G6Fci/KKWBUQU4TAqEVS7EJp8tfcN9AUmZ6erFpDsbn9LVD4HGlxqHnQwGE6NyujtjWJ9NBKpTzWafpAh4IRLr6uSCE3NjlYswM18KgsX5GIgnDxfClwgJBrdnwpkrgKvZUUYeL2YE2Z3YjXe2exsdzPX94KTM+cqhQOkg/YM8Iov1WBhLNnb1rS7tkCAwBBuzQW5+OTkDx9WCgZIdXe+raqX3dgW+Na9OmLW6wfLCliORVvd1w4wHwgnz9cCF5GBYNrrEeEOgApn1+KnjpcUYLytBLlfTQersb0o/PrMZzI9vaYw7Mr2WTWJkgLcJgOwHAynRvfGlodn3wcPrl4BlpwLp/19cwJWYpFD5HY4uVrp7PeCA7ixvnbNl5Z7ouECAUa8Y7kOqj8/LrgvbmaH97ZsS4EAEXs0+6zIvSrhKsq5MnBQ9W3JeVZOgIpo3jO1VcLfDU7Nflyuj4h4vkaOlf8IrSzmCzhche3v7AV3k3o670aelRNgDQu+gkiF8IGytu9YAXkx+5ipMzlWToC7TNxy1V0aiew4emuC97Y2AG+41k9PXZv+q3AJABXG3RI0bZ9qtcMBUpvhfiC0PbQZ37Ey/sbfXZHn6sS7DewDfgumvZPpoD1TC1xjsSdSXvpX4Flgw/N4fv/E7HxRBxqn5u6K8KlrnkgFMtdqgQOsmrWPHBzQS354gQAAa+qGgfuu+WpN8O7290Vyh9uizdgLu2sKBIQmbjww0Aes+9LfBVLmi2psT8Y7LqPygUs9NCJ9B76ZW9pdW/pK1tXxpggjZG9Fwh2F4eDB1Sslr2S9rQ2pzXA/ynDedh4qkghNznxZrE/ZS2k63hG1MAYc8aWX2D5YbgJ/oGJEeEbRF9j+1UK+2kUj0he4PvN9Kcae1/Jkb1uTWa8fVOEs239HJbEBeslm7IVitlclIBtr8VPHrZqEO8/bilfpj4IZN56O7P7aaxbgj+WeaNjLcEzsZguAmvqFjMfv/h3u/6g0/gH+ArkQUH1qzwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOC0wNFQxMjowMDoxMiswMDowMLjMbUcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDgtMDRUMTI6MDA6MTIrMDA6MDDJkdX7AAAAKHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy90bXAvbWFnaWNrLV9ZNlpSNGhnjwrmagAAAABJRU5ErkJggg==";
}

function getContinuousIntegrationEnabledIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAgRJREFUWMPll79qFVEQxn9Hoj6ANwaVNMY0gugVBDtrU9iID6BvYKd2itopGP9WqUWw0s4XsEzUThSiJIXRQoiaBMzP4u6VzebePbObpMqBLe7cM+f7vpnZ2Tmw21dq46SMAYeAw4VpEVhMiW87xlSZVO4qHxSHPO+LPce2E3hUeaSs1QBXnzXlodLZKvhp5WsA8EuNvdsWfEpZDoC/UV7U/L+sTDUF7wbBVc5mCKj8Vs40yXkk7CqvC58cgX468jWhPA6Cr/dVBQmoTOfAJxtU+8uSX5TAqjJRxtxT4XAF2BvI1Dpws0Vt7wMu1xG4EDzoeUq8a0FgE8ZIKYxjwPHAAX+BWxXb28rvg8C5If4nlNGUWNpgLZpOJI8zOYbK08wZpwY5TQVb7NEM+LiykjnnfH9/uQYMhH8mJT5n9twA9mf2rA9i3s2wXlHGt0G9ysm+z0jJfyHD+idwz41xup/ShgK8HlA/HKv4nkc/uSqXWqifLWNW+8CrAPthK6p+OEbDVvw/Ag3U17filPgIPNtB9U9S4lPtDqVTM+FsikAD9fPKgSpetQZIie/0+vWvoPprAfV/gIsp8SMc0+BIdjWgvvlIViLRzUxHuclpfmDfb0iio0wXFRx9O1aVB4NyvhUiE8odZa4GeE65XX3V6lbbq9kovWvZkcK0QO9qttTmvN29/gFB1S2K4zlVdQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOC0wOVQxMToxODoxNSswMDowMBuy4moAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDgtMDlUMTE6MTg6MTUrMDA6MDBq71rWAAAAKHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy90bXAvbWFnaWNrLWFjZWJ6OElasH7zYAAAAABJRU5ErkJggg==";
}

function getContinuousIntegrationDisabledIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAupJREFUWMPllrtrVEEUxr8zd42IrWs0cSuxURQSsLYXiYWPMsnsvXH/BRV8RLQ0hYIadjOzWIkPRIOdjdoEFHxgIz6KaIIYLSxEzN6dz2J3w2Y3995J1MoDF/bOnHO+3zncnTnA/26ylqByudyby+W2AuhrLs0HQTA/PDz85Z8BWGt3kNQAhgDsSnB7DWDaOWeiKHr3VwCMMXkROUPyGIB1nrw1AJO1Wm28VCp9XTOAMWYQwD0A2zIEPwIorLTunDsYRdHzpECVtGGt3Q/gsYf4Q5IzCXsFpdSTZi5/gEqlMkDyJoCNGeIQkVMZLhtJ3rbW7vUCMMbklVL3PcUfaK1nsvwAbCB5Z3JyclMmAMmzyG47ABDAuIdfywq5XO50KoC1doeIjHkmvKu1froKAIhIqVqtbk/rQBF+fzVXr9dXU33LepxzOhGA5JBnohtjY2Ov1gAANA6yboByudwLYKdHgjrJc8uSKDVD8lbrAfAoJX63MSbfesm1fgRB0O9ZwfUwDN+0L2itJ9rfrbVXSe5LSiAi/QAWlnVARLZ4iNdInk9zMMYUmndGojnnti51r22RHgAmDMMPaQ4ichLA+gwf1wVA8nOG+C8AF/60+k6tpW+gp6dnLo7jtLjvJC9OTU0tLSilJjpOwhNZ1QNAHMdzXR1oDhOvU+I2i8iR9gdtN6AxpoDGOZJlL9uv6M6DaNojQZJ5Vd+psQxARCwaw8SqbBXVLyqlqokAWuu3JK/9q+pF5Mro6Oj7RAAAiOP4HBoTzt+uflYp1XWGdAGUSqWvIjIE4IcPAMnjHtX/JHloZGTkWyYAAGitX4jI0SwIkttEJMwQ/yEih8MwfLbSZupQWqlUBprTUdKA8gnpw8usiBzUWr9IclApwYii6HmtVhsgeRnA4gouSeKLAC4FQTCYJp7ZgXarVqvb6/V6EcABEdmzkg/JVyIyrZSynV/7HwO0mzEmT7JPKdUPAM65ORGZLxaLC2vJ93/bb5nyI1Iv7sA3AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA4LTA5VDExOjE4OjQxKzAwOjAwpx3IHQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wOC0wOVQxMToxODo0MSswMDowMNZAcKEAAAAodEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL3RtcC9tYWdpY2stdDF5TDVUQTGqiS/DAAAAAElFTkSuQmCC";
}

function getBatchChangesEnabledIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAclJREFUWMPtlj9ME3EUxz+vbSosxIkrBh0oLoaom4bB0cXBmFhi4tiD3YA6EydNJHFu62Y0JQ7sOBiHwk5YsJgoDkcIcTCS0HBfB+hxDaR3Jf2z3De55H6/3/u+9/293/3ePUiQYMCw5ou7PXoTrIivsa44NtZK+d2lKLtMEFy2DgxhFuk8DiTFskud6HWBoa5E7hDHAnzlBhE8lIHBIdM713a1uJ0rBENpv5L3vvRPgHHXpGpoRu6W86h83VsJm/XwCLSDtBw88I80lbn62LX+ZEDUypO7M83h7HfnieDjEX61sHHj3vLU5mGPM9CK0qT3SfDO4M7l4b1Xzfm+3oLxn94C4quw5+6W8xB6+hFawa07LeXwd8u6ngIrA68DiYD2AowaRu3C3mPw2wl4Vp7wpssT3rSh+QuEj8XPwHHzEPy/zR4DduA33p9upFER2beAj/S5/a7j8c1YCwSEOxe3PvoLbHw4nb4FfANQ6tJtfAHshKvbeeiUf6YOCD4YvESparHuvEkhk68XACZKUXnvlH9GwEg2u/j3sDEleGCwpNO2cdX+eK+jBHTKP78BFDb7I1eQdP9E+eqVvFddNPwoAV3hJ0jQT/wHSIvKtgS+dzcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDgtMDlUMTE6MjY6MjMrMDA6MDBxxoYBAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA4LTA5VDExOjI2OjIzKzAwOjAwAJs+vQAAACh0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vdG1wL21hZ2ljay02V3BodHQ2cTdenJkAAAAASUVORK5CYII=";
}

function getBatchChangesDisabledIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAaJJREFUWMPtlrFv00AYxX+fE0VkyUIGkKB/ASpsoI45i4WBhXRhpP8AagtzxAQSlZhR2ZCQEQNzfI5Qhpa/o50ZI2W516FxZURVOyV1Fj/pk+/O37v3fLbvPmjQYM2wvJGm6SbwyszurmJiScdxHB+U5bVzcTP7Ddxa2ZOZVcqLFsk7qxRfBtHiemcd4kUDa0P7piaWdN97P8z7ZvZnMBj42lbAzJ4ASR6SxlmWPa/NAHAKfC/ETNLheDzeqMvAkXNuOw9JO8DtKIqSJEk6dRj4C3EcfwM+AY/7/f672g0ARFG0B/yStJ9/Dzf2FwBD772KAyGEi7akl8DPte8DjYEyA0eLuC5K+VcZeO2c23LObUnavYZ4JX4bzouHwvn9ArD5fP4lH5B0aGYfgQD8KBGuxJd0fGGgWLl470+Ae51O5yEwBWi1Wo8kAZw657avUl+Wf9k+8BV4a2ZJlmUfQggm6c3i3ucKS78U/x8D3W53NJvNHpjZM0kH+asxs7TX670vU1+Wf2nhJskmk8kQeAoQQkin02kyGo0CFfC//AYNasUZSNPKlc1Jj0cAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDgtMDlUMTE6Mjc6MDkrMDA6MDB4UbUMAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA4LTA5VDExOjI3OjA5KzAwOjAwCQwNsAAAACh0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vdG1wL21hZ2ljay1ac1N2UXg4RxrPdOYAAAAASUVORK5CYII=";
}

function getParallelismIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAABSNJREFUaN7tmm1oW1UYx//PTbq4MTsa54biS8vYOiZ7jTJhNsu9Jy0EHIrSb25O0OHLfPmgiFII2/ywgR8E3Rf1i27gh4oiQith997arJtzDYjYlYkQYUhRKKydUJIs5++HZbJ1SZo0u80S8odAcs9zznl+95yc8zz3XKCllppKUm8H+vr61uTz+XVa69lwODx56NAh3ZTAkUik0+fzfUIyBsAAABGZIhl3HOczr/r11QO2r6+vi+RPALbj5pt+N4A9XV1d/nQ67XrRt1EP4Hw+/zGAtWVM3o9Go9ubArinp+fewjQu65fW+vmmAPb5fOsq6Zdkd1MAi8iVCk1nmgI4HA5PAvirAtNEUwAX9tmBBcwmVq9efdKL/uuyLaXT6V86Ozu1iOzGrbHAhNb6yaGhoWkv+q5rpGWa5lYR2Q+gG8AVEUkEg8ETg4OD2Xr61VRashGORqObSR4kuRvAAwCyJM8B+MB13bGmAI5EIn6fz/e01vo1EYmUMMsDeNlxnM8bFriQAb1I8hVcG82FlBOR3bZtn20oYNM0Q4ZhHCC5F8DyKqtfDAQCW4eHhzNeAvtrbaC/v3/Z9PT0UyQPiEiU5GKb6s5ms+8COOwlcE0jbFnWEQAvoXzmU40yJLe6rnvRK+BaI62B2wgLAAER+TQej3sWAXoZWl4meRzVx8Th0dHRg40E/COAfXNzc/e7rntQRNqrbUBEPlRK9XoBXOt/+JYVynGc/9uMRCJ+wzBmAKxYRPNzJJ9zXfeb2wnsdba0cZGwALBcRL5WSh2PxWJVz5K6AIvIjgpNfyZ5qVgTJF/NZDJ/WpZ1RCm1oVafat6Hy8kwjFCF+/KQYRhfaa1PiciDRco7AAyQHDBNMy0i4yIyBeB727ZPVeWTl8Ba64pGmOS4bdu/X716dSeAc+VsRaQLQD/JN0g+Ua1PngHH43FDRLZV5IRhjANAMpmcmpmZ6RGROABPcmLPgMfGxroBrFzIjuQl27b/vv47lUrlbNs+7Pf7NwI4CSDXEMAkK5rOIjJe7HoikUg7jrM3l8s9DOA9AGdxLZWsSbUuWsdKFWitd4hUtM2nyhUmk8kpAEcBHI3FYu1zc3ObDMPYSLLD5/Odr9Zhzx4AmKbplkn6b9QzjuN865Uf8+XVlBYRqfRs6KPe3t71DQ2slFoPYFWF5g/l8/mkUmpLwwIDqDTCuq61JEdM09zZkMBa61LTebJMtQ4RSSilehoOWERCRS5nAoHA4yLyXZmq7SR/sCwr3EjAgmsn+zeJ5Pnh4eHZYDD4LMkvytRfAcDyCnjBfdiyrF8BzIpISmudApByXfcCgKJZgVKqi2SwSNEZABgcHMwDeMGyrFkAr3sFtihgpdQ9JDcDAMld1wMJy7JmAPw27yZMFKqVWrDO3PCdjuO8aVlWBsDbdwwwyVCJolUAdt14E5RSUyTHtdYdRSIstrW1zX/ITsdx3lFKrSG5744AFpFHK33OTPI+AHtKhJN/JBKJf0rUSy8VLLDAolVmhKvVkh2W1QScyWT2G4bRIyJvATgB4AIWl7GcWUQdT1R2So+NjV0BcLrwAQBEIpGVfr9/Wz6f32QYxiOFWfAYgGWl2iHZGMDFNDIy8u/8mxAKhdra29s3AAgVnmOFAIQA3AXgcjgcnnRdT16s8x64mFKpVA7AROHzJQDEYrFANpvdAmCt1y+MLjlwMRWOPatO0L1WXd61bAG3gFvALeAWcAu4uDw9PaxEInKa5LH51+rtV0uNqv8A08vpm+oFjfoAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDgtMDlUMTI6MzM6MDIrMDA6MDAP+fKCAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA4LTA5VDEyOjMzOjAyKzAwOjAwfqRKPgAAACh0RVh0c3ZnOmJhc2UtdXJpAGZpbGU6Ly8vdG1wL21hZ2ljay15aWpQTzMzcroiAXcAAAAASUVORK5CYII=";
}

function getServerIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAVBJREFUaN7tmDtOxDAURe9z6IEO0QE7oA1FZGUNAzuhne0wbCFKBS07YCpEi1hA8mgQQlFk51P4k3tK6znKkezCByB5I76BqqrORGQnIuehf9aFqn4VRfHUNM33YuFf2TcRuQotNJGjMebWJW1cu40xDwnJAsB113X3TifPBy5CG8xFRC7XCGfHyYI9rwBeBmt3AErH3GNo0TXCTdu2+/8L1tr9iPDfnLU2GuHNHWkK587sO6yq5fBOqmopIt65GJgtLCI1gHqwNmkuBjZ3pJ3CqvoZ+gcX8LFG+ADgGNpgBu/GmGfXgPd5WNf1ad/3OwA3oW0myB58z0NCSNqwaY3IsmlFDJvWXOHsYNOaAJtWSlA4d9i0fLBpJQab1kCYTSti2LQI2QBsWiOybFoRw6Y1Vzg72LQmwKaVEhTOHTYtH2xaicGmNRBm04oYNi0C4Ae4N8YrDj4YXgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOC0wOVQxMjozNToxNSswMDowMAvqvNUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDgtMDlUMTI6MzU6MTUrMDA6MDB6twRpAAAAKHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy90bXAvbWFnaWNrLWhyUjV1WlQzJebhBwAAAABJRU5ErkJggg==";
}

function getServerOffIcon() {
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAABERJREFUaN7tmsFr21Ycx78/KXFOIzbOxuhhsDV0YYdBG3IYNtR+lgehO2zt0pWNscF23a3Q47rSQ3bbP7BDDq3bmG4rYwQqy/EOYafsGBik9WVLFgisYSzE6aS3w5ygKM+SLD35WaZfEIbf+0nyh/fT009fHvBcoy0KSigWi7lMJvMugJdU/1k/cc7/0nX9fqPR2IsFzBj7EcA7qoFC6ommaRf8oLWgKxDR5wA2VJOE1Gu2bX/glxAIbFnWDhGxtEAT0ZlYwGmE9pMuCpbL5UI+n/9ze3vbOYq12+1/pqenfwCQA/AIwJrrIACveC6zBqDW/S0OkOnndrvd6jV4atEql8tXiKhGRI8ymcyVlZWVTtAdGGM3AXzpCX/VbDZvdsf5AIGP7yvSiZKuVCrvE1ENwDjn/NLh4eGD+fn5iQH+2cR1DGwYRpFzXgMwfhTjnF/qdDp3Z2dnxyNdfQh1DJzL5X7hnN8X5FzOZrPfj8pMHwPX63Wbc/4pgGVvUtBME9GLgnMKjLEbjLEbqiGFwADQarX+zefzH3LO7why/Wb6FjyvLCIyACx2j6HRqfdwvV63p6amPhFB91rI0vSeFjYervKui6BF5W1Z1o6u61UAvylm+qNvYOD/8u50Op8BeCIYvjw5OXnPC22a5pau60wh9GNN05b9EgK/lgqFwgsTExPfAlgQDH+3t7d3bX19/Zk7WK1Wz9i2/UWY68uGjf15CAALCwv67u7uEhF9dOoCRD+F7ciGQXqYpI2NDT43N/dwf3//LBG96Rk+5zjO+ZmZmQebm5u2aiApwKMEHRp4VKADn+FSqZQloqtElHOFxwBcB5AVnCJcyACAMfYegHNJgEjxtLqwvxLRq33e32/1bgJ4PQloxPW0NE27FgEW6NGGmqa5RUQXkVxHFtvTejnqnVW1oVI8rbRBywZeA/C151jzgx6m3nsswjkNr2fU9bQKPuccPdMnOjLTNLcqlcpFznkTwBuDAE60pN0alvJOEvhvEbTq8k4MmIi+6cc5GcArC0CEZ/jIq/LGiE72MI7jvEVELQBP4enIXDN9ojmxLGunWq1Wk2xO+p5hj1e1CGCxGxPl3Ya4/QQUzfTAFi2RVCxkvsCc860UQv8eB3gZYk9LOrSk1fuxpml1v4TAz0PDMCYdx7kK4KxExvMA3hbE43hk8jwt2VLpkfXleMiSSudECbBKaGXAqqCjelqyFdsjU+1pyVZYj0yZpyVbYdtQdZ6WbIXtyJR6WqqgZQOH9bTceVKh47ShvotW0P6rsHlJ7NOK2pGlqqTdirqPLLXAUaFTDRwFuu9nmHPeIKKGJ2Z4bR5P3iC2LvXsyGIBD7PCLGSpL2m3wpS3ck9r0NBD4WklAX1wcLAkGvM14lut1lPDMC4k4GnJltcjewbBLkJAkaclWx6PzAbwcbPZrI0sMACUSqUxTdOWOOcPV1dXe24//A8m8QVrO1wgvwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOC0wOVQxMjozNTozMCswMDowMBv3lA8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDgtMDlUMTI6MzU6MzArMDA6MDBqqiyzAAAAKHRFWHRzdmc6YmFzZS11cmkAZmlsZTovLy90bXAvbWFnaWNrLUhFb1JnMWVvOLAGGwAAAABJRU5ErkJggg==";
}

////////////////////////////////////////
//////   Alignment and styling
////////////////////////////////////////

function setH1HeadingStyle(doc) {
    doc.setFontSize(pdf.h1FontSize);
    doc.setTextColor(39, 39, 39);
    return doc;
}

function setH2HeadingStyle(doc) {
    doc.setFontSize(pdf.h2FontSize);
    doc.setFontType('bold');
    doc.setTextColor(39, 39, 39);
    return doc;
}

function setH3HeadingStyle(doc) {
    doc.setFontSize(pdf.h3FontSize);
    doc.setFontType('normal');
    doc.setTextColor(142, 45, 226);
    return doc;
}

function setH4HeadingStyle(doc) {
    doc.setFontSize(pdf.h4FontSize);
    doc.setFontType('bold');
    doc.setTextColor(142, 45, 226);
    return doc;
}

function setH5HeadingStyle(doc) {
    doc.setFontSize(pdf.h5FontSize);
    doc.setFontType('normal');
    doc.setTextColor(39, 39, 39);
    return doc;
}

function setBodyStyle(doc) {
    doc.setFontSize(pdf.bodyFontSize);
    doc.setFontType('normal');
    doc.setTextColor(100);
    return doc;
}

function addNewBodyLine(doc, type) {
    if (isPageAlmostOver(doc, pdf.yAxisValue)) {
        doc.addPage('p', 'pt');
        pdf.yAxisValue = 50;
    } else {
        if (type === lineHeightType.BODY) {
            pdf.addNewBodyLine();
        }
        if (type === lineHeightType.HEADING) {
            pdf.addNewHeadingLine();
        }
        if (type === lineHeightType.SUBHEADING) {
            pdf.addNewSubHeadingLine();
        }
    }
    return doc;
}


////////////////////////////////////////
//////   Drawing an object
////////////////////////////////////////

function drawLine(doc, length) {
    var line = {
        x: pdf.xAxisValue,
        y: pdf.yAxisValue + 7,
        length: length
    };
    doc.setDrawColor(100);
    doc.line(line.x, line.y, line.length, line.y);
    return doc;
}



////////////////////////////////////////
//////   Decision making
////////////////////////////////////////

function getEnabledDisabledIcon(status) {
    return status ? getEnabledStatusIcon() : getDisabledStatusIcon();
}

function getFileName() {
    var today = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let _getDate = () => {
        if (today.getDate() < 10) { return `0${today.getDate()}`; }
        else { return today.getDate();}
    }
    var dateForFileName = `${today.getFullYear()}${monthNames[today.getMonth()]}${_getDate()}${today.getMilliseconds()}`;
    return `CICD-Docs-${dateForFileName}`;
}

function isPageAlmostOver(doc, currentYAxisValue) {
    var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    return currentYAxisValue >= (pageHeight - 100);
}


////////////////////////////////////////
//////   Footer
////////////////////////////////////////

function addPageFooter(doc) {
    var totalPages = doc.internal.getNumberOfPages();
    for (var pageCounter = 1; pageCounter <= totalPages; pageCounter++) {
        doc.setPage(pageCounter);
        doc.setFontSize(7);
        var pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
        var footerText = `Generated using ${appName} [${appUrl}] on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()} | Version ${appVersionNumber}`;
        doc.text(pdf.xAxisValue, pageHeight - 15, `Page ${pageCounter} of ${totalPages} | ${footerText}`);
    }
    return doc;
}
