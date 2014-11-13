function Jlisp(opts) {
    var self = this;
    Jlisp.base.call(self, opts);
}
inherit(Jlisp, Command);

Jlisp.prototype.next = check_next(function(opts, cb) {
    var self = this
      , term = opts.term
      , tdiv = term.div;
    $('<img src="images/pigshell-logo-320x240.png" width="100px" />').appendTo(tdiv);
    $('<span>Doodlebug</span>').appendTo(tdiv);
    self.exit(0);
});

Command.register("jlisp", Jlisp);

