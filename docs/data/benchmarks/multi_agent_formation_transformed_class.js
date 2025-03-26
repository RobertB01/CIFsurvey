/** Tuples. */


/** spec code generated from a CIF specification. */
class spec_class {
    /** specEnum declaration. It contains the single merged enum from the CIF model. */
    specEnum = Object.freeze({
        /** Literal "l0". */
        _l0: Symbol("l0"),

        /** Literal "l1". */
        _l1: Symbol("l1"),

        /** Literal "l2". */
        _l2: Symbol("l2"),

        /** Literal "l3". */
        _l3: Symbol("l3"),

        /** Literal "l4". */
        _l4: Symbol("l4"),

        /** Literal "l5". */
        _l5: Symbol("l5"),

        /** Literal "l6". */
        _l6: Symbol("l6"),

        /** Literal "l7". */
        _l7: Symbol("l7"),

        /** Literal "l8". */
        _l8: Symbol("l8"),

        /** Literal "l9". */
        _l9: Symbol("l9")
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
        "R1.e01",
        "R1.e03",
        "R1.e05",
        "R1.e07",
        "R1.e09",
        "R1.e11",
        "R1.e13",
        "R1.e15",
        "R1.e17",
        "R1.e19",
        "R2.e01",
        "R2.e03",
        "R2.e05",
        "R2.e07",
        "R2.e09",
        "R2.e11",
        "R2.e13",
        "R2.e15",
        "R2.e17",
        "R2.e19",
        "R3.e01",
        "R3.e03",
        "R3.e05",
        "R3.e07",
        "R3.e09",
        "R3.e11",
        "R3.e13",
        "R3.e15",
        "R3.e17",
        "R3.e19",
        "tau_1",
        "tau_2"
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


    /** Discrete variable "dep_1". */
    dep_1_;

    /** Discrete variable "dep_2". */
    dep_2_;

    /** Discrete variable "dep_3". */
    dep_3_;

    /** Discrete variable "invariance". */
    invariance_;

    /** Discrete variable "mut_ex_l1". */
    mut_ex_l1_;

    /** Discrete variable "mut_ex_l2". */
    mut_ex_l2_;

    /** Discrete variable "mut_ex_l3". */
    mut_ex_l3_;

    /** Discrete variable "mut_ex_l4". */
    mut_ex_l4_;

    /** Discrete variable "mut_ex_l5". */
    mut_ex_l5_;

    /** Discrete variable "mut_ex_l6". */
    mut_ex_l6_;

    /** Discrete variable "mut_ex_l7". */
    mut_ex_l7_;

    /** Discrete variable "mut_ex_l8". */
    mut_ex_l8_;

    /** Discrete variable "mut_ex_l9". */
    mut_ex_l9_;

    /** Discrete variable "R1". */
    R1_;

    /** Discrete variable "R2". */
    R2_;

    /** Discrete variable "R3". */
    R3_;


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

            // Event "tau_1".
            edgeExecuted |= this.execEdge0();

            // Event "tau_2".
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

            // Event "R1.e01".
            edgeExecuted |= this.execEdge2();

            // Event "R1.e03".
            edgeExecuted |= this.execEdge3();

            // Event "R1.e05".
            edgeExecuted |= this.execEdge4();

            // Event "R1.e07".
            edgeExecuted |= this.execEdge5();

            // Event "R1.e09".
            edgeExecuted |= this.execEdge6();

            // Event "R1.e11".
            edgeExecuted |= this.execEdge7();

            // Event "R1.e13".
            edgeExecuted |= this.execEdge8();

            // Event "R1.e15".
            edgeExecuted |= this.execEdge9();

            // Event "R1.e17".
            edgeExecuted |= this.execEdge10();

            // Event "R1.e19".
            edgeExecuted |= this.execEdge11();

            // Event "R2.e01".
            edgeExecuted |= this.execEdge12();

            // Event "R2.e03".
            edgeExecuted |= this.execEdge13();

            // Event "R2.e05".
            edgeExecuted |= this.execEdge14();

            // Event "R2.e07".
            edgeExecuted |= this.execEdge15();

            // Event "R2.e09".
            edgeExecuted |= this.execEdge16();

            // Event "R2.e11".
            edgeExecuted |= this.execEdge17();

            // Event "R2.e13".
            edgeExecuted |= this.execEdge18();

            // Event "R2.e15".
            edgeExecuted |= this.execEdge19();

            // Event "R2.e17".
            edgeExecuted |= this.execEdge20();

            // Event "R2.e19".
            edgeExecuted |= this.execEdge21();

            // Event "R3.e01".
            edgeExecuted |= this.execEdge22();

            // Event "R3.e03".
            edgeExecuted |= this.execEdge23();

            // Event "R3.e05".
            edgeExecuted |= this.execEdge24();

            // Event "R3.e07".
            edgeExecuted |= this.execEdge25();

            // Event "R3.e09".
            edgeExecuted |= this.execEdge26();

            // Event "R3.e11".
            edgeExecuted |= this.execEdge27();

            // Event "R3.e13".
            edgeExecuted |= this.execEdge28();

            // Event "R3.e15".
            edgeExecuted |= this.execEdge29();

            // Event "R3.e17".
            edgeExecuted |= this.execEdge30();

            // Event "R3.e19".
            edgeExecuted |= this.execEdge31();

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
     * Execute code for edge with index 0 and event "tau_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) || ((spec.invariance_) == (spec.specEnum._l1))) && (spec.formation_1_());

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(30, true);
        if (this.doInfoEvent) this.infoEvent(30, true);

        if ((spec.invariance_) == (spec.specEnum._l0)) {
            spec.invariance_ = spec.specEnum._l1;
        } else if ((spec.invariance_) == (spec.specEnum._l1)) {
            spec.invariance_ = spec.specEnum._l1;
        }

        if (this.doInfoEvent) this.infoEvent(30, false);
        if (this.doInfoPrintOutput) this.printOutput(30, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "tau_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) || ((spec.invariance_) == (spec.specEnum._l1))) && (spec.formation_2_());

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(31, true);
        if (this.doInfoEvent) this.infoEvent(31, true);

        if ((spec.invariance_) == (spec.specEnum._l0)) {
            spec.invariance_ = spec.specEnum._l1;
        } else if ((spec.invariance_) == (spec.specEnum._l1)) {
            spec.invariance_ = spec.specEnum._l1;
        }

        if (this.doInfoEvent) this.infoEvent(31, false);
        if (this.doInfoPrintOutput) this.printOutput(31, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "R1.e01".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = (((spec.dep_1_) == (spec.specEnum._l0)) && ((spec.dep_2_) == (spec.specEnum._l1))) && (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l1_) == (spec.specEnum._l0)) && ((spec.R1_) == (spec.specEnum._l0))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        spec.dep_1_ = spec.specEnum._l1;
        spec.dep_2_ = spec.specEnum._l0;
        spec.mut_ex_l1_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "R1.e03".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l1_) == (spec.specEnum._l1))) && (((spec.mut_ex_l2_) == (spec.specEnum._l0)) && ((spec.R1_) == (spec.specEnum._l1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        spec.mut_ex_l1_ = spec.specEnum._l0;
        spec.mut_ex_l2_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "R1.e05".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l2_) == (spec.specEnum._l1))) && (((spec.mut_ex_l3_) == (spec.specEnum._l0)) && ((spec.R1_) == (spec.specEnum._l2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        spec.mut_ex_l2_ = spec.specEnum._l0;
        spec.mut_ex_l3_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "R1.e07".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l3_) == (spec.specEnum._l1))) && (((spec.mut_ex_l4_) == (spec.specEnum._l0)) && ((spec.R1_) == (spec.specEnum._l3)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        spec.mut_ex_l3_ = spec.specEnum._l0;
        spec.mut_ex_l4_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "R1.e09".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l4_) == (spec.specEnum._l1))) && (((spec.mut_ex_l5_) == (spec.specEnum._l0)) && ((spec.R1_) == (spec.specEnum._l4)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.mut_ex_l4_ = spec.specEnum._l0;
        spec.mut_ex_l5_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l5;

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "R1.e11".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l5_) == (spec.specEnum._l1))) && (((spec.mut_ex_l6_) == (spec.specEnum._l0)) && ((spec.R1_) == (spec.specEnum._l5)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.mut_ex_l5_ = spec.specEnum._l0;
        spec.mut_ex_l6_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l6;

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "R1.e13".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l6_) == (spec.specEnum._l1))) && (((spec.mut_ex_l7_) == (spec.specEnum._l0)) && ((spec.R1_) == (spec.specEnum._l6)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.mut_ex_l6_ = spec.specEnum._l0;
        spec.mut_ex_l7_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l7;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "R1.e15".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l7_) == (spec.specEnum._l1))) && (((spec.mut_ex_l8_) == (spec.specEnum._l0)) && ((spec.R1_) == (spec.specEnum._l7)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.mut_ex_l7_ = spec.specEnum._l0;
        spec.mut_ex_l8_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l8;

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "R1.e17".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l8_) == (spec.specEnum._l1))) && (((spec.mut_ex_l9_) == (spec.specEnum._l0)) && ((spec.R1_) == (spec.specEnum._l8)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.mut_ex_l8_ = spec.specEnum._l0;
        spec.mut_ex_l9_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l9;

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "R1.e19".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l1_) == (spec.specEnum._l0))) && (((spec.mut_ex_l9_) == (spec.specEnum._l1)) && ((spec.R1_) == (spec.specEnum._l9)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        spec.mut_ex_l1_ = spec.specEnum._l1;
        spec.mut_ex_l9_ = spec.specEnum._l0;
        spec.R1_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 12 and event "R2.e01".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge12() {
        var guard = (((spec.dep_2_) == (spec.specEnum._l0)) && ((spec.dep_3_) == (spec.specEnum._l1))) && (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l1_) == (spec.specEnum._l0)) && ((spec.R2_) == (spec.specEnum._l0))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        spec.dep_2_ = spec.specEnum._l1;
        spec.dep_3_ = spec.specEnum._l0;
        spec.mut_ex_l1_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 13 and event "R2.e03".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge13() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l1_) == (spec.specEnum._l1))) && (((spec.mut_ex_l2_) == (spec.specEnum._l0)) && ((spec.R2_) == (spec.specEnum._l1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        spec.mut_ex_l1_ = spec.specEnum._l0;
        spec.mut_ex_l2_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 14 and event "R2.e05".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge14() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l2_) == (spec.specEnum._l1))) && (((spec.mut_ex_l3_) == (spec.specEnum._l0)) && ((spec.R2_) == (spec.specEnum._l2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(12, true);
        if (this.doInfoEvent) this.infoEvent(12, true);

        spec.mut_ex_l2_ = spec.specEnum._l0;
        spec.mut_ex_l3_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(12, false);
        if (this.doInfoPrintOutput) this.printOutput(12, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 15 and event "R2.e07".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge15() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l3_) == (spec.specEnum._l1))) && (((spec.mut_ex_l4_) == (spec.specEnum._l0)) && ((spec.R2_) == (spec.specEnum._l3)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(13, true);
        if (this.doInfoEvent) this.infoEvent(13, true);

        spec.mut_ex_l3_ = spec.specEnum._l0;
        spec.mut_ex_l4_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(13, false);
        if (this.doInfoPrintOutput) this.printOutput(13, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 16 and event "R2.e09".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge16() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l4_) == (spec.specEnum._l1))) && (((spec.mut_ex_l5_) == (spec.specEnum._l0)) && ((spec.R2_) == (spec.specEnum._l4)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(14, true);
        if (this.doInfoEvent) this.infoEvent(14, true);

        spec.mut_ex_l4_ = spec.specEnum._l0;
        spec.mut_ex_l5_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l5;

        if (this.doInfoEvent) this.infoEvent(14, false);
        if (this.doInfoPrintOutput) this.printOutput(14, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 17 and event "R2.e11".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge17() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l5_) == (spec.specEnum._l1))) && (((spec.mut_ex_l6_) == (spec.specEnum._l0)) && ((spec.R2_) == (spec.specEnum._l5)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(15, true);
        if (this.doInfoEvent) this.infoEvent(15, true);

        spec.mut_ex_l5_ = spec.specEnum._l0;
        spec.mut_ex_l6_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l6;

        if (this.doInfoEvent) this.infoEvent(15, false);
        if (this.doInfoPrintOutput) this.printOutput(15, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 18 and event "R2.e13".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge18() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l6_) == (spec.specEnum._l1))) && (((spec.mut_ex_l7_) == (spec.specEnum._l0)) && ((spec.R2_) == (spec.specEnum._l6)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(16, true);
        if (this.doInfoEvent) this.infoEvent(16, true);

        spec.mut_ex_l6_ = spec.specEnum._l0;
        spec.mut_ex_l7_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l7;

        if (this.doInfoEvent) this.infoEvent(16, false);
        if (this.doInfoPrintOutput) this.printOutput(16, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 19 and event "R2.e15".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge19() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l7_) == (spec.specEnum._l1))) && (((spec.mut_ex_l8_) == (spec.specEnum._l0)) && ((spec.R2_) == (spec.specEnum._l7)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(17, true);
        if (this.doInfoEvent) this.infoEvent(17, true);

        spec.mut_ex_l7_ = spec.specEnum._l0;
        spec.mut_ex_l8_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l8;

        if (this.doInfoEvent) this.infoEvent(17, false);
        if (this.doInfoPrintOutput) this.printOutput(17, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 20 and event "R2.e17".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge20() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l8_) == (spec.specEnum._l1))) && (((spec.mut_ex_l9_) == (spec.specEnum._l0)) && ((spec.R2_) == (spec.specEnum._l8)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(18, true);
        if (this.doInfoEvent) this.infoEvent(18, true);

        spec.mut_ex_l8_ = spec.specEnum._l0;
        spec.mut_ex_l9_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l9;

        if (this.doInfoEvent) this.infoEvent(18, false);
        if (this.doInfoPrintOutput) this.printOutput(18, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 21 and event "R2.e19".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge21() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l1_) == (spec.specEnum._l0))) && (((spec.mut_ex_l9_) == (spec.specEnum._l1)) && ((spec.R2_) == (spec.specEnum._l9)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(19, true);
        if (this.doInfoEvent) this.infoEvent(19, true);

        spec.mut_ex_l1_ = spec.specEnum._l1;
        spec.mut_ex_l9_ = spec.specEnum._l0;
        spec.R2_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(19, false);
        if (this.doInfoPrintOutput) this.printOutput(19, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 22 and event "R3.e01".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge22() {
        var guard = (((spec.dep_3_) == (spec.specEnum._l0)) && ((spec.invariance_) == (spec.specEnum._l0))) && (((spec.mut_ex_l1_) == (spec.specEnum._l0)) && ((spec.R3_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(20, true);
        if (this.doInfoEvent) this.infoEvent(20, true);

        spec.dep_3_ = spec.specEnum._l1;
        spec.mut_ex_l1_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(20, false);
        if (this.doInfoPrintOutput) this.printOutput(20, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 23 and event "R3.e03".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge23() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l1_) == (spec.specEnum._l1))) && (((spec.mut_ex_l2_) == (spec.specEnum._l0)) && ((spec.R3_) == (spec.specEnum._l1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(21, true);
        if (this.doInfoEvent) this.infoEvent(21, true);

        spec.mut_ex_l1_ = spec.specEnum._l0;
        spec.mut_ex_l2_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(21, false);
        if (this.doInfoPrintOutput) this.printOutput(21, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 24 and event "R3.e05".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge24() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l2_) == (spec.specEnum._l1))) && (((spec.mut_ex_l3_) == (spec.specEnum._l0)) && ((spec.R3_) == (spec.specEnum._l2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(22, true);
        if (this.doInfoEvent) this.infoEvent(22, true);

        spec.mut_ex_l2_ = spec.specEnum._l0;
        spec.mut_ex_l3_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(22, false);
        if (this.doInfoPrintOutput) this.printOutput(22, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 25 and event "R3.e07".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge25() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l3_) == (spec.specEnum._l1))) && (((spec.mut_ex_l4_) == (spec.specEnum._l0)) && ((spec.R3_) == (spec.specEnum._l3)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(23, true);
        if (this.doInfoEvent) this.infoEvent(23, true);

        spec.mut_ex_l3_ = spec.specEnum._l0;
        spec.mut_ex_l4_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(23, false);
        if (this.doInfoPrintOutput) this.printOutput(23, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 26 and event "R3.e09".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge26() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l4_) == (spec.specEnum._l1))) && (((spec.mut_ex_l5_) == (spec.specEnum._l0)) && ((spec.R3_) == (spec.specEnum._l4)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(24, true);
        if (this.doInfoEvent) this.infoEvent(24, true);

        spec.mut_ex_l4_ = spec.specEnum._l0;
        spec.mut_ex_l5_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l5;

        if (this.doInfoEvent) this.infoEvent(24, false);
        if (this.doInfoPrintOutput) this.printOutput(24, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 27 and event "R3.e11".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge27() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l5_) == (spec.specEnum._l1))) && (((spec.mut_ex_l6_) == (spec.specEnum._l0)) && ((spec.R3_) == (spec.specEnum._l5)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(25, true);
        if (this.doInfoEvent) this.infoEvent(25, true);

        spec.mut_ex_l5_ = spec.specEnum._l0;
        spec.mut_ex_l6_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l6;

        if (this.doInfoEvent) this.infoEvent(25, false);
        if (this.doInfoPrintOutput) this.printOutput(25, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 28 and event "R3.e13".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge28() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l6_) == (spec.specEnum._l1))) && (((spec.mut_ex_l7_) == (spec.specEnum._l0)) && ((spec.R3_) == (spec.specEnum._l6)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(26, true);
        if (this.doInfoEvent) this.infoEvent(26, true);

        spec.mut_ex_l6_ = spec.specEnum._l0;
        spec.mut_ex_l7_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l7;

        if (this.doInfoEvent) this.infoEvent(26, false);
        if (this.doInfoPrintOutput) this.printOutput(26, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 29 and event "R3.e15".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge29() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l7_) == (spec.specEnum._l1))) && (((spec.mut_ex_l8_) == (spec.specEnum._l0)) && ((spec.R3_) == (spec.specEnum._l7)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(27, true);
        if (this.doInfoEvent) this.infoEvent(27, true);

        spec.mut_ex_l7_ = spec.specEnum._l0;
        spec.mut_ex_l8_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l8;

        if (this.doInfoEvent) this.infoEvent(27, false);
        if (this.doInfoPrintOutput) this.printOutput(27, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 30 and event "R3.e17".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge30() {
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l8_) == (spec.specEnum._l1))) && (((spec.mut_ex_l9_) == (spec.specEnum._l0)) && ((spec.R3_) == (spec.specEnum._l8)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(28, true);
        if (this.doInfoEvent) this.infoEvent(28, true);

        spec.mut_ex_l8_ = spec.specEnum._l0;
        spec.mut_ex_l9_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l9;

        if (this.doInfoEvent) this.infoEvent(28, false);
        if (this.doInfoPrintOutput) this.printOutput(28, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 31 and event "R3.e19".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge31() {
        var guard = (((spec.dep_1_) == (spec.specEnum._l1)) && ((spec.invariance_) == (spec.specEnum._l0))) && (((spec.mut_ex_l1_) == (spec.specEnum._l0)) && (((spec.mut_ex_l9_) == (spec.specEnum._l1)) && ((spec.R3_) == (spec.specEnum._l9))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(29, true);
        if (this.doInfoEvent) this.infoEvent(29, true);

        spec.mut_ex_l1_ = spec.specEnum._l1;
        spec.mut_ex_l9_ = spec.specEnum._l0;
        spec.R3_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(29, false);
        if (this.doInfoPrintOutput) this.printOutput(29, false);
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
        spec.dep_1_ = spec.specEnum._l0;
        spec.dep_2_ = spec.specEnum._l0;
        spec.dep_3_ = spec.specEnum._l0;
        spec.invariance_ = spec.specEnum._l0;
        spec.mut_ex_l1_ = spec.specEnum._l0;
        spec.mut_ex_l2_ = spec.specEnum._l0;
        spec.mut_ex_l3_ = spec.specEnum._l0;
        spec.mut_ex_l4_ = spec.specEnum._l0;
        spec.mut_ex_l5_ = spec.specEnum._l0;
        spec.mut_ex_l6_ = spec.specEnum._l0;
        spec.mut_ex_l7_ = spec.specEnum._l0;
        spec.mut_ex_l8_ = spec.specEnum._l0;
        spec.mut_ex_l9_ = spec.specEnum._l0;
        spec.R1_ = spec.specEnum._l0;
        spec.R2_ = spec.specEnum._l0;
        spec.R3_ = spec.specEnum._l0;
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
        state += specUtils.fmt(', dep_1=%s', specUtils.valueToStr(spec.dep_1_));
        state += specUtils.fmt(', dep_2=%s', specUtils.valueToStr(spec.dep_2_));
        state += specUtils.fmt(', dep_3=%s', specUtils.valueToStr(spec.dep_3_));
        state += specUtils.fmt(', invariance=%s', specUtils.valueToStr(spec.invariance_));
        state += specUtils.fmt(', mut_ex_l1=%s', specUtils.valueToStr(spec.mut_ex_l1_));
        state += specUtils.fmt(', mut_ex_l2=%s', specUtils.valueToStr(spec.mut_ex_l2_));
        state += specUtils.fmt(', mut_ex_l3=%s', specUtils.valueToStr(spec.mut_ex_l3_));
        state += specUtils.fmt(', mut_ex_l4=%s', specUtils.valueToStr(spec.mut_ex_l4_));
        state += specUtils.fmt(', mut_ex_l5=%s', specUtils.valueToStr(spec.mut_ex_l5_));
        state += specUtils.fmt(', mut_ex_l6=%s', specUtils.valueToStr(spec.mut_ex_l6_));
        state += specUtils.fmt(', mut_ex_l7=%s', specUtils.valueToStr(spec.mut_ex_l7_));
        state += specUtils.fmt(', mut_ex_l8=%s', specUtils.valueToStr(spec.mut_ex_l8_));
        state += specUtils.fmt(', mut_ex_l9=%s', specUtils.valueToStr(spec.mut_ex_l9_));
        state += specUtils.fmt(', R1=%s', specUtils.valueToStr(spec.R1_));
        state += specUtils.fmt(', R2=%s', specUtils.valueToStr(spec.R2_));
        state += specUtils.fmt(', R3=%s', specUtils.valueToStr(spec.R3_));
        return state;
    }


    /**
     * Evaluates algebraic variable "formation_1".
     *
     * @return The evaluation result.
     */
    formation_1_() {
        return (((((spec.R1_) == (spec.specEnum._l3)) && ((spec.R2_) == (spec.specEnum._l6))) && ((spec.R3_) == (spec.specEnum._l9))) || ((((spec.R1_) == (spec.specEnum._l6)) && ((spec.R2_) == (spec.specEnum._l9))) && ((spec.R3_) == (spec.specEnum._l3)))) || ((((spec.R1_) == (spec.specEnum._l9)) && ((spec.R2_) == (spec.specEnum._l3))) && ((spec.R3_) == (spec.specEnum._l6)));
    }

    /**
     * Evaluates algebraic variable "formation_2".
     *
     * @return The evaluation result.
     */
    formation_2_() {
        return (((((spec.R1_) == (spec.specEnum._l2)) && ((spec.R2_) == (spec.specEnum._l3))) && ((spec.R3_) == (spec.specEnum._l4))) || ((((spec.R1_) == (spec.specEnum._l4)) && ((spec.R2_) == (spec.specEnum._l5))) && ((spec.R3_) == (spec.specEnum._l6)))) || ((((spec.R1_) == (spec.specEnum._l6)) && ((spec.R2_) == (spec.specEnum._l7))) && ((spec.R3_) == (spec.specEnum._l8)));
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
