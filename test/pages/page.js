class Page{
    open (path) {
        return browser.url(path)
        //return await browser.url(path);
    }
}


module.exports = new Page();