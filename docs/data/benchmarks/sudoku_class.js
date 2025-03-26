/** Tuples. */


/** spec code generated from a CIF specification. */
class spec_class {
    /** specEnum declaration. It contains the single merged enum from the CIF model. */
    specEnum = Object.freeze({
        /** Literal "__some_dummy_enum_literal". */
        ___some_dummy_enum_literal: Symbol("__some_dummy_enum_literal")
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
        "h11.c_1",
        "h11.c_2",
        "h11.c_3",
        "h11.c_4",
        "h12.c_1",
        "h12.c_2",
        "h12.c_3",
        "h12.c_4",
        "h13.c_1",
        "h13.c_2",
        "h13.c_3",
        "h13.c_4",
        "h14.c_1",
        "h14.c_2",
        "h14.c_3",
        "h14.c_4",
        "h21.c_1",
        "h21.c_2",
        "h21.c_3",
        "h21.c_4",
        "h22.c_1",
        "h22.c_2",
        "h22.c_3",
        "h22.c_4",
        "h23.c_1",
        "h23.c_2",
        "h23.c_3",
        "h23.c_4",
        "h24.c_1",
        "h24.c_2",
        "h24.c_3",
        "h24.c_4",
        "h31.c_1",
        "h31.c_2",
        "h31.c_3",
        "h31.c_4",
        "h32.c_1",
        "h32.c_2",
        "h32.c_3",
        "h32.c_4",
        "h33.c_1",
        "h33.c_2",
        "h33.c_3",
        "h33.c_4",
        "h34.c_1",
        "h34.c_2",
        "h34.c_3",
        "h34.c_4",
        "h41.c_1",
        "h41.c_2",
        "h41.c_3",
        "h41.c_4",
        "h42.c_1",
        "h42.c_2",
        "h42.c_3",
        "h42.c_4",
        "h43.c_1",
        "h43.c_2",
        "h43.c_3",
        "h43.c_4",
        "h44.c_1",
        "h44.c_2",
        "h44.c_3",
        "h44.c_4"
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


    /** Discrete variable "h11.Value". */
    h11_Value_;

    /** Discrete variable "h12.Value". */
    h12_Value_;

    /** Discrete variable "h13.Value". */
    h13_Value_;

    /** Discrete variable "h14.Value". */
    h14_Value_;

    /** Discrete variable "h21.Value". */
    h21_Value_;

    /** Discrete variable "h22.Value". */
    h22_Value_;

    /** Discrete variable "h23.Value". */
    h23_Value_;

    /** Discrete variable "h24.Value". */
    h24_Value_;

    /** Discrete variable "h31.Value". */
    h31_Value_;

    /** Discrete variable "h32.Value". */
    h32_Value_;

    /** Discrete variable "h33.Value". */
    h33_Value_;

    /** Discrete variable "h34.Value". */
    h34_Value_;

    /** Discrete variable "h41.Value". */
    h41_Value_;

    /** Discrete variable "h42.Value". */
    h42_Value_;

    /** Discrete variable "h43.Value". */
    h43_Value_;

    /** Discrete variable "h44.Value". */
    h44_Value_;


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


            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Execute controllable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;

            // Event "h11.c_1".
            edgeExecuted |= this.execEdge0();

            // Event "h11.c_2".
            edgeExecuted |= this.execEdge1();

            // Event "h11.c_3".
            edgeExecuted |= this.execEdge2();

            // Event "h11.c_4".
            edgeExecuted |= this.execEdge3();

            // Event "h12.c_1".
            edgeExecuted |= this.execEdge4();

            // Event "h12.c_2".
            edgeExecuted |= this.execEdge5();

            // Event "h12.c_3".
            edgeExecuted |= this.execEdge6();

            // Event "h12.c_4".
            edgeExecuted |= this.execEdge7();

            // Event "h13.c_1".
            edgeExecuted |= this.execEdge8();

            // Event "h13.c_2".
            edgeExecuted |= this.execEdge9();

            // Event "h13.c_3".
            edgeExecuted |= this.execEdge10();

            // Event "h13.c_4".
            edgeExecuted |= this.execEdge11();

            // Event "h14.c_1".
            edgeExecuted |= this.execEdge12();

            // Event "h14.c_2".
            edgeExecuted |= this.execEdge13();

            // Event "h14.c_3".
            edgeExecuted |= this.execEdge14();

            // Event "h14.c_4".
            edgeExecuted |= this.execEdge15();

            // Event "h21.c_1".
            edgeExecuted |= this.execEdge16();

            // Event "h21.c_2".
            edgeExecuted |= this.execEdge17();

            // Event "h21.c_3".
            edgeExecuted |= this.execEdge18();

            // Event "h21.c_4".
            edgeExecuted |= this.execEdge19();

            // Event "h22.c_1".
            edgeExecuted |= this.execEdge20();

            // Event "h22.c_2".
            edgeExecuted |= this.execEdge21();

            // Event "h22.c_3".
            edgeExecuted |= this.execEdge22();

            // Event "h22.c_4".
            edgeExecuted |= this.execEdge23();

            // Event "h23.c_1".
            edgeExecuted |= this.execEdge24();

            // Event "h23.c_2".
            edgeExecuted |= this.execEdge25();

            // Event "h23.c_3".
            edgeExecuted |= this.execEdge26();

            // Event "h23.c_4".
            edgeExecuted |= this.execEdge27();

            // Event "h24.c_1".
            edgeExecuted |= this.execEdge28();

            // Event "h24.c_2".
            edgeExecuted |= this.execEdge29();

            // Event "h24.c_3".
            edgeExecuted |= this.execEdge30();

            // Event "h24.c_4".
            edgeExecuted |= this.execEdge31();

            // Event "h31.c_1".
            edgeExecuted |= this.execEdge32();

            // Event "h31.c_2".
            edgeExecuted |= this.execEdge33();

            // Event "h31.c_3".
            edgeExecuted |= this.execEdge34();

            // Event "h31.c_4".
            edgeExecuted |= this.execEdge35();

            // Event "h32.c_1".
            edgeExecuted |= this.execEdge36();

            // Event "h32.c_2".
            edgeExecuted |= this.execEdge37();

            // Event "h32.c_3".
            edgeExecuted |= this.execEdge38();

            // Event "h32.c_4".
            edgeExecuted |= this.execEdge39();

            // Event "h33.c_1".
            edgeExecuted |= this.execEdge40();

            // Event "h33.c_2".
            edgeExecuted |= this.execEdge41();

            // Event "h33.c_3".
            edgeExecuted |= this.execEdge42();

            // Event "h33.c_4".
            edgeExecuted |= this.execEdge43();

            // Event "h34.c_1".
            edgeExecuted |= this.execEdge44();

            // Event "h34.c_2".
            edgeExecuted |= this.execEdge45();

            // Event "h34.c_3".
            edgeExecuted |= this.execEdge46();

            // Event "h34.c_4".
            edgeExecuted |= this.execEdge47();

            // Event "h41.c_1".
            edgeExecuted |= this.execEdge48();

            // Event "h41.c_2".
            edgeExecuted |= this.execEdge49();

            // Event "h41.c_3".
            edgeExecuted |= this.execEdge50();

            // Event "h41.c_4".
            edgeExecuted |= this.execEdge51();

            // Event "h42.c_1".
            edgeExecuted |= this.execEdge52();

            // Event "h42.c_2".
            edgeExecuted |= this.execEdge53();

            // Event "h42.c_3".
            edgeExecuted |= this.execEdge54();

            // Event "h42.c_4".
            edgeExecuted |= this.execEdge55();

            // Event "h43.c_1".
            edgeExecuted |= this.execEdge56();

            // Event "h43.c_2".
            edgeExecuted |= this.execEdge57();

            // Event "h43.c_3".
            edgeExecuted |= this.execEdge58();

            // Event "h43.c_4".
            edgeExecuted |= this.execEdge59();

            // Event "h44.c_1".
            edgeExecuted |= this.execEdge60();

            // Event "h44.c_2".
            edgeExecuted |= this.execEdge61();

            // Event "h44.c_3".
            edgeExecuted |= this.execEdge62();

            // Event "h44.c_4".
            edgeExecuted |= this.execEdge63();

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
     * Execute code for edge with index 0 and event "h11.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = specUtils.equalObjs(spec.h11_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        spec.h11_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "h11.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = specUtils.equalObjs(spec.h11_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        spec.h11_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "h11.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = specUtils.equalObjs(spec.h11_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        spec.h11_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "h11.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = specUtils.equalObjs(spec.h11_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        spec.h11_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "h12.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = specUtils.equalObjs(spec.h12_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.h12_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "h12.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = specUtils.equalObjs(spec.h12_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.h12_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "h12.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = specUtils.equalObjs(spec.h12_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.h12_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "h12.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = specUtils.equalObjs(spec.h12_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.h12_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "h13.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = specUtils.equalObjs(spec.h13_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.h13_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "h13.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = specUtils.equalObjs(spec.h13_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        spec.h13_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "h13.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = specUtils.equalObjs(spec.h13_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        spec.h13_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "h13.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = specUtils.equalObjs(spec.h13_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        spec.h13_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 12 and event "h14.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge12() {
        var guard = specUtils.equalObjs(spec.h14_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(12, true);
        if (this.doInfoEvent) this.infoEvent(12, true);

        spec.h14_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(12, false);
        if (this.doInfoPrintOutput) this.printOutput(12, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 13 and event "h14.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge13() {
        var guard = specUtils.equalObjs(spec.h14_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(13, true);
        if (this.doInfoEvent) this.infoEvent(13, true);

        spec.h14_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(13, false);
        if (this.doInfoPrintOutput) this.printOutput(13, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 14 and event "h14.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge14() {
        var guard = specUtils.equalObjs(spec.h14_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(14, true);
        if (this.doInfoEvent) this.infoEvent(14, true);

        spec.h14_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(14, false);
        if (this.doInfoPrintOutput) this.printOutput(14, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 15 and event "h14.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge15() {
        var guard = specUtils.equalObjs(spec.h14_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(15, true);
        if (this.doInfoEvent) this.infoEvent(15, true);

        spec.h14_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(15, false);
        if (this.doInfoPrintOutput) this.printOutput(15, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 16 and event "h21.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge16() {
        var guard = specUtils.equalObjs(spec.h21_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(16, true);
        if (this.doInfoEvent) this.infoEvent(16, true);

        spec.h21_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(16, false);
        if (this.doInfoPrintOutput) this.printOutput(16, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 17 and event "h21.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge17() {
        var guard = specUtils.equalObjs(spec.h21_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(17, true);
        if (this.doInfoEvent) this.infoEvent(17, true);

        spec.h21_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(17, false);
        if (this.doInfoPrintOutput) this.printOutput(17, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 18 and event "h21.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge18() {
        var guard = specUtils.equalObjs(spec.h21_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(18, true);
        if (this.doInfoEvent) this.infoEvent(18, true);

        spec.h21_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(18, false);
        if (this.doInfoPrintOutput) this.printOutput(18, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 19 and event "h21.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge19() {
        var guard = specUtils.equalObjs(spec.h21_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(19, true);
        if (this.doInfoEvent) this.infoEvent(19, true);

        spec.h21_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(19, false);
        if (this.doInfoPrintOutput) this.printOutput(19, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 20 and event "h22.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge20() {
        var guard = specUtils.equalObjs(spec.h22_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(20, true);
        if (this.doInfoEvent) this.infoEvent(20, true);

        spec.h22_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(20, false);
        if (this.doInfoPrintOutput) this.printOutput(20, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 21 and event "h22.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge21() {
        var guard = specUtils.equalObjs(spec.h22_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(21, true);
        if (this.doInfoEvent) this.infoEvent(21, true);

        spec.h22_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(21, false);
        if (this.doInfoPrintOutput) this.printOutput(21, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 22 and event "h22.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge22() {
        var guard = specUtils.equalObjs(spec.h22_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(22, true);
        if (this.doInfoEvent) this.infoEvent(22, true);

        spec.h22_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(22, false);
        if (this.doInfoPrintOutput) this.printOutput(22, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 23 and event "h22.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge23() {
        var guard = specUtils.equalObjs(spec.h22_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(23, true);
        if (this.doInfoEvent) this.infoEvent(23, true);

        spec.h22_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(23, false);
        if (this.doInfoPrintOutput) this.printOutput(23, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 24 and event "h23.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge24() {
        var guard = specUtils.equalObjs(spec.h23_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(24, true);
        if (this.doInfoEvent) this.infoEvent(24, true);

        spec.h23_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(24, false);
        if (this.doInfoPrintOutput) this.printOutput(24, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 25 and event "h23.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge25() {
        var guard = specUtils.equalObjs(spec.h23_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(25, true);
        if (this.doInfoEvent) this.infoEvent(25, true);

        spec.h23_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(25, false);
        if (this.doInfoPrintOutput) this.printOutput(25, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 26 and event "h23.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge26() {
        var guard = specUtils.equalObjs(spec.h23_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(26, true);
        if (this.doInfoEvent) this.infoEvent(26, true);

        spec.h23_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(26, false);
        if (this.doInfoPrintOutput) this.printOutput(26, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 27 and event "h23.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge27() {
        var guard = specUtils.equalObjs(spec.h23_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(27, true);
        if (this.doInfoEvent) this.infoEvent(27, true);

        spec.h23_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(27, false);
        if (this.doInfoPrintOutput) this.printOutput(27, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 28 and event "h24.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge28() {
        var guard = specUtils.equalObjs(spec.h24_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(28, true);
        if (this.doInfoEvent) this.infoEvent(28, true);

        spec.h24_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(28, false);
        if (this.doInfoPrintOutput) this.printOutput(28, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 29 and event "h24.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge29() {
        var guard = specUtils.equalObjs(spec.h24_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(29, true);
        if (this.doInfoEvent) this.infoEvent(29, true);

        spec.h24_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(29, false);
        if (this.doInfoPrintOutput) this.printOutput(29, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 30 and event "h24.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge30() {
        var guard = specUtils.equalObjs(spec.h24_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(30, true);
        if (this.doInfoEvent) this.infoEvent(30, true);

        spec.h24_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(30, false);
        if (this.doInfoPrintOutput) this.printOutput(30, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 31 and event "h24.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge31() {
        var guard = specUtils.equalObjs(spec.h24_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(31, true);
        if (this.doInfoEvent) this.infoEvent(31, true);

        spec.h24_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(31, false);
        if (this.doInfoPrintOutput) this.printOutput(31, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 32 and event "h31.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge32() {
        var guard = specUtils.equalObjs(spec.h31_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(32, true);
        if (this.doInfoEvent) this.infoEvent(32, true);

        spec.h31_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(32, false);
        if (this.doInfoPrintOutput) this.printOutput(32, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 33 and event "h31.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge33() {
        var guard = specUtils.equalObjs(spec.h31_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(33, true);
        if (this.doInfoEvent) this.infoEvent(33, true);

        spec.h31_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(33, false);
        if (this.doInfoPrintOutput) this.printOutput(33, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 34 and event "h31.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge34() {
        var guard = specUtils.equalObjs(spec.h31_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(34, true);
        if (this.doInfoEvent) this.infoEvent(34, true);

        spec.h31_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(34, false);
        if (this.doInfoPrintOutput) this.printOutput(34, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 35 and event "h31.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge35() {
        var guard = specUtils.equalObjs(spec.h31_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(35, true);
        if (this.doInfoEvent) this.infoEvent(35, true);

        spec.h31_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(35, false);
        if (this.doInfoPrintOutput) this.printOutput(35, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 36 and event "h32.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge36() {
        var guard = specUtils.equalObjs(spec.h32_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(36, true);
        if (this.doInfoEvent) this.infoEvent(36, true);

        spec.h32_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(36, false);
        if (this.doInfoPrintOutput) this.printOutput(36, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 37 and event "h32.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge37() {
        var guard = specUtils.equalObjs(spec.h32_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(37, true);
        if (this.doInfoEvent) this.infoEvent(37, true);

        spec.h32_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(37, false);
        if (this.doInfoPrintOutput) this.printOutput(37, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 38 and event "h32.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge38() {
        var guard = specUtils.equalObjs(spec.h32_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(38, true);
        if (this.doInfoEvent) this.infoEvent(38, true);

        spec.h32_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(38, false);
        if (this.doInfoPrintOutput) this.printOutput(38, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 39 and event "h32.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge39() {
        var guard = specUtils.equalObjs(spec.h32_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(39, true);
        if (this.doInfoEvent) this.infoEvent(39, true);

        spec.h32_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(39, false);
        if (this.doInfoPrintOutput) this.printOutput(39, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 40 and event "h33.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge40() {
        var guard = specUtils.equalObjs(spec.h33_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(40, true);
        if (this.doInfoEvent) this.infoEvent(40, true);

        spec.h33_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(40, false);
        if (this.doInfoPrintOutput) this.printOutput(40, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 41 and event "h33.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge41() {
        var guard = specUtils.equalObjs(spec.h33_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(41, true);
        if (this.doInfoEvent) this.infoEvent(41, true);

        spec.h33_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(41, false);
        if (this.doInfoPrintOutput) this.printOutput(41, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 42 and event "h33.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge42() {
        var guard = specUtils.equalObjs(spec.h33_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(42, true);
        if (this.doInfoEvent) this.infoEvent(42, true);

        spec.h33_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(42, false);
        if (this.doInfoPrintOutput) this.printOutput(42, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 43 and event "h33.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge43() {
        var guard = specUtils.equalObjs(spec.h33_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(43, true);
        if (this.doInfoEvent) this.infoEvent(43, true);

        spec.h33_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(43, false);
        if (this.doInfoPrintOutput) this.printOutput(43, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 44 and event "h34.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge44() {
        var guard = specUtils.equalObjs(spec.h34_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(44, true);
        if (this.doInfoEvent) this.infoEvent(44, true);

        spec.h34_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(44, false);
        if (this.doInfoPrintOutput) this.printOutput(44, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 45 and event "h34.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge45() {
        var guard = specUtils.equalObjs(spec.h34_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(45, true);
        if (this.doInfoEvent) this.infoEvent(45, true);

        spec.h34_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(45, false);
        if (this.doInfoPrintOutput) this.printOutput(45, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 46 and event "h34.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge46() {
        var guard = specUtils.equalObjs(spec.h34_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(46, true);
        if (this.doInfoEvent) this.infoEvent(46, true);

        spec.h34_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(46, false);
        if (this.doInfoPrintOutput) this.printOutput(46, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 47 and event "h34.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge47() {
        var guard = specUtils.equalObjs(spec.h34_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(47, true);
        if (this.doInfoEvent) this.infoEvent(47, true);

        spec.h34_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(47, false);
        if (this.doInfoPrintOutput) this.printOutput(47, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 48 and event "h41.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge48() {
        var guard = specUtils.equalObjs(spec.h41_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(48, true);
        if (this.doInfoEvent) this.infoEvent(48, true);

        spec.h41_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(48, false);
        if (this.doInfoPrintOutput) this.printOutput(48, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 49 and event "h41.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge49() {
        var guard = specUtils.equalObjs(spec.h41_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(49, true);
        if (this.doInfoEvent) this.infoEvent(49, true);

        spec.h41_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(49, false);
        if (this.doInfoPrintOutput) this.printOutput(49, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 50 and event "h41.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge50() {
        var guard = specUtils.equalObjs(spec.h41_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(50, true);
        if (this.doInfoEvent) this.infoEvent(50, true);

        spec.h41_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(50, false);
        if (this.doInfoPrintOutput) this.printOutput(50, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 51 and event "h41.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge51() {
        var guard = specUtils.equalObjs(spec.h41_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(51, true);
        if (this.doInfoEvent) this.infoEvent(51, true);

        spec.h41_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(51, false);
        if (this.doInfoPrintOutput) this.printOutput(51, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 52 and event "h42.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge52() {
        var guard = specUtils.equalObjs(spec.h42_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(52, true);
        if (this.doInfoEvent) this.infoEvent(52, true);

        spec.h42_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(52, false);
        if (this.doInfoPrintOutput) this.printOutput(52, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 53 and event "h42.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge53() {
        var guard = specUtils.equalObjs(spec.h42_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(53, true);
        if (this.doInfoEvent) this.infoEvent(53, true);

        spec.h42_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(53, false);
        if (this.doInfoPrintOutput) this.printOutput(53, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 54 and event "h42.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge54() {
        var guard = specUtils.equalObjs(spec.h42_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(54, true);
        if (this.doInfoEvent) this.infoEvent(54, true);

        spec.h42_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(54, false);
        if (this.doInfoPrintOutput) this.printOutput(54, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 55 and event "h42.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge55() {
        var guard = specUtils.equalObjs(spec.h42_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(55, true);
        if (this.doInfoEvent) this.infoEvent(55, true);

        spec.h42_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(55, false);
        if (this.doInfoPrintOutput) this.printOutput(55, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 56 and event "h43.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge56() {
        var guard = specUtils.equalObjs(spec.h43_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(56, true);
        if (this.doInfoEvent) this.infoEvent(56, true);

        spec.h43_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(56, false);
        if (this.doInfoPrintOutput) this.printOutput(56, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 57 and event "h43.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge57() {
        var guard = specUtils.equalObjs(spec.h43_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(57, true);
        if (this.doInfoEvent) this.infoEvent(57, true);

        spec.h43_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(57, false);
        if (this.doInfoPrintOutput) this.printOutput(57, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 58 and event "h43.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge58() {
        var guard = specUtils.equalObjs(spec.h43_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(58, true);
        if (this.doInfoEvent) this.infoEvent(58, true);

        spec.h43_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(58, false);
        if (this.doInfoPrintOutput) this.printOutput(58, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 59 and event "h43.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge59() {
        var guard = specUtils.equalObjs(spec.h43_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(59, true);
        if (this.doInfoEvent) this.infoEvent(59, true);

        spec.h43_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(59, false);
        if (this.doInfoPrintOutput) this.printOutput(59, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 60 and event "h44.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge60() {
        var guard = specUtils.equalObjs(spec.h44_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(60, true);
        if (this.doInfoEvent) this.infoEvent(60, true);

        spec.h44_Value_ = 1;

        if (this.doInfoEvent) this.infoEvent(60, false);
        if (this.doInfoPrintOutput) this.printOutput(60, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 61 and event "h44.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge61() {
        var guard = specUtils.equalObjs(spec.h44_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(61, true);
        if (this.doInfoEvent) this.infoEvent(61, true);

        spec.h44_Value_ = 2;

        if (this.doInfoEvent) this.infoEvent(61, false);
        if (this.doInfoPrintOutput) this.printOutput(61, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 62 and event "h44.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge62() {
        var guard = specUtils.equalObjs(spec.h44_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(62, true);
        if (this.doInfoEvent) this.infoEvent(62, true);

        spec.h44_Value_ = 3;

        if (this.doInfoEvent) this.infoEvent(62, false);
        if (this.doInfoPrintOutput) this.printOutput(62, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 63 and event "h44.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge63() {
        var guard = specUtils.equalObjs(spec.h44_Value_, 0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(63, true);
        if (this.doInfoEvent) this.infoEvent(63, true);

        spec.h44_Value_ = 4;

        if (this.doInfoEvent) this.infoEvent(63, false);
        if (this.doInfoPrintOutput) this.printOutput(63, false);
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
        spec.h11_Value_ = 0;
        spec.h12_Value_ = 0;
        spec.h13_Value_ = 0;
        spec.h14_Value_ = 0;
        spec.h21_Value_ = 0;
        spec.h22_Value_ = 0;
        spec.h23_Value_ = 0;
        spec.h24_Value_ = 0;
        spec.h31_Value_ = 0;
        spec.h32_Value_ = 0;
        spec.h33_Value_ = 0;
        spec.h34_Value_ = 0;
        spec.h41_Value_ = 0;
        spec.h42_Value_ = 0;
        spec.h43_Value_ = 0;
        spec.h44_Value_ = 0;
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
        state += specUtils.fmt(', h11.Value=%s', specUtils.valueToStr(spec.h11_Value_));
        state += specUtils.fmt(', h12.Value=%s', specUtils.valueToStr(spec.h12_Value_));
        state += specUtils.fmt(', h13.Value=%s', specUtils.valueToStr(spec.h13_Value_));
        state += specUtils.fmt(', h14.Value=%s', specUtils.valueToStr(spec.h14_Value_));
        state += specUtils.fmt(', h21.Value=%s', specUtils.valueToStr(spec.h21_Value_));
        state += specUtils.fmt(', h22.Value=%s', specUtils.valueToStr(spec.h22_Value_));
        state += specUtils.fmt(', h23.Value=%s', specUtils.valueToStr(spec.h23_Value_));
        state += specUtils.fmt(', h24.Value=%s', specUtils.valueToStr(spec.h24_Value_));
        state += specUtils.fmt(', h31.Value=%s', specUtils.valueToStr(spec.h31_Value_));
        state += specUtils.fmt(', h32.Value=%s', specUtils.valueToStr(spec.h32_Value_));
        state += specUtils.fmt(', h33.Value=%s', specUtils.valueToStr(spec.h33_Value_));
        state += specUtils.fmt(', h34.Value=%s', specUtils.valueToStr(spec.h34_Value_));
        state += specUtils.fmt(', h41.Value=%s', specUtils.valueToStr(spec.h41_Value_));
        state += specUtils.fmt(', h42.Value=%s', specUtils.valueToStr(spec.h42_Value_));
        state += specUtils.fmt(', h43.Value=%s', specUtils.valueToStr(spec.h43_Value_));
        state += specUtils.fmt(', h44.Value=%s', specUtils.valueToStr(spec.h44_Value_));
        return state;
    }


    /**
     * Evaluates algebraic variable "c1.Digit".
     *
     * @return The evaluation result.
     */
    c1_Digit_() {
        return 1;
    }

    /**
     * Evaluates algebraic variable "c2.Digit".
     *
     * @return The evaluation result.
     */
    c2_Digit_() {
        return 2;
    }

    /**
     * Evaluates algebraic variable "c3.Digit".
     *
     * @return The evaluation result.
     */
    c3_Digit_() {
        return 3;
    }

    /**
     * Evaluates algebraic variable "c4.Digit".
     *
     * @return The evaluation result.
     */
    c4_Digit_() {
        return 4;
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
