
class Handle {
    get_result(calculation) {
        var i = 0;
        var args = calculation.split(" ");
        var cal;
        var result;
        
        for(i; i < args.length; i++) {
            if(isNaN(args[i]) == true) {
                if(args[i] == 'x') {
                    result = args[i--] * args[i++];
                }
            }
        }
    }
}