var config = {
    db: {
        host: '',
        user: '',
        pass: '',
        db: 'ruufmt'
    },
    sc: {
        url: "http://www.ufmt.br/ufmt/unidade/index.php/secao/visualizar/3793/RU",
        htmlHeader: {
            'user-agent': 'Mozilla/5.0 (Windows NT 6.0) AppleWebKit/536.5 (KHTML, like Gecko)',
            'Accept-Language': 'pt'
        },
        htmlEncoding: "utf-8"
    },
    gcm:{
        apiKey:''
    }
}
module.exports = config;
