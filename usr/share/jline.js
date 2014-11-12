function Jline(opts) {
    var self = this;
    self.countdown = 10;
    Jline.base.call(self, opts);
}
inherit(Jline, Command);

Jline.prototype.usage =
    [ 'jline'
    , 'Usage:'
    , '  jline'
    ].join("\n");

Jline.prototype.next = check_next(do_docopt(function(opts, cb) {
    if (this.countdown--) this.output(this.countdown + " green bottles\n");
    else this.exit(0);
}));

Command.register("jline", Jline);

