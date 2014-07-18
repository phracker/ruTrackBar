plugin.loadMainCSS();
plugin.loadLang(true);

plugin.onLangLoaded = function() {
    this.addButtonToToolbar("ar", theUILang.ar, "location.href='https://alpharatio.cc/'", "help");
    // this.addButtonToToolbar("bcg", theUILang.bcg, "location.href='https://'", "help");
    this.addButtonToToolbar("bib", theUILang.bib, "location.href='https://bibliotik.org'", "help");
    this.addButtonToToolbar("bs", theUILang.bs, "location.href='https://brokenstones.me'", "help");
    // this.addButtonToToolbar("btn", theUILang.btn, "location.href='https://broadcasthe.net'", "help");
    // this.addButtonToToolbar("docs", theUILang.docs, "location.href='https://'", "help");
    // this.addButtonToToolbar("emp", theUILang.emp, "location.href='https://'", "help");
    // this.addButtonToToolbar("gft", theUILang.gft, "location.href='https://'", "help");
    // this.addButtonToToolbar("ggn", theUILang.ggn, "location.href='https://'", "help");
    // this.addButtonToToolbar("ipt", theUILang.ipt, "location.href='https://'", "help");
    // this.addButtonToToolbar("l13", theUILang.l13, "location.href='https://'", "help");
    // this.addButtonToToolbar("lib", theUILang.lib, "location.href='https://'", "help");
    // this.addButtonToToolbar("mu", theUILang.mu, "location.href='https://'", "help");
    // this.addButtonToToolbar("mya", theUILang.mya, "location.href='https://'", "help");
    // this.addButtonToToolbar("orlydb", theUILang.orlydb, "location.href='https://'", "help");
    // this.addButtonToToolbar("pcn", theUILang.pcn, "location.href='https://'", "help");
    this.addButtonToToolbar("predb", theUILang.predb, "location.href='https://predb.me'", "help");
    // this.addButtonToToolbar("ptm", theUILang.ptm, "location.href='https://'", "help");
    // this.addButtonToToolbar("ptp", theUILang.ptp, "location.href='https://'", "help");
    this.addButtonToToolbar("scc", theUILang.scc, "location.href='https://sceneaccess.eu'", "help");
    // this.addButtonToToolbar("speed", theUILang.speed, "location.href='https://'", "help");
    this.addButtonToToolbar("stp", theUILang.stp, "location.href='https://stopthepress.es'", "help");
    // this.addButtonToToolbar("tcn", theUILang.tcn, "location.href='https://'", "help");
    // this.addButtonToToolbar("tg", theUILang.tg, "location.href='https://'", "help");
    // this.addButtonToToolbar("tl", theUILang.tl, "location.href='https://'", "help");
    // this.addButtonToToolbar("tp2p", theUILang.tp2p, "location.href='https://'", "help");
    // this.addButtonToToolbar("ts", theUILang.ts, "location.href='https://'", "help");
    this.addButtonToToolbar("wcd", theUILang.wcd, "location.href='https://what.cd'", "help");
    // this.addButtonToToolbar("wfm", theUILang.wfm, "location.href='https://'", "help");
    // this.addButtonToToolbar("zenet", theUILang.zenet, "location.href='https://'", "help");
    this.addSeparatorToToolbar("help");
}