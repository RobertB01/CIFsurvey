/** Tuples. */


/** spec code generated from a CIF specification. */
class spec_class {
    /** specEnum declaration. It contains the single merged enum from the CIF model. */
    specEnum = Object.freeze({
        /** Literal "allowed". */
        _allowed: Symbol("allowed"),

        /** Literal "down". */
        _down: Symbol("down"),

        /** Literal "noProductPresent". */
        _noProductPresent: Symbol("noProductPresent"),

        /** Literal "notAllowed". */
        _notAllowed: Symbol("notAllowed"),

        /** Literal "off". */
        _off: Symbol("off"),

        /** Literal "on". */
        _on: Symbol("on"),

        /** Literal "opD". */
        _opD: Symbol("opD"),

        /** Literal "opM". */
        _opM: Symbol("opM"),

        /** Literal "opP". */
        _opP: Symbol("opP"),

        /** Literal "productPresent". */
        _productPresent: Symbol("productPresent"),

        /** Literal "up". */
        _up: Symbol("up")
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
        "conveyor.product_in",
        "conveyor.product_out",
        "drill.turn_off",
        "drill.turn_on",
        "machine_head.D_M",
        "machine_head.D_P",
        "machine_head.M_D",
        "machine_head.M_P",
        "machine_head.P_D",
        "machine_head.P_M",
        "machine_stand.move_down",
        "machine_stand.move_up",
        "mill.turn_off",
        "mill.turn_on",
        "polishing_tool.turn_off",
        "polishing_tool.turn_on"
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


    /** Discrete variable "conveyor". */
    conveyor_;

    /** Discrete variable "drill". */
    drill_;

    /** Discrete variable "machine_head". */
    machine_head_;

    /** Discrete variable "machine_stand". */
    machine_stand_;

    /** Discrete variable "machine_tool_controller". */
    machine_tool_controller_;

    /** Discrete variable "mill". */
    mill_;

    /** Discrete variable "polishing_tool". */
    polishing_tool_;


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


            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Execute controllable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;

            // Event "conveyor.product_in".
            edgeExecuted |= this.execEdge0();

            // Event "conveyor.product_out".
            edgeExecuted |= this.execEdge1();

            // Event "drill.turn_off".
            edgeExecuted |= this.execEdge2();

            // Event "drill.turn_on".
            edgeExecuted |= this.execEdge3();

            // Event "machine_head.D_M".
            edgeExecuted |= this.execEdge4();

            // Event "machine_head.D_P".
            edgeExecuted |= this.execEdge5();

            // Event "machine_head.M_D".
            edgeExecuted |= this.execEdge6();

            // Event "machine_head.M_P".
            edgeExecuted |= this.execEdge7();

            // Event "machine_head.P_D".
            edgeExecuted |= this.execEdge8();

            // Event "machine_head.P_M".
            edgeExecuted |= this.execEdge9();

            // Event "machine_stand.move_down".
            edgeExecuted |= this.execEdge10();

            // Event "machine_stand.move_up".
            edgeExecuted |= this.execEdge11();

            // Event "mill.turn_off".
            edgeExecuted |= this.execEdge12();

            // Event "mill.turn_on".
            edgeExecuted |= this.execEdge13();

            // Event "polishing_tool.turn_off".
            edgeExecuted |= this.execEdge14();

            // Event "polishing_tool.turn_on".
            edgeExecuted |= this.execEdge15();

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
     * Execute code for edge with index 0 and event "conveyor.product_in".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = (spec.conveyor_) == (spec.specEnum._noProductPresent);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        spec.conveyor_ = spec.specEnum._productPresent;

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "conveyor.product_out".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = ((spec.conveyor_) == (spec.specEnum._productPresent)) && ((spec.machine_stand_) == (spec.specEnum._up));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        spec.conveyor_ = spec.specEnum._noProductPresent;

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "drill.turn_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = (spec.drill_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        spec.drill_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "drill.turn_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = ((spec.drill_) == (spec.specEnum._off)) && (((spec.machine_head_) == (spec.specEnum._opD)) && ((spec.machine_tool_controller_) == (spec.specEnum._allowed)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        spec.drill_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "machine_head.D_M".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = (((spec.machine_head_) == (spec.specEnum._opD)) && ((spec.mill_) == (spec.specEnum._off))) && (((spec.drill_) == (spec.specEnum._off)) && (((spec.polishing_tool_) == (spec.specEnum._off)) && ((spec.machine_stand_) == (spec.specEnum._up))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.machine_head_ = spec.specEnum._opM;

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "machine_head.D_P".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = (((spec.machine_head_) == (spec.specEnum._opD)) && ((spec.mill_) == (spec.specEnum._off))) && (((spec.drill_) == (spec.specEnum._off)) && (((spec.polishing_tool_) == (spec.specEnum._off)) && ((spec.machine_stand_) == (spec.specEnum._up))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.machine_head_ = spec.specEnum._opP;

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "machine_head.M_D".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = (((spec.machine_head_) == (spec.specEnum._opM)) && ((spec.mill_) == (spec.specEnum._off))) && (((spec.drill_) == (spec.specEnum._off)) && (((spec.polishing_tool_) == (spec.specEnum._off)) && ((spec.machine_stand_) == (spec.specEnum._up))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.machine_head_ = spec.specEnum._opD;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "machine_head.M_P".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = (((spec.machine_head_) == (spec.specEnum._opM)) && ((spec.mill_) == (spec.specEnum._off))) && (((spec.drill_) == (spec.specEnum._off)) && (((spec.polishing_tool_) == (spec.specEnum._off)) && ((spec.machine_stand_) == (spec.specEnum._up))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.machine_head_ = spec.specEnum._opP;

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "machine_head.P_D".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = (((spec.machine_head_) == (spec.specEnum._opP)) && ((spec.mill_) == (spec.specEnum._off))) && (((spec.drill_) == (spec.specEnum._off)) && (((spec.polishing_tool_) == (spec.specEnum._off)) && ((spec.machine_stand_) == (spec.specEnum._up))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.machine_head_ = spec.specEnum._opD;

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "machine_head.P_M".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = (((spec.machine_head_) == (spec.specEnum._opP)) && ((spec.mill_) == (spec.specEnum._off))) && (((spec.drill_) == (spec.specEnum._off)) && (((spec.polishing_tool_) == (spec.specEnum._off)) && ((spec.machine_stand_) == (spec.specEnum._up))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        spec.machine_head_ = spec.specEnum._opM;

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "machine_stand.move_down".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = ((spec.machine_stand_) == (spec.specEnum._up)) && (((spec.conveyor_) == (spec.specEnum._productPresent)) && ((spec.machine_tool_controller_) == (spec.specEnum._notAllowed)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        spec.machine_stand_ = spec.specEnum._down;
        spec.machine_tool_controller_ = spec.specEnum._allowed;

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "machine_stand.move_up".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = ((spec.machine_stand_) == (spec.specEnum._down)) && ((((spec.machine_tool_controller_) == (spec.specEnum._allowed)) && ((spec.mill_) == (spec.specEnum._off))) && (((spec.drill_) == (spec.specEnum._off)) && ((spec.polishing_tool_) == (spec.specEnum._off))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        spec.machine_stand_ = spec.specEnum._up;
        spec.machine_tool_controller_ = spec.specEnum._notAllowed;

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 12 and event "mill.turn_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge12() {
        var guard = (spec.mill_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(12, true);
        if (this.doInfoEvent) this.infoEvent(12, true);

        spec.mill_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(12, false);
        if (this.doInfoPrintOutput) this.printOutput(12, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 13 and event "mill.turn_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge13() {
        var guard = ((spec.machine_head_) == (spec.specEnum._opM)) && (((spec.machine_tool_controller_) == (spec.specEnum._allowed)) && ((spec.mill_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(13, true);
        if (this.doInfoEvent) this.infoEvent(13, true);

        spec.mill_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(13, false);
        if (this.doInfoPrintOutput) this.printOutput(13, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 14 and event "polishing_tool.turn_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge14() {
        var guard = (spec.polishing_tool_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(14, true);
        if (this.doInfoEvent) this.infoEvent(14, true);

        spec.polishing_tool_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(14, false);
        if (this.doInfoPrintOutput) this.printOutput(14, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 15 and event "polishing_tool.turn_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge15() {
        var guard = ((spec.machine_head_) == (spec.specEnum._opP)) && (((spec.machine_tool_controller_) == (spec.specEnum._allowed)) && ((spec.polishing_tool_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(15, true);
        if (this.doInfoEvent) this.infoEvent(15, true);

        spec.polishing_tool_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(15, false);
        if (this.doInfoPrintOutput) this.printOutput(15, false);
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
        spec.conveyor_ = spec.specEnum._noProductPresent;
        spec.drill_ = spec.specEnum._off;
        spec.machine_head_ = spec.specEnum._opM;
        spec.machine_stand_ = spec.specEnum._up;
        spec.machine_tool_controller_ = spec.specEnum._notAllowed;
        spec.mill_ = spec.specEnum._off;
        spec.polishing_tool_ = spec.specEnum._off;
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
        state += specUtils.fmt(', conveyor=%s', specUtils.valueToStr(spec.conveyor_));
        state += specUtils.fmt(', drill=%s', specUtils.valueToStr(spec.drill_));
        state += specUtils.fmt(', machine_head=%s', specUtils.valueToStr(spec.machine_head_));
        state += specUtils.fmt(', machine_stand=%s', specUtils.valueToStr(spec.machine_stand_));
        state += specUtils.fmt(', machine_tool_controller=%s', specUtils.valueToStr(spec.machine_tool_controller_));
        state += specUtils.fmt(', mill=%s', specUtils.valueToStr(spec.mill_));
        state += specUtils.fmt(', polishing_tool=%s', specUtils.valueToStr(spec.polishing_tool_));
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
