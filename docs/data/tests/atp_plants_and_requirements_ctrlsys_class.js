/** Tuples. */


/** spec code generated from a CIF specification. */
class spec_class {
    /** specEnum declaration. It contains the single merged enum from the CIF model. */
    specEnum = Object.freeze({
        /** Literal "braking". */
        _braking: Symbol("braking"),

        /** Literal "decodePulses". */
        _decodePulses: Symbol("decodePulses"),

        /** Literal "detectBeacons". */
        _detectBeacons: Symbol("detectBeacons"),

        /** Literal "EMERGENCY". */
        _EMERGENCY: Symbol("EMERGENCY"),

        /** Literal "emergency". */
        _emergency: Symbol("emergency"),

        /** Literal "IDLE". */
        _IDLE: Symbol("IDLE"),

        /** Literal "idle". */
        _idle: Symbol("idle"),

        /** Literal "notDetectingPulses". */
        _notDetectingPulses: Symbol("notDetectingPulses"),

        /** Literal "OFF". */
        _OFF: Symbol("OFF"),

        /** Literal "off". */
        _off: Symbol("off"),

        /** Literal "on". */
        _on: Symbol("on"),

        /** Literal "P0". */
        _P0: Symbol("P0"),

        /** Literal "P1". */
        _P1: Symbol("P1"),

        /** Literal "P2". */
        _P2: Symbol("P2"),

        /** Literal "P3". */
        _P3: Symbol("P3"),

        /** Literal "P4". */
        _P4: Symbol("P4"),

        /** Literal "P_SPECIAL". */
        _P_SPECIAL: Symbol("P_SPECIAL"),

        /** Literal "pedalDown". */
        _pedalDown: Symbol("pedalDown"),

        /** Literal "pedalUp". */
        _pedalUp: Symbol("pedalUp"),

        /** Literal "released". */
        _released: Symbol("released"),

        /** Literal "started". */
        _started: Symbol("started"),

        /** Literal "stopTrain". */
        _stopTrain: Symbol("stopTrain"),

        /** Literal "WARNING". */
        _WARNING: Symbol("WARNING"),

        /** Literal "warningMode". */
        _warningMode: Symbol("warningMode")
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
        "c_forceBrakes",
        "c_releaseBrakes",
        "c_resetATP",
        "c_resetbeacons",
        "c_resetTimer",
        "c_ringCabinBell",
        "c_startTimer",
        "c_transitionATP",
        "c_turnATPoff",
        "u_ATPresetPressed",
        "u_beaconMessage",
        "u_changeTrackSignal",
        "u_decreaseSpeed",
        "u_enterATPtrack",
        "u_enterERTMStrack",
        "u_increaseSpeed",
        "u_incrementTimer",
        "u_leaveERTMStrack",
        "u_noPulses",
        "u_pushBrakes",
        "u_releaseBrakes"
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


    /** Discrete variable "antenna.signal". */
    antenna_signal_;

    /** Discrete variable "antenna". */
    antenna_;

    /** Discrete variable "ATP". */
    ATP_;

    /** Discrete variable "ATPvv". */
    ATPvv_;

    /** Discrete variable "brakePedal". */
    brakePedal_;

    /** Discrete variable "brakes". */
    brakes_;

    /** Discrete variable "ERTMS.mode". */
    ERTMS_mode_;

    /** Discrete variable "ERTMS". */
    ERTMS_;

    /** Discrete variable "speedSensor.speed". */
    speedSensor_speed_;

    /** Discrete variable "timer.timecounter". */
    timer_timecounter_;

    /** Discrete variable "timer". */
    timer_;


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

            // Event "u_ATPresetPressed".
            edgeExecuted |= this.execEdge0();

            // Event "u_beaconMessage".
            edgeExecuted |= this.execEdge1();

            // Event "u_changeTrackSignal".
            edgeExecuted |= this.execEdge2();

            // Event "u_decreaseSpeed".
            edgeExecuted |= this.execEdge3();

            // Event "u_enterATPtrack".
            edgeExecuted |= this.execEdge4();

            // Event "u_enterERTMStrack".
            edgeExecuted |= this.execEdge5();

            // Event "u_increaseSpeed".
            edgeExecuted |= this.execEdge6();

            // Event "u_incrementTimer".
            edgeExecuted |= this.execEdge7();

            // Event "u_leaveERTMStrack".
            edgeExecuted |= this.execEdge8();

            // Event "u_noPulses".
            edgeExecuted |= this.execEdge9();

            // Event "u_pushBrakes".
            edgeExecuted |= this.execEdge10();

            // Event "u_releaseBrakes".
            edgeExecuted |= this.execEdge11();

            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Execute controllable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;

            // Event "c_forceBrakes".
            edgeExecuted |= this.execEdge12();

            // Event "c_releaseBrakes".
            edgeExecuted |= this.execEdge13();

            // Event "c_resetATP".
            edgeExecuted |= this.execEdge14();

            // Event "c_resetbeacons".
            edgeExecuted |= this.execEdge15();

            // Event "c_resetTimer".
            edgeExecuted |= this.execEdge16();

            // Event "c_ringCabinBell".
            edgeExecuted |= this.execEdge17();

            // Event "c_startTimer".
            edgeExecuted |= this.execEdge18();

            // Event "c_transitionATP".
            edgeExecuted |= this.execEdge19();

            // Event "c_turnATPoff".
            edgeExecuted |= this.execEdge20();

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
     * Execute code for edge with index 0 and event "u_ATPresetPressed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "u_beaconMessage".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = ((spec.ATP_) == (spec.specEnum._idle)) && ((spec.ATPvv_) == (spec.specEnum._detectBeacons));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        spec.ATP_ = spec.specEnum._emergency;
        spec.ATPvv_ = spec.specEnum._stopTrain;

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "u_changeTrackSignal".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = (spec.antenna_) == (spec.specEnum._decodePulses);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        if ((spec.antenna_) == (spec.specEnum._decodePulses)) {
            spec.antenna_signal_ = spec.specEnum._P0;
        } else if ((spec.antenna_) == (spec.specEnum._decodePulses)) {
            spec.antenna_signal_ = spec.specEnum._P1;
        } else if ((spec.antenna_) == (spec.specEnum._decodePulses)) {
            spec.antenna_signal_ = spec.specEnum._P2;
        } else if ((spec.antenna_) == (spec.specEnum._decodePulses)) {
            spec.antenna_signal_ = spec.specEnum._P3;
        } else if ((spec.antenna_) == (spec.specEnum._decodePulses)) {
            spec.antenna_signal_ = spec.specEnum._P4;
        } else if ((spec.antenna_) == (spec.specEnum._decodePulses)) {
            spec.antenna_signal_ = spec.specEnum._P_SPECIAL;
        }

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "u_decreaseSpeed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = (spec.speedSensor_speed_) > (0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(12, true);
        if (this.doInfoEvent) this.infoEvent(12, true);

        {
            var rhs1 = (spec.speedSensor_speed_) - (10);
            if ((rhs1) < 0) {
                specUtils.rangeErrInt("speedSensor.speed", specUtils.valueToStr(rhs1), "int[0..200]");
            }
            spec.speedSensor_speed_ = rhs1;
        }

        if (this.doInfoEvent) this.infoEvent(12, false);
        if (this.doInfoPrintOutput) this.printOutput(12, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "u_enterATPtrack".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = (spec.antenna_) == (spec.specEnum._notDetectingPulses);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(13, true);
        if (this.doInfoEvent) this.infoEvent(13, true);

        spec.antenna_ = spec.specEnum._decodePulses;

        if (this.doInfoEvent) this.infoEvent(13, false);
        if (this.doInfoPrintOutput) this.printOutput(13, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "u_enterERTMStrack".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = (spec.ERTMS_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(14, true);
        if (this.doInfoEvent) this.infoEvent(14, true);

        if ((spec.ERTMS_) == (spec.specEnum._off)) {
            spec.ERTMS_mode_ = spec.specEnum._IDLE;
            spec.ERTMS_ = spec.specEnum._on;
        } else if ((spec.ERTMS_) == (spec.specEnum._off)) {
            spec.ERTMS_mode_ = spec.specEnum._WARNING;
            spec.ERTMS_ = spec.specEnum._on;
        } else if ((spec.ERTMS_) == (spec.specEnum._off)) {
            spec.ERTMS_mode_ = spec.specEnum._EMERGENCY;
            spec.ERTMS_ = spec.specEnum._on;
        }

        if (this.doInfoEvent) this.infoEvent(14, false);
        if (this.doInfoPrintOutput) this.printOutput(14, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "u_increaseSpeed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = ((spec.brakes_) == (spec.specEnum._released)) && ((spec.speedSensor_speed_) < (200));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(15, true);
        if (this.doInfoEvent) this.infoEvent(15, true);

        {
            var rhs1 = (spec.speedSensor_speed_) + (10);
            if ((rhs1) > 200) {
                specUtils.rangeErrInt("speedSensor.speed", specUtils.valueToStr(rhs1), "int[0..200]");
            }
            spec.speedSensor_speed_ = rhs1;
        }

        if (this.doInfoEvent) this.infoEvent(15, false);
        if (this.doInfoPrintOutput) this.printOutput(15, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "u_incrementTimer".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = (((spec.ATP_) == (spec.specEnum._warningMode)) && (((spec.timer_timecounter_) <= (3)) || ((spec.timer_timecounter_) > (3)))) && ((spec.timer_) == (spec.specEnum._started));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(16, true);
        if (this.doInfoEvent) this.infoEvent(16, true);

        if (((spec.ATP_) == (spec.specEnum._warningMode)) && ((spec.timer_timecounter_) <= (3))) {
            spec.ATP_ = spec.specEnum._warningMode;
        } else if (((spec.ATP_) == (spec.specEnum._warningMode)) && ((spec.timer_timecounter_) > (3))) {
            spec.ATP_ = spec.specEnum._emergency;
        }
        {
            var rhs1 = (spec.timer_timecounter_) + (1);
            if ((rhs1) > 10) {
                specUtils.rangeErrInt("timer.timecounter", specUtils.valueToStr(rhs1), "int[0..10]");
            }
            spec.timer_timecounter_ = rhs1;
        }

        if (this.doInfoEvent) this.infoEvent(16, false);
        if (this.doInfoPrintOutput) this.printOutput(16, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "u_leaveERTMStrack".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = (spec.ERTMS_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(17, true);
        if (this.doInfoEvent) this.infoEvent(17, true);

        spec.ERTMS_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(17, false);
        if (this.doInfoPrintOutput) this.printOutput(17, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "u_noPulses".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = (spec.antenna_) == (spec.specEnum._decodePulses);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(18, true);
        if (this.doInfoEvent) this.infoEvent(18, true);

        spec.antenna_ = spec.specEnum._notDetectingPulses;

        if (this.doInfoEvent) this.infoEvent(18, false);
        if (this.doInfoPrintOutput) this.printOutput(18, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "u_pushBrakes".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = ((spec.brakePedal_) == (spec.specEnum._pedalUp)) && ((spec.brakes_) == (spec.specEnum._released));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(19, true);
        if (this.doInfoEvent) this.infoEvent(19, true);

        spec.brakePedal_ = spec.specEnum._pedalDown;
        spec.brakes_ = spec.specEnum._braking;

        if (this.doInfoEvent) this.infoEvent(19, false);
        if (this.doInfoPrintOutput) this.printOutput(19, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "u_releaseBrakes".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = (spec.brakePedal_) == (spec.specEnum._pedalDown);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(20, true);
        if (this.doInfoEvent) this.infoEvent(20, true);

        spec.brakePedal_ = spec.specEnum._pedalUp;

        if (this.doInfoEvent) this.infoEvent(20, false);
        if (this.doInfoPrintOutput) this.printOutput(20, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 12 and event "c_forceBrakes".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge12() {
        var guard = ((spec.ATP_) == (spec.specEnum._emergency)) && ((spec.brakes_) == (spec.specEnum._released));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        spec.brakes_ = spec.specEnum._braking;

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 13 and event "c_releaseBrakes".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge13() {
        var guard = (spec.brakes_) == (spec.specEnum._braking);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        spec.brakes_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 14 and event "c_resetATP".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge14() {
        var guard = (spec.ATP_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        spec.ATP_ = spec.specEnum._idle;

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 15 and event "c_resetbeacons".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge15() {
        var guard = (spec.ATPvv_) == (spec.specEnum._stopTrain);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        spec.ATPvv_ = spec.specEnum._detectBeacons;

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 16 and event "c_resetTimer".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge16() {
        var guard = false;

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.ATP_ = spec.specEnum._idle;
        spec.timer_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 17 and event "c_ringCabinBell".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge17() {
        var guard = false;

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.ATP_ = spec.specEnum._warningMode;

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 18 and event "c_startTimer".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge18() {
        var guard = ((spec.ATP_) == (spec.specEnum._warningMode)) && ((spec.timer_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.timer_ = spec.specEnum._started;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 19 and event "c_transitionATP".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge19() {
        var guard = (((spec.ATP_) == (spec.specEnum._off)) && (((spec.ERTMS_mode_) == (spec.specEnum._IDLE)) || (((spec.ERTMS_mode_) == (spec.specEnum._WARNING)) || ((spec.ERTMS_mode_) == (spec.specEnum._EMERGENCY))))) && (((spec.ERTMS_mode_) == (spec.specEnum._IDLE)) || ((spec.ERTMS_mode_) == (spec.specEnum._EMERGENCY)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        if (((spec.ATP_) == (spec.specEnum._off)) && ((spec.ERTMS_mode_) == (spec.specEnum._IDLE))) {
            spec.ATP_ = spec.specEnum._idle;
        } else if (((spec.ATP_) == (spec.specEnum._off)) && ((spec.ERTMS_mode_) == (spec.specEnum._WARNING))) {
            spec.ATP_ = spec.specEnum._warningMode;
        } else if (((spec.ATP_) == (spec.specEnum._off)) && ((spec.ERTMS_mode_) == (spec.specEnum._EMERGENCY))) {
            spec.ATP_ = spec.specEnum._emergency;
        }

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 20 and event "c_turnATPoff".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge20() {
        var guard = ((spec.ATP_) == (spec.specEnum._idle)) || (((spec.ATP_) == (spec.specEnum._emergency)) && (specUtils.equalObjs(spec.speedSensor_speed_, 0)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        if ((spec.ATP_) == (spec.specEnum._idle)) {
            spec.ATP_ = spec.specEnum._off;
        } else if (((spec.ATP_) == (spec.specEnum._emergency)) && (specUtils.equalObjs(spec.speedSensor_speed_, 0))) {
            spec.ATP_ = spec.specEnum._off;
        }

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
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
        spec.antenna_signal_ = spec.specEnum._P0;
        spec.antenna_ = spec.specEnum._decodePulses;
        spec.ATP_ = spec.specEnum._idle;
        spec.ATPvv_ = spec.specEnum._detectBeacons;
        spec.brakePedal_ = spec.specEnum._pedalUp;
        spec.brakes_ = spec.specEnum._released;
        spec.ERTMS_mode_ = spec.specEnum._OFF;
        spec.ERTMS_ = spec.specEnum._off;
        spec.speedSensor_speed_ = 40;
        spec.timer_timecounter_ = 0;
        spec.timer_ = spec.specEnum._off;
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
        state += specUtils.fmt(', antenna=%s', specUtils.valueToStr(spec.antenna_));
        state += specUtils.fmt(', antenna.signal=%s', specUtils.valueToStr(spec.antenna_signal_));
        state += specUtils.fmt(', ATP=%s', specUtils.valueToStr(spec.ATP_));
        state += specUtils.fmt(', ATPvv=%s', specUtils.valueToStr(spec.ATPvv_));
        state += specUtils.fmt(', brakePedal=%s', specUtils.valueToStr(spec.brakePedal_));
        state += specUtils.fmt(', brakes=%s', specUtils.valueToStr(spec.brakes_));
        state += specUtils.fmt(', ERTMS=%s', specUtils.valueToStr(spec.ERTMS_));
        state += specUtils.fmt(', ERTMS.mode=%s', specUtils.valueToStr(spec.ERTMS_mode_));
        state += specUtils.fmt(', speedSensor.speed=%s', specUtils.valueToStr(spec.speedSensor_speed_));
        state += specUtils.fmt(', timer=%s', specUtils.valueToStr(spec.timer_));
        state += specUtils.fmt(', timer.timecounter=%s', specUtils.valueToStr(spec.timer_timecounter_));
        return state;
    }


    /**
     * Evaluates algebraic variable "speedlimit".
     *
     * @return The evaluation result.
     */
    speedlimit_() {
        return ((spec.antenna_signal_) == (spec.specEnum._P0)) ? 40 : (((spec.antenna_signal_) == (spec.specEnum._P1)) ? 60 : (((spec.antenna_signal_) == (spec.specEnum._P2)) ? 80 : (((spec.antenna_signal_) == (spec.specEnum._P3)) ? 130 : (((spec.antenna_signal_) == (spec.specEnum._P4)) ? 140 : (0)))));
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
