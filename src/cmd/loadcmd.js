
function LoadCmd(opts) {
    var self = this;
    LoadCmd.base.call(self, opts);
}

inherit(LoadCmd, Command);

LoadCmd.prototype.usage = 'loadcmd    -- load a builtin command from stdin\n\n' +
    'Usage:\n' +
    '    loadcmd\n';

LoadCmd.prototype.next = check_next(do_docopt(function(item) {
    var self = this,
        max = +self.docopts['-n'];

    self.unext({}, cef(self, function(item) {
        if (item instanceof Blob){
            var reader = new FileReader();
            reader.onload = function(){console.log("evaluating...",reader.result);eval(reader.result); self.exit(0);};
            reader.readAsText(item);
            return self.output("Your code will be loaded shortly.");
        }
        self.exit(1);
    }));
}));

Command.register("loadcmd", LoadCmd);
