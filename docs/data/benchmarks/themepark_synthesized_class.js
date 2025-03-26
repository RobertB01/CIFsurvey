/** Tuples. */


            /** Tuple class for CIF tuple type representative "tuple(int var; int low; int high)". */
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
        /** Literal "A". */
        _A: Symbol("A"),

        /** Literal "Active". */
        _Active: Symbol("Active"),

        /** Literal "B". */
        _B: Symbol("B"),

        /** Literal "C". */
        _C: Symbol("C"),

        /** Literal "D". */
        _D: Symbol("D"),

        /** Literal "Emergency". */
        _Emergency: Symbol("Emergency"),

        /** Literal "Empty". */
        _Empty: Symbol("Empty"),

        /** Literal "Inactive". */
        _Inactive: Symbol("Inactive"),

        /** Literal "Off". */
        _Off: Symbol("Off"),

        /** Literal "Ok". */
        _Ok: Symbol("Ok"),

        /** Literal "On". */
        _On: Symbol("On"),

        /** Literal "Pressed". */
        _Pressed: Symbol("Pressed"),

        /** Literal "Released". */
        _Released: Symbol("Released"),

        /** Literal "Reset". */
        _Reset: Symbol("Reset"),

        /** Literal "S0". */
        _S0: Symbol("S0"),

        /** Literal "S1". */
        _S1: Symbol("S1"),

        /** Literal "S2". */
        _S2: Symbol("S2"),

        /** Literal "S3". */
        _S3: Symbol("S3"),

        /** Literal "S4". */
        _S4: Symbol("S4"),

        /** Literal "S5". */
        _S5: Symbol("S5"),

        /** Literal "S6". */
        _S6: Symbol("S6"),

        /** Literal "Start". */
        _Start: Symbol("Start"),

        /** Literal "Stop". */
        _Stop: Symbol("Stop"),

        /** Literal "Stopping". */
        _Stopping: Symbol("Stopping")
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
        "BA.u_empty",
        "BA.u_ok",
        "BB.u_press",
        "BB.u_release",
        "BL.c_off",
        "BL.c_on",
        "BLP.u_active",
        "BLP.u_inactive",
        "BS.u_active",
        "BS.u_inactive",
        "BSP.u_active",
        "BSP.u_inactive",
        "DM.c_bw",
        "DM.c_bwslow",
        "DM.c_bwstop",
        "DM.c_enable_bw",
        "DM.c_enable_fw",
        "DM.c_fw",
        "DM.c_fwslow",
        "DM.c_fwstop",
        "DM.c_stop",
        "DM.u_disable",
        "DM.u_error",
        "FB.u_press",
        "FB.u_release",
        "FL.c_off",
        "FL.c_on",
        "FLP.u_active",
        "FLP.u_inactive",
        "FSP.u_active",
        "FSP.u_inactive",
        "MM.c_active",
        "MM.c_emergency",
        "MM.c_reset",
        "RB.u_press",
        "RB.u_release",
        "RC.u_start",
        "RC.u_stop",
        "RL.c_off",
        "RL.c_on",
        "SH.c_disable",
        "SH.c_enable",
        "SH.u_chdir",
        "SH.u_error",
        "SM.c_disable",
        "SM.c_enable",
        "SM.u_error"
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


    /** Discrete variable "BA". */
    BA_;

    /** Discrete variable "BB". */
    BB_;

    /** Discrete variable "BL". */
    BL_;

    /** Discrete variable "BLP". */
    BLP_;

    /** Discrete variable "BS". */
    BS_;

    /** Discrete variable "BSP". */
    BSP_;

    /** Discrete variable "DM". */
    DM_;

    /** Discrete variable "FB". */
    FB_;

    /** Discrete variable "FL". */
    FL_;

    /** Discrete variable "FLP". */
    FLP_;

    /** Discrete variable "FSP". */
    FSP_;

    /** Discrete variable "Last". */
    Last_;

    /** Discrete variable "MM". */
    MM_;

    /** Discrete variable "R18c". */
    R18c_;

    /** Discrete variable "R21". */
    R21_;

    /** Discrete variable "R22a". */
    R22a_;

    /** Discrete variable "R22b". */
    R22b_;

    /** Discrete variable "RB". */
    RB_;

    /** Discrete variable "RC". */
    RC_;

    /** Discrete variable "RL". */
    RL_;

    /** Discrete variable "SH". */
    SH_;

    /** Discrete variable "SM". */
    SM_;


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

            // Event "BA.u_empty".
            edgeExecuted |= this.execEdge0();

            // Event "BA.u_ok".
            edgeExecuted |= this.execEdge1();

            // Event "BB.u_press".
            edgeExecuted |= this.execEdge2();

            // Event "BB.u_release".
            edgeExecuted |= this.execEdge3();

            // Event "BLP.u_active".
            edgeExecuted |= this.execEdge4();

            // Event "BLP.u_inactive".
            edgeExecuted |= this.execEdge5();

            // Event "BS.u_active".
            edgeExecuted |= this.execEdge6();

            // Event "BS.u_inactive".
            edgeExecuted |= this.execEdge7();

            // Event "BSP.u_active".
            edgeExecuted |= this.execEdge8();

            // Event "BSP.u_inactive".
            edgeExecuted |= this.execEdge9();

            // Event "DM.u_disable".
            edgeExecuted |= this.execEdge10();

            // Event "DM.u_error".
            edgeExecuted |= this.execEdge11();

            // Event "FB.u_press".
            edgeExecuted |= this.execEdge12();

            // Event "FB.u_release".
            edgeExecuted |= this.execEdge13();

            // Event "FLP.u_active".
            edgeExecuted |= this.execEdge14();

            // Event "FLP.u_inactive".
            edgeExecuted |= this.execEdge15();

            // Event "FSP.u_active".
            edgeExecuted |= this.execEdge16();

            // Event "FSP.u_inactive".
            edgeExecuted |= this.execEdge17();

            // Event "RB.u_press".
            edgeExecuted |= this.execEdge18();

            // Event "RB.u_release".
            edgeExecuted |= this.execEdge19();

            // Event "RC.u_start".
            edgeExecuted |= this.execEdge20();

            // Event "RC.u_stop".
            edgeExecuted |= this.execEdge21();

            // Event "SH.u_chdir".
            edgeExecuted |= this.execEdge22();

            // Event "SH.u_error".
            edgeExecuted |= this.execEdge23();

            // Event "SM.u_error".
            edgeExecuted |= this.execEdge24();

            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Execute controllable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;

            // Event "BL.c_off".
            edgeExecuted |= this.execEdge25();

            // Event "BL.c_on".
            edgeExecuted |= this.execEdge26();

            // Event "DM.c_bw".
            edgeExecuted |= this.execEdge27();

            // Event "DM.c_bwslow".
            edgeExecuted |= this.execEdge28();

            // Event "DM.c_bwstop".
            edgeExecuted |= this.execEdge29();

            // Event "DM.c_enable_bw".
            edgeExecuted |= this.execEdge30();

            // Event "DM.c_enable_fw".
            edgeExecuted |= this.execEdge31();

            // Event "DM.c_fw".
            edgeExecuted |= this.execEdge32();

            // Event "DM.c_fwslow".
            edgeExecuted |= this.execEdge33();

            // Event "DM.c_fwstop".
            edgeExecuted |= this.execEdge34();

            // Event "DM.c_stop".
            edgeExecuted |= this.execEdge35();

            // Event "FL.c_off".
            edgeExecuted |= this.execEdge36();

            // Event "FL.c_on".
            edgeExecuted |= this.execEdge37();

            // Event "MM.c_active".
            edgeExecuted |= this.execEdge38();

            // Event "MM.c_emergency".
            edgeExecuted |= this.execEdge39();

            // Event "MM.c_reset".
            edgeExecuted |= this.execEdge40();

            // Event "RL.c_off".
            edgeExecuted |= this.execEdge41();

            // Event "RL.c_on".
            edgeExecuted |= this.execEdge42();

            // Event "SH.c_disable".
            edgeExecuted |= this.execEdge43();

            // Event "SH.c_enable".
            edgeExecuted |= this.execEdge44();

            // Event "SM.c_disable".
            edgeExecuted |= this.execEdge45();

            // Event "SM.c_enable".
            edgeExecuted |= this.execEdge46();

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
     * Execute code for edge with index 0 and event "BA.u_empty".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = ((spec.BA_) == (spec.specEnum._Ok)) && (((spec.R18c_) == (spec.specEnum._A)) || ((spec.R18c_) == (spec.specEnum._B)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        spec.BA_ = spec.specEnum._Empty;
        if ((spec.R18c_) == (spec.specEnum._A)) {
            spec.R18c_ = spec.specEnum._B;
        } else if ((spec.R18c_) == (spec.specEnum._B)) {
            spec.R18c_ = spec.specEnum._B;
        }

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "BA.u_ok".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = (spec.BA_) == (spec.specEnum._Empty);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        spec.BA_ = spec.specEnum._Ok;

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "BB.u_press".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = ((spec.BB_) == (spec.specEnum._Released)) && (((spec.R22b_) == (spec.specEnum._A)) || ((spec.R22b_) == (spec.specEnum._C)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        spec.BB_ = spec.specEnum._Pressed;
        if ((spec.R22b_) == (spec.specEnum._A)) {
            spec.R22b_ = spec.specEnum._B;
        } else if ((spec.R22b_) == (spec.specEnum._C)) {
            spec.R22b_ = spec.specEnum._C;
        }

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "BB.u_release".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = ((spec.BB_) == (spec.specEnum._Pressed)) && (((spec.R22b_) == (spec.specEnum._A)) || (((spec.R22b_) == (spec.specEnum._B)) || ((spec.R22b_) == (spec.specEnum._C))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        spec.BB_ = spec.specEnum._Released;
        if ((spec.R22b_) == (spec.specEnum._A)) {
            spec.R22b_ = spec.specEnum._A;
        } else if ((spec.R22b_) == (spec.specEnum._B)) {
            spec.R22b_ = spec.specEnum._A;
        } else if ((spec.R22b_) == (spec.specEnum._C)) {
            spec.R22b_ = spec.specEnum._C;
        }

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "BLP.u_active".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = (spec.BLP_) == (spec.specEnum._Inactive);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.BLP_ = spec.specEnum._Active;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "BLP.u_inactive".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = (spec.BLP_) == (spec.specEnum._Active);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.BLP_ = spec.specEnum._Inactive;

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "BS.u_active".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = ((spec.BS_) == (spec.specEnum._Inactive)) && (((spec.R18c_) == (spec.specEnum._A)) || ((spec.R18c_) == (spec.specEnum._B)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.BS_ = spec.specEnum._Active;
        if ((spec.R18c_) == (spec.specEnum._A)) {
            spec.R18c_ = spec.specEnum._B;
        } else if ((spec.R18c_) == (spec.specEnum._B)) {
            spec.R18c_ = spec.specEnum._B;
        }

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "BS.u_inactive".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = (spec.BS_) == (spec.specEnum._Active);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        spec.BS_ = spec.specEnum._Inactive;

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "BSP.u_active".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = (spec.BSP_) == (spec.specEnum._Inactive);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        spec.BSP_ = spec.specEnum._Active;

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "BSP.u_inactive".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = (spec.BSP_) == (spec.specEnum._Active);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        spec.BSP_ = spec.specEnum._Inactive;

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "DM.u_disable".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = ((spec.DM_) == (spec.specEnum._Stopping)) && ((spec.R21_) == (spec.specEnum._D));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(21, true);
        if (this.doInfoEvent) this.infoEvent(21, true);

        spec.DM_ = spec.specEnum._Off;
        spec.R21_ = spec.specEnum._A;

        if (this.doInfoEvent) this.infoEvent(21, false);
        if (this.doInfoPrintOutput) this.printOutput(21, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "DM.u_error".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = (((spec.DM_) == (spec.specEnum._On)) || ((spec.DM_) == (spec.specEnum._Stopping))) && ((((spec.R18c_) == (spec.specEnum._A)) || ((spec.R18c_) == (spec.specEnum._B))) && (((spec.R21_) == (spec.specEnum._B)) || (((spec.R21_) == (spec.specEnum._C)) || ((spec.R21_) == (spec.specEnum._D)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(22, true);
        if (this.doInfoEvent) this.infoEvent(22, true);

        if ((spec.DM_) == (spec.specEnum._On)) {
            spec.DM_ = spec.specEnum._Off;
        } else if ((spec.DM_) == (spec.specEnum._Stopping)) {
            spec.DM_ = spec.specEnum._Off;
        }
        if ((spec.R18c_) == (spec.specEnum._A)) {
            spec.R18c_ = spec.specEnum._B;
        } else if ((spec.R18c_) == (spec.specEnum._B)) {
            spec.R18c_ = spec.specEnum._B;
        }
        if ((spec.R21_) == (spec.specEnum._B)) {
            spec.R21_ = spec.specEnum._A;
        } else if ((spec.R21_) == (spec.specEnum._C)) {
            spec.R21_ = spec.specEnum._A;
        } else if ((spec.R21_) == (spec.specEnum._D)) {
            spec.R21_ = spec.specEnum._A;
        }

        if (this.doInfoEvent) this.infoEvent(22, false);
        if (this.doInfoPrintOutput) this.printOutput(22, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 12 and event "FB.u_press".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge12() {
        var guard = ((spec.FB_) == (spec.specEnum._Released)) && (((spec.R22a_) == (spec.specEnum._A)) || ((spec.R22a_) == (spec.specEnum._C)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(23, true);
        if (this.doInfoEvent) this.infoEvent(23, true);

        spec.FB_ = spec.specEnum._Pressed;
        if ((spec.R22a_) == (spec.specEnum._A)) {
            spec.R22a_ = spec.specEnum._B;
        } else if ((spec.R22a_) == (spec.specEnum._C)) {
            spec.R22a_ = spec.specEnum._C;
        }

        if (this.doInfoEvent) this.infoEvent(23, false);
        if (this.doInfoPrintOutput) this.printOutput(23, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 13 and event "FB.u_release".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge13() {
        var guard = ((spec.FB_) == (spec.specEnum._Pressed)) && (((spec.R22a_) == (spec.specEnum._A)) || (((spec.R22a_) == (spec.specEnum._B)) || ((spec.R22a_) == (spec.specEnum._C))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(24, true);
        if (this.doInfoEvent) this.infoEvent(24, true);

        spec.FB_ = spec.specEnum._Released;
        if ((spec.R22a_) == (spec.specEnum._A)) {
            spec.R22a_ = spec.specEnum._A;
        } else if ((spec.R22a_) == (spec.specEnum._B)) {
            spec.R22a_ = spec.specEnum._A;
        } else if ((spec.R22a_) == (spec.specEnum._C)) {
            spec.R22a_ = spec.specEnum._C;
        }

        if (this.doInfoEvent) this.infoEvent(24, false);
        if (this.doInfoPrintOutput) this.printOutput(24, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 14 and event "FLP.u_active".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge14() {
        var guard = (spec.FLP_) == (spec.specEnum._Inactive);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(27, true);
        if (this.doInfoEvent) this.infoEvent(27, true);

        spec.FLP_ = spec.specEnum._Active;

        if (this.doInfoEvent) this.infoEvent(27, false);
        if (this.doInfoPrintOutput) this.printOutput(27, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 15 and event "FLP.u_inactive".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge15() {
        var guard = (spec.FLP_) == (spec.specEnum._Active);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(28, true);
        if (this.doInfoEvent) this.infoEvent(28, true);

        spec.FLP_ = spec.specEnum._Inactive;

        if (this.doInfoEvent) this.infoEvent(28, false);
        if (this.doInfoPrintOutput) this.printOutput(28, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 16 and event "FSP.u_active".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge16() {
        var guard = (spec.FSP_) == (spec.specEnum._Inactive);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(29, true);
        if (this.doInfoEvent) this.infoEvent(29, true);

        spec.FSP_ = spec.specEnum._Active;

        if (this.doInfoEvent) this.infoEvent(29, false);
        if (this.doInfoPrintOutput) this.printOutput(29, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 17 and event "FSP.u_inactive".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge17() {
        var guard = (spec.FSP_) == (spec.specEnum._Active);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(30, true);
        if (this.doInfoEvent) this.infoEvent(30, true);

        spec.FSP_ = spec.specEnum._Inactive;

        if (this.doInfoEvent) this.infoEvent(30, false);
        if (this.doInfoPrintOutput) this.printOutput(30, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 18 and event "RB.u_press".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge18() {
        var guard = (spec.RB_) == (spec.specEnum._Released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(34, true);
        if (this.doInfoEvent) this.infoEvent(34, true);

        spec.RB_ = spec.specEnum._Pressed;

        if (this.doInfoEvent) this.infoEvent(34, false);
        if (this.doInfoPrintOutput) this.printOutput(34, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 19 and event "RB.u_release".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge19() {
        var guard = (spec.RB_) == (spec.specEnum._Pressed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(35, true);
        if (this.doInfoEvent) this.infoEvent(35, true);

        spec.RB_ = spec.specEnum._Released;

        if (this.doInfoEvent) this.infoEvent(35, false);
        if (this.doInfoPrintOutput) this.printOutput(35, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 20 and event "RC.u_start".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge20() {
        var guard = ((spec.RC_) == (spec.specEnum._Start)) || ((spec.RC_) == (spec.specEnum._Stop));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(36, true);
        if (this.doInfoEvent) this.infoEvent(36, true);

        if ((spec.RC_) == (spec.specEnum._Start)) {
            spec.RC_ = spec.specEnum._Start;
        } else if ((spec.RC_) == (spec.specEnum._Stop)) {
            spec.RC_ = spec.specEnum._Start;
        }

        if (this.doInfoEvent) this.infoEvent(36, false);
        if (this.doInfoPrintOutput) this.printOutput(36, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 21 and event "RC.u_stop".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge21() {
        var guard = ((spec.RC_) == (spec.specEnum._Start)) || ((spec.RC_) == (spec.specEnum._Stop));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(37, true);
        if (this.doInfoEvent) this.infoEvent(37, true);

        if ((spec.RC_) == (spec.specEnum._Start)) {
            spec.RC_ = spec.specEnum._Stop;
        } else if ((spec.RC_) == (spec.specEnum._Stop)) {
            spec.RC_ = spec.specEnum._Stop;
        }

        if (this.doInfoEvent) this.infoEvent(37, false);
        if (this.doInfoPrintOutput) this.printOutput(37, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 22 and event "SH.u_chdir".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge22() {
        var guard = ((((spec.R21_) == (spec.specEnum._A)) || ((spec.R21_) == (spec.specEnum._B))) || (((spec.R21_) == (spec.specEnum._C)) || ((spec.R21_) == (spec.specEnum._D)))) && ((spec.SH_) == (spec.specEnum._On));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(42, true);
        if (this.doInfoEvent) this.infoEvent(42, true);

        if ((spec.R21_) == (spec.specEnum._A)) {
            spec.R21_ = spec.specEnum._A;
        } else if ((spec.R21_) == (spec.specEnum._B)) {
            spec.R21_ = spec.specEnum._C;
        } else if ((spec.R21_) == (spec.specEnum._C)) {
            spec.R21_ = spec.specEnum._B;
        } else if ((spec.R21_) == (spec.specEnum._D)) {
            spec.R21_ = spec.specEnum._D;
        }

        if (this.doInfoEvent) this.infoEvent(42, false);
        if (this.doInfoPrintOutput) this.printOutput(42, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 23 and event "SH.u_error".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge23() {
        var guard = (((spec.R18c_) == (spec.specEnum._A)) || ((spec.R18c_) == (spec.specEnum._B))) && ((spec.SH_) == (spec.specEnum._On));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(43, true);
        if (this.doInfoEvent) this.infoEvent(43, true);

        if ((spec.R18c_) == (spec.specEnum._A)) {
            spec.R18c_ = spec.specEnum._B;
        } else if ((spec.R18c_) == (spec.specEnum._B)) {
            spec.R18c_ = spec.specEnum._B;
        }

        if (this.doInfoEvent) this.infoEvent(43, false);
        if (this.doInfoPrintOutput) this.printOutput(43, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 24 and event "SM.u_error".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge24() {
        var guard = (((spec.R18c_) == (spec.specEnum._A)) || ((spec.R18c_) == (spec.specEnum._B))) && (((spec.SM_) == (spec.specEnum._Off)) || ((spec.SM_) == (spec.specEnum._On)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(46, true);
        if (this.doInfoEvent) this.infoEvent(46, true);

        if ((spec.R18c_) == (spec.specEnum._A)) {
            spec.R18c_ = spec.specEnum._B;
        } else if ((spec.R18c_) == (spec.specEnum._B)) {
            spec.R18c_ = spec.specEnum._B;
        }
        if ((spec.SM_) == (spec.specEnum._Off)) {
            spec.SM_ = spec.specEnum._Off;
        } else if ((spec.SM_) == (spec.specEnum._On)) {
            spec.SM_ = spec.specEnum._Off;
        }

        if (this.doInfoEvent) this.infoEvent(46, false);
        if (this.doInfoPrintOutput) this.printOutput(46, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 25 and event "BL.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge25() {
        var guard = ((spec.BL_) == (spec.specEnum._On)) && (((spec.MM_) == (spec.specEnum._Active)) || ((spec.MM_) == (spec.specEnum._Emergency)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.BL_ = spec.specEnum._Off;

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 26 and event "BL.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge26() {
        var guard = ((spec.BL_) == (spec.specEnum._Off)) && ((spec.MM_) == (spec.specEnum._Reset));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.BL_ = spec.specEnum._On;

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 27 and event "DM.c_bw".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge27() {
        var guard = ((((spec.DM_) == (spec.specEnum._On)) && ((((spec.Last_) == (spec.specEnum._S0)) || (((spec.Last_) == (spec.specEnum._S1)) || ((spec.Last_) == (spec.specEnum._S2)))) || (((spec.Last_) == (spec.specEnum._S3)) || (((spec.Last_) == (spec.specEnum._S5)) || ((spec.Last_) == (spec.specEnum._S6)))))) && ((spec.R21_) == (spec.specEnum._C))) && (((spec.MM_) == (spec.specEnum._Active)) && (((spec.RC_) == (spec.specEnum._Start)) && (((spec.BSP_) == (spec.specEnum._Inactive)) && ((spec.BLP_) == (spec.specEnum._Inactive)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(12, true);
        if (this.doInfoEvent) this.infoEvent(12, true);

        if ((spec.Last_) == (spec.specEnum._S0)) {
            spec.Last_ = spec.specEnum._S4;
        } else if ((spec.Last_) == (spec.specEnum._S1)) {
            spec.Last_ = spec.specEnum._S4;
        } else if ((spec.Last_) == (spec.specEnum._S2)) {
            spec.Last_ = spec.specEnum._S4;
        } else if ((spec.Last_) == (spec.specEnum._S3)) {
            spec.Last_ = spec.specEnum._S4;
        } else if ((spec.Last_) == (spec.specEnum._S5)) {
            spec.Last_ = spec.specEnum._S4;
        } else if ((spec.Last_) == (spec.specEnum._S6)) {
            spec.Last_ = spec.specEnum._S4;
        }

        if (this.doInfoEvent) this.infoEvent(12, false);
        if (this.doInfoPrintOutput) this.printOutput(12, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 28 and event "DM.c_bwslow".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge28() {
        var guard = ((((spec.DM_) == (spec.specEnum._On)) && ((((spec.Last_) == (spec.specEnum._S0)) || (((spec.Last_) == (spec.specEnum._S1)) || ((spec.Last_) == (spec.specEnum._S2)))) || ((((spec.Last_) == (spec.specEnum._S3)) || ((spec.Last_) == (spec.specEnum._S4))) || ((spec.Last_) == (spec.specEnum._S6))))) && ((spec.R21_) == (spec.specEnum._C))) && (((spec.MM_) == (spec.specEnum._Active)) && (((spec.RC_) == (spec.specEnum._Start)) && (((spec.BSP_) == (spec.specEnum._Inactive)) && ((spec.BLP_) == (spec.specEnum._Active)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(13, true);
        if (this.doInfoEvent) this.infoEvent(13, true);

        if ((spec.Last_) == (spec.specEnum._S0)) {
            spec.Last_ = spec.specEnum._S5;
        } else if ((spec.Last_) == (spec.specEnum._S1)) {
            spec.Last_ = spec.specEnum._S5;
        } else if ((spec.Last_) == (spec.specEnum._S2)) {
            spec.Last_ = spec.specEnum._S5;
        } else if ((spec.Last_) == (spec.specEnum._S3)) {
            spec.Last_ = spec.specEnum._S5;
        } else if ((spec.Last_) == (spec.specEnum._S4)) {
            spec.Last_ = spec.specEnum._S5;
        } else if ((spec.Last_) == (spec.specEnum._S6)) {
            spec.Last_ = spec.specEnum._S5;
        }

        if (this.doInfoEvent) this.infoEvent(13, false);
        if (this.doInfoPrintOutput) this.printOutput(13, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 29 and event "DM.c_bwstop".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge29() {
        var guard = ((((spec.DM_) == (spec.specEnum._On)) && ((((spec.Last_) == (spec.specEnum._S0)) || (((spec.Last_) == (spec.specEnum._S1)) || ((spec.Last_) == (spec.specEnum._S2)))) || ((((spec.Last_) == (spec.specEnum._S3)) || ((spec.Last_) == (spec.specEnum._S4))) || ((spec.Last_) == (spec.specEnum._S5))))) && ((spec.R21_) == (spec.specEnum._C))) && (((spec.MM_) == (spec.specEnum._Active)) && (((spec.RC_) == (spec.specEnum._Stop)) || ((spec.BSP_) == (spec.specEnum._Active))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(14, true);
        if (this.doInfoEvent) this.infoEvent(14, true);

        if ((spec.Last_) == (spec.specEnum._S0)) {
            spec.Last_ = spec.specEnum._S6;
        } else if ((spec.Last_) == (spec.specEnum._S1)) {
            spec.Last_ = spec.specEnum._S6;
        } else if ((spec.Last_) == (spec.specEnum._S2)) {
            spec.Last_ = spec.specEnum._S6;
        } else if ((spec.Last_) == (spec.specEnum._S3)) {
            spec.Last_ = spec.specEnum._S6;
        } else if ((spec.Last_) == (spec.specEnum._S4)) {
            spec.Last_ = spec.specEnum._S6;
        } else if ((spec.Last_) == (spec.specEnum._S5)) {
            spec.Last_ = spec.specEnum._S6;
        }

        if (this.doInfoEvent) this.infoEvent(14, false);
        if (this.doInfoPrintOutput) this.printOutput(14, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 30 and event "DM.c_enable_bw".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge30() {
        var guard = (((((spec.DM_) == (spec.specEnum._Off)) || ((spec.DM_) == (spec.specEnum._Stopping))) && ((spec.R21_) == (spec.specEnum._A))) && ((spec.R22b_) == (spec.specEnum._C))) && (((spec.MM_) == (spec.specEnum._Active)) && ((spec.SM_) == (spec.specEnum._On)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(15, true);
        if (this.doInfoEvent) this.infoEvent(15, true);

        if ((spec.DM_) == (spec.specEnum._Off)) {
            spec.DM_ = spec.specEnum._On;
        } else if ((spec.DM_) == (spec.specEnum._Stopping)) {
            spec.DM_ = spec.specEnum._On;
        }
        spec.R21_ = spec.specEnum._C;
        spec.R22b_ = spec.specEnum._A;

        if (this.doInfoEvent) this.infoEvent(15, false);
        if (this.doInfoPrintOutput) this.printOutput(15, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 31 and event "DM.c_enable_fw".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge31() {
        var guard = (((((spec.DM_) == (spec.specEnum._Off)) || ((spec.DM_) == (spec.specEnum._Stopping))) && ((spec.R21_) == (spec.specEnum._A))) && ((spec.R22a_) == (spec.specEnum._C))) && (((spec.MM_) == (spec.specEnum._Active)) && ((spec.SM_) == (spec.specEnum._On)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(16, true);
        if (this.doInfoEvent) this.infoEvent(16, true);

        if ((spec.DM_) == (spec.specEnum._Off)) {
            spec.DM_ = spec.specEnum._On;
        } else if ((spec.DM_) == (spec.specEnum._Stopping)) {
            spec.DM_ = spec.specEnum._On;
        }
        spec.R21_ = spec.specEnum._B;
        spec.R22a_ = spec.specEnum._A;

        if (this.doInfoEvent) this.infoEvent(16, false);
        if (this.doInfoPrintOutput) this.printOutput(16, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 32 and event "DM.c_fw".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge32() {
        var guard = ((((spec.DM_) == (spec.specEnum._On)) && ((((spec.Last_) == (spec.specEnum._S0)) || ((spec.Last_) == (spec.specEnum._S2))) || ((((spec.Last_) == (spec.specEnum._S3)) || ((spec.Last_) == (spec.specEnum._S4))) || (((spec.Last_) == (spec.specEnum._S5)) || ((spec.Last_) == (spec.specEnum._S6)))))) && ((spec.R21_) == (spec.specEnum._B))) && (((spec.MM_) == (spec.specEnum._Active)) && (((spec.RC_) == (spec.specEnum._Start)) && (((spec.FSP_) == (spec.specEnum._Inactive)) && ((spec.FLP_) == (spec.specEnum._Inactive)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(17, true);
        if (this.doInfoEvent) this.infoEvent(17, true);

        if ((spec.Last_) == (spec.specEnum._S0)) {
            spec.Last_ = spec.specEnum._S1;
        } else if ((spec.Last_) == (spec.specEnum._S2)) {
            spec.Last_ = spec.specEnum._S1;
        } else if ((spec.Last_) == (spec.specEnum._S3)) {
            spec.Last_ = spec.specEnum._S1;
        } else if ((spec.Last_) == (spec.specEnum._S4)) {
            spec.Last_ = spec.specEnum._S1;
        } else if ((spec.Last_) == (spec.specEnum._S5)) {
            spec.Last_ = spec.specEnum._S1;
        } else if ((spec.Last_) == (spec.specEnum._S6)) {
            spec.Last_ = spec.specEnum._S1;
        }

        if (this.doInfoEvent) this.infoEvent(17, false);
        if (this.doInfoPrintOutput) this.printOutput(17, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 33 and event "DM.c_fwslow".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge33() {
        var guard = ((((spec.DM_) == (spec.specEnum._On)) && ((((spec.Last_) == (spec.specEnum._S0)) || ((spec.Last_) == (spec.specEnum._S1))) || ((((spec.Last_) == (spec.specEnum._S3)) || ((spec.Last_) == (spec.specEnum._S4))) || (((spec.Last_) == (spec.specEnum._S5)) || ((spec.Last_) == (spec.specEnum._S6)))))) && ((spec.R21_) == (spec.specEnum._B))) && (((spec.MM_) == (spec.specEnum._Active)) && (((spec.RC_) == (spec.specEnum._Start)) && (((spec.FSP_) == (spec.specEnum._Inactive)) && ((spec.FLP_) == (spec.specEnum._Active)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(18, true);
        if (this.doInfoEvent) this.infoEvent(18, true);

        if ((spec.Last_) == (spec.specEnum._S0)) {
            spec.Last_ = spec.specEnum._S2;
        } else if ((spec.Last_) == (spec.specEnum._S1)) {
            spec.Last_ = spec.specEnum._S2;
        } else if ((spec.Last_) == (spec.specEnum._S3)) {
            spec.Last_ = spec.specEnum._S2;
        } else if ((spec.Last_) == (spec.specEnum._S4)) {
            spec.Last_ = spec.specEnum._S2;
        } else if ((spec.Last_) == (spec.specEnum._S5)) {
            spec.Last_ = spec.specEnum._S2;
        } else if ((spec.Last_) == (spec.specEnum._S6)) {
            spec.Last_ = spec.specEnum._S2;
        }

        if (this.doInfoEvent) this.infoEvent(18, false);
        if (this.doInfoPrintOutput) this.printOutput(18, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 34 and event "DM.c_fwstop".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge34() {
        var guard = ((((spec.DM_) == (spec.specEnum._On)) && ((((spec.Last_) == (spec.specEnum._S0)) || (((spec.Last_) == (spec.specEnum._S1)) || ((spec.Last_) == (spec.specEnum._S2)))) || (((spec.Last_) == (spec.specEnum._S4)) || (((spec.Last_) == (spec.specEnum._S5)) || ((spec.Last_) == (spec.specEnum._S6)))))) && ((spec.R21_) == (spec.specEnum._B))) && (((spec.MM_) == (spec.specEnum._Active)) && (((spec.RC_) == (spec.specEnum._Stop)) || ((spec.FSP_) == (spec.specEnum._Active))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(19, true);
        if (this.doInfoEvent) this.infoEvent(19, true);

        if ((spec.Last_) == (spec.specEnum._S0)) {
            spec.Last_ = spec.specEnum._S3;
        } else if ((spec.Last_) == (spec.specEnum._S1)) {
            spec.Last_ = spec.specEnum._S3;
        } else if ((spec.Last_) == (spec.specEnum._S2)) {
            spec.Last_ = spec.specEnum._S3;
        } else if ((spec.Last_) == (spec.specEnum._S4)) {
            spec.Last_ = spec.specEnum._S3;
        } else if ((spec.Last_) == (spec.specEnum._S5)) {
            spec.Last_ = spec.specEnum._S3;
        } else if ((spec.Last_) == (spec.specEnum._S6)) {
            spec.Last_ = spec.specEnum._S3;
        }

        if (this.doInfoEvent) this.infoEvent(19, false);
        if (this.doInfoPrintOutput) this.printOutput(19, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 35 and event "DM.c_stop".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge35() {
        var guard = (((((spec.DM_) == (spec.specEnum._Off)) || ((spec.DM_) == (spec.specEnum._On))) && ((((spec.Last_) == (spec.specEnum._S0)) || (((spec.Last_) == (spec.specEnum._S1)) || ((spec.Last_) == (spec.specEnum._S2)))) || ((((spec.Last_) == (spec.specEnum._S3)) || ((spec.Last_) == (spec.specEnum._S4))) || (((spec.Last_) == (spec.specEnum._S5)) || ((spec.Last_) == (spec.specEnum._S6)))))) && (((spec.R21_) == (spec.specEnum._B)) || ((spec.R21_) == (spec.specEnum._C)))) && ((((spec.MM_) == (spec.specEnum._Reset)) || ((spec.MM_) == (spec.specEnum._Emergency))) && ((spec.SH_) == (spec.specEnum._Off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(20, true);
        if (this.doInfoEvent) this.infoEvent(20, true);

        if ((spec.DM_) == (spec.specEnum._Off)) {
            spec.DM_ = spec.specEnum._Stopping;
        } else if ((spec.DM_) == (spec.specEnum._On)) {
            spec.DM_ = spec.specEnum._Stopping;
        }
        if ((spec.Last_) == (spec.specEnum._S0)) {
            spec.Last_ = spec.specEnum._S0;
        } else if ((spec.Last_) == (spec.specEnum._S1)) {
            spec.Last_ = spec.specEnum._S0;
        } else if ((spec.Last_) == (spec.specEnum._S2)) {
            spec.Last_ = spec.specEnum._S0;
        } else if ((spec.Last_) == (spec.specEnum._S3)) {
            spec.Last_ = spec.specEnum._S0;
        } else if ((spec.Last_) == (spec.specEnum._S4)) {
            spec.Last_ = spec.specEnum._S0;
        } else if ((spec.Last_) == (spec.specEnum._S5)) {
            spec.Last_ = spec.specEnum._S0;
        } else if ((spec.Last_) == (spec.specEnum._S6)) {
            spec.Last_ = spec.specEnum._S0;
        }
        if ((spec.R21_) == (spec.specEnum._B)) {
            spec.R21_ = spec.specEnum._D;
        } else if ((spec.R21_) == (spec.specEnum._C)) {
            spec.R21_ = spec.specEnum._D;
        }

        if (this.doInfoEvent) this.infoEvent(20, false);
        if (this.doInfoPrintOutput) this.printOutput(20, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 36 and event "FL.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge36() {
        var guard = ((spec.FL_) == (spec.specEnum._On)) && (((spec.MM_) == (spec.specEnum._Active)) || ((spec.MM_) == (spec.specEnum._Emergency)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(25, true);
        if (this.doInfoEvent) this.infoEvent(25, true);

        spec.FL_ = spec.specEnum._Off;

        if (this.doInfoEvent) this.infoEvent(25, false);
        if (this.doInfoPrintOutput) this.printOutput(25, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 37 and event "FL.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge37() {
        var guard = ((spec.FL_) == (spec.specEnum._Off)) && ((spec.MM_) == (spec.specEnum._Reset));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(26, true);
        if (this.doInfoEvent) this.infoEvent(26, true);

        spec.FL_ = spec.specEnum._On;

        if (this.doInfoEvent) this.infoEvent(26, false);
        if (this.doInfoPrintOutput) this.printOutput(26, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 38 and event "MM.c_active".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge38() {
        var guard = ((((spec.MM_) == (spec.specEnum._Reset)) && (((spec.R22a_) == (spec.specEnum._A)) || ((spec.R22a_) == (spec.specEnum._B)))) && (((spec.R22b_) == (spec.specEnum._A)) || ((spec.R22b_) == (spec.specEnum._B)))) && (((spec.BS_) == (spec.specEnum._Inactive)) && (((spec.BA_) == (spec.specEnum._Ok)) && (((((spec.FB_) == (spec.specEnum._Pressed)) && ((spec.BB_) == (spec.specEnum._Released))) || (((spec.BB_) == (spec.specEnum._Pressed)) && ((spec.FB_) == (spec.specEnum._Released)))) && ((spec.RB_) == (spec.specEnum._Released)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(31, true);
        if (this.doInfoEvent) this.infoEvent(31, true);

        spec.MM_ = spec.specEnum._Active;
        if ((spec.R22a_) == (spec.specEnum._A)) {
            spec.R22a_ = spec.specEnum._A;
        } else if ((spec.R22a_) == (spec.specEnum._B)) {
            spec.R22a_ = spec.specEnum._C;
        }
        if ((spec.R22b_) == (spec.specEnum._A)) {
            spec.R22b_ = spec.specEnum._A;
        } else if ((spec.R22b_) == (spec.specEnum._B)) {
            spec.R22b_ = spec.specEnum._C;
        }

        if (this.doInfoEvent) this.infoEvent(31, false);
        if (this.doInfoPrintOutput) this.printOutput(31, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 39 and event "MM.c_emergency".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge39() {
        var guard = ((((spec.MM_) == (spec.specEnum._Reset)) || ((spec.MM_) == (spec.specEnum._Active))) && (((spec.R18c_) == (spec.specEnum._B)) && (((spec.R22a_) == (spec.specEnum._A)) || (((spec.R22a_) == (spec.specEnum._B)) || ((spec.R22a_) == (spec.specEnum._C)))))) && (((spec.R22b_) == (spec.specEnum._A)) || (((spec.R22b_) == (spec.specEnum._B)) || ((spec.R22b_) == (spec.specEnum._C))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(32, true);
        if (this.doInfoEvent) this.infoEvent(32, true);

        if ((spec.MM_) == (spec.specEnum._Reset)) {
            spec.MM_ = spec.specEnum._Emergency;
        } else if ((spec.MM_) == (spec.specEnum._Active)) {
            spec.MM_ = spec.specEnum._Emergency;
        }
        if ((spec.R22a_) == (spec.specEnum._A)) {
            spec.R22a_ = spec.specEnum._A;
        } else if ((spec.R22a_) == (spec.specEnum._B)) {
            spec.R22a_ = spec.specEnum._B;
        } else if ((spec.R22a_) == (spec.specEnum._C)) {
            spec.R22a_ = spec.specEnum._A;
        }
        if ((spec.R22b_) == (spec.specEnum._A)) {
            spec.R22b_ = spec.specEnum._A;
        } else if ((spec.R22b_) == (spec.specEnum._B)) {
            spec.R22b_ = spec.specEnum._B;
        } else if ((spec.R22b_) == (spec.specEnum._C)) {
            spec.R22b_ = spec.specEnum._A;
        }

        if (this.doInfoEvent) this.infoEvent(32, false);
        if (this.doInfoPrintOutput) this.printOutput(32, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 40 and event "MM.c_reset".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge40() {
        var guard = (((((spec.MM_) == (spec.specEnum._Emergency)) || ((spec.MM_) == (spec.specEnum._Active))) && (((spec.R18c_) == (spec.specEnum._A)) || ((spec.R18c_) == (spec.specEnum._B)))) && ((((spec.R22a_) == (spec.specEnum._A)) || (((spec.R22a_) == (spec.specEnum._B)) || ((spec.R22a_) == (spec.specEnum._C)))) && (((spec.R22b_) == (spec.specEnum._A)) || (((spec.R22b_) == (spec.specEnum._B)) || ((spec.R22b_) == (spec.specEnum._C)))))) && (((spec.BS_) == (spec.specEnum._Inactive)) && (((spec.BA_) == (spec.specEnum._Ok)) && ((spec.RB_) == (spec.specEnum._Pressed))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(33, true);
        if (this.doInfoEvent) this.infoEvent(33, true);

        if ((spec.MM_) == (spec.specEnum._Emergency)) {
            spec.MM_ = spec.specEnum._Reset;
        } else if ((spec.MM_) == (spec.specEnum._Active)) {
            spec.MM_ = spec.specEnum._Reset;
        }
        if ((spec.R18c_) == (spec.specEnum._A)) {
            spec.R18c_ = spec.specEnum._A;
        } else if ((spec.R18c_) == (spec.specEnum._B)) {
            spec.R18c_ = spec.specEnum._A;
        }
        if ((spec.R22a_) == (spec.specEnum._A)) {
            spec.R22a_ = spec.specEnum._A;
        } else if ((spec.R22a_) == (spec.specEnum._B)) {
            spec.R22a_ = spec.specEnum._B;
        } else if ((spec.R22a_) == (spec.specEnum._C)) {
            spec.R22a_ = spec.specEnum._A;
        }
        if ((spec.R22b_) == (spec.specEnum._A)) {
            spec.R22b_ = spec.specEnum._A;
        } else if ((spec.R22b_) == (spec.specEnum._B)) {
            spec.R22b_ = spec.specEnum._B;
        } else if ((spec.R22b_) == (spec.specEnum._C)) {
            spec.R22b_ = spec.specEnum._A;
        }

        if (this.doInfoEvent) this.infoEvent(33, false);
        if (this.doInfoPrintOutput) this.printOutput(33, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 41 and event "RL.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge41() {
        var guard = ((spec.RL_) == (spec.specEnum._On)) && (((spec.MM_) == (spec.specEnum._Active)) || ((spec.MM_) == (spec.specEnum._Reset)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(38, true);
        if (this.doInfoEvent) this.infoEvent(38, true);

        spec.RL_ = spec.specEnum._Off;

        if (this.doInfoEvent) this.infoEvent(38, false);
        if (this.doInfoPrintOutput) this.printOutput(38, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 42 and event "RL.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge42() {
        var guard = ((spec.RL_) == (spec.specEnum._Off)) && ((spec.MM_) == (spec.specEnum._Emergency));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(39, true);
        if (this.doInfoEvent) this.infoEvent(39, true);

        spec.RL_ = spec.specEnum._On;

        if (this.doInfoEvent) this.infoEvent(39, false);
        if (this.doInfoPrintOutput) this.printOutput(39, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 43 and event "SH.c_disable".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge43() {
        var guard = ((spec.SH_) == (spec.specEnum._On)) && (((spec.MM_) == (spec.specEnum._Reset)) || ((spec.MM_) == (spec.specEnum._Emergency)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(40, true);
        if (this.doInfoEvent) this.infoEvent(40, true);

        spec.SH_ = spec.specEnum._Off;

        if (this.doInfoEvent) this.infoEvent(40, false);
        if (this.doInfoPrintOutput) this.printOutput(40, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 44 and event "SH.c_enable".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge44() {
        var guard = ((spec.SH_) == (spec.specEnum._Off)) && (((spec.MM_) == (spec.specEnum._Active)) && (((spec.SM_) == (spec.specEnum._On)) && ((spec.DM_) == (spec.specEnum._On))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(41, true);
        if (this.doInfoEvent) this.infoEvent(41, true);

        spec.SH_ = spec.specEnum._On;

        if (this.doInfoEvent) this.infoEvent(41, false);
        if (this.doInfoPrintOutput) this.printOutput(41, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 45 and event "SM.c_disable".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge45() {
        var guard = ((spec.SM_) == (spec.specEnum._On)) && ((((spec.MM_) == (spec.specEnum._Reset)) || ((spec.MM_) == (spec.specEnum._Emergency))) && ((spec.DM_) == (spec.specEnum._Off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(44, true);
        if (this.doInfoEvent) this.infoEvent(44, true);

        spec.SM_ = spec.specEnum._Off;

        if (this.doInfoEvent) this.infoEvent(44, false);
        if (this.doInfoPrintOutput) this.printOutput(44, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 46 and event "SM.c_enable".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge46() {
        var guard = ((spec.SM_) == (spec.specEnum._Off)) && ((spec.MM_) == (spec.specEnum._Active));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(45, true);
        if (this.doInfoEvent) this.infoEvent(45, true);

        spec.SM_ = spec.specEnum._On;

        if (this.doInfoEvent) this.infoEvent(45, false);
        if (this.doInfoPrintOutput) this.printOutput(45, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /** Initializes the state. */
    initState() {
        // Initialize constants, if not yet done so.
        if (!this.constantsInitialized) {
            this.constantsInitialized = true;
            spec.bdd_nodes_ = [];
        }

        // Initialize SVG input.
        this.svgInQueue = [];
        this.svgInId = null;
        this.svgInEvent = -1;

        // CIF model state variables.
        spec.BA_ = spec.specEnum._Ok;
        spec.BB_ = spec.specEnum._Released;
        spec.BL_ = spec.specEnum._Off;
        spec.BLP_ = spec.specEnum._Inactive;
        spec.BS_ = spec.specEnum._Inactive;
        spec.BSP_ = spec.specEnum._Inactive;
        spec.DM_ = spec.specEnum._Off;
        spec.FB_ = spec.specEnum._Released;
        spec.FL_ = spec.specEnum._Off;
        spec.FLP_ = spec.specEnum._Inactive;
        spec.FSP_ = spec.specEnum._Inactive;
        spec.Last_ = spec.specEnum._S0;
        spec.MM_ = spec.specEnum._Emergency;
        spec.R18c_ = spec.specEnum._A;
        spec.R21_ = spec.specEnum._A;
        spec.R22a_ = spec.specEnum._A;
        spec.R22b_ = spec.specEnum._A;
        spec.RB_ = spec.specEnum._Released;
        spec.RC_ = spec.specEnum._Start;
        spec.RL_ = spec.specEnum._On;
        spec.SH_ = spec.specEnum._Off;
        spec.SM_ = spec.specEnum._Off;
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
        state += specUtils.fmt(', BA=%s', specUtils.valueToStr(spec.BA_));
        state += specUtils.fmt(', BB=%s', specUtils.valueToStr(spec.BB_));
        state += specUtils.fmt(', BL=%s', specUtils.valueToStr(spec.BL_));
        state += specUtils.fmt(', BLP=%s', specUtils.valueToStr(spec.BLP_));
        state += specUtils.fmt(', BS=%s', specUtils.valueToStr(spec.BS_));
        state += specUtils.fmt(', BSP=%s', specUtils.valueToStr(spec.BSP_));
        state += specUtils.fmt(', DM=%s', specUtils.valueToStr(spec.DM_));
        state += specUtils.fmt(', FB=%s', specUtils.valueToStr(spec.FB_));
        state += specUtils.fmt(', FL=%s', specUtils.valueToStr(spec.FL_));
        state += specUtils.fmt(', FLP=%s', specUtils.valueToStr(spec.FLP_));
        state += specUtils.fmt(', FSP=%s', specUtils.valueToStr(spec.FSP_));
        state += specUtils.fmt(', Last=%s', specUtils.valueToStr(spec.Last_));
        state += specUtils.fmt(', MM=%s', specUtils.valueToStr(spec.MM_));
        state += specUtils.fmt(', R18c=%s', specUtils.valueToStr(spec.R18c_));
        state += specUtils.fmt(', R21=%s', specUtils.valueToStr(spec.R21_));
        state += specUtils.fmt(', R22a=%s', specUtils.valueToStr(spec.R22a_));
        state += specUtils.fmt(', R22b=%s', specUtils.valueToStr(spec.R22b_));
        state += specUtils.fmt(', RB=%s', specUtils.valueToStr(spec.RB_));
        state += specUtils.fmt(', RC=%s', specUtils.valueToStr(spec.RC_));
        state += specUtils.fmt(', RL=%s', specUtils.valueToStr(spec.RL_));
        state += specUtils.fmt(', SH=%s', specUtils.valueToStr(spec.SH_));
        state += specUtils.fmt(', SM=%s', specUtils.valueToStr(spec.SM_));
        return state;
    }


    /**
     * Evaluates algebraic variable "bdd_value0".
     *
     * @return The evaluation result.
     */
    bdd_value0_() {
        return (spec.BA_) == (spec.specEnum._Empty);
    }

    /**
     * Evaluates algebraic variable "bdd_value1".
     *
     * @return The evaluation result.
     */
    bdd_value1_() {
        return (spec.BB_) == (spec.specEnum._Pressed);
    }

    /**
     * Evaluates algebraic variable "bdd_value2".
     *
     * @return The evaluation result.
     */
    bdd_value2_() {
        return (spec.BL_) == (spec.specEnum._On);
    }

    /**
     * Evaluates algebraic variable "bdd_value3".
     *
     * @return The evaluation result.
     */
    bdd_value3_() {
        return (spec.BLP_) == (spec.specEnum._Active);
    }

    /**
     * Evaluates algebraic variable "bdd_value4".
     *
     * @return The evaluation result.
     */
    bdd_value4_() {
        return (spec.BS_) == (spec.specEnum._Active);
    }

    /**
     * Evaluates algebraic variable "bdd_value5".
     *
     * @return The evaluation result.
     */
    bdd_value5_() {
        return (spec.BSP_) == (spec.specEnum._Active);
    }

    /**
     * Evaluates algebraic variable "bdd_value6".
     *
     * @return The evaluation result.
     */
    bdd_value6_() {
        return (spec.DM_) == (spec.specEnum._On);
    }

    /**
     * Evaluates algebraic variable "bdd_value7".
     *
     * @return The evaluation result.
     */
    bdd_value7_() {
        return (spec.DM_) == (spec.specEnum._Stopping);
    }

    /**
     * Evaluates algebraic variable "bdd_value8".
     *
     * @return The evaluation result.
     */
    bdd_value8_() {
        return (spec.FB_) == (spec.specEnum._Pressed);
    }

    /**
     * Evaluates algebraic variable "bdd_value9".
     *
     * @return The evaluation result.
     */
    bdd_value9_() {
        return (spec.FL_) == (spec.specEnum._On);
    }

    /**
     * Evaluates algebraic variable "bdd_value10".
     *
     * @return The evaluation result.
     */
    bdd_value10_() {
        return (spec.FLP_) == (spec.specEnum._Active);
    }

    /**
     * Evaluates algebraic variable "bdd_value11".
     *
     * @return The evaluation result.
     */
    bdd_value11_() {
        return (spec.FSP_) == (spec.specEnum._Active);
    }

    /**
     * Evaluates algebraic variable "bdd_value12".
     *
     * @return The evaluation result.
     */
    bdd_value12_() {
        return ((spec.Last_) == (spec.specEnum._S1)) || (((spec.Last_) == (spec.specEnum._S3)) || ((spec.Last_) == (spec.specEnum._S5)));
    }

    /**
     * Evaluates algebraic variable "bdd_value13".
     *
     * @return The evaluation result.
     */
    bdd_value13_() {
        return ((spec.Last_) == (spec.specEnum._S2)) || (((spec.Last_) == (spec.specEnum._S3)) || ((spec.Last_) == (spec.specEnum._S6)));
    }

    /**
     * Evaluates algebraic variable "bdd_value14".
     *
     * @return The evaluation result.
     */
    bdd_value14_() {
        return ((spec.Last_) == (spec.specEnum._S4)) || (((spec.Last_) == (spec.specEnum._S5)) || ((spec.Last_) == (spec.specEnum._S6)));
    }

    /**
     * Evaluates algebraic variable "bdd_value15".
     *
     * @return The evaluation result.
     */
    bdd_value15_() {
        return (spec.MM_) == (spec.specEnum._Reset);
    }

    /**
     * Evaluates algebraic variable "bdd_value16".
     *
     * @return The evaluation result.
     */
    bdd_value16_() {
        return (spec.MM_) == (spec.specEnum._Active);
    }

    /**
     * Evaluates algebraic variable "bdd_value17".
     *
     * @return The evaluation result.
     */
    bdd_value17_() {
        return (spec.R18c_) == (spec.specEnum._B);
    }

    /**
     * Evaluates algebraic variable "bdd_value18".
     *
     * @return The evaluation result.
     */
    bdd_value18_() {
        return ((spec.R21_) == (spec.specEnum._B)) || ((spec.R21_) == (spec.specEnum._D));
    }

    /**
     * Evaluates algebraic variable "bdd_value19".
     *
     * @return The evaluation result.
     */
    bdd_value19_() {
        return ((spec.R21_) == (spec.specEnum._C)) || ((spec.R21_) == (spec.specEnum._D));
    }

    /**
     * Evaluates algebraic variable "bdd_value20".
     *
     * @return The evaluation result.
     */
    bdd_value20_() {
        return (spec.R22a_) == (spec.specEnum._B);
    }

    /**
     * Evaluates algebraic variable "bdd_value21".
     *
     * @return The evaluation result.
     */
    bdd_value21_() {
        return (spec.R22a_) == (spec.specEnum._C);
    }

    /**
     * Evaluates algebraic variable "bdd_value22".
     *
     * @return The evaluation result.
     */
    bdd_value22_() {
        return (spec.R22b_) == (spec.specEnum._B);
    }

    /**
     * Evaluates algebraic variable "bdd_value23".
     *
     * @return The evaluation result.
     */
    bdd_value23_() {
        return (spec.R22b_) == (spec.specEnum._C);
    }

    /**
     * Evaluates algebraic variable "bdd_value24".
     *
     * @return The evaluation result.
     */
    bdd_value24_() {
        return (spec.RB_) == (spec.specEnum._Pressed);
    }

    /**
     * Evaluates algebraic variable "bdd_value25".
     *
     * @return The evaluation result.
     */
    bdd_value25_() {
        return (spec.RC_) == (spec.specEnum._Stop);
    }

    /**
     * Evaluates algebraic variable "bdd_value26".
     *
     * @return The evaluation result.
     */
    bdd_value26_() {
        return (spec.RL_) == (spec.specEnum._On);
    }

    /**
     * Evaluates algebraic variable "bdd_value27".
     *
     * @return The evaluation result.
     */
    bdd_value27_() {
        return (spec.SH_) == (spec.specEnum._On);
    }

    /**
     * Evaluates algebraic variable "bdd_value28".
     *
     * @return The evaluation result.
     */
    bdd_value28_() {
        return (spec.SM_) == (spec.specEnum._On);
    }

    /**
     * Evaluates algebraic variable "bdd_values".
     *
     * @return The evaluation result.
     */
    bdd_values_() {
        return [spec.bdd_value0_(), spec.bdd_value1_(), spec.bdd_value2_(), spec.bdd_value3_(), spec.bdd_value4_(), spec.bdd_value5_(), spec.bdd_value6_(), spec.bdd_value7_(), spec.bdd_value8_(), spec.bdd_value9_(), spec.bdd_value10_(), spec.bdd_value11_(), spec.bdd_value12_(), spec.bdd_value13_(), spec.bdd_value14_(), spec.bdd_value15_(), spec.bdd_value16_(), spec.bdd_value17_(), spec.bdd_value18_(), spec.bdd_value19_(), spec.bdd_value20_(), spec.bdd_value21_(), spec.bdd_value22_(), spec.bdd_value23_(), spec.bdd_value24_(), spec.bdd_value25_(), spec.bdd_value26_(), spec.bdd_value27_(), spec.bdd_value28_()];
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
