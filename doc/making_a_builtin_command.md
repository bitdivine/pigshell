
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


