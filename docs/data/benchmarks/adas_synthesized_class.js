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
        /** Literal "above". */
        _above: Symbol("above"),

        /** Literal "above_25". */
        _above_25: Symbol("above_25"),

        /** Literal "above_30". */
        _above_30: Symbol("above_30"),

        /** Literal "ACC". */
        _ACC: Symbol("ACC"),

        /** Literal "active". */
        _active: Symbol("active"),

        /** Literal "backward_on". */
        _backward_on: Symbol("backward_on"),

        /** Literal "below". */
        _below: Symbol("below"),

        /** Literal "below_25". */
        _below_25: Symbol("below_25"),

        /** Literal "below_30". */
        _below_30: Symbol("below_30"),

        /** Literal "CACC". */
        _CACC: Symbol("CACC"),

        /** Literal "CC". */
        _CC: Symbol("CC"),

        /** Literal "disabled". */
        _disabled: Symbol("disabled"),

        /** Literal "down_on". */
        _down_on: Symbol("down_on"),

        /** Literal "enabled". */
        _enabled: Symbol("enabled"),

        /** Literal "forward_on". */
        _forward_on: Symbol("forward_on"),

        /** Literal "higher". */
        _higher: Symbol("higher"),

        /** Literal "idle". */
        _idle: Symbol("idle"),

        /** Literal "inactive". */
        _inactive: Symbol("inactive"),

        /** Literal "no_set_speed". */
        _no_set_speed: Symbol("no_set_speed"),

        /** Literal "not_higher". */
        _not_higher: Symbol("not_higher"),

        /** Literal "nothing_on". */
        _nothing_on: Symbol("nothing_on"),

        /** Literal "off". */
        _off: Symbol("off"),

        /** Literal "on". */
        _on: Symbol("on"),

        /** Literal "one". */
        _one: Symbol("one"),

        /** Literal "pushed". */
        _pushed: Symbol("pushed"),

        /** Literal "released". */
        _released: Symbol("released"),

        /** Literal "speed_set". */
        _speed_set: Symbol("speed_set"),

        /** Literal "started". */
        _started: Symbol("started"),

        /** Literal "timedout". */
        _timedout: Symbol("timedout"),

        /** Literal "two". */
        _two: Symbol("two"),

        /** Literal "up_on". */
        _up_on: Symbol("up_on")
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
        "ACC_active.c_activate",
        "ACC_active.c_deactivate",
        "ACC_time_gap_button.u_pushed",
        "ACC_time_gap_button.u_released",
        "brake_sensor.u_off",
        "brake_sensor.u_on",
        "cancel.c_off",
        "cancel.c_on",
        "CC_active.c_activate",
        "CC_active.c_deactivate",
        "CC_enable_button.u_pushed",
        "CC_enable_button.u_released",
        "CC_enabled.c_disable",
        "CC_enabled.c_enable",
        "CC_lever.u_backward_off",
        "CC_lever.u_backward_on",
        "CC_lever.u_down_off",
        "CC_lever.u_down_on",
        "CC_lever.u_forward_off",
        "CC_lever.u_forward_on",
        "CC_lever.u_up_off",
        "CC_lever.u_up_on",
        "decrease.c_off",
        "decrease.c_on",
        "erase_set_speed.c_off",
        "erase_set_speed.c_on",
        "increase.c_off",
        "increase.c_on",
        "mode.c_off",
        "mode.c_on",
        "mode_observer.c_reset",
        "obs_higher_speed.u_higher",
        "obs_higher_speed.u_not_higher",
        "obs_max_speed.u_above_max",
        "obs_max_speed.u_below_max",
        "obs_min_set_speed.u_above_30",
        "obs_min_set_speed.u_below_30",
        "obs_min_v_activate.u_above_30",
        "obs_min_v_activate.u_below_30",
        "obs_min_v_deactivate.u_above_25",
        "obs_min_v_deactivate.u_below_25",
        "obs_overtake_throttle.u_off",
        "obs_overtake_throttle.u_on",
        "obs_set_speed.u_speed_erased",
        "obs_set_speed.u_speed_set",
        "radar.u_off",
        "radar.u_on",
        "radar_reliable.u_reliable",
        "radar_reliable.u_unreliable",
        "resume.c_off",
        "resume.c_on",
        "set_speed.c_off",
        "set_speed.c_on",
        "time_gap.c_off",
        "time_gap.c_on",
        "timer_180_CC.c_cancel",
        "timer_180_CC.c_reset",
        "timer_180_CC.c_start",
        "timer_180_CC.u_timeout",
        "timerdecrease.c_cancel",
        "timerdecrease.c_reset",
        "timerdecrease.c_start",
        "timerdecrease.u_timeout",
        "timerincrease.c_cancel",
        "timerincrease.c_reset",
        "timerincrease.c_start",
        "timerincrease.u_timeout"
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


    /** Discrete variable "ACC_active". */
    ACC_active_;

    /** Discrete variable "ACC_time_gap_button". */
    ACC_time_gap_button_;

    /** Discrete variable "brake_sensor". */
    brake_sensor_;

    /** Discrete variable "cancel". */
    cancel_;

    /** Discrete variable "CC_active". */
    CC_active_;

    /** Discrete variable "CC_enable_button". */
    CC_enable_button_;

    /** Discrete variable "CC_enabled". */
    CC_enabled_;

    /** Discrete variable "CC_lever". */
    CC_lever_;

    /** Discrete variable "CC_not_activate_after_throttle_overtake". */
    CC_not_activate_after_throttle_overtake_;

    /** Discrete variable "CC_not_activate_directly_after_deactivate". */
    CC_not_activate_directly_after_deactivate_;

    /** Discrete variable "decrease". */
    decrease_;

    /** Discrete variable "enabling". */
    enabling_;

    /** Discrete variable "erase_set_speed". */
    erase_set_speed_;

    /** Discrete variable "increase". */
    increase_;

    /** Discrete variable "mode". */
    mode_;

    /** Discrete variable "mode_observer". */
    mode_observer_;

    /** Discrete variable "obs_higher_speed". */
    obs_higher_speed_;

    /** Discrete variable "obs_max_speed". */
    obs_max_speed_;

    /** Discrete variable "obs_min_set_speed". */
    obs_min_set_speed_;

    /** Discrete variable "obs_min_v_activate". */
    obs_min_v_activate_;

    /** Discrete variable "obs_min_v_deactivate". */
    obs_min_v_deactivate_;

    /** Discrete variable "obs_overtake_throttle". */
    obs_overtake_throttle_;

    /** Discrete variable "obs_set_speed". */
    obs_set_speed_;

    /** Discrete variable "radar". */
    radar_;

    /** Discrete variable "radar_reliable". */
    radar_reliable_;

    /** Discrete variable "resume". */
    resume_;

    /** Discrete variable "set_speed". */
    set_speed_;

    /** Discrete variable "time_gap". */
    time_gap_;

    /** Discrete variable "timer_180_CC". */
    timer_180_CC_;

    /** Discrete variable "timerdecrease". */
    timerdecrease_;

    /** Discrete variable "timerincrease". */
    timerincrease_;


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

            // Event "ACC_time_gap_button.u_pushed".
            edgeExecuted |= this.execEdge0();

            // Event "ACC_time_gap_button.u_released".
            edgeExecuted |= this.execEdge1();

            // Event "brake_sensor.u_off".
            edgeExecuted |= this.execEdge2();

            // Event "brake_sensor.u_on".
            edgeExecuted |= this.execEdge3();

            // Event "CC_enable_button.u_pushed".
            edgeExecuted |= this.execEdge4();

            // Event "CC_enable_button.u_released".
            edgeExecuted |= this.execEdge5();

            // Event "CC_lever.u_backward_off".
            edgeExecuted |= this.execEdge6();

            // Event "CC_lever.u_backward_on".
            edgeExecuted |= this.execEdge7();

            // Event "CC_lever.u_down_off".
            edgeExecuted |= this.execEdge8();

            // Event "CC_lever.u_down_on".
            edgeExecuted |= this.execEdge9();

            // Event "CC_lever.u_forward_off".
            edgeExecuted |= this.execEdge10();

            // Event "CC_lever.u_forward_on".
            edgeExecuted |= this.execEdge11();

            // Event "CC_lever.u_up_off".
            edgeExecuted |= this.execEdge12();

            // Event "CC_lever.u_up_on".
            edgeExecuted |= this.execEdge13();

            // Event "obs_higher_speed.u_higher".
            edgeExecuted |= this.execEdge14();

            // Event "obs_higher_speed.u_not_higher".
            edgeExecuted |= this.execEdge15();

            // Event "obs_max_speed.u_above_max".
            edgeExecuted |= this.execEdge16();

            // Event "obs_max_speed.u_below_max".
            edgeExecuted |= this.execEdge17();

            // Event "obs_min_set_speed.u_above_30".
            edgeExecuted |= this.execEdge18();

            // Event "obs_min_set_speed.u_below_30".
            edgeExecuted |= this.execEdge19();

            // Event "obs_min_v_activate.u_above_30".
            edgeExecuted |= this.execEdge20();

            // Event "obs_min_v_activate.u_below_30".
            edgeExecuted |= this.execEdge21();

            // Event "obs_min_v_deactivate.u_above_25".
            edgeExecuted |= this.execEdge22();

            // Event "obs_min_v_deactivate.u_below_25".
            edgeExecuted |= this.execEdge23();

            // Event "obs_overtake_throttle.u_off".
            edgeExecuted |= this.execEdge24();

            // Event "obs_overtake_throttle.u_on".
            edgeExecuted |= this.execEdge25();

            // Event "obs_set_speed.u_speed_erased".
            edgeExecuted |= this.execEdge26();

            // Event "obs_set_speed.u_speed_set".
            edgeExecuted |= this.execEdge27();

            // Event "radar.u_off".
            edgeExecuted |= this.execEdge28();

            // Event "radar.u_on".
            edgeExecuted |= this.execEdge29();

            // Event "radar_reliable.u_reliable".
            edgeExecuted |= this.execEdge30();

            // Event "radar_reliable.u_unreliable".
            edgeExecuted |= this.execEdge31();

            // Event "timer_180_CC.u_timeout".
            edgeExecuted |= this.execEdge32();

            // Event "timerdecrease.u_timeout".
            edgeExecuted |= this.execEdge33();

            // Event "timerincrease.u_timeout".
            edgeExecuted |= this.execEdge34();

            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Execute controllable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;

            // Event "ACC_active.c_activate".
            edgeExecuted |= this.execEdge35();

            // Event "ACC_active.c_deactivate".
            edgeExecuted |= this.execEdge36();

            // Event "cancel.c_off".
            edgeExecuted |= this.execEdge37();

            // Event "cancel.c_on".
            edgeExecuted |= this.execEdge38();

            // Event "CC_active.c_activate".
            edgeExecuted |= this.execEdge39();

            // Event "CC_active.c_deactivate".
            edgeExecuted |= this.execEdge40();

            // Event "CC_enabled.c_disable".
            edgeExecuted |= this.execEdge41();

            // Event "CC_enabled.c_enable".
            edgeExecuted |= this.execEdge42();

            // Event "decrease.c_off".
            edgeExecuted |= this.execEdge43();

            // Event "decrease.c_on".
            edgeExecuted |= this.execEdge44();

            // Event "erase_set_speed.c_off".
            edgeExecuted |= this.execEdge45();

            // Event "erase_set_speed.c_on".
            edgeExecuted |= this.execEdge46();

            // Event "increase.c_off".
            edgeExecuted |= this.execEdge47();

            // Event "increase.c_on".
            edgeExecuted |= this.execEdge48();

            // Event "mode.c_off".
            edgeExecuted |= this.execEdge49();

            // Event "mode.c_on".
            edgeExecuted |= this.execEdge50();

            // Event "mode_observer.c_reset".
            edgeExecuted |= this.execEdge51();

            // Event "resume.c_off".
            edgeExecuted |= this.execEdge52();

            // Event "resume.c_on".
            edgeExecuted |= this.execEdge53();

            // Event "set_speed.c_off".
            edgeExecuted |= this.execEdge54();

            // Event "set_speed.c_on".
            edgeExecuted |= this.execEdge55();

            // Event "time_gap.c_off".
            edgeExecuted |= this.execEdge56();

            // Event "time_gap.c_on".
            edgeExecuted |= this.execEdge57();

            // Event "timer_180_CC.c_cancel".
            edgeExecuted |= this.execEdge58();

            // Event "timer_180_CC.c_reset".
            edgeExecuted |= this.execEdge59();

            // Event "timer_180_CC.c_start".
            edgeExecuted |= this.execEdge60();

            // Event "timerdecrease.c_cancel".
            edgeExecuted |= this.execEdge61();

            // Event "timerdecrease.c_reset".
            edgeExecuted |= this.execEdge62();

            // Event "timerdecrease.c_start".
            edgeExecuted |= this.execEdge63();

            // Event "timerincrease.c_cancel".
            edgeExecuted |= this.execEdge64();

            // Event "timerincrease.c_reset".
            edgeExecuted |= this.execEdge65();

            // Event "timerincrease.c_start".
            edgeExecuted |= this.execEdge66();

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
     * Execute code for edge with index 0 and event "ACC_time_gap_button.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = (spec.ACC_time_gap_button_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        spec.ACC_time_gap_button_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "ACC_time_gap_button.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = (spec.ACC_time_gap_button_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        spec.ACC_time_gap_button_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "brake_sensor.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = (spec.brake_sensor_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.brake_sensor_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "brake_sensor.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = ((spec.brake_sensor_) == (spec.specEnum._off)) && (((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._one)) || ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._two)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.brake_sensor_ = spec.specEnum._on;
        if ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._one)) {
            spec.CC_not_activate_directly_after_deactivate_ = spec.specEnum._two;
        } else if ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._two)) {
            spec.CC_not_activate_directly_after_deactivate_ = spec.specEnum._two;
        }

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "CC_enable_button.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = ((spec.CC_enable_button_) == (spec.specEnum._released)) && (((spec.enabling_) == (spec.specEnum._one)) || ((spec.enabling_) == (spec.specEnum._two)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        spec.CC_enable_button_ = spec.specEnum._pushed;
        if ((spec.enabling_) == (spec.specEnum._one)) {
            spec.enabling_ = spec.specEnum._two;
        } else if ((spec.enabling_) == (spec.specEnum._two)) {
            spec.enabling_ = spec.specEnum._two;
        }

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "CC_enable_button.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = (spec.CC_enable_button_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        spec.CC_enable_button_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "CC_lever.u_backward_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = ((spec.CC_lever_) == (spec.specEnum._down_on)) || (((spec.CC_lever_) == (spec.specEnum._forward_on)) || (((spec.CC_lever_) == (spec.specEnum._backward_on)) || ((spec.CC_lever_) == (spec.specEnum._up_on))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(14, true);
        if (this.doInfoEvent) this.infoEvent(14, true);

        if ((spec.CC_lever_) == (spec.specEnum._down_on)) {
            spec.CC_lever_ = spec.specEnum._down_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._forward_on)) {
            spec.CC_lever_ = spec.specEnum._forward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._backward_on)) {
            spec.CC_lever_ = spec.specEnum._nothing_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._up_on)) {
            spec.CC_lever_ = spec.specEnum._up_on;
        }

        if (this.doInfoEvent) this.infoEvent(14, false);
        if (this.doInfoPrintOutput) this.printOutput(14, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "CC_lever.u_backward_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = ((((spec.CC_lever_) == (spec.specEnum._nothing_on)) || ((spec.CC_lever_) == (spec.specEnum._down_on))) || (((spec.CC_lever_) == (spec.specEnum._forward_on)) || ((spec.CC_lever_) == (spec.specEnum._up_on)))) && (((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._one)) || ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._two)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(15, true);
        if (this.doInfoEvent) this.infoEvent(15, true);

        if ((spec.CC_lever_) == (spec.specEnum._nothing_on)) {
            spec.CC_lever_ = spec.specEnum._backward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._down_on)) {
            spec.CC_lever_ = spec.specEnum._down_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._forward_on)) {
            spec.CC_lever_ = spec.specEnum._forward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._up_on)) {
            spec.CC_lever_ = spec.specEnum._up_on;
        }
        if ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._one)) {
            spec.CC_not_activate_directly_after_deactivate_ = spec.specEnum._two;
        } else if ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._two)) {
            spec.CC_not_activate_directly_after_deactivate_ = spec.specEnum._two;
        }

        if (this.doInfoEvent) this.infoEvent(15, false);
        if (this.doInfoPrintOutput) this.printOutput(15, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "CC_lever.u_down_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = ((spec.CC_lever_) == (spec.specEnum._down_on)) || (((spec.CC_lever_) == (spec.specEnum._forward_on)) || (((spec.CC_lever_) == (spec.specEnum._backward_on)) || ((spec.CC_lever_) == (spec.specEnum._up_on))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(16, true);
        if (this.doInfoEvent) this.infoEvent(16, true);

        if ((spec.CC_lever_) == (spec.specEnum._down_on)) {
            spec.CC_lever_ = spec.specEnum._nothing_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._forward_on)) {
            spec.CC_lever_ = spec.specEnum._forward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._backward_on)) {
            spec.CC_lever_ = spec.specEnum._backward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._up_on)) {
            spec.CC_lever_ = spec.specEnum._up_on;
        }

        if (this.doInfoEvent) this.infoEvent(16, false);
        if (this.doInfoPrintOutput) this.printOutput(16, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "CC_lever.u_down_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = (((spec.CC_lever_) == (spec.specEnum._nothing_on)) || (((spec.CC_lever_) == (spec.specEnum._forward_on)) || (((spec.CC_lever_) == (spec.specEnum._backward_on)) || ((spec.CC_lever_) == (spec.specEnum._up_on))))) && (((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._one)) || ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._two)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(17, true);
        if (this.doInfoEvent) this.infoEvent(17, true);

        if ((spec.CC_lever_) == (spec.specEnum._nothing_on)) {
            spec.CC_lever_ = spec.specEnum._down_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._forward_on)) {
            spec.CC_lever_ = spec.specEnum._forward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._backward_on)) {
            spec.CC_lever_ = spec.specEnum._backward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._up_on)) {
            spec.CC_lever_ = spec.specEnum._up_on;
        }
        if ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._one)) {
            spec.CC_not_activate_directly_after_deactivate_ = spec.specEnum._one;
        } else if ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._two)) {
            spec.CC_not_activate_directly_after_deactivate_ = spec.specEnum._one;
        }

        if (this.doInfoEvent) this.infoEvent(17, false);
        if (this.doInfoPrintOutput) this.printOutput(17, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "CC_lever.u_forward_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = ((spec.CC_lever_) == (spec.specEnum._down_on)) || (((spec.CC_lever_) == (spec.specEnum._forward_on)) || (((spec.CC_lever_) == (spec.specEnum._backward_on)) || ((spec.CC_lever_) == (spec.specEnum._up_on))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(18, true);
        if (this.doInfoEvent) this.infoEvent(18, true);

        if ((spec.CC_lever_) == (spec.specEnum._down_on)) {
            spec.CC_lever_ = spec.specEnum._down_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._forward_on)) {
            spec.CC_lever_ = spec.specEnum._nothing_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._backward_on)) {
            spec.CC_lever_ = spec.specEnum._backward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._up_on)) {
            spec.CC_lever_ = spec.specEnum._up_on;
        }

        if (this.doInfoEvent) this.infoEvent(18, false);
        if (this.doInfoPrintOutput) this.printOutput(18, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "CC_lever.u_forward_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = (((spec.CC_lever_) == (spec.specEnum._nothing_on)) || ((spec.CC_lever_) == (spec.specEnum._down_on))) || (((spec.CC_lever_) == (spec.specEnum._backward_on)) || ((spec.CC_lever_) == (spec.specEnum._up_on)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(19, true);
        if (this.doInfoEvent) this.infoEvent(19, true);

        if ((spec.CC_lever_) == (spec.specEnum._nothing_on)) {
            spec.CC_lever_ = spec.specEnum._forward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._down_on)) {
            spec.CC_lever_ = spec.specEnum._down_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._backward_on)) {
            spec.CC_lever_ = spec.specEnum._backward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._up_on)) {
            spec.CC_lever_ = spec.specEnum._up_on;
        }

        if (this.doInfoEvent) this.infoEvent(19, false);
        if (this.doInfoPrintOutput) this.printOutput(19, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 12 and event "CC_lever.u_up_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge12() {
        var guard = ((spec.CC_lever_) == (spec.specEnum._down_on)) || (((spec.CC_lever_) == (spec.specEnum._forward_on)) || (((spec.CC_lever_) == (spec.specEnum._backward_on)) || ((spec.CC_lever_) == (spec.specEnum._up_on))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(20, true);
        if (this.doInfoEvent) this.infoEvent(20, true);

        if ((spec.CC_lever_) == (spec.specEnum._down_on)) {
            spec.CC_lever_ = spec.specEnum._down_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._forward_on)) {
            spec.CC_lever_ = spec.specEnum._forward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._backward_on)) {
            spec.CC_lever_ = spec.specEnum._backward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._up_on)) {
            spec.CC_lever_ = spec.specEnum._nothing_on;
        }

        if (this.doInfoEvent) this.infoEvent(20, false);
        if (this.doInfoPrintOutput) this.printOutput(20, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 13 and event "CC_lever.u_up_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge13() {
        var guard = ((((spec.CC_lever_) == (spec.specEnum._nothing_on)) || ((spec.CC_lever_) == (spec.specEnum._down_on))) || (((spec.CC_lever_) == (spec.specEnum._forward_on)) || ((spec.CC_lever_) == (spec.specEnum._backward_on)))) && (((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._one)) || ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._two)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(21, true);
        if (this.doInfoEvent) this.infoEvent(21, true);

        if ((spec.CC_lever_) == (spec.specEnum._nothing_on)) {
            spec.CC_lever_ = spec.specEnum._up_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._down_on)) {
            spec.CC_lever_ = spec.specEnum._down_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._forward_on)) {
            spec.CC_lever_ = spec.specEnum._forward_on;
        } else if ((spec.CC_lever_) == (spec.specEnum._backward_on)) {
            spec.CC_lever_ = spec.specEnum._backward_on;
        }
        if ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._one)) {
            spec.CC_not_activate_directly_after_deactivate_ = spec.specEnum._one;
        } else if ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._two)) {
            spec.CC_not_activate_directly_after_deactivate_ = spec.specEnum._one;
        }

        if (this.doInfoEvent) this.infoEvent(21, false);
        if (this.doInfoPrintOutput) this.printOutput(21, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 14 and event "obs_higher_speed.u_higher".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge14() {
        var guard = (spec.obs_higher_speed_) == (spec.specEnum._not_higher);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(31, true);
        if (this.doInfoEvent) this.infoEvent(31, true);

        spec.obs_higher_speed_ = spec.specEnum._higher;

        if (this.doInfoEvent) this.infoEvent(31, false);
        if (this.doInfoPrintOutput) this.printOutput(31, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 15 and event "obs_higher_speed.u_not_higher".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge15() {
        var guard = (spec.obs_higher_speed_) == (spec.specEnum._higher);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(32, true);
        if (this.doInfoEvent) this.infoEvent(32, true);

        spec.obs_higher_speed_ = spec.specEnum._not_higher;

        if (this.doInfoEvent) this.infoEvent(32, false);
        if (this.doInfoPrintOutput) this.printOutput(32, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 16 and event "obs_max_speed.u_above_max".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge16() {
        var guard = (spec.obs_max_speed_) == (spec.specEnum._below);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(33, true);
        if (this.doInfoEvent) this.infoEvent(33, true);

        spec.obs_max_speed_ = spec.specEnum._above;

        if (this.doInfoEvent) this.infoEvent(33, false);
        if (this.doInfoPrintOutput) this.printOutput(33, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 17 and event "obs_max_speed.u_below_max".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge17() {
        var guard = (spec.obs_max_speed_) == (spec.specEnum._above);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(34, true);
        if (this.doInfoEvent) this.infoEvent(34, true);

        spec.obs_max_speed_ = spec.specEnum._below;

        if (this.doInfoEvent) this.infoEvent(34, false);
        if (this.doInfoPrintOutput) this.printOutput(34, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 18 and event "obs_min_set_speed.u_above_30".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge18() {
        var guard = (spec.obs_min_set_speed_) == (spec.specEnum._below_30);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(35, true);
        if (this.doInfoEvent) this.infoEvent(35, true);

        spec.obs_min_set_speed_ = spec.specEnum._above_30;

        if (this.doInfoEvent) this.infoEvent(35, false);
        if (this.doInfoPrintOutput) this.printOutput(35, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 19 and event "obs_min_set_speed.u_below_30".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge19() {
        var guard = (spec.obs_min_set_speed_) == (spec.specEnum._above_30);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(36, true);
        if (this.doInfoEvent) this.infoEvent(36, true);

        spec.obs_min_set_speed_ = spec.specEnum._below_30;

        if (this.doInfoEvent) this.infoEvent(36, false);
        if (this.doInfoPrintOutput) this.printOutput(36, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 20 and event "obs_min_v_activate.u_above_30".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge20() {
        var guard = (spec.obs_min_v_activate_) == (spec.specEnum._below_30);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(37, true);
        if (this.doInfoEvent) this.infoEvent(37, true);

        spec.obs_min_v_activate_ = spec.specEnum._above_30;

        if (this.doInfoEvent) this.infoEvent(37, false);
        if (this.doInfoPrintOutput) this.printOutput(37, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 21 and event "obs_min_v_activate.u_below_30".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge21() {
        var guard = (spec.obs_min_v_activate_) == (spec.specEnum._above_30);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(38, true);
        if (this.doInfoEvent) this.infoEvent(38, true);

        spec.obs_min_v_activate_ = spec.specEnum._below_30;

        if (this.doInfoEvent) this.infoEvent(38, false);
        if (this.doInfoPrintOutput) this.printOutput(38, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 22 and event "obs_min_v_deactivate.u_above_25".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge22() {
        var guard = (spec.obs_min_v_deactivate_) == (spec.specEnum._below_25);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(39, true);
        if (this.doInfoEvent) this.infoEvent(39, true);

        spec.obs_min_v_deactivate_ = spec.specEnum._above_25;

        if (this.doInfoEvent) this.infoEvent(39, false);
        if (this.doInfoPrintOutput) this.printOutput(39, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 23 and event "obs_min_v_deactivate.u_below_25".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge23() {
        var guard = (spec.obs_min_v_deactivate_) == (spec.specEnum._above_25);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(40, true);
        if (this.doInfoEvent) this.infoEvent(40, true);

        spec.obs_min_v_deactivate_ = spec.specEnum._below_25;

        if (this.doInfoEvent) this.infoEvent(40, false);
        if (this.doInfoPrintOutput) this.printOutput(40, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 24 and event "obs_overtake_throttle.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge24() {
        var guard = (spec.obs_overtake_throttle_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(41, true);
        if (this.doInfoEvent) this.infoEvent(41, true);

        spec.obs_overtake_throttle_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(41, false);
        if (this.doInfoPrintOutput) this.printOutput(41, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 25 and event "obs_overtake_throttle.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge25() {
        var guard = (spec.obs_overtake_throttle_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(42, true);
        if (this.doInfoEvent) this.infoEvent(42, true);

        spec.obs_overtake_throttle_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(42, false);
        if (this.doInfoPrintOutput) this.printOutput(42, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 26 and event "obs_set_speed.u_speed_erased".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge26() {
        var guard = (spec.obs_set_speed_) == (spec.specEnum._speed_set);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(43, true);
        if (this.doInfoEvent) this.infoEvent(43, true);

        spec.obs_set_speed_ = spec.specEnum._no_set_speed;

        if (this.doInfoEvent) this.infoEvent(43, false);
        if (this.doInfoPrintOutput) this.printOutput(43, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 27 and event "obs_set_speed.u_speed_set".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge27() {
        var guard = (spec.obs_set_speed_) == (spec.specEnum._no_set_speed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(44, true);
        if (this.doInfoEvent) this.infoEvent(44, true);

        spec.obs_set_speed_ = spec.specEnum._speed_set;

        if (this.doInfoEvent) this.infoEvent(44, false);
        if (this.doInfoPrintOutput) this.printOutput(44, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 28 and event "radar.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge28() {
        var guard = (spec.radar_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(45, true);
        if (this.doInfoEvent) this.infoEvent(45, true);

        spec.radar_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(45, false);
        if (this.doInfoPrintOutput) this.printOutput(45, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 29 and event "radar.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge29() {
        var guard = (spec.radar_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(46, true);
        if (this.doInfoEvent) this.infoEvent(46, true);

        spec.radar_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(46, false);
        if (this.doInfoPrintOutput) this.printOutput(46, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 30 and event "radar_reliable.u_reliable".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge30() {
        var guard = (spec.radar_reliable_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(47, true);
        if (this.doInfoEvent) this.infoEvent(47, true);

        spec.radar_reliable_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(47, false);
        if (this.doInfoPrintOutput) this.printOutput(47, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 31 and event "radar_reliable.u_unreliable".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge31() {
        var guard = (spec.radar_reliable_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(48, true);
        if (this.doInfoEvent) this.infoEvent(48, true);

        spec.radar_reliable_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(48, false);
        if (this.doInfoPrintOutput) this.printOutput(48, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 32 and event "timer_180_CC.u_timeout".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge32() {
        var guard = (((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._one)) || ((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._two))) && ((spec.timer_180_CC_) == (spec.specEnum._started));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(58, true);
        if (this.doInfoEvent) this.infoEvent(58, true);

        if ((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._one)) {
            spec.CC_not_activate_after_throttle_overtake_ = spec.specEnum._two;
        } else if ((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._two)) {
            spec.CC_not_activate_after_throttle_overtake_ = spec.specEnum._two;
        }
        spec.timer_180_CC_ = spec.specEnum._timedout;

        if (this.doInfoEvent) this.infoEvent(58, false);
        if (this.doInfoPrintOutput) this.printOutput(58, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 33 and event "timerdecrease.u_timeout".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge33() {
        var guard = (spec.timerdecrease_) == (spec.specEnum._started);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(62, true);
        if (this.doInfoEvent) this.infoEvent(62, true);

        spec.timerdecrease_ = spec.specEnum._timedout;

        if (this.doInfoEvent) this.infoEvent(62, false);
        if (this.doInfoPrintOutput) this.printOutput(62, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 34 and event "timerincrease.u_timeout".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge34() {
        var guard = (spec.timerincrease_) == (spec.specEnum._started);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(66, true);
        if (this.doInfoEvent) this.infoEvent(66, true);

        spec.timerincrease_ = spec.specEnum._timedout;

        if (this.doInfoEvent) this.infoEvent(66, false);
        if (this.doInfoPrintOutput) this.printOutput(66, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 35 and event "ACC_active.c_activate".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge35() {
        var guard = (((spec.ACC_active_) == (spec.specEnum._inactive)) && ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._one))) && ((((spec.obs_higher_speed_) == (spec.specEnum._higher)) && ((spec.brake_sensor_) == (spec.specEnum._off))) && (((spec.mode_observer_) != (spec.specEnum._CC)) && (((spec.cancel_) != (spec.specEnum._on)) && ((spec.radar_reliable_) == (spec.specEnum._on)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        spec.ACC_active_ = spec.specEnum._active;

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 36 and event "ACC_active.c_deactivate".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge36() {
        var guard = ((spec.ACC_active_) == (spec.specEnum._active)) && ((((spec.obs_higher_speed_) == (spec.specEnum._not_higher)) || ((spec.brake_sensor_) == (spec.specEnum._on))) || (((spec.mode_observer_) == (spec.specEnum._CC)) || (((spec.cancel_) == (spec.specEnum._on)) || ((spec.radar_reliable_) == (spec.specEnum._off)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        spec.ACC_active_ = spec.specEnum._inactive;

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 37 and event "cancel.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge37() {
        var guard = ((spec.cancel_) == (spec.specEnum._on)) && ((spec.CC_lever_) == (spec.specEnum._nothing_on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.cancel_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 38 and event "cancel.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge38() {
        var guard = ((spec.cancel_) == (spec.specEnum._off)) && (((spec.CC_lever_) == (spec.specEnum._backward_on)) && ((((spec.CC_active_) == (spec.specEnum._active)) || ((spec.ACC_active_) == (spec.specEnum._active))) && ((spec.CC_enabled_) == (spec.specEnum._enabled))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.cancel_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 39 and event "CC_active.c_activate".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge39() {
        var guard = (((spec.CC_active_) == (spec.specEnum._inactive)) && (((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._one)) && ((spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._one)))) && ((((spec.CC_enabled_) == (spec.specEnum._enabled)) && (((((spec.set_speed_) == (spec.specEnum._on)) || (((spec.ACC_active_) == (spec.specEnum._inactive)) && ((spec.obs_set_speed_) == (spec.specEnum._speed_set)))) || (((spec.resume_) == (spec.specEnum._on)) && ((spec.obs_set_speed_) == (spec.specEnum._speed_set)))) && ((spec.brake_sensor_) == (spec.specEnum._off)))) && ((((spec.obs_min_v_activate_) == (spec.specEnum._above_30)) && ((spec.obs_overtake_throttle_) != (spec.specEnum._on))) && (((spec.cancel_) != (spec.specEnum._on)) && ((spec.timer_180_CC_) != (spec.specEnum._timedout)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.CC_active_ = spec.specEnum._active;

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 40 and event "CC_active.c_deactivate".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge40() {
        var guard = ((spec.CC_active_) == (spec.specEnum._active)) && ((((spec.CC_enabled_) == (spec.specEnum._disabled)) || (((spec.cancel_) == (spec.specEnum._on)) || ((spec.brake_sensor_) == (spec.specEnum._on)))) || (((spec.timer_180_CC_) == (spec.specEnum._timedout)) || (((spec.ACC_active_) == (spec.specEnum._active)) || ((spec.obs_min_v_deactivate_) == (spec.specEnum._below_25)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        spec.CC_active_ = spec.specEnum._inactive;

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 41 and event "CC_enabled.c_disable".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge41() {
        var guard = ((spec.CC_enabled_) == (spec.specEnum._enabled)) && ((spec.enabling_) == (spec.specEnum._two));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(12, true);
        if (this.doInfoEvent) this.infoEvent(12, true);

        spec.CC_enabled_ = spec.specEnum._disabled;
        spec.enabling_ = spec.specEnum._one;

        if (this.doInfoEvent) this.infoEvent(12, false);
        if (this.doInfoPrintOutput) this.printOutput(12, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 42 and event "CC_enabled.c_enable".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge42() {
        var guard = ((spec.CC_enabled_) == (spec.specEnum._disabled)) && ((spec.enabling_) == (spec.specEnum._two));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(13, true);
        if (this.doInfoEvent) this.infoEvent(13, true);

        spec.CC_enabled_ = spec.specEnum._enabled;
        spec.enabling_ = spec.specEnum._one;

        if (this.doInfoEvent) this.infoEvent(13, false);
        if (this.doInfoPrintOutput) this.printOutput(13, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 43 and event "decrease.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge43() {
        var guard = ((spec.decrease_) == (spec.specEnum._on)) && (((spec.CC_lever_) == (spec.specEnum._nothing_on)) || ((spec.obs_min_set_speed_) == (spec.specEnum._below_30)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(22, true);
        if (this.doInfoEvent) this.infoEvent(22, true);

        spec.decrease_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(22, false);
        if (this.doInfoPrintOutput) this.printOutput(22, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 44 and event "decrease.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge44() {
        var guard = (((spec.decrease_) == (spec.specEnum._off)) && (((spec.CC_lever_) == (spec.specEnum._down_on)) && ((spec.brake_sensor_) == (spec.specEnum._off)))) && ((((spec.obs_min_v_activate_) == (spec.specEnum._above_30)) && (((spec.obs_set_speed_) == (spec.specEnum._speed_set)) && ((spec.timerdecrease_) == (spec.specEnum._timedout)))) && (((((spec.CC_active_) == (spec.specEnum._active)) || ((spec.ACC_active_) == (spec.specEnum._active))) && ((spec.CC_enabled_) == (spec.specEnum._enabled))) && (((spec.obs_min_set_speed_) == (spec.specEnum._above_30)) && ((spec.obs_overtake_throttle_) != (spec.specEnum._on)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(23, true);
        if (this.doInfoEvent) this.infoEvent(23, true);

        spec.decrease_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(23, false);
        if (this.doInfoPrintOutput) this.printOutput(23, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 45 and event "erase_set_speed.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge45() {
        var guard = ((spec.erase_set_speed_) == (spec.specEnum._on)) && ((spec.CC_enabled_) == (spec.specEnum._enabled));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(24, true);
        if (this.doInfoEvent) this.infoEvent(24, true);

        spec.erase_set_speed_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(24, false);
        if (this.doInfoPrintOutput) this.printOutput(24, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 46 and event "erase_set_speed.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge46() {
        var guard = ((spec.erase_set_speed_) == (spec.specEnum._off)) && (((spec.CC_enabled_) == (spec.specEnum._disabled)) && ((spec.obs_set_speed_) == (spec.specEnum._speed_set)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(25, true);
        if (this.doInfoEvent) this.infoEvent(25, true);

        spec.erase_set_speed_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(25, false);
        if (this.doInfoPrintOutput) this.printOutput(25, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 47 and event "increase.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge47() {
        var guard = ((spec.increase_) == (spec.specEnum._on)) && (((spec.CC_lever_) == (spec.specEnum._nothing_on)) || ((spec.obs_max_speed_) == (spec.specEnum._above)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(26, true);
        if (this.doInfoEvent) this.infoEvent(26, true);

        spec.increase_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(26, false);
        if (this.doInfoPrintOutput) this.printOutput(26, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 48 and event "increase.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge48() {
        var guard = (((spec.increase_) == (spec.specEnum._off)) && (((spec.CC_lever_) == (spec.specEnum._up_on)) && ((spec.obs_max_speed_) == (spec.specEnum._below)))) && ((((spec.obs_min_v_activate_) == (spec.specEnum._above_30)) && (((spec.CC_active_) == (spec.specEnum._active)) && ((spec.obs_set_speed_) == (spec.specEnum._speed_set)))) && (((spec.timerincrease_) == (spec.specEnum._timedout)) && (((spec.brake_sensor_) == (spec.specEnum._off)) && ((spec.CC_enabled_) == (spec.specEnum._enabled)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(27, true);
        if (this.doInfoEvent) this.infoEvent(27, true);

        spec.increase_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(27, false);
        if (this.doInfoPrintOutput) this.printOutput(27, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 49 and event "mode.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge49() {
        var guard = ((spec.mode_) == (spec.specEnum._on)) && ((spec.CC_lever_) == (spec.specEnum._nothing_on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(28, true);
        if (this.doInfoEvent) this.infoEvent(28, true);

        spec.mode_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(28, false);
        if (this.doInfoPrintOutput) this.printOutput(28, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 50 and event "mode.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge50() {
        var guard = (((spec.mode_) == (spec.specEnum._off)) && (((spec.mode_observer_) == (spec.specEnum._CC)) || (((spec.mode_observer_) == (spec.specEnum._ACC)) || ((spec.mode_observer_) == (spec.specEnum._CACC))))) && ((spec.CC_lever_) == (spec.specEnum._forward_on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(29, true);
        if (this.doInfoEvent) this.infoEvent(29, true);

        spec.mode_ = spec.specEnum._on;
        if ((spec.mode_observer_) == (spec.specEnum._CC)) {
            spec.mode_observer_ = spec.specEnum._ACC;
        } else if ((spec.mode_observer_) == (spec.specEnum._ACC)) {
            spec.mode_observer_ = spec.specEnum._CACC;
        } else if ((spec.mode_observer_) == (spec.specEnum._CACC)) {
            spec.mode_observer_ = spec.specEnum._CC;
        }

        if (this.doInfoEvent) this.infoEvent(29, false);
        if (this.doInfoPrintOutput) this.printOutput(29, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 51 and event "mode_observer.c_reset".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge51() {
        var guard = (((spec.mode_observer_) == (spec.specEnum._ACC)) || ((spec.mode_observer_) == (spec.specEnum._CACC))) && ((spec.CC_enabled_) == (spec.specEnum._disabled));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(30, true);
        if (this.doInfoEvent) this.infoEvent(30, true);

        if ((spec.mode_observer_) == (spec.specEnum._ACC)) {
            spec.mode_observer_ = spec.specEnum._CC;
        } else if ((spec.mode_observer_) == (spec.specEnum._CACC)) {
            spec.mode_observer_ = spec.specEnum._CC;
        }

        if (this.doInfoEvent) this.infoEvent(30, false);
        if (this.doInfoPrintOutput) this.printOutput(30, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 52 and event "resume.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge52() {
        var guard = ((spec.resume_) == (spec.specEnum._on)) && (((spec.CC_lever_) == (spec.specEnum._nothing_on)) || ((spec.increase_) == (spec.specEnum._on)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(49, true);
        if (this.doInfoEvent) this.infoEvent(49, true);

        spec.resume_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(49, false);
        if (this.doInfoPrintOutput) this.printOutput(49, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 53 and event "resume.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge53() {
        var guard = ((((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._one)) || ((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._two))) && ((spec.resume_) == (spec.specEnum._off))) && ((((spec.CC_lever_) == (spec.specEnum._up_on)) && (((spec.CC_active_) == (spec.specEnum._inactive)) && ((spec.ACC_active_) == (spec.specEnum._inactive)))) && (((spec.CC_enabled_) == (spec.specEnum._enabled)) && (((spec.brake_sensor_) == (spec.specEnum._off)) && ((spec.obs_set_speed_) == (spec.specEnum._speed_set)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(50, true);
        if (this.doInfoEvent) this.infoEvent(50, true);

        if ((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._one)) {
            spec.CC_not_activate_after_throttle_overtake_ = spec.specEnum._one;
        } else if ((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._two)) {
            spec.CC_not_activate_after_throttle_overtake_ = spec.specEnum._one;
        }
        spec.resume_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(50, false);
        if (this.doInfoPrintOutput) this.printOutput(50, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 54 and event "set_speed.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge54() {
        var guard = ((spec.set_speed_) == (spec.specEnum._on)) && (((spec.decrease_) == (spec.specEnum._on)) || (((spec.CC_lever_) == (spec.specEnum._nothing_on)) && (((spec.CC_active_) == (spec.specEnum._active)) || ((spec.obs_overtake_throttle_) == (spec.specEnum._on)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(51, true);
        if (this.doInfoEvent) this.infoEvent(51, true);

        spec.set_speed_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(51, false);
        if (this.doInfoPrintOutput) this.printOutput(51, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 55 and event "set_speed.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge55() {
        var guard = ((((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._one)) || ((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._two))) && ((spec.set_speed_) == (spec.specEnum._off))) && ((((spec.CC_lever_) == (spec.specEnum._down_on)) && (((spec.obs_min_v_activate_) == (spec.specEnum._above_30)) && ((spec.CC_enabled_) == (spec.specEnum._enabled)))) && (((spec.decrease_) == (spec.specEnum._off)) && (((spec.brake_sensor_) == (spec.specEnum._off)) && (((spec.ACC_active_) == (spec.specEnum._inactive)) || ((spec.obs_overtake_throttle_) == (spec.specEnum._on))))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(52, true);
        if (this.doInfoEvent) this.infoEvent(52, true);

        if ((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._one)) {
            spec.CC_not_activate_after_throttle_overtake_ = spec.specEnum._one;
        } else if ((spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._two)) {
            spec.CC_not_activate_after_throttle_overtake_ = spec.specEnum._one;
        }
        spec.set_speed_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(52, false);
        if (this.doInfoPrintOutput) this.printOutput(52, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 56 and event "time_gap.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge56() {
        var guard = ((spec.ACC_time_gap_button_) == (spec.specEnum._released)) && ((spec.time_gap_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(53, true);
        if (this.doInfoEvent) this.infoEvent(53, true);

        spec.time_gap_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(53, false);
        if (this.doInfoPrintOutput) this.printOutput(53, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 57 and event "time_gap.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge57() {
        var guard = ((spec.ACC_time_gap_button_) == (spec.specEnum._pushed)) && ((spec.time_gap_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(54, true);
        if (this.doInfoEvent) this.infoEvent(54, true);

        spec.time_gap_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(54, false);
        if (this.doInfoPrintOutput) this.printOutput(54, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 58 and event "timer_180_CC.c_cancel".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge58() {
        var guard = ((spec.obs_overtake_throttle_) == (spec.specEnum._off)) && ((spec.timer_180_CC_) == (spec.specEnum._started));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(55, true);
        if (this.doInfoEvent) this.infoEvent(55, true);

        spec.timer_180_CC_ = spec.specEnum._idle;

        if (this.doInfoEvent) this.infoEvent(55, false);
        if (this.doInfoPrintOutput) this.printOutput(55, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 59 and event "timer_180_CC.c_reset".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge59() {
        var guard = ((spec.CC_active_) == (spec.specEnum._inactive)) && ((spec.timer_180_CC_) == (spec.specEnum._timedout));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(56, true);
        if (this.doInfoEvent) this.infoEvent(56, true);

        spec.timer_180_CC_ = spec.specEnum._idle;

        if (this.doInfoEvent) this.infoEvent(56, false);
        if (this.doInfoPrintOutput) this.printOutput(56, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 60 and event "timer_180_CC.c_start".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge60() {
        var guard = ((spec.obs_overtake_throttle_) == (spec.specEnum._on)) && (((spec.CC_active_) == (spec.specEnum._active)) && ((spec.timer_180_CC_) == (spec.specEnum._idle)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(57, true);
        if (this.doInfoEvent) this.infoEvent(57, true);

        spec.timer_180_CC_ = spec.specEnum._started;

        if (this.doInfoEvent) this.infoEvent(57, false);
        if (this.doInfoPrintOutput) this.printOutput(57, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 61 and event "timerdecrease.c_cancel".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge61() {
        var guard = ((spec.CC_lever_) == (spec.specEnum._nothing_on)) && ((spec.timerdecrease_) == (spec.specEnum._started));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(59, true);
        if (this.doInfoEvent) this.infoEvent(59, true);

        spec.timerdecrease_ = spec.specEnum._idle;

        if (this.doInfoEvent) this.infoEvent(59, false);
        if (this.doInfoPrintOutput) this.printOutput(59, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 62 and event "timerdecrease.c_reset".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge62() {
        var guard = ((spec.CC_lever_) == (spec.specEnum._nothing_on)) && ((spec.timerdecrease_) == (spec.specEnum._timedout));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(60, true);
        if (this.doInfoEvent) this.infoEvent(60, true);

        spec.timerdecrease_ = spec.specEnum._idle;

        if (this.doInfoEvent) this.infoEvent(60, false);
        if (this.doInfoPrintOutput) this.printOutput(60, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 63 and event "timerdecrease.c_start".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge63() {
        var guard = ((spec.CC_lever_) == (spec.specEnum._down_on)) && ((spec.timerdecrease_) == (spec.specEnum._idle));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(61, true);
        if (this.doInfoEvent) this.infoEvent(61, true);

        spec.timerdecrease_ = spec.specEnum._started;

        if (this.doInfoEvent) this.infoEvent(61, false);
        if (this.doInfoPrintOutput) this.printOutput(61, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 64 and event "timerincrease.c_cancel".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge64() {
        var guard = ((spec.CC_lever_) == (spec.specEnum._nothing_on)) && ((spec.timerincrease_) == (spec.specEnum._started));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(63, true);
        if (this.doInfoEvent) this.infoEvent(63, true);

        spec.timerincrease_ = spec.specEnum._idle;

        if (this.doInfoEvent) this.infoEvent(63, false);
        if (this.doInfoPrintOutput) this.printOutput(63, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 65 and event "timerincrease.c_reset".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge65() {
        var guard = ((spec.CC_lever_) == (spec.specEnum._nothing_on)) && ((spec.timerincrease_) == (spec.specEnum._timedout));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(64, true);
        if (this.doInfoEvent) this.infoEvent(64, true);

        spec.timerincrease_ = spec.specEnum._idle;

        if (this.doInfoEvent) this.infoEvent(64, false);
        if (this.doInfoPrintOutput) this.printOutput(64, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 66 and event "timerincrease.c_start".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge66() {
        var guard = ((spec.CC_lever_) == (spec.specEnum._up_on)) && ((spec.timerincrease_) == (spec.specEnum._idle));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(65, true);
        if (this.doInfoEvent) this.infoEvent(65, true);

        spec.timerincrease_ = spec.specEnum._started;

        if (this.doInfoEvent) this.infoEvent(65, false);
        if (this.doInfoPrintOutput) this.printOutput(65, false);
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
        spec.ACC_active_ = spec.specEnum._inactive;
        spec.ACC_time_gap_button_ = spec.specEnum._released;
        spec.brake_sensor_ = spec.specEnum._off;
        spec.cancel_ = spec.specEnum._off;
        spec.CC_active_ = spec.specEnum._inactive;
        spec.CC_enable_button_ = spec.specEnum._released;
        spec.CC_enabled_ = spec.specEnum._disabled;
        spec.CC_lever_ = spec.specEnum._nothing_on;
        spec.CC_not_activate_after_throttle_overtake_ = spec.specEnum._one;
        spec.CC_not_activate_directly_after_deactivate_ = spec.specEnum._one;
        spec.decrease_ = spec.specEnum._off;
        spec.enabling_ = spec.specEnum._one;
        spec.erase_set_speed_ = spec.specEnum._off;
        spec.increase_ = spec.specEnum._off;
        spec.mode_ = spec.specEnum._off;
        spec.mode_observer_ = spec.specEnum._CC;
        spec.obs_higher_speed_ = spec.specEnum._not_higher;
        spec.obs_max_speed_ = spec.specEnum._below;
        spec.obs_min_set_speed_ = spec.specEnum._below_30;
        spec.obs_min_v_activate_ = spec.specEnum._below_30;
        spec.obs_min_v_deactivate_ = spec.specEnum._below_25;
        spec.obs_overtake_throttle_ = spec.specEnum._off;
        spec.obs_set_speed_ = spec.specEnum._no_set_speed;
        spec.radar_ = spec.specEnum._off;
        spec.radar_reliable_ = spec.specEnum._off;
        spec.resume_ = spec.specEnum._off;
        spec.set_speed_ = spec.specEnum._off;
        spec.time_gap_ = spec.specEnum._off;
        spec.timer_180_CC_ = spec.specEnum._idle;
        spec.timerdecrease_ = spec.specEnum._idle;
        spec.timerincrease_ = spec.specEnum._idle;
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
        state += specUtils.fmt(', ACC_active=%s', specUtils.valueToStr(spec.ACC_active_));
        state += specUtils.fmt(', ACC_time_gap_button=%s', specUtils.valueToStr(spec.ACC_time_gap_button_));
        state += specUtils.fmt(', brake_sensor=%s', specUtils.valueToStr(spec.brake_sensor_));
        state += specUtils.fmt(', cancel=%s', specUtils.valueToStr(spec.cancel_));
        state += specUtils.fmt(', CC_active=%s', specUtils.valueToStr(spec.CC_active_));
        state += specUtils.fmt(', CC_enable_button=%s', specUtils.valueToStr(spec.CC_enable_button_));
        state += specUtils.fmt(', CC_enabled=%s', specUtils.valueToStr(spec.CC_enabled_));
        state += specUtils.fmt(', CC_lever=%s', specUtils.valueToStr(spec.CC_lever_));
        state += specUtils.fmt(', CC_not_activate_after_throttle_overtake=%s', specUtils.valueToStr(spec.CC_not_activate_after_throttle_overtake_));
        state += specUtils.fmt(', CC_not_activate_directly_after_deactivate=%s', specUtils.valueToStr(spec.CC_not_activate_directly_after_deactivate_));
        state += specUtils.fmt(', decrease=%s', specUtils.valueToStr(spec.decrease_));
        state += specUtils.fmt(', enabling=%s', specUtils.valueToStr(spec.enabling_));
        state += specUtils.fmt(', erase_set_speed=%s', specUtils.valueToStr(spec.erase_set_speed_));
        state += specUtils.fmt(', increase=%s', specUtils.valueToStr(spec.increase_));
        state += specUtils.fmt(', mode=%s', specUtils.valueToStr(spec.mode_));
        state += specUtils.fmt(', mode_observer=%s', specUtils.valueToStr(spec.mode_observer_));
        state += specUtils.fmt(', obs_higher_speed=%s', specUtils.valueToStr(spec.obs_higher_speed_));
        state += specUtils.fmt(', obs_max_speed=%s', specUtils.valueToStr(spec.obs_max_speed_));
        state += specUtils.fmt(', obs_min_set_speed=%s', specUtils.valueToStr(spec.obs_min_set_speed_));
        state += specUtils.fmt(', obs_min_v_activate=%s', specUtils.valueToStr(spec.obs_min_v_activate_));
        state += specUtils.fmt(', obs_min_v_deactivate=%s', specUtils.valueToStr(spec.obs_min_v_deactivate_));
        state += specUtils.fmt(', obs_overtake_throttle=%s', specUtils.valueToStr(spec.obs_overtake_throttle_));
        state += specUtils.fmt(', obs_set_speed=%s', specUtils.valueToStr(spec.obs_set_speed_));
        state += specUtils.fmt(', radar=%s', specUtils.valueToStr(spec.radar_));
        state += specUtils.fmt(', radar_reliable=%s', specUtils.valueToStr(spec.radar_reliable_));
        state += specUtils.fmt(', resume=%s', specUtils.valueToStr(spec.resume_));
        state += specUtils.fmt(', set_speed=%s', specUtils.valueToStr(spec.set_speed_));
        state += specUtils.fmt(', time_gap=%s', specUtils.valueToStr(spec.time_gap_));
        state += specUtils.fmt(', timer_180_CC=%s', specUtils.valueToStr(spec.timer_180_CC_));
        state += specUtils.fmt(', timerdecrease=%s', specUtils.valueToStr(spec.timerdecrease_));
        state += specUtils.fmt(', timerincrease=%s', specUtils.valueToStr(spec.timerincrease_));
        return state;
    }


    /**
     * Evaluates algebraic variable "bdd_value0".
     *
     * @return The evaluation result.
     */
    bdd_value0_() {
        return (spec.ACC_active_) == (spec.specEnum._active);
    }

    /**
     * Evaluates algebraic variable "bdd_value1".
     *
     * @return The evaluation result.
     */
    bdd_value1_() {
        return (spec.ACC_time_gap_button_) == (spec.specEnum._pushed);
    }

    /**
     * Evaluates algebraic variable "bdd_value2".
     *
     * @return The evaluation result.
     */
    bdd_value2_() {
        return (spec.brake_sensor_) == (spec.specEnum._on);
    }

    /**
     * Evaluates algebraic variable "bdd_value3".
     *
     * @return The evaluation result.
     */
    bdd_value3_() {
        return (spec.cancel_) == (spec.specEnum._on);
    }

    /**
     * Evaluates algebraic variable "bdd_value4".
     *
     * @return The evaluation result.
     */
    bdd_value4_() {
        return (spec.CC_active_) == (spec.specEnum._active);
    }

    /**
     * Evaluates algebraic variable "bdd_value5".
     *
     * @return The evaluation result.
     */
    bdd_value5_() {
        return (spec.CC_enable_button_) == (spec.specEnum._pushed);
    }

    /**
     * Evaluates algebraic variable "bdd_value6".
     *
     * @return The evaluation result.
     */
    bdd_value6_() {
        return (spec.CC_enabled_) == (spec.specEnum._enabled);
    }

    /**
     * Evaluates algebraic variable "bdd_value7".
     *
     * @return The evaluation result.
     */
    bdd_value7_() {
        return ((spec.CC_lever_) == (spec.specEnum._down_on)) || ((spec.CC_lever_) == (spec.specEnum._backward_on));
    }

    /**
     * Evaluates algebraic variable "bdd_value8".
     *
     * @return The evaluation result.
     */
    bdd_value8_() {
        return ((spec.CC_lever_) == (spec.specEnum._forward_on)) || ((spec.CC_lever_) == (spec.specEnum._backward_on));
    }

    /**
     * Evaluates algebraic variable "bdd_value9".
     *
     * @return The evaluation result.
     */
    bdd_value9_() {
        return (spec.CC_lever_) == (spec.specEnum._up_on);
    }

    /**
     * Evaluates algebraic variable "bdd_value10".
     *
     * @return The evaluation result.
     */
    bdd_value10_() {
        return (spec.CC_not_activate_after_throttle_overtake_) == (spec.specEnum._two);
    }

    /**
     * Evaluates algebraic variable "bdd_value11".
     *
     * @return The evaluation result.
     */
    bdd_value11_() {
        return (spec.CC_not_activate_directly_after_deactivate_) == (spec.specEnum._two);
    }

    /**
     * Evaluates algebraic variable "bdd_value12".
     *
     * @return The evaluation result.
     */
    bdd_value12_() {
        return (spec.decrease_) == (spec.specEnum._on);
    }

    /**
     * Evaluates algebraic variable "bdd_value13".
     *
     * @return The evaluation result.
     */
    bdd_value13_() {
        return (spec.enabling_) == (spec.specEnum._two);
    }

    /**
     * Evaluates algebraic variable "bdd_value14".
     *
     * @return The evaluation result.
     */
    bdd_value14_() {
        return (spec.erase_set_speed_) == (spec.specEnum._on);
    }

    /**
     * Evaluates algebraic variable "bdd_value15".
     *
     * @return The evaluation result.
     */
    bdd_value15_() {
        return (spec.increase_) == (spec.specEnum._on);
    }

    /**
     * Evaluates algebraic variable "bdd_value16".
     *
     * @return The evaluation result.
     */
    bdd_value16_() {
        return (spec.mode_) == (spec.specEnum._on);
    }

    /**
     * Evaluates algebraic variable "bdd_value17".
     *
     * @return The evaluation result.
     */
    bdd_value17_() {
        return (spec.mode_observer_) == (spec.specEnum._ACC);
    }

    /**
     * Evaluates algebraic variable "bdd_value18".
     *
     * @return The evaluation result.
     */
    bdd_value18_() {
        return (spec.mode_observer_) == (spec.specEnum._CACC);
    }

    /**
     * Evaluates algebraic variable "bdd_value19".
     *
     * @return The evaluation result.
     */
    bdd_value19_() {
        return (spec.obs_higher_speed_) == (spec.specEnum._higher);
    }

    /**
     * Evaluates algebraic variable "bdd_value20".
     *
     * @return The evaluation result.
     */
    bdd_value20_() {
        return (spec.obs_max_speed_) == (spec.specEnum._above);
    }

    /**
     * Evaluates algebraic variable "bdd_value21".
     *
     * @return The evaluation result.
     */
    bdd_value21_() {
        return (spec.obs_min_set_speed_) == (spec.specEnum._above_30);
    }

    /**
     * Evaluates algebraic variable "bdd_value22".
     *
     * @return The evaluation result.
     */
    bdd_value22_() {
        return (spec.obs_min_v_activate_) == (spec.specEnum._above_30);
    }

    /**
     * Evaluates algebraic variable "bdd_value23".
     *
     * @return The evaluation result.
     */
    bdd_value23_() {
        return (spec.obs_min_v_deactivate_) == (spec.specEnum._above_25);
    }

    /**
     * Evaluates algebraic variable "bdd_value24".
     *
     * @return The evaluation result.
     */
    bdd_value24_() {
        return (spec.obs_overtake_throttle_) == (spec.specEnum._on);
    }

    /**
     * Evaluates algebraic variable "bdd_value25".
     *
     * @return The evaluation result.
     */
    bdd_value25_() {
        return (spec.obs_set_speed_) == (spec.specEnum._speed_set);
    }

    /**
     * Evaluates algebraic variable "bdd_value26".
     *
     * @return The evaluation result.
     */
    bdd_value26_() {
        return (spec.radar_) == (spec.specEnum._on);
    }

    /**
     * Evaluates algebraic variable "bdd_value27".
     *
     * @return The evaluation result.
     */
    bdd_value27_() {
        return (spec.radar_reliable_) == (spec.specEnum._on);
    }

    /**
     * Evaluates algebraic variable "bdd_value28".
     *
     * @return The evaluation result.
     */
    bdd_value28_() {
        return (spec.resume_) == (spec.specEnum._on);
    }

    /**
     * Evaluates algebraic variable "bdd_value29".
     *
     * @return The evaluation result.
     */
    bdd_value29_() {
        return (spec.set_speed_) == (spec.specEnum._on);
    }

    /**
     * Evaluates algebraic variable "bdd_value30".
     *
     * @return The evaluation result.
     */
    bdd_value30_() {
        return (spec.time_gap_) == (spec.specEnum._on);
    }

    /**
     * Evaluates algebraic variable "bdd_value31".
     *
     * @return The evaluation result.
     */
    bdd_value31_() {
        return (spec.timer_180_CC_) == (spec.specEnum._started);
    }

    /**
     * Evaluates algebraic variable "bdd_value32".
     *
     * @return The evaluation result.
     */
    bdd_value32_() {
        return (spec.timer_180_CC_) == (spec.specEnum._timedout);
    }

    /**
     * Evaluates algebraic variable "bdd_value33".
     *
     * @return The evaluation result.
     */
    bdd_value33_() {
        return (spec.timerdecrease_) == (spec.specEnum._started);
    }

    /**
     * Evaluates algebraic variable "bdd_value34".
     *
     * @return The evaluation result.
     */
    bdd_value34_() {
        return (spec.timerdecrease_) == (spec.specEnum._timedout);
    }

    /**
     * Evaluates algebraic variable "bdd_value35".
     *
     * @return The evaluation result.
     */
    bdd_value35_() {
        return (spec.timerincrease_) == (spec.specEnum._started);
    }

    /**
     * Evaluates algebraic variable "bdd_value36".
     *
     * @return The evaluation result.
     */
    bdd_value36_() {
        return (spec.timerincrease_) == (spec.specEnum._timedout);
    }

    /**
     * Evaluates algebraic variable "bdd_values".
     *
     * @return The evaluation result.
     */
    bdd_values_() {
        return [spec.bdd_value0_(), spec.bdd_value1_(), spec.bdd_value2_(), spec.bdd_value3_(), spec.bdd_value4_(), spec.bdd_value5_(), spec.bdd_value6_(), spec.bdd_value7_(), spec.bdd_value8_(), spec.bdd_value9_(), spec.bdd_value10_(), spec.bdd_value11_(), spec.bdd_value12_(), spec.bdd_value13_(), spec.bdd_value14_(), spec.bdd_value15_(), spec.bdd_value16_(), spec.bdd_value17_(), spec.bdd_value18_(), spec.bdd_value19_(), spec.bdd_value20_(), spec.bdd_value21_(), spec.bdd_value22_(), spec.bdd_value23_(), spec.bdd_value24_(), spec.bdd_value25_(), spec.bdd_value26_(), spec.bdd_value27_(), spec.bdd_value28_(), spec.bdd_value29_(), spec.bdd_value30_(), spec.bdd_value31_(), spec.bdd_value32_(), spec.bdd_value33_(), spec.bdd_value34_(), spec.bdd_value35_(), spec.bdd_value36_()];
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
