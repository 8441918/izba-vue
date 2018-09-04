const IzbaUrl = function(){
    var parser = document.createElement('a');
    parser.href = window.location.href;
    var currentUrl = {
        host:parser.host,
        hostname:parser.hostname,
        params:[],
        pathname:parser.pathname,
        port:parser.port,
        protocol:parser.protocol
    };
    
    var queries =  parser.search.replace(/^\?/, '').split('&');
    for(let i = 0; i < queries.length; i++ ) {
        let split = queries[i].split('=');
        currentUrl.params[split[0]] = split[1];
    }

    return{
        build:function(params){
            var current = currentUrl.protocol + '//' + currentUrl.host + ':' + 
                    currentUrl.port + currentUrl.pathname + '?';
            for (let i = 0; i < params.length; i++)
                current += params[i].name + '=' + params[i].value;
            return current;
        },
        url:currentUrl
    };
};

export default IzbaUrl;

