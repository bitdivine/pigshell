
Builtin commands are those such as cd and ls that come with pigshell itself.  Their code is in [`src/cmd/`](../src/cmd)

### Destructive testing:

Go on, break the code!  In `src/cmd/ls.js` call the non-existent but highly effective function called `boom`:

    function Ls(opts) {
        var self = this;
        boom;
        ...

Build by running `make` and then, in pigshell, try the newly knobbled ls:

    pig:/$ ls facebook
    Exception: Uncaught ReferenceError: boom is not defined

OK, now you know your code is being used!  Now fix it!  Bad boy.

    git checkout src/cmd/ls.js

### Registering a command

Here is a minimal command that does nothing:

    function Jline(opts) {
        // your code will go here
    }
    Command.register("jline", Jline);

If you put that in src/cmd/jline.js and build you should be able to run jline on the command line:

    pig:/$ jline
    pig:/$

If you don't:
   * Did you run `make`?
   * Look for your function in the newly compiled file `pigshell.js`.
   * Refresh the browser.  I haven't needed to but it might help!


### Hello Web

To print you need to access the API.  And no, `console.log` won't do that for you!  There is an HTML div that you can populate with, say, an image of a cute little piglet:

    function Jline(opts) {
        var self = this;
        Jline.base.call(self, opts);
    }
    inherit(Jline, Command);

    Jline.prototype.next = check_next(function(opts, cb) {
        var self = this
          , term = opts.term
          , tdiv = term.div;
        $('<img src="images/pigshell-logo-320x240.png" width="100px" />').appendTo(tdiv);
        $('<span>Doodlebug</span>').appendTo(tdiv);
        self.exit(0);
    });

    Command.register("jline", Jline);




