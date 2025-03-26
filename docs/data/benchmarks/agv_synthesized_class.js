/** Tuples. */


            /** Tuple class for CIF tuple type representative "tuple(int[0..25]; int[-2..352]; int[-2..351])". */
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
        _l7: Symbol("l7")
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
        "AGV1.e10",
        "AGV1.e11",
        "AGV1.e12",
        "AGV1.e13",
        "AGV2.e18",
        "AGV2.e20",
        "AGV2.e21",
        "AGV2.e22",
        "AGV2.e23",
        "AGV2.e24",
        "AGV2.e26",
        "AGV2.e28",
        "AGV3.e31",
        "AGV3.e32",
        "AGV3.e33",
        "AGV3.e34",
        "AGV4.e40",
        "AGV4.e41",
        "AGV4.e42",
        "AGV4.e43",
        "AGV4.e44",
        "AGV4.e46",
        "AGV5.e50",
        "AGV5.e51",
        "AGV5.e52",
        "AGV5.e53"
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


    /** Discrete variable "AGV1". */
    AGV1_;

    /** Discrete variable "AGV2". */
    AGV2_;

    /** Discrete variable "AGV3". */
    AGV3_;

    /** Discrete variable "AGV4". */
    AGV4_;

    /** Discrete variable "AGV5". */
    AGV5_;

    /** Discrete variable "IPSSPEC". */
    IPSSPEC_;

    /** Discrete variable "WS1SPEC". */
    WS1SPEC_;

    /** Discrete variable "WS2SPEC". */
    WS2SPEC_;

    /** Discrete variable "WS3SPEC". */
    WS3SPEC_;

    /** Discrete variable "Z1SPEC". */
    Z1SPEC_;

    /** Discrete variable "Z2SPEC". */
    Z2SPEC_;

    /** Discrete variable "Z3SPEC". */
    Z3SPEC_;

    /** Discrete variable "Z4SPEC". */
    Z4SPEC_;


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

            // Event "AGV1.e10".
            edgeExecuted |= this.execEdge0();

            // Event "AGV1.e12".
            edgeExecuted |= this.execEdge1();

            // Event "AGV2.e18".
            edgeExecuted |= this.execEdge2();

            // Event "AGV2.e20".
            edgeExecuted |= this.execEdge3();

            // Event "AGV2.e22".
            edgeExecuted |= this.execEdge4();

            // Event "AGV2.e24".
            edgeExecuted |= this.execEdge5();

            // Event "AGV2.e26".
            edgeExecuted |= this.execEdge6();

            // Event "AGV2.e28".
            edgeExecuted |= this.execEdge7();

            // Event "AGV3.e32".
            edgeExecuted |= this.execEdge8();

            // Event "AGV3.e34".
            edgeExecuted |= this.execEdge9();

            // Event "AGV4.e40".
            edgeExecuted |= this.execEdge10();

            // Event "AGV4.e42".
            edgeExecuted |= this.execEdge11();

            // Event "AGV4.e44".
            edgeExecuted |= this.execEdge12();

            // Event "AGV4.e46".
            edgeExecuted |= this.execEdge13();

            // Event "AGV5.e50".
            edgeExecuted |= this.execEdge14();

            // Event "AGV5.e52".
            edgeExecuted |= this.execEdge15();

            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Execute controllable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;

            // Event "AGV1.e11".
            edgeExecuted |= this.execEdge16();

            // Event "AGV1.e13".
            edgeExecuted |= this.execEdge17();

            // Event "AGV2.e21".
            edgeExecuted |= this.execEdge18();

            // Event "AGV2.e23".
            edgeExecuted |= this.execEdge19();

            // Event "AGV3.e31".
            edgeExecuted |= this.execEdge20();

            // Event "AGV3.e33".
            edgeExecuted |= this.execEdge21();

            // Event "AGV4.e41".
            edgeExecuted |= this.execEdge22();

            // Event "AGV4.e43".
            edgeExecuted |= this.execEdge23();

            // Event "AGV5.e51".
            edgeExecuted |= this.execEdge24();

            // Event "AGV5.e53".
            edgeExecuted |= this.execEdge25();

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
     * Execute code for edge with index 0 and event "AGV1.e10".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = ((spec.AGV1_) == (spec.specEnum._l1)) && (((spec.IPSSPEC_) == (spec.specEnum._l0)) && ((spec.Z1SPEC_) == (spec.specEnum._l1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        spec.AGV1_ = spec.specEnum._l2;
        spec.IPSSPEC_ = spec.specEnum._l1;
        spec.Z1SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "AGV1.e12".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = ((spec.AGV1_) == (spec.specEnum._l3)) && (((spec.WS2SPEC_) == (spec.specEnum._l0)) && ((spec.Z1SPEC_) == (spec.specEnum._l1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        spec.AGV1_ = spec.specEnum._l0;
        spec.WS2SPEC_ = spec.specEnum._l1;
        spec.Z1SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "AGV2.e18".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = ((spec.AGV2_) == (spec.specEnum._l1)) && (((spec.Z2SPEC_) == (spec.specEnum._l0)) && ((spec.Z3SPEC_) == (spec.specEnum._l1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.AGV2_ = spec.specEnum._l2;
        spec.Z2SPEC_ = spec.specEnum._l1;
        spec.Z3SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "AGV2.e20".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = ((spec.AGV2_) == (spec.specEnum._l2)) && (((spec.Z1SPEC_) == (spec.specEnum._l0)) && ((spec.Z2SPEC_) == (spec.specEnum._l1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.AGV2_ = spec.specEnum._l3;
        spec.Z1SPEC_ = spec.specEnum._l2;
        spec.Z2SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "AGV2.e22".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = ((spec.AGV2_) == (spec.specEnum._l3)) && (((spec.IPSSPEC_) == (spec.specEnum._l0)) && ((spec.Z1SPEC_) == (spec.specEnum._l2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.AGV2_ = spec.specEnum._l4;
        spec.IPSSPEC_ = spec.specEnum._l2;
        spec.Z1SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "AGV2.e24".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = ((spec.AGV2_) == (spec.specEnum._l5)) && (((spec.Z1SPEC_) == (spec.specEnum._l2)) && ((spec.Z2SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        spec.AGV2_ = spec.specEnum._l6;
        spec.Z1SPEC_ = spec.specEnum._l0;
        spec.Z2SPEC_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "AGV2.e26".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = ((spec.AGV2_) == (spec.specEnum._l6)) && (((spec.Z2SPEC_) == (spec.specEnum._l1)) && ((spec.Z3SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        spec.AGV2_ = spec.specEnum._l7;
        spec.Z2SPEC_ = spec.specEnum._l0;
        spec.Z3SPEC_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "AGV2.e28".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = ((spec.AGV2_) == (spec.specEnum._l7)) && (((spec.WS3SPEC_) == (spec.specEnum._l0)) && ((spec.Z3SPEC_) == (spec.specEnum._l1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        spec.AGV2_ = spec.specEnum._l0;
        spec.WS3SPEC_ = spec.specEnum._l1;
        spec.Z3SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "AGV3.e32".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = ((spec.AGV3_) == (spec.specEnum._l3)) && ((((spec.WS1SPEC_) == (spec.specEnum._l0)) || ((spec.WS1SPEC_) == (spec.specEnum._l2))) && ((spec.Z2SPEC_) == (spec.specEnum._l2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(13, true);
        if (this.doInfoEvent) this.infoEvent(13, true);

        spec.AGV3_ = spec.specEnum._l0;
        if ((spec.WS1SPEC_) == (spec.specEnum._l0)) {
            spec.WS1SPEC_ = spec.specEnum._l1;
        } else if ((spec.WS1SPEC_) == (spec.specEnum._l2)) {
            spec.WS1SPEC_ = spec.specEnum._l3;
        }
        spec.Z2SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(13, false);
        if (this.doInfoPrintOutput) this.printOutput(13, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "AGV3.e34".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = ((spec.AGV3_) == (spec.specEnum._l1)) && (((spec.WS2SPEC_) == (spec.specEnum._l1)) && ((spec.Z2SPEC_) == (spec.specEnum._l2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(15, true);
        if (this.doInfoEvent) this.infoEvent(15, true);

        spec.AGV3_ = spec.specEnum._l2;
        spec.WS2SPEC_ = spec.specEnum._l0;
        spec.Z2SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(15, false);
        if (this.doInfoPrintOutput) this.printOutput(15, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "AGV4.e40".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = ((spec.AGV4_) == (spec.specEnum._l1)) && (((spec.Z3SPEC_) == (spec.specEnum._l2)) && ((spec.Z4SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(16, true);
        if (this.doInfoEvent) this.infoEvent(16, true);

        spec.AGV4_ = spec.specEnum._l2;
        spec.Z3SPEC_ = spec.specEnum._l0;
        spec.Z4SPEC_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(16, false);
        if (this.doInfoPrintOutput) this.printOutput(16, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "AGV4.e42".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = ((spec.AGV4_) == (spec.specEnum._l2)) && (((spec.WS3SPEC_) == (spec.specEnum._l1)) && ((spec.Z4SPEC_) == (spec.specEnum._l1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(18, true);
        if (this.doInfoEvent) this.infoEvent(18, true);

        spec.AGV4_ = spec.specEnum._l3;
        spec.WS3SPEC_ = spec.specEnum._l0;
        spec.Z4SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(18, false);
        if (this.doInfoPrintOutput) this.printOutput(18, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 12 and event "AGV4.e44".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge12() {
        var guard = ((spec.AGV4_) == (spec.specEnum._l4)) && (((spec.Z3SPEC_) == (spec.specEnum._l0)) && ((spec.Z4SPEC_) == (spec.specEnum._l1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(20, true);
        if (this.doInfoEvent) this.infoEvent(20, true);

        spec.AGV4_ = spec.specEnum._l5;
        spec.Z3SPEC_ = spec.specEnum._l2;
        spec.Z4SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(20, false);
        if (this.doInfoPrintOutput) this.printOutput(20, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 13 and event "AGV4.e46".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge13() {
        var guard = ((spec.AGV4_) == (spec.specEnum._l5)) && ((((spec.WS1SPEC_) == (spec.specEnum._l0)) || ((spec.WS1SPEC_) == (spec.specEnum._l1))) && ((spec.Z3SPEC_) == (spec.specEnum._l2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(21, true);
        if (this.doInfoEvent) this.infoEvent(21, true);

        spec.AGV4_ = spec.specEnum._l0;
        if ((spec.WS1SPEC_) == (spec.specEnum._l0)) {
            spec.WS1SPEC_ = spec.specEnum._l2;
        } else if ((spec.WS1SPEC_) == (spec.specEnum._l1)) {
            spec.WS1SPEC_ = spec.specEnum._l3;
        }
        spec.Z3SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(21, false);
        if (this.doInfoPrintOutput) this.printOutput(21, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 14 and event "AGV5.e50".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge14() {
        var guard = ((spec.AGV5_) == (spec.specEnum._l1)) && (((spec.WS1SPEC_) == (spec.specEnum._l3)) && ((spec.Z4SPEC_) == (spec.specEnum._l2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(22, true);
        if (this.doInfoEvent) this.infoEvent(22, true);

        spec.AGV5_ = spec.specEnum._l2;
        spec.WS1SPEC_ = spec.specEnum._l0;
        spec.Z4SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(22, false);
        if (this.doInfoPrintOutput) this.printOutput(22, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 15 and event "AGV5.e52".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge15() {
        var guard = ((spec.AGV5_) == (spec.specEnum._l3)) && ((spec.Z4SPEC_) == (spec.specEnum._l2));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(24, true);
        if (this.doInfoEvent) this.infoEvent(24, true);

        spec.AGV5_ = spec.specEnum._l0;
        spec.Z4SPEC_ = spec.specEnum._l0;

        if (this.doInfoEvent) this.infoEvent(24, false);
        if (this.doInfoPrintOutput) this.printOutput(24, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 16 and event "AGV1.e11".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge16() {
        var guard = ((spec.AGV1_) == (spec.specEnum._l0)) && ((spec.bdd_eval_(0, spec.bdd_values_())) && ((spec.Z1SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        spec.AGV1_ = spec.specEnum._l1;
        spec.Z1SPEC_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 17 and event "AGV1.e13".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge17() {
        var guard = (((spec.AGV1_) == (spec.specEnum._l2)) && ((spec.IPSSPEC_) == (spec.specEnum._l1))) && ((spec.bdd_eval_(62, spec.bdd_values_())) && ((spec.Z1SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        spec.AGV1_ = spec.specEnum._l3;
        spec.IPSSPEC_ = spec.specEnum._l0;
        spec.Z1SPEC_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 18 and event "AGV2.e21".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge18() {
        var guard = ((spec.AGV2_) == (spec.specEnum._l0)) && ((spec.bdd_eval_(63, spec.bdd_values_())) && ((spec.Z3SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.AGV2_ = spec.specEnum._l1;
        spec.Z3SPEC_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 19 and event "AGV2.e23".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge19() {
        var guard = (((spec.AGV2_) == (spec.specEnum._l4)) && ((spec.IPSSPEC_) == (spec.specEnum._l2))) && ((spec.bdd_eval_(94, spec.bdd_values_())) && ((spec.Z1SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.AGV2_ = spec.specEnum._l5;
        spec.IPSSPEC_ = spec.specEnum._l0;
        spec.Z1SPEC_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 20 and event "AGV3.e31".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge20() {
        var guard = ((spec.AGV3_) == (spec.specEnum._l2)) && ((spec.bdd_eval_(139, spec.bdd_values_())) && ((spec.Z2SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(12, true);
        if (this.doInfoEvent) this.infoEvent(12, true);

        spec.AGV3_ = spec.specEnum._l3;
        spec.Z2SPEC_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(12, false);
        if (this.doInfoPrintOutput) this.printOutput(12, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 21 and event "AGV3.e33".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge21() {
        var guard = ((spec.AGV3_) == (spec.specEnum._l0)) && ((spec.bdd_eval_(100, spec.bdd_values_())) && ((spec.Z2SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(14, true);
        if (this.doInfoEvent) this.infoEvent(14, true);

        spec.AGV3_ = spec.specEnum._l1;
        spec.Z2SPEC_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(14, false);
        if (this.doInfoPrintOutput) this.printOutput(14, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 22 and event "AGV4.e41".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge22() {
        var guard = ((spec.AGV4_) == (spec.specEnum._l0)) && ((spec.bdd_eval_(154, spec.bdd_values_())) && ((spec.Z3SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(17, true);
        if (this.doInfoEvent) this.infoEvent(17, true);

        spec.AGV4_ = spec.specEnum._l1;
        spec.Z3SPEC_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(17, false);
        if (this.doInfoPrintOutput) this.printOutput(17, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 23 and event "AGV4.e43".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge23() {
        var guard = ((spec.AGV4_) == (spec.specEnum._l3)) && ((spec.bdd_eval_(200, spec.bdd_values_())) && ((spec.Z4SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(19, true);
        if (this.doInfoEvent) this.infoEvent(19, true);

        spec.AGV4_ = spec.specEnum._l4;
        spec.Z4SPEC_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(19, false);
        if (this.doInfoPrintOutput) this.printOutput(19, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 24 and event "AGV5.e51".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge24() {
        var guard = ((spec.AGV5_) == (spec.specEnum._l0)) && ((spec.bdd_eval_(215, spec.bdd_values_())) && ((spec.Z4SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(23, true);
        if (this.doInfoEvent) this.infoEvent(23, true);

        spec.AGV5_ = spec.specEnum._l1;
        spec.Z4SPEC_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(23, false);
        if (this.doInfoPrintOutput) this.printOutput(23, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 25 and event "AGV5.e53".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge25() {
        var guard = ((spec.AGV5_) == (spec.specEnum._l2)) && ((spec.bdd_eval_(291, spec.bdd_values_())) && ((spec.Z4SPEC_) == (spec.specEnum._l0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(25, true);
        if (this.doInfoEvent) this.infoEvent(25, true);

        spec.AGV5_ = spec.specEnum._l3;
        spec.Z4SPEC_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(25, false);
        if (this.doInfoPrintOutput) this.printOutput(25, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /** Initializes the state. */
    initState() {
        // Initialize constants, if not yet done so.
        if (!this.constantsInitialized) {
            this.constantsInitialized = true;
            spec.bdd_nodes_ = [new CifTuple_T3III(12, 1, -(2)), new CifTuple_T3III(13, 2, -(2)), new CifTuple_T3III(16, 3, 7), new CifTuple_T3III(2, 4, 6), new CifTuple_T3III(3, -(1), 5), new CifTuple_T3III(4, -(2), -(1)), new CifTuple_T3III(3, -(2), -(1)), new CifTuple_T3III(2, 8, 57), new CifTuple_T3III(3, 9, 53), new CifTuple_T3III(20, 10, -(2)), new CifTuple_T3III(21, 11, 49), new CifTuple_T3III(6, 12, 37), new CifTuple_T3III(22, 13, 35), new CifTuple_T3III(23, 14, 28), new CifTuple_T3III(14, -(1), 15), new CifTuple_T3III(15, 16, 24), new CifTuple_T3III(17, 17, 22), new CifTuple_T3III(7, 18, -(1)), new CifTuple_T3III(9, 19, -(1)), new CifTuple_T3III(24, 20, -(2)), new CifTuple_T3III(25, -(1), 21), new CifTuple_T3III(10, -(2), -(1)), new CifTuple_T3III(7, 23, -(1)), new CifTuple_T3III(8, 18, -(1)), new CifTuple_T3III(17, 25, 26), new CifTuple_T3III(7, 19, -(1)), new CifTuple_T3III(7, 27, -(1)), new CifTuple_T3III(8, 19, -(1)), new CifTuple_T3III(14, -(1), 29), new CifTuple_T3III(15, 30, 34), new CifTuple_T3III(17, 31, 32), new CifTuple_T3III(7, -(2), 19), new CifTuple_T3III(7, -(2), 33), new CifTuple_T3III(9, -(1), 19), new CifTuple_T3III(17, 19, 25), new CifTuple_T3III(14, -(1), 36), new CifTuple_T3III(15, -(2), 19), new CifTuple_T3III(22, 38, 48), new CifTuple_T3III(23, 39, 44), new CifTuple_T3III(14, 15, 40), new CifTuple_T3III(15, 41, -(1)), new CifTuple_T3III(17, 42, -(1)), new CifTuple_T3III(7, 43, -(1)), new CifTuple_T3III(9, -(2), -(1)), new CifTuple_T3III(14, 29, 45), new CifTuple_T3III(15, -(1), 46), new CifTuple_T3III(17, -(2), 47), new CifTuple_T3III(7, -(2), -(1)), new CifTuple_T3III(14, 36, -(2)), new CifTuple_T3III(5, -(2), 50), new CifTuple_T3III(6, -(1), 51), new CifTuple_T3III(22, 52, 36), new CifTuple_T3III(23, 15, 29), new CifTuple_T3III(4, -(2), 54), new CifTuple_T3III(6, 55, 56), new CifTuple_T3III(14, -(1), 25), new CifTuple_T3III(14, 25, -(1)), new CifTuple_T3III(3, -(2), 58), new CifTuple_T3III(20, 59, -(2)), new CifTuple_T3III(21, 54, 60), new CifTuple_T3III(5, -(2), 61), new CifTuple_T3III(6, -(1), 25), new CifTuple_T3III(16, -(1), -(2)), new CifTuple_T3III(0, 64, -(2)), new CifTuple_T3III(1, 65, -(2)), new CifTuple_T3III(12, 66, -(2)), new CifTuple_T3III(13, 67, -(2)), new CifTuple_T3III(18, 68, -(2)), new CifTuple_T3III(19, 69, -(2)), new CifTuple_T3III(16, 70, 90), new CifTuple_T3III(20, 71, -(2)), new CifTuple_T3III(21, 72, -(2)), new CifTuple_T3III(6, 73, 85), new CifTuple_T3III(14, 74, 83), new CifTuple_T3III(15, 75, 81), new CifTuple_T3III(17, 76, 78), new CifTuple_T3III(7, 77, -(1)), new CifTuple_T3III(9, -(1), -(2)), new CifTuple_T3III(7, 79, -(1)), new CifTuple_T3III(8, 80, -(1)), new CifTuple_T3III(9, 19, -(2)), new CifTuple_T3III(17, -(1), 82), new CifTuple_T3III(7, 27, -(2)), new CifTuple_T3III(15, 75, 84), new CifTuple_T3III(17, -(1), 26), new CifTuple_T3III(14, 75, 86), new CifTuple_T3III(15, 87, -(1)), new CifTuple_T3III(17, 76, 88), new CifTuple_T3III(7, 89, -(1)), new CifTuple_T3III(8, 77, -(1)), new CifTuple_T3III(20, 91, -(2)), new CifTuple_T3III(21, 92, -(2)), new CifTuple_T3III(6, 93, 85), new CifTuple_T3III(14, 75, 83), new CifTuple_T3III(21, 95, -(2)), new CifTuple_T3III(23, 96, -(2)), new CifTuple_T3III(14, 97, 98), new CifTuple_T3III(17, 76, -(2)), new CifTuple_T3III(15, 97, 99), new CifTuple_T3III(17, -(1), -(2)), new CifTuple_T3III(0, 101, 138), new CifTuple_T3III(1, 102, 136), new CifTuple_T3III(12, 103, 135), new CifTuple_T3III(13, 104, 128), new CifTuple_T3III(18, 105, 126), new CifTuple_T3III(19, 106, 109), new CifTuple_T3III(16, -(2), 107), new CifTuple_T3III(2, 12, 108), new CifTuple_T3III(3, -(2), 55), new CifTuple_T3III(16, -(2), 110), new CifTuple_T3III(2, 111, 116), new CifTuple_T3III(22, 112, 35), new CifTuple_T3III(23, 113, 28), new CifTuple_T3III(14, -(1), 114), new CifTuple_T3III(15, 115, 24), new CifTuple_T3III(17, 42, 22), new CifTuple_T3III(3, -(2), 117), new CifTuple_T3III(4, 118, 55), new CifTuple_T3III(23, 119, 123), new CifTuple_T3III(14, -(1), 120), new CifTuple_T3III(15, 121, 122), new CifTuple_T3III(17, 17, -(1)), new CifTuple_T3III(17, 25, -(1)), new CifTuple_T3III(14, -(1), 124), new CifTuple_T3III(15, 125, -(1)), new CifTuple_T3III(17, 19, -(1)), new CifTuple_T3III(16, -(2), 127), new CifTuple_T3III(2, 111, 55), new CifTuple_T3III(18, 129, 126), new CifTuple_T3III(19, 130, 133), new CifTuple_T3III(16, -(2), 131), new CifTuple_T3III(2, 132, 55), new CifTuple_T3III(4, 111, 118), new CifTuple_T3III(16, -(2), 134), new CifTuple_T3III(2, 111, 108), new CifTuple_T3III(18, 133, 126), new CifTuple_T3III(19, 137, -(2)), new CifTuple_T3III(16, -(2), -(1)), new CifTuple_T3III(1, 137, -(2)), new CifTuple_T3III(0, 140, 153), new CifTuple_T3III(1, 141, 149), new CifTuple_T3III(12, 142, 143), new CifTuple_T3III(13, 143, 147), new CifTuple_T3III(18, 144, 145), new CifTuple_T3III(2, 145, 146), new CifTuple_T3III(14, -(1), -(2)), new CifTuple_T3III(3, -(2), 145), new CifTuple_T3III(18, 148, 145), new CifTuple_T3III(19, 145, 144), new CifTuple_T3III(19, 150, -(2)), new CifTuple_T3III(16, 145, 151), new CifTuple_T3III(2, 152, 145), new CifTuple_T3III(22, 145, -(1)), new CifTuple_T3III(1, 150, 145), new CifTuple_T3III(0, 155, 197), new CifTuple_T3III(1, 156, 192), new CifTuple_T3III(12, 157, 191), new CifTuple_T3III(13, 158, 181), new CifTuple_T3III(18, 159, 180), new CifTuple_T3III(19, 160, 171), new CifTuple_T3III(3, 161, 169), new CifTuple_T3III(20, 162, 167), new CifTuple_T3III(21, 163, 166), new CifTuple_T3III(17, -(2), 164), new CifTuple_T3III(24, 165, -(2)), new CifTuple_T3III(25, -(1), -(2)), new CifTuple_T3III(5, 167, 163), new CifTuple_T3III(14, 168, 163), new CifTuple_T3III(15, 163, -(2)), new CifTuple_T3III(4, 170, -(2)), new CifTuple_T3III(17, -(2), 165), new CifTuple_T3III(16, 172, 178), new CifTuple_T3III(2, 173, 177), new CifTuple_T3III(3, 174, -(2)), new CifTuple_T3III(20, 175, 167), new CifTuple_T3III(21, 176, 166), new CifTuple_T3III(6, 167, 163), new CifTuple_T3III(3, -(2), 170), new CifTuple_T3III(2, 179, 177), new CifTuple_T3III(3, 161, -(2)), new CifTuple_T3III(16, 173, 179), new CifTuple_T3III(18, 182, 180), new CifTuple_T3III(19, 183, 188), new CifTuple_T3III(16, 184, 186), new CifTuple_T3III(3, 185, -(2)), new CifTuple_T3III(4, 174, 170), new CifTuple_T3III(3, 187, -(2)), new CifTuple_T3III(4, 161, 170), new CifTuple_T3III(16, 189, 190), new CifTuple_T3III(2, 173, -(2)), new CifTuple_T3III(2, 179, -(2)), new CifTuple_T3III(18, 188, 180), new CifTuple_T3III(19, 193, -(2)), new CifTuple_T3III(16, 179, 194), new CifTuple_T3III(3, 195, -(2)), new CifTuple_T3III(21, 163, 196), new CifTuple_T3III(6, 163, 170), new CifTuple_T3III(1, 193, 198), new CifTuple_T3III(12, 199, 179), new CifTuple_T3III(13, 179, 186), new CifTuple_T3III(0, 201, 213), new CifTuple_T3III(1, 202, 214), new CifTuple_T3III(12, 203, 213), new CifTuple_T3III(13, 204, 213), new CifTuple_T3III(18, 205, 213), new CifTuple_T3III(19, 206, 210), new CifTuple_T3III(2, 207, -(2)), new CifTuple_T3III(3, 208, 209), new CifTuple_T3III(15, -(1), -(2)), new CifTuple_T3III(4, 208, -(2)), new CifTuple_T3III(2, 211, 212), new CifTuple_T3III(3, 208, -(2)), new CifTuple_T3III(3, -(2), 209), new CifTuple_T3III(2, 211, -(2)), new CifTuple_T3III(19, 213, -(2)), new CifTuple_T3III(0, 216, 288), new CifTuple_T3III(1, 217, 278), new CifTuple_T3III(12, 218, 276), new CifTuple_T3III(13, 219, 264), new CifTuple_T3III(18, 220, 261), new CifTuple_T3III(19, 221, 249), new CifTuple_T3III(16, 222, 240), new CifTuple_T3III(2, 223, 236), new CifTuple_T3III(3, 224, 234), new CifTuple_T3III(20, 225, 226), new CifTuple_T3III(21, 226, 233), new CifTuple_T3III(22, 227, 228), new CifTuple_T3III(23, 228, 230), new CifTuple_T3III(14, -(2), 229), new CifTuple_T3III(15, -(2), -(1)), new CifTuple_T3III(14, -(2), 231), new CifTuple_T3III(15, -(2), 232), new CifTuple_T3III(7, -(1), -(2)), new CifTuple_T3III(5, 226, -(2)), new CifTuple_T3III(4, 235, 228), new CifTuple_T3III(23, 228, -(2)), new CifTuple_T3III(3, 228, 237), new CifTuple_T3III(20, 238, 228), new CifTuple_T3III(21, 228, 239), new CifTuple_T3III(5, 228, -(2)), new CifTuple_T3III(2, 241, 245), new CifTuple_T3III(3, 242, 234), new CifTuple_T3III(20, 243, 226), new CifTuple_T3III(21, 226, 244), new CifTuple_T3III(6, 226, -(2)), new CifTuple_T3III(3, 228, 246), new CifTuple_T3III(20, 247, 228), new CifTuple_T3III(21, 228, 248), new CifTuple_T3III(6, 228, -(2)), new CifTuple_T3III(16, 250, 255), new CifTuple_T3III(2, 251, 252), new CifTuple_T3III(3, 224, 228), new CifTuple_T3III(3, 228, 253), new CifTuple_T3III(4, 254, 237), new CifTuple_T3III(21, 235, -(2)), new CifTuple_T3III(2, 256, 257), new CifTuple_T3III(3, 242, 228), new CifTuple_T3III(3, 228, 258), new CifTuple_T3III(4, 259, 246), new CifTuple_T3III(21, 235, 260), new CifTuple_T3III(6, 235, -(2)), new CifTuple_T3III(16, 262, 263), new CifTuple_T3III(2, 251, 237), new CifTuple_T3III(2, 256, 246), new CifTuple_T3III(18, 265, 261), new CifTuple_T3III(19, 266, 273), new CifTuple_T3III(16, 267, 270), new CifTuple_T3III(2, 268, 237), new CifTuple_T3III(3, 269, 228), new CifTuple_T3III(4, 224, 254), new CifTuple_T3III(2, 271, 246), new CifTuple_T3III(3, 272, 228), new CifTuple_T3III(4, 242, 259), new CifTuple_T3III(16, 274, 275), new CifTuple_T3III(2, 251, 236), new CifTuple_T3III(2, 256, 245), new CifTuple_T3III(18, 277, 261), new CifTuple_T3III(19, 261, 273), new CifTuple_T3III(19, 279, 228), new CifTuple_T3III(16, 262, 280), new CifTuple_T3III(2, 281, 247), new CifTuple_T3III(3, 282, 228), new CifTuple_T3III(21, 283, 287), new CifTuple_T3III(6, 284, 286), new CifTuple_T3III(22, 227, 285), new CifTuple_T3III(14, -(2), -(1)), new CifTuple_T3III(22, 235, -(2)), new CifTuple_T3III(6, 284, -(2)), new CifTuple_T3III(1, 279, 289), new CifTuple_T3III(12, 290, 262), new CifTuple_T3III(13, 262, 267), new CifTuple_T3III(0, 292, 350), new CifTuple_T3III(1, 293, 338), new CifTuple_T3III(12, 294, 326), new CifTuple_T3III(13, 295, 329), new CifTuple_T3III(18, 296, 326), new CifTuple_T3III(19, 297, 320), new CifTuple_T3III(16, 298, 314), new CifTuple_T3III(2, 299, -(1)), new CifTuple_T3III(3, 300, 311), new CifTuple_T3III(20, 301, 303), new CifTuple_T3III(21, 302, 303), new CifTuple_T3III(6, 303, 307), new CifTuple_T3III(22, 304, -(1)), new CifTuple_T3III(23, -(1), 305), new CifTuple_T3III(15, 306, 232), new CifTuple_T3III(7, -(1), 43), new CifTuple_T3III(22, 308, -(1)), new CifTuple_T3III(23, -(1), 309), new CifTuple_T3III(14, 305, 310), new CifTuple_T3III(15, 43, 232), new CifTuple_T3III(4, 312, -(1)), new CifTuple_T3III(23, -(1), 313), new CifTuple_T3III(15, 43, -(2)), new CifTuple_T3III(2, 315, -(1)), new CifTuple_T3III(3, 316, 311), new CifTuple_T3III(20, 317, 303), new CifTuple_T3III(21, 302, 318), new CifTuple_T3III(5, 303, 319), new CifTuple_T3III(6, 307, 303), new CifTuple_T3III(16, 321, 324), new CifTuple_T3III(2, 322, 323), new CifTuple_T3III(3, 300, -(1)), new CifTuple_T3III(3, -(1), 311), new CifTuple_T3III(2, 325, 323), new CifTuple_T3III(3, 316, -(1)), new CifTuple_T3III(16, 327, 328), new CifTuple_T3III(2, 322, -(1)), new CifTuple_T3III(2, 325, -(1)), new CifTuple_T3III(18, 330, 326), new CifTuple_T3III(19, 331, 326), new CifTuple_T3III(16, 332, 335), new CifTuple_T3III(2, 333, -(1)), new CifTuple_T3III(3, 334, -(1)), new CifTuple_T3III(4, 300, 312), new CifTuple_T3III(2, 336, -(1)), new CifTuple_T3III(3, 337, -(1)), new CifTuple_T3III(4, 316, 312), new CifTuple_T3III(19, 339, -(1)), new CifTuple_T3III(16, 327, 340), new CifTuple_T3III(2, 341, -(1)), new CifTuple_T3III(3, 342, -(1)), new CifTuple_T3III(21, 343, 347), new CifTuple_T3III(6, 307, 344), new CifTuple_T3III(22, 345, -(1)), new CifTuple_T3III(23, -(1), 346), new CifTuple_T3III(14, 310, 313), new CifTuple_T3III(6, 307, 348), new CifTuple_T3III(22, 349, -(1)), new CifTuple_T3III(23, -(1), 310), new CifTuple_T3III(1, 339, 351), new CifTuple_T3III(12, 352, 327), new CifTuple_T3III(13, 327, 332)];
        }

        // Initialize SVG input.
        this.svgInQueue = [];
        this.svgInId = null;
        this.svgInEvent = -1;

        // CIF model state variables.
        spec.AGV1_ = spec.specEnum._l0;
        spec.AGV2_ = spec.specEnum._l0;
        spec.AGV3_ = spec.specEnum._l0;
        spec.AGV4_ = spec.specEnum._l0;
        spec.AGV5_ = spec.specEnum._l0;
        spec.IPSSPEC_ = spec.specEnum._l0;
        spec.WS1SPEC_ = spec.specEnum._l0;
        spec.WS2SPEC_ = spec.specEnum._l0;
        spec.WS3SPEC_ = spec.specEnum._l0;
        spec.Z1SPEC_ = spec.specEnum._l0;
        spec.Z2SPEC_ = spec.specEnum._l0;
        spec.Z3SPEC_ = spec.specEnum._l0;
        spec.Z4SPEC_ = spec.specEnum._l0;
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
        state += specUtils.fmt(', AGV1=%s', specUtils.valueToStr(spec.AGV1_));
        state += specUtils.fmt(', AGV2=%s', specUtils.valueToStr(spec.AGV2_));
        state += specUtils.fmt(', AGV3=%s', specUtils.valueToStr(spec.AGV3_));
        state += specUtils.fmt(', AGV4=%s', specUtils.valueToStr(spec.AGV4_));
        state += specUtils.fmt(', AGV5=%s', specUtils.valueToStr(spec.AGV5_));
        state += specUtils.fmt(', IPSSPEC=%s', specUtils.valueToStr(spec.IPSSPEC_));
        state += specUtils.fmt(', WS1SPEC=%s', specUtils.valueToStr(spec.WS1SPEC_));
        state += specUtils.fmt(', WS2SPEC=%s', specUtils.valueToStr(spec.WS2SPEC_));
        state += specUtils.fmt(', WS3SPEC=%s', specUtils.valueToStr(spec.WS3SPEC_));
        state += specUtils.fmt(', Z1SPEC=%s', specUtils.valueToStr(spec.Z1SPEC_));
        state += specUtils.fmt(', Z2SPEC=%s', specUtils.valueToStr(spec.Z2SPEC_));
        state += specUtils.fmt(', Z3SPEC=%s', specUtils.valueToStr(spec.Z3SPEC_));
        state += specUtils.fmt(', Z4SPEC=%s', specUtils.valueToStr(spec.Z4SPEC_));
        return state;
    }


    /**
     * Evaluates algebraic variable "bdd_value0".
     *
     * @return The evaluation result.
     */
    bdd_value0_() {
        return ((spec.AGV1_) == (spec.specEnum._l1)) || ((spec.AGV1_) == (spec.specEnum._l3));
    }

    /**
     * Evaluates algebraic variable "bdd_value1".
     *
     * @return The evaluation result.
     */
    bdd_value1_() {
        return ((spec.AGV1_) == (spec.specEnum._l2)) || ((spec.AGV1_) == (spec.specEnum._l3));
    }

    /**
     * Evaluates algebraic variable "bdd_value2".
     *
     * @return The evaluation result.
     */
    bdd_value2_() {
        return (((spec.AGV2_) == (spec.specEnum._l1)) || ((spec.AGV2_) == (spec.specEnum._l3))) || (((spec.AGV2_) == (spec.specEnum._l5)) || ((spec.AGV2_) == (spec.specEnum._l7)));
    }

    /**
     * Evaluates algebraic variable "bdd_value3".
     *
     * @return The evaluation result.
     */
    bdd_value3_() {
        return (((spec.AGV2_) == (spec.specEnum._l2)) || ((spec.AGV2_) == (spec.specEnum._l3))) || (((spec.AGV2_) == (spec.specEnum._l6)) || ((spec.AGV2_) == (spec.specEnum._l7)));
    }

    /**
     * Evaluates algebraic variable "bdd_value4".
     *
     * @return The evaluation result.
     */
    bdd_value4_() {
        return (((spec.AGV2_) == (spec.specEnum._l4)) || ((spec.AGV2_) == (spec.specEnum._l5))) || (((spec.AGV2_) == (spec.specEnum._l6)) || ((spec.AGV2_) == (spec.specEnum._l7)));
    }

    /**
     * Evaluates algebraic variable "bdd_value5".
     *
     * @return The evaluation result.
     */
    bdd_value5_() {
        return ((spec.AGV3_) == (spec.specEnum._l1)) || ((spec.AGV3_) == (spec.specEnum._l3));
    }

    /**
     * Evaluates algebraic variable "bdd_value6".
     *
     * @return The evaluation result.
     */
    bdd_value6_() {
        return ((spec.AGV3_) == (spec.specEnum._l2)) || ((spec.AGV3_) == (spec.specEnum._l3));
    }

    /**
     * Evaluates algebraic variable "bdd_value7".
     *
     * @return The evaluation result.
     */
    bdd_value7_() {
        return ((spec.AGV4_) == (spec.specEnum._l1)) || (((spec.AGV4_) == (spec.specEnum._l3)) || ((spec.AGV4_) == (spec.specEnum._l5)));
    }

    /**
     * Evaluates algebraic variable "bdd_value8".
     *
     * @return The evaluation result.
     */
    bdd_value8_() {
        return ((spec.AGV4_) == (spec.specEnum._l2)) || ((spec.AGV4_) == (spec.specEnum._l3));
    }

    /**
     * Evaluates algebraic variable "bdd_value9".
     *
     * @return The evaluation result.
     */
    bdd_value9_() {
        return ((spec.AGV4_) == (spec.specEnum._l4)) || ((spec.AGV4_) == (spec.specEnum._l5));
    }

    /**
     * Evaluates algebraic variable "bdd_value10".
     *
     * @return The evaluation result.
     */
    bdd_value10_() {
        return ((spec.AGV5_) == (spec.specEnum._l1)) || ((spec.AGV5_) == (spec.specEnum._l3));
    }

    /**
     * Evaluates algebraic variable "bdd_value11".
     *
     * @return The evaluation result.
     */
    bdd_value11_() {
        return ((spec.AGV5_) == (spec.specEnum._l2)) || ((spec.AGV5_) == (spec.specEnum._l3));
    }

    /**
     * Evaluates algebraic variable "bdd_value12".
     *
     * @return The evaluation result.
     */
    bdd_value12_() {
        return (spec.IPSSPEC_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value13".
     *
     * @return The evaluation result.
     */
    bdd_value13_() {
        return (spec.IPSSPEC_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value14".
     *
     * @return The evaluation result.
     */
    bdd_value14_() {
        return ((spec.WS1SPEC_) == (spec.specEnum._l1)) || ((spec.WS1SPEC_) == (spec.specEnum._l3));
    }

    /**
     * Evaluates algebraic variable "bdd_value15".
     *
     * @return The evaluation result.
     */
    bdd_value15_() {
        return ((spec.WS1SPEC_) == (spec.specEnum._l2)) || ((spec.WS1SPEC_) == (spec.specEnum._l3));
    }

    /**
     * Evaluates algebraic variable "bdd_value16".
     *
     * @return The evaluation result.
     */
    bdd_value16_() {
        return (spec.WS2SPEC_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value17".
     *
     * @return The evaluation result.
     */
    bdd_value17_() {
        return (spec.WS3SPEC_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value18".
     *
     * @return The evaluation result.
     */
    bdd_value18_() {
        return (spec.Z1SPEC_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value19".
     *
     * @return The evaluation result.
     */
    bdd_value19_() {
        return (spec.Z1SPEC_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value20".
     *
     * @return The evaluation result.
     */
    bdd_value20_() {
        return (spec.Z2SPEC_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value21".
     *
     * @return The evaluation result.
     */
    bdd_value21_() {
        return (spec.Z2SPEC_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value22".
     *
     * @return The evaluation result.
     */
    bdd_value22_() {
        return (spec.Z3SPEC_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value23".
     *
     * @return The evaluation result.
     */
    bdd_value23_() {
        return (spec.Z3SPEC_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value24".
     *
     * @return The evaluation result.
     */
    bdd_value24_() {
        return (spec.Z4SPEC_) == (spec.specEnum._l1);
    }

    /**
     * Evaluates algebraic variable "bdd_value25".
     *
     * @return The evaluation result.
     */
    bdd_value25_() {
        return (spec.Z4SPEC_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_values".
     *
     * @return The evaluation result.
     */
    bdd_values_() {
        return [spec.bdd_value0_(), spec.bdd_value1_(), spec.bdd_value2_(), spec.bdd_value3_(), spec.bdd_value4_(), spec.bdd_value5_(), spec.bdd_value6_(), spec.bdd_value7_(), spec.bdd_value8_(), spec.bdd_value9_(), spec.bdd_value10_(), spec.bdd_value11_(), spec.bdd_value12_(), spec.bdd_value13_(), spec.bdd_value14_(), spec.bdd_value15_(), spec.bdd_value16_(), spec.bdd_value17_(), spec.bdd_value18_(), spec.bdd_value19_(), spec.bdd_value20_(), spec.bdd_value21_(), spec.bdd_value22_(), spec.bdd_value23_(), spec.bdd_value24_(), spec.bdd_value25_()];
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
