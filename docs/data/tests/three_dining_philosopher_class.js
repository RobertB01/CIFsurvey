/** Tuples. */


/** spec code generated from a CIF specification. */
class spec_class {
    /** specEnum declaration. It contains the single merged enum from the CIF model. */
    specEnum = Object.freeze({
        /** Literal "E". */
        _E: Symbol("E"),

        /** Literal "F1". */
        _F1: Symbol("F1"),

        /** Literal "F2". */
        _F2: Symbol("F2"),

        /** Literal "F3". */
        _F3: Symbol("F3"),

        /** Literal "I". */
        _I: Symbol("I"),

        /** Literal "P1". */
        _P1: Symbol("P1"),

        /** Literal "P2". */
        _P2: Symbol("P2"),

        /** Literal "P3". */
        _P3: Symbol("P3"),

        /** Literal "T". */
        _T: Symbol("T")
    })

    /** Should execution timing information be provided? */
    doInfoExec = true;

    /** Should executed event information be provided? */
    doInfoEvent = true;

    /** Should print output be provided? */
    doInfoPrintOutput = true;

    /** Should state output be provided? */
    doStateOutput = false;

    /** Should transition output be provided? */
    doTransitionOutput = true;

    /** Whether the constants have been initialized already. */
    constantsInitialized = false;

    /** Whether the SVG copy and move declarations have been applied already. */
    svgCopiesAndMovesApplied = false;

    /** Whether this is the first time the code is (to be) executed. */
    firstExec;

    /** The names of all the events. */
    EVENT_NAMES = [
        "p1f",
        "p1f1",
        "p1f3",
        "p2f",
        "p2f1",
        "p2f2",
        "p3f",
        "p3f2",
        "p3f3"
    ];


    /** Variable 'time', tracks elapsed time for a session. */
    time;

    /**
     * The frequency in times per second, that the code should
     * be executed (if positive), or execute as fast as possible, that is
     * as many times per second as possible (if negative or zero).
     */
    frequency = 60;

    /**
     * Whether the next execution is the first execution of the session.
     * Used to initialize time-related variables for starting, pausing,
     * resuming or resetting each session.
     */
    first;

    /**
     * Whether the simulation is currently running, and should process
     * user input, or is paused.
     */
    playing;

    /** The start time of the current session. */
    startMilli;

    /**
     * The targeted end time of the current/next cycle, to ensure
     * that the duration of the cycle matches with the configured
     * frequency.
     */
    targetMilli;


    /** Discrete variable "fork1". */
    fork1_;

    /** Discrete variable "fork2". */
    fork2_;

    /** Discrete variable "fork3". */
    fork3_;

    /** Discrete variable "philosopher1". */
    philosopher1_;

    /** Discrete variable "philosopher2". */
    philosopher2_;

    /** Discrete variable "philosopher3". */
    philosopher3_;


    /** SVG output elements. */


    /**
     * SVG input queue with functions for handling clicked SVG
     * input elements, from first clicked at the head of the array
     * to last clicked at the tail of the array.
     */
    svgInQueue;

    /**
     * The SVG input id corresponding to the SVG input element that
     * was clicked. Is 'null' if no SVG input element was clicked so
     * far, or all clicks have already been processed.
     */
    svgInId;

    /**
     * The 0-based index of the event corresponding to the SVG input
     * element that was clicked. Is '-1' if no SVG input element was
     * clicked so far, or all clicks have already been processed.
     */
    svgInEvent;

    /** SVG input click event handlers. */


    /** SVG input event setters. */


    /** Starts the simulation. */
    start() {
        if (!this.playing) {
            this.playing = true;
            this.exec();
        }
    }

    /** Stops the simulation. */
    stop() {
        if (this.playing) {
            this.playing = false;
        }
    }

    /** Resets the object to its initial state. */
    reset() {
        this.stop();
        this.firstExec = true;
        this.time = 0.0;
        this.first = true;
        this.timePaused = null;
        this.initState();
        this.initUI();
        this.updateUI();
    }

