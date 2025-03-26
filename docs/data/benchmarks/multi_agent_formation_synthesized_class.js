/** Tuples. */


            /** Tuple class for CIF tuple type representative "tuple(int[0..24]; int[-2..1,867]; int[-2..1,870])". */
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
        var guard = (((spec.dep_1_) == (spec.specEnum._l0)) && (((spec.dep_2_) == (spec.specEnum._l1)) && ((spec.invariance_) == (spec.specEnum._l0)))) && ((((spec.mut_ex_l1_) == (spec.specEnum._l0)) && ((spec.R1_) == (spec.specEnum._l0))) && (spec.bdd_eval_(0, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l1_) == (spec.specEnum._l1)) && ((spec.mut_ex_l2_) == (spec.specEnum._l0)))) && ((spec.R1_) == (spec.specEnum._l1));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l2_) == (spec.specEnum._l1)) && ((spec.mut_ex_l3_) == (spec.specEnum._l0)))) && (((spec.R1_) == (spec.specEnum._l2)) && (spec.bdd_eval_(145, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l3_) == (spec.specEnum._l1)) && ((spec.mut_ex_l4_) == (spec.specEnum._l0)))) && (((spec.R1_) == (spec.specEnum._l3)) && (spec.bdd_eval_(245, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l4_) == (spec.specEnum._l1)) && ((spec.mut_ex_l5_) == (spec.specEnum._l0)))) && (((spec.R1_) == (spec.specEnum._l4)) && (spec.bdd_eval_(330, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l5_) == (spec.specEnum._l1)) && ((spec.mut_ex_l6_) == (spec.specEnum._l0)))) && ((spec.R1_) == (spec.specEnum._l5));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l6_) == (spec.specEnum._l1)) && ((spec.mut_ex_l7_) == (spec.specEnum._l0)))) && (((spec.R1_) == (spec.specEnum._l6)) && (spec.bdd_eval_(403, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l7_) == (spec.specEnum._l1)) && ((spec.mut_ex_l8_) == (spec.specEnum._l0)))) && ((spec.R1_) == (spec.specEnum._l7));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l8_) == (spec.specEnum._l1)) && ((spec.mut_ex_l9_) == (spec.specEnum._l0)))) && ((spec.R1_) == (spec.specEnum._l8));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l1_) == (spec.specEnum._l0)) && ((spec.mut_ex_l9_) == (spec.specEnum._l1)))) && (((spec.R1_) == (spec.specEnum._l9)) && (spec.bdd_eval_(485, spec.bdd_values_())));

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
        var guard = (((spec.dep_2_) == (spec.specEnum._l0)) && (((spec.dep_3_) == (spec.specEnum._l1)) && ((spec.invariance_) == (spec.specEnum._l0)))) && ((((spec.mut_ex_l1_) == (spec.specEnum._l0)) && ((spec.R2_) == (spec.specEnum._l0))) && (spec.bdd_eval_(638, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l1_) == (spec.specEnum._l1)) && ((spec.mut_ex_l2_) == (spec.specEnum._l0)))) && ((spec.R2_) == (spec.specEnum._l1));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l2_) == (spec.specEnum._l1)) && ((spec.mut_ex_l3_) == (spec.specEnum._l0)))) && (((spec.R2_) == (spec.specEnum._l2)) && (spec.bdd_eval_(767, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l3_) == (spec.specEnum._l1)) && ((spec.mut_ex_l4_) == (spec.specEnum._l0)))) && (((spec.R2_) == (spec.specEnum._l3)) && (spec.bdd_eval_(827, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l4_) == (spec.specEnum._l1)) && ((spec.mut_ex_l5_) == (spec.specEnum._l0)))) && (((spec.R2_) == (spec.specEnum._l4)) && (spec.bdd_eval_(968, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l5_) == (spec.specEnum._l1)) && ((spec.mut_ex_l6_) == (spec.specEnum._l0)))) && (((spec.R2_) == (spec.specEnum._l5)) && (spec.bdd_eval_(1003, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l6_) == (spec.specEnum._l1)) && ((spec.mut_ex_l7_) == (spec.specEnum._l0)))) && (((spec.R2_) == (spec.specEnum._l6)) && (spec.bdd_eval_(1068, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l7_) == (spec.specEnum._l1)) && ((spec.mut_ex_l8_) == (spec.specEnum._l0)))) && (((spec.R2_) == (spec.specEnum._l7)) && (spec.bdd_eval_(1167, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l8_) == (spec.specEnum._l1)) && ((spec.mut_ex_l9_) == (spec.specEnum._l0)))) && ((spec.R2_) == (spec.specEnum._l8));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l1_) == (spec.specEnum._l0)) && ((spec.mut_ex_l9_) == (spec.specEnum._l1)))) && (((spec.R2_) == (spec.specEnum._l9)) && (spec.bdd_eval_(1210, spec.bdd_values_())));

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
        var guard = (((spec.dep_3_) == (spec.specEnum._l0)) && (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l1_) == (spec.specEnum._l0)))) && (((spec.R3_) == (spec.specEnum._l0)) && (spec.bdd_eval_(1298, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l1_) == (spec.specEnum._l1)) && ((spec.mut_ex_l2_) == (spec.specEnum._l0)))) && ((spec.R3_) == (spec.specEnum._l1));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l2_) == (spec.specEnum._l1)) && ((spec.mut_ex_l3_) == (spec.specEnum._l0)))) && ((spec.R3_) == (spec.specEnum._l2));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l3_) == (spec.specEnum._l1)) && ((spec.mut_ex_l4_) == (spec.specEnum._l0)))) && (((spec.R3_) == (spec.specEnum._l3)) && (spec.bdd_eval_(1390, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l4_) == (spec.specEnum._l1)) && ((spec.mut_ex_l5_) == (spec.specEnum._l0)))) && (((spec.R3_) == (spec.specEnum._l4)) && (spec.bdd_eval_(1472, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l5_) == (spec.specEnum._l1)) && ((spec.mut_ex_l6_) == (spec.specEnum._l0)))) && (((spec.R3_) == (spec.specEnum._l5)) && (spec.bdd_eval_(1580, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l6_) == (spec.specEnum._l1)) && ((spec.mut_ex_l7_) == (spec.specEnum._l0)))) && (((spec.R3_) == (spec.specEnum._l6)) && (spec.bdd_eval_(1594, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l7_) == (spec.specEnum._l1)) && ((spec.mut_ex_l8_) == (spec.specEnum._l0)))) && (((spec.R3_) == (spec.specEnum._l7)) && (spec.bdd_eval_(1713, spec.bdd_values_())));

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
        var guard = (((spec.invariance_) == (spec.specEnum._l0)) && (((spec.mut_ex_l8_) == (spec.specEnum._l1)) && ((spec.mut_ex_l9_) == (spec.specEnum._l0)))) && (((spec.R3_) == (spec.specEnum._l8)) && (spec.bdd_eval_(1726, spec.bdd_values_())));

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
        var guard = (((spec.dep_1_) == (spec.specEnum._l1)) && (((spec.invariance_) == (spec.specEnum._l0)) && ((spec.mut_ex_l1_) == (spec.specEnum._l0)))) && ((((spec.mut_ex_l9_) == (spec.specEnum._l1)) && ((spec.R3_) == (spec.specEnum._l9))) && (spec.bdd_eval_(1793, spec.bdd_values_())));

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
            spec.bdd_nodes_ = [new CifTuple_T3III(10, 1, 109), new CifTuple_T3III(11, 2, 76), new CifTuple_T3III(9, 3, 54), new CifTuple_T3III(12, 4, 37), new CifTuple_T3III(8, 5, 23), new CifTuple_T3III(17, 6, 17), new CifTuple_T3III(18, 7, -(1)), new CifTuple_T3III(19, -(1), 8), new CifTuple_T3III(21, 9, 13), new CifTuple_T3III(22, -(1), 10), new CifTuple_T3III(23, 11, -(1)), new CifTuple_T3III(7, -(1), 12), new CifTuple_T3III(5, -(1), -(2)), new CifTuple_T3III(22, -(1), 14), new CifTuple_T3III(23, 15, -(1)), new CifTuple_T3III(7, -(1), 16), new CifTuple_T3III(6, -(1), -(2)), new CifTuple_T3III(18, -(1), 18), new CifTuple_T3III(19, 19, -(1)), new CifTuple_T3III(21, 20, -(1)), new CifTuple_T3III(22, -(1), 21), new CifTuple_T3III(23, 22, -(1)), new CifTuple_T3III(6, -(1), 12), new CifTuple_T3III(17, 24, 29), new CifTuple_T3III(18, -(1), 25), new CifTuple_T3III(19, 26, -(1)), new CifTuple_T3III(21, 27, -(1)), new CifTuple_T3III(22, 28, -(1)), new CifTuple_T3III(23, -(2), -(1)), new CifTuple_T3III(18, 30, 25), new CifTuple_T3III(19, -(1), 31), new CifTuple_T3III(21, 32, 36), new CifTuple_T3III(22, 33, 35), new CifTuple_T3III(23, -(1), 34), new CifTuple_T3III(7, -(1), -(2)), new CifTuple_T3III(23, 12, -(1)), new CifTuple_T3III(22, -(1), 16), new CifTuple_T3III(8, 38, 49), new CifTuple_T3III(17, 39, 45), new CifTuple_T3III(18, 40, 41), new CifTuple_T3III(19, -(1), 41), new CifTuple_T3III(21, 42, -(1)), new CifTuple_T3III(22, 43, -(1)), new CifTuple_T3III(23, 44, -(1)), new CifTuple_T3III(24, -(2), -(1)), new CifTuple_T3III(18, 46, 41), new CifTuple_T3III(19, 47, 26), new CifTuple_T3III(21, 48, 36), new CifTuple_T3III(22, 33, 12), new CifTuple_T3III(17, 24, 50), new CifTuple_T3III(18, 51, 25), new CifTuple_T3III(19, 52, -(1)), new CifTuple_T3III(21, 53, -(2)), new CifTuple_T3III(22, -(2), 12), new CifTuple_T3III(12, 55, 67), new CifTuple_T3III(8, 56, 59), new CifTuple_T3III(17, 57, 24), new CifTuple_T3III(18, -(1), 58), new CifTuple_T3III(19, 26, 31), new CifTuple_T3III(17, 60, 66), new CifTuple_T3III(18, -(1), 61), new CifTuple_T3III(19, 26, 62), new CifTuple_T3III(21, 63, 64), new CifTuple_T3III(22, -(2), 35), new CifTuple_T3III(22, 65, -(2)), new CifTuple_T3III(23, -(1), -(2)), new CifTuple_T3III(18, -(1), 26), new CifTuple_T3III(8, 68, 74), new CifTuple_T3III(17, 24, 69), new CifTuple_T3III(18, 70, 25), new CifTuple_T3III(19, 71, -(1)), new CifTuple_T3III(21, 72, -(2)), new CifTuple_T3III(22, -(2), 73), new CifTuple_T3III(23, 12, -(2)), new CifTuple_T3III(17, 24, 75), new CifTuple_T3III(18, 51, 26), new CifTuple_T3III(9, 77, 98), new CifTuple_T3III(12, 78, 89), new CifTuple_T3III(8, 79, 85), new CifTuple_T3III(17, 80, 84), new CifTuple_T3III(18, 81, 83), new CifTuple_T3III(19, 82, 41), new CifTuple_T3III(20, -(1), 47), new CifTuple_T3III(19, 41, -(1)), new CifTuple_T3III(18, 40, 83), new CifTuple_T3III(17, 86, 66), new CifTuple_T3III(18, 87, 25), new CifTuple_T3III(19, 88, -(1)), new CifTuple_T3III(20, -(1), 52), new CifTuple_T3III(8, 90, 74), new CifTuple_T3III(17, 84, 91), new CifTuple_T3III(18, 92, 83), new CifTuple_T3III(19, 93, 26), new CifTuple_T3III(21, 94, 97), new CifTuple_T3III(22, 95, 73), new CifTuple_T3III(23, 96, 34), new CifTuple_T3III(24, -(1), -(2)), new CifTuple_T3III(22, 65, 16), new CifTuple_T3III(12, 99, 106), new CifTuple_T3III(8, 100, 104), new CifTuple_T3III(17, 101, 66), new CifTuple_T3III(18, 102, 25), new CifTuple_T3III(19, 103, -(1)), new CifTuple_T3III(20, -(1), 71), new CifTuple_T3III(17, 105, 66), new CifTuple_T3III(18, 88, 25), new CifTuple_T3III(8, 107, 74), new CifTuple_T3III(17, 24, 108), new CifTuple_T3III(18, 70, 26), new CifTuple_T3III(11, 110, 134), new CifTuple_T3III(9, 111, 129), new CifTuple_T3III(12, 112, 121), new CifTuple_T3III(8, 113, 118), new CifTuple_T3III(17, 114, 116), new CifTuple_T3III(18, 115, 25), new CifTuple_T3III(19, -(1), 26), new CifTuple_T3III(18, 115, 117), new CifTuple_T3III(19, 26, 47), new CifTuple_T3III(17, 24, 119), new CifTuple_T3III(18, -(1), 120), new CifTuple_T3III(19, 26, 52), new CifTuple_T3III(8, 122, 74), new CifTuple_T3III(17, 114, 123), new CifTuple_T3III(18, 124, 25), new CifTuple_T3III(19, 125, 26), new CifTuple_T3III(21, 126, 127), new CifTuple_T3III(22, 33, 73), new CifTuple_T3III(22, 65, 128), new CifTuple_T3III(23, 16, -(2)), new CifTuple_T3III(12, 130, 106), new CifTuple_T3III(8, 131, 118), new CifTuple_T3III(17, 24, 132), new CifTuple_T3III(18, -(1), 133), new CifTuple_T3III(19, 26, 71), new CifTuple_T3III(9, 135, 98), new CifTuple_T3III(12, 136, 142), new CifTuple_T3III(8, 137, 85), new CifTuple_T3III(17, 138, 141), new CifTuple_T3III(18, 139, 83), new CifTuple_T3III(19, 140, 41), new CifTuple_T3III(20, -(1), 125), new CifTuple_T3III(18, 115, 83), new CifTuple_T3III(8, 143, 74), new CifTuple_T3III(17, 114, 144), new CifTuple_T3III(18, 92, 25), new CifTuple_T3III(10, 146, 225), new CifTuple_T3III(11, 147, 205), new CifTuple_T3III(9, 148, 189), new CifTuple_T3III(12, 149, 178), new CifTuple_T3III(8, 150, 167), new CifTuple_T3III(17, 151, 160), new CifTuple_T3III(18, -(1), 152), new CifTuple_T3III(19, 153, -(1)), new CifTuple_T3III(21, 154, 159), new CifTuple_T3III(23, -(1), 155), new CifTuple_T3III(7, 156, 157), new CifTuple_T3III(4, -(1), -(2)), new CifTuple_T3III(4, 158, -(2)), new CifTuple_T3III(0, -(2), -(1)), new CifTuple_T3III(22, -(1), 156), new CifTuple_T3III(18, -(1), 161), new CifTuple_T3III(19, 162, -(1)), new CifTuple_T3III(21, 163, -(1)), new CifTuple_T3III(22, 164, 166), new CifTuple_T3III(23, -(1), 165), new CifTuple_T3III(7, 156, -(1)), new CifTuple_T3III(23, 156, -(1)), new CifTuple_T3III(17, 168, 175), new CifTuple_T3III(18, 169, 172), new CifTuple_T3III(19, 170, -(1)), new CifTuple_T3III(20, 171, -(1)), new CifTuple_T3III(21, -(2), -(1)), new CifTuple_T3III(19, 173, -(1)), new CifTuple_T3III(21, -(2), 174), new CifTuple_T3III(22, -(1), -(2)), new CifTuple_T3III(18, 176, 171), new CifTuple_T3III(19, 177, -(1)), new CifTuple_T3III(20, -(2), -(1)), new CifTuple_T3III(8, 179, 188), new CifTuple_T3III(17, 180, 184), new CifTuple_T3III(18, 181, 172), new CifTuple_T3III(19, 182, -(1)), new CifTuple_T3III(20, 183, -(1)), new CifTuple_T3III(21, 28, -(1)), new CifTuple_T3III(18, 185, 187), new CifTuple_T3III(19, 186, -(1)), new CifTuple_T3III(20, 28, -(1)), new CifTuple_T3III(19, 171, -(1)), new CifTuple_T3III(19, -(2), -(1)), new CifTuple_T3III(12, 190, 202), new CifTuple_T3III(8, 191, 198), new CifTuple_T3III(17, 192, 196), new CifTuple_T3III(18, 185, 193), new CifTuple_T3III(19, 194, -(1)), new CifTuple_T3III(21, 195, -(2)), new CifTuple_T3III(22, -(2), -(1)), new CifTuple_T3III(18, 176, 197), new CifTuple_T3III(22, -(2), 28), new CifTuple_T3III(17, 199, 201), new CifTuple_T3III(18, -(2), 200), new CifTuple_T3III(19, -(2), 183), new CifTuple_T3III(18, 188, -(2)), new CifTuple_T3III(8, 188, 203), new CifTuple_T3III(17, 204, 201), new CifTuple_T3III(18, -(2), 188), new CifTuple_T3III(9, 206, 224), new CifTuple_T3III(12, 207, 217), new CifTuple_T3III(8, 208, 216), new CifTuple_T3III(17, 209, 214), new CifTuple_T3III(18, 210, 212), new CifTuple_T3III(19, 211, -(1)), new CifTuple_T3III(20, 174, -(1)), new CifTuple_T3III(19, 213, -(1)), new CifTuple_T3III(21, 65, -(2)), new CifTuple_T3III(18, 210, 215), new CifTuple_T3III(19, 64, -(1)), new CifTuple_T3III(17, 188, 201), new CifTuple_T3III(8, 218, 216), new CifTuple_T3III(17, 219, 220), new CifTuple_T3III(18, 210, 188), new CifTuple_T3III(18, 221, 187), new CifTuple_T3III(19, 222, -(1)), new CifTuple_T3III(20, 174, 223), new CifTuple_T3III(21, 174, -(1)), new CifTuple_T3III(8, 216, 203), new CifTuple_T3III(11, 226, 240), new CifTuple_T3III(9, 227, 224), new CifTuple_T3III(12, 228, 236), new CifTuple_T3III(8, 229, 216), new CifTuple_T3III(17, 230, 235), new CifTuple_T3III(18, 231, 233), new CifTuple_T3III(19, 232, -(1)), new CifTuple_T3III(20, 223, -(1)), new CifTuple_T3III(19, 234, -(1)), new CifTuple_T3III(21, -(2), 28), new CifTuple_T3III(18, 210, 187), new CifTuple_T3III(8, 237, 216), new CifTuple_T3III(17, 238, 220), new CifTuple_T3III(18, 239, 188), new CifTuple_T3III(19, 174, -(1)), new CifTuple_T3III(9, 241, 224), new CifTuple_T3III(12, 242, 217), new CifTuple_T3III(8, 243, 216), new CifTuple_T3III(17, 244, 214), new CifTuple_T3III(18, 221, 188), new CifTuple_T3III(10, 246, 305), new CifTuple_T3III(11, 247, 286), new CifTuple_T3III(9, 248, 279), new CifTuple_T3III(12, 249, 267), new CifTuple_T3III(8, 250, 261), new CifTuple_T3III(17, 251, 258), new CifTuple_T3III(18, -(1), 252), new CifTuple_T3III(19, -(1), 253), new CifTuple_T3III(21, -(1), 254), new CifTuple_T3III(22, 255, -(1)), new CifTuple_T3III(23, 256, -(1)), new CifTuple_T3III(24, -(1), 257), new CifTuple_T3III(5, 156, -(2)), new CifTuple_T3III(18, -(1), 259), new CifTuple_T3III(19, 260, -(1)), new CifTuple_T3III(21, -(1), 256), new CifTuple_T3III(17, 262, 264), new CifTuple_T3III(18, -(1), 263), new CifTuple_T3III(19, -(1), 28), new CifTuple_T3III(18, 252, 265), new CifTuple_T3III(19, 266, -(1)), new CifTuple_T3III(5, 157, -(2)), new CifTuple_T3III(8, 268, 274), new CifTuple_T3III(17, 269, 273), new CifTuple_T3III(18, -(1), 270), new CifTuple_T3III(19, -(1), 271), new CifTuple_T3III(21, -(1), 272), new CifTuple_T3III(22, 266, -(1)), new CifTuple_T3III(18, -(1), 265), new CifTuple_T3III(17, 28, 275), new CifTuple_T3III(18, 276, -(1)), new CifTuple_T3III(21, -(1), 277), new CifTuple_T3III(22, 278, -(1)), new CifTuple_T3III(23, 266, -(1)), new CifTuple_T3III(12, 280, 283), new CifTuple_T3III(8, 281, 282), new CifTuple_T3III(17, 251, 273), new CifTuple_T3III(17, -(2), -(1)), new CifTuple_T3III(8, 284, 282), new CifTuple_T3III(17, 285, -(1)), new CifTuple_T3III(18, -(1), 271), new CifTuple_T3III(9, 287, 302), new CifTuple_T3III(12, 288, 299), new CifTuple_T3III(8, 289, 296), new CifTuple_T3III(17, 290, 293), new CifTuple_T3III(18, -(1), 291), new CifTuple_T3III(19, -(1), 292), new CifTuple_T3III(21, -(1), -(2)), new CifTuple_T3III(18, -(1), 294), new CifTuple_T3III(19, 295, -(1)), new CifTuple_T3III(21, 266, -(2)), new CifTuple_T3III(17, 297, 298), new CifTuple_T3III(18, -(1), -(2)), new CifTuple_T3III(21, -(1), 28), new CifTuple_T3III(8, 300, 296), new CifTuple_T3III(17, 290, 301), new CifTuple_T3III(18, -(1), 188), new CifTuple_T3III(8, 303, 282), new CifTuple_T3III(17, 304, -(1)), new CifTuple_T3III(18, -(1), 292), new CifTuple_T3III(11, 306, 320), new CifTuple_T3III(9, 307, 317), new CifTuple_T3III(12, 308, 315), new CifTuple_T3III(8, 309, 296), new CifTuple_T3III(17, 310, 312), new CifTuple_T3III(18, -(1), 311), new CifTuple_T3III(19, -(1), 195), new CifTuple_T3III(18, -(1), 313), new CifTuple_T3III(19, 314, -(1)), new CifTuple_T3III(22, -(2), 266), new CifTuple_T3III(8, 316, 296), new CifTuple_T3III(17, 310, 301), new CifTuple_T3III(8, 318, 282), new CifTuple_T3III(17, 319, -(1)), new CifTuple_T3III(18, -(1), 195), new CifTuple_T3III(9, 321, 329), new CifTuple_T3III(12, 322, 328), new CifTuple_T3III(8, 323, 326), new CifTuple_T3III(17, 324, 301), new CifTuple_T3III(18, -(1), 325), new CifTuple_T3III(19, -(1), -(2)), new CifTuple_T3III(17, 297, 327), new CifTuple_T3III(21, 195, 28), new CifTuple_T3III(8, 323, 296), new CifTuple_T3III(8, 297, 282), new CifTuple_T3III(10, 331, 387), new CifTuple_T3III(11, 332, 368), new CifTuple_T3III(9, 333, 363), new CifTuple_T3III(12, 334, 353), new CifTuple_T3III(17, 335, 346), new CifTuple_T3III(18, 336, 342), new CifTuple_T3III(19, -(1), 337), new CifTuple_T3III(21, 338, 341), new CifTuple_T3III(22, -(1), 339), new CifTuple_T3III(23, -(1), 340), new CifTuple_T3III(6, 257, -(2)), new CifTuple_T3III(22, 339, -(1)), new CifTuple_T3III(19, 343, -(1)), new CifTuple_T3III(21, 344, -(1)), new CifTuple_T3III(22, 345, -(1)), new CifTuple_T3III(23, -(1), 156), new CifTuple_T3III(18, 347, 349), new CifTuple_T3III(19, -(1), 348), new CifTuple_T3III(21, 339, -(1)), new CifTuple_T3III(19, 350, -(1)), new CifTuple_T3III(21, 351, -(1)), new CifTuple_T3III(22, 352, -(1)), new CifTuple_T3III(23, -(1), 257), new CifTuple_T3III(17, 354, 360), new CifTuple_T3III(18, 355, 359), new CifTuple_T3III(19, 356, 358), new CifTuple_T3III(20, 357, -(1)), new CifTuple_T3III(21, 195, -(1)), new CifTuple_T3III(21, -(2), 65), new CifTuple_T3III(19, 357, -(1)), new CifTuple_T3III(18, 361, 359), new CifTuple_T3III(19, 362, 171), new CifTuple_T3III(20, 195, -(1)), new CifTuple_T3III(12, 364, 367), new CifTuple_T3III(18, 365, -(1)), new CifTuple_T3III(19, -(1), 366), new CifTuple_T3III(6, 266, -(2)), new CifTuple_T3III(18, -(2), -(1)), new CifTuple_T3III(9, 369, 386), new CifTuple_T3III(12, 370, 378), new CifTuple_T3III(17, 371, 376), new CifTuple_T3III(18, 372, 375), new CifTuple_T3III(19, 373, 374), new CifTuple_T3III(20, 65, -(1)), new CifTuple_T3III(21, 174, -(2)), new CifTuple_T3III(19, 65, -(1)), new CifTuple_T3III(18, 377, 375), new CifTuple_T3III(19, 177, 64), new CifTuple_T3III(17, 379, 381), new CifTuple_T3III(18, 380, 188), new CifTuple_T3III(19, 177, -(2)), new CifTuple_T3III(18, 382, 188), new CifTuple_T3III(19, 383, -(2)), new CifTuple_T3III(20, -(2), 384), new CifTuple_T3III(21, 385, -(1)), new CifTuple_T3III(22, 65, -(1)), new CifTuple_T3III(17, 367, -(2)), new CifTuple_T3III(11, 388, 397), new CifTuple_T3III(9, 389, 386), new CifTuple_T3III(12, 390, 396), new CifTuple_T3III(17, 391, 394), new CifTuple_T3III(18, 392, 187), new CifTuple_T3III(19, 170, 393), new CifTuple_T3III(21, -(2), 195), new CifTuple_T3III(18, 395, 187), new CifTuple_T3III(19, 177, 171), new CifTuple_T3III(17, 204, 381), new CifTuple_T3III(9, 398, -(2)), new CifTuple_T3III(12, 399, 401), new CifTuple_T3III(17, 400, 379), new CifTuple_T3III(18, 382, -(2)), new CifTuple_T3III(17, 402, 381), new CifTuple_T3III(18, 380, -(2)), new CifTuple_T3III(11, 404, 467), new CifTuple_T3III(12, 405, 447), new CifTuple_T3III(8, 406, 436), new CifTuple_T3III(17, 407, 422), new CifTuple_T3III(18, 408, 410), new CifTuple_T3III(19, -(1), 409), new CifTuple_T3III(21, 338, -(1)), new CifTuple_T3III(19, -(1), 411), new CifTuple_T3III(21, 412, 417), new CifTuple_T3III(22, 413, 416), new CifTuple_T3III(23, 414, -(1)), new CifTuple_T3III(24, 34, 415), new CifTuple_T3III(7, 340, -(2)), new CifTuple_T3III(7, 156, -(2)), new CifTuple_T3III(22, 418, 420), new CifTuple_T3III(23, 419, -(1)), new CifTuple_T3III(24, 34, -(1)), new CifTuple_T3III(23, 421, 415), new CifTuple_T3III(7, 257, -(2)), new CifTuple_T3III(18, 423, 430), new CifTuple_T3III(19, 424, -(1)), new CifTuple_T3III(20, -(1), 425), new CifTuple_T3III(21, 426, 429), new CifTuple_T3III(22, 427, 428), new CifTuple_T3III(23, 34, -(1)), new CifTuple_T3III(23, 416, -(1)), new CifTuple_T3III(22, 34, 421), new CifTuple_T3III(19, -(1), 431), new CifTuple_T3III(21, 432, -(1)), new CifTuple_T3III(22, 433, 435), new CifTuple_T3III(23, 434, -(1)), new CifTuple_T3III(24, -(1), 415), new CifTuple_T3III(23, -(1), 415), new CifTuple_T3III(17, 437, 441), new CifTuple_T3III(18, -(1), 438), new CifTuple_T3III(19, -(1), 439), new CifTuple_T3III(21, -(2), 440), new CifTuple_T3III(22, 43, -(2)), new CifTuple_T3III(18, 442, 446), new CifTuple_T3III(19, 443, 409), new CifTuple_T3III(20, -(1), 444), new CifTuple_T3III(21, 197, 445), new CifTuple_T3III(22, 28, -(2)), new CifTuple_T3III(19, -(1), 171), new CifTuple_T3III(8, 448, 460), new CifTuple_T3III(17, 449, 453), new CifTuple_T3III(18, 450, 451), new CifTuple_T3III(19, 170, 171), new CifTuple_T3III(21, -(2), 452), new CifTuple_T3III(22, 34, -(2)), new CifTuple_T3III(18, 454, 171), new CifTuple_T3III(19, 455, -(1)), new CifTuple_T3III(20, -(2), 456), new CifTuple_T3III(21, 457, 458), new CifTuple_T3III(22, 418, 428), new CifTuple_T3III(22, 427, 459), new CifTuple_T3III(23, 421, -(1)), new CifTuple_T3III(17, 324, 461), new CifTuple_T3III(18, 462, 325), new CifTuple_T3III(19, 463, -(2)), new CifTuple_T3III(21, 426, 464), new CifTuple_T3III(22, 465, 421), new CifTuple_T3III(23, 466, -(1)), new CifTuple_T3III(24, 34, -(2)), new CifTuple_T3III(12, 468, 483), new CifTuple_T3III(8, 469, 479), new CifTuple_T3III(17, 470, 474), new CifTuple_T3III(18, 471, 473), new CifTuple_T3III(19, 472, -(1)), new CifTuple_T3III(20, -(1), 456), new CifTuple_T3III(7, 366, -(2)), new CifTuple_T3III(18, 475, 473), new CifTuple_T3III(19, 476, -(1)), new CifTuple_T3III(21, 477, -(2)), new CifTuple_T3III(22, 478, -(2)), new CifTuple_T3III(24, -(2), 34), new CifTuple_T3III(17, 480, 482), new CifTuple_T3III(18, 481, 325), new CifTuple_T3III(20, -(1), 463), new CifTuple_T3III(18, -(2), 325), new CifTuple_T3III(17, 484, -(2)), new CifTuple_T3III(18, 34, -(2)), new CifTuple_T3III(10, 486, 595), new CifTuple_T3III(11, 487, 554), new CifTuple_T3III(9, 488, 533), new CifTuple_T3III(8, 489, 516), new CifTuple_T3III(17, 490, 505), new CifTuple_T3III(18, 491, 502), new CifTuple_T3III(19, 492, -(1)), new CifTuple_T3III(20, 493, -(1)), new CifTuple_T3III(21, 494, 499), new CifTuple_T3III(22, 495, 497), new CifTuple_T3III(23, -(1), 496), new CifTuple_T3III(7, -(1), 158), new CifTuple_T3III(23, 498, 34), new CifTuple_T3III(5, -(1), 158), new CifTuple_T3III(22, -(1), 500), new CifTuple_T3III(23, 501, -(1)), new CifTuple_T3III(6, -(1), 158), new CifTuple_T3III(19, 503, -(1)), new CifTuple_T3III(21, 504, -(1)), new CifTuple_T3III(22, -(1), 34), new CifTuple_T3III(18, 506, 509), new CifTuple_T3III(19, 507, -(1)), new CifTuple_T3III(21, 508, -(1)), new CifTuple_T3III(22, -(1), 33), new CifTuple_T3III(19, 510, -(1)), new CifTuple_T3III(21, 511, 515), new CifTuple_T3III(22, 512, 513), new CifTuple_T3III(23, -(1), 12), new CifTuple_T3III(23, -(1), 514), new CifTuple_T3III(7, 12, -(2)), new CifTuple_T3III(22, -(1), 12), new CifTuple_T3III(17, 517, 527), new CifTuple_T3III(18, 518, 523), new CifTuple_T3III(19, 519, -(1)), new CifTuple_T3III(20, 520, -(1)), new CifTuple_T3III(21, 72, 521), new CifTuple_T3III(22, 522, -(2)), new CifTuple_T3III(7, 158, -(2)), new CifTuple_T3III(19, 524, -(1)), new CifTuple_T3III(21, 525, 526), new CifTuple_T3III(22, 28, 65), new CifTuple_T3III(22, 34, -(1)), new CifTuple_T3III(18, 528, 530), new CifTuple_T3III(19, 529, -(1)), new CifTuple_T3III(21, -(2), 34), new CifTuple_T3III(19, 531, -(1)), new CifTuple_T3III(21, 525, 532), new CifTuple_T3III(22, 514, -(1)), new CifTuple_T3III(8, 534, 549), new CifTuple_T3III(17, 535, 544), new CifTuple_T3III(18, 536, 541), new CifTuple_T3III(19, 537, -(1)), new CifTuple_T3III(20, 538, -(1)), new CifTuple_T3III(21, 539, -(2)), new CifTuple_T3III(22, -(2), 540), new CifTuple_T3III(23, 12, 522), new CifTuple_T3III(19, 542, -(1)), new CifTuple_T3III(21, 543, -(1)), new CifTuple_T3III(22, 28, 33), new CifTuple_T3III(18, 545, 546), new CifTuple_T3III(19, 34, -(1)), new CifTuple_T3III(19, 547, -(1)), new CifTuple_T3III(21, 548, -(1)), new CifTuple_T3III(22, 28, 513), new CifTuple_T3III(17, 550, 553), new CifTuple_T3III(18, 71, 551), new CifTuple_T3III(19, 552, -(1)), new CifTuple_T3III(21, 525, -(1)), new CifTuple_T3III(18, 188, 552), new CifTuple_T3III(9, 555, 584), new CifTuple_T3III(8, 556, 577), new CifTuple_T3III(17, 557, 567), new CifTuple_T3III(18, 558, 564), new CifTuple_T3III(19, 559, 41), new CifTuple_T3III(20, 560, -(1)), new CifTuple_T3III(21, 561, -(2)), new CifTuple_T3III(22, 562, 73), new CifTuple_T3III(23, 563, 34), new CifTuple_T3III(24, -(2), 158), new CifTuple_T3III(19, 565, -(1)), new CifTuple_T3III(21, 566, -(1)), new CifTuple_T3III(22, 43, 34), new CifTuple_T3III(18, 568, 570), new CifTuple_T3III(19, 569, 41), new CifTuple_T3III(21, 64, 16), new CifTuple_T3III(19, 571, -(1)), new CifTuple_T3III(21, 572, 515), new CifTuple_T3III(22, 573, 574), new CifTuple_T3III(23, 44, 12), new CifTuple_T3III(23, -(1), 575), new CifTuple_T3III(7, 576, -(2)), new CifTuple_T3III(6, -(2), 12), new CifTuple_T3III(17, 578, 581), new CifTuple_T3III(18, 579, 523), new CifTuple_T3III(19, 580, -(1)), new CifTuple_T3III(20, 71, -(1)), new CifTuple_T3III(18, 188, 582), new CifTuple_T3III(21, 525, 583), new CifTuple_T3III(22, 575, -(1)), new CifTuple_T3III(8, 585, 593), new CifTuple_T3III(17, 586, 590), new CifTuple_T3III(18, 579, 587), new CifTuple_T3III(19, 588, -(1)), new CifTuple_T3III(21, 589, -(1)), new CifTuple_T3III(22, 28, 34), new CifTuple_T3III(18, 188, 591), new CifTuple_T3III(21, 592, -(1)), new CifTuple_T3III(22, 28, 574), new CifTuple_T3III(17, 594, 553), new CifTuple_T3III(18, 580, 551), new CifTuple_T3III(11, 596, 625), new CifTuple_T3III(9, 597, 618), new CifTuple_T3III(8, 598, 614), new CifTuple_T3III(17, 599, 607), new CifTuple_T3III(18, 600, 587), new CifTuple_T3III(19, 601, 26), new CifTuple_T3III(20, 602, -(1)), new CifTuple_T3III(21, 603, 605), new CifTuple_T3III(22, 604, 73), new CifTuple_T3III(23, -(2), 34), new CifTuple_T3III(22, -(2), 606), new CifTuple_T3III(23, -(2), 158), new CifTuple_T3III(18, 608, 609), new CifTuple_T3III(19, 569, 26), new CifTuple_T3III(19, 610, -(1)), new CifTuple_T3III(21, 611, 613), new CifTuple_T3III(22, 612, 574), new CifTuple_T3III(23, -(2), 12), new CifTuple_T3III(22, -(1), 35), new CifTuple_T3III(17, 615, 616), new CifTuple_T3III(18, 70, 523), new CifTuple_T3III(18, 188, 617), new CifTuple_T3III(19, 582, -(1)), new CifTuple_T3III(8, 619, 623), new CifTuple_T3III(17, 620, 621), new CifTuple_T3III(18, 70, 587), new CifTuple_T3III(18, 188, 622), new CifTuple_T3III(19, 591, -(1)), new CifTuple_T3III(17, 550, 624), new CifTuple_T3III(18, 188, 551), new CifTuple_T3III(9, 626, 584), new CifTuple_T3III(8, 627, 577), new CifTuple_T3III(17, 628, 632), new CifTuple_T3III(18, 629, 564), new CifTuple_T3III(19, 630, 41), new CifTuple_T3III(20, 631, -(1)), new CifTuple_T3III(21, 603, -(2)), new CifTuple_T3III(18, 633, 570), new CifTuple_T3III(19, 634, 26), new CifTuple_T3III(21, 635, 16), new CifTuple_T3III(22, 636, -(2)), new CifTuple_T3III(23, 637, -(2)), new CifTuple_T3III(24, -(1), 158), new CifTuple_T3III(10, 639, 727), new CifTuple_T3III(11, 640, 695), new CifTuple_T3III(9, 641, 675), new CifTuple_T3III(12, 642, 661), new CifTuple_T3III(8, 643, 654), new CifTuple_T3III(13, 644, 649), new CifTuple_T3III(14, -(1), 645), new CifTuple_T3III(15, 646, -(1)), new CifTuple_T3III(21, 647, 20), new CifTuple_T3III(22, 648, -(1)), new CifTuple_T3III(23, -(1), 11), new CifTuple_T3III(14, -(1), 650), new CifTuple_T3III(15, 651, -(1)), new CifTuple_T3III(21, 652, -(1)), new CifTuple_T3III(22, 653, -(1)), new CifTuple_T3III(23, -(1), 15), new CifTuple_T3III(13, 655, 660), new CifTuple_T3III(14, 656, 657), new CifTuple_T3III(15, -(1), 34), new CifTuple_T3III(15, 658, -(1)), new CifTuple_T3III(21, -(1), 659), new CifTuple_T3III(22, 12, -(1)), new CifTuple_T3III(14, -(1), 16), new CifTuple_T3III(8, 662, 670), new CifTuple_T3III(13, 663, 667), new CifTuple_T3III(14, 664, 657), new CifTuple_T3III(15, -(1), 665), new CifTuple_T3III(21, -(1), 666), new CifTuple_T3III(22, 427, -(1)), new CifTuple_T3III(14, -(1), 668), new CifTuple_T3III(15, 669, -(1)), new CifTuple_T3III(21, -(1), 16), new CifTuple_T3III(13, 671, 674), new CifTuple_T3III(14, -(1), 672), new CifTuple_T3III(15, 673, -(1)), new CifTuple_T3III(21, -(1), 195), new CifTuple_T3III(15, -(1), 292), new CifTuple_T3III(12, 676, 688), new CifTuple_T3III(8, 677, 682), new CifTuple_T3III(13, 678, 660), new CifTuple_T3III(14, 656, 679), new CifTuple_T3III(15, 680, -(1)), new CifTuple_T3III(21, 681, -(1)), new CifTuple_T3III(22, -(1), 512), new CifTuple_T3III(13, 683, 687), new CifTuple_T3III(14, -(1), 684), new CifTuple_T3III(15, 685, -(1)), new CifTuple_T3III(21, 686, -(1)), new CifTuple_T3III(22, -(1), 65), new CifTuple_T3III(15, -(1), -(2)), new CifTuple_T3III(8, 689, 692), new CifTuple_T3III(13, 690, -(1)), new CifTuple_T3III(14, -(1), 691), new CifTuple_T3III(15, 673, 292), new CifTuple_T3III(13, 693, -(1)), new CifTuple_T3III(14, -(1), 694), new CifTuple_T3III(15, 673, -(2)), new CifTuple_T3III(9, 696, 720), new CifTuple_T3III(12, 697, 711), new CifTuple_T3III(8, 698, 709), new CifTuple_T3III(13, 699, 705), new CifTuple_T3III(14, 700, 702), new CifTuple_T3III(15, -(1), 701), new CifTuple_T3III(21, 666, -(1)), new CifTuple_T3III(15, 703, -(1)), new CifTuple_T3III(21, 704, -(1)), new CifTuple_T3III(22, 35, -(1)), new CifTuple_T3III(14, -(1), 706), new CifTuple_T3III(15, 707, -(1)), new CifTuple_T3III(21, 708, -(1)), new CifTuple_T3III(23, 16, -(1)), new CifTuple_T3III(13, 710, 687), new CifTuple_T3III(14, -(1), 26), new CifTuple_T3III(8, 712, 717), new CifTuple_T3III(13, 713, -(1)), new CifTuple_T3III(14, 714, 672), new CifTuple_T3III(15, 715, 716), new CifTuple_T3III(16, -(1), -(2)), new CifTuple_T3III(21, -(1), 27), new CifTuple_T3III(13, 718, -(1)), new CifTuple_T3III(14, 719, 673), new CifTuple_T3III(15, 715, -(1)), new CifTuple_T3III(12, 721, 724), new CifTuple_T3III(13, 722, -(1)), new CifTuple_T3III(14, -(1), 723), new CifTuple_T3III(15, 26, -(2)), new CifTuple_T3III(8, 717, 725), new CifTuple_T3III(13, 726, -(1)), new CifTuple_T3III(14, 715, 673), new CifTuple_T3III(11, 728, 756), new CifTuple_T3III(9, 729, 752), new CifTuple_T3III(12, 730, 744), new CifTuple_T3III(8, 731, 740), new CifTuple_T3III(13, 732, 737), new CifTuple_T3III(14, 733, 735), new CifTuple_T3III(15, -(1), 734), new CifTuple_T3III(21, -(1), 508), new CifTuple_T3III(15, 736, -(1)), new CifTuple_T3III(21, -(1), 512), new CifTuple_T3III(14, -(1), 738), new CifTuple_T3III(15, 739, -(1)), new CifTuple_T3III(21, -(1), 36), new CifTuple_T3III(13, 741, 743), new CifTuple_T3III(14, -(1), 742), new CifTuple_T3III(21, -(1), 65), new CifTuple_T3III(14, 687, -(1)), new CifTuple_T3III(8, 745, 749), new CifTuple_T3III(13, 746, 748), new CifTuple_T3III(14, 747, 672), new CifTuple_T3III(15, -(1), 716), new CifTuple_T3III(14, -(1), 687), new CifTuple_T3III(13, 750, 751), new CifTuple_T3III(14, -(1), 673), new CifTuple_T3III(14, -(1), -(2)), new CifTuple_T3III(12, 753, 749), new CifTuple_T3III(13, 754, -(1)), new CifTuple_T3III(14, -(1), 755), new CifTuple_T3III(15, 742, -(2)), new CifTuple_T3III(9, 757, 766), new CifTuple_T3III(12, 758, 763), new CifTuple_T3III(8, 759, 762), new CifTuple_T3III(13, 760, 748), new CifTuple_T3III(14, 761, 26), new CifTuple_T3III(15, -(1), 26), new CifTuple_T3III(13, 710, 751), new CifTuple_T3III(8, 764, 717), new CifTuple_T3III(13, 765, -(1)), new CifTuple_T3III(14, 714, 673), new CifTuple_T3III(12, 762, 724), new CifTuple_T3III(10, 768, 811), new CifTuple_T3III(11, 769, 797), new CifTuple_T3III(9, 770, 786), new CifTuple_T3III(12, 771, 775), new CifTuple_T3III(8, -(1), 772), new CifTuple_T3III(14, 773, -(1)), new CifTuple_T3III(15, 774, -(1)), new CifTuple_T3III(16, 223, -(1)), new CifTuple_T3III(8, 776, 781), new CifTuple_T3III(14, 777, -(1)), new CifTuple_T3III(15, 778, -(1)), new CifTuple_T3III(16, 779, -(1)), new CifTuple_T3III(21, 780, -(1)), new CifTuple_T3III(22, -(1), 28), new CifTuple_T3III(13, 782, 784), new CifTuple_T3III(14, 783, -(1)), new CifTuple_T3III(15, 223, -(1)), new CifTuple_T3III(15, 785, -(1)), new CifTuple_T3III(16, 223, 779), new CifTuple_T3III(12, 787, 791), new CifTuple_T3III(8, 776, 788), new CifTuple_T3III(13, 789, 774), new CifTuple_T3III(14, 223, 790), new CifTuple_T3III(15, -(1), 779), new CifTuple_T3III(8, 792, 795), new CifTuple_T3III(13, 793, 779), new CifTuple_T3III(14, 794, -(1)), new CifTuple_T3III(15, 779, -(1)), new CifTuple_T3III(13, 796, 785), new CifTuple_T3III(14, 223, -(1)), new CifTuple_T3III(9, 798, 806), new CifTuple_T3III(12, 799, 802), new CifTuple_T3III(8, 776, 800), new CifTuple_T3III(13, 801, 774), new CifTuple_T3III(14, 784, -(1)), new CifTuple_T3III(8, 803, 805), new CifTuple_T3III(13, 793, 804), new CifTuple_T3III(14, 779, -(1)), new CifTuple_T3III(13, 782, 785), new CifTuple_T3III(12, 807, 791), new CifTuple_T3III(8, 808, 809), new CifTuple_T3III(13, 793, 778), new CifTuple_T3III(13, 810, 774), new CifTuple_T3III(14, 785, -(1)), new CifTuple_T3III(11, 812, 822), new CifTuple_T3III(9, 813, 817), new CifTuple_T3III(12, 814, 802), new CifTuple_T3III(8, 776, 815), new CifTuple_T3III(13, 782, 816), new CifTuple_T3III(14, 774, 779), new CifTuple_T3III(12, 818, 791), new CifTuple_T3III(8, 819, 821), new CifTuple_T3III(13, 793, 820), new CifTuple_T3III(14, 778, 779), new CifTuple_T3III(13, 796, 816), new CifTuple_T3III(9, 823, 806), new CifTuple_T3III(12, 824, 802), new CifTuple_T3III(8, 825, 800), new CifTuple_T3III(13, 793, 826), new CifTuple_T3III(14, 778, -(1)), new CifTuple_T3III(10, 828, 928), new CifTuple_T3III(11, 829, 894), new CifTuple_T3III(9, 830, 875), new CifTuple_T3III(12, 831, 857), new CifTuple_T3III(8, 832, 847), new CifTuple_T3III(13, 833, 841), new CifTuple_T3III(14, -(1), 834), new CifTuple_T3III(15, 835, -(1)), new CifTuple_T3III(21, 836, 839), new CifTuple_T3III(22, 837, -(1)), new CifTuple_T3III(23, -(1), 838), new CifTuple_T3III(5, 156, -(1)), new CifTuple_T3III(22, -(1), 840), new CifTuple_T3III(23, 838, -(1)), new CifTuple_T3III(14, 842, -(1)), new CifTuple_T3III(15, 843, -(1)), new CifTuple_T3III(16, -(1), 844), new CifTuple_T3III(21, 845, 846), new CifTuple_T3III(22, -(1), 352), new CifTuple_T3III(22, -(1), 257), new CifTuple_T3III(13, 848, 852), new CifTuple_T3III(14, 849, 851), new CifTuple_T3III(15, 850, -(1)), new CifTuple_T3III(16, 173, -(1)), new CifTuple_T3III(15, 173, -(1)), new CifTuple_T3III(14, 853, -(1)), new CifTuple_T3III(15, 854, 856), new CifTuple_T3III(16, 173, 855), new CifTuple_T3III(21, -(2), 257), new CifTuple_T3III(21, -(1), 846), new CifTuple_T3III(8, 858, 870), new CifTuple_T3III(13, 859, 867), new CifTuple_T3III(14, 860, 862), new CifTuple_T3III(15, 861, -(1)), new CifTuple_T3III(16, 780, -(1)), new CifTuple_T3III(15, 863, -(1)), new CifTuple_T3III(21, 864, 780), new CifTuple_T3III(22, 865, -(1)), new CifTuple_T3III(23, -(1), 866), new CifTuple_T3III(5, -(2), -(1)), new CifTuple_T3III(14, 868, -(1)), new CifTuple_T3III(15, 869, -(1)), new CifTuple_T3III(16, 780, 846), new CifTuple_T3III(13, 851, 871), new CifTuple_T3III(15, 872, -(1)), new CifTuple_T3III(16, 173, 873), new CifTuple_T3III(21, -(2), 874), new CifTuple_T3III(22, 257, -(2)), new CifTuple_T3III(12, 876, 888), new CifTuple_T3III(8, 877, 885), new CifTuple_T3III(13, 878, 882), new CifTuple_T3III(14, 879, 881), new CifTuple_T3III(15, 880, -(1)), new CifTuple_T3III(16, 194, -(1)), new CifTuple_T3III(15, 194, 856), new CifTuple_T3III(14, 883, -(1)), new CifTuple_T3III(15, 884, -(1)), new CifTuple_T3III(16, 194, 257), new CifTuple_T3III(13, 886, -(2)), new CifTuple_T3III(14, -(2), 887), new CifTuple_T3III(15, -(2), 873), new CifTuple_T3III(8, 889, -(2)), new CifTuple_T3III(13, 890, 891), new CifTuple_T3III(15, 194, -(1)), new CifTuple_T3III(16, 194, 892), new CifTuple_T3III(21, 893, -(2)), new CifTuple_T3III(22, -(2), 257), new CifTuple_T3III(9, 895, 919), new CifTuple_T3III(12, 896, 910), new CifTuple_T3III(8, 897, 907), new CifTuple_T3III(13, 898, 904), new CifTuple_T3III(14, 899, 902), new CifTuple_T3III(15, 900, -(1)), new CifTuple_T3III(16, 901, 846), new CifTuple_T3III(21, -(1), 174), new CifTuple_T3III(15, 903, -(1)), new CifTuple_T3III(21, 864, 174), new CifTuple_T3III(14, 905, -(1)), new CifTuple_T3III(15, 906, -(1)), new CifTuple_T3III(16, 901, 374), new CifTuple_T3III(13, 908, 909), new CifTuple_T3III(14, 871, 173), new CifTuple_T3III(16, 173, -(2)), new CifTuple_T3III(8, 911, 917), new CifTuple_T3III(13, 912, 914), new CifTuple_T3III(14, 913, 902), new CifTuple_T3III(15, 901, -(1)), new CifTuple_T3III(14, 915, -(1)), new CifTuple_T3III(16, 901, 916), new CifTuple_T3III(21, 846, 174), new CifTuple_T3III(13, 918, 872), new CifTuple_T3III(14, 851, 173), new CifTuple_T3III(12, 920, 925), new CifTuple_T3III(8, 921, -(2)), new CifTuple_T3III(13, 922, 924), new CifTuple_T3III(14, 923, 194), new CifTuple_T3III(15, 891, -(1)), new CifTuple_T3III(16, 194, -(2)), new CifTuple_T3III(8, 926, -(2)), new CifTuple_T3III(13, 927, 891), new CifTuple_T3III(14, 890, 194), new CifTuple_T3III(11, 929, 956), new CifTuple_T3III(9, 930, 952), new CifTuple_T3III(12, 931, 945), new CifTuple_T3III(8, 932, 943), new CifTuple_T3III(13, 933, 939), new CifTuple_T3III(14, 934, 937), new CifTuple_T3III(15, 935, -(1)), new CifTuple_T3III(16, 936, -(1)), new CifTuple_T3III(21, -(1), 780), new CifTuple_T3III(15, 938, -(1)), new CifTuple_T3III(21, 866, 780), new CifTuple_T3III(14, 940, 942), new CifTuple_T3III(15, 941, -(1)), new CifTuple_T3III(16, 936, 234), new CifTuple_T3III(15, -(1), 846), new CifTuple_T3III(13, 918, 944), new CifTuple_T3III(14, 909, 873), new CifTuple_T3III(8, 946, 917), new CifTuple_T3III(13, 947, 949), new CifTuple_T3III(14, 948, 937), new CifTuple_T3III(15, 936, -(1)), new CifTuple_T3III(14, 950, -(1)), new CifTuple_T3III(16, 936, 951), new CifTuple_T3III(21, 257, 780), new CifTuple_T3III(12, 953, 925), new CifTuple_T3III(8, 954, -(2)), new CifTuple_T3III(13, 927, 955), new CifTuple_T3III(14, 924, 892), new CifTuple_T3III(9, 957, 919), new CifTuple_T3III(12, 958, 964), new CifTuple_T3III(8, 959, 907), new CifTuple_T3III(13, 960, 963), new CifTuple_T3III(14, 961, 903), new CifTuple_T3III(15, 962, -(1)), new CifTuple_T3III(16, 901, 951), new CifTuple_T3III(14, 906, -(1)), new CifTuple_T3III(8, 965, 917), new CifTuple_T3III(13, 966, 914), new CifTuple_T3III(14, 913, 967), new CifTuple_T3III(21, 866, 174), new CifTuple_T3III(10, 969, 984), new CifTuple_T3III(11, 970, 981), new CifTuple_T3III(9, 971, -(1)), new CifTuple_T3III(12, 972, 977), new CifTuple_T3III(13, 973, 975), new CifTuple_T3III(14, -(1), 974), new CifTuple_T3III(15, 343, -(1)), new CifTuple_T3III(14, -(1), 976), new CifTuple_T3III(15, 350, -(1)), new CifTuple_T3III(14, 978, 980), new CifTuple_T3III(15, 979, -(1)), new CifTuple_T3III(16, 384, -(1)), new CifTuple_T3III(15, 384, -(1)), new CifTuple_T3III(9, 982, -(1)), new CifTuple_T3III(12, 977, 983), new CifTuple_T3III(13, 980, 384), new CifTuple_T3III(11, 985, 992), new CifTuple_T3III(9, 986, -(1)), new CifTuple_T3III(12, 987, 991), new CifTuple_T3III(14, 988, 990), new CifTuple_T3III(15, 989, -(1)), new CifTuple_T3III(16, 357, -(1)), new CifTuple_T3III(15, 357, -(1)), new CifTuple_T3III(13, 990, 357), new CifTuple_T3III(9, 993, -(1)), new CifTuple_T3III(12, 994, 999), new CifTuple_T3III(13, 995, 998), new CifTuple_T3III(14, 996, 384), new CifTuple_T3III(15, 997, -(1)), new CifTuple_T3III(16, 384, 357), new CifTuple_T3III(14, 979, 384), new CifTuple_T3III(13, 1000, 1001), new CifTuple_T3III(14, 990, 357), new CifTuple_T3III(14, 1002, 357), new CifTuple_T3III(16, 357, 384), new CifTuple_T3III(10, 1004, 1044), new CifTuple_T3III(11, 1005, 1029), new CifTuple_T3III(12, 1006, 1018), new CifTuple_T3III(13, 1007, 1015), new CifTuple_T3III(14, 1008, 1013), new CifTuple_T3III(15, -(1), 1009), new CifTuple_T3III(21, 1010, 341), new CifTuple_T3III(22, -(1), 1011), new CifTuple_T3III(23, -(1), 1012), new CifTuple_T3III(7, 340, -(1)), new CifTuple_T3III(15, 1014, -(1)), new CifTuple_T3III(21, -(1), 344), new CifTuple_T3III(14, -(1), 1016), new CifTuple_T3III(15, 1017, -(1)), new CifTuple_T3III(21, -(1), 351), new CifTuple_T3III(13, 1019, 1027), new CifTuple_T3III(14, 1020, 1026), new CifTuple_T3III(15, 1021, 1023), new CifTuple_T3III(16, 1022, -(1)), new CifTuple_T3III(21, -(1), 385), new CifTuple_T3III(21, 1024, 385), new CifTuple_T3III(22, -(1), 1025), new CifTuple_T3III(7, -(2), -(1)), new CifTuple_T3III(15, 1022, -(1)), new CifTuple_T3III(14, 1028, 1026), new CifTuple_T3III(15, 1021, -(1)), new CifTuple_T3III(12, 1030, 1039), new CifTuple_T3III(13, 1031, 1036), new CifTuple_T3III(14, 1032, 1034), new CifTuple_T3III(15, 1033, 374), new CifTuple_T3III(16, 64, -(1)), new CifTuple_T3III(15, 1035, -(1)), new CifTuple_T3III(21, 174, 65), new CifTuple_T3III(14, 1037, 1038), new CifTuple_T3III(15, 1033, -(1)), new CifTuple_T3III(15, 64, -(1)), new CifTuple_T3III(13, 1040, 1042), new CifTuple_T3III(14, 1041, 1034), new CifTuple_T3III(15, 1035, 374), new CifTuple_T3III(14, 1043, 1035), new CifTuple_T3III(16, 1035, 64), new CifTuple_T3III(11, 1045, 1057), new CifTuple_T3III(12, 1046, 1054), new CifTuple_T3III(13, 1047, 1052), new CifTuple_T3III(14, 1048, 1051), new CifTuple_T3III(15, 1049, 393), new CifTuple_T3III(16, 1050, -(1)), new CifTuple_T3III(21, -(2), 385), new CifTuple_T3III(15, 1050, -(1)), new CifTuple_T3III(14, 1053, 1051), new CifTuple_T3III(15, 1049, -(1)), new CifTuple_T3III(13, 1055, 1050), new CifTuple_T3III(14, 1056, 1051), new CifTuple_T3III(15, 1050, 393), new CifTuple_T3III(12, 1058, 1063), new CifTuple_T3III(13, 1059, 1062), new CifTuple_T3III(14, 1060, 64), new CifTuple_T3III(15, 1061, -(2)), new CifTuple_T3III(16, 64, 1050), new CifTuple_T3III(14, 1033, 64), new CifTuple_T3III(13, 1064, 1066), new CifTuple_T3III(14, 1065, 358), new CifTuple_T3III(15, 358, -(2)), new CifTuple_T3III(14, 1067, 358), new CifTuple_T3III(16, 358, 64), new CifTuple_T3III(11, 1069, 1139), new CifTuple_T3III(12, 1070, 1114), new CifTuple_T3III(8, 1071, 1100), new CifTuple_T3III(13, 1072, 1089), new CifTuple_T3III(14, 1073, 1079), new CifTuple_T3III(15, 1074, 409), new CifTuple_T3III(16, 1075, -(1)), new CifTuple_T3III(21, 508, 1076), new CifTuple_T3III(22, 1077, -(1)), new CifTuple_T3III(23, 1078, -(1)), new CifTuple_T3III(24, -(1), 34), new CifTuple_T3III(15, 1080, 1085), new CifTuple_T3III(21, 1081, 1082), new CifTuple_T3III(22, -(1), 416), new CifTuple_T3III(22, 1083, -(1)), new CifTuple_T3III(23, 1084, -(1)), new CifTuple_T3III(24, -(1), 416), new CifTuple_T3III(21, -(1), 1086), new CifTuple_T3III(22, 1087, -(1)), new CifTuple_T3III(23, 1088, -(1)), new CifTuple_T3III(24, -(1), 496), new CifTuple_T3III(14, 1090, 1093), new CifTuple_T3III(15, 1091, -(1)), new CifTuple_T3III(16, 1092, -(1)), new CifTuple_T3III(21, 504, 666), new CifTuple_T3III(15, 1094, -(1)), new CifTuple_T3III(21, 1095, 1097), new CifTuple_T3III(22, -(1), 1096), new CifTuple_T3III(23, -(1), 421), new CifTuple_T3III(22, 1098, -(1)), new CifTuple_T3III(23, 1099, -(1)), new CifTuple_T3III(24, -(1), 421), new CifTuple_T3III(13, 1101, 1111), new CifTuple_T3III(14, 1102, 1107), new CifTuple_T3III(15, 1103, -(1)), new CifTuple_T3III(16, 1104, -(1)), new CifTuple_T3III(21, 686, 1105), new CifTuple_T3III(22, 1106, -(1)), new CifTuple_T3III(23, 96, -(1)), new CifTuple_T3III(15, 1104, 1108), new CifTuple_T3III(21, -(1), 1109), new CifTuple_T3III(22, 1110, -(1)), new CifTuple_T3III(23, 637, -(1)), new CifTuple_T3III(14, 1112, 234), new CifTuple_T3III(15, 1113, 409), new CifTuple_T3III(16, 213, -(1)), new CifTuple_T3III(8, 1115, 1133), new CifTuple_T3III(13, 1116, 1124), new CifTuple_T3III(14, 1117, 1120), new CifTuple_T3III(15, 1118, 223), new CifTuple_T3III(16, 1119, -(1)), new CifTuple_T3III(21, 174, 526), new CifTuple_T3III(15, 1121, -(1)), new CifTuple_T3III(21, 174, 1122), new CifTuple_T3III(22, 1123, -(1)), new CifTuple_T3III(7, 157, -(2)), new CifTuple_T3III(14, 1125, 1129), new CifTuple_T3III(15, 1126, -(1)), new CifTuple_T3III(16, 1127, 1092), new CifTuple_T3III(21, 174, 1128), new CifTuple_T3III(22, 522, -(1)), new CifTuple_T3III(15, 1130, -(1)), new CifTuple_T3III(21, 174, 1131), new CifTuple_T3III(22, 1132, -(1)), new CifTuple_T3III(7, 266, -(2)), new CifTuple_T3III(13, 1134, 1136), new CifTuple_T3III(14, -(2), 1135), new CifTuple_T3III(15, 514, -(1)), new CifTuple_T3III(14, 1137, -(2)), new CifTuple_T3III(15, 1138, 223), new CifTuple_T3III(16, -(2), 213), new CifTuple_T3III(12, 1140, 1160), new CifTuple_T3III(8, 1141, 1154), new CifTuple_T3III(13, 1142, 1147), new CifTuple_T3III(14, 1143, 1146), new CifTuple_T3III(15, 1144, -(1)), new CifTuple_T3III(16, 1145, 1092), new CifTuple_T3III(21, 34, -(2)), new CifTuple_T3III(15, 1145, -(1)), new CifTuple_T3III(14, 1148, 1150), new CifTuple_T3III(15, 1149, -(1)), new CifTuple_T3III(16, 1145, 34), new CifTuple_T3III(15, 1151, -(1)), new CifTuple_T3III(21, 1152, -(2)), new CifTuple_T3III(7, 1153, -(2)), new CifTuple_T3III(6, 266, -(1)), new CifTuple_T3III(13, 1155, 1158), new CifTuple_T3III(14, 1138, 1156), new CifTuple_T3III(15, 1157, -(1)), new CifTuple_T3III(21, 514, -(2)), new CifTuple_T3III(14, 1159, -(2)), new CifTuple_T3III(15, -(2), -(1)), new CifTuple_T3III(8, 1161, 1165), new CifTuple_T3III(13, 1162, 1163), new CifTuple_T3III(15, 292, -(1)), new CifTuple_T3III(14, 1164, 292), new CifTuple_T3III(16, 292, 1145), new CifTuple_T3III(13, 1166, 1158), new CifTuple_T3III(14, -(2), 1159), new CifTuple_T3III(9, 1168, 1201), new CifTuple_T3III(12, 1169, 1196), new CifTuple_T3III(8, 1170, 1189), new CifTuple_T3III(13, 1171, 1186), new CifTuple_T3III(14, 1172, 1177), new CifTuple_T3III(15, -(1), 1173), new CifTuple_T3III(21, 1174, 338), new CifTuple_T3III(22, 1175, -(1)), new CifTuple_T3III(23, 1176, -(1)), new CifTuple_T3III(24, -(1), 340), new CifTuple_T3III(15, 1178, 1183), new CifTuple_T3III(21, 1179, 1182), new CifTuple_T3III(22, 1180, -(1)), new CifTuple_T3III(23, 1181, -(1)), new CifTuple_T3III(24, -(1), 156), new CifTuple_T3III(22, -(1), 345), new CifTuple_T3III(21, 1184, 1185), new CifTuple_T3III(22, 433, -(1)), new CifTuple_T3III(22, -(1), 435), new CifTuple_T3III(14, -(1), 1187), new CifTuple_T3III(15, 1188, -(1)), new CifTuple_T3III(21, 254, 845), new CifTuple_T3III(13, 1190, 1194), new CifTuple_T3III(14, -(1), 1191), new CifTuple_T3III(15, -(1), 1192), new CifTuple_T3III(21, 1193, 686), new CifTuple_T3III(22, 96, -(1)), new CifTuple_T3III(14, 1195, -(1)), new CifTuple_T3III(15, -(1), 1183), new CifTuple_T3III(8, 1197, 1200), new CifTuple_T3III(13, 1198, 848), new CifTuple_T3III(14, 1199, 173), new CifTuple_T3III(15, 850, 173), new CifTuple_T3III(15, -(1), 173), new CifTuple_T3III(12, 1202, 1209), new CifTuple_T3III(8, 1203, 1205), new CifTuple_T3III(13, 1204, -(1)), new CifTuple_T3III(14, -(1), 1195), new CifTuple_T3III(13, 1206, -(1)), new CifTuple_T3III(14, -(1), 1207), new CifTuple_T3III(15, -(1), 1208), new CifTuple_T3III(21, 1105, 686), new CifTuple_T3III(13, 1200, -(1)), new CifTuple_T3III(10, 1211, 1270), new CifTuple_T3III(11, 1212, 1246), new CifTuple_T3III(9, 1213, 1236), new CifTuple_T3III(8, 1214, 1226), new CifTuple_T3III(13, 1215, 1223), new CifTuple_T3III(14, 1216, 1218), new CifTuple_T3III(15, -(1), 1217), new CifTuple_T3III(21, -(1), 613), new CifTuple_T3III(15, -(1), 1219), new CifTuple_T3III(21, 1220, 1221), new CifTuple_T3III(22, 418, 34), new CifTuple_T3III(22, 427, 1222), new CifTuple_T3III(23, 514, -(1)), new CifTuple_T3III(14, -(1), 1224), new CifTuple_T3III(15, 1225, -(1)), new CifTuple_T3III(21, -(1), 515), new CifTuple_T3III(13, 1227, 1232), new CifTuple_T3III(14, 1228, 1230), new CifTuple_T3III(15, 1229, -(1)), new CifTuple_T3III(16, 26, -(1)), new CifTuple_T3III(15, 26, 1231), new CifTuple_T3III(21, -(2), 445), new CifTuple_T3III(14, 1233, -(1)), new CifTuple_T3III(15, -(1), 1234), new CifTuple_T3III(21, 1235, 1221), new CifTuple_T3III(22, 418, 427), new CifTuple_T3III(8, 1237, 1240), new CifTuple_T3III(13, 1238, -(1)), new CifTuple_T3III(14, 1228, 1239), new CifTuple_T3III(15, 26, 1234), new CifTuple_T3III(13, 1241, -(1)), new CifTuple_T3III(14, 26, 1242), new CifTuple_T3III(15, 26, 1243), new CifTuple_T3III(21, 1244, 1245), new CifTuple_T3III(22, 28, 427), new CifTuple_T3III(22, 28, 514), new CifTuple_T3III(9, 1247, 1266), new CifTuple_T3III(8, 1248, 1263), new CifTuple_T3III(13, 1249, 1258), new CifTuple_T3III(14, 1250, 1254), new CifTuple_T3III(15, 1251, 1252), new CifTuple_T3III(16, 41, -(1)), new CifTuple_T3III(21, 1253, 589), new CifTuple_T3III(22, 43, 427), new CifTuple_T3III(15, 1255, 1256), new CifTuple_T3III(21, 42, 53), new CifTuple_T3III(21, 1257, -(2)), new CifTuple_T3III(22, 44, -(2)), new CifTuple_T3III(14, 1259, 1260), new CifTuple_T3III(15, 41, -(1)), new CifTuple_T3III(15, 1261, -(1)), new CifTuple_T3III(21, 440, 1262), new CifTuple_T3III(22, 16, -(2)), new CifTuple_T3III(13, 1264, 687), new CifTuple_T3III(14, 1265, 723), new CifTuple_T3III(15, 26, -(1)), new CifTuple_T3III(8, 1267, 1268), new CifTuple_T3III(13, 1264, -(1)), new CifTuple_T3III(13, 1269, -(1)), new CifTuple_T3III(14, 26, 723), new CifTuple_T3III(11, 1271, 1288), new CifTuple_T3III(9, 1272, 1285), new CifTuple_T3III(8, 1273, 1283), new CifTuple_T3III(13, 1274, 1279), new CifTuple_T3III(14, 1275, 1276), new CifTuple_T3III(15, 1229, 1244), new CifTuple_T3III(15, 1277, 1278), new CifTuple_T3III(21, 27, 63), new CifTuple_T3III(21, -(2), 197), new CifTuple_T3III(14, 1265, 1280), new CifTuple_T3III(15, 1281, -(1)), new CifTuple_T3III(21, 445, 1282), new CifTuple_T3III(22, 16, 28), new CifTuple_T3III(13, 1264, 1284), new CifTuple_T3III(14, 687, 26), new CifTuple_T3III(8, 1286, 1287), new CifTuple_T3III(13, 1264, 710), new CifTuple_T3III(13, 1269, 710), new CifTuple_T3III(9, 1289, 1266), new CifTuple_T3III(8, 1290, 1263), new CifTuple_T3III(13, 1291, 1297), new CifTuple_T3III(14, 1292, 1295), new CifTuple_T3III(15, 1293, 1294), new CifTuple_T3III(16, 41, 26), new CifTuple_T3III(21, 1244, 589), new CifTuple_T3III(15, 1296, -(2)), new CifTuple_T3III(21, 27, 53), new CifTuple_T3III(14, 41, 1261), new CifTuple_T3III(10, 1299, 1366), new CifTuple_T3III(11, 1300, 1344), new CifTuple_T3III(9, 1301, 1333), new CifTuple_T3III(12, 1302, 1324), new CifTuple_T3III(8, 1303, 1316), new CifTuple_T3III(13, 1304, 1311), new CifTuple_T3III(14, 1305, -(1)), new CifTuple_T3III(15, -(1), 1306), new CifTuple_T3III(17, 1307, 1309), new CifTuple_T3III(18, -(1), 1308), new CifTuple_T3III(19, 11, -(1)), new CifTuple_T3III(18, -(1), 1310), new CifTuple_T3III(19, 15, -(1)), new CifTuple_T3III(14, -(1), 1312), new CifTuple_T3III(15, 1313, -(1)), new CifTuple_T3III(17, 1314, -(1)), new CifTuple_T3III(18, -(1), 1315), new CifTuple_T3III(19, 22, -(1)), new CifTuple_T3III(13, -(1), 1317), new CifTuple_T3III(14, 1318, -(1)), new CifTuple_T3III(15, -(1), 1319), new CifTuple_T3III(17, 1320, 1323), new CifTuple_T3III(18, 1321, 1322), new CifTuple_T3III(19, -(1), 34), new CifTuple_T3III(19, 12, -(1)), new CifTuple_T3III(18, -(1), 16), new CifTuple_T3III(8, 1325, 1330), new CifTuple_T3III(13, -(1), 1326), new CifTuple_T3III(14, 1327, -(1)), new CifTuple_T3III(15, 1328, -(1)), new CifTuple_T3III(17, 1329, 1323), new CifTuple_T3III(18, 1321, 12), new CifTuple_T3III(13, -(1), 1331), new CifTuple_T3III(15, 1332, -(1)), new CifTuple_T3III(17, -(1), 367), new CifTuple_T3III(12, 1334, 1342), new CifTuple_T3III(8, 1335, 1337), new CifTuple_T3III(13, 1336, -(1)), new CifTuple_T3III(14, -(1), 1318), new CifTuple_T3III(13, 1338, -(1)), new CifTuple_T3III(14, -(1), 1339), new CifTuple_T3III(15, -(1), 1340), new CifTuple_T3III(17, -(1), 1341), new CifTuple_T3III(18, 325, -(1)), new CifTuple_T3III(13, -(1), 1343), new CifTuple_T3III(17, 324, -(1)), new CifTuple_T3III(9, 1345, 1363), new CifTuple_T3III(12, 1346, 1356), new CifTuple_T3III(8, 1347, 1353), new CifTuple_T3III(13, 1348, -(1)), new CifTuple_T3III(14, 1349, -(1)), new CifTuple_T3III(15, 1350, -(1)), new CifTuple_T3III(16, 1351, 1328), new CifTuple_T3III(17, -(1), 1352), new CifTuple_T3III(18, 188, -(1)), new CifTuple_T3III(13, 1354, -(1)), new CifTuple_T3III(14, 1355, -(1)), new CifTuple_T3III(16, -(1), 1332), new CifTuple_T3III(8, 1357, -(1)), new CifTuple_T3III(13, -(1), 1358), new CifTuple_T3III(14, 1359, -(1)), new CifTuple_T3III(17, 1360, -(1)), new CifTuple_T3III(18, 1361, -(1)), new CifTuple_T3III(19, 1362, -(1)), new CifTuple_T3III(20, -(1), -(2)), new CifTuple_T3III(12, 1364, -(1)), new CifTuple_T3III(14, 1365, -(1)), new CifTuple_T3III(16, -(1), 1343), new CifTuple_T3III(11, 1367, 1383), new CifTuple_T3III(9, 1368, 1382), new CifTuple_T3III(12, 1369, 1378), new CifTuple_T3III(8, 1370, 1376), new CifTuple_T3III(13, 1371, 1374), new CifTuple_T3III(14, 1372, -(1)), new CifTuple_T3III(15, 1373, -(1)), new CifTuple_T3III(16, 1351, -(1)), new CifTuple_T3III(14, -(1), 1375), new CifTuple_T3III(15, -(1), 1328), new CifTuple_T3III(13, -(1), 1377), new CifTuple_T3III(14, -(1), 1332), new CifTuple_T3III(8, 1379, -(1)), new CifTuple_T3III(13, -(1), 1380), new CifTuple_T3III(14, 1381, -(1)), new CifTuple_T3III(17, -(1), 324), new CifTuple_T3III(12, 1342, -(1)), new CifTuple_T3III(9, 1384, -(1)), new CifTuple_T3III(12, 1385, 1356), new CifTuple_T3III(8, 1386, -(1)), new CifTuple_T3III(13, 1387, -(1)), new CifTuple_T3III(14, 1388, -(1)), new CifTuple_T3III(15, 1389, -(1)), new CifTuple_T3III(16, 1351, 1381), new CifTuple_T3III(10, 1391, 1452), new CifTuple_T3III(11, 1392, 1437), new CifTuple_T3III(9, 1393, 1426), new CifTuple_T3III(12, 1394, 1417), new CifTuple_T3III(8, 1395, 1408), new CifTuple_T3III(13, 1396, 1402), new CifTuple_T3III(14, -(1), 1397), new CifTuple_T3III(15, -(1), 1398), new CifTuple_T3III(17, -(1), 1399), new CifTuple_T3III(18, 1400, -(1)), new CifTuple_T3III(19, 1401, -(1)), new CifTuple_T3III(20, -(1), 257), new CifTuple_T3III(14, -(1), 1403), new CifTuple_T3III(15, 1404, -(1)), new CifTuple_T3III(17, 1405, 1401), new CifTuple_T3III(18, -(1), 1406), new CifTuple_T3III(19, 1407, -(1)), new CifTuple_T3III(5, 158, -(1)), new CifTuple_T3III(13, 1409, 1412), new CifTuple_T3III(14, -(1), 1410), new CifTuple_T3III(15, -(1), 1411), new CifTuple_T3III(19, -(2), 257), new CifTuple_T3III(14, 1413, 257), new CifTuple_T3III(15, -(1), 1414), new CifTuple_T3III(17, 1415, 1399), new CifTuple_T3III(18, -(1), 1416), new CifTuple_T3III(19, -(1), 257), new CifTuple_T3III(8, 1418, 1424), new CifTuple_T3III(13, 1419, 1423), new CifTuple_T3III(14, -(1), 1420), new CifTuple_T3III(15, -(1), 1421), new CifTuple_T3III(17, -(1), 1422), new CifTuple_T3III(18, 1401, -(1)), new CifTuple_T3III(14, -(1), 257), new CifTuple_T3III(13, 748, 1425), new CifTuple_T3III(15, -(1), 257), new CifTuple_T3III(12, 1427, 1435), new CifTuple_T3III(8, 1428, 1430), new CifTuple_T3III(13, 1429, 1423), new CifTuple_T3III(14, -(1), 1413), new CifTuple_T3III(13, 1431, 1425), new CifTuple_T3III(14, -(1), 1432), new CifTuple_T3III(15, -(1), 1433), new CifTuple_T3III(17, 324, 1434), new CifTuple_T3III(18, 1362, -(1)), new CifTuple_T3III(13, 1436, -(1)), new CifTuple_T3III(14, -(1), 1425), new CifTuple_T3III(9, 1438, 1449), new CifTuple_T3III(12, 1439, 1446), new CifTuple_T3III(8, 1440, 1445), new CifTuple_T3III(13, 1441, 1444), new CifTuple_T3III(14, -(1), 1442), new CifTuple_T3III(15, -(1), 1443), new CifTuple_T3III(17, 257, -(2)), new CifTuple_T3III(14, -(1), 1443), new CifTuple_T3III(13, 748, 1442), new CifTuple_T3III(8, 1447, 1448), new CifTuple_T3III(13, 748, 751), new CifTuple_T3III(13, 748, 687), new CifTuple_T3III(12, 1450, 1451), new CifTuple_T3III(13, 1441, -(1)), new CifTuple_T3III(13, 748, -(1)), new CifTuple_T3III(11, 1453, 1470), new CifTuple_T3III(9, 1454, 1468), new CifTuple_T3III(12, 1455, 1464), new CifTuple_T3III(8, 1456, 1462), new CifTuple_T3III(13, 1457, 1460), new CifTuple_T3III(14, -(1), 1458), new CifTuple_T3III(15, -(1), 1459), new CifTuple_T3III(18, -(2), 257), new CifTuple_T3III(14, -(1), 1461), new CifTuple_T3III(15, 1459, -(1)), new CifTuple_T3III(13, 748, 1463), new CifTuple_T3III(14, 1458, -(1)), new CifTuple_T3III(8, 1465, 1467), new CifTuple_T3III(13, 748, 1466), new CifTuple_T3III(14, -(1), 1159), new CifTuple_T3III(13, 748, 743), new CifTuple_T3III(12, 1469, 1451), new CifTuple_T3III(13, 1457, -(1)), new CifTuple_T3III(9, 1471, 1451), new CifTuple_T3III(12, 1464, 1446), new CifTuple_T3III(10, 1473, 1557), new CifTuple_T3III(11, 1474, 1534), new CifTuple_T3III(9, 1475, 1520), new CifTuple_T3III(12, 1476, 1500), new CifTuple_T3III(13, 1477, 1492), new CifTuple_T3III(14, 1478, 1482), new CifTuple_T3III(15, -(1), 1479), new CifTuple_T3III(17, 1405, 1480), new CifTuple_T3III(18, -(1), 1481), new CifTuple_T3III(6, 158, -(1)), new CifTuple_T3III(15, 1483, -(1)), new CifTuple_T3III(17, 1484, 1488), new CifTuple_T3III(18, 1485, 1487), new CifTuple_T3III(19, 1486, 1407), new CifTuple_T3III(20, 158, -(1)), new CifTuple_T3III(19, 157, -(1)), new CifTuple_T3III(18, 1489, 1490), new CifTuple_T3III(19, 1486, -(1)), new CifTuple_T3III(19, 1491, -(1)), new CifTuple_T3III(5, 157, -(1)), new CifTuple_T3III(14, 1493, 1496), new CifTuple_T3III(15, 1494, -(1)), new CifTuple_T3III(16, 1495, -(1)), new CifTuple_T3III(17, 1405, -(1)), new CifTuple_T3III(15, 1497, -(1)), new CifTuple_T3III(17, 1498, -(1)), new CifTuple_T3III(18, 1499, -(1)), new CifTuple_T3III(19, -(1), 1481), new CifTuple_T3III(13, 1501, 1517), new CifTuple_T3III(14, 1502, 1510), new CifTuple_T3III(15, 1503, -(1)), new CifTuple_T3III(16, 1504, -(1)), new CifTuple_T3III(17, 1505, 1507), new CifTuple_T3III(18, -(1), 1506), new CifTuple_T3III(19, 866, -(1)), new CifTuple_T3III(18, -(1), 1508), new CifTuple_T3III(19, 1509, -(1)), new CifTuple_T3III(6, -(2), -(1)), new CifTuple_T3III(15, 1511, -(1)), new CifTuple_T3III(17, 188, 1512), new CifTuple_T3III(18, 1513, 1515), new CifTuple_T3III(19, 1514, -(1)), new CifTuple_T3III(20, -(2), 158), new CifTuple_T3III(19, 1516, -(1)), new CifTuple_T3III(6, -(2), 866), new CifTuple_T3III(14, 1518, -(1)), new CifTuple_T3III(15, 1519, -(1)), new CifTuple_T3III(16, 1504, 1495), new CifTuple_T3III(12, 1521, 1533), new CifTuple_T3III(13, 1522, 1530), new CifTuple_T3III(14, 1523, 1526), new CifTuple_T3III(15, 1524, -(1)), new CifTuple_T3III(16, 1525, -(1)), new CifTuple_T3III(17, 204, -(2)), new CifTuple_T3III(15, 1527, 1495), new CifTuple_T3III(17, 1528, -(2)), new CifTuple_T3III(18, -(2), 1529), new CifTuple_T3III(19, -(2), 158), new CifTuple_T3III(14, 1531, -(1)), new CifTuple_T3III(15, 1532, -(1)), new CifTuple_T3III(16, -(2), -(1)), new CifTuple_T3III(13, 1166, -(2)), new CifTuple_T3III(9, 1535, 1556), new CifTuple_T3III(12, 1536, 1550), new CifTuple_T3III(13, 1537, 1547), new CifTuple_T3III(14, 1538, 1543), new CifTuple_T3III(15, 1539, -(1)), new CifTuple_T3III(16, 1540, 1495), new CifTuple_T3III(17, 1541, 1542), new CifTuple_T3III(18, -(1), 866), new CifTuple_T3III(18, -(1), 1509), new CifTuple_T3III(15, 1544, -(1)), new CifTuple_T3III(17, 1545, 1546), new CifTuple_T3III(18, 1513, -(2)), new CifTuple_T3III(18, 188, 1516), new CifTuple_T3III(14, 1548, -(1)), new CifTuple_T3III(15, 1549, -(1)), new CifTuple_T3III(16, 1540, -(1)), new CifTuple_T3III(13, 1551, 1553), new CifTuple_T3III(14, 1548, 1552), new CifTuple_T3III(17, 201, 1546), new CifTuple_T3III(14, 1554, -(1)), new CifTuple_T3III(16, 1540, 1555), new CifTuple_T3III(17, 1541, -(1)), new CifTuple_T3III(12, 1533, -(2)), new CifTuple_T3III(11, 1558, 1574), new CifTuple_T3III(9, 1559, 1556), new CifTuple_T3III(12, 1560, 1571), new CifTuple_T3III(13, 1561, 1569), new CifTuple_T3III(14, 1562, 1565), new CifTuple_T3III(15, 1563, -(1)), new CifTuple_T3III(16, 1564, -(1)), new CifTuple_T3III(17, 1541, 1507), new CifTuple_T3III(15, 1566, -(1)), new CifTuple_T3III(17, 201, 1567), new CifTuple_T3III(18, 188, 1568), new CifTuple_T3III(19, 1516, 158), new CifTuple_T3III(14, 1548, 1570), new CifTuple_T3III(15, -(1), 1495), new CifTuple_T3III(13, 1572, 1553), new CifTuple_T3III(14, 1573, 1552), new CifTuple_T3III(15, 1540, -(1)), new CifTuple_T3III(9, 1575, -(2)), new CifTuple_T3III(12, 1576, 1550), new CifTuple_T3III(13, 1577, 1579), new CifTuple_T3III(14, 1578, 1552), new CifTuple_T3III(15, 1554, -(1)), new CifTuple_T3III(14, 1549, -(1)), new CifTuple_T3III(10, 1581, 1593), new CifTuple_T3III(11, 1582, 1592), new CifTuple_T3III(12, 1583, 1589), new CifTuple_T3III(13, -(1), 1584), new CifTuple_T3III(14, 1585, -(1)), new CifTuple_T3III(15, -(1), 1586), new CifTuple_T3III(17, 1587, 158), new CifTuple_T3III(18, 158, 1588), new CifTuple_T3III(19, 158, -(1)), new CifTuple_T3III(13, -(1), 1590), new CifTuple_T3III(14, 1591, -(1)), new CifTuple_T3III(15, -(1), 158), new CifTuple_T3III(12, 1589, -(1)), new CifTuple_T3III(11, 1592, -(1)), new CifTuple_T3III(11, 1595, 1687), new CifTuple_T3III(12, 1596, 1653), new CifTuple_T3III(8, 1597, 1643), new CifTuple_T3III(13, 1598, 1623), new CifTuple_T3III(14, 1599, 1609), new CifTuple_T3III(15, -(1), 1600), new CifTuple_T3III(17, 1601, 1606), new CifTuple_T3III(18, 1602, 1603), new CifTuple_T3III(19, 1486, 366), new CifTuple_T3III(19, 1604, 1605), new CifTuple_T3III(7, 157, -(1)), new CifTuple_T3III(7, 158, -(1)), new CifTuple_T3III(18, 1602, 1607), new CifTuple_T3III(19, 1608, -(1)), new CifTuple_T3III(7, 266, -(1)), new CifTuple_T3III(15, 1610, 1615), new CifTuple_T3III(17, 1611, 1613), new CifTuple_T3III(18, 1612, -(1)), new CifTuple_T3III(19, -(1), 1604), new CifTuple_T3III(18, 1614, -(1)), new CifTuple_T3III(19, -(1), 157), new CifTuple_T3III(17, 1616, 1619), new CifTuple_T3III(18, 1617, 34), new CifTuple_T3III(19, 1618, 1605), new CifTuple_T3III(20, 34, -(1)), new CifTuple_T3III(18, 1620, 1622), new CifTuple_T3III(19, 1621, 158), new CifTuple_T3III(20, 34, 496), new CifTuple_T3III(19, 1152, -(1)), new CifTuple_T3III(14, 1624, 1637), new CifTuple_T3III(15, 1625, 1635), new CifTuple_T3III(16, 1626, 1631), new CifTuple_T3III(17, 1627, 1629), new CifTuple_T3III(18, 1628, -(1)), new CifTuple_T3III(19, -(1), 1605), new CifTuple_T3III(18, 1630, -(1)), new CifTuple_T3III(19, -(1), 158), new CifTuple_T3III(17, 1632, 1634), new CifTuple_T3III(18, 545, 1633), new CifTuple_T3III(19, 416, -(1)), new CifTuple_T3III(18, 34, 421), new CifTuple_T3III(17, 1636, -(1)), new CifTuple_T3III(18, -(1), 1630), new CifTuple_T3III(15, 1638, -(1)), new CifTuple_T3III(17, 1639, 1641), new CifTuple_T3III(18, 1640, -(1)), new CifTuple_T3III(19, -(1), 1608), new CifTuple_T3III(18, 1642, -(1)), new CifTuple_T3III(19, -(1), 266), new CifTuple_T3III(13, 1644, 1650), new CifTuple_T3III(14, 1645, 1647), new CifTuple_T3III(15, -(1), 1646), new CifTuple_T3III(7, 366, -(1)), new CifTuple_T3III(15, -(1), 1648), new CifTuple_T3III(17, -(2), 1649), new CifTuple_T3III(18, 1513, 188), new CifTuple_T3III(14, 1651, -(1)), new CifTuple_T3III(15, 1652, -(1)), new CifTuple_T3III(16, -(1), 203), new CifTuple_T3III(8, 1654, 1683), new CifTuple_T3III(13, 1655, 1670), new CifTuple_T3III(14, 1656, 1664), new CifTuple_T3III(15, 1657, 1661), new CifTuple_T3III(16, 1658, -(1)), new CifTuple_T3III(17, 1659, 1341), new CifTuple_T3III(18, 1660, -(1)), new CifTuple_T3III(19, -(1), 1025), new CifTuple_T3III(17, 204, 1662), new CifTuple_T3III(18, 1663, 188), new CifTuple_T3III(19, 1514, -(2)), new CifTuple_T3III(15, 1665, 1667), new CifTuple_T3III(17, 1666, 1341), new CifTuple_T3III(18, 1025, -(1)), new CifTuple_T3III(17, -(1), 1668), new CifTuple_T3III(18, 1669, -(1)), new CifTuple_T3III(20, -(1), 34), new CifTuple_T3III(14, 1671, 1682), new CifTuple_T3III(15, 1672, -(1)), new CifTuple_T3III(16, 1673, 1674), new CifTuple_T3III(17, 1666, 367), new CifTuple_T3III(17, 1675, 1679), new CifTuple_T3III(18, 1617, 1676), new CifTuple_T3III(19, 1677, -(1)), new CifTuple_T3III(7, 1678, -(2)), new CifTuple_T3III(5, -(1), 156), new CifTuple_T3III(18, 1680, 1681), new CifTuple_T3III(19, 34, 158), new CifTuple_T3III(19, 421, -(1)), new CifTuple_T3III(15, 1665, -(1)), new CifTuple_T3III(13, 1684, 1650), new CifTuple_T3III(14, 1685, 1686), new CifTuple_T3III(15, -(1), 1025), new CifTuple_T3III(15, -(1), 188), new CifTuple_T3III(12, 1688, 1708), new CifTuple_T3III(8, 1689, 1704), new CifTuple_T3III(13, 1690, 1698), new CifTuple_T3III(14, 1691, 1696), new CifTuple_T3III(15, 1692, 1694), new CifTuple_T3III(16, 1693, 1674), new CifTuple_T3III(17, 402, -(2)), new CifTuple_T3III(17, 1695, -(2)), new CifTuple_T3III(18, 1663, -(2)), new CifTuple_T3III(15, 1697, 34), new CifTuple_T3III(17, 325, -(2)), new CifTuple_T3III(14, 1699, 1697), new CifTuple_T3III(15, 1700, -(1)), new CifTuple_T3III(16, -(2), 1701), new CifTuple_T3III(17, 1702, -(2)), new CifTuple_T3III(18, 1703, -(2)), new CifTuple_T3III(20, -(2), 34), new CifTuple_T3III(13, 1705, -(2)), new CifTuple_T3III(14, 1706, -(2)), new CifTuple_T3III(15, 1707, -(2)), new CifTuple_T3III(16, -(2), 203), new CifTuple_T3III(8, 1709, -(2)), new CifTuple_T3III(13, 1710, -(2)), new CifTuple_T3III(14, 1711, -(2)), new CifTuple_T3III(15, 1712, -(2)), new CifTuple_T3III(16, -(2), 34), new CifTuple_T3III(9, 1714, 1725), new CifTuple_T3III(12, 1715, 1724), new CifTuple_T3III(8, 1716, 1722), new CifTuple_T3III(13, -(1), 1717), new CifTuple_T3III(14, -(1), 1718), new CifTuple_T3III(15, -(1), 1719), new CifTuple_T3III(17, 1720, 158), new CifTuple_T3III(18, 1721, 158), new CifTuple_T3III(19, 1486, 158), new CifTuple_T3III(13, -(1), 1723), new CifTuple_T3III(14, -(1), 1591), new CifTuple_T3III(8, 1722, -(1)), new CifTuple_T3III(12, 1724, -(1)), new CifTuple_T3III(10, 1727, 1773), new CifTuple_T3III(9, 1728, 1764), new CifTuple_T3III(8, 1729, 1755), new CifTuple_T3III(13, 1730, 1747), new CifTuple_T3III(14, 1731, 1738), new CifTuple_T3III(15, 1732, 1733), new CifTuple_T3III(16, -(1), 158), new CifTuple_T3III(17, 1734, 1737), new CifTuple_T3III(18, 1735, 365), new CifTuple_T3III(19, 1736, -(1)), new CifTuple_T3III(20, -(1), 158), new CifTuple_T3III(18, -(1), 365), new CifTuple_T3III(15, 1739, 1742), new CifTuple_T3III(17, 1740, 1741), new CifTuple_T3III(18, 1735, -(1)), new CifTuple_T3III(18, -(1), 1614), new CifTuple_T3III(17, 1743, 1745), new CifTuple_T3III(18, 1744, 157), new CifTuple_T3III(19, 158, 366), new CifTuple_T3III(18, 1489, 1746), new CifTuple_T3III(19, 266, 473), new CifTuple_T3III(14, 1748, 1751), new CifTuple_T3III(15, 1749, -(1)), new CifTuple_T3III(16, 1750, -(1)), new CifTuple_T3III(17, 1740, 1636), new CifTuple_T3III(15, 1752, 1754), new CifTuple_T3III(17, 1740, 1753), new CifTuple_T3III(18, -(1), 1642), new CifTuple_T3III(17, 1740, -(1)), new CifTuple_T3III(13, 1756, 1760), new CifTuple_T3III(14, 1757, 1758), new CifTuple_T3III(15, 1732, 366), new CifTuple_T3III(15, -(1), 1759), new CifTuple_T3III(18, 365, -(2)), new CifTuple_T3III(14, 1761, -(1)), new CifTuple_T3III(15, -(1), 1762), new CifTuple_T3III(17, 1734, 1763), new CifTuple_T3III(18, -(1), 473), new CifTuple_T3III(8, 1765, 1767), new CifTuple_T3III(13, 1766, -(1)), new CifTuple_T3III(14, 1757, 1761), new CifTuple_T3III(13, 1768, 1771), new CifTuple_T3III(14, -(1), 1769), new CifTuple_T3III(15, -(1), 1770), new CifTuple_T3III(17, 1737, 324), new CifTuple_T3III(14, 1772, -(1)), new CifTuple_T3III(15, -(1), 366), new CifTuple_T3III(9, 1774, 1792), new CifTuple_T3III(8, 1775, 1788), new CifTuple_T3III(13, 1776, 1782), new CifTuple_T3III(14, 1777, 1780), new CifTuple_T3III(15, 1732, 1778), new CifTuple_T3III(17, -(1), 1779), new CifTuple_T3III(18, -(1), 366), new CifTuple_T3III(15, 1781, 1779), new CifTuple_T3III(17, -(1), 1741), new CifTuple_T3III(14, 1783, 1786), new CifTuple_T3III(15, 1784, -(1)), new CifTuple_T3III(16, 1785, -(1)), new CifTuple_T3III(17, -(1), 1636), new CifTuple_T3III(15, 1787, 1754), new CifTuple_T3III(17, -(1), 1753), new CifTuple_T3III(13, 1789, 1791), new CifTuple_T3III(14, -(1), 1790), new CifTuple_T3III(15, -(1), 1779), new CifTuple_T3III(14, 1790, -(1)), new CifTuple_T3III(13, 1789, -(1)), new CifTuple_T3III(10, 1794, 1851), new CifTuple_T3III(11, 1795, 1830), new CifTuple_T3III(9, 1796, 1822), new CifTuple_T3III(8, 1797, 1812), new CifTuple_T3III(13, 1798, 1802), new CifTuple_T3III(14, -(1), 1799), new CifTuple_T3III(15, 1800, -(1)), new CifTuple_T3III(17, 1801, -(1)), new CifTuple_T3III(18, -(1), 34), new CifTuple_T3III(14, 1803, 1806), new CifTuple_T3III(15, 1804, -(1)), new CifTuple_T3III(17, 1805, -(1)), new CifTuple_T3III(18, -(1), 1321), new CifTuple_T3III(15, 1807, -(1)), new CifTuple_T3III(17, 1808, 1811), new CifTuple_T3III(18, 1809, 1810), new CifTuple_T3III(19, -(1), 12), new CifTuple_T3III(19, -(1), 514), new CifTuple_T3III(18, -(1), 12), new CifTuple_T3III(13, 1813, 1817), new CifTuple_T3III(14, -(1), 1814), new CifTuple_T3III(15, 1815, -(1)), new CifTuple_T3III(17, 297, 1816), new CifTuple_T3III(18, 34, -(1)), new CifTuple_T3III(14, 1818, 1820), new CifTuple_T3III(15, 1819, -(1)), new CifTuple_T3III(17, -(2), 34), new CifTuple_T3III(15, 1821, -(1)), new CifTuple_T3III(17, -(2), 514), new CifTuple_T3III(8, 1823, 1826), new CifTuple_T3III(13, 1798, 1824), new CifTuple_T3III(14, 1825, 1135), new CifTuple_T3III(15, 34, -(1)), new CifTuple_T3III(13, 1827, 1158), new CifTuple_T3III(15, 1828, -(1)), new CifTuple_T3III(17, 1829, -(1)), new CifTuple_T3III(18, -(1), 514), new CifTuple_T3III(9, 1831, 1847), new CifTuple_T3III(8, 1832, 1843), new CifTuple_T3III(13, 1833, 1839), new CifTuple_T3III(14, -(1), 1834), new CifTuple_T3III(15, 1835, -(1)), new CifTuple_T3III(17, 1836, 1837), new CifTuple_T3III(18, 325, -(2)), new CifTuple_T3III(18, -(1), 1838), new CifTuple_T3III(6, 12, -(2)), new CifTuple_T3III(14, 1840, 1842), new CifTuple_T3III(15, 1841, -(1)), new CifTuple_T3III(17, 1836, 16), new CifTuple_T3III(15, 402, -(1)), new CifTuple_T3III(13, 1844, 1158), new CifTuple_T3III(14, -(1), 1845), new CifTuple_T3III(15, 1846, -(1)), new CifTuple_T3III(17, 297, 367), new CifTuple_T3III(13, 1848, -(2)), new CifTuple_T3III(14, -(1), 1849), new CifTuple_T3III(15, 1850, -(1)), new CifTuple_T3III(17, 297, -(1)), new CifTuple_T3III(11, 1852, 1865), new CifTuple_T3III(9, 1853, 1864), new CifTuple_T3III(8, 1854, 1863), new CifTuple_T3III(13, 1855, 1860), new CifTuple_T3III(14, -(1), 1856), new CifTuple_T3III(15, 1857, -(1)), new CifTuple_T3III(17, 1836, 1858), new CifTuple_T3III(18, -(1), 1859), new CifTuple_T3III(19, 1838, -(1)), new CifTuple_T3III(14, 1840, 1861), new CifTuple_T3III(15, 1862, -(1)), new CifTuple_T3III(17, -(2), 301), new CifTuple_T3III(13, 1845, 1159), new CifTuple_T3III(13, 1849, 1166), new CifTuple_T3III(9, 1866, 1870), new CifTuple_T3III(8, 1867, 1869), new CifTuple_T3III(13, 1833, 1868), new CifTuple_T3III(14, 1841, 1842), new CifTuple_T3III(13, 1844, 1159), new CifTuple_T3III(13, 1848, 1166)];
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
     * Evaluates algebraic variable "bdd_value0".
     *
     * @return The evaluation result.
     */
    bdd_value0_() {
        return (spec.dep_1_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value1".
     *
     * @return The evaluation result.
     */
    bdd_value1_() {
        return (spec.dep_2_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value2".
     *
     * @return The evaluation result.
     */
    bdd_value2_() {
        return (spec.dep_3_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value3".
     *
     * @return The evaluation result.
     */
    bdd_value3_() {
        return (spec.invariance_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value4".
     *
     * @return The evaluation result.
     */
    bdd_value4_() {
        return (spec.mut_ex_l1_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value5".
     *
     * @return The evaluation result.
     */
    bdd_value5_() {
        return (spec.mut_ex_l2_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value6".
     *
     * @return The evaluation result.
     */
    bdd_value6_() {
        return (spec.mut_ex_l3_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value7".
     *
     * @return The evaluation result.
     */
    bdd_value7_() {
        return (spec.mut_ex_l4_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value8".
     *
     * @return The evaluation result.
     */
    bdd_value8_() {
        return (spec.mut_ex_l5_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value9".
     *
     * @return The evaluation result.
     */
    bdd_value9_() {
        return (spec.mut_ex_l6_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value10".
     *
     * @return The evaluation result.
     */
    bdd_value10_() {
        return (spec.mut_ex_l7_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value11".
     *
     * @return The evaluation result.
     */
    bdd_value11_() {
        return (spec.mut_ex_l8_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value12".
     *
     * @return The evaluation result.
     */
    bdd_value12_() {
        return (spec.mut_ex_l9_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value13".
     *
     * @return The evaluation result.
     */
    bdd_value13_() {
        return (((spec.R1_) == (spec.specEnum._l1)) || ((spec.R1_) == (spec.specEnum._l3))) || (((spec.R1_) == (spec.specEnum._l5)) || (((spec.R1_) == (spec.specEnum._l7)) || ((spec.R1_) == (spec.specEnum._l9))));
    }

    /**
     * Evaluates algebraic variable "bdd_value14".
     *
     * @return The evaluation result.
     */
    bdd_value14_() {
        return (((spec.R1_) == (spec.specEnum._l2)) || ((spec.R1_) == (spec.specEnum._l3))) || (((spec.R1_) == (spec.specEnum._l6)) || ((spec.R1_) == (spec.specEnum._l7)));
    }

    /**
     * Evaluates algebraic variable "bdd_value15".
     *
     * @return The evaluation result.
     */
    bdd_value15_() {
        return (((spec.R1_) == (spec.specEnum._l4)) || ((spec.R1_) == (spec.specEnum._l5))) || (((spec.R1_) == (spec.specEnum._l6)) || ((spec.R1_) == (spec.specEnum._l7)));
    }

    /**
     * Evaluates algebraic variable "bdd_value16".
     *
     * @return The evaluation result.
     */
    bdd_value16_() {
        return ((spec.R1_) == (spec.specEnum._l8)) || ((spec.R1_) == (spec.specEnum._l9));
    }

    /**
     * Evaluates algebraic variable "bdd_value17".
     *
     * @return The evaluation result.
     */
    bdd_value17_() {
        return (((spec.R2_) == (spec.specEnum._l1)) || ((spec.R2_) == (spec.specEnum._l3))) || (((spec.R2_) == (spec.specEnum._l5)) || (((spec.R2_) == (spec.specEnum._l7)) || ((spec.R2_) == (spec.specEnum._l9))));
    }

    /**
     * Evaluates algebraic variable "bdd_value18".
     *
     * @return The evaluation result.
     */
    bdd_value18_() {
        return (((spec.R2_) == (spec.specEnum._l2)) || ((spec.R2_) == (spec.specEnum._l3))) || (((spec.R2_) == (spec.specEnum._l6)) || ((spec.R2_) == (spec.specEnum._l7)));
    }

    /**
     * Evaluates algebraic variable "bdd_value19".
     *
     * @return The evaluation result.
     */
    bdd_value19_() {
        return (((spec.R2_) == (spec.specEnum._l4)) || ((spec.R2_) == (spec.specEnum._l5))) || (((spec.R2_) == (spec.specEnum._l6)) || ((spec.R2_) == (spec.specEnum._l7)));
    }

    /**
     * Evaluates algebraic variable "bdd_value20".
     *
     * @return The evaluation result.
     */
    bdd_value20_() {
        return ((spec.R2_) == (spec.specEnum._l8)) || ((spec.R2_) == (spec.specEnum._l9));
    }

    /**
     * Evaluates algebraic variable "bdd_value21".
     *
     * @return The evaluation result.
     */
    bdd_value21_() {
        return (((spec.R3_) == (spec.specEnum._l1)) || ((spec.R3_) == (spec.specEnum._l3))) || (((spec.R3_) == (spec.specEnum._l5)) || (((spec.R3_) == (spec.specEnum._l7)) || ((spec.R3_) == (spec.specEnum._l9))));
    }

    /**
     * Evaluates algebraic variable "bdd_value22".
     *
     * @return The evaluation result.
     */
    bdd_value22_() {
        return (((spec.R3_) == (spec.specEnum._l2)) || ((spec.R3_) == (spec.specEnum._l3))) || (((spec.R3_) == (spec.specEnum._l6)) || ((spec.R3_) == (spec.specEnum._l7)));
    }

    /**
     * Evaluates algebraic variable "bdd_value23".
     *
     * @return The evaluation result.
     */
    bdd_value23_() {
        return (((spec.R3_) == (spec.specEnum._l4)) || ((spec.R3_) == (spec.specEnum._l5))) || (((spec.R3_) == (spec.specEnum._l6)) || ((spec.R3_) == (spec.specEnum._l7)));
    }

    /**
     * Evaluates algebraic variable "bdd_value24".
     *
     * @return The evaluation result.
     */
    bdd_value24_() {
        return ((spec.R3_) == (spec.specEnum._l8)) || ((spec.R3_) == (spec.specEnum._l9));
    }

    /**
     * Evaluates algebraic variable "bdd_values".
     *
     * @return The evaluation result.
     */
    bdd_values_() {
        return [spec.bdd_value0_(), spec.bdd_value1_(), spec.bdd_value2_(), spec.bdd_value3_(), spec.bdd_value4_(), spec.bdd_value5_(), spec.bdd_value6_(), spec.bdd_value7_(), spec.bdd_value8_(), spec.bdd_value9_(), spec.bdd_value10_(), spec.bdd_value11_(), spec.bdd_value12_(), spec.bdd_value13_(), spec.bdd_value14_(), spec.bdd_value15_(), spec.bdd_value16_(), spec.bdd_value17_(), spec.bdd_value18_(), spec.bdd_value19_(), spec.bdd_value20_(), spec.bdd_value21_(), spec.bdd_value22_(), spec.bdd_value23_(), spec.bdd_value24_()];
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
