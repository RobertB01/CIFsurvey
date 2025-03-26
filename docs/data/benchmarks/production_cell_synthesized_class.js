/** Tuples. */


            /** Tuple class for CIF tuple type representative "tuple(int[6..67]; int[-2..517]; int[-2..520])". */
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

        /** Literal "l10". */
        _l10: Symbol("l10"),

        /** Literal "l11". */
        _l11: Symbol("l11"),

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
        "A1_37",
        "A1_52",
        "A1_65",
        "A1_B",
        "A1_F",
        "A1_mOff",
        "A1_mOn",
        "A1_S37",
        "A1_S52",
        "A1_S65",
        "A2_0",
        "A2_57",
        "A2_80",
        "A2_B",
        "A2_F",
        "A2_mOff",
        "A2_mOn",
        "A2_S0",
        "A2_S57",
        "A2_S80",
        "blank_add",
        "Cr_2DB",
        "Cr_2FB",
        "Cr_66",
        "Cr_95",
        "Cr_D",
        "Cr_DB",
        "Cr_FB",
        "Cr_mOff",
        "Cr_mOn",
        "Cr_SHf",
        "Cr_SVf",
        "Cr_U",
        "DB_F",
        "DB_no",
        "DB_s2Off",
        "DB_s2On",
        "DB_Sf",
        "DB_tau",
        "DB_yes",
        "FB_F",
        "FB_s1Off",
        "FB_s1On",
        "FB_Sf",
        "FB_tau",
        "Pr_B",
        "Pr_D",
        "Pr_MD",
        "Pr_MU",
        "Pr_SBf",
        "Pr_SMf",
        "Pr_STf",
        "Pr_T",
        "Pr_UB",
        "Pr_UM",
        "Ro_35",
        "Ro_50",
        "Ro_L",
        "Ro_m90",
        "Ro_R",
        "Ro_S35",
        "Ro_S50",
        "Ro_Sm90",
        "Ta_0",
        "Ta_50",
        "Ta_B",
        "Ta_D",
        "Ta_L",
        "Ta_R",
        "Ta_S0f",
        "Ta_S50f",
        "Ta_SBf",
        "Ta_STf",
        "Ta_T",
        "Ta_U"
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


    /** Discrete variable "A1". */
    A1_;

    /** Discrete variable "A1P". */
    A1P_;

    /** Discrete variable "A1T". */
    A1T_;

    /** Discrete variable "A2". */
    A2_;

    /** Discrete variable "A2P". */
    A2P_;

    /** Discrete variable "Cr_H". */
    Cr_H_;

    /** Discrete variable "Cr_V". */
    Cr_V_;

    /** Discrete variable "DB". */
    DB_;

    /** Discrete variable "DB1". */
    DB1_;

    /** Discrete variable "DB2". */
    DB2_;

    /** Discrete variable "DB3". */
    DB3_;

    /** Discrete variable "FB". */
    FB_;

    /** Discrete variable "FB1". */
    FB1_;

    /** Discrete variable "FB2". */
    FB2_;

    /** Discrete variable "Pr". */
    Pr_;

    /** Discrete variable "Pr1". */
    Pr1_;

    /** Discrete variable "Pr2". */
    Pr2_;

    /** Discrete variable "R1". */
    R1_;

    /** Discrete variable "R2". */
    R2_;

    /** Discrete variable "R3". */
    R3_;

    /** Discrete variable "R4". */
    R4_;

    /** Discrete variable "R5". */
    R5_;

    /** Discrete variable "Ro". */
    Ro_;

    /** Discrete variable "Ta1". */
    Ta1_;

    /** Discrete variable "Ta2". */
    Ta2_;

    /** Discrete variable "Ta3". */
    Ta3_;

    /** Discrete variable "Ta4". */
    Ta4_;

    /** Discrete variable "Ta_H". */
    Ta_H_;

    /** Discrete variable "Ta_V". */
    Ta_V_;


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

            // Event "A1_37".
            edgeExecuted |= this.execEdge0();

            // Event "A1_52".
            edgeExecuted |= this.execEdge1();

            // Event "A1_65".
            edgeExecuted |= this.execEdge2();

            // Event "A1_S37".
            edgeExecuted |= this.execEdge3();

            // Event "A1_S52".
            edgeExecuted |= this.execEdge4();

            // Event "A1_S65".
            edgeExecuted |= this.execEdge5();

            // Event "A2_0".
            edgeExecuted |= this.execEdge6();

            // Event "A2_57".
            edgeExecuted |= this.execEdge7();

            // Event "A2_80".
            edgeExecuted |= this.execEdge8();

            // Event "A2_S0".
            edgeExecuted |= this.execEdge9();

            // Event "A2_S57".
            edgeExecuted |= this.execEdge10();

            // Event "A2_S80".
            edgeExecuted |= this.execEdge11();

            // Event "Cr_66".
            edgeExecuted |= this.execEdge12();

            // Event "Cr_95".
            edgeExecuted |= this.execEdge13();

            // Event "Cr_DB".
            edgeExecuted |= this.execEdge14();

            // Event "Cr_FB".
            edgeExecuted |= this.execEdge15();

            // Event "Cr_SHf".
            edgeExecuted |= this.execEdge16();

            // Event "Cr_SVf".
            edgeExecuted |= this.execEdge17();

            // Event "DB_no".
            edgeExecuted |= this.execEdge18();

            // Event "DB_s2Off".
            edgeExecuted |= this.execEdge19();

            // Event "DB_s2On".
            edgeExecuted |= this.execEdge20();

            // Event "DB_Sf".
            edgeExecuted |= this.execEdge21();

            // Event "DB_tau".
            edgeExecuted |= this.execEdge22();

            // Event "DB_yes".
            edgeExecuted |= this.execEdge23();

            // Event "FB_s1Off".
            edgeExecuted |= this.execEdge24();

            // Event "FB_s1On".
            edgeExecuted |= this.execEdge25();

            // Event "FB_Sf".
            edgeExecuted |= this.execEdge26();

            // Event "Pr_B".
            edgeExecuted |= this.execEdge27();

            // Event "Pr_MD".
            edgeExecuted |= this.execEdge28();

            // Event "Pr_MU".
            edgeExecuted |= this.execEdge29();

            // Event "Pr_SBf".
            edgeExecuted |= this.execEdge30();

            // Event "Pr_SMf".
            edgeExecuted |= this.execEdge31();

            // Event "Pr_STf".
            edgeExecuted |= this.execEdge32();

            // Event "Pr_T".
            edgeExecuted |= this.execEdge33();

            // Event "Ro_35".
            edgeExecuted |= this.execEdge34();

            // Event "Ro_50".
            edgeExecuted |= this.execEdge35();

            // Event "Ro_m90".
            edgeExecuted |= this.execEdge36();

            // Event "Ro_S35".
            edgeExecuted |= this.execEdge37();

            // Event "Ro_S50".
            edgeExecuted |= this.execEdge38();

            // Event "Ro_Sm90".
            edgeExecuted |= this.execEdge39();

            // Event "Ta_0".
            edgeExecuted |= this.execEdge40();

            // Event "Ta_50".
            edgeExecuted |= this.execEdge41();

            // Event "Ta_B".
            edgeExecuted |= this.execEdge42();

            // Event "Ta_S0f".
            edgeExecuted |= this.execEdge43();

            // Event "Ta_S50f".
            edgeExecuted |= this.execEdge44();

            // Event "Ta_SBf".
            edgeExecuted |= this.execEdge45();

            // Event "Ta_STf".
            edgeExecuted |= this.execEdge46();

            // Event "Ta_T".
            edgeExecuted |= this.execEdge47();

            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Execute controllable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;

            // Event "A1_B".
            edgeExecuted |= this.execEdge48();

            // Event "A1_F".
            edgeExecuted |= this.execEdge49();

            // Event "A1_mOff".
            edgeExecuted |= this.execEdge50();

            // Event "A1_mOn".
            edgeExecuted |= this.execEdge51();

            // Event "A2_B".
            edgeExecuted |= this.execEdge52();

            // Event "A2_F".
            edgeExecuted |= this.execEdge53();

            // Event "A2_mOff".
            edgeExecuted |= this.execEdge54();

            // Event "A2_mOn".
            edgeExecuted |= this.execEdge55();

            // Event "blank_add".
            edgeExecuted |= this.execEdge56();

            // Event "Cr_2DB".
            edgeExecuted |= this.execEdge57();

            // Event "Cr_2FB".
            edgeExecuted |= this.execEdge58();

            // Event "Cr_D".
            edgeExecuted |= this.execEdge59();

            // Event "Cr_mOff".
            edgeExecuted |= this.execEdge60();

            // Event "Cr_mOn".
            edgeExecuted |= this.execEdge61();

            // Event "Cr_U".
            edgeExecuted |= this.execEdge62();

            // Event "DB_F".
            edgeExecuted |= this.execEdge63();

            // Event "FB_F".
            edgeExecuted |= this.execEdge64();

            // Event "FB_tau".
            edgeExecuted |= this.execEdge65();

            // Event "Pr_D".
            edgeExecuted |= this.execEdge66();

            // Event "Pr_UB".
            edgeExecuted |= this.execEdge67();

            // Event "Pr_UM".
            edgeExecuted |= this.execEdge68();

            // Event "Ro_L".
            edgeExecuted |= this.execEdge69();

            // Event "Ro_R".
            edgeExecuted |= this.execEdge70();

            // Event "Ta_D".
            edgeExecuted |= this.execEdge71();

            // Event "Ta_L".
            edgeExecuted |= this.execEdge72();

            // Event "Ta_R".
            edgeExecuted |= this.execEdge73();

            // Event "Ta_U".
            edgeExecuted |= this.execEdge74();

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
     * Execute code for edge with index 0 and event "A1_37".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = ((spec.A1_) == (spec.specEnum._l3)) && (((spec.A1P_) == (spec.specEnum._l1)) || ((spec.A1P_) == (spec.specEnum._l3)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        spec.A1_ = spec.specEnum._l4;
        if ((spec.A1P_) == (spec.specEnum._l1)) {
            spec.A1P_ = spec.specEnum._l2;
        } else if ((spec.A1P_) == (spec.specEnum._l3)) {
            spec.A1P_ = spec.specEnum._l1;
        }

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "A1_52".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = (spec.A1_) == (spec.specEnum._l10);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        spec.A1_ = spec.specEnum._l11;

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "A1_65".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = ((spec.A1_) == (spec.specEnum._l6)) && (((spec.A1P_) == (spec.specEnum._l1)) || ((spec.A1P_) == (spec.specEnum._l2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        spec.A1_ = spec.specEnum._l7;
        if ((spec.A1P_) == (spec.specEnum._l1)) {
            spec.A1P_ = spec.specEnum._l3;
        } else if ((spec.A1P_) == (spec.specEnum._l2)) {
            spec.A1P_ = spec.specEnum._l1;
        }

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "A1_S37".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = (spec.A1_) == (spec.specEnum._l4);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.A1_ = spec.specEnum._l5;

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "A1_S52".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = (spec.A1_) == (spec.specEnum._l11);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.A1_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "A1_S65".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = (spec.A1_) == (spec.specEnum._l7);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        spec.A1_ = spec.specEnum._l8;

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "A2_0".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = ((spec.A2_) == (spec.specEnum._l10)) && (((spec.A2P_) == (spec.specEnum._l2)) || ((spec.A2P_) == (spec.specEnum._l3)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        spec.A2_ = spec.specEnum._l11;
        if ((spec.A2P_) == (spec.specEnum._l2)) {
            spec.A2P_ = spec.specEnum._l1;
        } else if ((spec.A2P_) == (spec.specEnum._l3)) {
            spec.A2P_ = spec.specEnum._l2;
        }

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "A2_57".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = (spec.A2_) == (spec.specEnum._l6);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        spec.A2_ = spec.specEnum._l7;

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "A2_80".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = ((spec.A2_) == (spec.specEnum._l2)) && (((spec.A2P_) == (spec.specEnum._l1)) || ((spec.A2P_) == (spec.specEnum._l2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(12, true);
        if (this.doInfoEvent) this.infoEvent(12, true);

        spec.A2_ = spec.specEnum._l3;
        if ((spec.A2P_) == (spec.specEnum._l1)) {
            spec.A2P_ = spec.specEnum._l2;
        } else if ((spec.A2P_) == (spec.specEnum._l2)) {
            spec.A2P_ = spec.specEnum._l3;
        }

        if (this.doInfoEvent) this.infoEvent(12, false);
        if (this.doInfoPrintOutput) this.printOutput(12, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "A2_S0".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = (spec.A2_) == (spec.specEnum._l11);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(17, true);
        if (this.doInfoEvent) this.infoEvent(17, true);

        spec.A2_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(17, false);
        if (this.doInfoPrintOutput) this.printOutput(17, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "A2_S57".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = (spec.A2_) == (spec.specEnum._l7);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(18, true);
        if (this.doInfoEvent) this.infoEvent(18, true);

        spec.A2_ = spec.specEnum._l8;

        if (this.doInfoEvent) this.infoEvent(18, false);
        if (this.doInfoPrintOutput) this.printOutput(18, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "A2_S80".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = (spec.A2_) == (spec.specEnum._l3);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(19, true);
        if (this.doInfoEvent) this.infoEvent(19, true);

        spec.A2_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(19, false);
        if (this.doInfoPrintOutput) this.printOutput(19, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 12 and event "Cr_66".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge12() {
        var guard = (spec.Cr_V_) == (spec.specEnum._l3);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(23, true);
        if (this.doInfoEvent) this.infoEvent(23, true);

        spec.Cr_V_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(23, false);
        if (this.doInfoPrintOutput) this.printOutput(23, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 13 and event "Cr_95".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge13() {
        var guard = (spec.Cr_V_) == (spec.specEnum._l7);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(24, true);
        if (this.doInfoEvent) this.infoEvent(24, true);

        spec.Cr_V_ = spec.specEnum._l8;

        if (this.doInfoEvent) this.infoEvent(24, false);
        if (this.doInfoPrintOutput) this.printOutput(24, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 14 and event "Cr_DB".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge14() {
        var guard = (spec.Cr_H_) == (spec.specEnum._l7);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(26, true);
        if (this.doInfoEvent) this.infoEvent(26, true);

        spec.Cr_H_ = spec.specEnum._l8;

        if (this.doInfoEvent) this.infoEvent(26, false);
        if (this.doInfoPrintOutput) this.printOutput(26, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 15 and event "Cr_FB".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge15() {
        var guard = (spec.Cr_H_) == (spec.specEnum._l3);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(27, true);
        if (this.doInfoEvent) this.infoEvent(27, true);

        spec.Cr_H_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(27, false);
        if (this.doInfoPrintOutput) this.printOutput(27, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 16 and event "Cr_SHf".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge16() {
        var guard = ((spec.Cr_H_) == (spec.specEnum._l4)) || ((spec.Cr_H_) == (spec.specEnum._l8));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(30, true);
        if (this.doInfoEvent) this.infoEvent(30, true);

        if ((spec.Cr_H_) == (spec.specEnum._l4)) {
            spec.Cr_H_ = spec.specEnum._l5;
        } else if ((spec.Cr_H_) == (spec.specEnum._l8)) {
            spec.Cr_H_ = spec.specEnum._l1;
        }

        if (this.doInfoEvent) this.infoEvent(30, false);
        if (this.doInfoPrintOutput) this.printOutput(30, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 17 and event "Cr_SVf".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge17() {
        var guard = ((spec.Cr_V_) == (spec.specEnum._l4)) || ((spec.Cr_V_) == (spec.specEnum._l8));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(31, true);
        if (this.doInfoEvent) this.infoEvent(31, true);

        if ((spec.Cr_V_) == (spec.specEnum._l4)) {
            spec.Cr_V_ = spec.specEnum._l5;
        } else if ((spec.Cr_V_) == (spec.specEnum._l8)) {
            spec.Cr_V_ = spec.specEnum._l1;
        }

        if (this.doInfoEvent) this.infoEvent(31, false);
        if (this.doInfoPrintOutput) this.printOutput(31, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 18 and event "DB_no".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge18() {
        var guard = ((spec.DB_) == (spec.specEnum._l5)) && ((spec.DB3_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(34, true);
        if (this.doInfoEvent) this.infoEvent(34, true);

        spec.DB_ = spec.specEnum._l1;
        spec.DB3_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(34, false);
        if (this.doInfoPrintOutput) this.printOutput(34, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 19 and event "DB_s2Off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge19() {
        var guard = ((spec.DB_) == (spec.specEnum._l3)) && ((spec.DB2_) == (spec.specEnum._l2));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(35, true);
        if (this.doInfoEvent) this.infoEvent(35, true);

        spec.DB_ = spec.specEnum._l4;
        spec.DB2_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(35, false);
        if (this.doInfoPrintOutput) this.printOutput(35, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 20 and event "DB_s2On".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge20() {
        var guard = (spec.DB_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(36, true);
        if (this.doInfoEvent) this.infoEvent(36, true);

        spec.DB_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(36, false);
        if (this.doInfoPrintOutput) this.printOutput(36, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 21 and event "DB_Sf".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge21() {
        var guard = ((spec.DB_) == (spec.specEnum._l2)) || ((spec.DB_) == (spec.specEnum._l4));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(37, true);
        if (this.doInfoEvent) this.infoEvent(37, true);

        if ((spec.DB_) == (spec.specEnum._l2)) {
            spec.DB_ = spec.specEnum._l1;
        } else if ((spec.DB_) == (spec.specEnum._l4)) {
            spec.DB_ = spec.specEnum._l5;
        }

        if (this.doInfoEvent) this.infoEvent(37, false);
        if (this.doInfoPrintOutput) this.printOutput(37, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 22 and event "DB_tau".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge22() {
        var guard = ((spec.DB_) == (spec.specEnum._l6)) && (((spec.DB1_) == (spec.specEnum._l2)) || ((spec.DB1_) == (spec.specEnum._l3)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(38, true);
        if (this.doInfoEvent) this.infoEvent(38, true);

        spec.DB_ = spec.specEnum._l1;
        if ((spec.DB1_) == (spec.specEnum._l2)) {
            spec.DB1_ = spec.specEnum._l1;
        } else if ((spec.DB1_) == (spec.specEnum._l3)) {
            spec.DB1_ = spec.specEnum._l2;
        }

        if (this.doInfoEvent) this.infoEvent(38, false);
        if (this.doInfoPrintOutput) this.printOutput(38, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 23 and event "DB_yes".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge23() {
        var guard = (spec.DB_) == (spec.specEnum._l5);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(39, true);
        if (this.doInfoEvent) this.infoEvent(39, true);

        spec.DB_ = spec.specEnum._l6;

        if (this.doInfoEvent) this.infoEvent(39, false);
        if (this.doInfoPrintOutput) this.printOutput(39, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 24 and event "FB_s1Off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge24() {
        var guard = (((spec.FB_) == (spec.specEnum._l5)) && (((spec.FB1_) == (spec.specEnum._l2)) || ((spec.FB1_) == (spec.specEnum._l3)))) && (((spec.Ta1_) == (spec.specEnum._l1)) && ((spec.Ta3_) == (spec.specEnum._l1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(41, true);
        if (this.doInfoEvent) this.infoEvent(41, true);

        spec.FB_ = spec.specEnum._l1;
        if ((spec.FB1_) == (spec.specEnum._l2)) {
            spec.FB1_ = spec.specEnum._l1;
        } else if ((spec.FB1_) == (spec.specEnum._l3)) {
            spec.FB1_ = spec.specEnum._l2;
        }
        spec.Ta1_ = spec.specEnum._l2;
        spec.Ta3_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(41, false);
        if (this.doInfoPrintOutput) this.printOutput(41, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 25 and event "FB_s1On".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge25() {
        var guard = ((spec.FB_) == (spec.specEnum._l2)) && ((spec.FB2_) == (spec.specEnum._l2));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(42, true);
        if (this.doInfoEvent) this.infoEvent(42, true);

        spec.FB_ = spec.specEnum._l3;
        spec.FB2_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(42, false);
        if (this.doInfoPrintOutput) this.printOutput(42, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 26 and event "FB_Sf".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge26() {
        var guard = ((spec.FB_) == (spec.specEnum._l2)) || ((spec.FB_) == (spec.specEnum._l3));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(43, true);
        if (this.doInfoEvent) this.infoEvent(43, true);

        if ((spec.FB_) == (spec.specEnum._l2)) {
            spec.FB_ = spec.specEnum._l1;
        } else if ((spec.FB_) == (spec.specEnum._l3)) {
            spec.FB_ = spec.specEnum._l4;
        }

        if (this.doInfoEvent) this.infoEvent(43, false);
        if (this.doInfoPrintOutput) this.printOutput(43, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 27 and event "Pr_B".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge27() {
        var guard = (((spec.A2P_) == (spec.specEnum._l2)) || ((spec.A2P_) == (spec.specEnum._l3))) && ((spec.Pr_) == (spec.specEnum._l9));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(45, true);
        if (this.doInfoEvent) this.infoEvent(45, true);

        if ((spec.A2P_) == (spec.specEnum._l2)) {
            spec.A2P_ = spec.specEnum._l1;
        } else if ((spec.A2P_) == (spec.specEnum._l3)) {
            spec.A2P_ = spec.specEnum._l2;
        }
        spec.Pr_ = spec.specEnum._l10;

        if (this.doInfoEvent) this.infoEvent(45, false);
        if (this.doInfoPrintOutput) this.printOutput(45, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 28 and event "Pr_MD".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge28() {
        var guard = (((spec.A1P_) == (spec.specEnum._l1)) || ((spec.A1P_) == (spec.specEnum._l3))) && ((spec.Pr_) == (spec.specEnum._l8));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(47, true);
        if (this.doInfoEvent) this.infoEvent(47, true);

        if ((spec.A1P_) == (spec.specEnum._l1)) {
            spec.A1P_ = spec.specEnum._l2;
        } else if ((spec.A1P_) == (spec.specEnum._l3)) {
            spec.A1P_ = spec.specEnum._l1;
        }
        spec.Pr_ = spec.specEnum._l9;

        if (this.doInfoEvent) this.infoEvent(47, false);
        if (this.doInfoPrintOutput) this.printOutput(47, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 29 and event "Pr_MU".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge29() {
        var guard = (((spec.A2P_) == (spec.specEnum._l1)) || ((spec.A2P_) == (spec.specEnum._l2))) && ((spec.Pr_) == (spec.specEnum._l2));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(48, true);
        if (this.doInfoEvent) this.infoEvent(48, true);

        if ((spec.A2P_) == (spec.specEnum._l1)) {
            spec.A2P_ = spec.specEnum._l2;
        } else if ((spec.A2P_) == (spec.specEnum._l2)) {
            spec.A2P_ = spec.specEnum._l3;
        }
        spec.Pr_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(48, false);
        if (this.doInfoPrintOutput) this.printOutput(48, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 30 and event "Pr_SBf".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge30() {
        var guard = ((spec.Pr_) == (spec.specEnum._l10)) && ((spec.Pr2_) == (spec.specEnum._l2));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(49, true);
        if (this.doInfoEvent) this.infoEvent(49, true);

        spec.Pr_ = spec.specEnum._l1;
        spec.Pr2_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(49, false);
        if (this.doInfoPrintOutput) this.printOutput(49, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 31 and event "Pr_SMf".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge31() {
        var guard = ((spec.Pr_) == (spec.specEnum._l3)) && ((spec.Pr1_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(50, true);
        if (this.doInfoEvent) this.infoEvent(50, true);

        spec.Pr_ = spec.specEnum._l4;
        spec.Pr1_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(50, false);
        if (this.doInfoPrintOutput) this.printOutput(50, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 32 and event "Pr_STf".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge32() {
        var guard = (spec.Pr_) == (spec.specEnum._l6);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(51, true);
        if (this.doInfoEvent) this.infoEvent(51, true);

        spec.Pr_ = spec.specEnum._l7;

        if (this.doInfoEvent) this.infoEvent(51, false);
        if (this.doInfoPrintOutput) this.printOutput(51, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 33 and event "Pr_T".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge33() {
        var guard = (((spec.A1P_) == (spec.specEnum._l1)) || ((spec.A1P_) == (spec.specEnum._l2))) && ((spec.Pr_) == (spec.specEnum._l5));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(52, true);
        if (this.doInfoEvent) this.infoEvent(52, true);

        if ((spec.A1P_) == (spec.specEnum._l1)) {
            spec.A1P_ = spec.specEnum._l3;
        } else if ((spec.A1P_) == (spec.specEnum._l2)) {
            spec.A1P_ = spec.specEnum._l1;
        }
        spec.Pr_ = spec.specEnum._l6;

        if (this.doInfoEvent) this.infoEvent(52, false);
        if (this.doInfoPrintOutput) this.printOutput(52, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 34 and event "Ro_35".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge34() {
        var guard = (((spec.A1T_) == (spec.specEnum._l1)) || ((spec.A1T_) == (spec.specEnum._l2))) && ((((spec.A2P_) == (spec.specEnum._l1)) || ((spec.A2P_) == (spec.specEnum._l2))) && ((spec.Ro_) == (spec.specEnum._l2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(55, true);
        if (this.doInfoEvent) this.infoEvent(55, true);

        if ((spec.A1T_) == (spec.specEnum._l1)) {
            spec.A1T_ = spec.specEnum._l1;
        } else if ((spec.A1T_) == (spec.specEnum._l2)) {
            spec.A1T_ = spec.specEnum._l1;
        }
        if ((spec.A2P_) == (spec.specEnum._l1)) {
            spec.A2P_ = spec.specEnum._l2;
        } else if ((spec.A2P_) == (spec.specEnum._l2)) {
            spec.A2P_ = spec.specEnum._l3;
        }
        spec.Ro_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(55, false);
        if (this.doInfoPrintOutput) this.printOutput(55, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 35 and event "Ro_50".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge35() {
        var guard = (((spec.A1P_) == (spec.specEnum._l1)) || ((spec.A1P_) == (spec.specEnum._l3))) && ((((spec.A2P_) == (spec.specEnum._l2)) || ((spec.A2P_) == (spec.specEnum._l3))) && ((spec.Ro_) == (spec.specEnum._l8)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(56, true);
        if (this.doInfoEvent) this.infoEvent(56, true);

        if ((spec.A1P_) == (spec.specEnum._l1)) {
            spec.A1P_ = spec.specEnum._l2;
        } else if ((spec.A1P_) == (spec.specEnum._l3)) {
            spec.A1P_ = spec.specEnum._l1;
        }
        if ((spec.A2P_) == (spec.specEnum._l2)) {
            spec.A2P_ = spec.specEnum._l1;
        } else if ((spec.A2P_) == (spec.specEnum._l3)) {
            spec.A2P_ = spec.specEnum._l2;
        }
        spec.Ro_ = spec.specEnum._l9;

        if (this.doInfoEvent) this.infoEvent(56, false);
        if (this.doInfoPrintOutput) this.printOutput(56, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 36 and event "Ro_m90".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge36() {
        var guard = (((spec.A1P_) == (spec.specEnum._l1)) || ((spec.A1P_) == (spec.specEnum._l2))) && ((((spec.A2P_) == (spec.specEnum._l2)) || ((spec.A2P_) == (spec.specEnum._l3))) && ((spec.Ro_) == (spec.specEnum._l5)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(58, true);
        if (this.doInfoEvent) this.infoEvent(58, true);

        if ((spec.A1P_) == (spec.specEnum._l1)) {
            spec.A1P_ = spec.specEnum._l3;
        } else if ((spec.A1P_) == (spec.specEnum._l2)) {
            spec.A1P_ = spec.specEnum._l1;
        }
        if ((spec.A2P_) == (spec.specEnum._l2)) {
            spec.A2P_ = spec.specEnum._l1;
        } else if ((spec.A2P_) == (spec.specEnum._l3)) {
            spec.A2P_ = spec.specEnum._l2;
        }
        spec.Ro_ = spec.specEnum._l6;

        if (this.doInfoEvent) this.infoEvent(58, false);
        if (this.doInfoPrintOutput) this.printOutput(58, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 37 and event "Ro_S35".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge37() {
        var guard = (((spec.R2_) == (spec.specEnum._l1)) || ((spec.R2_) == (spec.specEnum._l2))) && ((spec.Ro_) == (spec.specEnum._l3));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(60, true);
        if (this.doInfoEvent) this.infoEvent(60, true);

        if ((spec.R2_) == (spec.specEnum._l1)) {
            spec.R2_ = spec.specEnum._l2;
        } else if ((spec.R2_) == (spec.specEnum._l2)) {
            spec.R2_ = spec.specEnum._l3;
        }
        spec.Ro_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(60, false);
        if (this.doInfoPrintOutput) this.printOutput(60, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 38 and event "Ro_S50".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge38() {
        var guard = ((spec.R1_) == (spec.specEnum._l2)) && ((spec.Ro_) == (spec.specEnum._l9));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(61, true);
        if (this.doInfoEvent) this.infoEvent(61, true);

        spec.R1_ = spec.specEnum._l1;
        spec.Ro_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(61, false);
        if (this.doInfoPrintOutput) this.printOutput(61, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 39 and event "Ro_Sm90".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge39() {
        var guard = ((spec.R4_) == (spec.specEnum._l1)) && ((((spec.R5_) == (spec.specEnum._l1)) || ((spec.R5_) == (spec.specEnum._l2))) && ((spec.Ro_) == (spec.specEnum._l6)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(62, true);
        if (this.doInfoEvent) this.infoEvent(62, true);

        spec.R4_ = spec.specEnum._l2;
        if ((spec.R5_) == (spec.specEnum._l1)) {
            spec.R5_ = spec.specEnum._l1;
        } else if ((spec.R5_) == (spec.specEnum._l2)) {
            spec.R5_ = spec.specEnum._l3;
        }
        spec.Ro_ = spec.specEnum._l7;

        if (this.doInfoEvent) this.infoEvent(62, false);
        if (this.doInfoPrintOutput) this.printOutput(62, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 40 and event "Ta_0".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge40() {
        var guard = (spec.Ta_H_) == (spec.specEnum._l5);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(63, true);
        if (this.doInfoEvent) this.infoEvent(63, true);

        spec.Ta_H_ = spec.specEnum._l6;

        if (this.doInfoEvent) this.infoEvent(63, false);
        if (this.doInfoPrintOutput) this.printOutput(63, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 41 and event "Ta_50".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge41() {
        var guard = (spec.Ta_H_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(64, true);
        if (this.doInfoEvent) this.infoEvent(64, true);

        spec.Ta_H_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(64, false);
        if (this.doInfoPrintOutput) this.printOutput(64, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 42 and event "Ta_B".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge42() {
        var guard = (spec.Ta_V_) == (spec.specEnum._l5);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(65, true);
        if (this.doInfoEvent) this.infoEvent(65, true);

        spec.Ta_V_ = spec.specEnum._l6;

        if (this.doInfoEvent) this.infoEvent(65, false);
        if (this.doInfoPrintOutput) this.printOutput(65, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 43 and event "Ta_S0f".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge43() {
        var guard = ((spec.Ta3_) == (spec.specEnum._l3)) && ((spec.Ta_H_) == (spec.specEnum._l6));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(69, true);
        if (this.doInfoEvent) this.infoEvent(69, true);

        spec.Ta3_ = spec.specEnum._l1;
        spec.Ta_H_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(69, false);
        if (this.doInfoPrintOutput) this.printOutput(69, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 44 and event "Ta_S50f".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge44() {
        var guard = ((spec.Ta4_) == (spec.specEnum._l1)) && ((spec.Ta_H_) == (spec.specEnum._l3));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(70, true);
        if (this.doInfoEvent) this.infoEvent(70, true);

        spec.Ta4_ = spec.specEnum._l2;
        spec.Ta_H_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(70, false);
        if (this.doInfoPrintOutput) this.printOutput(70, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 45 and event "Ta_SBf".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge45() {
        var guard = ((spec.Ta1_) == (spec.specEnum._l3)) && ((spec.Ta_V_) == (spec.specEnum._l6));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(71, true);
        if (this.doInfoEvent) this.infoEvent(71, true);

        spec.Ta1_ = spec.specEnum._l1;
        spec.Ta_V_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(71, false);
        if (this.doInfoPrintOutput) this.printOutput(71, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 46 and event "Ta_STf".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge46() {
        var guard = ((spec.A1T_) == (spec.specEnum._l1)) && (((spec.Ta2_) == (spec.specEnum._l1)) && ((spec.Ta_V_) == (spec.specEnum._l3)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(72, true);
        if (this.doInfoEvent) this.infoEvent(72, true);

        spec.A1T_ = spec.specEnum._l2;
        spec.Ta2_ = spec.specEnum._l2;
        spec.Ta_V_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(72, false);
        if (this.doInfoPrintOutput) this.printOutput(72, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 47 and event "Ta_T".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge47() {
        var guard = (spec.Ta_V_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(73, true);
        if (this.doInfoEvent) this.infoEvent(73, true);

        spec.Ta_V_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(73, false);
        if (this.doInfoPrintOutput) this.printOutput(73, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 48 and event "A1_B".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge48() {
        var guard = ((spec.A1_) == (spec.specEnum._l2)) || ((spec.A1_) == (spec.specEnum._l9));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        if ((spec.A1_) == (spec.specEnum._l2)) {
            spec.A1_ = spec.specEnum._l3;
        } else if ((spec.A1_) == (spec.specEnum._l9)) {
            spec.A1_ = spec.specEnum._l10;
        }

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 49 and event "A1_F".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge49() {
        var guard = ((spec.A1_) == (spec.specEnum._l2)) || ((spec.A1_) == (spec.specEnum._l5));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        if ((spec.A1_) == (spec.specEnum._l2)) {
            spec.A1_ = spec.specEnum._l7;
        } else if ((spec.A1_) == (spec.specEnum._l5)) {
            spec.A1_ = spec.specEnum._l6;
        }

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 50 and event "A1_mOff".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge50() {
        var guard = (((spec.A1_) == (spec.specEnum._l8)) && ((spec.Pr1_) == (spec.specEnum._l2))) && ((spec.R4_) == (spec.specEnum._l2));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.A1_ = spec.specEnum._l9;
        spec.Pr1_ = spec.specEnum._l3;
        spec.R4_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 51 and event "A1_mOn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge51() {
        var guard = (((spec.A1_) == (spec.specEnum._l1)) && (((spec.R1_) == (spec.specEnum._l1)) && (((spec.R3_) == (spec.specEnum._l1)) || ((spec.R3_) == (spec.specEnum._l4))))) && (((spec.Ta2_) == (spec.specEnum._l2)) && ((spec.Ta4_) == (spec.specEnum._l2)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.A1_ = spec.specEnum._l2;
        spec.R1_ = spec.specEnum._l2;
        if ((spec.R3_) == (spec.specEnum._l1)) {
            spec.R3_ = spec.specEnum._l2;
        } else if ((spec.R3_) == (spec.specEnum._l4)) {
            spec.R3_ = spec.specEnum._l5;
        }
        spec.Ta2_ = spec.specEnum._l3;
        spec.Ta4_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 52 and event "A2_B".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge52() {
        var guard = ((spec.A2_) == (spec.specEnum._l5)) || ((spec.A2_) == (spec.specEnum._l9));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(13, true);
        if (this.doInfoEvent) this.infoEvent(13, true);

        if ((spec.A2_) == (spec.specEnum._l5)) {
            spec.A2_ = spec.specEnum._l6;
        } else if ((spec.A2_) == (spec.specEnum._l9)) {
            spec.A2_ = spec.specEnum._l10;
        }

        if (this.doInfoEvent) this.infoEvent(13, false);
        if (this.doInfoPrintOutput) this.printOutput(13, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 53 and event "A2_F".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge53() {
        var guard = (((spec.A2_) == (spec.specEnum._l1)) || ((spec.A2_) == (spec.specEnum._l9))) && (spec.bdd_eval_(496, spec.bdd_values_()));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(14, true);
        if (this.doInfoEvent) this.infoEvent(14, true);

        if ((spec.A2_) == (spec.specEnum._l1)) {
            spec.A2_ = spec.specEnum._l2;
        } else if ((spec.A2_) == (spec.specEnum._l9)) {
            spec.A2_ = spec.specEnum._l3;
        }

        if (this.doInfoEvent) this.infoEvent(14, false);
        if (this.doInfoPrintOutput) this.printOutput(14, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 54 and event "A2_mOff".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge54() {
        var guard = (((spec.A2_) == (spec.specEnum._l8)) && ((((spec.DB1_) == (spec.specEnum._l1)) || ((spec.DB1_) == (spec.specEnum._l2))) && ((spec.DB2_) == (spec.specEnum._l1)))) && ((spec.R5_) == (spec.specEnum._l3));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(15, true);
        if (this.doInfoEvent) this.infoEvent(15, true);

        spec.A2_ = spec.specEnum._l9;
        if ((spec.DB1_) == (spec.specEnum._l1)) {
            spec.DB1_ = spec.specEnum._l2;
        } else if ((spec.DB1_) == (spec.specEnum._l2)) {
            spec.DB1_ = spec.specEnum._l3;
        }
        spec.DB2_ = spec.specEnum._l2;
        spec.R5_ = spec.specEnum._l4;

        if (this.doInfoEvent) this.infoEvent(15, false);
        if (this.doInfoPrintOutput) this.printOutput(15, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 55 and event "A2_mOn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge55() {
        var guard = (((spec.A2_) == (spec.specEnum._l4)) && (((spec.Pr2_) == (spec.specEnum._l3)) && ((spec.R2_) == (spec.specEnum._l3)))) && ((spec.R3_) == (spec.specEnum._l4));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(16, true);
        if (this.doInfoEvent) this.infoEvent(16, true);

        spec.A2_ = spec.specEnum._l5;
        spec.Pr2_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l2;
        spec.R3_ = spec.specEnum._l5;

        if (this.doInfoEvent) this.infoEvent(16, false);
        if (this.doInfoPrintOutput) this.printOutput(16, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 56 and event "blank_add".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge56() {
        var guard = ((((spec.FB1_) == (spec.specEnum._l1)) || ((spec.FB1_) == (spec.specEnum._l2))) && ((spec.FB2_) == (spec.specEnum._l1))) && (spec.bdd_eval_(0, spec.bdd_values_()));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(20, true);
        if (this.doInfoEvent) this.infoEvent(20, true);

        if ((spec.FB1_) == (spec.specEnum._l1)) {
            spec.FB1_ = spec.specEnum._l2;
        } else if ((spec.FB1_) == (spec.specEnum._l2)) {
            spec.FB1_ = spec.specEnum._l3;
        }
        spec.FB2_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(20, false);
        if (this.doInfoPrintOutput) this.printOutput(20, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 57 and event "Cr_2DB".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge57() {
        var guard = (spec.Cr_H_) == (spec.specEnum._l6);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(21, true);
        if (this.doInfoEvent) this.infoEvent(21, true);

        spec.Cr_H_ = spec.specEnum._l7;

        if (this.doInfoEvent) this.infoEvent(21, false);
        if (this.doInfoPrintOutput) this.printOutput(21, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 58 and event "Cr_2FB".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge58() {
        var guard = (spec.Cr_H_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(22, true);
        if (this.doInfoEvent) this.infoEvent(22, true);

        spec.Cr_H_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(22, false);
        if (this.doInfoPrintOutput) this.printOutput(22, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 59 and event "Cr_D".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge59() {
        var guard = (spec.Cr_V_) == (spec.specEnum._l6);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(25, true);
        if (this.doInfoEvent) this.infoEvent(25, true);

        spec.Cr_V_ = spec.specEnum._l7;

        if (this.doInfoEvent) this.infoEvent(25, false);
        if (this.doInfoPrintOutput) this.printOutput(25, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 60 and event "Cr_mOff".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge60() {
        var guard = (((spec.Cr_H_) == (spec.specEnum._l5)) && (((spec.Cr_V_) == (spec.specEnum._l5)) && (((spec.FB1_) == (spec.specEnum._l1)) || ((spec.FB1_) == (spec.specEnum._l2))))) && ((spec.FB2_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(28, true);
        if (this.doInfoEvent) this.infoEvent(28, true);

        spec.Cr_H_ = spec.specEnum._l6;
        spec.Cr_V_ = spec.specEnum._l6;
        if ((spec.FB1_) == (spec.specEnum._l1)) {
            spec.FB1_ = spec.specEnum._l2;
        } else if ((spec.FB1_) == (spec.specEnum._l2)) {
            spec.FB1_ = spec.specEnum._l3;
        }
        spec.FB2_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(28, false);
        if (this.doInfoPrintOutput) this.printOutput(28, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 61 and event "Cr_mOn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge61() {
        var guard = (((spec.Cr_H_) == (spec.specEnum._l1)) && (((spec.Cr_V_) == (spec.specEnum._l1)) && (((spec.DB1_) == (spec.specEnum._l2)) || ((spec.DB1_) == (spec.specEnum._l3))))) && ((spec.DB3_) == (spec.specEnum._l2));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(29, true);
        if (this.doInfoEvent) this.infoEvent(29, true);

        spec.Cr_H_ = spec.specEnum._l2;
        spec.Cr_V_ = spec.specEnum._l2;
        if ((spec.DB1_) == (spec.specEnum._l2)) {
            spec.DB1_ = spec.specEnum._l1;
        } else if ((spec.DB1_) == (spec.specEnum._l3)) {
            spec.DB1_ = spec.specEnum._l2;
        }
        spec.DB3_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(29, false);
        if (this.doInfoPrintOutput) this.printOutput(29, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 62 and event "Cr_U".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge62() {
        var guard = (spec.Cr_V_) == (spec.specEnum._l2);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(32, true);
        if (this.doInfoEvent) this.infoEvent(32, true);

        spec.Cr_V_ = spec.specEnum._l3;

        if (this.doInfoEvent) this.infoEvent(32, false);
        if (this.doInfoPrintOutput) this.printOutput(32, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 63 and event "DB_F".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge63() {
        var guard = ((spec.DB_) == (spec.specEnum._l1)) && (spec.bdd_eval_(471, spec.bdd_values_()));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(33, true);
        if (this.doInfoEvent) this.infoEvent(33, true);

        spec.DB_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(33, false);
        if (this.doInfoPrintOutput) this.printOutput(33, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 64 and event "FB_F".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge64() {
        var guard = (((spec.FB_) == (spec.specEnum._l1)) || ((spec.FB_) == (spec.specEnum._l4))) && (spec.bdd_eval_(80, spec.bdd_values_()));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(40, true);
        if (this.doInfoEvent) this.infoEvent(40, true);

        if ((spec.FB_) == (spec.specEnum._l1)) {
            spec.FB_ = spec.specEnum._l2;
        } else if ((spec.FB_) == (spec.specEnum._l4)) {
            spec.FB_ = spec.specEnum._l5;
        }

        if (this.doInfoEvent) this.infoEvent(40, false);
        if (this.doInfoPrintOutput) this.printOutput(40, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 65 and event "FB_tau".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge65() {
        var guard = ((spec.FB_) == (spec.specEnum._l3)) && (spec.bdd_eval_(249, spec.bdd_values_()));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(44, true);
        if (this.doInfoEvent) this.infoEvent(44, true);

        spec.FB_ = spec.specEnum._l5;

        if (this.doInfoEvent) this.infoEvent(44, false);
        if (this.doInfoPrintOutput) this.printOutput(44, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 66 and event "Pr_D".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge66() {
        var guard = (spec.Pr_) == (spec.specEnum._l7);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(46, true);
        if (this.doInfoEvent) this.infoEvent(46, true);

        spec.Pr_ = spec.specEnum._l8;

        if (this.doInfoEvent) this.infoEvent(46, false);
        if (this.doInfoPrintOutput) this.printOutput(46, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 67 and event "Pr_UB".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge67() {
        var guard = (((spec.Pr_) == (spec.specEnum._l1)) && ((spec.Pr2_) == (spec.specEnum._l1))) && (spec.bdd_eval_(440, spec.bdd_values_()));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(53, true);
        if (this.doInfoEvent) this.infoEvent(53, true);

        spec.Pr_ = spec.specEnum._l2;
        spec.Pr2_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(53, false);
        if (this.doInfoPrintOutput) this.printOutput(53, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 68 and event "Pr_UM".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge68() {
        var guard = (((spec.Pr_) == (spec.specEnum._l4)) && ((spec.Pr1_) == (spec.specEnum._l3))) && (spec.bdd_eval_(455, spec.bdd_values_()));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(54, true);
        if (this.doInfoEvent) this.infoEvent(54, true);

        spec.Pr_ = spec.specEnum._l5;
        spec.Pr1_ = spec.specEnum._l1;

        if (this.doInfoEvent) this.infoEvent(54, false);
        if (this.doInfoPrintOutput) this.printOutput(54, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 69 and event "Ro_L".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge69() {
        var guard = ((((spec.R3_) == (spec.specEnum._l2)) || (((spec.R3_) == (spec.specEnum._l3)) || ((spec.R3_) == (spec.specEnum._l5)))) && (((spec.Ro_) == (spec.specEnum._l1)) || ((spec.Ro_) == (spec.specEnum._l4)))) && (spec.bdd_eval_(473, spec.bdd_values_()));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(57, true);
        if (this.doInfoEvent) this.infoEvent(57, true);

        if ((spec.R3_) == (spec.specEnum._l2)) {
            spec.R3_ = spec.specEnum._l3;
        } else if ((spec.R3_) == (spec.specEnum._l3)) {
            spec.R3_ = spec.specEnum._l4;
        } else if ((spec.R3_) == (spec.specEnum._l5)) {
            spec.R3_ = spec.specEnum._l4;
        }
        if ((spec.Ro_) == (spec.specEnum._l1)) {
            spec.Ro_ = spec.specEnum._l2;
        } else if ((spec.Ro_) == (spec.specEnum._l4)) {
            spec.Ro_ = spec.specEnum._l5;
        }

        if (this.doInfoEvent) this.infoEvent(57, false);
        if (this.doInfoPrintOutput) this.printOutput(57, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 70 and event "Ro_R".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge70() {
        var guard = ((((spec.A2P_) == (spec.specEnum._l1)) || ((spec.A2P_) == (spec.specEnum._l2))) && (((spec.R4_) == (spec.specEnum._l3)) && (((spec.R5_) == (spec.specEnum._l1)) || ((spec.R5_) == (spec.specEnum._l4))))) && (((spec.Ro_) == (spec.specEnum._l7)) && (spec.bdd_eval_(492, spec.bdd_values_())));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(59, true);
        if (this.doInfoEvent) this.infoEvent(59, true);

        if ((spec.A2P_) == (spec.specEnum._l1)) {
            spec.A2P_ = spec.specEnum._l2;
        } else if ((spec.A2P_) == (spec.specEnum._l2)) {
            spec.A2P_ = spec.specEnum._l3;
        }
        spec.R4_ = spec.specEnum._l1;
        if ((spec.R5_) == (spec.specEnum._l1)) {
            spec.R5_ = spec.specEnum._l2;
        } else if ((spec.R5_) == (spec.specEnum._l4)) {
            spec.R5_ = spec.specEnum._l2;
        }
        spec.Ro_ = spec.specEnum._l8;

        if (this.doInfoEvent) this.infoEvent(59, false);
        if (this.doInfoPrintOutput) this.printOutput(59, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 71 and event "Ta_D".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge71() {
        var guard = ((spec.Ta2_) == (spec.specEnum._l3)) && ((spec.Ta_V_) == (spec.specEnum._l4));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(66, true);
        if (this.doInfoEvent) this.infoEvent(66, true);

        spec.Ta2_ = spec.specEnum._l1;
        spec.Ta_V_ = spec.specEnum._l5;

        if (this.doInfoEvent) this.infoEvent(66, false);
        if (this.doInfoPrintOutput) this.printOutput(66, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 72 and event "Ta_L".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge72() {
        var guard = ((spec.Ta4_) == (spec.specEnum._l3)) && ((spec.Ta_H_) == (spec.specEnum._l4));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(67, true);
        if (this.doInfoEvent) this.infoEvent(67, true);

        spec.Ta4_ = spec.specEnum._l1;
        spec.Ta_H_ = spec.specEnum._l5;

        if (this.doInfoEvent) this.infoEvent(67, false);
        if (this.doInfoPrintOutput) this.printOutput(67, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 73 and event "Ta_R".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge73() {
        var guard = ((spec.Ta3_) == (spec.specEnum._l2)) && ((spec.Ta_H_) == (spec.specEnum._l1));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(68, true);
        if (this.doInfoEvent) this.infoEvent(68, true);

        spec.Ta3_ = spec.specEnum._l3;
        spec.Ta_H_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(68, false);
        if (this.doInfoPrintOutput) this.printOutput(68, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 74 and event "Ta_U".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge74() {
        var guard = (spec.bdd_eval_(387, spec.bdd_values_())) && (((spec.Ta1_) == (spec.specEnum._l2)) && ((spec.Ta_V_) == (spec.specEnum._l1)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(74, true);
        if (this.doInfoEvent) this.infoEvent(74, true);

        spec.Ta1_ = spec.specEnum._l3;
        spec.Ta_V_ = spec.specEnum._l2;

        if (this.doInfoEvent) this.infoEvent(74, false);
        if (this.doInfoPrintOutput) this.printOutput(74, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /** Initializes the state. */
    initState() {
        // Initialize constants, if not yet done so.
        if (!this.constantsInitialized) {
            this.constantsInitialized = true;
            spec.bdd_nodes_ = [new CifTuple_T3III(24, -(1), 1), new CifTuple_T3III(19, 2, 79), new CifTuple_T3III(20, 3, -(1)), new CifTuple_T3III(21, 4, 5), new CifTuple_T3III(22, 5, -(1)), new CifTuple_T3III(13, 6, 78), new CifTuple_T3III(14, 7, 78), new CifTuple_T3III(15, -(1), 8), new CifTuple_T3III(7, 9, 69), new CifTuple_T3III(8, 10, 66), new CifTuple_T3III(9, 11, 53), new CifTuple_T3III(10, 12, 46), new CifTuple_T3III(41, 13, 26), new CifTuple_T3III(42, -(1), 14), new CifTuple_T3III(6, 15, 25), new CifTuple_T3III(29, -(1), 16), new CifTuple_T3III(56, 17, -(2)), new CifTuple_T3III(57, 18, -(1)), new CifTuple_T3III(60, 19, -(2)), new CifTuple_T3III(61, 20, -(1)), new CifTuple_T3III(65, 21, 24), new CifTuple_T3III(66, 22, -(2)), new CifTuple_T3III(67, 23, -(1)), new CifTuple_T3III(54, -(1), -(2)), new CifTuple_T3III(67, -(2), -(1)), new CifTuple_T3III(29, -(1), -(2)), new CifTuple_T3III(48, -(1), 27), new CifTuple_T3III(49, 28, -(1)), new CifTuple_T3III(38, 29, 41), new CifTuple_T3III(11, 30, 40), new CifTuple_T3III(50, 31, 33), new CifTuple_T3III(53, 32, -(1)), new CifTuple_T3III(43, 33, -(1)), new CifTuple_T3III(6, 15, 34), new CifTuple_T3III(29, -(1), 35), new CifTuple_T3III(56, 36, -(2)), new CifTuple_T3III(57, 37, -(1)), new CifTuple_T3III(60, 38, -(2)), new CifTuple_T3III(61, 39, -(1)), new CifTuple_T3III(65, 22, -(1)), new CifTuple_T3III(50, 14, -(1)), new CifTuple_T3III(11, 42, 43), new CifTuple_T3III(12, 30, 40), new CifTuple_T3III(50, 44, 45), new CifTuple_T3III(51, 31, 14), new CifTuple_T3III(51, 33, -(1)), new CifTuple_T3III(41, 13, 47), new CifTuple_T3III(48, -(1), 48), new CifTuple_T3III(49, 49, -(1)), new CifTuple_T3III(38, 50, 51), new CifTuple_T3III(11, 40, 30), new CifTuple_T3III(11, 52, 30), new CifTuple_T3III(50, 44, -(1)), new CifTuple_T3III(41, 54, 62), new CifTuple_T3III(48, -(1), 55), new CifTuple_T3III(49, 56, -(1)), new CifTuple_T3III(11, 57, 59), new CifTuple_T3III(50, 58, -(1)), new CifTuple_T3III(43, 14, -(1)), new CifTuple_T3III(50, 60, 32), new CifTuple_T3III(53, 61, -(1)), new CifTuple_T3III(43, -(1), 33), new CifTuple_T3III(48, 14, 63), new CifTuple_T3III(38, 64, 14), new CifTuple_T3III(11, 65, 14), new CifTuple_T3III(50, 14, 58), new CifTuple_T3III(9, 67, 53), new CifTuple_T3III(10, 68, 12), new CifTuple_T3III(41, 14, 47), new CifTuple_T3III(8, 70, 77), new CifTuple_T3III(9, 71, 53), new CifTuple_T3III(10, 72, 46), new CifTuple_T3III(41, 14, 73), new CifTuple_T3III(48, -(1), 74), new CifTuple_T3III(49, 75, -(1)), new CifTuple_T3III(38, 29, 76), new CifTuple_T3III(11, 30, 52), new CifTuple_T3III(9, 68, 53), new CifTuple_T3III(15, 8, -(1)), new CifTuple_T3III(20, -(1), 5), new CifTuple_T3III(24, 81, 176), new CifTuple_T3III(7, 82, 167), new CifTuple_T3III(8, 83, 163), new CifTuple_T3III(9, 84, 159), new CifTuple_T3III(10, 85, 145), new CifTuple_T3III(41, 86, 124), new CifTuple_T3III(42, 87, 92), new CifTuple_T3III(38, 88, 119), new CifTuple_T3III(11, 89, 117), new CifTuple_T3III(50, 90, 116), new CifTuple_T3III(53, 91, 92), new CifTuple_T3III(43, 92, 107), new CifTuple_T3III(6, 93, 105), new CifTuple_T3III(31, 94, 104), new CifTuple_T3III(29, -(2), 95), new CifTuple_T3III(56, 96, -(2)), new CifTuple_T3III(57, 97, -(2)), new CifTuple_T3III(60, 98, -(2)), new CifTuple_T3III(61, 99, -(2)), new CifTuple_T3III(65, 100, -(2)), new CifTuple_T3III(66, 101, -(2)), new CifTuple_T3III(67, 102, -(2)), new CifTuple_T3III(54, 103, -(2)), new CifTuple_T3III(59, -(1), -(2)), new CifTuple_T3III(29, 95, -(1)), new CifTuple_T3III(31, -(2), 106), new CifTuple_T3III(29, -(2), -(1)), new CifTuple_T3III(6, 93, 108), new CifTuple_T3III(31, 109, 115), new CifTuple_T3III(29, -(2), 110), new CifTuple_T3III(56, 111, -(2)), new CifTuple_T3III(57, 112, -(2)), new CifTuple_T3III(60, 113, -(2)), new CifTuple_T3III(61, 114, -(2)), new CifTuple_T3III(65, 101, -(2)), new CifTuple_T3III(29, 110, -(1)), new CifTuple_T3III(43, 107, 105), new CifTuple_T3III(50, 118, 92), new CifTuple_T3III(43, 92, 105), new CifTuple_T3III(11, 120, 121), new CifTuple_T3III(12, 89, 117), new CifTuple_T3III(50, 122, 123), new CifTuple_T3III(51, 90, 118), new CifTuple_T3III(51, 116, 92), new CifTuple_T3III(48, 125, 134), new CifTuple_T3III(46, 126, 92), new CifTuple_T3III(47, 127, 92), new CifTuple_T3III(38, 128, 130), new CifTuple_T3III(11, 92, 129), new CifTuple_T3III(50, 92, 118), new CifTuple_T3III(11, 131, 132), new CifTuple_T3III(12, 92, 129), new CifTuple_T3III(50, 92, 133), new CifTuple_T3III(51, 92, 118), new CifTuple_T3III(49, 135, 92), new CifTuple_T3III(38, 136, 140), new CifTuple_T3III(11, 137, 92), new CifTuple_T3III(50, 138, 107), new CifTuple_T3III(53, 139, 92), new CifTuple_T3III(43, 107, 92), new CifTuple_T3III(11, 141, 142), new CifTuple_T3III(12, 137, 92), new CifTuple_T3III(50, 143, 144), new CifTuple_T3III(51, 138, 92), new CifTuple_T3III(51, 107, 92), new CifTuple_T3III(41, 146, 149), new CifTuple_T3III(42, 147, 92), new CifTuple_T3III(38, 148, 90), new CifTuple_T3III(11, 117, 89), new CifTuple_T3III(48, 150, 154), new CifTuple_T3III(46, 151, 92), new CifTuple_T3III(47, 152, 92), new CifTuple_T3III(38, 153, 92), new CifTuple_T3III(11, 129, 92), new CifTuple_T3III(49, 155, 92), new CifTuple_T3III(38, 156, 157), new CifTuple_T3III(11, 92, 137), new CifTuple_T3III(11, 158, 137), new CifTuple_T3III(50, 143, 92), new CifTuple_T3III(41, 160, 162), new CifTuple_T3III(48, 92, 161), new CifTuple_T3III(49, 148, 92), new CifTuple_T3III(48, 92, 152), new CifTuple_T3III(9, 164, 159), new CifTuple_T3III(10, 165, 85), new CifTuple_T3III(41, 92, 166), new CifTuple_T3III(48, 92, 154), new CifTuple_T3III(8, 168, 175), new CifTuple_T3III(9, 169, 159), new CifTuple_T3III(10, 170, 145), new CifTuple_T3III(41, 92, 171), new CifTuple_T3III(48, 92, 172), new CifTuple_T3III(49, 173, 92), new CifTuple_T3III(38, 136, 174), new CifTuple_T3III(11, 137, 158), new CifTuple_T3III(9, 165, 159), new CifTuple_T3III(19, 177, 248), new CifTuple_T3III(20, 178, 81), new CifTuple_T3III(21, 179, 180), new CifTuple_T3III(22, 180, 81), new CifTuple_T3III(13, 181, 247), new CifTuple_T3III(14, 182, 247), new CifTuple_T3III(15, 81, 183), new CifTuple_T3III(7, 184, 238), new CifTuple_T3III(8, 185, 234), new CifTuple_T3III(9, 186, 220), new CifTuple_T3III(10, 187, 212), new CifTuple_T3III(41, 188, 197), new CifTuple_T3III(42, 87, 189), new CifTuple_T3III(6, 190, 196), new CifTuple_T3III(31, 94, 191), new CifTuple_T3III(29, 192, -(1)), new CifTuple_T3III(57, 193, -(2)), new CifTuple_T3III(61, 194, -(2)), new CifTuple_T3III(65, 195, -(2)), new CifTuple_T3III(67, 103, -(2)), new CifTuple_T3III(31, -(2), -(1)), new CifTuple_T3III(48, 125, 198), new CifTuple_T3III(49, 199, 92), new CifTuple_T3III(38, 200, 207), new CifTuple_T3III(11, 201, 206), new CifTuple_T3III(50, 202, 204), new CifTuple_T3III(53, 203, 92), new CifTuple_T3III(43, 204, 92), new CifTuple_T3III(6, 190, 205), new CifTuple_T3III(31, 109, 191), new CifTuple_T3III(50, 189, 92), new CifTuple_T3III(11, 208, 209), new CifTuple_T3III(12, 201, 206), new CifTuple_T3III(50, 210, 211), new CifTuple_T3III(51, 202, 189), new CifTuple_T3III(51, 204, 92), new CifTuple_T3III(41, 213, 214), new CifTuple_T3III(42, 147, 189), new CifTuple_T3III(48, 150, 215), new CifTuple_T3III(49, 216, 92), new CifTuple_T3III(38, 217, 218), new CifTuple_T3III(11, 206, 201), new CifTuple_T3III(11, 219, 201), new CifTuple_T3III(50, 210, 92), new CifTuple_T3III(41, 221, 230), new CifTuple_T3III(48, 92, 222), new CifTuple_T3III(49, 223, 92), new CifTuple_T3III(11, 224, 226), new CifTuple_T3III(50, 225, 92), new CifTuple_T3III(43, 189, 105), new CifTuple_T3III(50, 227, 229), new CifTuple_T3III(53, 228, 92), new CifTuple_T3III(43, 92, 204), new CifTuple_T3III(43, 204, 105), new CifTuple_T3III(48, 189, 231), new CifTuple_T3III(38, 232, 189), new CifTuple_T3III(11, 233, 189), new CifTuple_T3III(50, 189, 225), new CifTuple_T3III(9, 235, 220), new CifTuple_T3III(10, 236, 187), new CifTuple_T3III(41, 189, 237), new CifTuple_T3III(48, 92, 215), new CifTuple_T3III(8, 239, 246), new CifTuple_T3III(9, 240, 220), new CifTuple_T3III(10, 241, 212), new CifTuple_T3III(41, 189, 242), new CifTuple_T3III(48, 92, 243), new CifTuple_T3III(49, 244, 92), new CifTuple_T3III(38, 200, 245), new CifTuple_T3III(11, 201, 219), new CifTuple_T3III(9, 236, 220), new CifTuple_T3III(15, 183, 81), new CifTuple_T3III(20, 81, 180), new CifTuple_T3III(24, 250, 322), new CifTuple_T3III(7, 251, 313), new CifTuple_T3III(8, 252, 309), new CifTuple_T3III(9, 253, 305), new CifTuple_T3III(10, 254, 291), new CifTuple_T3III(41, 255, 270), new CifTuple_T3III(42, 256, 261), new CifTuple_T3III(38, 257, 265), new CifTuple_T3III(11, 258, 263), new CifTuple_T3III(50, 259, 262), new CifTuple_T3III(53, 260, 261), new CifTuple_T3III(43, 261, 95), new CifTuple_T3III(6, 95, -(2)), new CifTuple_T3III(43, 95, -(2)), new CifTuple_T3III(50, 264, 261), new CifTuple_T3III(43, 261, -(2)), new CifTuple_T3III(11, 266, 267), new CifTuple_T3III(12, 258, 263), new CifTuple_T3III(50, 268, 269), new CifTuple_T3III(51, 259, 264), new CifTuple_T3III(51, 262, 261), new CifTuple_T3III(48, 271, 280), new CifTuple_T3III(46, 272, 261), new CifTuple_T3III(47, 273, 261), new CifTuple_T3III(38, 274, 276), new CifTuple_T3III(11, 261, 275), new CifTuple_T3III(50, 261, 264), new CifTuple_T3III(11, 277, 278), new CifTuple_T3III(12, 261, 275), new CifTuple_T3III(50, 261, 279), new CifTuple_T3III(51, 261, 264), new CifTuple_T3III(49, 281, 261), new CifTuple_T3III(38, 282, 286), new CifTuple_T3III(11, 283, 261), new CifTuple_T3III(50, 284, 95), new CifTuple_T3III(53, 285, 261), new CifTuple_T3III(43, 95, 261), new CifTuple_T3III(11, 287, 288), new CifTuple_T3III(12, 283, 261), new CifTuple_T3III(50, 289, 290), new CifTuple_T3III(51, 284, 261), new CifTuple_T3III(51, 95, 261), new CifTuple_T3III(41, 292, 295), new CifTuple_T3III(42, 293, 261), new CifTuple_T3III(38, 294, 259), new CifTuple_T3III(11, 263, 258), new CifTuple_T3III(48, 296, 300), new CifTuple_T3III(46, 297, 261), new CifTuple_T3III(47, 298, 261), new CifTuple_T3III(38, 299, 261), new CifTuple_T3III(11, 275, 261), new CifTuple_T3III(49, 301, 261), new CifTuple_T3III(38, 302, 303), new CifTuple_T3III(11, 261, 283), new CifTuple_T3III(11, 304, 283), new CifTuple_T3III(50, 289, 261), new CifTuple_T3III(41, 306, 308), new CifTuple_T3III(48, 261, 307), new CifTuple_T3III(49, 294, 261), new CifTuple_T3III(48, 261, 298), new CifTuple_T3III(9, 310, 305), new CifTuple_T3III(10, 311, 254), new CifTuple_T3III(41, 261, 312), new CifTuple_T3III(48, 261, 300), new CifTuple_T3III(8, 314, 321), new CifTuple_T3III(9, 315, 305), new CifTuple_T3III(10, 316, 291), new CifTuple_T3III(41, 261, 317), new CifTuple_T3III(48, 261, 318), new CifTuple_T3III(49, 319, 261), new CifTuple_T3III(38, 282, 320), new CifTuple_T3III(11, 283, 304), new CifTuple_T3III(9, 311, 305), new CifTuple_T3III(19, 323, 386), new CifTuple_T3III(20, 324, 250), new CifTuple_T3III(21, 325, 326), new CifTuple_T3III(22, 326, 250), new CifTuple_T3III(13, 327, 385), new CifTuple_T3III(14, 328, 385), new CifTuple_T3III(15, 250, 329), new CifTuple_T3III(7, 330, 376), new CifTuple_T3III(8, 331, 372), new CifTuple_T3III(9, 332, 358), new CifTuple_T3III(10, 333, 350), new CifTuple_T3III(41, 334, 337), new CifTuple_T3III(42, 256, 335), new CifTuple_T3III(6, 336, -(2)), new CifTuple_T3III(31, 95, 192), new CifTuple_T3III(48, 271, 338), new CifTuple_T3III(49, 339, 261), new CifTuple_T3III(38, 340, 345), new CifTuple_T3III(11, 341, 344), new CifTuple_T3III(50, 342, 336), new CifTuple_T3III(53, 343, 261), new CifTuple_T3III(43, 336, 261), new CifTuple_T3III(50, 335, 261), new CifTuple_T3III(11, 346, 347), new CifTuple_T3III(12, 341, 344), new CifTuple_T3III(50, 348, 349), new CifTuple_T3III(51, 342, 335), new CifTuple_T3III(51, 336, 261), new CifTuple_T3III(41, 351, 352), new CifTuple_T3III(42, 293, 335), new CifTuple_T3III(48, 296, 353), new CifTuple_T3III(49, 354, 261), new CifTuple_T3III(38, 355, 356), new CifTuple_T3III(11, 344, 341), new CifTuple_T3III(11, 357, 341), new CifTuple_T3III(50, 348, 261), new CifTuple_T3III(41, 359, 368), new CifTuple_T3III(48, 261, 360), new CifTuple_T3III(49, 361, 261), new CifTuple_T3III(11, 362, 364), new CifTuple_T3III(50, 363, 261), new CifTuple_T3III(43, 335, -(2)), new CifTuple_T3III(50, 365, 367), new CifTuple_T3III(53, 366, 261), new CifTuple_T3III(43, 261, 336), new CifTuple_T3III(43, 336, -(2)), new CifTuple_T3III(48, 335, 369), new CifTuple_T3III(38, 370, 335), new CifTuple_T3III(11, 371, 335), new CifTuple_T3III(50, 335, 363), new CifTuple_T3III(9, 373, 358), new CifTuple_T3III(10, 374, 333), new CifTuple_T3III(41, 335, 375), new CifTuple_T3III(48, 261, 353), new CifTuple_T3III(8, 377, 384), new CifTuple_T3III(9, 378, 358), new CifTuple_T3III(10, 379, 350), new CifTuple_T3III(41, 335, 380), new CifTuple_T3III(48, 261, 381), new CifTuple_T3III(49, 382, 261), new CifTuple_T3III(38, 340, 383), new CifTuple_T3III(11, 341, 357), new CifTuple_T3III(9, 374, 358), new CifTuple_T3III(15, 329, 250), new CifTuple_T3III(20, 250, 326), new CifTuple_T3III(7, 388, 431), new CifTuple_T3III(8, 389, 428), new CifTuple_T3III(9, 390, 425), new CifTuple_T3III(10, 391, 415), new CifTuple_T3III(41, 392, 404), new CifTuple_T3III(42, 393, -(1)), new CifTuple_T3III(38, 394, 399), new CifTuple_T3III(11, 395, -(1)), new CifTuple_T3III(50, 396, 398), new CifTuple_T3III(53, 397, -(1)), new CifTuple_T3III(43, -(1), 398), new CifTuple_T3III(6, -(1), -(2)), new CifTuple_T3III(11, 400, 401), new CifTuple_T3III(12, 395, -(1)), new CifTuple_T3III(50, 402, 403), new CifTuple_T3III(51, 396, -(1)), new CifTuple_T3III(51, 398, -(1)), new CifTuple_T3III(48, -(1), 405), new CifTuple_T3III(49, 406, -(1)), new CifTuple_T3III(38, 407, 411), new CifTuple_T3III(11, 408, -(1)), new CifTuple_T3III(50, 409, 398), new CifTuple_T3III(53, 410, -(1)), new CifTuple_T3III(43, 398, -(1)), new CifTuple_T3III(11, 412, 413), new CifTuple_T3III(12, 408, -(1)), new CifTuple_T3III(50, 414, 403), new CifTuple_T3III(51, 409, -(1)), new CifTuple_T3III(41, 416, 419), new CifTuple_T3III(42, 417, -(1)), new CifTuple_T3III(38, 418, 396), new CifTuple_T3III(11, -(1), 395), new CifTuple_T3III(48, -(1), 420), new CifTuple_T3III(49, 421, -(1)), new CifTuple_T3III(38, 422, 423), new CifTuple_T3III(11, -(1), 408), new CifTuple_T3III(11, 424, 408), new CifTuple_T3III(50, 414, -(1)), new CifTuple_T3III(41, 426, -(1)), new CifTuple_T3III(48, -(1), 427), new CifTuple_T3III(49, 418, -(1)), new CifTuple_T3III(9, 429, 425), new CifTuple_T3III(10, 430, 391), new CifTuple_T3III(41, -(1), 419), new CifTuple_T3III(8, 432, 439), new CifTuple_T3III(9, 433, 425), new CifTuple_T3III(10, 434, 415), new CifTuple_T3III(41, -(1), 435), new CifTuple_T3III(48, -(1), 436), new CifTuple_T3III(49, 437, -(1)), new CifTuple_T3III(38, 407, 438), new CifTuple_T3III(11, 408, 424), new CifTuple_T3III(9, 430, 425), new CifTuple_T3III(7, 441, 453), new CifTuple_T3III(8, 442, 452), new CifTuple_T3III(9, 443, 450), new CifTuple_T3III(10, -(1), 444), new CifTuple_T3III(41, 445, 447), new CifTuple_T3III(11, -(2), 446), new CifTuple_T3III(50, -(1), -(2)), new CifTuple_T3III(48, 448, -(1)), new CifTuple_T3III(46, 449, -(1)), new CifTuple_T3III(11, -(2), -(1)), new CifTuple_T3III(41, -(2), 451), new CifTuple_T3III(48, -(1), 449), new CifTuple_T3III(9, -(1), 450), new CifTuple_T3III(8, 454, 450), new CifTuple_T3III(9, 444, 450), new CifTuple_T3III(7, 456, 467), new CifTuple_T3III(8, 457, 465), new CifTuple_T3III(9, 458, -(2)), new CifTuple_T3III(10, 459, 463), new CifTuple_T3III(41, -(1), 460), new CifTuple_T3III(48, -(2), 461), new CifTuple_T3III(49, 462, -(2)), new CifTuple_T3III(11, 446, -(1)), new CifTuple_T3III(48, -(2), 464), new CifTuple_T3III(49, -(1), -(2)), new CifTuple_T3III(9, 466, -(2)), new CifTuple_T3III(10, -(1), 459), new CifTuple_T3III(8, 468, 470), new CifTuple_T3III(9, 469, -(2)), new CifTuple_T3III(10, -(1), 463), new CifTuple_T3III(9, -(1), -(2)), new CifTuple_T3III(24, -(2), 472), new CifTuple_T3III(22, -(2), -(1)), new CifTuple_T3III(7, 474, 486), new CifTuple_T3III(8, 475, 484), new CifTuple_T3III(9, 476, 477), new CifTuple_T3III(10, 477, 480), new CifTuple_T3III(41, 478, -(1)), new CifTuple_T3III(43, 479, -(1)), new CifTuple_T3III(56, -(2), -(1)), new CifTuple_T3III(41, 481, 482), new CifTuple_T3III(38, 478, -(2)), new CifTuple_T3III(48, -(1), 483), new CifTuple_T3III(38, -(1), 449), new CifTuple_T3III(9, 485, 477), new CifTuple_T3III(10, 483, 477), new CifTuple_T3III(8, 487, 491), new CifTuple_T3III(9, 488, 477), new CifTuple_T3III(10, 489, 480), new CifTuple_T3III(38, -(1), 490), new CifTuple_T3III(11, -(1), -(2)), new CifTuple_T3III(9, 483, 477), new CifTuple_T3III(7, -(1), 493), new CifTuple_T3III(8, 494, -(1)), new CifTuple_T3III(9, 495, -(1)), new CifTuple_T3III(10, 489, -(1)), new CifTuple_T3III(10, 497, 512), new CifTuple_T3III(41, 498, 499), new CifTuple_T3III(42, -(2), 483), new CifTuple_T3III(48, 500, 505), new CifTuple_T3III(46, 501, -(2)), new CifTuple_T3III(47, -(2), 502), new CifTuple_T3III(38, -(1), 503), new CifTuple_T3III(11, -(1), 504), new CifTuple_T3III(32, -(1), -(2)), new CifTuple_T3III(49, 506, 511), new CifTuple_T3III(38, -(1), 507), new CifTuple_T3III(11, 508, 509), new CifTuple_T3III(12, -(1), -(2)), new CifTuple_T3III(50, -(1), 510), new CifTuple_T3III(51, -(2), -(1)), new CifTuple_T3III(46, 502, -(2)), new CifTuple_T3III(41, 513, 514), new CifTuple_T3III(42, -(2), -(1)), new CifTuple_T3III(48, 515, 519), new CifTuple_T3III(46, 516, -(2)), new CifTuple_T3III(47, -(2), 517), new CifTuple_T3III(38, -(1), 518), new CifTuple_T3III(11, 504, -(1)), new CifTuple_T3III(49, -(1), 520), new CifTuple_T3III(46, 517, -(2))];
        }

        // Initialize SVG input.
        this.svgInQueue = [];
        this.svgInId = null;
        this.svgInEvent = -1;

        // CIF model state variables.
        spec.A1_ = spec.specEnum._l1;
        spec.A1P_ = spec.specEnum._l1;
        spec.A1T_ = spec.specEnum._l1;
        spec.A2_ = spec.specEnum._l1;
        spec.A2P_ = spec.specEnum._l1;
        spec.Cr_H_ = spec.specEnum._l1;
        spec.Cr_V_ = spec.specEnum._l1;
        spec.DB_ = spec.specEnum._l1;
        spec.DB1_ = spec.specEnum._l1;
        spec.DB2_ = spec.specEnum._l1;
        spec.DB3_ = spec.specEnum._l1;
        spec.FB_ = spec.specEnum._l1;
        spec.FB1_ = spec.specEnum._l1;
        spec.FB2_ = spec.specEnum._l1;
        spec.Pr_ = spec.specEnum._l1;
        spec.Pr1_ = spec.specEnum._l1;
        spec.Pr2_ = spec.specEnum._l1;
        spec.R1_ = spec.specEnum._l1;
        spec.R2_ = spec.specEnum._l1;
        spec.R3_ = spec.specEnum._l1;
        spec.R4_ = spec.specEnum._l1;
        spec.R5_ = spec.specEnum._l1;
        spec.Ro_ = spec.specEnum._l1;
        spec.Ta1_ = spec.specEnum._l1;
        spec.Ta2_ = spec.specEnum._l1;
        spec.Ta3_ = spec.specEnum._l1;
        spec.Ta4_ = spec.specEnum._l1;
        spec.Ta_H_ = spec.specEnum._l1;
        spec.Ta_V_ = spec.specEnum._l1;
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
        state += specUtils.fmt(', A1=%s', specUtils.valueToStr(spec.A1_));
        state += specUtils.fmt(', A1P=%s', specUtils.valueToStr(spec.A1P_));
        state += specUtils.fmt(', A1T=%s', specUtils.valueToStr(spec.A1T_));
        state += specUtils.fmt(', A2=%s', specUtils.valueToStr(spec.A2_));
        state += specUtils.fmt(', A2P=%s', specUtils.valueToStr(spec.A2P_));
        state += specUtils.fmt(', Cr_H=%s', specUtils.valueToStr(spec.Cr_H_));
        state += specUtils.fmt(', Cr_V=%s', specUtils.valueToStr(spec.Cr_V_));
        state += specUtils.fmt(', DB=%s', specUtils.valueToStr(spec.DB_));
        state += specUtils.fmt(', DB1=%s', specUtils.valueToStr(spec.DB1_));
        state += specUtils.fmt(', DB2=%s', specUtils.valueToStr(spec.DB2_));
        state += specUtils.fmt(', DB3=%s', specUtils.valueToStr(spec.DB3_));
        state += specUtils.fmt(', FB=%s', specUtils.valueToStr(spec.FB_));
        state += specUtils.fmt(', FB1=%s', specUtils.valueToStr(spec.FB1_));
        state += specUtils.fmt(', FB2=%s', specUtils.valueToStr(spec.FB2_));
        state += specUtils.fmt(', Pr=%s', specUtils.valueToStr(spec.Pr_));
        state += specUtils.fmt(', Pr1=%s', specUtils.valueToStr(spec.Pr1_));
        state += specUtils.fmt(', Pr2=%s', specUtils.valueToStr(spec.Pr2_));
        state += specUtils.fmt(', R1=%s', specUtils.valueToStr(spec.R1_));
        state += specUtils.fmt(', R2=%s', specUtils.valueToStr(spec.R2_));
        state += specUtils.fmt(', R3=%s', specUtils.valueToStr(spec.R3_));
        state += specUtils.fmt(', R4=%s', specUtils.valueToStr(spec.R4_));
        state += specUtils.fmt(', R5=%s', specUtils.valueToStr(spec.R5_));
        state += specUtils.fmt(', Ro=%s', specUtils.valueToStr(spec.Ro_));
        state += specUtils.fmt(', Ta1=%s', specUtils.valueToStr(spec.Ta1_));
        state += specUtils.fmt(', Ta2=%s', specUtils.valueToStr(spec.Ta2_));
        state += specUtils.fmt(', Ta3=%s', specUtils.valueToStr(spec.Ta3_));
        state += specUtils.fmt(', Ta4=%s', specUtils.valueToStr(spec.Ta4_));
        state += specUtils.fmt(', Ta_H=%s', specUtils.valueToStr(spec.Ta_H_));
        state += specUtils.fmt(', Ta_V=%s', specUtils.valueToStr(spec.Ta_V_));
        return state;
    }


    /**
     * Evaluates algebraic variable "bdd_value0".
     *
     * @return The evaluation result.
     */
    bdd_value0_() {
        return (((spec.A1_) == (spec.specEnum._l2)) || ((spec.A1_) == (spec.specEnum._l4))) || (((spec.A1_) == (spec.specEnum._l6)) || (((spec.A1_) == (spec.specEnum._l8)) || ((spec.A1_) == (spec.specEnum._l10))));
    }

    /**
     * Evaluates algebraic variable "bdd_value1".
     *
     * @return The evaluation result.
     */
    bdd_value1_() {
        return (((spec.A1_) == (spec.specEnum._l3)) || ((spec.A1_) == (spec.specEnum._l4))) || (((spec.A1_) == (spec.specEnum._l7)) || (((spec.A1_) == (spec.specEnum._l8)) || ((spec.A1_) == (spec.specEnum._l11))));
    }

    /**
     * Evaluates algebraic variable "bdd_value2".
     *
     * @return The evaluation result.
     */
    bdd_value2_() {
        return (((spec.A1_) == (spec.specEnum._l5)) || ((spec.A1_) == (spec.specEnum._l6))) || (((spec.A1_) == (spec.specEnum._l7)) || ((spec.A1_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value3".
     *
     * @return The evaluation result.
     */
    bdd_value3_() {
        return ((spec.A1_) == (spec.specEnum._l9)) || (((spec.A1_) == (spec.specEnum._l10)) || ((spec.A1_) == (spec.specEnum._l11)));
    }

    /**
     * Evaluates algebraic variable "bdd_value4".
     *
     * @return The evaluation result.
     */
    bdd_value4_() {
        return (spec.A1P_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value5".
     *
     * @return The evaluation result.
     */
    bdd_value5_() {
        return (spec.A1P_) == (spec.specEnum._l3);
    }

    /**
     * Evaluates algebraic variable "bdd_value6".
     *
     * @return The evaluation result.
     */
    bdd_value6_() {
        return (spec.A1T_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value7".
     *
     * @return The evaluation result.
     */
    bdd_value7_() {
        return (((spec.A2_) == (spec.specEnum._l2)) || ((spec.A2_) == (spec.specEnum._l4))) || (((spec.A2_) == (spec.specEnum._l6)) || (((spec.A2_) == (spec.specEnum._l8)) || ((spec.A2_) == (spec.specEnum._l10))));
    }

    /**
     * Evaluates algebraic variable "bdd_value8".
     *
     * @return The evaluation result.
     */
    bdd_value8_() {
        return (((spec.A2_) == (spec.specEnum._l3)) || ((spec.A2_) == (spec.specEnum._l4))) || (((spec.A2_) == (spec.specEnum._l7)) || (((spec.A2_) == (spec.specEnum._l8)) || ((spec.A2_) == (spec.specEnum._l11))));
    }

    /**
     * Evaluates algebraic variable "bdd_value9".
     *
     * @return The evaluation result.
     */
    bdd_value9_() {
        return (((spec.A2_) == (spec.specEnum._l5)) || ((spec.A2_) == (spec.specEnum._l6))) || (((spec.A2_) == (spec.specEnum._l7)) || ((spec.A2_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value10".
     *
     * @return The evaluation result.
     */
    bdd_value10_() {
        return ((spec.A2_) == (spec.specEnum._l9)) || (((spec.A2_) == (spec.specEnum._l10)) || ((spec.A2_) == (spec.specEnum._l11)));
    }

    /**
     * Evaluates algebraic variable "bdd_value11".
     *
     * @return The evaluation result.
     */
    bdd_value11_() {
        return (spec.A2P_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value12".
     *
     * @return The evaluation result.
     */
    bdd_value12_() {
        return (spec.A2P_) == (spec.specEnum._l3);
    }

    /**
     * Evaluates algebraic variable "bdd_value13".
     *
     * @return The evaluation result.
     */
    bdd_value13_() {
        return (((spec.Cr_H_) == (spec.specEnum._l2)) || ((spec.Cr_H_) == (spec.specEnum._l4))) || (((spec.Cr_H_) == (spec.specEnum._l6)) || ((spec.Cr_H_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value14".
     *
     * @return The evaluation result.
     */
    bdd_value14_() {
        return (((spec.Cr_H_) == (spec.specEnum._l3)) || ((spec.Cr_H_) == (spec.specEnum._l4))) || (((spec.Cr_H_) == (spec.specEnum._l7)) || ((spec.Cr_H_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value15".
     *
     * @return The evaluation result.
     */
    bdd_value15_() {
        return (((spec.Cr_H_) == (spec.specEnum._l5)) || ((spec.Cr_H_) == (spec.specEnum._l6))) || (((spec.Cr_H_) == (spec.specEnum._l7)) || ((spec.Cr_H_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value16".
     *
     * @return The evaluation result.
     */
    bdd_value16_() {
        return (((spec.Cr_V_) == (spec.specEnum._l2)) || ((spec.Cr_V_) == (spec.specEnum._l4))) || (((spec.Cr_V_) == (spec.specEnum._l6)) || ((spec.Cr_V_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value17".
     *
     * @return The evaluation result.
     */
    bdd_value17_() {
        return (((spec.Cr_V_) == (spec.specEnum._l3)) || ((spec.Cr_V_) == (spec.specEnum._l4))) || (((spec.Cr_V_) == (spec.specEnum._l7)) || ((spec.Cr_V_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value18".
     *
     * @return The evaluation result.
     */
    bdd_value18_() {
        return (((spec.Cr_V_) == (spec.specEnum._l5)) || ((spec.Cr_V_) == (spec.specEnum._l6))) || (((spec.Cr_V_) == (spec.specEnum._l7)) || ((spec.Cr_V_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value19".
     *
     * @return The evaluation result.
     */
    bdd_value19_() {
        return ((spec.DB_) == (spec.specEnum._l2)) || (((spec.DB_) == (spec.specEnum._l4)) || ((spec.DB_) == (spec.specEnum._l6)));
    }

    /**
     * Evaluates algebraic variable "bdd_value20".
     *
     * @return The evaluation result.
     */
    bdd_value20_() {
        return ((spec.DB_) == (spec.specEnum._l3)) || ((spec.DB_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value21".
     *
     * @return The evaluation result.
     */
    bdd_value21_() {
        return ((spec.DB_) == (spec.specEnum._l5)) || ((spec.DB_) == (spec.specEnum._l6));
    }

    /**
     * Evaluates algebraic variable "bdd_value22".
     *
     * @return The evaluation result.
     */
    bdd_value22_() {
        return (spec.DB1_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value23".
     *
     * @return The evaluation result.
     */
    bdd_value23_() {
        return (spec.DB1_) == (spec.specEnum._l3);
    }

    /**
     * Evaluates algebraic variable "bdd_value24".
     *
     * @return The evaluation result.
     */
    bdd_value24_() {
        return (spec.DB2_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value25".
     *
     * @return The evaluation result.
     */
    bdd_value25_() {
        return (spec.DB3_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value26".
     *
     * @return The evaluation result.
     */
    bdd_value26_() {
        return ((spec.FB_) == (spec.specEnum._l2)) || ((spec.FB_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value27".
     *
     * @return The evaluation result.
     */
    bdd_value27_() {
        return ((spec.FB_) == (spec.specEnum._l3)) || ((spec.FB_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value28".
     *
     * @return The evaluation result.
     */
    bdd_value28_() {
        return (spec.FB_) == (spec.specEnum._l5);
    }

    /**
     * Evaluates algebraic variable "bdd_value29".
     *
     * @return The evaluation result.
     */
    bdd_value29_() {
        return (spec.FB1_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value30".
     *
     * @return The evaluation result.
     */
    bdd_value30_() {
        return (spec.FB1_) == (spec.specEnum._l3);
    }

    /**
     * Evaluates algebraic variable "bdd_value31".
     *
     * @return The evaluation result.
     */
    bdd_value31_() {
        return (spec.FB2_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value32".
     *
     * @return The evaluation result.
     */
    bdd_value32_() {
        return (((spec.Pr_) == (spec.specEnum._l2)) || ((spec.Pr_) == (spec.specEnum._l4))) || (((spec.Pr_) == (spec.specEnum._l6)) || (((spec.Pr_) == (spec.specEnum._l8)) || ((spec.Pr_) == (spec.specEnum._l10))));
    }

    /**
     * Evaluates algebraic variable "bdd_value33".
     *
     * @return The evaluation result.
     */
    bdd_value33_() {
        return (((spec.Pr_) == (spec.specEnum._l3)) || ((spec.Pr_) == (spec.specEnum._l4))) || (((spec.Pr_) == (spec.specEnum._l7)) || ((spec.Pr_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value34".
     *
     * @return The evaluation result.
     */
    bdd_value34_() {
        return (((spec.Pr_) == (spec.specEnum._l5)) || ((spec.Pr_) == (spec.specEnum._l6))) || (((spec.Pr_) == (spec.specEnum._l7)) || ((spec.Pr_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value35".
     *
     * @return The evaluation result.
     */
    bdd_value35_() {
        return ((spec.Pr_) == (spec.specEnum._l9)) || ((spec.Pr_) == (spec.specEnum._l10));
    }

    /**
     * Evaluates algebraic variable "bdd_value36".
     *
     * @return The evaluation result.
     */
    bdd_value36_() {
        return (spec.Pr1_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value37".
     *
     * @return The evaluation result.
     */
    bdd_value37_() {
        return (spec.Pr1_) == (spec.specEnum._l3);
    }

    /**
     * Evaluates algebraic variable "bdd_value38".
     *
     * @return The evaluation result.
     */
    bdd_value38_() {
        return (spec.Pr2_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value39".
     *
     * @return The evaluation result.
     */
    bdd_value39_() {
        return (spec.Pr2_) == (spec.specEnum._l3);
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
        return (spec.R2_) == (spec.specEnum._l3);
    }

    /**
     * Evaluates algebraic variable "bdd_value43".
     *
     * @return The evaluation result.
     */
    bdd_value43_() {
        return ((spec.R3_) == (spec.specEnum._l2)) || ((spec.R3_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value44".
     *
     * @return The evaluation result.
     */
    bdd_value44_() {
        return ((spec.R3_) == (spec.specEnum._l3)) || ((spec.R3_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value45".
     *
     * @return The evaluation result.
     */
    bdd_value45_() {
        return (spec.R3_) == (spec.specEnum._l5);
    }

    /**
     * Evaluates algebraic variable "bdd_value46".
     *
     * @return The evaluation result.
     */
    bdd_value46_() {
        return (spec.R4_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value47".
     *
     * @return The evaluation result.
     */
    bdd_value47_() {
        return (spec.R4_) == (spec.specEnum._l3);
    }

    /**
     * Evaluates algebraic variable "bdd_value48".
     *
     * @return The evaluation result.
     */
    bdd_value48_() {
        return ((spec.R5_) == (spec.specEnum._l2)) || ((spec.R5_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value49".
     *
     * @return The evaluation result.
     */
    bdd_value49_() {
        return ((spec.R5_) == (spec.specEnum._l3)) || ((spec.R5_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value50".
     *
     * @return The evaluation result.
     */
    bdd_value50_() {
        return (((spec.Ro_) == (spec.specEnum._l2)) || ((spec.Ro_) == (spec.specEnum._l4))) || (((spec.Ro_) == (spec.specEnum._l6)) || ((spec.Ro_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value51".
     *
     * @return The evaluation result.
     */
    bdd_value51_() {
        return (((spec.Ro_) == (spec.specEnum._l3)) || ((spec.Ro_) == (spec.specEnum._l4))) || (((spec.Ro_) == (spec.specEnum._l7)) || ((spec.Ro_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value52".
     *
     * @return The evaluation result.
     */
    bdd_value52_() {
        return (((spec.Ro_) == (spec.specEnum._l5)) || ((spec.Ro_) == (spec.specEnum._l6))) || (((spec.Ro_) == (spec.specEnum._l7)) || ((spec.Ro_) == (spec.specEnum._l8)));
    }

    /**
     * Evaluates algebraic variable "bdd_value53".
     *
     * @return The evaluation result.
     */
    bdd_value53_() {
        return (spec.Ro_) == (spec.specEnum._l9);
    }

    /**
     * Evaluates algebraic variable "bdd_value54".
     *
     * @return The evaluation result.
     */
    bdd_value54_() {
        return (spec.Ta1_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value55".
     *
     * @return The evaluation result.
     */
    bdd_value55_() {
        return (spec.Ta1_) == (spec.specEnum._l3);
    }

    /**
     * Evaluates algebraic variable "bdd_value56".
     *
     * @return The evaluation result.
     */
    bdd_value56_() {
        return (spec.Ta2_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value57".
     *
     * @return The evaluation result.
     */
    bdd_value57_() {
        return (spec.Ta2_) == (spec.specEnum._l3);
    }

    /**
     * Evaluates algebraic variable "bdd_value58".
     *
     * @return The evaluation result.
     */
    bdd_value58_() {
        return (spec.Ta3_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value59".
     *
     * @return The evaluation result.
     */
    bdd_value59_() {
        return (spec.Ta3_) == (spec.specEnum._l3);
    }

    /**
     * Evaluates algebraic variable "bdd_value60".
     *
     * @return The evaluation result.
     */
    bdd_value60_() {
        return (spec.Ta4_) == (spec.specEnum._l2);
    }

    /**
     * Evaluates algebraic variable "bdd_value61".
     *
     * @return The evaluation result.
     */
    bdd_value61_() {
        return (spec.Ta4_) == (spec.specEnum._l3);
    }

    /**
     * Evaluates algebraic variable "bdd_value62".
     *
     * @return The evaluation result.
     */
    bdd_value62_() {
        return ((spec.Ta_H_) == (spec.specEnum._l2)) || (((spec.Ta_H_) == (spec.specEnum._l4)) || ((spec.Ta_H_) == (spec.specEnum._l6)));
    }

    /**
     * Evaluates algebraic variable "bdd_value63".
     *
     * @return The evaluation result.
     */
    bdd_value63_() {
        return ((spec.Ta_H_) == (spec.specEnum._l3)) || ((spec.Ta_H_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value64".
     *
     * @return The evaluation result.
     */
    bdd_value64_() {
        return ((spec.Ta_H_) == (spec.specEnum._l5)) || ((spec.Ta_H_) == (spec.specEnum._l6));
    }

    /**
     * Evaluates algebraic variable "bdd_value65".
     *
     * @return The evaluation result.
     */
    bdd_value65_() {
        return ((spec.Ta_V_) == (spec.specEnum._l2)) || (((spec.Ta_V_) == (spec.specEnum._l4)) || ((spec.Ta_V_) == (spec.specEnum._l6)));
    }

    /**
     * Evaluates algebraic variable "bdd_value66".
     *
     * @return The evaluation result.
     */
    bdd_value66_() {
        return ((spec.Ta_V_) == (spec.specEnum._l3)) || ((spec.Ta_V_) == (spec.specEnum._l4));
    }

    /**
     * Evaluates algebraic variable "bdd_value67".
     *
     * @return The evaluation result.
     */
    bdd_value67_() {
        return ((spec.Ta_V_) == (spec.specEnum._l5)) || ((spec.Ta_V_) == (spec.specEnum._l6));
    }

    /**
     * Evaluates algebraic variable "bdd_values".
     *
     * @return The evaluation result.
     */
    bdd_values_() {
        return [spec.bdd_value0_(), spec.bdd_value1_(), spec.bdd_value2_(), spec.bdd_value3_(), spec.bdd_value4_(), spec.bdd_value5_(), spec.bdd_value6_(), spec.bdd_value7_(), spec.bdd_value8_(), spec.bdd_value9_(), spec.bdd_value10_(), spec.bdd_value11_(), spec.bdd_value12_(), spec.bdd_value13_(), spec.bdd_value14_(), spec.bdd_value15_(), spec.bdd_value16_(), spec.bdd_value17_(), spec.bdd_value18_(), spec.bdd_value19_(), spec.bdd_value20_(), spec.bdd_value21_(), spec.bdd_value22_(), spec.bdd_value23_(), spec.bdd_value24_(), spec.bdd_value25_(), spec.bdd_value26_(), spec.bdd_value27_(), spec.bdd_value28_(), spec.bdd_value29_(), spec.bdd_value30_(), spec.bdd_value31_(), spec.bdd_value32_(), spec.bdd_value33_(), spec.bdd_value34_(), spec.bdd_value35_(), spec.bdd_value36_(), spec.bdd_value37_(), spec.bdd_value38_(), spec.bdd_value39_(), spec.bdd_value40_(), spec.bdd_value41_(), spec.bdd_value42_(), spec.bdd_value43_(), spec.bdd_value44_(), spec.bdd_value45_(), spec.bdd_value46_(), spec.bdd_value47_(), spec.bdd_value48_(), spec.bdd_value49_(), spec.bdd_value50_(), spec.bdd_value51_(), spec.bdd_value52_(), spec.bdd_value53_(), spec.bdd_value54_(), spec.bdd_value55_(), spec.bdd_value56_(), spec.bdd_value57_(), spec.bdd_value58_(), spec.bdd_value59_(), spec.bdd_value60_(), spec.bdd_value61_(), spec.bdd_value62_(), spec.bdd_value63_(), spec.bdd_value64_(), spec.bdd_value65_(), spec.bdd_value66_(), spec.bdd_value67_()];
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
