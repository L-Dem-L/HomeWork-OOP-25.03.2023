export class UrlInfo {
    constructor(url) {
        this.url = url;
        this.protocol = '';
        this.domain = '';
        this.path = '';
        this.parseUrl();
    }

    parseUrl() {
        const parts = this.url.split('://');
        this.protocol = parts[0];
        const domainPath = parts[1].split('/');
        this.domain = domainPath.shift();
        this.path = `/${domainPath.join('/')}`;
    }

    getInfo() {
        return `протокол: ${this.protocol}, домен: ${this.domain}, шлях: ${this.path}`;
    }
}

export function getUrlInfo(url) {
    const urlInfo = new UrlInfo(url);
    return urlInfo.getInfo();
}