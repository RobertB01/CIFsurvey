/** Tuples. */


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
        var guard = ((spec.A1_) == (spec.specEnum._l8)) && (((spec.Pr1_) == (spec.specEnum._l2)) && ((spec.R4_) == (spec.specEnum._l2)));

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
        var guard = (((spec.A1_) == (spec.specEnum._l1)) && ((spec.R1_) == (spec.specEnum._l1))) && ((((spec.R3_) == (spec.specEnum._l1)) || ((spec.R3_) == (spec.specEnum._l4))) && (((spec.Ta2_) == (spec.specEnum._l2)) && ((spec.Ta4_) == (spec.specEnum._l2))));

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
        var guard = ((spec.A2_) == (spec.specEnum._l1)) || ((spec.A2_) == (spec.specEnum._l9));

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
        var guard = (((spec.A2_) == (spec.specEnum._l8)) && (((spec.DB1_) == (spec.specEnum._l1)) || ((spec.DB1_) == (spec.specEnum._l2)))) && (((spec.DB2_) == (spec.specEnum._l1)) && ((spec.R5_) == (spec.specEnum._l3)));

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
        var guard = (((spec.A2_) == (spec.specEnum._l4)) && ((spec.Pr2_) == (spec.specEnum._l3))) && (((spec.R2_) == (spec.specEnum._l3)) && ((spec.R3_) == (spec.specEnum._l4)));

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
        var guard = (((spec.FB1_) == (spec.specEnum._l1)) || ((spec.FB1_) == (spec.specEnum._l2))) && ((spec.FB2_) == (spec.specEnum._l1));

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
        var guard = (((spec.Cr_H_) == (spec.specEnum._l5)) && ((spec.Cr_V_) == (spec.specEnum._l5))) && ((((spec.FB1_) == (spec.specEnum._l1)) || ((spec.FB1_) == (spec.specEnum._l2))) && ((spec.FB2_) == (spec.specEnum._l1)));

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
        var guard = (((spec.Cr_H_) == (spec.specEnum._l1)) && ((spec.Cr_V_) == (spec.specEnum._l1))) && ((((spec.DB1_) == (spec.specEnum._l2)) || ((spec.DB1_) == (spec.specEnum._l3))) && ((spec.DB3_) == (spec.specEnum._l2)));

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
        var guard = (spec.DB_) == (spec.specEnum._l1);

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
        var guard = ((spec.FB_) == (spec.specEnum._l1)) || ((spec.FB_) == (spec.specEnum._l4));

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
        var guard = (spec.FB_) == (spec.specEnum._l3);

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
        var guard = ((spec.Pr_) == (spec.specEnum._l1)) && ((spec.Pr2_) == (spec.specEnum._l1));

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
        var guard = ((spec.Pr_) == (spec.specEnum._l4)) && ((spec.Pr1_) == (spec.specEnum._l3));

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
        var guard = (((spec.R3_) == (spec.specEnum._l2)) || (((spec.R3_) == (spec.specEnum._l3)) || ((spec.R3_) == (spec.specEnum._l5)))) && (((spec.Ro_) == (spec.specEnum._l1)) || ((spec.Ro_) == (spec.specEnum._l4)));

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
        var guard = ((((spec.A2P_) == (spec.specEnum._l1)) || ((spec.A2P_) == (spec.specEnum._l2))) && ((spec.R4_) == (spec.specEnum._l3))) && ((((spec.R5_) == (spec.specEnum._l1)) || ((spec.R5_) == (spec.specEnum._l4))) && ((spec.Ro_) == (spec.specEnum._l7)));

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
        var guard = ((spec.Ta1_) == (spec.specEnum._l2)) && ((spec.Ta_V_) == (spec.specEnum._l1));

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