    /**
     * Execute the code once. Inputs are read, transitions are executed until
     * none are possible, outputs are written, etc.
     *
     * @param newTime The time in seconds, since the start of the first
     *      execution.
     * @throws specException In case of a runtime error caused by code
     *      generated from the CIF model.
     */
    execOnce(newTime) {
        // Pre execution notification.
        this.preExec();

        // Update values of input variables.
        this.updateInputs();

        // Initialize the state.
        if (this.firstExec) {
            this.initState();
        }

        // Calculate time delta.
        var delta = newTime - this.time;

        // Update values of continuous variables.
        if (!this.firstExec) {
                        // No continuous variables, except variable 'time'.
        }

        // Update time.
        this.time = newTime;

        // Apply print declarations.
        if (this.firstExec) {
            // For 'initial' transition.
            if (this.doInfoPrintOutput) this.printOutput(-3, true);
            if (this.doInfoPrintOutput) this.printOutput(-3, false);
            if (this.doStateOutput) spec.log('Initial state: ' + spec.getStateText());
            if (this.doStateOutput || this.doTransitionOutput) this.log('');

        } else {
            // For 'post' of time transition.
            if (this.doInfoPrintOutput) this.printOutput(-2, false);
        }

        // Execute SVG input edges as long as they are possible.
        while (true) {
            // Handle next element from SVG input queue, if not already already processing one.
            if (this.svgInEvent == -1 && this.svgInQueue.length > 0) {
                var func = this.svgInQueue.shift(); // Remove head of the queue.
                func(); // Call function, to set the event to allow.
            }

            // Try to execute an edge for each event.
            var edgeExecuted = false;


            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Make sure all outstanding SVG input clicks have been processed.
        console.assert(this.svgInEvent == -1);

        // Execute uncontrollable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;

            // Event "p1f".
            edgeExecuted |= this.execEdge0();

            // Event "p1f1".
            edgeExecuted |= this.execEdge1();

            // Event "p1f3".
            edgeExecuted |= this.execEdge2();

            // Event "p2f".
            edgeExecuted |= this.execEdge3();

            // Event "p2f1".
            edgeExecuted |= this.execEdge4();

            // Event "p2f2".
            edgeExecuted |= this.execEdge5();

            // Event "p3f".
            edgeExecuted |= this.execEdge6();

            // Event "p3f2".
            edgeExecuted |= this.execEdge7();

            // Event "p3f3".
            edgeExecuted |= this.execEdge8();

            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Execute controllable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;


            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Apply print declarations for 'pre' of time transition.
        if (this.doInfoPrintOutput) this.printOutput(-2, true);

        // Post execution notification.
        this.postExec();

        // Done.
        this.firstExec = false;
    }

    /**
     * Calls {@link #execWhile}, which repeatedly {@link #execOnce executes the code}.
     *
     * @throws specException In case of a runtime error caused by code
     *      generated from the CIF model.
     */
    exec() {
        this.execWhile(1);
    }

    /**
     * Repeatedly {@link #execOnce executes the code}.
     *
     * @param delay The delay before executing, in milliseconds.
     *
     * @throws specException In case of a runtime error caused by code
     *      generated from the CIF model.
     */
    execWhile(delay) {
        setTimeout(
            function () {
                // Pre execution timing.
                var now = Date.now();
                var preMilli = now;

                // On first execution, initialize variables for timing.
                if (spec.first) {
                    spec.first = false;
                    spec.startMilli = now;
                    spec.targetMilli = spec.startMilli;
                    preMilli = spec.startMilli;
                }

                // Handle pausing/playing.
                if (!spec.playing) {
                    spec.timePaused = now;
                    return;
                }

                if (spec.timePaused) {
                    spec.startMilli += (now - spec.timePaused);
                    spec.targetMilli += (now - spec.timePaused);
                    spec.timePaused = null;
                }

                // Get cycle time and current 'time'.
                var frequency = spec.frequency;
                var cycleMilli = (frequency <= 0) ? -1 : 1e3 / frequency;
                var timeMilli = preMilli - spec.startMilli;

                // Execute once.
                spec.execOnce(timeMilli / 1e3);

                // Post execution timing.
                var postMilli = Date.now();
                var duration = postMilli - preMilli;
                if (spec.doInfoExec) {
                    spec.infoExec(duration, cycleMilli);
                }

                // Ensure frequency.
                var remainderMilli = 0;
                if (frequency > 0) {
                    spec.targetMilli += cycleMilli;
                    remainderMilli = spec.targetMilli - postMilli;
                }

                // Execute again.
                spec.execWhile(remainderMilli > 0 ? remainderMilli : 0);
            },
        delay);
    }

    /**
     * Execute code for edge with index 0 and event "p1f".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = ((spec.fork1_) == (spec.specEnum._P1)) && (((spec.fork3_) == (spec.specEnum._P1)) && ((spec.philosopher1_) == (spec.specEnum._E)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        spec.fork1_ = spec.specEnum._I;
        spec.fork3_ = spec.specEnum._I;
        spec.philosopher1_ = spec.specEnum._T;

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "p1f1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = ((spec.fork1_) == (spec.specEnum._I)) && (((spec.philosopher1_) == (spec.specEnum._T)) || ((spec.philosopher1_) == (spec.specEnum._F3)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        spec.fork1_ = spec.specEnum._P1;
        if ((spec.philosopher1_) == (spec.specEnum._T)) {
            spec.philosopher1_ = spec.specEnum._F1;
        } else if ((spec.philosopher1_) == (spec.specEnum._F3)) {
            spec.philosopher1_ = spec.specEnum._E;
        }

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "p1f3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = ((spec.fork3_) == (spec.specEnum._I)) && (((spec.philosopher1_) == (spec.specEnum._T)) || ((spec.philosopher1_) == (spec.specEnum._F1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        spec.fork3_ = spec.specEnum._P1;
        if ((spec.philosopher1_) == (spec.specEnum._T)) {
            spec.philosopher1_ = spec.specEnum._F3;
        } else if ((spec.philosopher1_) == (spec.specEnum._F1)) {
            spec.philosopher1_ = spec.specEnum._E;
        }

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "p2f".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = ((spec.fork1_) == (spec.specEnum._P2)) && (((spec.fork2_) == (spec.specEnum._P2)) && ((spec.philosopher2_) == (spec.specEnum._E)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        spec.fork1_ = spec.specEnum._I;
        spec.fork2_ = spec.specEnum._I;
        spec.philosopher2_ = spec.specEnum._T;

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "p2f1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = ((spec.fork1_) == (spec.specEnum._I)) && (((spec.philosopher2_) == (spec.specEnum._T)) || ((spec.philosopher2_) == (spec.specEnum._F2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.fork1_ = spec.specEnum._P2;
        if ((spec.philosopher2_) == (spec.specEnum._T)) {
            spec.philosopher2_ = spec.specEnum._F1;
        } else if ((spec.philosopher2_) == (spec.specEnum._F2)) {
            spec.philosopher2_ = spec.specEnum._E;
        }

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "p2f2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = ((spec.fork2_) == (spec.specEnum._I)) && (((spec.philosopher2_) == (spec.specEnum._T)) || ((spec.philosopher2_) == (spec.specEnum._F1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.fork2_ = spec.specEnum._P2;
        if ((spec.philosopher2_) == (spec.specEnum._T)) {
            spec.philosopher2_ = spec.specEnum._F2;
        } else if ((spec.philosopher2_) == (spec.specEnum._F1)) {
            spec.philosopher2_ = spec.specEnum._E;
        }

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "p3f".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = ((spec.fork2_) == (spec.specEnum._P3)) && (((spec.fork3_) == (spec.specEnum._P3)) && ((spec.philosopher3_) == (spec.specEnum._E)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.fork2_ = spec.specEnum._I;
        spec.fork3_ = spec.specEnum._I;
        spec.philosopher3_ = spec.specEnum._T;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "p3f2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = ((spec.fork2_) == (spec.specEnum._I)) && (((spec.philosopher3_) == (spec.specEnum._T)) || ((spec.philosopher3_) == (spec.specEnum._F3)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.fork2_ = spec.specEnum._P3;
        if ((spec.philosopher3_) == (spec.specEnum._T)) {
            spec.philosopher3_ = spec.specEnum._F2;
        } else if ((spec.philosopher3_) == (spec.specEnum._F3)) {
            spec.philosopher3_ = spec.specEnum._E;
        }

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "p3f3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = ((spec.fork3_) == (spec.specEnum._I)) && (((spec.philosopher3_) == (spec.specEnum._T)) || ((spec.philosopher3_) == (spec.specEnum._F2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.fork3_ = spec.specEnum._P3;
        if ((spec.philosopher3_) == (spec.specEnum._T)) {
            spec.philosopher3_ = spec.specEnum._F3;
        } else if ((spec.philosopher3_) == (spec.specEnum._F2)) {
            spec.philosopher3_ = spec.specEnum._E;
        }

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /** Initializes the state. */
    initState() {
        // Initialize constants, if not yet done so.
        if (!this.constantsInitialized) {
            this.constantsInitialized = true;

        }

        // Initialize SVG input.
        this.svgInQueue = [];
        this.svgInId = null;
        this.svgInEvent = -1;

        // CIF model state variables.
        spec.fork1_ = spec.specEnum._I;
        spec.fork2_ = spec.specEnum._I;
        spec.fork3_ = spec.specEnum._I;
        spec.philosopher1_ = spec.specEnum._T;
        spec.philosopher2_ = spec.specEnum._T;
        spec.philosopher3_ = spec.specEnum._T;
    }

    /**
     * Initializes the user interface, either when loading the page
     * or when resetting the simulation.
     */
    initUI() {


        // Apply SVG copies and moves, if not done so before.
        if (!this.svgCopiesAndMovesApplied) {
            this.svgCopiesAndMovesApplied = true;

            // Apply SVG copy declarations.


            // Apply SVG move declarations.

        }

        // Prepare SVG output.


        // Prepare SVG input.

    }

    /**
     * Updates the user interface based on the latest state of
     * the model. Is called at the end of each cycle.
     */
    updateUI() {
        // Apply CIF/SVG output mappings.

    }

    /**
     * Updates the values of the input variables. Other variables from the
     * state may not be accessed or modified.
     */
    updateInputs() {
        // Nothing is done here by default.
    }

    /** Logs a normal message. */
    log(message) {
        console.log(message);

    }

    /** Logs an warning message. */
    warning(message) {
        console.log(message);

    }

    /** Logs an error message. */
    error(message) {
        console.log(message);

    }

    /**
     * Informs about the duration of a single execution.
     *
     * @param duration The duration of the execution, in milliseconds.
     * @param cycleTime The desired maximum duration of the execution, in
     *      milliseconds, or '-1' if not available.
     */
    infoExec(duration, cycleTime) {
        // Nothing is done here by default.
    }

    /**
     * Informs that an event will be or has been executed.
     *
     * @param idx The 0-based index of the event.
     * @param pre Whether the event will be executed ('true') or has
     *      been executed ('false').
     */
    infoEvent(idx, pre) {
        if (pre) {
            if (this.doTransitionOutput) spec.log(specUtils.fmt('Transition: event %s', spec.getEventName(idx)));
        } else {
            if (this.doStateOutput) spec.log('State: ' + spec.getStateText());
        }
    }

    /**
     * Informs that the code is about to be executed. For the
     * {@link #firstExec} the state has not yet been initialized, except for
     * {@link #time}.
     */
    preExec() {
        // Nothing is done here by default.
    }

    /** Informs that the code was just executed. */
    postExec() {
        this.updateUI();
    }

    /**
     * Returns the name of an event.
     *
     * @param idx The 0-based index of the event.
     * @return The name of the event.
     */
    getEventName(idx) {
        return this.EVENT_NAMES[idx];
    }

    /**
     * Returns a single-line textual representation of the model state.
     *
     * @return The single-line textual representation of the model state.
     */
    getStateText() {
        var state = specUtils.fmt('time=%s', spec.time);
        state += specUtils.fmt(', fork1=%s', specUtils.valueToStr(spec.fork1_));
        state += specUtils.fmt(', fork2=%s', specUtils.valueToStr(spec.fork2_));
        state += specUtils.fmt(', fork3=%s', specUtils.valueToStr(spec.fork3_));
        state += specUtils.fmt(', philosopher1=%s', specUtils.valueToStr(spec.philosopher1_));
        state += specUtils.fmt(', philosopher2=%s', specUtils.valueToStr(spec.philosopher2_));
        state += specUtils.fmt(', philosopher3=%s', specUtils.valueToStr(spec.philosopher3_));
        return state;
    }





    /**
     * Print output for all relevant print declarations.
     *
     * @param idx The 0-based event index of the transition, or '-2' for
     *      time transitions, or '-3' for the 'initial' transition.
     * @param pre Whether to print output for the pre/source state of the
     *      transition ('true') or for the post/target state of the
     *      transition ('false').
     */
    printOutput(idx, pre) {
        // No print declarations.
    }

    /**
     * Informs that new print output is available.
     *
     * @param text The text being printed.
     * @param target The file or special target to which text is to be printed.
     *      If printed to a file, an absolute or relative local file system
     *      path is given. Paths may contain both '/' and '\\'
     *      as file separators. Use {@link specUtils#normalizePrintTarget}
     *      to normalize the path to use '/' file separators. There are two
     *      special targets: ':stdout' to print to the standard output stream,
     *      and ':stderr' to print to the standard error stream.
     */
    infoPrintOutput(text, target) {
        if (target == ':stdout') {
            spec.log(text);
        } else if (target == ':stderr') {
            spec.error(text);
        } else {
            var path = specUtils.normalizePrintTarget(target);
            spec.infoPrintOutput(path + ': ' + text, ':stdout');
        }
    }
}
