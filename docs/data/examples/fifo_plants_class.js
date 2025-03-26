/** Tuples. */


/** spec code generated from a CIF specification. */
class spec_class {
    /** specEnum declaration. It contains the single merged enum from the CIF model. */
    specEnum = Object.freeze({
        /** Literal "Busy". */
        _Busy: Symbol("Busy"),

        /** Literal "Failure". */
        _Failure: Symbol("Failure"),

        /** Literal "FinishedProduct". */
        _FinishedProduct: Symbol("FinishedProduct"),

        /** Literal "Idle". */
        _Idle: Symbol("Idle"),

        /** Literal "NewProduct". */
        _NewProduct: Symbol("NewProduct"),

        /** Literal "Success". */
        _Success: Symbol("Success")
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
        "c_do1",
        "c_do2",
        "c_done1",
        "c_done2",
        "c_enter",
        "c_exit",
        "c_finished",
        "c_leave",
        "c_redo",
        "c_start",
        "u_failure",
        "u_success"
    ];

    /** Constant "MAX_NR_OF_PRODS". */
    MAX_NR_OF_PRODS_;

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


    /** Discrete variable "CHK.curId". */
    CHK_curId_;

    /** Discrete variable "CHK". */
    CHK_;

    /** Discrete variable "DISP.curId". */
    DISP_curId_;

    /** Discrete variable "DISP". */
    DISP_;

    /** Discrete variable "DONE.curId". */
    DONE_curId_;

    /** Discrete variable "DONE". */
    DONE_;

    /** Discrete variable "INOUT.nextId". */
    INOUT_nextId_;

    /** Discrete variable "INOUT.curId". */
    INOUT_curId_;

    /** Discrete variable "INOUT.lastExitId". */
    INOUT_lastExitId_;

    /** Discrete variable "INOUT.cnt". */
    INOUT_cnt_;

    /** Discrete variable "INOUT". */
    INOUT_;

    /** Discrete variable "OP1.curId". */
    OP1_curId_;

    /** Discrete variable "OP1". */
    OP1_;

    /** Discrete variable "OP2.curId". */
    OP2_curId_;

    /** Discrete variable "OP2". */
    OP2_;


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

            // Event "u_failure".
            edgeExecuted |= this.execEdge0();

            // Event "u_success".
            edgeExecuted |= this.execEdge1();

            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Execute controllable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;

            // Event "c_do1".
            edgeExecuted |= this.execEdge2();

            // Event "c_do2".
            edgeExecuted |= this.execEdge3();

            // Event "c_done1".
            edgeExecuted |= this.execEdge4();

            // Event "c_done2".
            edgeExecuted |= this.execEdge5();

            // Event "c_enter".
            edgeExecuted |= this.execEdge6();

            // Event "c_exit".
            edgeExecuted |= this.execEdge7();

            // Event "c_finished".
            edgeExecuted |= this.execEdge8();

            // Event "c_leave".
            edgeExecuted |= this.execEdge9();

            // Event "c_redo".
            edgeExecuted |= this.execEdge10();

            // Event "c_start".
            edgeExecuted |= this.execEdge11();

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
     * Execute code for edge with index 0 and event "u_failure".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = (spec.CHK_) == (spec.specEnum._Busy);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        spec.CHK_ = spec.specEnum._Failure;

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "u_success".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = (spec.CHK_) == (spec.specEnum._Busy);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        spec.CHK_ = spec.specEnum._Success;

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "c_do1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = ((spec.DISP_) == (spec.specEnum._Busy)) && ((spec.OP1_) == (spec.specEnum._Idle));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        spec.DISP_ = spec.specEnum._Idle;
        spec.OP1_curId_ = spec.DISP_curId_;
        spec.DISP_curId_ = 0;
        spec.OP1_ = spec.specEnum._Busy;

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "c_do2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = ((spec.DISP_) == (spec.specEnum._Busy)) && ((spec.OP2_) == (spec.specEnum._Idle));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        spec.DISP_ = spec.specEnum._Idle;
        spec.OP2_curId_ = spec.DISP_curId_;
        spec.DISP_curId_ = 0;
        spec.OP2_ = spec.specEnum._Busy;

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "c_done1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = ((spec.OP1_) == (spec.specEnum._Busy)) && ((spec.CHK_) == (spec.specEnum._Idle));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        spec.OP1_ = spec.specEnum._Idle;
        spec.CHK_curId_ = spec.OP1_curId_;
        spec.OP1_curId_ = 0;
        spec.CHK_ = spec.specEnum._Busy;

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "c_done2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = ((spec.OP2_) == (spec.specEnum._Busy)) && ((spec.CHK_) == (spec.specEnum._Idle));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        spec.OP2_ = spec.specEnum._Idle;
        spec.CHK_curId_ = spec.OP2_curId_;
        spec.OP2_curId_ = 0;
        spec.CHK_ = spec.specEnum._Busy;

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "c_enter".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = ((spec.INOUT_) == (spec.specEnum._Idle)) && ((spec.INOUT_cnt_) < (spec.MAX_NR_OF_PRODS_));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.INOUT_curId_ = spec.INOUT_nextId_;
        spec.INOUT_nextId_ = ((spec.INOUT_nextId_) + (1)) % (spec.MAX_NR_OF_PRODS_);
        {
            var rhs1 = (spec.INOUT_cnt_) + (1);
            if ((rhs1) > 5) {
                specUtils.rangeErrInt("INOUT.cnt", specUtils.valueToStr(rhs1), "int[0..5]");
            }
            spec.INOUT_cnt_ = rhs1;
        }
        spec.INOUT_ = spec.specEnum._NewProduct;

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "c_exit".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = (spec.INOUT_) == (spec.specEnum._FinishedProduct);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.INOUT_lastExitId_ = spec.INOUT_curId_;
        spec.INOUT_curId_ = 0;
        {
            var rhs1 = (spec.INOUT_cnt_) - (1);
            if ((rhs1) < 0) {
                specUtils.rangeErrInt("INOUT.cnt", specUtils.valueToStr(rhs1), "int[0..5]");
            }
            spec.INOUT_cnt_ = rhs1;
        }
        spec.INOUT_ = spec.specEnum._Idle;

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "c_finished".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = ((spec.DONE_) == (spec.specEnum._Busy)) && ((spec.INOUT_) == (spec.specEnum._Idle));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.DONE_ = spec.specEnum._Idle;
        spec.INOUT_curId_ = spec.DONE_curId_;
        spec.DONE_curId_ = 0;
        spec.INOUT_ = spec.specEnum._FinishedProduct;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "c_leave".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = ((spec.CHK_) == (spec.specEnum._Success)) && ((spec.DONE_) == (spec.specEnum._Idle));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.CHK_ = spec.specEnum._Idle;
        spec.DONE_curId_ = spec.CHK_curId_;
        spec.CHK_curId_ = 0;
        spec.DONE_ = spec.specEnum._Busy;

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "c_redo".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = ((spec.CHK_) == (spec.specEnum._Failure)) && ((spec.DISP_) == (spec.specEnum._Idle));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.CHK_ = spec.specEnum._Idle;
        spec.DISP_curId_ = spec.CHK_curId_;
        spec.CHK_curId_ = 0;
        spec.DISP_ = spec.specEnum._Busy;

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "c_start".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = ((spec.INOUT_) == (spec.specEnum._NewProduct)) && ((spec.DISP_) == (spec.specEnum._Idle));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        spec.INOUT_ = spec.specEnum._Idle;
        spec.DISP_curId_ = spec.INOUT_curId_;
        spec.INOUT_curId_ = 0;
        spec.DISP_ = spec.specEnum._Busy;

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /** Initializes the state. */
    initState() {
        // Initialize constants, if not yet done so.
        if (!this.constantsInitialized) {
            this.constantsInitialized = true;
            spec.MAX_NR_OF_PRODS_ = 5;
        }

        // Initialize SVG input.
        this.svgInQueue = [];
        this.svgInId = null;
        this.svgInEvent = -1;

        // CIF model state variables.
        spec.CHK_curId_ = 0;
        spec.CHK_ = spec.specEnum._Idle;
        spec.DISP_curId_ = 0;
        spec.DISP_ = spec.specEnum._Idle;
        spec.DONE_curId_ = 0;
        spec.DONE_ = spec.specEnum._Idle;
        spec.INOUT_nextId_ = 0;
        spec.INOUT_curId_ = 0;
        spec.INOUT_lastExitId_ = (spec.MAX_NR_OF_PRODS_) - (1);
        spec.INOUT_cnt_ = 0;
        spec.INOUT_ = spec.specEnum._Idle;
        spec.OP1_curId_ = 0;
        spec.OP1_ = spec.specEnum._Idle;
        spec.OP2_curId_ = 0;
        spec.OP2_ = spec.specEnum._Idle;
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
        state += specUtils.fmt(', CHK=%s', specUtils.valueToStr(spec.CHK_));
        state += specUtils.fmt(', CHK.curId=%s', specUtils.valueToStr(spec.CHK_curId_));
        state += specUtils.fmt(', DISP=%s', specUtils.valueToStr(spec.DISP_));
        state += specUtils.fmt(', DISP.curId=%s', specUtils.valueToStr(spec.DISP_curId_));
        state += specUtils.fmt(', DONE=%s', specUtils.valueToStr(spec.DONE_));
        state += specUtils.fmt(', DONE.curId=%s', specUtils.valueToStr(spec.DONE_curId_));
        state += specUtils.fmt(', INOUT=%s', specUtils.valueToStr(spec.INOUT_));
        state += specUtils.fmt(', INOUT.cnt=%s', specUtils.valueToStr(spec.INOUT_cnt_));
        state += specUtils.fmt(', INOUT.curId=%s', specUtils.valueToStr(spec.INOUT_curId_));
        state += specUtils.fmt(', INOUT.lastExitId=%s', specUtils.valueToStr(spec.INOUT_lastExitId_));
        state += specUtils.fmt(', INOUT.nextId=%s', specUtils.valueToStr(spec.INOUT_nextId_));
        state += specUtils.fmt(', OP1=%s', specUtils.valueToStr(spec.OP1_));
        state += specUtils.fmt(', OP1.curId=%s', specUtils.valueToStr(spec.OP1_curId_));
        state += specUtils.fmt(', OP2=%s', specUtils.valueToStr(spec.OP2_));
        state += specUtils.fmt(', OP2.curId=%s', specUtils.valueToStr(spec.OP2_curId_));
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
