/** Tuples. */


            /** Tuple class for CIF tuple type representative "tuple(int[0..43]; int[-2..539]; int[-2..541])". */
            class CifTuple_T3III {
                /** The 1st field. */
                _field0;

                /** The 2nd field. */
                _field1;

                /** The 3rd field. */
                _field2;

                /**
                 * Constructor for the {@link CifTuple_T3III} class.
                 *
                 * @param _field0 The 1st field.
                 * @param _field1 The 2nd field.
                 * @param _field2 The 3rd field.
                 */
                constructor(_field0, _field1, _field2) {
                    this._field0 = _field0;
                    this._field1 = _field1;
                    this._field2 = _field2;
                }

                copy() {
                    return new CifTuple_T3III(this._field0, this._field1, this._field2);
                }

                toString() {
                    var rslt = '(';
                    rslt += specUtils.valueToStr(this._field0);
                    rslt += ', ';
                    rslt += specUtils.valueToStr(this._field1);
                    rslt += ', ';
                    rslt += specUtils.valueToStr(this._field2);
                    rslt += ')';
                    return rslt;
                }
            }

/** spec code generated from a CIF specification. */
class spec_class {
    /** specEnum declaration. It contains the single merged enum from the CIF model. */
    specEnum = Object.freeze({
        /** Literal "l1". */
        _l1: Symbol("l1"),

        /** Literal "l2". */
        _l2: Symbol("l2"),

        /** Literal "l3". */
        _l3: Symbol("l3"),

        /** Literal "l4". */
        _l4: Symbol("l4")
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
        "Process11",
        "Process12",
        "Process21",
        "Process22",
        "Process31",
        "Process32",
        "Process41",
        "Process42",
        "Process43",
        "R1_drop_B1",
        "R1_drop_C11",
        "R1_drop_C12",
        "R1_drop_Lout",
        "R1_pick_B1",
        "R1_pick_C11",
        "R1_pick_C12",
        "R1_pick_Lin",
        "R2_drop_B1",
        "R2_drop_B2",
        "R2_drop_C21",
        "R2_drop_C22",
        "R2_pick_B1",
        "R2_pick_B2",
        "R2_pick_C21",
        "R2_pick_C22",
        "R3_drop_B2",
        "R3_drop_B3",
        "R3_drop_C31",
        "R3_drop_C32",
        "R3_pick_B2",
        "R3_pick_B3",
        "R3_pick_C31",
        "R3_pick_C32",
        "R4_drop_B3",
        "R4_drop_C41",
        "R4_drop_C42",
        "R4_drop_C43",
        "R4_pick_B3",
        "R4_pick_C41",
        "R4_pick_C42",
        "R4_pick_C43"
    ];

    /** Constant "bdd_nodes". */
    bdd_nodes_;

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


    /** Discrete variable "Buffer1". */
    Buffer1_;

    /** Discrete variable "Buffer2". */
    Buffer2_;

    /** Discrete variable "Buffer3". */
    Buffer3_;

    /** Discrete variable "Chamber_C11". */
    Chamber_C11_;

    /** Discrete variable "Chamber_C12". */
    Chamber_C12_;

    /** Discrete variable "Chamber_C21". */
    Chamber_C21_;

    /** Discrete variable "Chamber_C22". */
    Chamber_C22_;

    /** Discrete variable "Chamber_C31". */
    Chamber_C31_;

    /** Discrete variable "Chamber_C32". */
    Chamber_C32_;

    /** Discrete variable "Chamber_C41". */
    Chamber_C41_;

    /** Discrete variable "Chamber_C42". */
    Chamber_C42_;

    /** Discrete variable "Chamber_C43". */
    Chamber_C43_;

    /** Discrete variable "H11". */
    H11_;

    /** Discrete variable "H12". */
    H12_;

    /** Discrete variable "H13". */
    H13_;

    /** Discrete variable "H14". */
    H14_;

    /** Discrete variable "H21". */
    H21_;

    /** Discrete variable "H22". */
    H22_;

    /** Discrete variable "H23". */
    H23_;

    /** Discrete variable "H24". */
    H24_;

    /** Discrete variable "H31". */
    H31_;

    /** Discrete variable "H32". */
    H32_;

    /** Discrete variable "H33". */
    H33_;

    /** Discrete variable "H34". */
    H34_;

    /** Discrete variable "H41". */
    H41_;

    /** Discrete variable "H42". */
    H42_;

    /** Discrete variable "H43". */
    H43_;

    /** Discrete variable "H44". */
    H44_;

    /** Discrete variable "R1". */
    R1_;

    /** Discrete variable "R2". */
    R2_;

    /** Discrete variable "R3". */
    R3_;

    /** Discrete variable "R4". */
    R4_;


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

            // Event "Process11".
            edgeExecuted |= this.execEdge0();

            // Event "Process12".
            edgeExecuted |= this.execEdge1();

            // Event "Process21".
            edgeExecuted |= this.execEdge2();

            // Event "Process22".
            edgeExecuted |= this.execEdge3();

            // Event "Process31".
            edgeExecuted |= this.execEdge4();

            // Event "Process32".
            edgeExecuted |= this.execEdge5();

            // Event "Process41".
            edgeExecuted |= this.execEdge6();

            // Event "Process42".
            edgeExecuted |= this.execEdge7();

            // Event "Process43".
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

            // Event "R1_drop_B1".
            edgeExecuted |= this.execEdge9();

            // Event "R1_drop_C11".
            edgeExecuted |= this.execEdge10();

            // Event "R1_drop_C12".
            edgeExecuted |= this.execEdge11();

            // Event "R1_drop_Lout".
            edgeExecuted |= this.execEdge12();

            // Event "R1_pick_B1".
            edgeExecuted |= this.execEdge13();

            // Event "R1_pick_C11".
            edgeExecuted |= this.execEdge14();

            // Event "R1_pick_C12".
            edgeExecuted |= this.execEdge15();

            // Event "R1_pick_Lin".
            edgeExecuted |= this.execEdge16();

            // Event "R2_drop_B1".
            edgeExecuted |= this.execEdge17();

            // Event "R2_drop_B2".
            edgeExecuted |= this.execEdge18();

            // Event "R2_drop_C21".
            edgeExecuted |= this.execEdge19();

            // Event "R2_drop_C22".
            edgeExecuted |= this.execEdge20();

            // Event "R2_pick_B1".
            edgeExecuted |= this.execEdge21();

            // Event "R2_pick_B2".
            edgeExecuted |= this.execEdge22();

            // Event "R2_pick_C21".
            edgeExecuted |= this.execEdge23();

            // Event "R2_pick_C22".
            edgeExecuted |= this.execEdge24();

            // Event "R3_drop_B2".
            edgeExecuted |= this.execEdge25();

            // Event "R3_drop_B3".
            edgeExecuted |= this.execEdge26();

            // Event "R3_drop_C31".
            edgeExecuted |= this.execEdge27();

            // Event "R3_drop_C32".
            edgeExecuted |= this.execEdge28();

            // Event "R3_pick_B2".
            edgeExecuted |= this.execEdge29();

            // Event "R3_pick_B3".
            edgeExecuted |= this.execEdge30();

            // Event "R3_pick_C31".
            edgeExecuted |= this.execEdge31();

            // Event "R3_pick_C32".
            edgeExecuted |= this.execEdge32();

            // Event "R4_drop_B3".
            edgeExecuted |= this.execEdge33();

            // Event "R4_drop_C41".
            edgeExecuted |= this.execEdge34();

            // Event "R4_drop_C42".
            edgeExecuted |= this.execEdge35();

            // Event "R4_drop_C43".
            edgeExecuted |= this.execEdge36();

            // Event "R4_pick_B3".
            edgeExecuted |= this.execEdge37();

            // Event "R4_pick_C41".
            edgeExecuted |= this.execEdge38();

            // Event "R4_pick_C42".
            edgeExecuted |= this.execEdge39();

            // Event "R4_pick_C43".
            edgeExecuted |= this.execEdge40();

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
     * Execute code for edge with index 0 and event "Process11".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = (spec.Chamber_C11_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        spec.Chamber_C11_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "Process12".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = (spec.Chamber_C12_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        spec.Chamber_C12_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "Process21".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = (spec.Chamber_C21_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        spec.Chamber_C21_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "Process22".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = (spec.Chamber_C22_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        spec.Chamber_C22_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "Process31".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = (spec.Chamber_C31_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.Chamber_C31_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "Process32".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = (spec.Chamber_C32_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.Chamber_C32_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "Process41".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = (spec.Chamber_C41_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.Chamber_C41_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "Process42".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = (spec.Chamber_C42_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.Chamber_C42_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "Process43".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = (spec.Chamber_C43_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.Chamber_C43_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "R1_drop_B1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = ((((spec.Buffer1_) == (spec.specEnum._l1)) || ((spec.Buffer1_) == (spec.specEnum._l2))) && ((spec.H12_) == (spec.specEnum._l2))) && (((spec.R1_) == (spec.specEnum._l1)) && (spec.bdd_eval_(0, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        if ((spec.Buffer1_) == (spec.specEnum._l1)) {
            spec.Buffer1_ = spec.specEnum._l2;
        } else if ((spec.Buffer1_) == (spec.specEnum._l2)) {
            spec.Buffer1_ = spec.specEnum._l3;
        }
        spec.H12_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "R1_drop_C11".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = (((((spec.Chamber_C11_) == (spec.specEnum._l1)) || ((spec.Chamber_C11_) == (spec.specEnum._l2))) || ((spec.Chamber_C11_) == (spec.specEnum._l4))) && ((spec.H11_) == (spec.specEnum._l2))) && ((spec.R1_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        if ((spec.Chamber_C11_) == (spec.specEnum._l1)) {
            spec.Chamber_C11_ = spec.specEnum._l2;
        } else if ((spec.Chamber_C11_) == (spec.specEnum._l2)) {
            spec.Chamber_C11_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C11_) == (spec.specEnum._l4)) {
            spec.Chamber_C11_ = spec.specEnum._l3;
        }
        spec.H11_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "R1_drop_C12".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = (((((spec.Chamber_C12_) == (spec.specEnum._l1)) || ((spec.Chamber_C12_) == (spec.specEnum._l2))) || ((spec.Chamber_C12_) == (spec.specEnum._l4))) && ((spec.H13_) == (spec.specEnum._l2))) && ((spec.R1_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        if ((spec.Chamber_C12_) == (spec.specEnum._l1)) {
            spec.Chamber_C12_ = spec.specEnum._l2;
        } else if ((spec.Chamber_C12_) == (spec.specEnum._l2)) {
            spec.Chamber_C12_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C12_) == (spec.specEnum._l4)) {
            spec.Chamber_C12_ = spec.specEnum._l3;
        }
        spec.H13_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 12 and event "R1_drop_Lout".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge12() {
        var guard = ((spec.H14_) == (spec.specEnum._l2)) && ((spec.R1_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(12, true);
        if (this.doInfoEvent) this.infoEvent(12, true);

        spec.H14_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(12, false);
        if (this.doInfoPrintOutput) this.printOutput(12, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 13 and event "R1_pick_B1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge13() {
        var guard = ((((spec.Buffer1_) == (spec.specEnum._l1)) || ((spec.Buffer1_) == (spec.specEnum._l4))) && ((spec.H13_) == (spec.specEnum._l1))) && (((spec.R1_) == (spec.specEnum._l2)) && (spec.bdd_eval_(247, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(13, true);
        if (this.doInfoEvent) this.infoEvent(13, true);

        if ((spec.Buffer1_) == (spec.specEnum._l1)) {
            spec.Buffer1_ = spec.specEnum._l3;
        } else if ((spec.Buffer1_) == (spec.specEnum._l4)) {
            spec.Buffer1_ = spec.specEnum._l1;
        }
        spec.H13_ = spec.specEnum._l2;
        spec.R1_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(13, false);
        if (this.doInfoPrintOutput) this.printOutput(13, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 14 and event "R1_pick_C11".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge14() {
        var guard = (((((spec.Chamber_C11_) == (spec.specEnum._l1)) || ((spec.Chamber_C11_) == (spec.specEnum._l2))) || ((spec.Chamber_C11_) == (spec.specEnum._l4))) && ((spec.H12_) == (spec.specEnum._l1))) && (((spec.R1_) == (spec.specEnum._l2)) && (spec.bdd_eval_(112, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(14, true);
        if (this.doInfoEvent) this.infoEvent(14, true);

        if ((spec.Chamber_C11_) == (spec.specEnum._l1)) {
            spec.Chamber_C11_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C11_) == (spec.specEnum._l2)) {
            spec.Chamber_C11_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C11_) == (spec.specEnum._l4)) {
            spec.Chamber_C11_ = spec.specEnum._l1;
        }
        spec.H12_ = spec.specEnum._l2;
        spec.R1_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(14, false);
        if (this.doInfoPrintOutput) this.printOutput(14, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 15 and event "R1_pick_C12".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge15() {
        var guard = (((((spec.Chamber_C12_) == (spec.specEnum._l1)) || ((spec.Chamber_C12_) == (spec.specEnum._l2))) || ((spec.Chamber_C12_) == (spec.specEnum._l4))) && ((spec.H14_) == (spec.specEnum._l1))) && (((spec.R1_) == (spec.specEnum._l2)) && (spec.bdd_eval_(245, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(15, true);
        if (this.doInfoEvent) this.infoEvent(15, true);

        if ((spec.Chamber_C12_) == (spec.specEnum._l1)) {
            spec.Chamber_C12_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C12_) == (spec.specEnum._l2)) {
            spec.Chamber_C12_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C12_) == (spec.specEnum._l4)) {
            spec.Chamber_C12_ = spec.specEnum._l1;
        }
        spec.H14_ = spec.specEnum._l2;
        spec.R1_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(15, false);
        if (this.doInfoPrintOutput) this.printOutput(15, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 16 and event "R1_pick_Lin".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge16() {
        var guard = ((spec.H11_) == (spec.specEnum._l1)) && (((spec.R1_) == (spec.specEnum._l2)) && (spec.bdd_eval_(111, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(16, true);
        if (this.doInfoEvent) this.infoEvent(16, true);

        spec.H11_ = spec.specEnum._l2;
        spec.R1_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(16, false);
        if (this.doInfoPrintOutput) this.printOutput(16, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 17 and event "R2_drop_B1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge17() {
        var guard = ((((spec.Buffer1_) == (spec.specEnum._l1)) || ((spec.Buffer1_) == (spec.specEnum._l4))) && ((spec.H24_) == (spec.specEnum._l2))) && (((spec.R2_) == (spec.specEnum._l1)) && (spec.bdd_eval_(14, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(17, true);
        if (this.doInfoEvent) this.infoEvent(17, true);

        if ((spec.Buffer1_) == (spec.specEnum._l1)) {
            spec.Buffer1_ = spec.specEnum._l4;
        } else if ((spec.Buffer1_) == (spec.specEnum._l4)) {
            spec.Buffer1_ = spec.specEnum._l3;
        }
        spec.H24_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(17, false);
        if (this.doInfoPrintOutput) this.printOutput(17, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 18 and event "R2_drop_B2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge18() {
        var guard = ((((spec.Buffer2_) == (spec.specEnum._l1)) || ((spec.Buffer2_) == (spec.specEnum._l2))) && ((spec.H22_) == (spec.specEnum._l2))) && (((spec.R2_) == (spec.specEnum._l1)) && (spec.bdd_eval_(249, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(18, true);
        if (this.doInfoEvent) this.infoEvent(18, true);

        if ((spec.Buffer2_) == (spec.specEnum._l1)) {
            spec.Buffer2_ = spec.specEnum._l2;
        } else if ((spec.Buffer2_) == (spec.specEnum._l2)) {
            spec.Buffer2_ = spec.specEnum._l3;
        }
        spec.H22_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(18, false);
        if (this.doInfoPrintOutput) this.printOutput(18, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 19 and event "R2_drop_C21".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge19() {
        var guard = (((((spec.Chamber_C21_) == (spec.specEnum._l1)) || ((spec.Chamber_C21_) == (spec.specEnum._l2))) || ((spec.Chamber_C21_) == (spec.specEnum._l4))) && ((spec.H21_) == (spec.specEnum._l2))) && ((spec.R2_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(19, true);
        if (this.doInfoEvent) this.infoEvent(19, true);

        if ((spec.Chamber_C21_) == (spec.specEnum._l1)) {
            spec.Chamber_C21_ = spec.specEnum._l2;
        } else if ((spec.Chamber_C21_) == (spec.specEnum._l2)) {
            spec.Chamber_C21_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C21_) == (spec.specEnum._l4)) {
            spec.Chamber_C21_ = spec.specEnum._l3;
        }
        spec.H21_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(19, false);
        if (this.doInfoPrintOutput) this.printOutput(19, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 20 and event "R2_drop_C22".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge20() {
        var guard = (((((spec.Chamber_C22_) == (spec.specEnum._l1)) || ((spec.Chamber_C22_) == (spec.specEnum._l2))) || ((spec.Chamber_C22_) == (spec.specEnum._l4))) && ((spec.H23_) == (spec.specEnum._l2))) && ((spec.R2_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(20, true);
        if (this.doInfoEvent) this.infoEvent(20, true);

        if ((spec.Chamber_C22_) == (spec.specEnum._l1)) {
            spec.Chamber_C22_ = spec.specEnum._l2;
        } else if ((spec.Chamber_C22_) == (spec.specEnum._l2)) {
            spec.Chamber_C22_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C22_) == (spec.specEnum._l4)) {
            spec.Chamber_C22_ = spec.specEnum._l3;
        }
        spec.H23_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(20, false);
        if (this.doInfoPrintOutput) this.printOutput(20, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 21 and event "R2_pick_B1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge21() {
        var guard = ((((spec.Buffer1_) == (spec.specEnum._l1)) || ((spec.Buffer1_) == (spec.specEnum._l2))) && ((spec.H21_) == (spec.specEnum._l1))) && (((spec.R2_) == (spec.specEnum._l2)) && (spec.bdd_eval_(289, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(21, true);
        if (this.doInfoEvent) this.infoEvent(21, true);

        if ((spec.Buffer1_) == (spec.specEnum._l1)) {
            spec.Buffer1_ = spec.specEnum._l3;
        } else if ((spec.Buffer1_) == (spec.specEnum._l2)) {
            spec.Buffer1_ = spec.specEnum._l1;
        }
        spec.H21_ = spec.specEnum._l2;
        spec.R2_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(21, false);
        if (this.doInfoPrintOutput) this.printOutput(21, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 22 and event "R2_pick_B2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge22() {
        var guard = ((((spec.Buffer2_) == (spec.specEnum._l1)) || ((spec.Buffer2_) == (spec.specEnum._l4))) && ((spec.H23_) == (spec.specEnum._l1))) && (((spec.R2_) == (spec.specEnum._l2)) && (spec.bdd_eval_(417, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(22, true);
        if (this.doInfoEvent) this.infoEvent(22, true);

        if ((spec.Buffer2_) == (spec.specEnum._l1)) {
            spec.Buffer2_ = spec.specEnum._l3;
        } else if ((spec.Buffer2_) == (spec.specEnum._l4)) {
            spec.Buffer2_ = spec.specEnum._l1;
        }
        spec.H23_ = spec.specEnum._l2;
        spec.R2_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(22, false);
        if (this.doInfoPrintOutput) this.printOutput(22, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 23 and event "R2_pick_C21".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge23() {
        var guard = (((((spec.Chamber_C21_) == (spec.specEnum._l1)) || ((spec.Chamber_C21_) == (spec.specEnum._l2))) || ((spec.Chamber_C21_) == (spec.specEnum._l4))) && ((spec.H22_) == (spec.specEnum._l1))) && (((spec.R2_) == (spec.specEnum._l2)) && (spec.bdd_eval_(291, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(23, true);
        if (this.doInfoEvent) this.infoEvent(23, true);

        if ((spec.Chamber_C21_) == (spec.specEnum._l1)) {
            spec.Chamber_C21_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C21_) == (spec.specEnum._l2)) {
            spec.Chamber_C21_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C21_) == (spec.specEnum._l4)) {
            spec.Chamber_C21_ = spec.specEnum._l1;
        }
        spec.H22_ = spec.specEnum._l2;
        spec.R2_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(23, false);
        if (this.doInfoPrintOutput) this.printOutput(23, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 24 and event "R2_pick_C22".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge24() {
        var guard = (((((spec.Chamber_C22_) == (spec.specEnum._l1)) || ((spec.Chamber_C22_) == (spec.specEnum._l2))) || ((spec.Chamber_C22_) == (spec.specEnum._l4))) && ((spec.H24_) == (spec.specEnum._l1))) && (((spec.R2_) == (spec.specEnum._l2)) && (spec.bdd_eval_(356, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(24, true);
        if (this.doInfoEvent) this.infoEvent(24, true);

        if ((spec.Chamber_C22_) == (spec.specEnum._l1)) {
            spec.Chamber_C22_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C22_) == (spec.specEnum._l2)) {
            spec.Chamber_C22_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C22_) == (spec.specEnum._l4)) {
            spec.Chamber_C22_ = spec.specEnum._l1;
        }
        spec.H24_ = spec.specEnum._l2;
        spec.R2_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(24, false);
        if (this.doInfoPrintOutput) this.printOutput(24, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 25 and event "R3_drop_B2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge25() {
        var guard = ((((spec.Buffer2_) == (spec.specEnum._l1)) || ((spec.Buffer2_) == (spec.specEnum._l4))) && ((spec.H34_) == (spec.specEnum._l2))) && (((spec.R3_) == (spec.specEnum._l1)) && (spec.bdd_eval_(257, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(25, true);
        if (this.doInfoEvent) this.infoEvent(25, true);

        if ((spec.Buffer2_) == (spec.specEnum._l1)) {
            spec.Buffer2_ = spec.specEnum._l4;
        } else if ((spec.Buffer2_) == (spec.specEnum._l4)) {
            spec.Buffer2_ = spec.specEnum._l3;
        }
        spec.H34_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(25, false);
        if (this.doInfoPrintOutput) this.printOutput(25, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 26 and event "R3_drop_B3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge26() {
        var guard = ((((spec.Buffer3_) == (spec.specEnum._l1)) || ((spec.Buffer3_) == (spec.specEnum._l2))) && ((spec.H32_) == (spec.specEnum._l2))) && (((spec.R3_) == (spec.specEnum._l1)) && (spec.bdd_eval_(419, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(26, true);
        if (this.doInfoEvent) this.infoEvent(26, true);

        if ((spec.Buffer3_) == (spec.specEnum._l1)) {
            spec.Buffer3_ = spec.specEnum._l2;
        } else if ((spec.Buffer3_) == (spec.specEnum._l2)) {
            spec.Buffer3_ = spec.specEnum._l3;
        }
        spec.H32_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(26, false);
        if (this.doInfoPrintOutput) this.printOutput(26, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 27 and event "R3_drop_C31".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge27() {
        var guard = (((((spec.Chamber_C31_) == (spec.specEnum._l1)) || ((spec.Chamber_C31_) == (spec.specEnum._l2))) || ((spec.Chamber_C31_) == (spec.specEnum._l4))) && ((spec.H31_) == (spec.specEnum._l2))) && ((spec.R3_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(27, true);
        if (this.doInfoEvent) this.infoEvent(27, true);

        if ((spec.Chamber_C31_) == (spec.specEnum._l1)) {
            spec.Chamber_C31_ = spec.specEnum._l2;
        } else if ((spec.Chamber_C31_) == (spec.specEnum._l2)) {
            spec.Chamber_C31_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C31_) == (spec.specEnum._l4)) {
            spec.Chamber_C31_ = spec.specEnum._l3;
        }
        spec.H31_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(27, false);
        if (this.doInfoPrintOutput) this.printOutput(27, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 28 and event "R3_drop_C32".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge28() {
        var guard = (((((spec.Chamber_C32_) == (spec.specEnum._l1)) || ((spec.Chamber_C32_) == (spec.specEnum._l2))) || ((spec.Chamber_C32_) == (spec.specEnum._l4))) && ((spec.H33_) == (spec.specEnum._l2))) && ((spec.R3_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(28, true);
        if (this.doInfoEvent) this.infoEvent(28, true);

        if ((spec.Chamber_C32_) == (spec.specEnum._l1)) {
            spec.Chamber_C32_ = spec.specEnum._l2;
        } else if ((spec.Chamber_C32_) == (spec.specEnum._l2)) {
            spec.Chamber_C32_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C32_) == (spec.specEnum._l4)) {
            spec.Chamber_C32_ = spec.specEnum._l3;
        }
        spec.H33_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(28, false);
        if (this.doInfoPrintOutput) this.printOutput(28, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 29 and event "R3_pick_B2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge29() {
        var guard = ((((spec.Buffer2_) == (spec.specEnum._l1)) || ((spec.Buffer2_) == (spec.specEnum._l2))) && ((spec.H31_) == (spec.specEnum._l1))) && (((spec.R3_) == (spec.specEnum._l2)) && (spec.bdd_eval_(429, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(29, true);
        if (this.doInfoEvent) this.infoEvent(29, true);

        if ((spec.Buffer2_) == (spec.specEnum._l1)) {
            spec.Buffer2_ = spec.specEnum._l3;
        } else if ((spec.Buffer2_) == (spec.specEnum._l2)) {
            spec.Buffer2_ = spec.specEnum._l1;
        }
        spec.H31_ = spec.specEnum._l2;
        spec.R3_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(29, false);
        if (this.doInfoPrintOutput) this.printOutput(29, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 30 and event "R3_pick_B3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge30() {
        var guard = ((((spec.Buffer3_) == (spec.specEnum._l1)) || ((spec.Buffer3_) == (spec.specEnum._l4))) && ((spec.H33_) == (spec.specEnum._l1))) && (((spec.R3_) == (spec.specEnum._l2)) && (spec.bdd_eval_(492, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(30, true);
        if (this.doInfoEvent) this.infoEvent(30, true);

        if ((spec.Buffer3_) == (spec.specEnum._l1)) {
            spec.Buffer3_ = spec.specEnum._l3;
        } else if ((spec.Buffer3_) == (spec.specEnum._l4)) {
            spec.Buffer3_ = spec.specEnum._l1;
        }
        spec.H33_ = spec.specEnum._l2;
        spec.R3_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(30, false);
        if (this.doInfoPrintOutput) this.printOutput(30, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 31 and event "R3_pick_C31".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge31() {
        var guard = (((((spec.Chamber_C31_) == (spec.specEnum._l1)) || ((spec.Chamber_C31_) == (spec.specEnum._l2))) || ((spec.Chamber_C31_) == (spec.specEnum._l4))) && ((spec.H32_) == (spec.specEnum._l1))) && (((spec.R3_) == (spec.specEnum._l2)) && (spec.bdd_eval_(431, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(31, true);
        if (this.doInfoEvent) this.infoEvent(31, true);

        if ((spec.Chamber_C31_) == (spec.specEnum._l1)) {
            spec.Chamber_C31_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C31_) == (spec.specEnum._l2)) {
            spec.Chamber_C31_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C31_) == (spec.specEnum._l4)) {
            spec.Chamber_C31_ = spec.specEnum._l1;
        }
        spec.H32_ = spec.specEnum._l2;
        spec.R3_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(31, false);
        if (this.doInfoPrintOutput) this.printOutput(31, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 32 and event "R3_pick_C32".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge32() {
        var guard = (((((spec.Chamber_C32_) == (spec.specEnum._l1)) || ((spec.Chamber_C32_) == (spec.specEnum._l2))) || ((spec.Chamber_C32_) == (spec.specEnum._l4))) && ((spec.H34_) == (spec.specEnum._l1))) && (((spec.R3_) == (spec.specEnum._l2)) && (spec.bdd_eval_(451, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(32, true);
        if (this.doInfoEvent) this.infoEvent(32, true);

        if ((spec.Chamber_C32_) == (spec.specEnum._l1)) {
            spec.Chamber_C32_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C32_) == (spec.specEnum._l2)) {
            spec.Chamber_C32_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C32_) == (spec.specEnum._l4)) {
            spec.Chamber_C32_ = spec.specEnum._l1;
        }
        spec.H34_ = spec.specEnum._l2;
        spec.R3_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(32, false);
        if (this.doInfoPrintOutput) this.printOutput(32, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 33 and event "R4_drop_B3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge33() {
        var guard = ((((spec.Buffer3_) == (spec.specEnum._l1)) || ((spec.Buffer3_) == (spec.specEnum._l4))) && ((spec.H44_) == (spec.specEnum._l2))) && (((spec.R4_) == (spec.specEnum._l1)) && (spec.bdd_eval_(424, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(33, true);
        if (this.doInfoEvent) this.infoEvent(33, true);

        if ((spec.Buffer3_) == (spec.specEnum._l1)) {
            spec.Buffer3_ = spec.specEnum._l4;
        } else if ((spec.Buffer3_) == (spec.specEnum._l4)) {
            spec.Buffer3_ = spec.specEnum._l3;
        }
        spec.H44_ = spec.specEnum._l1;
        spec.R4_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(33, false);
        if (this.doInfoPrintOutput) this.printOutput(33, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 34 and event "R4_drop_C41".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge34() {
        var guard = (((((spec.Chamber_C41_) == (spec.specEnum._l1)) || ((spec.Chamber_C41_) == (spec.specEnum._l2))) || ((spec.Chamber_C41_) == (spec.specEnum._l4))) && ((spec.H41_) == (spec.specEnum._l2))) && ((spec.R4_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(34, true);
        if (this.doInfoEvent) this.infoEvent(34, true);

        if ((spec.Chamber_C41_) == (spec.specEnum._l1)) {
            spec.Chamber_C41_ = spec.specEnum._l2;
        } else if ((spec.Chamber_C41_) == (spec.specEnum._l2)) {
            spec.Chamber_C41_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C41_) == (spec.specEnum._l4)) {
            spec.Chamber_C41_ = spec.specEnum._l3;
        }
        spec.H41_ = spec.specEnum._l1;
        spec.R4_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(34, false);
        if (this.doInfoPrintOutput) this.printOutput(34, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 35 and event "R4_drop_C42".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge35() {
        var guard = (((((spec.Chamber_C42_) == (spec.specEnum._l1)) || ((spec.Chamber_C42_) == (spec.specEnum._l2))) || ((spec.Chamber_C42_) == (spec.specEnum._l4))) && ((spec.H42_) == (spec.specEnum._l2))) && ((spec.R4_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(35, true);
        if (this.doInfoEvent) this.infoEvent(35, true);

        if ((spec.Chamber_C42_) == (spec.specEnum._l1)) {
            spec.Chamber_C42_ = spec.specEnum._l2;
        } else if ((spec.Chamber_C42_) == (spec.specEnum._l2)) {
            spec.Chamber_C42_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C42_) == (spec.specEnum._l4)) {
            spec.Chamber_C42_ = spec.specEnum._l3;
        }
        spec.H42_ = spec.specEnum._l1;
        spec.R4_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(35, false);
        if (this.doInfoPrintOutput) this.printOutput(35, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 36 and event "R4_drop_C43".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge36() {
        var guard = (((((spec.Chamber_C43_) == (spec.specEnum._l1)) || ((spec.Chamber_C43_) == (spec.specEnum._l2))) || ((spec.Chamber_C43_) == (spec.specEnum._l4))) && ((spec.H43_) == (spec.specEnum._l2))) && ((spec.R4_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(36, true);
        if (this.doInfoEvent) this.infoEvent(36, true);

        if ((spec.Chamber_C43_) == (spec.specEnum._l1)) {
            spec.Chamber_C43_ = spec.specEnum._l2;
        } else if ((spec.Chamber_C43_) == (spec.specEnum._l2)) {
            spec.Chamber_C43_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C43_) == (spec.specEnum._l4)) {
            spec.Chamber_C43_ = spec.specEnum._l3;
        }
        spec.H43_ = spec.specEnum._l1;
        spec.R4_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(36, false);
        if (this.doInfoPrintOutput) this.printOutput(36, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 37 and event "R4_pick_B3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge37() {
        var guard = ((((spec.Buffer3_) == (spec.specEnum._l1)) || ((spec.Buffer3_) == (spec.specEnum._l2))) && ((spec.H41_) == (spec.specEnum._l1))) && (((spec.R4_) == (spec.specEnum._l2)) && (spec.bdd_eval_(494, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(37, true);
        if (this.doInfoEvent) this.infoEvent(37, true);

        if ((spec.Buffer3_) == (spec.specEnum._l1)) {
            spec.Buffer3_ = spec.specEnum._l3;
        } else if ((spec.Buffer3_) == (spec.specEnum._l2)) {
            spec.Buffer3_ = spec.specEnum._l1;
        }
        spec.H41_ = spec.specEnum._l2;
        spec.R4_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(37, false);
        if (this.doInfoPrintOutput) this.printOutput(37, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 38 and event "R4_pick_C41".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge38() {
        var guard = (((((spec.Chamber_C41_) == (spec.specEnum._l1)) || ((spec.Chamber_C41_) == (spec.specEnum._l2))) || ((spec.Chamber_C41_) == (spec.specEnum._l4))) && ((spec.H42_) == (spec.specEnum._l1))) && (((spec.R4_) == (spec.specEnum._l2)) && (spec.bdd_eval_(496, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(38, true);
        if (this.doInfoEvent) this.infoEvent(38, true);

        if ((spec.Chamber_C41_) == (spec.specEnum._l1)) {
            spec.Chamber_C41_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C41_) == (spec.specEnum._l2)) {
            spec.Chamber_C41_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C41_) == (spec.specEnum._l4)) {
            spec.Chamber_C41_ = spec.specEnum._l1;
        }
        spec.H42_ = spec.specEnum._l2;
        spec.R4_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(38, false);
        if (this.doInfoPrintOutput) this.printOutput(38, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 39 and event "R4_pick_C42".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge39() {
        var guard = (((((spec.Chamber_C42_) == (spec.specEnum._l1)) || ((spec.Chamber_C42_) == (spec.specEnum._l2))) || ((spec.Chamber_C42_) == (spec.specEnum._l4))) && ((spec.H43_) == (spec.specEnum._l1))) && (((spec.R4_) == (spec.specEnum._l2)) && (spec.bdd_eval_(499, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(39, true);
        if (this.doInfoEvent) this.infoEvent(39, true);

        if ((spec.Chamber_C42_) == (spec.specEnum._l1)) {
            spec.Chamber_C42_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C42_) == (spec.specEnum._l2)) {
            spec.Chamber_C42_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C42_) == (spec.specEnum._l4)) {
            spec.Chamber_C42_ = spec.specEnum._l1;
        }
        spec.H43_ = spec.specEnum._l2;
        spec.R4_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(39, false);
        if (this.doInfoPrintOutput) this.printOutput(39, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 40 and event "R4_pick_C43".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge40() {
        var guard = (((((spec.Chamber_C43_) == (spec.specEnum._l1)) || ((spec.Chamber_C43_) == (spec.specEnum._l2))) || ((spec.Chamber_C43_) == (spec.specEnum._l4))) && ((spec.H44_) == (spec.specEnum._l1))) && (((spec.R4_) == (spec.specEnum._l2)) && (spec.bdd_eval_(502, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(40, true);
        if (this.doInfoEvent) this.infoEvent(40, true);

        if ((spec.Chamber_C43_) == (spec.specEnum._l1)) {
            spec.Chamber_C43_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C43_) == (spec.specEnum._l2)) {
            spec.Chamber_C43_ = spec.specEnum._l3;
        } else if ((spec.Chamber_C43_) == (spec.specEnum._l4)) {
            spec.Chamber_C43_ = spec.specEnum._l1;
        }
        spec.H44_ = spec.specEnum._l2;
        spec.R4_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(40, false);
        if (this.doInfoPrintOutput) this.printOutput(40, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /** Initializes the state. */
    initState() {
        // Initialize constants, if not yet done so.
        if (!this.constantsInitialized) {
            this.constantsInitialized = true;
            spec.bdd_nodes_ = [new CifTuple_T3III(22, 1, 102), new CifTuple_T3III(39, 2, 95), new CifTuple_T3III(38, 3, 81), new CifTuple_T3III(20, 4, 80), new CifTuple_T3III(43, 5, 68), new CifTuple_T3III(37, 6, 62), new CifTuple_T3III(4, 7, 43), new CifTuple_T3III(33, 8, 38), new CifTuple_T3III(34, 9, 37), new CifTuple_T3III(16, 10, 27), new CifTuple_T3III(42, 11, 24), new CifTuple_T3III(14, 12, 23), new CifTuple_T3III(35, 13, 23), new CifTuple_T3III(2, 14, 15), new CifTuple_T3III(0, -(1), -(2)), new CifTuple_T3III(3, 16, 20), new CifTuple_T3III(30, 17, 14), new CifTuple_T3III(29, 14, 18), new CifTuple_T3III(10, 14, 19), new CifTuple_T3III(12, 14, -(1)), new CifTuple_T3III(30, 21, -(1)), new CifTuple_T3III(41, 14, 22), new CifTuple_T3III(10, 19, 14), new CifTuple_T3III(2, 20, -(1)), new CifTuple_T3III(14, 25, 13), new CifTuple_T3III(2, 14, 26), new CifTuple_T3III(3, 14, 20), new CifTuple_T3III(42, 28, 37), new CifTuple_T3III(14, 29, 23), new CifTuple_T3III(35, 30, 23), new CifTuple_T3III(2, 16, 31), new CifTuple_T3III(3, 32, 20), new CifTuple_T3III(30, 33, 36), new CifTuple_T3III(29, 34, 35), new CifTuple_T3III(41, 19, 18), new CifTuple_T3III(10, 19, -(1)), new CifTuple_T3III(10, 14, -(1)), new CifTuple_T3III(14, 13, 30), new CifTuple_T3III(16, 37, 39), new CifTuple_T3III(14, 30, 40), new CifTuple_T3III(2, 32, 41), new CifTuple_T3III(30, 42, -(1)), new CifTuple_T3III(41, -(1), 35), new CifTuple_T3III(5, 44, 53), new CifTuple_T3III(33, 45, 51), new CifTuple_T3III(34, 46, 39), new CifTuple_T3III(16, 27, 47), new CifTuple_T3III(42, 48, 39), new CifTuple_T3III(14, 49, 50), new CifTuple_T3III(35, 40, 23), new CifTuple_T3III(2, 41, -(1)), new CifTuple_T3III(16, 39, 52), new CifTuple_T3III(14, 40, 50), new CifTuple_T3III(34, 54, 58), new CifTuple_T3III(16, 27, 55), new CifTuple_T3III(42, 56, 58), new CifTuple_T3III(14, 57, -(1)), new CifTuple_T3III(35, 23, 50), new CifTuple_T3III(14, 59, 23), new CifTuple_T3III(2, 60, 20), new CifTuple_T3III(30, 61, 36), new CifTuple_T3III(29, 34, 22), new CifTuple_T3III(18, 6, 63), new CifTuple_T3III(4, 44, 64), new CifTuple_T3III(34, 65, 52), new CifTuple_T3III(16, 47, 66), new CifTuple_T3III(42, 67, 52), new CifTuple_T3III(14, 50, -(1)), new CifTuple_T3III(18, 69, 6), new CifTuple_T3III(4, 70, 77), new CifTuple_T3III(33, 71, 76), new CifTuple_T3III(34, 72, 24), new CifTuple_T3III(16, 73, 10), new CifTuple_T3III(42, 74, 25), new CifTuple_T3III(14, 75, 23), new CifTuple_T3III(35, 25, 23), new CifTuple_T3III(16, 24, 37), new CifTuple_T3III(5, 7, 78), new CifTuple_T3III(34, 79, 58), new CifTuple_T3III(16, 10, 55), new CifTuple_T3III(43, 63, 62), new CifTuple_T3III(20, 62, 82), new CifTuple_T3III(18, 63, 83), new CifTuple_T3III(4, 64, 84), new CifTuple_T3III(34, 85, 89), new CifTuple_T3III(16, 66, 86), new CifTuple_T3III(42, 87, 89), new CifTuple_T3III(14, 88, -(1)), new CifTuple_T3III(35, -(1), 50), new CifTuple_T3III(14, 90, -(1)), new CifTuple_T3III(2, 91, 94), new CifTuple_T3III(30, 92, 36), new CifTuple_T3III(29, 93, -(1)), new CifTuple_T3III(41, -(1), 36), new CifTuple_T3III(3, -(1), 41), new CifTuple_T3III(20, 96, 101), new CifTuple_T3III(18, 97, 100), new CifTuple_T3III(4, 78, 98), new CifTuple_T3III(34, 99, 89), new CifTuple_T3III(16, 55, 86), new CifTuple_T3III(4, 53, 98), new CifTuple_T3III(18, 100, 83), new CifTuple_T3III(39, 103, 107), new CifTuple_T3III(20, 104, 106), new CifTuple_T3III(43, 105, 62), new CifTuple_T3III(37, 63, 82), new CifTuple_T3III(43, 83, 82), new CifTuple_T3III(20, 101, 108), new CifTuple_T3III(18, 83, 109), new CifTuple_T3III(4, 84, 110), new CifTuple_T3III(34, 86, 89), new CifTuple_T3III(6, -(1), -(2)), new CifTuple_T3III(22, 113, 236), new CifTuple_T3III(39, 114, 229), new CifTuple_T3III(38, 115, 214), new CifTuple_T3III(20, 116, 213), new CifTuple_T3III(43, 117, 201), new CifTuple_T3III(37, 118, 195), new CifTuple_T3III(4, 119, 175), new CifTuple_T3III(33, 120, 168), new CifTuple_T3III(34, 121, 167), new CifTuple_T3III(16, 122, 153), new CifTuple_T3III(42, 123, 150), new CifTuple_T3III(14, 124, 147), new CifTuple_T3III(35, 125, 147), new CifTuple_T3III(2, 126, 134), new CifTuple_T3III(30, 127, 131), new CifTuple_T3III(29, 128, 131), new CifTuple_T3III(41, 129, 131), new CifTuple_T3III(10, 130, -(2)), new CifTuple_T3III(31, 131, -(2)), new CifTuple_T3III(1, 132, -(2)), new CifTuple_T3III(6, -(2), 133), new CifTuple_T3III(7, -(2), -(1)), new CifTuple_T3III(3, 135, 140), new CifTuple_T3III(30, 136, 131), new CifTuple_T3III(29, 128, 137), new CifTuple_T3III(10, 131, 138), new CifTuple_T3III(12, 131, 139), new CifTuple_T3III(0, 132, -(2)), new CifTuple_T3III(30, 141, 146), new CifTuple_T3III(41, 142, 144), new CifTuple_T3III(10, 143, -(2)), new CifTuple_T3III(12, 130, -(2)), new CifTuple_T3III(10, 138, 145), new CifTuple_T3III(12, 131, -(2)), new CifTuple_T3III(10, 139, -(2)), new CifTuple_T3III(2, 140, 148), new CifTuple_T3III(30, 149, 146), new CifTuple_T3III(41, -(2), 146), new CifTuple_T3III(14, 151, 125), new CifTuple_T3III(2, 126, 152), new CifTuple_T3III(3, 126, 140), new CifTuple_T3III(42, 154, 167), new CifTuple_T3III(14, 155, 147), new CifTuple_T3III(35, 156, 147), new CifTuple_T3III(2, 135, 157), new CifTuple_T3III(3, 158, 140), new CifTuple_T3III(30, 159, 166), new CifTuple_T3III(29, 160, 164), new CifTuple_T3III(41, 161, 137), new CifTuple_T3III(10, 162, -(2)), new CifTuple_T3III(12, 130, 163), new CifTuple_T3III(31, 139, -(2)), new CifTuple_T3III(10, 138, 165), new CifTuple_T3III(12, 139, -(2)), new CifTuple_T3III(10, 131, 139), new CifTuple_T3III(14, 125, 156), new CifTuple_T3III(16, 167, 169), new CifTuple_T3III(14, 156, 170), new CifTuple_T3III(2, 158, 171), new CifTuple_T3III(30, 172, 146), new CifTuple_T3III(41, 173, 164), new CifTuple_T3III(10, 174, -(2)), new CifTuple_T3III(12, 163, -(2)), new CifTuple_T3III(5, 176, 185), new CifTuple_T3III(33, 177, 183), new CifTuple_T3III(34, 178, 169), new CifTuple_T3III(16, 153, 179), new CifTuple_T3III(42, 180, 169), new CifTuple_T3III(14, 181, 182), new CifTuple_T3III(35, 170, 147), new CifTuple_T3III(2, 171, 148), new CifTuple_T3III(16, 169, 184), new CifTuple_T3III(14, 170, 182), new CifTuple_T3III(34, 186, 190), new CifTuple_T3III(16, 153, 187), new CifTuple_T3III(42, 188, 190), new CifTuple_T3III(14, 189, 148), new CifTuple_T3III(35, 147, 182), new CifTuple_T3III(14, 191, 147), new CifTuple_T3III(2, 192, 194), new CifTuple_T3III(30, 193, 166), new CifTuple_T3III(29, 160, 144), new CifTuple_T3III(3, 140, 171), new CifTuple_T3III(18, 118, 196), new CifTuple_T3III(4, 176, 197), new CifTuple_T3III(34, 198, 184), new CifTuple_T3III(16, 179, 199), new CifTuple_T3III(42, 200, 184), new CifTuple_T3III(14, 182, 148), new CifTuple_T3III(18, 202, 118), new CifTuple_T3III(4, 203, 210), new CifTuple_T3III(33, 204, 209), new CifTuple_T3III(34, 205, 150), new CifTuple_T3III(16, 206, 122), new CifTuple_T3III(42, 207, 151), new CifTuple_T3III(14, 208, 147), new CifTuple_T3III(35, 151, 147), new CifTuple_T3III(16, 150, 167), new CifTuple_T3III(5, 119, 211), new CifTuple_T3III(34, 212, 190), new CifTuple_T3III(16, 122, 187), new CifTuple_T3III(43, 196, 195), new CifTuple_T3III(20, 195, 215), new CifTuple_T3III(18, 196, 216), new CifTuple_T3III(4, 197, 217), new CifTuple_T3III(34, 218, 222), new CifTuple_T3III(16, 199, 219), new CifTuple_T3III(42, 220, 222), new CifTuple_T3III(14, 221, 148), new CifTuple_T3III(35, 148, 182), new CifTuple_T3III(14, 223, 148), new CifTuple_T3III(2, 224, 228), new CifTuple_T3III(30, 225, 166), new CifTuple_T3III(29, 226, 146), new CifTuple_T3III(41, 227, 166), new CifTuple_T3III(10, 163, -(2)), new CifTuple_T3III(3, 148, 171), new CifTuple_T3III(20, 230, 235), new CifTuple_T3III(18, 231, 234), new CifTuple_T3III(4, 211, 232), new CifTuple_T3III(34, 233, 222), new CifTuple_T3III(16, 187, 219), new CifTuple_T3III(4, 185, 232), new CifTuple_T3III(18, 234, 216), new CifTuple_T3III(39, 237, 241), new CifTuple_T3III(20, 238, 240), new CifTuple_T3III(43, 239, 195), new CifTuple_T3III(37, 196, 215), new CifTuple_T3III(43, 216, 215), new CifTuple_T3III(20, 235, 242), new CifTuple_T3III(18, 216, 243), new CifTuple_T3III(4, 217, 244), new CifTuple_T3III(34, 219, 222), new CifTuple_T3III(8, -(2), 246), new CifTuple_T3III(9, -(2), -(1)), new CifTuple_T3III(0, -(2), 248), new CifTuple_T3III(8, -(1), -(2)), new CifTuple_T3III(22, 250, 282), new CifTuple_T3III(39, 251, 279), new CifTuple_T3III(38, 252, 276), new CifTuple_T3III(20, 253, 275), new CifTuple_T3III(43, 254, 272), new CifTuple_T3III(37, 255, 268), new CifTuple_T3III(4, 256, 260), new CifTuple_T3III(33, 257, 258), new CifTuple_T3III(2, -(1), -(2)), new CifTuple_T3III(16, 257, 259), new CifTuple_T3III(14, 257, -(1)), new CifTuple_T3III(5, 261, 266), new CifTuple_T3III(33, 262, 265), new CifTuple_T3III(34, 263, 259), new CifTuple_T3III(16, 257, 264), new CifTuple_T3III(42, -(1), 259), new CifTuple_T3III(16, 259, -(1)), new CifTuple_T3III(34, 267, -(1)), new CifTuple_T3III(16, 257, -(1)), new CifTuple_T3III(18, 255, 269), new CifTuple_T3III(4, 261, 270), new CifTuple_T3III(34, 271, -(1)), new CifTuple_T3III(16, 264, -(1)), new CifTuple_T3III(18, 273, 255), new CifTuple_T3III(4, 257, 274), new CifTuple_T3III(5, 256, 266), new CifTuple_T3III(43, 269, 268), new CifTuple_T3III(20, 268, 277), new CifTuple_T3III(18, 269, 278), new CifTuple_T3III(4, 270, -(1)), new CifTuple_T3III(20, 280, 281), new CifTuple_T3III(4, 266, -(1)), new CifTuple_T3III(18, 280, 278), new CifTuple_T3III(39, 283, 287), new CifTuple_T3III(20, 284, 286), new CifTuple_T3III(43, 285, 268), new CifTuple_T3III(37, 269, 277), new CifTuple_T3III(43, 278, 277), new CifTuple_T3III(20, 281, 288), new CifTuple_T3III(18, 278, -(1)), new CifTuple_T3III(10, 290, -(2)), new CifTuple_T3III(0, -(2), -(1)), new CifTuple_T3III(22, 292, 349), new CifTuple_T3III(39, 293, 344), new CifTuple_T3III(38, 294, 340), new CifTuple_T3III(20, 295, 339), new CifTuple_T3III(43, 296, 331), new CifTuple_T3III(37, 297, 327), new CifTuple_T3III(4, 298, 315), new CifTuple_T3III(33, 299, 312), new CifTuple_T3III(34, 300, 311), new CifTuple_T3III(16, 301, 307), new CifTuple_T3III(42, 302, 304), new CifTuple_T3III(14, 303, -(2)), new CifTuple_T3III(35, 304, -(2)), new CifTuple_T3III(3, 305, -(2)), new CifTuple_T3III(10, -(2), 306), new CifTuple_T3III(11, -(2), -(1)), new CifTuple_T3III(42, 308, 311), new CifTuple_T3III(14, 309, -(2)), new CifTuple_T3III(35, 310, -(2)), new CifTuple_T3III(2, 305, 304), new CifTuple_T3III(14, 304, 310), new CifTuple_T3III(16, 311, 313), new CifTuple_T3III(14, 310, 314), new CifTuple_T3III(2, 305, -(2)), new CifTuple_T3III(5, 316, 324), new CifTuple_T3III(33, 317, 322), new CifTuple_T3III(34, 318, 313), new CifTuple_T3III(16, 307, 319), new CifTuple_T3III(42, 320, 313), new CifTuple_T3III(14, 321, -(2)), new CifTuple_T3III(35, 314, -(2)), new CifTuple_T3III(16, 313, 323), new CifTuple_T3III(14, 314, -(2)), new CifTuple_T3III(34, 325, 323), new CifTuple_T3III(16, 307, 326), new CifTuple_T3III(42, -(2), 323), new CifTuple_T3III(18, 297, 328), new CifTuple_T3III(4, 316, 329), new CifTuple_T3III(34, 330, 323), new CifTuple_T3III(16, 319, 326), new CifTuple_T3III(18, 332, 297), new CifTuple_T3III(4, 333, 336), new CifTuple_T3III(33, 334, 335), new CifTuple_T3III(34, 301, 304), new CifTuple_T3III(16, 304, 311), new CifTuple_T3III(5, 298, 337), new CifTuple_T3III(34, 338, 323), new CifTuple_T3III(16, 301, 326), new CifTuple_T3III(43, 328, 327), new CifTuple_T3III(20, 327, 341), new CifTuple_T3III(18, 328, 342), new CifTuple_T3III(4, 329, 343), new CifTuple_T3III(34, 326, 323), new CifTuple_T3III(20, 345, 348), new CifTuple_T3III(18, 346, 347), new CifTuple_T3III(4, 337, 343), new CifTuple_T3III(4, 324, 343), new CifTuple_T3III(18, 347, 342), new CifTuple_T3III(39, 350, 354), new CifTuple_T3III(20, 351, 353), new CifTuple_T3III(43, 352, 327), new CifTuple_T3III(37, 328, 341), new CifTuple_T3III(43, 342, 341), new CifTuple_T3III(20, 348, 355), new CifTuple_T3III(18, 342, 343), new CifTuple_T3III(22, 357, 410), new CifTuple_T3III(39, 358, 407), new CifTuple_T3III(38, 359, 403), new CifTuple_T3III(20, 360, 402), new CifTuple_T3III(43, 361, 398), new CifTuple_T3III(37, 362, 394), new CifTuple_T3III(4, 363, 382), new CifTuple_T3III(33, 364, 379), new CifTuple_T3III(34, 365, 368), new CifTuple_T3III(42, 366, 368), new CifTuple_T3III(14, 367, 376), new CifTuple_T3III(35, 368, 376), new CifTuple_T3III(12, -(2), 369), new CifTuple_T3III(13, -(2), 370), new CifTuple_T3III(0, 371, 375), new CifTuple_T3III(26, 372, -(1)), new CifTuple_T3III(27, 373, -(1)), new CifTuple_T3III(40, 374, -(1)), new CifTuple_T3III(25, -(1), -(2)), new CifTuple_T3III(1, -(2), -(1)), new CifTuple_T3III(10, 368, 377), new CifTuple_T3III(12, -(2), 378), new CifTuple_T3III(13, -(2), -(1)), new CifTuple_T3III(16, 368, 380), new CifTuple_T3III(14, 368, 381), new CifTuple_T3III(2, 368, 376), new CifTuple_T3III(5, 383, 391), new CifTuple_T3III(33, 384, 389), new CifTuple_T3III(34, 385, 380), new CifTuple_T3III(16, 365, 386), new CifTuple_T3III(42, 387, 380), new CifTuple_T3III(14, 388, 376), new CifTuple_T3III(35, 381, 376), new CifTuple_T3III(16, 380, 390), new CifTuple_T3III(14, 381, 376), new CifTuple_T3III(34, 392, 390), new CifTuple_T3III(16, 365, 393), new CifTuple_T3III(42, 376, 390), new CifTuple_T3III(18, 362, 395), new CifTuple_T3III(4, 383, 396), new CifTuple_T3III(34, 397, 390), new CifTuple_T3III(16, 386, 393), new CifTuple_T3III(18, 399, 362), new CifTuple_T3III(4, 400, 401), new CifTuple_T3III(33, 364, 368), new CifTuple_T3III(5, 363, 391), new CifTuple_T3III(43, 395, 394), new CifTuple_T3III(20, 394, 404), new CifTuple_T3III(18, 395, 405), new CifTuple_T3III(4, 396, 406), new CifTuple_T3III(34, 393, 390), new CifTuple_T3III(20, 408, 409), new CifTuple_T3III(4, 391, 406), new CifTuple_T3III(18, 408, 405), new CifTuple_T3III(39, 411, 415), new CifTuple_T3III(20, 412, 414), new CifTuple_T3III(43, 413, 394), new CifTuple_T3III(37, 395, 404), new CifTuple_T3III(43, 405, 404), new CifTuple_T3III(20, 409, 416), new CifTuple_T3III(18, 405, 406), new CifTuple_T3III(2, -(2), 418), new CifTuple_T3III(12, -(1), -(2)), new CifTuple_T3III(22, 420, 428), new CifTuple_T3III(38, 421, 427), new CifTuple_T3III(20, 422, 426), new CifTuple_T3III(43, 423, 424), new CifTuple_T3III(37, 424, 425), new CifTuple_T3III(4, -(1), -(2)), new CifTuple_T3III(18, 424, -(1)), new CifTuple_T3III(43, -(1), 425), new CifTuple_T3III(20, 425, -(1)), new CifTuple_T3III(20, 426, -(1)), new CifTuple_T3III(14, 430, -(2)), new CifTuple_T3III(2, -(2), -(1)), new CifTuple_T3III(22, 432, 446), new CifTuple_T3III(39, 433, -(2)), new CifTuple_T3III(38, 434, 444), new CifTuple_T3III(20, 435, 443), new CifTuple_T3III(43, 436, 437), new CifTuple_T3III(37, 437, 441), new CifTuple_T3III(4, 438, 440), new CifTuple_T3III(14, -(2), 439), new CifTuple_T3III(15, -(2), -(1)), new CifTuple_T3III(5, 438, -(2)), new CifTuple_T3III(18, 437, 442), new CifTuple_T3III(4, 438, -(2)), new CifTuple_T3III(43, 442, 441), new CifTuple_T3III(20, 441, 445), new CifTuple_T3III(18, 442, -(2)), new CifTuple_T3III(39, 447, -(2)), new CifTuple_T3III(20, 448, 450), new CifTuple_T3III(43, 449, 441), new CifTuple_T3III(37, 442, 445), new CifTuple_T3III(43, -(2), 445), new CifTuple_T3III(22, 452, 487), new CifTuple_T3III(39, 453, 481), new CifTuple_T3III(38, 454, 485), new CifTuple_T3III(20, 455, 484), new CifTuple_T3III(43, 456, 457), new CifTuple_T3III(37, 457, 479), new CifTuple_T3III(16, -(2), 458), new CifTuple_T3III(17, -(2), 459), new CifTuple_T3III(2, 460, 471), new CifTuple_T3III(30, 461, 470), new CifTuple_T3III(29, 462, -(2)), new CifTuple_T3III(41, 463, 466), new CifTuple_T3III(10, 464, -(1)), new CifTuple_T3III(12, -(1), 465), new CifTuple_T3III(31, 370, -(1)), new CifTuple_T3III(10, 467, 469), new CifTuple_T3III(12, -(1), 468), new CifTuple_T3III(0, -(1), 371), new CifTuple_T3III(12, -(1), 370), new CifTuple_T3III(10, 468, 370), new CifTuple_T3III(3, -(2), 472), new CifTuple_T3III(30, 473, -(1)), new CifTuple_T3III(41, 474, 476), new CifTuple_T3III(10, 475, -(1)), new CifTuple_T3III(12, 465, -(1)), new CifTuple_T3III(10, 477, 478), new CifTuple_T3III(12, 468, -(1)), new CifTuple_T3III(12, 370, -(1)), new CifTuple_T3III(18, 457, 480), new CifTuple_T3III(4, 457, 481), new CifTuple_T3III(16, -(2), 482), new CifTuple_T3III(17, -(2), 483), new CifTuple_T3III(14, 459, -(1)), new CifTuple_T3III(43, 480, 479), new CifTuple_T3III(20, 479, 486), new CifTuple_T3III(18, 480, 481), new CifTuple_T3III(39, 488, 481), new CifTuple_T3III(20, 489, 491), new CifTuple_T3III(43, 490, 479), new CifTuple_T3III(37, 480, 486), new CifTuple_T3III(43, 481, 486), new CifTuple_T3III(4, -(2), 493), new CifTuple_T3III(16, -(1), -(2)), new CifTuple_T3III(18, 495, -(2)), new CifTuple_T3III(4, -(2), -(1)), new CifTuple_T3III(20, 497, -(2)), new CifTuple_T3III(18, -(2), 498), new CifTuple_T3III(19, -(2), -(1)), new CifTuple_T3III(22, 500, -(2)), new CifTuple_T3III(20, -(2), 501), new CifTuple_T3III(21, -(2), -(1)), new CifTuple_T3III(22, -(2), 503), new CifTuple_T3III(23, -(2), 504), new CifTuple_T3III(20, 505, 541), new CifTuple_T3III(4, 506, 530), new CifTuple_T3III(33, 507, -(2)), new CifTuple_T3III(34, 508, 520), new CifTuple_T3III(16, -(1), 509), new CifTuple_T3III(42, 510, 520), new CifTuple_T3III(14, 511, 519), new CifTuple_T3III(35, 459, 512), new CifTuple_T3III(2, 513, -(1)), new CifTuple_T3III(30, 514, -(1)), new CifTuple_T3III(41, 515, 518), new CifTuple_T3III(10, 516, -(1)), new CifTuple_T3III(12, 517, -(1)), new CifTuple_T3III(31, 468, -(1)), new CifTuple_T3III(10, -(1), 477), new CifTuple_T3III(2, 472, -(1)), new CifTuple_T3III(14, 521, 459), new CifTuple_T3III(2, 522, 529), new CifTuple_T3III(30, 523, 528), new CifTuple_T3III(29, 524, 466), new CifTuple_T3III(41, 525, 527), new CifTuple_T3III(10, 526, -(1)), new CifTuple_T3III(12, -(1), 517), new CifTuple_T3III(10, -(1), 467), new CifTuple_T3III(10, -(1), 468), new CifTuple_T3III(3, 460, 513), new CifTuple_T3III(5, -(2), 531), new CifTuple_T3III(34, 532, 536), new CifTuple_T3III(16, 509, 533), new CifTuple_T3III(42, 534, 536), new CifTuple_T3III(14, 535, -(1)), new CifTuple_T3III(35, 519, -(1)), new CifTuple_T3III(14, 537, 519), new CifTuple_T3III(2, 538, 540), new CifTuple_T3III(30, 539, -(1)), new CifTuple_T3III(29, 514, 476), new CifTuple_T3III(3, 472, -(1)), new CifTuple_T3III(18, 505, -(1))];
        }

        // Initialize SVG input.
        this.svgInQueue = [];
        this.svgInId = null;
        this.svgInEvent = -1;

        // CIF model state variables.
        spec.Buffer1_ = spec.specEnum._l1;
        spec.Buffer2_ = spec.specEnum._l1;
        spec.Buffer3_ = spec.specEnum._l1;
        spec.Chamber_C11_ = spec.specEnum._l1;
        spec.Chamber_C12_ = spec.specEnum._l1;
        spec.Chamber_C21_ = spec.specEnum._l1;
        spec.Chamber_C22_ = spec.specEnum._l1;
        spec.Chamber_C31_ = spec.specEnum._l1;
        spec.Chamber_C32_ = spec.specEnum._l1;
        spec.Chamber_C41_ = spec.specEnum._l1;
        spec.Chamber_C42_ = spec.specEnum._l1;
        spec.Chamber_C43_ = spec.specEnum._l1;
        spec.H11_ = spec.specEnum._l1;
        spec.H12_ = spec.specEnum._l1;
        spec.H13_ = spec.specEnum._l1;
        spec.H14_ = spec.specEnum._l1;
        spec.H21_ = spec.specEnum._l1;
        spec.H22_ = spec.specEnum._l1;
        spec.H23_ = spec.specEnum._l1;
        spec.H24_ = spec.specEnum._l1;
        spec.H31_ = spec.specEnum._l1;
        spec.H32_ = spec.specEnum._l1;
        spec.H33_ = spec.specEnum._l1;
        spec.H34_ = spec.specEnum._l1;
        spec.H41_ = spec.specEnum._l1;
        spec.H42_ = spec.specEnum._l1;
        spec.H43_ = spec.specEnum._l1;
        spec.H44_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l2;
        spec.R2_ = spec.specEnum._l2;
        spec.R3_ = spec.specEnum._l2;
        spec.R4_ = spec.specEnum._l2;
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
        state += specUtils.fmt(', Buffer1=%s', specUtils.valueToStr(spec.Buffer1_));
        state += specUtils.fmt(', Buffer2=%s', specUtils.valueToStr(spec.Buffer2_));
        state += specUtils.fmt(', Buffer3=%s', specUtils.valueToStr(spec.Buffer3_));
        state += specUtils.fmt(', Chamber_C11=%s', specUtils.valueToStr(spec.Chamber_C11_));
        state += specUtils.fmt(', Chamber_C12=%s', specUtils.valueToStr(spec.Chamber_C12_));
        state += specUtils.fmt(', Chamber_C21=%s', specUtils.valueToStr(spec.Chamber_C21_));
        state += specUtils.fmt(', Chamber_C22=%s', specUtils.valueToStr(spec.Chamber_C22_));
        state += specUtils.fmt(', Chamber_C31=%s', specUtils.valueToStr(spec.Chamber_C31_));
        state += specUtils.fmt(', Chamber_C32=%s', specUtils.valueToStr(spec.Chamber_C32_));
        state += specUtils.fmt(', Chamber_C41=%s', specUtils.valueToStr(spec.Chamber_C41_));
        state += specUtils.fmt(', Chamber_C42=%s', specUtils.valueToStr(spec.Chamber_C42_));
        state += specUtils.fmt(', Chamber_C43=%s', specUtils.valueToStr(spec.Chamber_C43_));
        state += specUtils.fmt(', H11=%s', specUtils.valueToStr(spec.H11_));
        state += specUtils.fmt(', H12=%s', specUtils.valueToStr(spec.H12_));
        state += specUtils.fmt(', H13=%s', specUtils.valueToStr(spec.H13_));
        state += specUtils.fmt(', H14=%s', specUtils.valueToStr(spec.H14_));
        state += specUtils.fmt(', H21=%s', specUtils.valueToStr(spec.H21_));
        state += specUtils.fmt(', H22=%s', specUtils.valueToStr(spec.H22_));
        state += specUtils.fmt(', H23=%s', specUtils.valueToStr(spec.H23_));
        state += specUtils.fmt(', H24=%s', specUtils.valueToStr(spec.H24_));
        state += specUtils.fmt(', H31=%s', specUtils.valueToStr(spec.H31_));
        state += specUtils.fmt(', H32=%s', specUtils.valueToStr(spec.H32_));
        state += specUtils.fmt(', H33=%s', specUtils.valueToStr(spec.H33_));
        state += specUtils.fmt(', H34=%s', specUtils.valueToStr(spec.H34_));
        state += specUtils.fmt(', H41=%s', specUtils.valueToStr(spec.H41_));
        state += specUtils.fmt(', H42=%s', specUtils.valueToStr(spec.H42_));
        state += specUtils.fmt(', H43=%s', specUtils.valueToStr(spec.H43_));
        state += specUtils.fmt(', H44=%s', specUtils.valueToStr(spec.H44_));
        state += specUtils.fmt(', R1=%s', specUtils.valueToStr(spec.R1_));
        state += specUtils.fmt(', R2=%s', specUtils.valueToStr(spec.R2_));
        state += specUtils.fmt(', R3=%s', specUtils.valueToStr(spec.R3_));
        state += specUtils.fmt(', R4=%s', specUtils.valueToStr(spec.R4_));
        return state;
    }


    /**
     * Evaluates algebraic variable "bdd_value0".
     *
     * @return The evaluation result.
     */
    bdd_value0_() {
        return ((spec.Buffer1_) == (spec.specEnum._l2)) || ((spec.Buffer1_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value1".
     *
     * @return The evaluation result.
     */
    bdd_value1_() {
        return ((spec.Buffer1_) == (spec.specEnum._l3)) || ((spec.Buffer1_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value2".
     *
     * @return The evaluation result.
     */
    bdd_value2_() {
        return ((spec.Buffer2_) == (spec.specEnum._l2)) || ((spec.Buffer2_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value3".
     *
     * @return The evaluation result.
     */
    bdd_value3_() {
        return ((spec.Buffer2_) == (spec.specEnum._l3)) || ((spec.Buffer2_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value4".
     *
     * @return The evaluation result.
     */
    bdd_value4_() {
        return ((spec.Buffer3_) == (spec.specEnum._l2)) || ((spec.Buffer3_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value5".
     *
     * @return The evaluation result.
     */
    bdd_value5_() {
        return ((spec.Buffer3_) == (spec.specEnum._l3)) || ((spec.Buffer3_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value6".
     *
     * @return The evaluation result.
     */
    bdd_value6_() {
        return ((spec.Chamber_C11_) == (spec.specEnum._l2)) || ((spec.Chamber_C11_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value7".
     *
     * @return The evaluation result.
     */
    bdd_value7_() {
        return ((spec.Chamber_C11_) == (spec.specEnum._l3)) || ((spec.Chamber_C11_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value8".
     *
     * @return The evaluation result.
     */
    bdd_value8_() {
        return ((spec.Chamber_C12_) == (spec.specEnum._l2)) || ((spec.Chamber_C12_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value9".
     *
     * @return The evaluation result.
     */
    bdd_value9_() {
        return ((spec.Chamber_C12_) == (spec.specEnum._l3)) || ((spec.Chamber_C12_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value10".
     *
     * @return The evaluation result.
     */
    bdd_value10_() {
        return ((spec.Chamber_C21_) == (spec.specEnum._l2)) || ((spec.Chamber_C21_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value11".
     *
     * @return The evaluation result.
     */
    bdd_value11_() {
        return ((spec.Chamber_C21_) == (spec.specEnum._l3)) || ((spec.Chamber_C21_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value12".
     *
     * @return The evaluation result.
     */
    bdd_value12_() {
        return ((spec.Chamber_C22_) == (spec.specEnum._l2)) || ((spec.Chamber_C22_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value13".
     *
     * @return The evaluation result.
     */
    bdd_value13_() {
        return ((spec.Chamber_C22_) == (spec.specEnum._l3)) || ((spec.Chamber_C22_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value14".
     *
     * @return The evaluation result.
     */
    bdd_value14_() {
        return ((spec.Chamber_C31_) == (spec.specEnum._l2)) || ((spec.Chamber_C31_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value15".
     *
     * @return The evaluation result.
     */
    bdd_value15_() {
        return ((spec.Chamber_C31_) == (spec.specEnum._l3)) || ((spec.Chamber_C31_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value16".
     *
     * @return The evaluation result.
     */
    bdd_value16_() {
        return ((spec.Chamber_C32_) == (spec.specEnum._l2)) || ((spec.Chamber_C32_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value17".
     *
     * @return The evaluation result.
     */
    bdd_value17_() {
        return ((spec.Chamber_C32_) == (spec.specEnum._l3)) || ((spec.Chamber_C32_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value18".
     *
     * @return The evaluation result.
     */
    bdd_value18_() {
        return ((spec.Chamber_C41_) == (spec.specEnum._l2)) || ((spec.Chamber_C41_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value19".
     *
     * @return The evaluation result.
     */
    bdd_value19_() {
        return ((spec.Chamber_C41_) == (spec.specEnum._l3)) || ((spec.Chamber_C41_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value20".
     *
     * @return The evaluation result.
     */
    bdd_value20_() {
        return ((spec.Chamber_C42_) == (spec.specEnum._l2)) || ((spec.Chamber_C42_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value21".
     *
     * @return The evaluation result.
     */
    bdd_value21_() {
        return ((spec.Chamber_C42_) == (spec.specEnum._l3)) || ((spec.Chamber_C42_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value22".
     *
     * @return The evaluation result.
     */
    bdd_value22_() {
        return ((spec.Chamber_C43_) == (spec.specEnum._l2)) || ((spec.Chamber_C43_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value23".
     *
     * @return The evaluation result.
     */
    bdd_value23_() {
        return ((spec.Chamber_C43_) == (spec.specEnum._l3)) || ((spec.Chamber_C43_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value24".
     *
     * @return The evaluation result.
     */
    bdd_value24_() {
        return (spec.H11_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value25".
     *
     * @return The evaluation result.
     */
    bdd_value25_() {
        return (spec.H12_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value26".
     *
     * @return The evaluation result.
     */
    bdd_value26_() {
        return (spec.H13_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value27".
     *
     * @return The evaluation result.
     */
    bdd_value27_() {
        return (spec.H14_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value28".
     *
     * @return The evaluation result.
     */
    bdd_value28_() {
        return (spec.H21_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value29".
     *
     * @return The evaluation result.
     */
    bdd_value29_() {
        return (spec.H22_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value30".
     *
     * @return The evaluation result.
     */
    bdd_value30_() {
        return (spec.H23_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value31".
     *
     * @return The evaluation result.
     */
    bdd_value31_() {
        return (spec.H24_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value32".
     *
     * @return The evaluation result.
     */
    bdd_value32_() {
        return (spec.H31_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value33".
     *
     * @return The evaluation result.
     */
    bdd_value33_() {
        return (spec.H32_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value34".
     *
     * @return The evaluation result.
     */
    bdd_value34_() {
        return (spec.H33_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value35".
     *
     * @return The evaluation result.
     */
    bdd_value35_() {
        return (spec.H34_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value36".
     *
     * @return The evaluation result.
     */
    bdd_value36_() {
        return (spec.H41_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value37".
     *
     * @return The evaluation result.
     */
    bdd_value37_() {
        return (spec.H42_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value38".
     *
     * @return The evaluation result.
     */
    bdd_value38_() {
        return (spec.H43_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value39".
     *
     * @return The evaluation result.
     */
    bdd_value39_() {
        return (spec.H44_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value40".
     *
     * @return The evaluation result.
     */
    bdd_value40_() {
        return (spec.R1_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value41".
     *
     * @return The evaluation result.
     */
    bdd_value41_() {
        return (spec.R2_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value42".
     *
     * @return The evaluation result.
     */
    bdd_value42_() {
        return (spec.R3_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value43".
     *
     * @return The evaluation result.
     */
    bdd_value43_() {
        return (spec.R4_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_values".
     *
     * @return The evaluation result.
     */
    bdd_values_() {
        return [spec.bdd_value0_(), spec.bdd_value1_(), spec.bdd_value2_(), spec.bdd_value3_(), spec.bdd_value4_(), spec.bdd_value5_(), spec.bdd_value6_(), spec.bdd_value7_(), spec.bdd_value8_(), spec.bdd_value9_(), spec.bdd_value10_(), spec.bdd_value11_(), spec.bdd_value12_(), spec.bdd_value13_(), spec.bdd_value14_(), spec.bdd_value15_(), spec.bdd_value16_(), spec.bdd_value17_(), spec.bdd_value18_(), spec.bdd_value19_(), spec.bdd_value20_(), spec.bdd_value21_(), spec.bdd_value22_(), spec.bdd_value23_(), spec.bdd_value24_(), spec.bdd_value25_(), spec.bdd_value26_(), spec.bdd_value27_(), spec.bdd_value28_(), spec.bdd_value29_(), spec.bdd_value30_(), spec.bdd_value31_(), spec.bdd_value32_(), spec.bdd_value33_(), spec.bdd_value34_(), spec.bdd_value35_(), spec.bdd_value36_(), spec.bdd_value37_(), spec.bdd_value38_(), spec.bdd_value39_(), spec.bdd_value40_(), spec.bdd_value41_(), spec.bdd_value42_(), spec.bdd_value43_()];
    }


    /**
     * Function "bdd_eval".
     *
     * @param bdd_eval_idx_ Function parameter "bdd_eval.idx".
     * @param bdd_eval_values_ Function parameter "bdd_eval.values".
     * @return The return value of the function.
     */
    bdd_eval_(bdd_eval_idx_, bdd_eval_values_) {
        // Variable "bdd_eval.node".
        var bdd_eval_node_ = new CifTuple_T3III(0, 0, 0);

        // Variable "bdd_eval.val".
        var bdd_eval_val_ = false;

        // Execute statements in the function body.
        while ((bdd_eval_idx_) >= (0)) {
            bdd_eval_node_ = specUtils.projectList(spec.bdd_nodes_, bdd_eval_idx_);

            bdd_eval_val_ = specUtils.projectList(bdd_eval_values_, (bdd_eval_node_)._field0);

            bdd_eval_idx_ = (bdd_eval_val_) ? (bdd_eval_node_)._field2 : ((bdd_eval_node_)._field1);
        }

        return specUtils.equalObjs(bdd_eval_idx_, -(1));
        throw new Error('No return statement at end of function.');
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
