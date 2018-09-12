var v =(x)=>(x===undefined)?0:x;
var item =(rv,gv,bv)=>{
    return {
        r:v(rv),
        g:v(gv),
        b:v(bv)
    };
};

var style=(c)=>{
        return{
            'background-color':'RGB(' + v(c.r) + ','+ v(c.g)+','+ v(c.b)+ ')',
            'color':'RGB(' + (255-v(c.r)) + ','+ (255-v(c.g))+','+ (255-v(c.b))+ ')'
        };
    };

export default{
        item:item,
        style:style
}
