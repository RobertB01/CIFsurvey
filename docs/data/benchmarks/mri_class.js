/** Tuples. */


/** spec code generated from a CIF specification. */
class spec_class {
    /** specEnum declaration. It contains the single merged enum from the CIF model. */
    specEnum = Object.freeze({
        /** Literal "BlinkFast". */
        _BlinkFast: Symbol("BlinkFast"),

        /** Literal "BlinkSlow". */
        _BlinkSlow: Symbol("BlinkSlow"),

        /** Literal "ClutchOff". */
        _ClutchOff: Symbol("ClutchOff"),

        /** Literal "ClutchOn". */
        _ClutchOn: Symbol("ClutchOn"),

        /** Literal "HMoving". */
        _HMoving: Symbol("HMoving"),

        /** Literal "HorIn". */
        _HorIn: Symbol("HorIn"),

        /** Literal "HorInOff". */
        _HorInOff: Symbol("HorInOff"),

        /** Literal "HorInOn". */
        _HorInOn: Symbol("HorInOn"),

        /** Literal "Horizontal". */
        _Horizontal: Symbol("Horizontal"),

        /** Literal "HorMid". */
        _HorMid: Symbol("HorMid"),

        /** Literal "HorMoveIn". */
        _HorMoveIn: Symbol("HorMoveIn"),

        /** Literal "HorMoveOut". */
        _HorMoveOut: Symbol("HorMoveOut"),

        /** Literal "HorMoving". */
        _HorMoving: Symbol("HorMoving"),

        /** Literal "HorOutOff". */
        _HorOutOff: Symbol("HorOutOff"),

        /** Literal "HorOutOn". */
        _HorOutOn: Symbol("HorOutOn"),

        /** Literal "HorStopped". */
        _HorStopped: Symbol("HorStopped"),

        /** Literal "HorStopping". */
        _HorStopping: Symbol("HorStopping"),

        /** Literal "HOutTTOn". */
        _HOutTTOn: Symbol("HOutTTOn"),

        /** Literal "HStopCOn". */
        _HStopCOn: Symbol("HStopCOn"),

        /** Literal "Neutral". */
        _Neutral: Symbol("Neutral"),

        /** Literal "Normal". */
        _Normal: Symbol("Normal"),

        /** Literal "NotPushed". */
        _NotPushed: Symbol("NotPushed"),

        /** Literal "nVHN". */
        _nVHN: Symbol("nVHN"),

        /** Literal "nVHnN". */
        _nVHnN: Symbol("nVHnN"),

        /** Literal "nVnHnN". */
        _nVnHnN: Symbol("nVnHnN"),

        /** Literal "Off". */
        _Off: Symbol("Off"),

        /** Literal "OffOffIn". */
        _OffOffIn: Symbol("OffOffIn"),

        /** Literal "OffOffOut". */
        _OffOffOut: Symbol("OffOffOut"),

        /** Literal "OffOffStopped". */
        _OffOffStopped: Symbol("OffOffStopped"),

        /** Literal "OffOnIn". */
        _OffOnIn: Symbol("OffOnIn"),

        /** Literal "OffOnOut". */
        _OffOnOut: Symbol("OffOnOut"),

        /** Literal "OffOnStopped". */
        _OffOnStopped: Symbol("OffOnStopped"),

        /** Literal "On". */
        _On: Symbol("On"),

        /** Literal "OnOffIn". */
        _OnOffIn: Symbol("OnOffIn"),

        /** Literal "OnOffOut". */
        _OnOffOut: Symbol("OnOffOut"),

        /** Literal "OnOffStopped". */
        _OnOffStopped: Symbol("OnOffStopped"),

        /** Literal "OnOnIn". */
        _OnOnIn: Symbol("OnOnIn"),

        /** Literal "OnOnOut". */
        _OnOnOut: Symbol("OnOnOut"),

        /** Literal "OnOnStopped". */
        _OnOnStopped: Symbol("OnOnStopped"),

        /** Literal "Pushed". */
        _Pushed: Symbol("Pushed"),

        /** Literal "Restricted". */
        _Restricted: Symbol("Restricted"),

        /** Literal "TTOff". */
        _TTOff: Symbol("TTOff"),

        /** Literal "TTOn". */
        _TTOn: Symbol("TTOn"),

        /** Literal "TTROff". */
        _TTROff: Symbol("TTROff"),

        /** Literal "TTROn". */
        _TTROn: Symbol("TTROn"),

        /** Literal "TumbDown". */
        _TumbDown: Symbol("TumbDown"),

        /** Literal "TumbNeutral". */
        _TumbNeutral: Symbol("TumbNeutral"),

        /** Literal "TumbUp". */
        _TumbUp: Symbol("TumbUp"),

        /** Literal "VertDown". */
        _VertDown: Symbol("VertDown"),

        /** Literal "VertDownOff". */
        _VertDownOff: Symbol("VertDownOff"),

        /** Literal "VertDownOn". */
        _VertDownOn: Symbol("VertDownOn"),

        /** Literal "Vertical". */
        _Vertical: Symbol("Vertical"),

        /** Literal "VertMid". */
        _VertMid: Symbol("VertMid"),

        /** Literal "VertMoveDown". */
        _VertMoveDown: Symbol("VertMoveDown"),

        /** Literal "VertMoveUp". */
        _VertMoveUp: Symbol("VertMoveUp"),

        /** Literal "VertMoving". */
        _VertMoving: Symbol("VertMoving"),

        /** Literal "VertStopped". */
        _VertStopped: Symbol("VertStopped"),

        /** Literal "VertStopping". */
        _VertStopping: Symbol("VertStopping"),

        /** Literal "VertUp". */
        _VertUp: Symbol("VertUp"),

        /** Literal "VertUpOff". */
        _VertUpOff: Symbol("VertUpOff"),

        /** Literal "VertUpOn". */
        _VertUpOn: Symbol("VertUpOn"),

        /** Literal "VHN". */
        _VHN: Symbol("VHN"),

        /** Literal "VHnN". */
        _VHnN: Symbol("VHnN"),

        /** Literal "VnHN". */
        _VnHN: Symbol("VnHN"),

        /** Literal "VnHnN". */
        _VnHnN: Symbol("VnHnN")
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
        "c_hClutchOff",
        "c_hClutchOn",
        "c_hMoveIn",
        "c_hMoveOut",
        "c_hStopIn",
        "c_hStopOut",
        "c_hStopTabletop",
        "c_hStopTTR",
        "c_hStopTumble",
        "c_mLedBlinkFast",
        "c_mLedBlinkSlow",
        "c_mLedOff",
        "c_mLedOn",
        "c_nnormal",
        "c_vMoveDown",
        "c_vMoveUp",
        "c_vStopDown",
        "c_vStopTTR",
        "c_vStopTumble",
        "c_vStopUp",
        "u_hInOff",
        "u_hInOn",
        "u_hOutOff",
        "u_hOutOn",
        "u_hStopped",
        "u_hTabletopOff",
        "u_hTabletopOn",
        "u_hTTROff",
        "u_hTTROn",
        "u_uManualPushed",
        "u_uManualTimeout",
        "u_uTumbleDown",
        "u_uTumbleNeutral",
        "u_uTumbleUp",
        "u_vDownOff",
        "u_vDownOn",
        "u_vStopped",
        "u_vUpOff",
        "u_vUpOn"
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


    /** Discrete variable "HActuatorSensorRelations". */
    HActuatorSensorRelations_;

    /** Discrete variable "HClutchMove". */
    HClutchMove_;

    /** Discrete variable "HInSensor". */
    HInSensor_;

    /** Discrete variable "HMotor". */
    HMotor_;

    /** Discrete variable "HOutSensor". */
    HOutSensor_;

    /** Discrete variable "HSensorRelation". */
    HSensorRelation_;

    /** Discrete variable "hStopIn". */
    hStopIn_;

    /** Discrete variable "hStopInOut". */
    hStopInOut_;

    /** Discrete variable "hStopOut". */
    hStopOut_;

    /** Discrete variable "hStopTabletop". */
    hStopTabletop_;

    /** Discrete variable "hStopTTR". */
    hStopTTR_;

    /** Discrete variable "HTabletopSensor". */
    HTabletopSensor_;

    /** Discrete variable "HTTRSwitch". */
    HTTRSwitch_;

    /** Discrete variable "HVMode". */
    HVMode_;

    /** Discrete variable "HVSafe". */
    HVSafe_;

    /** Discrete variable "UIHVSwitch". */
    UIHVSwitch_;

    /** Discrete variable "UILedClutch". */
    UILedClutch_;

    /** Discrete variable "UILedModes". */
    UILedModes_;

    /** Discrete variable "UILedSequence". */
    UILedSequence_;

    /** Discrete variable "UIManualClutch". */
    UIManualClutch_;

    /** Discrete variable "UITumbleMove". */
    UITumbleMove_;

    /** Discrete variable "UITumbleSwitch". */
    UITumbleSwitch_;

    /** Discrete variable "VActuators". */
    VActuators_;

    /** Discrete variable "VDownSensor". */
    VDownSensor_;

    /** Discrete variable "VMotorSensorRelation". */
    VMotorSensorRelation_;

    /** Discrete variable "VSensorRelation". */
    VSensorRelation_;

    /** Discrete variable "vStopDown". */
    vStopDown_;

    /** Discrete variable "vStopUp". */
    vStopUp_;

    /** Discrete variable "vStopUpDown". */
    vStopUpDown_;

    /** Discrete variable "VUpSensor". */
    VUpSensor_;


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

            // Event "u_hInOff".
            edgeExecuted |= this.execEdge0();

            // Event "u_hInOn".
            edgeExecuted |= this.execEdge1();

            // Event "u_hOutOff".
            edgeExecuted |= this.execEdge2();

            // Event "u_hOutOn".
            edgeExecuted |= this.execEdge3();

            // Event "u_hStopped".
            edgeExecuted |= this.execEdge4();

            // Event "u_hTabletopOff".
            edgeExecuted |= this.execEdge5();

            // Event "u_hTabletopOn".
            edgeExecuted |= this.execEdge6();

            // Event "u_hTTROff".
            edgeExecuted |= this.execEdge7();

            // Event "u_hTTROn".
            edgeExecuted |= this.execEdge8();

            // Event "u_uManualPushed".
            edgeExecuted |= this.execEdge9();

            // Event "u_uManualTimeout".
            edgeExecuted |= this.execEdge10();

            // Event "u_uTumbleDown".
            edgeExecuted |= this.execEdge11();

            // Event "u_uTumbleNeutral".
            edgeExecuted |= this.execEdge12();

            // Event "u_uTumbleUp".
            edgeExecuted |= this.execEdge13();

            // Event "u_vDownOff".
            edgeExecuted |= this.execEdge14();

            // Event "u_vDownOn".
            edgeExecuted |= this.execEdge15();

            // Event "u_vStopped".
            edgeExecuted |= this.execEdge16();

            // Event "u_vUpOff".
            edgeExecuted |= this.execEdge17();

            // Event "u_vUpOn".
            edgeExecuted |= this.execEdge18();

            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Execute controllable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;

            // Event "c_hClutchOff".
            edgeExecuted |= this.execEdge19();

            // Event "c_hClutchOn".
            edgeExecuted |= this.execEdge20();

            // Event "c_hMoveIn".
            edgeExecuted |= this.execEdge21();

            // Event "c_hMoveOut".
            edgeExecuted |= this.execEdge22();

            // Event "c_hStopIn".
            edgeExecuted |= this.execEdge23();

            // Event "c_hStopOut".
            edgeExecuted |= this.execEdge24();

            // Event "c_hStopTabletop".
            edgeExecuted |= this.execEdge25();

            // Event "c_hStopTTR".
            edgeExecuted |= this.execEdge26();

            // Event "c_hStopTumble".
            edgeExecuted |= this.execEdge27();

            // Event "c_mLedBlinkFast".
            edgeExecuted |= this.execEdge28();

            // Event "c_mLedBlinkSlow".
            edgeExecuted |= this.execEdge29();

            // Event "c_mLedOff".
            edgeExecuted |= this.execEdge30();

            // Event "c_mLedOn".
            edgeExecuted |= this.execEdge31();

            // Event "c_nnormal".
            edgeExecuted |= this.execEdge32();

            // Event "c_vMoveDown".
            edgeExecuted |= this.execEdge33();

            // Event "c_vMoveUp".
            edgeExecuted |= this.execEdge34();

            // Event "c_vStopDown".
            edgeExecuted |= this.execEdge35();

            // Event "c_vStopTTR".
            edgeExecuted |= this.execEdge36();

            // Event "c_vStopTumble".
            edgeExecuted |= this.execEdge37();

            // Event "c_vStopUp".
            edgeExecuted |= this.execEdge38();

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
     * Execute code for edge with index 0 and event "u_hInOff".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = ((((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffStopped)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnStopped))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnStopped)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffOut))))) || ((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnOut)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffIn)))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnIn)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnIn))))) && ((spec.HInSensor_) == (spec.specEnum._HorInOn))) && (((spec.HSensorRelation_) == (spec.specEnum._HorIn)) && ((spec.hStopIn_) == (spec.specEnum._HorInOn)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(20, true);
        if (this.doInfoEvent) this.infoEvent(20, true);

        spec.HInSensor_ = spec.specEnum._HorInOff;
        spec.HSensorRelation_ = spec.specEnum._HorMid;
        spec.hStopIn_ = spec.specEnum._HorInOff;

        if (this.doInfoEvent) this.infoEvent(20, false);
        if (this.doInfoPrintOutput) this.printOutput(20, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "u_hInOn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = ((((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffStopped)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnStopped))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnStopped)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffOut)))) || ((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnOut)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffIn)))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffIn)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnIn)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnIn)))))) && ((spec.HInSensor_) == (spec.specEnum._HorInOff))) && (((spec.HSensorRelation_) == (spec.specEnum._HorMid)) && ((spec.hStopIn_) == (spec.specEnum._HorInOff)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(21, true);
        if (this.doInfoEvent) this.infoEvent(21, true);

        spec.HInSensor_ = spec.specEnum._HorInOn;
        spec.HSensorRelation_ = spec.specEnum._HorIn;
        spec.hStopIn_ = spec.specEnum._HorInOn;

        if (this.doInfoEvent) this.infoEvent(21, false);
        if (this.doInfoPrintOutput) this.printOutput(21, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "u_hOutOff".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = ((((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffStopped)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnStopped))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnStopped)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffOut)))) || ((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnOut)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffIn)))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffIn)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnIn)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnIn)))))) && ((spec.HOutSensor_) == (spec.specEnum._HorOutOn))) && (((spec.HSensorRelation_) == (spec.specEnum._HOutTTOn)) && (((spec.hStopOut_) == (spec.specEnum._HorOutOn)) && ((((spec.HVSafe_) == (spec.specEnum._nVHnN)) || ((spec.HVSafe_) == (spec.specEnum._VHN))) || ((spec.HVSafe_) == (spec.specEnum._VHnN)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(22, true);
        if (this.doInfoEvent) this.infoEvent(22, true);

        spec.HOutSensor_ = spec.specEnum._HorOutOff;
        spec.HSensorRelation_ = spec.specEnum._HorMid;
        spec.hStopOut_ = spec.specEnum._HorOutOff;
        if ((spec.HVSafe_) == (spec.specEnum._nVHnN)) {
            spec.HVSafe_ = spec.specEnum._nVnHnN;
        } else if ((spec.HVSafe_) == (spec.specEnum._VHN)) {
            spec.HVSafe_ = spec.specEnum._VnHN;
        } else if ((spec.HVSafe_) == (spec.specEnum._VHnN)) {
            spec.HVSafe_ = spec.specEnum._VnHnN;
        }

        if (this.doInfoEvent) this.infoEvent(22, false);
        if (this.doInfoPrintOutput) this.printOutput(22, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "u_hOutOn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = ((((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffStopped)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnStopped))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnStopped)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffOut))))) || ((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnOut)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffIn)))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnIn)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnIn))))) && ((spec.HOutSensor_) == (spec.specEnum._HorOutOff))) && (((spec.HSensorRelation_) == (spec.specEnum._HorMid)) && (((spec.hStopOut_) == (spec.specEnum._HorOutOff)) && ((((spec.HVSafe_) == (spec.specEnum._VnHN)) || ((spec.HVSafe_) == (spec.specEnum._VnHnN))) || ((spec.HVSafe_) == (spec.specEnum._nVnHnN)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(23, true);
        if (this.doInfoEvent) this.infoEvent(23, true);

        spec.HOutSensor_ = spec.specEnum._HorOutOn;
        spec.HSensorRelation_ = spec.specEnum._HOutTTOn;
        spec.hStopOut_ = spec.specEnum._HorOutOn;
        if ((spec.HVSafe_) == (spec.specEnum._VnHN)) {
            spec.HVSafe_ = spec.specEnum._VHN;
        } else if ((spec.HVSafe_) == (spec.specEnum._VnHnN)) {
            spec.HVSafe_ = spec.specEnum._VHnN;
        } else if ((spec.HVSafe_) == (spec.specEnum._nVnHnN)) {
            spec.HVSafe_ = spec.specEnum._nVHnN;
        }

        if (this.doInfoEvent) this.infoEvent(23, false);
        if (this.doInfoPrintOutput) this.printOutput(23, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "u_hStopped".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = (((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffOut))) || ((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnOut)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffIn)))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffIn)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnIn)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnIn)))))) && ((spec.HClutchMove_) == (spec.specEnum._HMoving))) && (((spec.HMotor_) == (spec.specEnum._HorStopping)) && (((spec.hStopInOut_) == (spec.specEnum._HorMoveOut)) || ((spec.hStopInOut_) == (spec.specEnum._HorMoveIn))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(24, true);
        if (this.doInfoEvent) this.infoEvent(24, true);

        if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOffStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOffStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOnStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOffStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOffStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOnStopped;
        }
        spec.HClutchMove_ = spec.specEnum._HStopCOn;
        spec.HMotor_ = spec.specEnum._HorStopped;
        if ((spec.hStopInOut_) == (spec.specEnum._HorMoveOut)) {
            spec.hStopInOut_ = spec.specEnum._HorStopped;
        } else if ((spec.hStopInOut_) == (spec.specEnum._HorMoveIn)) {
            spec.hStopInOut_ = spec.specEnum._HorStopped;
        }

        if (this.doInfoEvent) this.infoEvent(24, false);
        if (this.doInfoPrintOutput) this.printOutput(24, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "u_hTabletopOff".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = ((spec.HSensorRelation_) == (spec.specEnum._HOutTTOn)) && (((spec.hStopTabletop_) == (spec.specEnum._TTOn)) && ((spec.HTabletopSensor_) == (spec.specEnum._TTOn)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(25, true);
        if (this.doInfoEvent) this.infoEvent(25, true);

        spec.HSensorRelation_ = spec.specEnum._TTOff;
        spec.hStopTabletop_ = spec.specEnum._TTOff;
        spec.HTabletopSensor_ = spec.specEnum._TTOff;

        if (this.doInfoEvent) this.infoEvent(25, false);
        if (this.doInfoPrintOutput) this.printOutput(25, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "u_hTabletopOn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = ((spec.HSensorRelation_) == (spec.specEnum._TTOff)) && (((spec.hStopTabletop_) == (spec.specEnum._TTOff)) && ((spec.HTabletopSensor_) == (spec.specEnum._TTOff)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(26, true);
        if (this.doInfoEvent) this.infoEvent(26, true);

        spec.HSensorRelation_ = spec.specEnum._HOutTTOn;
        spec.hStopTabletop_ = spec.specEnum._TTOn;
        spec.HTabletopSensor_ = spec.specEnum._TTOn;

        if (this.doInfoEvent) this.infoEvent(26, false);
        if (this.doInfoPrintOutput) this.printOutput(26, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "u_hTTROff".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = ((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnStopped)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnStopped))) || ((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnOut))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnIn)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnIn))))) && (((spec.hStopTTR_) == (spec.specEnum._TTROn)) && ((spec.HTTRSwitch_) == (spec.specEnum._TTROn)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(27, true);
        if (this.doInfoEvent) this.infoEvent(27, true);

        if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOffStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOffStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOffOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOffOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOffIn;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOffIn;
        }
        spec.hStopTTR_ = spec.specEnum._TTROff;
        spec.HTTRSwitch_ = spec.specEnum._TTROff;

        if (this.doInfoEvent) this.infoEvent(27, false);
        if (this.doInfoPrintOutput) this.printOutput(27, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "u_hTTROn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = ((((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffStopped)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffStopped))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffOut)))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffIn)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffIn)))) && (((spec.hStopTTR_) == (spec.specEnum._TTROff)) && ((spec.HTTRSwitch_) == (spec.specEnum._TTROff)))) && ((((spec.HVMode_) == (spec.specEnum._Restricted)) || ((spec.HVMode_) == (spec.specEnum._Normal))) && (((((spec.HVSafe_) == (spec.specEnum._nVHnN)) || (((spec.HVSafe_) == (spec.specEnum._nVHN)) || ((spec.HVSafe_) == (spec.specEnum._VHN)))) || ((((spec.HVSafe_) == (spec.specEnum._VnHN)) || ((spec.HVSafe_) == (spec.specEnum._VnHnN))) || (((spec.HVSafe_) == (spec.specEnum._nVnHnN)) || ((spec.HVSafe_) == (spec.specEnum._VHnN))))) && (((spec.UILedModes_) == (spec.specEnum._Restricted)) || ((spec.UILedModes_) == (spec.specEnum._Normal)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(28, true);
        if (this.doInfoEvent) this.infoEvent(28, true);

        if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOnStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOnOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnIn;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOnIn;
        }
        spec.hStopTTR_ = spec.specEnum._TTROn;
        spec.HTTRSwitch_ = spec.specEnum._TTROn;
        if ((spec.HVMode_) == (spec.specEnum._Restricted)) {
            spec.HVMode_ = spec.specEnum._Restricted;
        } else if ((spec.HVMode_) == (spec.specEnum._Normal)) {
            spec.HVMode_ = spec.specEnum._Restricted;
        }
        if ((spec.HVSafe_) == (spec.specEnum._nVHnN)) {
            spec.HVSafe_ = spec.specEnum._nVHnN;
        } else if ((spec.HVSafe_) == (spec.specEnum._nVHN)) {
            spec.HVSafe_ = spec.specEnum._nVHnN;
        } else if ((spec.HVSafe_) == (spec.specEnum._VHN)) {
            spec.HVSafe_ = spec.specEnum._VHnN;
        } else if ((spec.HVSafe_) == (spec.specEnum._VnHN)) {
            spec.HVSafe_ = spec.specEnum._VnHnN;
        } else if ((spec.HVSafe_) == (spec.specEnum._VnHnN)) {
            spec.HVSafe_ = spec.specEnum._VnHnN;
        } else if ((spec.HVSafe_) == (spec.specEnum._nVnHnN)) {
            spec.HVSafe_ = spec.specEnum._nVnHnN;
        } else if ((spec.HVSafe_) == (spec.specEnum._VHnN)) {
            spec.HVSafe_ = spec.specEnum._VHnN;
        }
        if ((spec.UILedModes_) == (spec.specEnum._Restricted)) {
            spec.UILedModes_ = spec.specEnum._Restricted;
        } else if ((spec.UILedModes_) == (spec.specEnum._Normal)) {
            spec.UILedModes_ = spec.specEnum._Restricted;
        }

        if (this.doInfoEvent) this.infoEvent(28, false);
        if (this.doInfoPrintOutput) this.printOutput(28, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "u_uManualPushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = ((spec.UIManualClutch_) == (spec.specEnum._NotPushed)) || ((spec.UIManualClutch_) == (spec.specEnum._Pushed));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(29, true);
        if (this.doInfoEvent) this.infoEvent(29, true);

        if ((spec.UIManualClutch_) == (spec.specEnum._NotPushed)) {
            spec.UIManualClutch_ = spec.specEnum._Pushed;
        } else if ((spec.UIManualClutch_) == (spec.specEnum._Pushed)) {
            spec.UIManualClutch_ = spec.specEnum._Pushed;
        }

        if (this.doInfoEvent) this.infoEvent(29, false);
        if (this.doInfoPrintOutput) this.printOutput(29, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "u_uManualTimeout".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = ((spec.UIManualClutch_) == (spec.specEnum._NotPushed)) || ((spec.UIManualClutch_) == (spec.specEnum._Pushed));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(30, true);
        if (this.doInfoEvent) this.infoEvent(30, true);

        if ((spec.UIManualClutch_) == (spec.specEnum._NotPushed)) {
            spec.UIManualClutch_ = spec.specEnum._NotPushed;
        } else if ((spec.UIManualClutch_) == (spec.specEnum._Pushed)) {
            spec.UIManualClutch_ = spec.specEnum._NotPushed;
        }

        if (this.doInfoEvent) this.infoEvent(30, false);
        if (this.doInfoPrintOutput) this.printOutput(30, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "u_uTumbleDown".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = ((spec.UITumbleMove_) == (spec.specEnum._TumbNeutral)) && ((spec.UITumbleSwitch_) == (spec.specEnum._TumbNeutral));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(31, true);
        if (this.doInfoEvent) this.infoEvent(31, true);

        spec.UITumbleMove_ = spec.specEnum._TumbDown;
        spec.UITumbleSwitch_ = spec.specEnum._TumbDown;

        if (this.doInfoEvent) this.infoEvent(31, false);
        if (this.doInfoPrintOutput) this.printOutput(31, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 12 and event "u_uTumbleNeutral".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge12() {
        var guard = (((spec.UIHVSwitch_) == (spec.specEnum._Neutral)) || (((spec.UIHVSwitch_) == (spec.specEnum._Vertical)) || ((spec.UIHVSwitch_) == (spec.specEnum._Horizontal)))) && ((((spec.UITumbleMove_) == (spec.specEnum._TumbDown)) || ((spec.UITumbleMove_) == (spec.specEnum._TumbUp))) && (((spec.UITumbleSwitch_) == (spec.specEnum._TumbDown)) || ((spec.UITumbleSwitch_) == (spec.specEnum._TumbUp))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(32, true);
        if (this.doInfoEvent) this.infoEvent(32, true);

        if ((spec.UIHVSwitch_) == (spec.specEnum._Neutral)) {
            spec.UIHVSwitch_ = spec.specEnum._Neutral;
        } else if ((spec.UIHVSwitch_) == (spec.specEnum._Vertical)) {
            spec.UIHVSwitch_ = spec.specEnum._Neutral;
        } else if ((spec.UIHVSwitch_) == (spec.specEnum._Horizontal)) {
            spec.UIHVSwitch_ = spec.specEnum._Neutral;
        }
        if ((spec.UITumbleMove_) == (spec.specEnum._TumbDown)) {
            spec.UITumbleMove_ = spec.specEnum._TumbNeutral;
        } else if ((spec.UITumbleMove_) == (spec.specEnum._TumbUp)) {
            spec.UITumbleMove_ = spec.specEnum._TumbNeutral;
        }
        if ((spec.UITumbleSwitch_) == (spec.specEnum._TumbDown)) {
            spec.UITumbleSwitch_ = spec.specEnum._TumbNeutral;
        } else if ((spec.UITumbleSwitch_) == (spec.specEnum._TumbUp)) {
            spec.UITumbleSwitch_ = spec.specEnum._TumbNeutral;
        }

        if (this.doInfoEvent) this.infoEvent(32, false);
        if (this.doInfoPrintOutput) this.printOutput(32, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 13 and event "u_uTumbleUp".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge13() {
        var guard = ((spec.UITumbleMove_) == (spec.specEnum._TumbNeutral)) && ((spec.UITumbleSwitch_) == (spec.specEnum._TumbNeutral));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(33, true);
        if (this.doInfoEvent) this.infoEvent(33, true);

        spec.UITumbleMove_ = spec.specEnum._TumbUp;
        spec.UITumbleSwitch_ = spec.specEnum._TumbUp;

        if (this.doInfoEvent) this.infoEvent(33, false);
        if (this.doInfoPrintOutput) this.printOutput(33, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 14 and event "u_vDownOff".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge14() {
        var guard = (((spec.VDownSensor_) == (spec.specEnum._VertDownOn)) && ((spec.VMotorSensorRelation_) == (spec.specEnum._VertMoveUp))) && (((spec.VSensorRelation_) == (spec.specEnum._VertDown)) && ((spec.vStopDown_) == (spec.specEnum._VertDownOn)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(34, true);
        if (this.doInfoEvent) this.infoEvent(34, true);

        spec.VDownSensor_ = spec.specEnum._VertDownOff;
        spec.VSensorRelation_ = spec.specEnum._VertMid;
        spec.vStopDown_ = spec.specEnum._VertDownOff;

        if (this.doInfoEvent) this.infoEvent(34, false);
        if (this.doInfoPrintOutput) this.printOutput(34, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 15 and event "u_vDownOn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge15() {
        var guard = (((spec.VDownSensor_) == (spec.specEnum._VertDownOff)) && ((spec.VMotorSensorRelation_) == (spec.specEnum._VertMoveDown))) && (((spec.VSensorRelation_) == (spec.specEnum._VertMid)) && ((spec.vStopDown_) == (spec.specEnum._VertDownOff)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(35, true);
        if (this.doInfoEvent) this.infoEvent(35, true);

        spec.VDownSensor_ = spec.specEnum._VertDownOn;
        spec.VSensorRelation_ = spec.specEnum._VertDown;
        spec.vStopDown_ = spec.specEnum._VertDownOn;

        if (this.doInfoEvent) this.infoEvent(35, false);
        if (this.doInfoPrintOutput) this.printOutput(35, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 16 and event "u_vStopped".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge16() {
        var guard = ((spec.VActuators_) == (spec.specEnum._VertStopping)) && ((((spec.VMotorSensorRelation_) == (spec.specEnum._VertMoveDown)) || ((spec.VMotorSensorRelation_) == (spec.specEnum._VertMoveUp))) && (((spec.vStopUpDown_) == (spec.specEnum._VertMoveDown)) || ((spec.vStopUpDown_) == (spec.specEnum._VertMoveUp))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(36, true);
        if (this.doInfoEvent) this.infoEvent(36, true);

        spec.VActuators_ = spec.specEnum._VertStopped;
        if ((spec.VMotorSensorRelation_) == (spec.specEnum._VertMoveDown)) {
            spec.VMotorSensorRelation_ = spec.specEnum._VertStopped;
        } else if ((spec.VMotorSensorRelation_) == (spec.specEnum._VertMoveUp)) {
            spec.VMotorSensorRelation_ = spec.specEnum._VertStopped;
        }
        if ((spec.vStopUpDown_) == (spec.specEnum._VertMoveDown)) {
            spec.vStopUpDown_ = spec.specEnum._VertStopped;
        } else if ((spec.vStopUpDown_) == (spec.specEnum._VertMoveUp)) {
            spec.vStopUpDown_ = spec.specEnum._VertStopped;
        }

        if (this.doInfoEvent) this.infoEvent(36, false);
        if (this.doInfoPrintOutput) this.printOutput(36, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 17 and event "u_vUpOff".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge17() {
        var guard = ((((spec.HVSafe_) == (spec.specEnum._VHN)) || (((spec.HVSafe_) == (spec.specEnum._VnHnN)) || ((spec.HVSafe_) == (spec.specEnum._VHnN)))) && ((spec.VMotorSensorRelation_) == (spec.specEnum._VertMoveDown))) && (((spec.VSensorRelation_) == (spec.specEnum._VertUp)) && (((spec.vStopUp_) == (spec.specEnum._VertUpOn)) && ((spec.VUpSensor_) == (spec.specEnum._VertUpOn))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(37, true);
        if (this.doInfoEvent) this.infoEvent(37, true);

        if ((spec.HVSafe_) == (spec.specEnum._VHN)) {
            spec.HVSafe_ = spec.specEnum._nVHN;
        } else if ((spec.HVSafe_) == (spec.specEnum._VnHnN)) {
            spec.HVSafe_ = spec.specEnum._nVnHnN;
        } else if ((spec.HVSafe_) == (spec.specEnum._VHnN)) {
            spec.HVSafe_ = spec.specEnum._nVHnN;
        }
        spec.VSensorRelation_ = spec.specEnum._VertMid;
        spec.vStopUp_ = spec.specEnum._VertUpOff;
        spec.VUpSensor_ = spec.specEnum._VertUpOff;

        if (this.doInfoEvent) this.infoEvent(37, false);
        if (this.doInfoPrintOutput) this.printOutput(37, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 18 and event "u_vUpOn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge18() {
        var guard = (((((spec.HVSafe_) == (spec.specEnum._nVHnN)) || ((spec.HVSafe_) == (spec.specEnum._nVHN))) || ((spec.HVSafe_) == (spec.specEnum._nVnHnN))) && ((spec.VMotorSensorRelation_) == (spec.specEnum._VertMoveUp))) && (((spec.VSensorRelation_) == (spec.specEnum._VertMid)) && (((spec.vStopUp_) == (spec.specEnum._VertUpOff)) && ((spec.VUpSensor_) == (spec.specEnum._VertUpOff))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(38, true);
        if (this.doInfoEvent) this.infoEvent(38, true);

        if ((spec.HVSafe_) == (spec.specEnum._nVHnN)) {
            spec.HVSafe_ = spec.specEnum._VHnN;
        } else if ((spec.HVSafe_) == (spec.specEnum._nVHN)) {
            spec.HVSafe_ = spec.specEnum._VHN;
        } else if ((spec.HVSafe_) == (spec.specEnum._nVnHnN)) {
            spec.HVSafe_ = spec.specEnum._VnHnN;
        }
        spec.VSensorRelation_ = spec.specEnum._VertUp;
        spec.vStopUp_ = spec.specEnum._VertUpOn;
        spec.VUpSensor_ = spec.specEnum._VertUpOn;

        if (this.doInfoEvent) this.infoEvent(38, false);
        if (this.doInfoPrintOutput) this.printOutput(38, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 19 and event "c_hClutchOff".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge19() {
        var guard = ((((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffStopped)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnStopped)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffOut)))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnOut)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffIn)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnIn))))) && ((((spec.HClutchMove_) == (spec.specEnum._HStopCOn)) && ((spec.hStopTTR_) == (spec.specEnum._TTROff))) && (((spec.UILedClutch_) == (spec.specEnum._ClutchOn)) && ((spec.UIManualClutch_) == (spec.specEnum._Pushed))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOffStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOffOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOffIn;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnIn;
        }
        spec.HClutchMove_ = spec.specEnum._ClutchOff;
        spec.UILedClutch_ = spec.specEnum._ClutchOff;
        spec.UIManualClutch_ = spec.specEnum._NotPushed;

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 20 and event "c_hClutchOn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge20() {
        var guard = (((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffStopped)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnStopped))) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffOut))) || ((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffIn))) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnIn)))) && ((((spec.HClutchMove_) == (spec.specEnum._ClutchOff)) && ((spec.hStopTTR_) == (spec.specEnum._TTROff))) && (((spec.UILedClutch_) == (spec.specEnum._ClutchOff)) && ((spec.UIManualClutch_) == (spec.specEnum._Pushed))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOffStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOnStopped;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOffOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOnOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOffIn;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOnIn;
        }
        spec.HClutchMove_ = spec.specEnum._HStopCOn;
        spec.UILedClutch_ = spec.specEnum._ClutchOn;
        spec.UIManualClutch_ = spec.specEnum._NotPushed;

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 21 and event "c_hMoveIn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge21() {
        var guard = (((((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffStopped)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffStopped)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnStopped)))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnStopped)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffOut))))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnOut)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnOut)))) && (((spec.HClutchMove_) == (spec.specEnum._HStopCOn)) || ((spec.HClutchMove_) == (spec.specEnum._HMoving)))) && ((((spec.HMotor_) == (spec.specEnum._HorStopped)) || ((spec.HMotor_) == (spec.specEnum._HorMoving))) && (((spec.hStopIn_) == (spec.specEnum._HorInOff)) && (((spec.hStopInOut_) == (spec.specEnum._HorStopped)) || ((spec.hStopInOut_) == (spec.specEnum._HorMoveOut)))))) && ((((spec.hStopTabletop_) == (spec.specEnum._TTOn)) && ((spec.hStopTTR_) == (spec.specEnum._TTROff))) && (((spec.HVMode_) == (spec.specEnum._Normal)) && ((((spec.UIHVSwitch_) == (spec.specEnum._Neutral)) || ((spec.UIHVSwitch_) == (spec.specEnum._Horizontal))) && ((spec.UITumbleMove_) == (spec.specEnum._TumbUp)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOffIn;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOffIn;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnIn;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOnIn;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOffIn;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOffIn;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnIn;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnOut)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOnIn;
        }
        if ((spec.HClutchMove_) == (spec.specEnum._HStopCOn)) {
            spec.HClutchMove_ = spec.specEnum._HMoving;
        } else if ((spec.HClutchMove_) == (spec.specEnum._HMoving)) {
            spec.HClutchMove_ = spec.specEnum._HMoving;
        }
        if ((spec.HMotor_) == (spec.specEnum._HorStopped)) {
            spec.HMotor_ = spec.specEnum._HorMoving;
        } else if ((spec.HMotor_) == (spec.specEnum._HorMoving)) {
            spec.HMotor_ = spec.specEnum._HorMoving;
        }
        if ((spec.hStopInOut_) == (spec.specEnum._HorStopped)) {
            spec.hStopInOut_ = spec.specEnum._HorMoveIn;
        } else if ((spec.hStopInOut_) == (spec.specEnum._HorMoveOut)) {
            spec.hStopInOut_ = spec.specEnum._HorMoveIn;
        }
        if ((spec.UIHVSwitch_) == (spec.specEnum._Neutral)) {
            spec.UIHVSwitch_ = spec.specEnum._Horizontal;
        } else if ((spec.UIHVSwitch_) == (spec.specEnum._Horizontal)) {
            spec.UIHVSwitch_ = spec.specEnum._Horizontal;
        }

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 22 and event "c_hMoveOut".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge22() {
        var guard = (((((((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffStopped)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffStopped)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnStopped)))) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnStopped))) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffIn)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffIn)) || (((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnIn)) || ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnIn)))))) && (((spec.HClutchMove_) == (spec.specEnum._HStopCOn)) || ((spec.HClutchMove_) == (spec.specEnum._HMoving)))) && ((((spec.HMotor_) == (spec.specEnum._HorStopped)) || ((spec.HMotor_) == (spec.specEnum._HorMoving))) && (((spec.hStopInOut_) == (spec.specEnum._HorStopped)) || ((spec.hStopInOut_) == (spec.specEnum._HorMoveIn))))) && ((((spec.hStopOut_) == (spec.specEnum._HorOutOff)) && ((spec.hStopTabletop_) == (spec.specEnum._TTOn))) && (((spec.hStopTTR_) == (spec.specEnum._TTROff)) && ((((spec.UIHVSwitch_) == (spec.specEnum._Neutral)) || ((spec.UIHVSwitch_) == (spec.specEnum._Horizontal))) && ((spec.UITumbleMove_) == (spec.specEnum._TumbDown)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOffOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOffOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnStopped)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOnOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOffIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOffOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOffIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OnOffOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OffOnIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnOut;
        } else if ((spec.HActuatorSensorRelations_) == (spec.specEnum._OnOnIn)) {
            spec.HActuatorSensorRelations_ = spec.specEnum._OffOnOut;
        }
        if ((spec.HClutchMove_) == (spec.specEnum._HStopCOn)) {
            spec.HClutchMove_ = spec.specEnum._HMoving;
        } else if ((spec.HClutchMove_) == (spec.specEnum._HMoving)) {
            spec.HClutchMove_ = spec.specEnum._HMoving;
        }
        if ((spec.HMotor_) == (spec.specEnum._HorStopped)) {
            spec.HMotor_ = spec.specEnum._HorMoving;
        } else if ((spec.HMotor_) == (spec.specEnum._HorMoving)) {
            spec.HMotor_ = spec.specEnum._HorMoving;
        }
        if ((spec.hStopInOut_) == (spec.specEnum._HorStopped)) {
            spec.hStopInOut_ = spec.specEnum._HorMoveOut;
        } else if ((spec.hStopInOut_) == (spec.specEnum._HorMoveIn)) {
            spec.hStopInOut_ = spec.specEnum._HorMoveOut;
        }
        if ((spec.UIHVSwitch_) == (spec.specEnum._Neutral)) {
            spec.UIHVSwitch_ = spec.specEnum._Horizontal;
        } else if ((spec.UIHVSwitch_) == (spec.specEnum._Horizontal)) {
            spec.UIHVSwitch_ = spec.specEnum._Horizontal;
        }

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 23 and event "c_hStopIn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge23() {
        var guard = ((spec.HMotor_) == (spec.specEnum._HorMoving)) && (((spec.hStopIn_) == (spec.specEnum._HorInOn)) && ((spec.hStopInOut_) == (spec.specEnum._HorMoveIn)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.HMotor_ = spec.specEnum._HorStopping;

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 24 and event "c_hStopOut".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge24() {
        var guard = ((spec.HMotor_) == (spec.specEnum._HorMoving)) && (((spec.hStopInOut_) == (spec.specEnum._HorMoveOut)) && ((spec.hStopOut_) == (spec.specEnum._HorOutOn)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.HMotor_ = spec.specEnum._HorStopping;

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 25 and event "c_hStopTabletop".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge25() {
        var guard = ((spec.HMotor_) == (spec.specEnum._HorMoving)) && ((spec.hStopTabletop_) == (spec.specEnum._TTOff));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.HMotor_ = spec.specEnum._HorStopping;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 26 and event "c_hStopTTR".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge26() {
        var guard = ((spec.HMotor_) == (spec.specEnum._HorMoving)) && ((spec.hStopTTR_) == (spec.specEnum._TTROn));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.HMotor_ = spec.specEnum._HorStopping;

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 27 and event "c_hStopTumble".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge27() {
        var guard = ((spec.HMotor_) == (spec.specEnum._HorMoving)) && ((spec.UITumbleMove_) == (spec.specEnum._TumbNeutral));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.HMotor_ = spec.specEnum._HorStopping;

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 28 and event "c_mLedBlinkFast".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge28() {
        var guard = (((spec.UILedClutch_) == (spec.specEnum._ClutchOff)) && ((spec.UILedModes_) == (spec.specEnum._Restricted))) && ((((spec.UILedSequence_) == (spec.specEnum._Off)) || ((spec.UILedSequence_) == (spec.specEnum._On))) || ((spec.UILedSequence_) == (spec.specEnum._BlinkSlow)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        if ((spec.UILedSequence_) == (spec.specEnum._Off)) {
            spec.UILedSequence_ = spec.specEnum._BlinkFast;
        } else if ((spec.UILedSequence_) == (spec.specEnum._On)) {
            spec.UILedSequence_ = spec.specEnum._BlinkFast;
        } else if ((spec.UILedSequence_) == (spec.specEnum._BlinkSlow)) {
            spec.UILedSequence_ = spec.specEnum._BlinkFast;
        }

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 29 and event "c_mLedBlinkSlow".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge29() {
        var guard = (((spec.UILedClutch_) == (spec.specEnum._ClutchOn)) && ((spec.UILedModes_) == (spec.specEnum._Restricted))) && ((((spec.UILedSequence_) == (spec.specEnum._Off)) || ((spec.UILedSequence_) == (spec.specEnum._On))) || ((spec.UILedSequence_) == (spec.specEnum._BlinkFast)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        if ((spec.UILedSequence_) == (spec.specEnum._Off)) {
            spec.UILedSequence_ = spec.specEnum._BlinkSlow;
        } else if ((spec.UILedSequence_) == (spec.specEnum._On)) {
            spec.UILedSequence_ = spec.specEnum._BlinkSlow;
        } else if ((spec.UILedSequence_) == (spec.specEnum._BlinkFast)) {
            spec.UILedSequence_ = spec.specEnum._BlinkSlow;
        }

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 30 and event "c_mLedOff".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge30() {
        var guard = (((spec.UILedClutch_) == (spec.specEnum._ClutchOn)) && ((spec.UILedModes_) == (spec.specEnum._Normal))) && (((spec.UILedSequence_) == (spec.specEnum._On)) || (((spec.UILedSequence_) == (spec.specEnum._BlinkFast)) || ((spec.UILedSequence_) == (spec.specEnum._BlinkSlow))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        if ((spec.UILedSequence_) == (spec.specEnum._On)) {
            spec.UILedSequence_ = spec.specEnum._Off;
        } else if ((spec.UILedSequence_) == (spec.specEnum._BlinkFast)) {
            spec.UILedSequence_ = spec.specEnum._Off;
        } else if ((spec.UILedSequence_) == (spec.specEnum._BlinkSlow)) {
            spec.UILedSequence_ = spec.specEnum._Off;
        }

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 31 and event "c_mLedOn".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge31() {
        var guard = (((spec.UILedClutch_) == (spec.specEnum._ClutchOff)) && ((spec.UILedModes_) == (spec.specEnum._Normal))) && (((spec.UILedSequence_) == (spec.specEnum._Off)) || (((spec.UILedSequence_) == (spec.specEnum._BlinkFast)) || ((spec.UILedSequence_) == (spec.specEnum._BlinkSlow))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(12, true);
        if (this.doInfoEvent) this.infoEvent(12, true);

        if ((spec.UILedSequence_) == (spec.specEnum._Off)) {
            spec.UILedSequence_ = spec.specEnum._On;
        } else if ((spec.UILedSequence_) == (spec.specEnum._BlinkFast)) {
            spec.UILedSequence_ = spec.specEnum._On;
        } else if ((spec.UILedSequence_) == (spec.specEnum._BlinkSlow)) {
            spec.UILedSequence_ = spec.specEnum._On;
        }

        if (this.doInfoEvent) this.infoEvent(12, false);
        if (this.doInfoPrintOutput) this.printOutput(12, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 32 and event "c_nnormal".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge32() {
        var guard = ((spec.HVMode_) == (spec.specEnum._Restricted)) && ((((spec.HVSafe_) == (spec.specEnum._nVHnN)) || (((spec.HVSafe_) == (spec.specEnum._VnHnN)) || ((spec.HVSafe_) == (spec.specEnum._VHnN)))) && ((spec.UILedModes_) == (spec.specEnum._Restricted)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(13, true);
        if (this.doInfoEvent) this.infoEvent(13, true);

        spec.HVMode_ = spec.specEnum._Normal;
        if ((spec.HVSafe_) == (spec.specEnum._nVHnN)) {
            spec.HVSafe_ = spec.specEnum._nVHN;
        } else if ((spec.HVSafe_) == (spec.specEnum._VnHnN)) {
            spec.HVSafe_ = spec.specEnum._VnHN;
        } else if ((spec.HVSafe_) == (spec.specEnum._VHnN)) {
            spec.HVSafe_ = spec.specEnum._VHN;
        }
        spec.UILedModes_ = spec.specEnum._Normal;

        if (this.doInfoEvent) this.infoEvent(13, false);
        if (this.doInfoPrintOutput) this.printOutput(13, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 33 and event "c_vMoveDown".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge33() {
        var guard = (((spec.HVMode_) == (spec.specEnum._Normal)) && ((((spec.UIHVSwitch_) == (spec.specEnum._Neutral)) || ((spec.UIHVSwitch_) == (spec.specEnum._Vertical))) && ((spec.UITumbleMove_) == (spec.specEnum._TumbDown)))) && (((((spec.VActuators_) == (spec.specEnum._VertStopped)) || ((spec.VActuators_) == (spec.specEnum._VertMoving))) && (((spec.VMotorSensorRelation_) == (spec.specEnum._VertStopped)) || ((spec.VMotorSensorRelation_) == (spec.specEnum._VertMoveUp)))) && (((spec.vStopDown_) == (spec.specEnum._VertDownOff)) && (((spec.vStopUpDown_) == (spec.specEnum._VertStopped)) || ((spec.vStopUpDown_) == (spec.specEnum._VertMoveUp)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(14, true);
        if (this.doInfoEvent) this.infoEvent(14, true);

        if ((spec.UIHVSwitch_) == (spec.specEnum._Neutral)) {
            spec.UIHVSwitch_ = spec.specEnum._Vertical;
        } else if ((spec.UIHVSwitch_) == (spec.specEnum._Vertical)) {
            spec.UIHVSwitch_ = spec.specEnum._Vertical;
        }
        if ((spec.VActuators_) == (spec.specEnum._VertStopped)) {
            spec.VActuators_ = spec.specEnum._VertMoving;
        } else if ((spec.VActuators_) == (spec.specEnum._VertMoving)) {
            spec.VActuators_ = spec.specEnum._VertMoving;
        }
        if ((spec.VMotorSensorRelation_) == (spec.specEnum._VertStopped)) {
            spec.VMotorSensorRelation_ = spec.specEnum._VertMoveDown;
        } else if ((spec.VMotorSensorRelation_) == (spec.specEnum._VertMoveUp)) {
            spec.VMotorSensorRelation_ = spec.specEnum._VertMoveDown;
        }
        if ((spec.vStopUpDown_) == (spec.specEnum._VertStopped)) {
            spec.vStopUpDown_ = spec.specEnum._VertMoveDown;
        } else if ((spec.vStopUpDown_) == (spec.specEnum._VertMoveUp)) {
            spec.vStopUpDown_ = spec.specEnum._VertMoveDown;
        }

        if (this.doInfoEvent) this.infoEvent(14, false);
        if (this.doInfoPrintOutput) this.printOutput(14, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 34 and event "c_vMoveUp".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge34() {
        var guard = (((spec.HVMode_) == (spec.specEnum._Normal)) && ((((spec.UIHVSwitch_) == (spec.specEnum._Neutral)) || ((spec.UIHVSwitch_) == (spec.specEnum._Vertical))) && ((spec.UITumbleMove_) == (spec.specEnum._TumbUp)))) && (((((spec.VActuators_) == (spec.specEnum._VertStopped)) || ((spec.VActuators_) == (spec.specEnum._VertMoving))) && (((spec.VMotorSensorRelation_) == (spec.specEnum._VertStopped)) || ((spec.VMotorSensorRelation_) == (spec.specEnum._VertMoveDown)))) && (((spec.vStopUp_) == (spec.specEnum._VertUpOff)) && (((spec.vStopUpDown_) == (spec.specEnum._VertStopped)) || ((spec.vStopUpDown_) == (spec.specEnum._VertMoveDown)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(15, true);
        if (this.doInfoEvent) this.infoEvent(15, true);

        if ((spec.UIHVSwitch_) == (spec.specEnum._Neutral)) {
            spec.UIHVSwitch_ = spec.specEnum._Vertical;
        } else if ((spec.UIHVSwitch_) == (spec.specEnum._Vertical)) {
            spec.UIHVSwitch_ = spec.specEnum._Vertical;
        }
        if ((spec.VActuators_) == (spec.specEnum._VertStopped)) {
            spec.VActuators_ = spec.specEnum._VertMoving;
        } else if ((spec.VActuators_) == (spec.specEnum._VertMoving)) {
            spec.VActuators_ = spec.specEnum._VertMoving;
        }
        if ((spec.VMotorSensorRelation_) == (spec.specEnum._VertStopped)) {
            spec.VMotorSensorRelation_ = spec.specEnum._VertMoveUp;
        } else if ((spec.VMotorSensorRelation_) == (spec.specEnum._VertMoveDown)) {
            spec.VMotorSensorRelation_ = spec.specEnum._VertMoveUp;
        }
        if ((spec.vStopUpDown_) == (spec.specEnum._VertStopped)) {
            spec.vStopUpDown_ = spec.specEnum._VertMoveUp;
        } else if ((spec.vStopUpDown_) == (spec.specEnum._VertMoveDown)) {
            spec.vStopUpDown_ = spec.specEnum._VertMoveUp;
        }

        if (this.doInfoEvent) this.infoEvent(15, false);
        if (this.doInfoPrintOutput) this.printOutput(15, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 35 and event "c_vStopDown".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge35() {
        var guard = ((spec.VActuators_) == (spec.specEnum._VertMoving)) && (((spec.vStopDown_) == (spec.specEnum._VertDownOn)) && ((spec.vStopUpDown_) == (spec.specEnum._VertMoveDown)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(16, true);
        if (this.doInfoEvent) this.infoEvent(16, true);

        spec.VActuators_ = spec.specEnum._VertStopping;

        if (this.doInfoEvent) this.infoEvent(16, false);
        if (this.doInfoPrintOutput) this.printOutput(16, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 36 and event "c_vStopTTR".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge36() {
        var guard = ((spec.HVMode_) == (spec.specEnum._Restricted)) && ((spec.VActuators_) == (spec.specEnum._VertMoving));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(17, true);
        if (this.doInfoEvent) this.infoEvent(17, true);

        spec.VActuators_ = spec.specEnum._VertStopping;

        if (this.doInfoEvent) this.infoEvent(17, false);
        if (this.doInfoPrintOutput) this.printOutput(17, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 37 and event "c_vStopTumble".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge37() {
        var guard = ((spec.UITumbleMove_) == (spec.specEnum._TumbNeutral)) && ((spec.VActuators_) == (spec.specEnum._VertMoving));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(18, true);
        if (this.doInfoEvent) this.infoEvent(18, true);

        spec.VActuators_ = spec.specEnum._VertStopping;

        if (this.doInfoEvent) this.infoEvent(18, false);
        if (this.doInfoPrintOutput) this.printOutput(18, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 38 and event "c_vStopUp".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge38() {
        var guard = ((spec.VActuators_) == (spec.specEnum._VertMoving)) && (((spec.vStopUp_) == (spec.specEnum._VertUpOn)) && ((spec.vStopUpDown_) == (spec.specEnum._VertMoveUp)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(19, true);
        if (this.doInfoEvent) this.infoEvent(19, true);

        spec.VActuators_ = spec.specEnum._VertStopping;

        if (this.doInfoEvent) this.infoEvent(19, false);
        if (this.doInfoPrintOutput) this.printOutput(19, false);
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
        spec.HActuatorSensorRelations_ = spec.specEnum._OffOffStopped;
        spec.HClutchMove_ = spec.specEnum._ClutchOff;
        spec.HInSensor_ = spec.specEnum._HorInOff;
        spec.HMotor_ = spec.specEnum._HorStopped;
        spec.HOutSensor_ = spec.specEnum._HorOutOn;
        spec.HSensorRelation_ = spec.specEnum._TTOff;
        spec.hStopIn_ = spec.specEnum._HorInOff;
        spec.hStopInOut_ = spec.specEnum._HorStopped;
        spec.hStopOut_ = spec.specEnum._HorOutOn;
        spec.hStopTabletop_ = spec.specEnum._TTOff;
        spec.hStopTTR_ = spec.specEnum._TTROff;
        spec.HTabletopSensor_ = spec.specEnum._TTOff;
        spec.HTTRSwitch_ = spec.specEnum._TTROff;
        spec.HVMode_ = spec.specEnum._Restricted;
        spec.HVSafe_ = spec.specEnum._nVHnN;
        spec.UIHVSwitch_ = spec.specEnum._Neutral;
        spec.UILedClutch_ = spec.specEnum._ClutchOff;
        spec.UILedModes_ = spec.specEnum._Restricted;
        spec.UILedSequence_ = spec.specEnum._Off;
        spec.UIManualClutch_ = spec.specEnum._NotPushed;
        spec.UITumbleMove_ = spec.specEnum._TumbNeutral;
        spec.UITumbleSwitch_ = spec.specEnum._TumbNeutral;
        spec.VActuators_ = spec.specEnum._VertStopped;
        spec.VDownSensor_ = spec.specEnum._VertDownOff;
        spec.VMotorSensorRelation_ = spec.specEnum._VertStopped;
        spec.VSensorRelation_ = spec.specEnum._VertMid;
        spec.vStopDown_ = spec.specEnum._VertDownOff;
        spec.vStopUp_ = spec.specEnum._VertUpOff;
        spec.vStopUpDown_ = spec.specEnum._VertStopped;
        spec.VUpSensor_ = spec.specEnum._VertUpOff;
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
        state += specUtils.fmt(', HActuatorSensorRelations=%s', specUtils.valueToStr(spec.HActuatorSensorRelations_));
        state += specUtils.fmt(', HClutchMove=%s', specUtils.valueToStr(spec.HClutchMove_));
        state += specUtils.fmt(', HInSensor=%s', specUtils.valueToStr(spec.HInSensor_));
        state += specUtils.fmt(', HMotor=%s', specUtils.valueToStr(spec.HMotor_));
        state += specUtils.fmt(', HOutSensor=%s', specUtils.valueToStr(spec.HOutSensor_));
        state += specUtils.fmt(', HSensorRelation=%s', specUtils.valueToStr(spec.HSensorRelation_));
        state += specUtils.fmt(', hStopIn=%s', specUtils.valueToStr(spec.hStopIn_));
        state += specUtils.fmt(', hStopInOut=%s', specUtils.valueToStr(spec.hStopInOut_));
        state += specUtils.fmt(', hStopOut=%s', specUtils.valueToStr(spec.hStopOut_));
        state += specUtils.fmt(', hStopTabletop=%s', specUtils.valueToStr(spec.hStopTabletop_));
        state += specUtils.fmt(', hStopTTR=%s', specUtils.valueToStr(spec.hStopTTR_));
        state += specUtils.fmt(', HTabletopSensor=%s', specUtils.valueToStr(spec.HTabletopSensor_));
        state += specUtils.fmt(', HTTRSwitch=%s', specUtils.valueToStr(spec.HTTRSwitch_));
        state += specUtils.fmt(', HVMode=%s', specUtils.valueToStr(spec.HVMode_));
        state += specUtils.fmt(', HVSafe=%s', specUtils.valueToStr(spec.HVSafe_));
        state += specUtils.fmt(', UIHVSwitch=%s', specUtils.valueToStr(spec.UIHVSwitch_));
        state += specUtils.fmt(', UILedClutch=%s', specUtils.valueToStr(spec.UILedClutch_));
        state += specUtils.fmt(', UILedModes=%s', specUtils.valueToStr(spec.UILedModes_));
        state += specUtils.fmt(', UILedSequence=%s', specUtils.valueToStr(spec.UILedSequence_));
        state += specUtils.fmt(', UIManualClutch=%s', specUtils.valueToStr(spec.UIManualClutch_));
        state += specUtils.fmt(', UITumbleMove=%s', specUtils.valueToStr(spec.UITumbleMove_));
        state += specUtils.fmt(', UITumbleSwitch=%s', specUtils.valueToStr(spec.UITumbleSwitch_));
        state += specUtils.fmt(', VActuators=%s', specUtils.valueToStr(spec.VActuators_));
        state += specUtils.fmt(', VDownSensor=%s', specUtils.valueToStr(spec.VDownSensor_));
        state += specUtils.fmt(', VMotorSensorRelation=%s', specUtils.valueToStr(spec.VMotorSensorRelation_));
        state += specUtils.fmt(', VSensorRelation=%s', specUtils.valueToStr(spec.VSensorRelation_));
        state += specUtils.fmt(', vStopDown=%s', specUtils.valueToStr(spec.vStopDown_));
        state += specUtils.fmt(', vStopUp=%s', specUtils.valueToStr(spec.vStopUp_));
        state += specUtils.fmt(', vStopUpDown=%s', specUtils.valueToStr(spec.vStopUpDown_));
        state += specUtils.fmt(', VUpSensor=%s', specUtils.valueToStr(spec.VUpSensor_));
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
