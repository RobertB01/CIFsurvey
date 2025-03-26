/** Tuples. */


/** spec code generated from a CIF specification. */
class spec_class {
    /** specEnum declaration. It contains the single merged enum from the CIF model. */
    specEnum = Object.freeze({
        /** Literal "between". */
        _between: Symbol("between"),

        /** Literal "closed". */
        _closed: Symbol("closed"),

        /** Literal "closing". */
        _closing: Symbol("closing"),

        /** Literal "green". */
        _green: Symbol("green"),

        /** Literal "off". */
        _off: Symbol("off"),

        /** Literal "on". */
        _on: Symbol("on"),

        /** Literal "open". */
        _open: Symbol("open"),

        /** Literal "opening". */
        _opening: Symbol("opening"),

        /** Literal "pushed". */
        _pushed: Symbol("pushed"),

        /** Literal "red". */
        _red: Symbol("red"),

        /** Literal "redgreen". */
        _redgreen: Symbol("redgreen"),

        /** Literal "redred". */
        _redred: Symbol("redred"),

        /** Literal "released". */
        _released: Symbol("released"),

        /** Literal "rest". */
        _rest: Symbol("rest"),

        /** Literal "stopped". */
        _stopped: Symbol("stopped"),

        /** Literal "up". */
        _up: Symbol("up")
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
        "barriers.barrier1.c_close",
        "barriers.barrier1.c_open",
        "barriers.barrier1.c_stop",
        "barriers.barrier1.u_closed_off",
        "barriers.barrier1.u_closed_on",
        "barriers.barrier1.u_open_off",
        "barriers.barrier1.u_open_on",
        "barriers.barrier2.c_close",
        "barriers.barrier2.c_open",
        "barriers.barrier2.c_stop",
        "barriers.barrier2.u_closed_off",
        "barriers.barrier2.u_closed_on",
        "barriers.barrier2.u_open_off",
        "barriers.barrier2.u_open_on",
        "barriers.barrier3.c_close",
        "barriers.barrier3.c_open",
        "barriers.barrier3.c_stop",
        "barriers.barrier3.u_closed_off",
        "barriers.barrier3.u_closed_on",
        "barriers.barrier3.u_open_off",
        "barriers.barrier3.u_open_on",
        "barriers.barrier4.c_close",
        "barriers.barrier4.c_open",
        "barriers.barrier4.c_stop",
        "barriers.barrier4.u_closed_off",
        "barriers.barrier4.u_closed_on",
        "barriers.barrier4.u_open_off",
        "barriers.barrier4.u_open_on",
        "barriers.barrier5.c_close",
        "barriers.barrier5.c_open",
        "barriers.barrier5.c_stop",
        "barriers.barrier5.u_closed_off",
        "barriers.barrier5.u_closed_on",
        "barriers.barrier5.u_open_off",
        "barriers.barrier5.u_open_on",
        "barriers.barrier6.c_close",
        "barriers.barrier6.c_open",
        "barriers.barrier6.c_stop",
        "barriers.barrier6.u_closed_off",
        "barriers.barrier6.u_closed_on",
        "barriers.barrier6.u_open_off",
        "barriers.barrier6.u_open_on",
        "barriers.button_close_entering.u_pushed",
        "barriers.button_close_entering.u_released",
        "barriers.button_close_leaving.u_pushed",
        "barriers.button_close_leaving.u_released",
        "barriers.button_close_slow.u_pushed",
        "barriers.button_close_slow.u_released",
        "barriers.button_open_entering.u_pushed",
        "barriers.button_open_entering.u_released",
        "barriers.button_open_leaving.u_pushed",
        "barriers.button_open_leaving.u_released",
        "barriers.button_open_slow.u_pushed",
        "barriers.button_open_slow.u_released",
        "barriers.button_stop_entering.u_pushed",
        "barriers.button_stop_entering.u_released",
        "barriers.button_stop_leaving.u_pushed",
        "barriers.button_stop_leaving.u_released",
        "barriers.button_stop_slow.u_pushed",
        "barriers.button_stop_slow.u_released",
        "bridgedeck.button_close.u_pushed",
        "bridgedeck.button_close.u_released",
        "bridgedeck.button_open.u_pushed",
        "bridgedeck.button_open.u_released",
        "bridgedeck.button_stop.u_pushed",
        "bridgedeck.button_stop.u_released",
        "bridgedeck.c_close",
        "bridgedeck.c_open",
        "bridgedeck.c_stop",
        "bridgedeck.u_closed_off",
        "bridgedeck.u_closed_on",
        "bridgedeck.u_open_off",
        "bridgedeck.u_open_on",
        "FTC.D.f1",
        "FTC.D.f10",
        "FTC.D.f11",
        "FTC.D.f12",
        "FTC.D.f13",
        "FTC.D.f14",
        "FTC.D.f15",
        "FTC.D.f16",
        "FTC.D.f17",
        "FTC.D.f18",
        "FTC.D.f19",
        "FTC.D.f2",
        "FTC.D.f20",
        "FTC.D.f25",
        "FTC.D.f3",
        "FTC.D.f4",
        "FTC.D.f5",
        "FTC.D.f6",
        "FTC.D.f7",
        "FTC.D.f8",
        "FTC.D.f9",
        "FTC.D.r15",
        "FTC.D.r16",
        "FTC.D.r17",
        "FTC.D.r18",
        "FTC.D.r19",
        "FTC.D.r20",
        "LTS.button_on.u_pushed",
        "LTS.button_on.u_released",
        "LTS.presigns.ps1.c_off",
        "LTS.presigns.ps1.c_on",
        "LTS.presigns.ps1.u_off",
        "LTS.presigns.ps1.u_on",
        "LTS.presigns.ps2.c_off",
        "LTS.presigns.ps2.c_on",
        "LTS.presigns.ps2.u_off",
        "LTS.presigns.ps2.u_on",
        "LTS.presigns.ps3.c_off",
        "LTS.presigns.ps3.c_on",
        "LTS.presigns.ps3.u_off",
        "LTS.presigns.ps3.u_on",
        "LTS.presigns.ps4.c_off",
        "LTS.presigns.ps4.c_on",
        "LTS.presigns.ps4.u_off",
        "LTS.presigns.ps4.u_on",
        "LTS.presigns.ps5.c_off",
        "LTS.presigns.ps5.c_on",
        "LTS.presigns.ps5.u_off",
        "LTS.presigns.ps5.u_on",
        "LTS.presigns.ps6.c_off",
        "LTS.presigns.ps6.c_on",
        "LTS.presigns.ps6.u_off",
        "LTS.presigns.ps6.u_on",
        "LTS.stopsigns.stop1.c_off",
        "LTS.stopsigns.stop1.c_on",
        "LTS.stopsigns.stop1.u_off",
        "LTS.stopsigns.stop1.u_on",
        "LTS.stopsigns.stop2.c_off",
        "LTS.stopsigns.stop2.c_on",
        "LTS.stopsigns.stop2.u_off",
        "LTS.stopsigns.stop2.u_on",
        "LTS.stopsigns.stop3.c_off",
        "LTS.stopsigns.stop3.c_on",
        "LTS.stopsigns.stop3.u_off",
        "LTS.stopsigns.stop3.u_on",
        "LTS.stopsigns.stop4.c_off",
        "LTS.stopsigns.stop4.c_on",
        "LTS.stopsigns.stop4.u_off",
        "LTS.stopsigns.stop4.u_on",
        "LTS.stopsigns.stop5.c_off",
        "LTS.stopsigns.stop5.c_on",
        "LTS.stopsigns.stop5.u_off",
        "LTS.stopsigns.stop5.u_on",
        "LTS.stopsigns.stop6.c_off",
        "LTS.stopsigns.stop6.c_on",
        "LTS.stopsigns.stop6.u_off",
        "LTS.stopsigns.stop6.u_on",
        "LTS.stopsigns.stop7.c_off",
        "LTS.stopsigns.stop7.c_on",
        "LTS.stopsigns.stop7.u_off",
        "LTS.stopsigns.stop7.u_on",
        "LTS.stopsigns.stop8.c_off",
        "LTS.stopsigns.stop8.c_on",
        "LTS.stopsigns.stop8.u_off",
        "LTS.stopsigns.stop8.u_on",
        "shipping_signs.downstream.button_green.u_pushed",
        "shipping_signs.downstream.button_green.u_released",
        "shipping_signs.downstream.button_red.u_pushed",
        "shipping_signs.downstream.button_red.u_released",
        "shipping_signs.downstream.button_redgreen.u_pushed",
        "shipping_signs.downstream.button_redgreen.u_released",
        "shipping_signs.downstream.button_redred.u_pushed",
        "shipping_signs.downstream.button_redred.u_released",
        "shipping_signs.downstream.N.c_green",
        "shipping_signs.downstream.N.c_red",
        "shipping_signs.downstream.N.c_redgreen",
        "shipping_signs.downstream.N.c_redred",
        "shipping_signs.downstream.N.u_green_off",
        "shipping_signs.downstream.N.u_green_on",
        "shipping_signs.downstream.N.u_red2_off",
        "shipping_signs.downstream.N.u_red2_on",
        "shipping_signs.downstream.N.u_red_off",
        "shipping_signs.downstream.N.u_red_on",
        "shipping_signs.downstream.S.c_green",
        "shipping_signs.downstream.S.c_red",
        "shipping_signs.downstream.S.c_redgreen",
        "shipping_signs.downstream.S.c_redred",
        "shipping_signs.downstream.S.u_green_off",
        "shipping_signs.downstream.S.u_green_on",
        "shipping_signs.downstream.S.u_red2_off",
        "shipping_signs.downstream.S.u_red2_on",
        "shipping_signs.downstream.S.u_red_off",
        "shipping_signs.downstream.S.u_red_on",
        "shipping_signs.upstream.button_green.u_pushed",
        "shipping_signs.upstream.button_green.u_released",
        "shipping_signs.upstream.button_red.u_pushed",
        "shipping_signs.upstream.button_red.u_released",
        "shipping_signs.upstream.button_redgreen.u_pushed",
        "shipping_signs.upstream.button_redgreen.u_released",
        "shipping_signs.upstream.button_redred.u_pushed",
        "shipping_signs.upstream.button_redred.u_released",
        "shipping_signs.upstream.N.c_green",
        "shipping_signs.upstream.N.c_red",
        "shipping_signs.upstream.N.c_redgreen",
        "shipping_signs.upstream.N.c_redred",
        "shipping_signs.upstream.N.u_green_off",
        "shipping_signs.upstream.N.u_green_on",
        "shipping_signs.upstream.N.u_red2_off",
        "shipping_signs.upstream.N.u_red2_on",
        "shipping_signs.upstream.N.u_red_off",
        "shipping_signs.upstream.N.u_red_on",
        "shipping_signs.upstream.S.c_green",
        "shipping_signs.upstream.S.c_red",
        "shipping_signs.upstream.S.c_redgreen",
        "shipping_signs.upstream.S.c_redred",
        "shipping_signs.upstream.S.u_green_off",
        "shipping_signs.upstream.S.u_green_on",
        "shipping_signs.upstream.S.u_red2_off",
        "shipping_signs.upstream.S.u_red2_on",
        "shipping_signs.upstream.S.u_red_off",
        "shipping_signs.upstream.S.u_red_on"
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


    /** Discrete variable "barriers.barrier1.A". */
    barriers_barrier1_A_;

    /** Discrete variable "barriers.barrier1.S". */
    barriers_barrier1_S_;

    /** Discrete variable "barriers.barrier2.A". */
    barriers_barrier2_A_;

    /** Discrete variable "barriers.barrier2.S". */
    barriers_barrier2_S_;

    /** Discrete variable "barriers.barrier3.A". */
    barriers_barrier3_A_;

    /** Discrete variable "barriers.barrier3.S". */
    barriers_barrier3_S_;

    /** Discrete variable "barriers.barrier4.A". */
    barriers_barrier4_A_;

    /** Discrete variable "barriers.barrier4.S". */
    barriers_barrier4_S_;

    /** Discrete variable "barriers.barrier5.A". */
    barriers_barrier5_A_;

    /** Discrete variable "barriers.barrier5.S". */
    barriers_barrier5_S_;

    /** Discrete variable "barriers.barrier6.A". */
    barriers_barrier6_A_;

    /** Discrete variable "barriers.barrier6.S". */
    barriers_barrier6_S_;

    /** Discrete variable "barriers.button_close_entering". */
    barriers_button_close_entering_;

    /** Discrete variable "barriers.button_close_leaving". */
    barriers_button_close_leaving_;

    /** Discrete variable "barriers.button_close_slow". */
    barriers_button_close_slow_;

    /** Discrete variable "barriers.button_open_entering". */
    barriers_button_open_entering_;

    /** Discrete variable "barriers.button_open_leaving". */
    barriers_button_open_leaving_;

    /** Discrete variable "barriers.button_open_slow". */
    barriers_button_open_slow_;

    /** Discrete variable "barriers.button_stop_entering". */
    barriers_button_stop_entering_;

    /** Discrete variable "barriers.button_stop_leaving". */
    barriers_button_stop_leaving_;

    /** Discrete variable "barriers.button_stop_slow". */
    barriers_button_stop_slow_;

    /** Discrete variable "bridgedeck.A". */
    bridgedeck_A_;

    /** Discrete variable "bridgedeck.button_close". */
    bridgedeck_button_close_;

    /** Discrete variable "bridgedeck.button_open". */
    bridgedeck_button_open_;

    /** Discrete variable "bridgedeck.button_stop". */
    bridgedeck_button_stop_;

    /** Discrete variable "bridgedeck.S". */
    bridgedeck_S_;

    /** Discrete variable "FTC.D.ps1_f". */
    FTC_D_ps1_f_;

    /** Discrete variable "FTC.D.ps2_f". */
    FTC_D_ps2_f_;

    /** Discrete variable "FTC.D.ps3_f". */
    FTC_D_ps3_f_;

    /** Discrete variable "FTC.D.ps4_f". */
    FTC_D_ps4_f_;

    /** Discrete variable "FTC.D.ps5_f". */
    FTC_D_ps5_f_;

    /** Discrete variable "FTC.D.ps6_f". */
    FTC_D_ps6_f_;

    /** Discrete variable "FTC.D.s1_f". */
    FTC_D_s1_f_;

    /** Discrete variable "FTC.D.s2_f". */
    FTC_D_s2_f_;

    /** Discrete variable "FTC.D.s3_f". */
    FTC_D_s3_f_;

    /** Discrete variable "FTC.D.s4_f". */
    FTC_D_s4_f_;

    /** Discrete variable "FTC.D.s5_f". */
    FTC_D_s5_f_;

    /** Discrete variable "FTC.D.s6_f". */
    FTC_D_s6_f_;

    /** Discrete variable "FTC.D.s7_f". */
    FTC_D_s7_f_;

    /** Discrete variable "FTC.D.s8_f". */
    FTC_D_s8_f_;

    /** Discrete variable "FTC.D.bar1_f". */
    FTC_D_bar1_f_;

    /** Discrete variable "FTC.D.bar4_f". */
    FTC_D_bar4_f_;

    /** Discrete variable "FTC.D.bar3_f". */
    FTC_D_bar3_f_;

    /** Discrete variable "FTC.D.bar2_f". */
    FTC_D_bar2_f_;

    /** Discrete variable "FTC.D.bar5_f". */
    FTC_D_bar5_f_;

    /** Discrete variable "FTC.D.bar6_f". */
    FTC_D_bar6_f_;

    /** Discrete variable "FTC.D.bridge_f". */
    FTC_D_bridge_f_;

    /** Discrete variable "LTS.button_on". */
    LTS_button_on_;

    /** Discrete variable "LTS.presigns.ps1.A". */
    LTS_presigns_ps1_A_;

    /** Discrete variable "LTS.presigns.ps1.S". */
    LTS_presigns_ps1_S_;

    /** Discrete variable "LTS.presigns.ps2.A". */
    LTS_presigns_ps2_A_;

    /** Discrete variable "LTS.presigns.ps2.S". */
    LTS_presigns_ps2_S_;

    /** Discrete variable "LTS.presigns.ps3.A". */
    LTS_presigns_ps3_A_;

    /** Discrete variable "LTS.presigns.ps3.S". */
    LTS_presigns_ps3_S_;

    /** Discrete variable "LTS.presigns.ps4.A". */
    LTS_presigns_ps4_A_;

    /** Discrete variable "LTS.presigns.ps4.S". */
    LTS_presigns_ps4_S_;

    /** Discrete variable "LTS.presigns.ps5.A". */
    LTS_presigns_ps5_A_;

    /** Discrete variable "LTS.presigns.ps5.S". */
    LTS_presigns_ps5_S_;

    /** Discrete variable "LTS.presigns.ps6.A". */
    LTS_presigns_ps6_A_;

    /** Discrete variable "LTS.presigns.ps6.S". */
    LTS_presigns_ps6_S_;

    /** Discrete variable "LTS.stopsigns.stop1.A". */
    LTS_stopsigns_stop1_A_;

    /** Discrete variable "LTS.stopsigns.stop1.S". */
    LTS_stopsigns_stop1_S_;

    /** Discrete variable "LTS.stopsigns.stop2.A". */
    LTS_stopsigns_stop2_A_;

    /** Discrete variable "LTS.stopsigns.stop2.S". */
    LTS_stopsigns_stop2_S_;

    /** Discrete variable "LTS.stopsigns.stop3.A". */
    LTS_stopsigns_stop3_A_;

    /** Discrete variable "LTS.stopsigns.stop3.S". */
    LTS_stopsigns_stop3_S_;

    /** Discrete variable "LTS.stopsigns.stop4.A". */
    LTS_stopsigns_stop4_A_;

    /** Discrete variable "LTS.stopsigns.stop4.S". */
    LTS_stopsigns_stop4_S_;

    /** Discrete variable "LTS.stopsigns.stop5.A". */
    LTS_stopsigns_stop5_A_;

    /** Discrete variable "LTS.stopsigns.stop5.S". */
    LTS_stopsigns_stop5_S_;

    /** Discrete variable "LTS.stopsigns.stop6.A". */
    LTS_stopsigns_stop6_A_;

    /** Discrete variable "LTS.stopsigns.stop6.S". */
    LTS_stopsigns_stop6_S_;

    /** Discrete variable "LTS.stopsigns.stop7.A". */
    LTS_stopsigns_stop7_A_;

    /** Discrete variable "LTS.stopsigns.stop7.S". */
    LTS_stopsigns_stop7_S_;

    /** Discrete variable "LTS.stopsigns.stop8.A". */
    LTS_stopsigns_stop8_A_;

    /** Discrete variable "LTS.stopsigns.stop8.S". */
    LTS_stopsigns_stop8_S_;

    /** Discrete variable "shipping_signs.downstream.button_green". */
    shipping_signs_downstream_button_green_;

    /** Discrete variable "shipping_signs.downstream.button_red". */
    shipping_signs_downstream_button_red_;

    /** Discrete variable "shipping_signs.downstream.button_redgreen". */
    shipping_signs_downstream_button_redgreen_;

    /** Discrete variable "shipping_signs.downstream.button_redred". */
    shipping_signs_downstream_button_redred_;

    /** Discrete variable "shipping_signs.downstream.N.A". */
    shipping_signs_downstream_N_A_;

    /** Discrete variable "shipping_signs.downstream.N.S_G". */
    shipping_signs_downstream_N_S_G_;

    /** Discrete variable "shipping_signs.downstream.N.S_R". */
    shipping_signs_downstream_N_S_R_;

    /** Discrete variable "shipping_signs.downstream.N.S_S". */
    shipping_signs_downstream_N_S_S_;

    /** Discrete variable "shipping_signs.downstream.S.A". */
    shipping_signs_downstream_S_A_;

    /** Discrete variable "shipping_signs.downstream.S.S_G". */
    shipping_signs_downstream_S_S_G_;

    /** Discrete variable "shipping_signs.downstream.S.S_R". */
    shipping_signs_downstream_S_S_R_;

    /** Discrete variable "shipping_signs.downstream.S.S_S". */
    shipping_signs_downstream_S_S_S_;

    /** Discrete variable "shipping_signs.upstream.button_green". */
    shipping_signs_upstream_button_green_;

    /** Discrete variable "shipping_signs.upstream.button_red". */
    shipping_signs_upstream_button_red_;

    /** Discrete variable "shipping_signs.upstream.button_redgreen". */
    shipping_signs_upstream_button_redgreen_;

    /** Discrete variable "shipping_signs.upstream.button_redred". */
    shipping_signs_upstream_button_redred_;

    /** Discrete variable "shipping_signs.upstream.N.A". */
    shipping_signs_upstream_N_A_;

    /** Discrete variable "shipping_signs.upstream.N.S_G". */
    shipping_signs_upstream_N_S_G_;

    /** Discrete variable "shipping_signs.upstream.N.S_R". */
    shipping_signs_upstream_N_S_R_;

    /** Discrete variable "shipping_signs.upstream.N.S_S". */
    shipping_signs_upstream_N_S_S_;

    /** Discrete variable "shipping_signs.upstream.S.A". */
    shipping_signs_upstream_S_A_;

    /** Discrete variable "shipping_signs.upstream.S.S_G". */
    shipping_signs_upstream_S_S_G_;

    /** Discrete variable "shipping_signs.upstream.S.S_R". */
    shipping_signs_upstream_S_S_R_;

    /** Discrete variable "shipping_signs.upstream.S.S_S". */
    shipping_signs_upstream_S_S_S_;


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

            // Event "barriers.barrier1.u_closed_off".
            edgeExecuted |= this.execEdge0();

            // Event "barriers.barrier1.u_closed_on".
            edgeExecuted |= this.execEdge1();

            // Event "barriers.barrier1.u_open_off".
            edgeExecuted |= this.execEdge2();

            // Event "barriers.barrier1.u_open_on".
            edgeExecuted |= this.execEdge3();

            // Event "barriers.barrier2.u_closed_off".
            edgeExecuted |= this.execEdge4();

            // Event "barriers.barrier2.u_closed_on".
            edgeExecuted |= this.execEdge5();

            // Event "barriers.barrier2.u_open_off".
            edgeExecuted |= this.execEdge6();

            // Event "barriers.barrier2.u_open_on".
            edgeExecuted |= this.execEdge7();

            // Event "barriers.barrier3.u_closed_off".
            edgeExecuted |= this.execEdge8();

            // Event "barriers.barrier3.u_closed_on".
            edgeExecuted |= this.execEdge9();

            // Event "barriers.barrier3.u_open_off".
            edgeExecuted |= this.execEdge10();

            // Event "barriers.barrier3.u_open_on".
            edgeExecuted |= this.execEdge11();

            // Event "barriers.barrier4.u_closed_off".
            edgeExecuted |= this.execEdge12();

            // Event "barriers.barrier4.u_closed_on".
            edgeExecuted |= this.execEdge13();

            // Event "barriers.barrier4.u_open_off".
            edgeExecuted |= this.execEdge14();

            // Event "barriers.barrier4.u_open_on".
            edgeExecuted |= this.execEdge15();

            // Event "barriers.barrier5.u_closed_off".
            edgeExecuted |= this.execEdge16();

            // Event "barriers.barrier5.u_closed_on".
            edgeExecuted |= this.execEdge17();

            // Event "barriers.barrier5.u_open_off".
            edgeExecuted |= this.execEdge18();

            // Event "barriers.barrier5.u_open_on".
            edgeExecuted |= this.execEdge19();

            // Event "barriers.barrier6.u_closed_off".
            edgeExecuted |= this.execEdge20();

            // Event "barriers.barrier6.u_closed_on".
            edgeExecuted |= this.execEdge21();

            // Event "barriers.barrier6.u_open_off".
            edgeExecuted |= this.execEdge22();

            // Event "barriers.barrier6.u_open_on".
            edgeExecuted |= this.execEdge23();

            // Event "barriers.button_close_entering.u_pushed".
            edgeExecuted |= this.execEdge24();

            // Event "barriers.button_close_entering.u_released".
            edgeExecuted |= this.execEdge25();

            // Event "barriers.button_close_leaving.u_pushed".
            edgeExecuted |= this.execEdge26();

            // Event "barriers.button_close_leaving.u_released".
            edgeExecuted |= this.execEdge27();

            // Event "barriers.button_close_slow.u_pushed".
            edgeExecuted |= this.execEdge28();

            // Event "barriers.button_close_slow.u_released".
            edgeExecuted |= this.execEdge29();

            // Event "barriers.button_open_entering.u_pushed".
            edgeExecuted |= this.execEdge30();

            // Event "barriers.button_open_entering.u_released".
            edgeExecuted |= this.execEdge31();

            // Event "barriers.button_open_leaving.u_pushed".
            edgeExecuted |= this.execEdge32();

            // Event "barriers.button_open_leaving.u_released".
            edgeExecuted |= this.execEdge33();

            // Event "barriers.button_open_slow.u_pushed".
            edgeExecuted |= this.execEdge34();

            // Event "barriers.button_open_slow.u_released".
            edgeExecuted |= this.execEdge35();

            // Event "barriers.button_stop_entering.u_pushed".
            edgeExecuted |= this.execEdge36();

            // Event "barriers.button_stop_entering.u_released".
            edgeExecuted |= this.execEdge37();

            // Event "barriers.button_stop_leaving.u_pushed".
            edgeExecuted |= this.execEdge38();

            // Event "barriers.button_stop_leaving.u_released".
            edgeExecuted |= this.execEdge39();

            // Event "barriers.button_stop_slow.u_pushed".
            edgeExecuted |= this.execEdge40();

            // Event "barriers.button_stop_slow.u_released".
            edgeExecuted |= this.execEdge41();

            // Event "bridgedeck.button_close.u_pushed".
            edgeExecuted |= this.execEdge42();

            // Event "bridgedeck.button_close.u_released".
            edgeExecuted |= this.execEdge43();

            // Event "bridgedeck.button_open.u_pushed".
            edgeExecuted |= this.execEdge44();

            // Event "bridgedeck.button_open.u_released".
            edgeExecuted |= this.execEdge45();

            // Event "bridgedeck.button_stop.u_pushed".
            edgeExecuted |= this.execEdge46();

            // Event "bridgedeck.button_stop.u_released".
            edgeExecuted |= this.execEdge47();

            // Event "bridgedeck.u_closed_off".
            edgeExecuted |= this.execEdge48();

            // Event "bridgedeck.u_closed_on".
            edgeExecuted |= this.execEdge49();

            // Event "bridgedeck.u_open_off".
            edgeExecuted |= this.execEdge50();

            // Event "bridgedeck.u_open_on".
            edgeExecuted |= this.execEdge51();

            // Event "FTC.D.f1".
            edgeExecuted |= this.execEdge52();

            // Event "FTC.D.f10".
            edgeExecuted |= this.execEdge53();

            // Event "FTC.D.f11".
            edgeExecuted |= this.execEdge54();

            // Event "FTC.D.f12".
            edgeExecuted |= this.execEdge55();

            // Event "FTC.D.f13".
            edgeExecuted |= this.execEdge56();

            // Event "FTC.D.f14".
            edgeExecuted |= this.execEdge57();

            // Event "FTC.D.f15".
            edgeExecuted |= this.execEdge58();

            // Event "FTC.D.f16".
            edgeExecuted |= this.execEdge59();

            // Event "FTC.D.f17".
            edgeExecuted |= this.execEdge60();

            // Event "FTC.D.f18".
            edgeExecuted |= this.execEdge61();

            // Event "FTC.D.f19".
            edgeExecuted |= this.execEdge62();

            // Event "FTC.D.f2".
            edgeExecuted |= this.execEdge63();

            // Event "FTC.D.f20".
            edgeExecuted |= this.execEdge64();

            // Event "FTC.D.f25".
            edgeExecuted |= this.execEdge65();

            // Event "FTC.D.f3".
            edgeExecuted |= this.execEdge66();

            // Event "FTC.D.f4".
            edgeExecuted |= this.execEdge67();

            // Event "FTC.D.f5".
            edgeExecuted |= this.execEdge68();

            // Event "FTC.D.f6".
            edgeExecuted |= this.execEdge69();

            // Event "FTC.D.f7".
            edgeExecuted |= this.execEdge70();

            // Event "FTC.D.f8".
            edgeExecuted |= this.execEdge71();

            // Event "FTC.D.f9".
            edgeExecuted |= this.execEdge72();

            // Event "FTC.D.r15".
            edgeExecuted |= this.execEdge73();

            // Event "FTC.D.r16".
            edgeExecuted |= this.execEdge74();

            // Event "FTC.D.r17".
            edgeExecuted |= this.execEdge75();

            // Event "FTC.D.r18".
            edgeExecuted |= this.execEdge76();

            // Event "FTC.D.r19".
            edgeExecuted |= this.execEdge77();

            // Event "FTC.D.r20".
            edgeExecuted |= this.execEdge78();

            // Event "LTS.button_on.u_pushed".
            edgeExecuted |= this.execEdge79();

            // Event "LTS.button_on.u_released".
            edgeExecuted |= this.execEdge80();

            // Event "LTS.presigns.ps1.u_off".
            edgeExecuted |= this.execEdge81();

            // Event "LTS.presigns.ps1.u_on".
            edgeExecuted |= this.execEdge82();

            // Event "LTS.presigns.ps2.u_off".
            edgeExecuted |= this.execEdge83();

            // Event "LTS.presigns.ps2.u_on".
            edgeExecuted |= this.execEdge84();

            // Event "LTS.presigns.ps3.u_off".
            edgeExecuted |= this.execEdge85();

            // Event "LTS.presigns.ps3.u_on".
            edgeExecuted |= this.execEdge86();

            // Event "LTS.presigns.ps4.u_off".
            edgeExecuted |= this.execEdge87();

            // Event "LTS.presigns.ps4.u_on".
            edgeExecuted |= this.execEdge88();

            // Event "LTS.presigns.ps5.u_off".
            edgeExecuted |= this.execEdge89();

            // Event "LTS.presigns.ps5.u_on".
            edgeExecuted |= this.execEdge90();

            // Event "LTS.presigns.ps6.u_off".
            edgeExecuted |= this.execEdge91();

            // Event "LTS.presigns.ps6.u_on".
            edgeExecuted |= this.execEdge92();

            // Event "LTS.stopsigns.stop1.u_off".
            edgeExecuted |= this.execEdge93();

            // Event "LTS.stopsigns.stop1.u_on".
            edgeExecuted |= this.execEdge94();

            // Event "LTS.stopsigns.stop2.u_off".
            edgeExecuted |= this.execEdge95();

            // Event "LTS.stopsigns.stop2.u_on".
            edgeExecuted |= this.execEdge96();

            // Event "LTS.stopsigns.stop3.u_off".
            edgeExecuted |= this.execEdge97();

            // Event "LTS.stopsigns.stop3.u_on".
            edgeExecuted |= this.execEdge98();

            // Event "LTS.stopsigns.stop4.u_off".
            edgeExecuted |= this.execEdge99();

            // Event "LTS.stopsigns.stop4.u_on".
            edgeExecuted |= this.execEdge100();

            // Event "LTS.stopsigns.stop5.u_off".
            edgeExecuted |= this.execEdge101();

            // Event "LTS.stopsigns.stop5.u_on".
            edgeExecuted |= this.execEdge102();

            // Event "LTS.stopsigns.stop6.u_off".
            edgeExecuted |= this.execEdge103();

            // Event "LTS.stopsigns.stop6.u_on".
            edgeExecuted |= this.execEdge104();

            // Event "LTS.stopsigns.stop7.u_off".
            edgeExecuted |= this.execEdge105();

            // Event "LTS.stopsigns.stop7.u_on".
            edgeExecuted |= this.execEdge106();

            // Event "LTS.stopsigns.stop8.u_off".
            edgeExecuted |= this.execEdge107();

            // Event "LTS.stopsigns.stop8.u_on".
            edgeExecuted |= this.execEdge108();

            // Event "shipping_signs.downstream.button_green.u_pushed".
            edgeExecuted |= this.execEdge109();

            // Event "shipping_signs.downstream.button_green.u_released".
            edgeExecuted |= this.execEdge110();

            // Event "shipping_signs.downstream.button_red.u_pushed".
            edgeExecuted |= this.execEdge111();

            // Event "shipping_signs.downstream.button_red.u_released".
            edgeExecuted |= this.execEdge112();

            // Event "shipping_signs.downstream.button_redgreen.u_pushed".
            edgeExecuted |= this.execEdge113();

            // Event "shipping_signs.downstream.button_redgreen.u_released".
            edgeExecuted |= this.execEdge114();

            // Event "shipping_signs.downstream.button_redred.u_pushed".
            edgeExecuted |= this.execEdge115();

            // Event "shipping_signs.downstream.button_redred.u_released".
            edgeExecuted |= this.execEdge116();

            // Event "shipping_signs.downstream.N.u_green_off".
            edgeExecuted |= this.execEdge117();

            // Event "shipping_signs.downstream.N.u_green_on".
            edgeExecuted |= this.execEdge118();

            // Event "shipping_signs.downstream.N.u_red2_off".
            edgeExecuted |= this.execEdge119();

            // Event "shipping_signs.downstream.N.u_red2_on".
            edgeExecuted |= this.execEdge120();

            // Event "shipping_signs.downstream.N.u_red_off".
            edgeExecuted |= this.execEdge121();

            // Event "shipping_signs.downstream.N.u_red_on".
            edgeExecuted |= this.execEdge122();

            // Event "shipping_signs.downstream.S.u_green_off".
            edgeExecuted |= this.execEdge123();

            // Event "shipping_signs.downstream.S.u_green_on".
            edgeExecuted |= this.execEdge124();

            // Event "shipping_signs.downstream.S.u_red2_off".
            edgeExecuted |= this.execEdge125();

            // Event "shipping_signs.downstream.S.u_red2_on".
            edgeExecuted |= this.execEdge126();

            // Event "shipping_signs.downstream.S.u_red_off".
            edgeExecuted |= this.execEdge127();

            // Event "shipping_signs.downstream.S.u_red_on".
            edgeExecuted |= this.execEdge128();

            // Event "shipping_signs.upstream.button_green.u_pushed".
            edgeExecuted |= this.execEdge129();

            // Event "shipping_signs.upstream.button_green.u_released".
            edgeExecuted |= this.execEdge130();

            // Event "shipping_signs.upstream.button_red.u_pushed".
            edgeExecuted |= this.execEdge131();

            // Event "shipping_signs.upstream.button_red.u_released".
            edgeExecuted |= this.execEdge132();

            // Event "shipping_signs.upstream.button_redgreen.u_pushed".
            edgeExecuted |= this.execEdge133();

            // Event "shipping_signs.upstream.button_redgreen.u_released".
            edgeExecuted |= this.execEdge134();

            // Event "shipping_signs.upstream.button_redred.u_pushed".
            edgeExecuted |= this.execEdge135();

            // Event "shipping_signs.upstream.button_redred.u_released".
            edgeExecuted |= this.execEdge136();

            // Event "shipping_signs.upstream.N.u_green_off".
            edgeExecuted |= this.execEdge137();

            // Event "shipping_signs.upstream.N.u_green_on".
            edgeExecuted |= this.execEdge138();

            // Event "shipping_signs.upstream.N.u_red2_off".
            edgeExecuted |= this.execEdge139();

            // Event "shipping_signs.upstream.N.u_red2_on".
            edgeExecuted |= this.execEdge140();

            // Event "shipping_signs.upstream.N.u_red_off".
            edgeExecuted |= this.execEdge141();

            // Event "shipping_signs.upstream.N.u_red_on".
            edgeExecuted |= this.execEdge142();

            // Event "shipping_signs.upstream.S.u_green_off".
            edgeExecuted |= this.execEdge143();

            // Event "shipping_signs.upstream.S.u_green_on".
            edgeExecuted |= this.execEdge144();

            // Event "shipping_signs.upstream.S.u_red2_off".
            edgeExecuted |= this.execEdge145();

            // Event "shipping_signs.upstream.S.u_red2_on".
            edgeExecuted |= this.execEdge146();

            // Event "shipping_signs.upstream.S.u_red_off".
            edgeExecuted |= this.execEdge147();

            // Event "shipping_signs.upstream.S.u_red_on".
            edgeExecuted |= this.execEdge148();

            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Execute controllable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;

            // Event "barriers.barrier1.c_close".
            edgeExecuted |= this.execEdge149();

            // Event "barriers.barrier1.c_open".
            edgeExecuted |= this.execEdge150();

            // Event "barriers.barrier1.c_stop".
            edgeExecuted |= this.execEdge151();

            // Event "barriers.barrier2.c_close".
            edgeExecuted |= this.execEdge152();

            // Event "barriers.barrier2.c_open".
            edgeExecuted |= this.execEdge153();

            // Event "barriers.barrier2.c_stop".
            edgeExecuted |= this.execEdge154();

            // Event "barriers.barrier3.c_close".
            edgeExecuted |= this.execEdge155();

            // Event "barriers.barrier3.c_open".
            edgeExecuted |= this.execEdge156();

            // Event "barriers.barrier3.c_stop".
            edgeExecuted |= this.execEdge157();

            // Event "barriers.barrier4.c_close".
            edgeExecuted |= this.execEdge158();

            // Event "barriers.barrier4.c_open".
            edgeExecuted |= this.execEdge159();

            // Event "barriers.barrier4.c_stop".
            edgeExecuted |= this.execEdge160();

            // Event "barriers.barrier5.c_close".
            edgeExecuted |= this.execEdge161();

            // Event "barriers.barrier5.c_open".
            edgeExecuted |= this.execEdge162();

            // Event "barriers.barrier5.c_stop".
            edgeExecuted |= this.execEdge163();

            // Event "barriers.barrier6.c_close".
            edgeExecuted |= this.execEdge164();

            // Event "barriers.barrier6.c_open".
            edgeExecuted |= this.execEdge165();

            // Event "barriers.barrier6.c_stop".
            edgeExecuted |= this.execEdge166();

            // Event "bridgedeck.c_close".
            edgeExecuted |= this.execEdge167();

            // Event "bridgedeck.c_open".
            edgeExecuted |= this.execEdge168();

            // Event "bridgedeck.c_stop".
            edgeExecuted |= this.execEdge169();

            // Event "LTS.presigns.ps1.c_off".
            edgeExecuted |= this.execEdge170();

            // Event "LTS.presigns.ps1.c_on".
            edgeExecuted |= this.execEdge171();

            // Event "LTS.presigns.ps2.c_off".
            edgeExecuted |= this.execEdge172();

            // Event "LTS.presigns.ps2.c_on".
            edgeExecuted |= this.execEdge173();

            // Event "LTS.presigns.ps3.c_off".
            edgeExecuted |= this.execEdge174();

            // Event "LTS.presigns.ps3.c_on".
            edgeExecuted |= this.execEdge175();

            // Event "LTS.presigns.ps4.c_off".
            edgeExecuted |= this.execEdge176();

            // Event "LTS.presigns.ps4.c_on".
            edgeExecuted |= this.execEdge177();

            // Event "LTS.presigns.ps5.c_off".
            edgeExecuted |= this.execEdge178();

            // Event "LTS.presigns.ps5.c_on".
            edgeExecuted |= this.execEdge179();

            // Event "LTS.presigns.ps6.c_off".
            edgeExecuted |= this.execEdge180();

            // Event "LTS.presigns.ps6.c_on".
            edgeExecuted |= this.execEdge181();

            // Event "LTS.stopsigns.stop1.c_off".
            edgeExecuted |= this.execEdge182();

            // Event "LTS.stopsigns.stop1.c_on".
            edgeExecuted |= this.execEdge183();

            // Event "LTS.stopsigns.stop2.c_off".
            edgeExecuted |= this.execEdge184();

            // Event "LTS.stopsigns.stop2.c_on".
            edgeExecuted |= this.execEdge185();

            // Event "LTS.stopsigns.stop3.c_off".
            edgeExecuted |= this.execEdge186();

            // Event "LTS.stopsigns.stop3.c_on".
            edgeExecuted |= this.execEdge187();

            // Event "LTS.stopsigns.stop4.c_off".
            edgeExecuted |= this.execEdge188();

            // Event "LTS.stopsigns.stop4.c_on".
            edgeExecuted |= this.execEdge189();

            // Event "LTS.stopsigns.stop5.c_off".
            edgeExecuted |= this.execEdge190();

            // Event "LTS.stopsigns.stop5.c_on".
            edgeExecuted |= this.execEdge191();

            // Event "LTS.stopsigns.stop6.c_off".
            edgeExecuted |= this.execEdge192();

            // Event "LTS.stopsigns.stop6.c_on".
            edgeExecuted |= this.execEdge193();

            // Event "LTS.stopsigns.stop7.c_off".
            edgeExecuted |= this.execEdge194();

            // Event "LTS.stopsigns.stop7.c_on".
            edgeExecuted |= this.execEdge195();

            // Event "LTS.stopsigns.stop8.c_off".
            edgeExecuted |= this.execEdge196();

            // Event "LTS.stopsigns.stop8.c_on".
            edgeExecuted |= this.execEdge197();

            // Event "shipping_signs.downstream.N.c_green".
            edgeExecuted |= this.execEdge198();

            // Event "shipping_signs.downstream.N.c_red".
            edgeExecuted |= this.execEdge199();

            // Event "shipping_signs.downstream.N.c_redgreen".
            edgeExecuted |= this.execEdge200();

            // Event "shipping_signs.downstream.N.c_redred".
            edgeExecuted |= this.execEdge201();

            // Event "shipping_signs.downstream.S.c_green".
            edgeExecuted |= this.execEdge202();

            // Event "shipping_signs.downstream.S.c_red".
            edgeExecuted |= this.execEdge203();

            // Event "shipping_signs.downstream.S.c_redgreen".
            edgeExecuted |= this.execEdge204();

            // Event "shipping_signs.downstream.S.c_redred".
            edgeExecuted |= this.execEdge205();

            // Event "shipping_signs.upstream.N.c_green".
            edgeExecuted |= this.execEdge206();

            // Event "shipping_signs.upstream.N.c_red".
            edgeExecuted |= this.execEdge207();

            // Event "shipping_signs.upstream.N.c_redgreen".
            edgeExecuted |= this.execEdge208();

            // Event "shipping_signs.upstream.N.c_redred".
            edgeExecuted |= this.execEdge209();

            // Event "shipping_signs.upstream.S.c_green".
            edgeExecuted |= this.execEdge210();

            // Event "shipping_signs.upstream.S.c_red".
            edgeExecuted |= this.execEdge211();

            // Event "shipping_signs.upstream.S.c_redgreen".
            edgeExecuted |= this.execEdge212();

            // Event "shipping_signs.upstream.S.c_redred".
            edgeExecuted |= this.execEdge213();

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
     * Execute code for edge with index 0 and event "barriers.barrier1.u_closed_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = (!(!(spec.barriers_barrier1_f_sc_())) || ((spec.barriers_barrier1_A_) == (spec.specEnum._opening))) && ((!(spec.barriers_barrier1_f_sc_())) && ((spec.barriers_barrier1_S_) == (spec.specEnum._closed)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        spec.barriers_barrier1_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "barriers.barrier1.u_closed_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = (!(!(spec.barriers_barrier1_f_sc_())) || ((spec.barriers_barrier1_A_) == (spec.specEnum._closing))) && ((!(spec.barriers_barrier1_f_sc_()) || ((spec.barriers_barrier1_A_) == (spec.specEnum._closing))) && ((spec.barriers_barrier1_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.barriers_barrier1_S_ = spec.specEnum._closed;

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "barriers.barrier1.u_open_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = (!(!(spec.barriers_barrier1_f_sc_())) || ((spec.barriers_barrier1_A_) == (spec.specEnum._closing))) && ((!(spec.barriers_barrier1_f_sc_()) || ((spec.barriers_barrier1_A_) == (spec.specEnum._closing))) && ((spec.barriers_barrier1_S_) == (spec.specEnum._open)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.barriers_barrier1_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "barriers.barrier1.u_open_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = (!(!(spec.barriers_barrier1_f_sc_())) || ((spec.barriers_barrier1_A_) == (spec.specEnum._opening))) && ((!(spec.barriers_barrier1_f_sc_()) || ((spec.barriers_barrier1_A_) == (spec.specEnum._opening))) && ((spec.barriers_barrier1_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.barriers_barrier1_S_ = spec.specEnum._open;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "barriers.barrier2.u_closed_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = (!(!(spec.barriers_barrier2_f_sc_())) || ((spec.barriers_barrier2_A_) == (spec.specEnum._opening))) && ((!(spec.barriers_barrier2_f_sc_())) && ((spec.barriers_barrier2_S_) == (spec.specEnum._closed)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        spec.barriers_barrier2_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "barriers.barrier2.u_closed_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = (!(!(spec.barriers_barrier2_f_sc_())) || ((spec.barriers_barrier2_A_) == (spec.specEnum._closing))) && ((!(spec.barriers_barrier2_f_sc_()) || ((spec.barriers_barrier2_A_) == (spec.specEnum._closing))) && ((spec.barriers_barrier2_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        spec.barriers_barrier2_S_ = spec.specEnum._closed;

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "barriers.barrier2.u_open_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = (!(!(spec.barriers_barrier2_f_sc_())) || ((spec.barriers_barrier2_A_) == (spec.specEnum._closing))) && ((!(spec.barriers_barrier2_f_sc_()) || ((spec.barriers_barrier2_A_) == (spec.specEnum._closing))) && ((spec.barriers_barrier2_S_) == (spec.specEnum._open)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(12, true);
        if (this.doInfoEvent) this.infoEvent(12, true);

        spec.barriers_barrier2_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(12, false);
        if (this.doInfoPrintOutput) this.printOutput(12, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "barriers.barrier2.u_open_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = (!(!(spec.barriers_barrier2_f_sc_())) || ((spec.barriers_barrier2_A_) == (spec.specEnum._opening))) && ((!(spec.barriers_barrier2_f_sc_()) || ((spec.barriers_barrier2_A_) == (spec.specEnum._opening))) && ((spec.barriers_barrier2_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(13, true);
        if (this.doInfoEvent) this.infoEvent(13, true);

        spec.barriers_barrier2_S_ = spec.specEnum._open;

        if (this.doInfoEvent) this.infoEvent(13, false);
        if (this.doInfoPrintOutput) this.printOutput(13, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "barriers.barrier3.u_closed_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = (!(!(spec.barriers_barrier3_f_sc_())) || ((spec.barriers_barrier3_A_) == (spec.specEnum._opening))) && ((!(spec.barriers_barrier3_f_sc_())) && ((spec.barriers_barrier3_S_) == (spec.specEnum._closed)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(17, true);
        if (this.doInfoEvent) this.infoEvent(17, true);

        spec.barriers_barrier3_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(17, false);
        if (this.doInfoPrintOutput) this.printOutput(17, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "barriers.barrier3.u_closed_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = (!(!(spec.barriers_barrier3_f_sc_())) || ((spec.barriers_barrier3_A_) == (spec.specEnum._closing))) && ((!(spec.barriers_barrier3_f_sc_()) || ((spec.barriers_barrier3_A_) == (spec.specEnum._closing))) && ((spec.barriers_barrier3_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(18, true);
        if (this.doInfoEvent) this.infoEvent(18, true);

        spec.barriers_barrier3_S_ = spec.specEnum._closed;

        if (this.doInfoEvent) this.infoEvent(18, false);
        if (this.doInfoPrintOutput) this.printOutput(18, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "barriers.barrier3.u_open_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = (!(!(spec.barriers_barrier3_f_sc_())) || ((spec.barriers_barrier3_A_) == (spec.specEnum._closing))) && ((!(spec.barriers_barrier3_f_sc_()) || ((spec.barriers_barrier3_A_) == (spec.specEnum._closing))) && ((spec.barriers_barrier3_S_) == (spec.specEnum._open)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(19, true);
        if (this.doInfoEvent) this.infoEvent(19, true);

        spec.barriers_barrier3_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(19, false);
        if (this.doInfoPrintOutput) this.printOutput(19, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "barriers.barrier3.u_open_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = (!(!(spec.barriers_barrier3_f_sc_())) || ((spec.barriers_barrier3_A_) == (spec.specEnum._opening))) && ((!(spec.barriers_barrier3_f_sc_()) || ((spec.barriers_barrier3_A_) == (spec.specEnum._opening))) && ((spec.barriers_barrier3_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(20, true);
        if (this.doInfoEvent) this.infoEvent(20, true);

        spec.barriers_barrier3_S_ = spec.specEnum._open;

        if (this.doInfoEvent) this.infoEvent(20, false);
        if (this.doInfoPrintOutput) this.printOutput(20, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 12 and event "barriers.barrier4.u_closed_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge12() {
        var guard = (!(!(spec.barriers_barrier4_f_sc_())) || ((spec.barriers_barrier4_A_) == (spec.specEnum._opening))) && ((!(spec.barriers_barrier4_f_sc_())) && ((spec.barriers_barrier4_S_) == (spec.specEnum._closed)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(24, true);
        if (this.doInfoEvent) this.infoEvent(24, true);

        spec.barriers_barrier4_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(24, false);
        if (this.doInfoPrintOutput) this.printOutput(24, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 13 and event "barriers.barrier4.u_closed_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge13() {
        var guard = (!(!(spec.barriers_barrier4_f_sc_())) || ((spec.barriers_barrier4_A_) == (spec.specEnum._closing))) && ((!(spec.barriers_barrier4_f_sc_()) || ((spec.barriers_barrier4_A_) == (spec.specEnum._closing))) && ((spec.barriers_barrier4_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(25, true);
        if (this.doInfoEvent) this.infoEvent(25, true);

        spec.barriers_barrier4_S_ = spec.specEnum._closed;

        if (this.doInfoEvent) this.infoEvent(25, false);
        if (this.doInfoPrintOutput) this.printOutput(25, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 14 and event "barriers.barrier4.u_open_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge14() {
        var guard = (!(!(spec.barriers_barrier4_f_sc_())) || ((spec.barriers_barrier4_A_) == (spec.specEnum._closing))) && ((!(spec.barriers_barrier4_f_sc_()) || ((spec.barriers_barrier4_A_) == (spec.specEnum._closing))) && ((spec.barriers_barrier4_S_) == (spec.specEnum._open)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(26, true);
        if (this.doInfoEvent) this.infoEvent(26, true);

        spec.barriers_barrier4_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(26, false);
        if (this.doInfoPrintOutput) this.printOutput(26, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 15 and event "barriers.barrier4.u_open_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge15() {
        var guard = (!(!(spec.barriers_barrier4_f_sc_())) || ((spec.barriers_barrier4_A_) == (spec.specEnum._opening))) && ((!(spec.barriers_barrier4_f_sc_()) || ((spec.barriers_barrier4_A_) == (spec.specEnum._opening))) && ((spec.barriers_barrier4_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(27, true);
        if (this.doInfoEvent) this.infoEvent(27, true);

        spec.barriers_barrier4_S_ = spec.specEnum._open;

        if (this.doInfoEvent) this.infoEvent(27, false);
        if (this.doInfoPrintOutput) this.printOutput(27, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 16 and event "barriers.barrier5.u_closed_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge16() {
        var guard = (!(!(spec.barriers_barrier5_f_sc_())) || ((spec.barriers_barrier5_A_) == (spec.specEnum._opening))) && ((!(spec.barriers_barrier5_f_sc_())) && ((spec.barriers_barrier5_S_) == (spec.specEnum._closed)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(31, true);
        if (this.doInfoEvent) this.infoEvent(31, true);

        spec.barriers_barrier5_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(31, false);
        if (this.doInfoPrintOutput) this.printOutput(31, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 17 and event "barriers.barrier5.u_closed_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge17() {
        var guard = (!(!(spec.barriers_barrier5_f_sc_())) || ((spec.barriers_barrier5_A_) == (spec.specEnum._closing))) && ((!(spec.barriers_barrier5_f_sc_()) || ((spec.barriers_barrier5_A_) == (spec.specEnum._closing))) && ((spec.barriers_barrier5_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(32, true);
        if (this.doInfoEvent) this.infoEvent(32, true);

        spec.barriers_barrier5_S_ = spec.specEnum._closed;

        if (this.doInfoEvent) this.infoEvent(32, false);
        if (this.doInfoPrintOutput) this.printOutput(32, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 18 and event "barriers.barrier5.u_open_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge18() {
        var guard = (!(!(spec.barriers_barrier5_f_sc_())) || ((spec.barriers_barrier5_A_) == (spec.specEnum._closing))) && ((!(spec.barriers_barrier5_f_sc_()) || ((spec.barriers_barrier5_A_) == (spec.specEnum._closing))) && ((spec.barriers_barrier5_S_) == (spec.specEnum._open)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(33, true);
        if (this.doInfoEvent) this.infoEvent(33, true);

        spec.barriers_barrier5_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(33, false);
        if (this.doInfoPrintOutput) this.printOutput(33, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 19 and event "barriers.barrier5.u_open_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge19() {
        var guard = (!(!(spec.barriers_barrier5_f_sc_())) || ((spec.barriers_barrier5_A_) == (spec.specEnum._opening))) && ((!(spec.barriers_barrier5_f_sc_()) || ((spec.barriers_barrier5_A_) == (spec.specEnum._opening))) && ((spec.barriers_barrier5_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(34, true);
        if (this.doInfoEvent) this.infoEvent(34, true);

        spec.barriers_barrier5_S_ = spec.specEnum._open;

        if (this.doInfoEvent) this.infoEvent(34, false);
        if (this.doInfoPrintOutput) this.printOutput(34, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 20 and event "barriers.barrier6.u_closed_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge20() {
        var guard = (!(!(spec.barriers_barrier6_f_sc_())) || ((spec.barriers_barrier6_A_) == (spec.specEnum._opening))) && ((!(spec.barriers_barrier6_f_sc_())) && ((spec.barriers_barrier6_S_) == (spec.specEnum._closed)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(38, true);
        if (this.doInfoEvent) this.infoEvent(38, true);

        spec.barriers_barrier6_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(38, false);
        if (this.doInfoPrintOutput) this.printOutput(38, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 21 and event "barriers.barrier6.u_closed_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge21() {
        var guard = (!(!(spec.barriers_barrier6_f_sc_())) || ((spec.barriers_barrier6_A_) == (spec.specEnum._closing))) && ((!(spec.barriers_barrier6_f_sc_()) || ((spec.barriers_barrier6_A_) == (spec.specEnum._closing))) && ((spec.barriers_barrier6_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(39, true);
        if (this.doInfoEvent) this.infoEvent(39, true);

        spec.barriers_barrier6_S_ = spec.specEnum._closed;

        if (this.doInfoEvent) this.infoEvent(39, false);
        if (this.doInfoPrintOutput) this.printOutput(39, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 22 and event "barriers.barrier6.u_open_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge22() {
        var guard = (!(!(spec.barriers_barrier6_f_sc_())) || ((spec.barriers_barrier6_A_) == (spec.specEnum._closing))) && ((!(spec.barriers_barrier6_f_sc_()) || ((spec.barriers_barrier6_A_) == (spec.specEnum._closing))) && ((spec.barriers_barrier6_S_) == (spec.specEnum._open)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(40, true);
        if (this.doInfoEvent) this.infoEvent(40, true);

        spec.barriers_barrier6_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(40, false);
        if (this.doInfoPrintOutput) this.printOutput(40, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 23 and event "barriers.barrier6.u_open_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge23() {
        var guard = (!(!(spec.barriers_barrier6_f_sc_())) || ((spec.barriers_barrier6_A_) == (spec.specEnum._opening))) && ((!(spec.barriers_barrier6_f_sc_()) || ((spec.barriers_barrier6_A_) == (spec.specEnum._opening))) && ((spec.barriers_barrier6_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(41, true);
        if (this.doInfoEvent) this.infoEvent(41, true);

        spec.barriers_barrier6_S_ = spec.specEnum._open;

        if (this.doInfoEvent) this.infoEvent(41, false);
        if (this.doInfoPrintOutput) this.printOutput(41, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 24 and event "barriers.button_close_entering.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge24() {
        var guard = (spec.barriers_button_close_entering_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(42, true);
        if (this.doInfoEvent) this.infoEvent(42, true);

        spec.barriers_button_close_entering_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(42, false);
        if (this.doInfoPrintOutput) this.printOutput(42, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 25 and event "barriers.button_close_entering.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge25() {
        var guard = (spec.barriers_button_close_entering_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(43, true);
        if (this.doInfoEvent) this.infoEvent(43, true);

        spec.barriers_button_close_entering_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(43, false);
        if (this.doInfoPrintOutput) this.printOutput(43, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 26 and event "barriers.button_close_leaving.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge26() {
        var guard = (spec.barriers_button_close_leaving_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(44, true);
        if (this.doInfoEvent) this.infoEvent(44, true);

        spec.barriers_button_close_leaving_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(44, false);
        if (this.doInfoPrintOutput) this.printOutput(44, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 27 and event "barriers.button_close_leaving.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge27() {
        var guard = (spec.barriers_button_close_leaving_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(45, true);
        if (this.doInfoEvent) this.infoEvent(45, true);

        spec.barriers_button_close_leaving_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(45, false);
        if (this.doInfoPrintOutput) this.printOutput(45, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 28 and event "barriers.button_close_slow.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge28() {
        var guard = (spec.barriers_button_close_slow_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(46, true);
        if (this.doInfoEvent) this.infoEvent(46, true);

        spec.barriers_button_close_slow_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(46, false);
        if (this.doInfoPrintOutput) this.printOutput(46, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 29 and event "barriers.button_close_slow.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge29() {
        var guard = (spec.barriers_button_close_slow_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(47, true);
        if (this.doInfoEvent) this.infoEvent(47, true);

        spec.barriers_button_close_slow_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(47, false);
        if (this.doInfoPrintOutput) this.printOutput(47, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 30 and event "barriers.button_open_entering.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge30() {
        var guard = (spec.barriers_button_open_entering_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(48, true);
        if (this.doInfoEvent) this.infoEvent(48, true);

        spec.barriers_button_open_entering_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(48, false);
        if (this.doInfoPrintOutput) this.printOutput(48, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 31 and event "barriers.button_open_entering.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge31() {
        var guard = (spec.barriers_button_open_entering_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(49, true);
        if (this.doInfoEvent) this.infoEvent(49, true);

        spec.barriers_button_open_entering_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(49, false);
        if (this.doInfoPrintOutput) this.printOutput(49, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 32 and event "barriers.button_open_leaving.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge32() {
        var guard = (spec.barriers_button_open_leaving_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(50, true);
        if (this.doInfoEvent) this.infoEvent(50, true);

        spec.barriers_button_open_leaving_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(50, false);
        if (this.doInfoPrintOutput) this.printOutput(50, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 33 and event "barriers.button_open_leaving.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge33() {
        var guard = (spec.barriers_button_open_leaving_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(51, true);
        if (this.doInfoEvent) this.infoEvent(51, true);

        spec.barriers_button_open_leaving_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(51, false);
        if (this.doInfoPrintOutput) this.printOutput(51, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 34 and event "barriers.button_open_slow.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge34() {
        var guard = (spec.barriers_button_open_slow_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(52, true);
        if (this.doInfoEvent) this.infoEvent(52, true);

        spec.barriers_button_open_slow_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(52, false);
        if (this.doInfoPrintOutput) this.printOutput(52, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 35 and event "barriers.button_open_slow.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge35() {
        var guard = (spec.barriers_button_open_slow_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(53, true);
        if (this.doInfoEvent) this.infoEvent(53, true);

        spec.barriers_button_open_slow_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(53, false);
        if (this.doInfoPrintOutput) this.printOutput(53, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 36 and event "barriers.button_stop_entering.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge36() {
        var guard = (spec.barriers_button_stop_entering_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(54, true);
        if (this.doInfoEvent) this.infoEvent(54, true);

        spec.barriers_button_stop_entering_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(54, false);
        if (this.doInfoPrintOutput) this.printOutput(54, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 37 and event "barriers.button_stop_entering.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge37() {
        var guard = (spec.barriers_button_stop_entering_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(55, true);
        if (this.doInfoEvent) this.infoEvent(55, true);

        spec.barriers_button_stop_entering_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(55, false);
        if (this.doInfoPrintOutput) this.printOutput(55, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 38 and event "barriers.button_stop_leaving.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge38() {
        var guard = (spec.barriers_button_stop_leaving_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(56, true);
        if (this.doInfoEvent) this.infoEvent(56, true);

        spec.barriers_button_stop_leaving_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(56, false);
        if (this.doInfoPrintOutput) this.printOutput(56, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 39 and event "barriers.button_stop_leaving.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge39() {
        var guard = (spec.barriers_button_stop_leaving_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(57, true);
        if (this.doInfoEvent) this.infoEvent(57, true);

        spec.barriers_button_stop_leaving_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(57, false);
        if (this.doInfoPrintOutput) this.printOutput(57, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 40 and event "barriers.button_stop_slow.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge40() {
        var guard = (spec.barriers_button_stop_slow_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(58, true);
        if (this.doInfoEvent) this.infoEvent(58, true);

        spec.barriers_button_stop_slow_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(58, false);
        if (this.doInfoPrintOutput) this.printOutput(58, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 41 and event "barriers.button_stop_slow.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge41() {
        var guard = (spec.barriers_button_stop_slow_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(59, true);
        if (this.doInfoEvent) this.infoEvent(59, true);

        spec.barriers_button_stop_slow_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(59, false);
        if (this.doInfoPrintOutput) this.printOutput(59, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 42 and event "bridgedeck.button_close.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge42() {
        var guard = (spec.bridgedeck_button_close_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(60, true);
        if (this.doInfoEvent) this.infoEvent(60, true);

        spec.bridgedeck_button_close_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(60, false);
        if (this.doInfoPrintOutput) this.printOutput(60, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 43 and event "bridgedeck.button_close.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge43() {
        var guard = (spec.bridgedeck_button_close_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(61, true);
        if (this.doInfoEvent) this.infoEvent(61, true);

        spec.bridgedeck_button_close_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(61, false);
        if (this.doInfoPrintOutput) this.printOutput(61, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 44 and event "bridgedeck.button_open.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge44() {
        var guard = (spec.bridgedeck_button_open_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(62, true);
        if (this.doInfoEvent) this.infoEvent(62, true);

        spec.bridgedeck_button_open_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(62, false);
        if (this.doInfoPrintOutput) this.printOutput(62, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 45 and event "bridgedeck.button_open.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge45() {
        var guard = (spec.bridgedeck_button_open_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(63, true);
        if (this.doInfoEvent) this.infoEvent(63, true);

        spec.bridgedeck_button_open_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(63, false);
        if (this.doInfoPrintOutput) this.printOutput(63, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 46 and event "bridgedeck.button_stop.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge46() {
        var guard = (spec.bridgedeck_button_stop_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(64, true);
        if (this.doInfoEvent) this.infoEvent(64, true);

        spec.bridgedeck_button_stop_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(64, false);
        if (this.doInfoPrintOutput) this.printOutput(64, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 47 and event "bridgedeck.button_stop.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge47() {
        var guard = (spec.bridgedeck_button_stop_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(65, true);
        if (this.doInfoEvent) this.infoEvent(65, true);

        spec.bridgedeck_button_stop_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(65, false);
        if (this.doInfoPrintOutput) this.printOutput(65, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 48 and event "bridgedeck.u_closed_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge48() {
        var guard = (!(!(spec.bridgedeck_f_bridge_())) || ((spec.bridgedeck_A_) == (spec.specEnum._opening))) && ((spec.bridgedeck_S_) == (spec.specEnum._closed));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(69, true);
        if (this.doInfoEvent) this.infoEvent(69, true);

        spec.bridgedeck_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(69, false);
        if (this.doInfoPrintOutput) this.printOutput(69, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 49 and event "bridgedeck.u_closed_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge49() {
        var guard = (!(!(spec.bridgedeck_f_bridge_())) || ((spec.bridgedeck_A_) == (spec.specEnum._closing))) && ((!(spec.bridgedeck_f_bridge_()) || ((spec.bridgedeck_A_) == (spec.specEnum._closing))) && ((spec.bridgedeck_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(70, true);
        if (this.doInfoEvent) this.infoEvent(70, true);

        spec.bridgedeck_S_ = spec.specEnum._closed;

        if (this.doInfoEvent) this.infoEvent(70, false);
        if (this.doInfoPrintOutput) this.printOutput(70, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 50 and event "bridgedeck.u_open_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge50() {
        var guard = (!(!(spec.bridgedeck_f_bridge_())) || ((spec.bridgedeck_A_) == (spec.specEnum._closing))) && ((!(spec.bridgedeck_f_bridge_()) || ((spec.bridgedeck_A_) == (spec.specEnum._closing))) && ((spec.bridgedeck_S_) == (spec.specEnum._up)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(71, true);
        if (this.doInfoEvent) this.infoEvent(71, true);

        spec.bridgedeck_S_ = spec.specEnum._between;

        if (this.doInfoEvent) this.infoEvent(71, false);
        if (this.doInfoPrintOutput) this.printOutput(71, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 51 and event "bridgedeck.u_open_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge51() {
        var guard = (!(!(spec.bridgedeck_f_bridge_())) || ((spec.bridgedeck_A_) == (spec.specEnum._opening))) && ((!(spec.bridgedeck_f_bridge_()) || ((spec.bridgedeck_A_) == (spec.specEnum._opening))) && ((spec.bridgedeck_S_) == (spec.specEnum._between)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(72, true);
        if (this.doInfoEvent) this.infoEvent(72, true);

        spec.bridgedeck_S_ = spec.specEnum._up;

        if (this.doInfoEvent) this.infoEvent(72, false);
        if (this.doInfoPrintOutput) this.printOutput(72, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 52 and event "FTC.D.f1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge52() {

        if (this.doInfoPrintOutput) this.printOutput(73, true);
        if (this.doInfoEvent) this.infoEvent(73, true);

        spec.FTC_D_ps1_f_ = true;

        if (this.doInfoEvent) this.infoEvent(73, false);
        if (this.doInfoPrintOutput) this.printOutput(73, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 53 and event "FTC.D.f10".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge53() {

        if (this.doInfoPrintOutput) this.printOutput(74, true);
        if (this.doInfoEvent) this.infoEvent(74, true);

        spec.FTC_D_s4_f_ = true;

        if (this.doInfoEvent) this.infoEvent(74, false);
        if (this.doInfoPrintOutput) this.printOutput(74, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 54 and event "FTC.D.f11".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge54() {

        if (this.doInfoPrintOutput) this.printOutput(75, true);
        if (this.doInfoEvent) this.infoEvent(75, true);

        spec.FTC_D_s5_f_ = true;

        if (this.doInfoEvent) this.infoEvent(75, false);
        if (this.doInfoPrintOutput) this.printOutput(75, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 55 and event "FTC.D.f12".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge55() {

        if (this.doInfoPrintOutput) this.printOutput(76, true);
        if (this.doInfoEvent) this.infoEvent(76, true);

        spec.FTC_D_s6_f_ = true;

        if (this.doInfoEvent) this.infoEvent(76, false);
        if (this.doInfoPrintOutput) this.printOutput(76, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 56 and event "FTC.D.f13".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge56() {

        if (this.doInfoPrintOutput) this.printOutput(77, true);
        if (this.doInfoEvent) this.infoEvent(77, true);

        spec.FTC_D_s7_f_ = true;

        if (this.doInfoEvent) this.infoEvent(77, false);
        if (this.doInfoPrintOutput) this.printOutput(77, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 57 and event "FTC.D.f14".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge57() {

        if (this.doInfoPrintOutput) this.printOutput(78, true);
        if (this.doInfoEvent) this.infoEvent(78, true);

        spec.FTC_D_s8_f_ = true;

        if (this.doInfoEvent) this.infoEvent(78, false);
        if (this.doInfoPrintOutput) this.printOutput(78, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 58 and event "FTC.D.f15".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge58() {

        if (this.doInfoPrintOutput) this.printOutput(79, true);
        if (this.doInfoEvent) this.infoEvent(79, true);

        spec.FTC_D_bar1_f_ = true;

        if (this.doInfoEvent) this.infoEvent(79, false);
        if (this.doInfoPrintOutput) this.printOutput(79, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 59 and event "FTC.D.f16".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge59() {

        if (this.doInfoPrintOutput) this.printOutput(80, true);
        if (this.doInfoEvent) this.infoEvent(80, true);

        spec.FTC_D_bar4_f_ = true;

        if (this.doInfoEvent) this.infoEvent(80, false);
        if (this.doInfoPrintOutput) this.printOutput(80, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 60 and event "FTC.D.f17".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge60() {

        if (this.doInfoPrintOutput) this.printOutput(81, true);
        if (this.doInfoEvent) this.infoEvent(81, true);

        spec.FTC_D_bar3_f_ = true;

        if (this.doInfoEvent) this.infoEvent(81, false);
        if (this.doInfoPrintOutput) this.printOutput(81, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 61 and event "FTC.D.f18".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge61() {

        if (this.doInfoPrintOutput) this.printOutput(82, true);
        if (this.doInfoEvent) this.infoEvent(82, true);

        spec.FTC_D_bar2_f_ = true;

        if (this.doInfoEvent) this.infoEvent(82, false);
        if (this.doInfoPrintOutput) this.printOutput(82, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 62 and event "FTC.D.f19".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge62() {

        if (this.doInfoPrintOutput) this.printOutput(83, true);
        if (this.doInfoEvent) this.infoEvent(83, true);

        spec.FTC_D_bar5_f_ = true;

        if (this.doInfoEvent) this.infoEvent(83, false);
        if (this.doInfoPrintOutput) this.printOutput(83, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 63 and event "FTC.D.f2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge63() {

        if (this.doInfoPrintOutput) this.printOutput(84, true);
        if (this.doInfoEvent) this.infoEvent(84, true);

        spec.FTC_D_ps2_f_ = true;

        if (this.doInfoEvent) this.infoEvent(84, false);
        if (this.doInfoPrintOutput) this.printOutput(84, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 64 and event "FTC.D.f20".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge64() {

        if (this.doInfoPrintOutput) this.printOutput(85, true);
        if (this.doInfoEvent) this.infoEvent(85, true);

        spec.FTC_D_bar6_f_ = true;

        if (this.doInfoEvent) this.infoEvent(85, false);
        if (this.doInfoPrintOutput) this.printOutput(85, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 65 and event "FTC.D.f25".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge65() {

        if (this.doInfoPrintOutput) this.printOutput(86, true);
        if (this.doInfoEvent) this.infoEvent(86, true);

        spec.FTC_D_bridge_f_ = true;

        if (this.doInfoEvent) this.infoEvent(86, false);
        if (this.doInfoPrintOutput) this.printOutput(86, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 66 and event "FTC.D.f3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge66() {

        if (this.doInfoPrintOutput) this.printOutput(87, true);
        if (this.doInfoEvent) this.infoEvent(87, true);

        spec.FTC_D_ps3_f_ = true;

        if (this.doInfoEvent) this.infoEvent(87, false);
        if (this.doInfoPrintOutput) this.printOutput(87, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 67 and event "FTC.D.f4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge67() {

        if (this.doInfoPrintOutput) this.printOutput(88, true);
        if (this.doInfoEvent) this.infoEvent(88, true);

        spec.FTC_D_ps4_f_ = true;

        if (this.doInfoEvent) this.infoEvent(88, false);
        if (this.doInfoPrintOutput) this.printOutput(88, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 68 and event "FTC.D.f5".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge68() {

        if (this.doInfoPrintOutput) this.printOutput(89, true);
        if (this.doInfoEvent) this.infoEvent(89, true);

        spec.FTC_D_ps5_f_ = true;

        if (this.doInfoEvent) this.infoEvent(89, false);
        if (this.doInfoPrintOutput) this.printOutput(89, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 69 and event "FTC.D.f6".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge69() {

        if (this.doInfoPrintOutput) this.printOutput(90, true);
        if (this.doInfoEvent) this.infoEvent(90, true);

        spec.FTC_D_ps6_f_ = true;

        if (this.doInfoEvent) this.infoEvent(90, false);
        if (this.doInfoPrintOutput) this.printOutput(90, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 70 and event "FTC.D.f7".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge70() {

        if (this.doInfoPrintOutput) this.printOutput(91, true);
        if (this.doInfoEvent) this.infoEvent(91, true);

        spec.FTC_D_s1_f_ = true;

        if (this.doInfoEvent) this.infoEvent(91, false);
        if (this.doInfoPrintOutput) this.printOutput(91, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 71 and event "FTC.D.f8".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge71() {

        if (this.doInfoPrintOutput) this.printOutput(92, true);
        if (this.doInfoEvent) this.infoEvent(92, true);

        spec.FTC_D_s2_f_ = true;

        if (this.doInfoEvent) this.infoEvent(92, false);
        if (this.doInfoPrintOutput) this.printOutput(92, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 72 and event "FTC.D.f9".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge72() {

        if (this.doInfoPrintOutput) this.printOutput(93, true);
        if (this.doInfoEvent) this.infoEvent(93, true);

        spec.FTC_D_s3_f_ = true;

        if (this.doInfoEvent) this.infoEvent(93, false);
        if (this.doInfoPrintOutput) this.printOutput(93, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 73 and event "FTC.D.r15".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge73() {

        if (this.doInfoPrintOutput) this.printOutput(94, true);
        if (this.doInfoEvent) this.infoEvent(94, true);

        spec.FTC_D_bar1_f_ = false;

        if (this.doInfoEvent) this.infoEvent(94, false);
        if (this.doInfoPrintOutput) this.printOutput(94, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 74 and event "FTC.D.r16".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge74() {

        if (this.doInfoPrintOutput) this.printOutput(95, true);
        if (this.doInfoEvent) this.infoEvent(95, true);

        spec.FTC_D_bar4_f_ = false;

        if (this.doInfoEvent) this.infoEvent(95, false);
        if (this.doInfoPrintOutput) this.printOutput(95, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 75 and event "FTC.D.r17".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge75() {

        if (this.doInfoPrintOutput) this.printOutput(96, true);
        if (this.doInfoEvent) this.infoEvent(96, true);

        spec.FTC_D_bar3_f_ = false;

        if (this.doInfoEvent) this.infoEvent(96, false);
        if (this.doInfoPrintOutput) this.printOutput(96, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 76 and event "FTC.D.r18".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge76() {

        if (this.doInfoPrintOutput) this.printOutput(97, true);
        if (this.doInfoEvent) this.infoEvent(97, true);

        spec.FTC_D_bar2_f_ = false;

        if (this.doInfoEvent) this.infoEvent(97, false);
        if (this.doInfoPrintOutput) this.printOutput(97, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 77 and event "FTC.D.r19".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge77() {

        if (this.doInfoPrintOutput) this.printOutput(98, true);
        if (this.doInfoEvent) this.infoEvent(98, true);

        spec.FTC_D_bar5_f_ = false;

        if (this.doInfoEvent) this.infoEvent(98, false);
        if (this.doInfoPrintOutput) this.printOutput(98, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 78 and event "FTC.D.r20".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge78() {

        if (this.doInfoPrintOutput) this.printOutput(99, true);
        if (this.doInfoEvent) this.infoEvent(99, true);

        spec.FTC_D_bar6_f_ = false;

        if (this.doInfoEvent) this.infoEvent(99, false);
        if (this.doInfoPrintOutput) this.printOutput(99, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 79 and event "LTS.button_on.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge79() {
        var guard = (spec.LTS_button_on_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(100, true);
        if (this.doInfoEvent) this.infoEvent(100, true);

        spec.LTS_button_on_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(100, false);
        if (this.doInfoPrintOutput) this.printOutput(100, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 80 and event "LTS.button_on.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge80() {
        var guard = (spec.LTS_button_on_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(101, true);
        if (this.doInfoEvent) this.infoEvent(101, true);

        spec.LTS_button_on_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(101, false);
        if (this.doInfoPrintOutput) this.printOutput(101, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 81 and event "LTS.presigns.ps1.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge81() {
        var guard = (!(!(spec.LTS_presigns_ps1_f_())) || ((spec.LTS_presigns_ps1_A_) == (spec.specEnum._off))) && ((spec.LTS_presigns_ps1_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(104, true);
        if (this.doInfoEvent) this.infoEvent(104, true);

        spec.LTS_presigns_ps1_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(104, false);
        if (this.doInfoPrintOutput) this.printOutput(104, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 82 and event "LTS.presigns.ps1.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge82() {
        var guard = (!(!(spec.LTS_presigns_ps1_f_())) || ((spec.LTS_presigns_ps1_A_) == (spec.specEnum._on))) && ((!(spec.LTS_presigns_ps1_f_())) && ((spec.LTS_presigns_ps1_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(105, true);
        if (this.doInfoEvent) this.infoEvent(105, true);

        spec.LTS_presigns_ps1_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(105, false);
        if (this.doInfoPrintOutput) this.printOutput(105, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 83 and event "LTS.presigns.ps2.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge83() {
        var guard = (!(!(spec.LTS_presigns_ps2_f_())) || ((spec.LTS_presigns_ps2_A_) == (spec.specEnum._off))) && ((spec.LTS_presigns_ps2_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(108, true);
        if (this.doInfoEvent) this.infoEvent(108, true);

        spec.LTS_presigns_ps2_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(108, false);
        if (this.doInfoPrintOutput) this.printOutput(108, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 84 and event "LTS.presigns.ps2.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge84() {
        var guard = (!(!(spec.LTS_presigns_ps2_f_())) || ((spec.LTS_presigns_ps2_A_) == (spec.specEnum._on))) && ((!(spec.LTS_presigns_ps2_f_())) && ((spec.LTS_presigns_ps2_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(109, true);
        if (this.doInfoEvent) this.infoEvent(109, true);

        spec.LTS_presigns_ps2_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(109, false);
        if (this.doInfoPrintOutput) this.printOutput(109, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 85 and event "LTS.presigns.ps3.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge85() {
        var guard = (!(!(spec.LTS_presigns_ps3_f_())) || ((spec.LTS_presigns_ps3_A_) == (spec.specEnum._off))) && ((spec.LTS_presigns_ps3_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(112, true);
        if (this.doInfoEvent) this.infoEvent(112, true);

        spec.LTS_presigns_ps3_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(112, false);
        if (this.doInfoPrintOutput) this.printOutput(112, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 86 and event "LTS.presigns.ps3.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge86() {
        var guard = (!(!(spec.LTS_presigns_ps3_f_())) || ((spec.LTS_presigns_ps3_A_) == (spec.specEnum._on))) && ((!(spec.LTS_presigns_ps3_f_())) && ((spec.LTS_presigns_ps3_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(113, true);
        if (this.doInfoEvent) this.infoEvent(113, true);

        spec.LTS_presigns_ps3_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(113, false);
        if (this.doInfoPrintOutput) this.printOutput(113, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 87 and event "LTS.presigns.ps4.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge87() {
        var guard = (!(!(spec.LTS_presigns_ps4_f_())) || ((spec.LTS_presigns_ps4_A_) == (spec.specEnum._off))) && ((spec.LTS_presigns_ps4_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(116, true);
        if (this.doInfoEvent) this.infoEvent(116, true);

        spec.LTS_presigns_ps4_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(116, false);
        if (this.doInfoPrintOutput) this.printOutput(116, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 88 and event "LTS.presigns.ps4.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge88() {
        var guard = (!(!(spec.LTS_presigns_ps4_f_())) || ((spec.LTS_presigns_ps4_A_) == (spec.specEnum._on))) && ((!(spec.LTS_presigns_ps4_f_())) && ((spec.LTS_presigns_ps4_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(117, true);
        if (this.doInfoEvent) this.infoEvent(117, true);

        spec.LTS_presigns_ps4_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(117, false);
        if (this.doInfoPrintOutput) this.printOutput(117, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 89 and event "LTS.presigns.ps5.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge89() {
        var guard = (!(!(spec.LTS_presigns_ps5_f_())) || ((spec.LTS_presigns_ps5_A_) == (spec.specEnum._off))) && ((spec.LTS_presigns_ps5_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(120, true);
        if (this.doInfoEvent) this.infoEvent(120, true);

        spec.LTS_presigns_ps5_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(120, false);
        if (this.doInfoPrintOutput) this.printOutput(120, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 90 and event "LTS.presigns.ps5.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge90() {
        var guard = (!(!(spec.LTS_presigns_ps5_f_())) || ((spec.LTS_presigns_ps5_A_) == (spec.specEnum._on))) && ((!(spec.LTS_presigns_ps5_f_())) && ((spec.LTS_presigns_ps5_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(121, true);
        if (this.doInfoEvent) this.infoEvent(121, true);

        spec.LTS_presigns_ps5_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(121, false);
        if (this.doInfoPrintOutput) this.printOutput(121, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 91 and event "LTS.presigns.ps6.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge91() {
        var guard = (!(!(spec.LTS_presigns_ps6_f_())) || ((spec.LTS_presigns_ps6_A_) == (spec.specEnum._off))) && ((spec.LTS_presigns_ps6_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(124, true);
        if (this.doInfoEvent) this.infoEvent(124, true);

        spec.LTS_presigns_ps6_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(124, false);
        if (this.doInfoPrintOutput) this.printOutput(124, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 92 and event "LTS.presigns.ps6.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge92() {
        var guard = (!(!(spec.LTS_presigns_ps6_f_())) || ((spec.LTS_presigns_ps6_A_) == (spec.specEnum._on))) && ((!(spec.LTS_presigns_ps6_f_())) && ((spec.LTS_presigns_ps6_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(125, true);
        if (this.doInfoEvent) this.infoEvent(125, true);

        spec.LTS_presigns_ps6_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(125, false);
        if (this.doInfoPrintOutput) this.printOutput(125, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 93 and event "LTS.stopsigns.stop1.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge93() {
        var guard = (!(!(spec.LTS_stopsigns_stop1_f_())) || ((spec.LTS_stopsigns_stop1_A_) == (spec.specEnum._off))) && ((spec.LTS_stopsigns_stop1_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(128, true);
        if (this.doInfoEvent) this.infoEvent(128, true);

        spec.LTS_stopsigns_stop1_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(128, false);
        if (this.doInfoPrintOutput) this.printOutput(128, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 94 and event "LTS.stopsigns.stop1.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge94() {
        var guard = (!(!(spec.LTS_stopsigns_stop1_f_())) || ((spec.LTS_stopsigns_stop1_A_) == (spec.specEnum._on))) && ((!(spec.LTS_stopsigns_stop1_f_())) && ((spec.LTS_stopsigns_stop1_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(129, true);
        if (this.doInfoEvent) this.infoEvent(129, true);

        spec.LTS_stopsigns_stop1_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(129, false);
        if (this.doInfoPrintOutput) this.printOutput(129, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 95 and event "LTS.stopsigns.stop2.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge95() {
        var guard = (!(!(spec.LTS_stopsigns_stop2_f_())) || ((spec.LTS_stopsigns_stop2_A_) == (spec.specEnum._off))) && ((spec.LTS_stopsigns_stop2_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(132, true);
        if (this.doInfoEvent) this.infoEvent(132, true);

        spec.LTS_stopsigns_stop2_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(132, false);
        if (this.doInfoPrintOutput) this.printOutput(132, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 96 and event "LTS.stopsigns.stop2.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge96() {
        var guard = (!(!(spec.LTS_stopsigns_stop2_f_())) || ((spec.LTS_stopsigns_stop2_A_) == (spec.specEnum._on))) && ((!(spec.LTS_stopsigns_stop2_f_())) && ((spec.LTS_stopsigns_stop2_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(133, true);
        if (this.doInfoEvent) this.infoEvent(133, true);

        spec.LTS_stopsigns_stop2_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(133, false);
        if (this.doInfoPrintOutput) this.printOutput(133, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 97 and event "LTS.stopsigns.stop3.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge97() {
        var guard = (!(!(spec.LTS_stopsigns_stop3_f_())) || ((spec.LTS_stopsigns_stop3_A_) == (spec.specEnum._off))) && ((spec.LTS_stopsigns_stop3_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(136, true);
        if (this.doInfoEvent) this.infoEvent(136, true);

        spec.LTS_stopsigns_stop3_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(136, false);
        if (this.doInfoPrintOutput) this.printOutput(136, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 98 and event "LTS.stopsigns.stop3.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge98() {
        var guard = (!(!(spec.LTS_stopsigns_stop3_f_())) || ((spec.LTS_stopsigns_stop3_A_) == (spec.specEnum._on))) && ((!(spec.LTS_stopsigns_stop3_f_())) && ((spec.LTS_stopsigns_stop3_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(137, true);
        if (this.doInfoEvent) this.infoEvent(137, true);

        spec.LTS_stopsigns_stop3_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(137, false);
        if (this.doInfoPrintOutput) this.printOutput(137, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 99 and event "LTS.stopsigns.stop4.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge99() {
        var guard = (!(!(spec.LTS_stopsigns_stop4_f_())) || ((spec.LTS_stopsigns_stop4_A_) == (spec.specEnum._off))) && ((spec.LTS_stopsigns_stop4_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(140, true);
        if (this.doInfoEvent) this.infoEvent(140, true);

        spec.LTS_stopsigns_stop4_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(140, false);
        if (this.doInfoPrintOutput) this.printOutput(140, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 100 and event "LTS.stopsigns.stop4.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge100() {
        var guard = (!(!(spec.LTS_stopsigns_stop4_f_())) || ((spec.LTS_stopsigns_stop4_A_) == (spec.specEnum._on))) && ((!(spec.LTS_stopsigns_stop4_f_())) && ((spec.LTS_stopsigns_stop4_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(141, true);
        if (this.doInfoEvent) this.infoEvent(141, true);

        spec.LTS_stopsigns_stop4_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(141, false);
        if (this.doInfoPrintOutput) this.printOutput(141, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 101 and event "LTS.stopsigns.stop5.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge101() {
        var guard = (!(!(spec.LTS_stopsigns_stop5_f_())) || ((spec.LTS_stopsigns_stop5_A_) == (spec.specEnum._off))) && ((spec.LTS_stopsigns_stop5_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(144, true);
        if (this.doInfoEvent) this.infoEvent(144, true);

        spec.LTS_stopsigns_stop5_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(144, false);
        if (this.doInfoPrintOutput) this.printOutput(144, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 102 and event "LTS.stopsigns.stop5.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge102() {
        var guard = (!(!(spec.LTS_stopsigns_stop5_f_())) || ((spec.LTS_stopsigns_stop5_A_) == (spec.specEnum._on))) && ((!(spec.LTS_stopsigns_stop5_f_())) && ((spec.LTS_stopsigns_stop5_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(145, true);
        if (this.doInfoEvent) this.infoEvent(145, true);

        spec.LTS_stopsigns_stop5_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(145, false);
        if (this.doInfoPrintOutput) this.printOutput(145, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 103 and event "LTS.stopsigns.stop6.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge103() {
        var guard = (!(!(spec.LTS_stopsigns_stop6_f_())) || ((spec.LTS_stopsigns_stop6_A_) == (spec.specEnum._off))) && ((spec.LTS_stopsigns_stop6_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(148, true);
        if (this.doInfoEvent) this.infoEvent(148, true);

        spec.LTS_stopsigns_stop6_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(148, false);
        if (this.doInfoPrintOutput) this.printOutput(148, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 104 and event "LTS.stopsigns.stop6.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge104() {
        var guard = (!(!(spec.LTS_stopsigns_stop6_f_())) || ((spec.LTS_stopsigns_stop6_A_) == (spec.specEnum._on))) && ((!(spec.LTS_stopsigns_stop6_f_())) && ((spec.LTS_stopsigns_stop6_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(149, true);
        if (this.doInfoEvent) this.infoEvent(149, true);

        spec.LTS_stopsigns_stop6_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(149, false);
        if (this.doInfoPrintOutput) this.printOutput(149, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 105 and event "LTS.stopsigns.stop7.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge105() {
        var guard = (!(!(spec.LTS_stopsigns_stop7_f_())) || ((spec.LTS_stopsigns_stop7_A_) == (spec.specEnum._off))) && ((spec.LTS_stopsigns_stop7_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(152, true);
        if (this.doInfoEvent) this.infoEvent(152, true);

        spec.LTS_stopsigns_stop7_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(152, false);
        if (this.doInfoPrintOutput) this.printOutput(152, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 106 and event "LTS.stopsigns.stop7.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge106() {
        var guard = (!(!(spec.LTS_stopsigns_stop7_f_())) || ((spec.LTS_stopsigns_stop7_A_) == (spec.specEnum._on))) && ((!(spec.LTS_stopsigns_stop7_f_())) && ((spec.LTS_stopsigns_stop7_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(153, true);
        if (this.doInfoEvent) this.infoEvent(153, true);

        spec.LTS_stopsigns_stop7_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(153, false);
        if (this.doInfoPrintOutput) this.printOutput(153, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 107 and event "LTS.stopsigns.stop8.u_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge107() {
        var guard = (!(!(spec.LTS_stopsigns_stop8_f_())) || ((spec.LTS_stopsigns_stop8_A_) == (spec.specEnum._off))) && ((spec.LTS_stopsigns_stop8_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(156, true);
        if (this.doInfoEvent) this.infoEvent(156, true);

        spec.LTS_stopsigns_stop8_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(156, false);
        if (this.doInfoPrintOutput) this.printOutput(156, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 108 and event "LTS.stopsigns.stop8.u_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge108() {
        var guard = (!(!(spec.LTS_stopsigns_stop8_f_())) || ((spec.LTS_stopsigns_stop8_A_) == (spec.specEnum._on))) && ((!(spec.LTS_stopsigns_stop8_f_())) && ((spec.LTS_stopsigns_stop8_S_) == (spec.specEnum._off)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(157, true);
        if (this.doInfoEvent) this.infoEvent(157, true);

        spec.LTS_stopsigns_stop8_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(157, false);
        if (this.doInfoPrintOutput) this.printOutput(157, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 109 and event "shipping_signs.downstream.button_green.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge109() {
        var guard = (spec.shipping_signs_downstream_button_green_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(158, true);
        if (this.doInfoEvent) this.infoEvent(158, true);

        spec.shipping_signs_downstream_button_green_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(158, false);
        if (this.doInfoPrintOutput) this.printOutput(158, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 110 and event "shipping_signs.downstream.button_green.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge110() {
        var guard = (spec.shipping_signs_downstream_button_green_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(159, true);
        if (this.doInfoEvent) this.infoEvent(159, true);

        spec.shipping_signs_downstream_button_green_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(159, false);
        if (this.doInfoPrintOutput) this.printOutput(159, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 111 and event "shipping_signs.downstream.button_red.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge111() {
        var guard = (spec.shipping_signs_downstream_button_red_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(160, true);
        if (this.doInfoEvent) this.infoEvent(160, true);

        spec.shipping_signs_downstream_button_red_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(160, false);
        if (this.doInfoPrintOutput) this.printOutput(160, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 112 and event "shipping_signs.downstream.button_red.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge112() {
        var guard = (spec.shipping_signs_downstream_button_red_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(161, true);
        if (this.doInfoEvent) this.infoEvent(161, true);

        spec.shipping_signs_downstream_button_red_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(161, false);
        if (this.doInfoPrintOutput) this.printOutput(161, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 113 and event "shipping_signs.downstream.button_redgreen.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge113() {
        var guard = (spec.shipping_signs_downstream_button_redgreen_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(162, true);
        if (this.doInfoEvent) this.infoEvent(162, true);

        spec.shipping_signs_downstream_button_redgreen_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(162, false);
        if (this.doInfoPrintOutput) this.printOutput(162, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 114 and event "shipping_signs.downstream.button_redgreen.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge114() {
        var guard = (spec.shipping_signs_downstream_button_redgreen_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(163, true);
        if (this.doInfoEvent) this.infoEvent(163, true);

        spec.shipping_signs_downstream_button_redgreen_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(163, false);
        if (this.doInfoPrintOutput) this.printOutput(163, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 115 and event "shipping_signs.downstream.button_redred.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge115() {
        var guard = (spec.shipping_signs_downstream_button_redred_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(164, true);
        if (this.doInfoEvent) this.infoEvent(164, true);

        spec.shipping_signs_downstream_button_redred_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(164, false);
        if (this.doInfoPrintOutput) this.printOutput(164, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 116 and event "shipping_signs.downstream.button_redred.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge116() {
        var guard = (spec.shipping_signs_downstream_button_redred_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(165, true);
        if (this.doInfoEvent) this.infoEvent(165, true);

        spec.shipping_signs_downstream_button_redred_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(165, false);
        if (this.doInfoPrintOutput) this.printOutput(165, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 117 and event "shipping_signs.downstream.N.u_green_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge117() {
        var guard = (((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._red)) || ((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._redred))) && ((spec.shipping_signs_downstream_N_S_G_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(170, true);
        if (this.doInfoEvent) this.infoEvent(170, true);

        spec.shipping_signs_downstream_N_S_G_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(170, false);
        if (this.doInfoPrintOutput) this.printOutput(170, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 118 and event "shipping_signs.downstream.N.u_green_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge118() {
        var guard = (((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._green)) || ((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._redgreen))) && ((spec.shipping_signs_downstream_N_S_G_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(171, true);
        if (this.doInfoEvent) this.infoEvent(171, true);

        spec.shipping_signs_downstream_N_S_G_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(171, false);
        if (this.doInfoPrintOutput) this.printOutput(171, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 119 and event "shipping_signs.downstream.N.u_red2_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge119() {
        var guard = (((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._red)) || (((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._redgreen)) || ((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._green)))) && ((spec.shipping_signs_downstream_N_S_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(172, true);
        if (this.doInfoEvent) this.infoEvent(172, true);

        spec.shipping_signs_downstream_N_S_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(172, false);
        if (this.doInfoPrintOutput) this.printOutput(172, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 120 and event "shipping_signs.downstream.N.u_red2_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge120() {
        var guard = ((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._redred)) && ((spec.shipping_signs_downstream_N_S_S_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(173, true);
        if (this.doInfoEvent) this.infoEvent(173, true);

        spec.shipping_signs_downstream_N_S_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(173, false);
        if (this.doInfoPrintOutput) this.printOutput(173, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 121 and event "shipping_signs.downstream.N.u_red_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge121() {
        var guard = ((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._green)) && ((spec.shipping_signs_downstream_N_S_R_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(174, true);
        if (this.doInfoEvent) this.infoEvent(174, true);

        spec.shipping_signs_downstream_N_S_R_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(174, false);
        if (this.doInfoPrintOutput) this.printOutput(174, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 122 and event "shipping_signs.downstream.N.u_red_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge122() {
        var guard = (((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._red)) || (((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._redgreen)) || ((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._redred)))) && ((spec.shipping_signs_downstream_N_S_R_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(175, true);
        if (this.doInfoEvent) this.infoEvent(175, true);

        spec.shipping_signs_downstream_N_S_R_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(175, false);
        if (this.doInfoPrintOutput) this.printOutput(175, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 123 and event "shipping_signs.downstream.S.u_green_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge123() {
        var guard = (((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._red)) || ((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._redred))) && ((spec.shipping_signs_downstream_S_S_G_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(180, true);
        if (this.doInfoEvent) this.infoEvent(180, true);

        spec.shipping_signs_downstream_S_S_G_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(180, false);
        if (this.doInfoPrintOutput) this.printOutput(180, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 124 and event "shipping_signs.downstream.S.u_green_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge124() {
        var guard = (((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._green)) || ((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._redgreen))) && ((spec.shipping_signs_downstream_S_S_G_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(181, true);
        if (this.doInfoEvent) this.infoEvent(181, true);

        spec.shipping_signs_downstream_S_S_G_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(181, false);
        if (this.doInfoPrintOutput) this.printOutput(181, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 125 and event "shipping_signs.downstream.S.u_red2_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge125() {
        var guard = (((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._red)) || (((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._redgreen)) || ((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._green)))) && ((spec.shipping_signs_downstream_S_S_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(182, true);
        if (this.doInfoEvent) this.infoEvent(182, true);

        spec.shipping_signs_downstream_S_S_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(182, false);
        if (this.doInfoPrintOutput) this.printOutput(182, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 126 and event "shipping_signs.downstream.S.u_red2_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge126() {
        var guard = ((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._redred)) && ((spec.shipping_signs_downstream_S_S_S_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(183, true);
        if (this.doInfoEvent) this.infoEvent(183, true);

        spec.shipping_signs_downstream_S_S_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(183, false);
        if (this.doInfoPrintOutput) this.printOutput(183, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 127 and event "shipping_signs.downstream.S.u_red_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge127() {
        var guard = ((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._green)) && ((spec.shipping_signs_downstream_S_S_R_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(184, true);
        if (this.doInfoEvent) this.infoEvent(184, true);

        spec.shipping_signs_downstream_S_S_R_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(184, false);
        if (this.doInfoPrintOutput) this.printOutput(184, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 128 and event "shipping_signs.downstream.S.u_red_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge128() {
        var guard = (((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._red)) || (((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._redgreen)) || ((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._redred)))) && ((spec.shipping_signs_downstream_S_S_R_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(185, true);
        if (this.doInfoEvent) this.infoEvent(185, true);

        spec.shipping_signs_downstream_S_S_R_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(185, false);
        if (this.doInfoPrintOutput) this.printOutput(185, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 129 and event "shipping_signs.upstream.button_green.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge129() {
        var guard = (spec.shipping_signs_upstream_button_green_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(186, true);
        if (this.doInfoEvent) this.infoEvent(186, true);

        spec.shipping_signs_upstream_button_green_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(186, false);
        if (this.doInfoPrintOutput) this.printOutput(186, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 130 and event "shipping_signs.upstream.button_green.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge130() {
        var guard = (spec.shipping_signs_upstream_button_green_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(187, true);
        if (this.doInfoEvent) this.infoEvent(187, true);

        spec.shipping_signs_upstream_button_green_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(187, false);
        if (this.doInfoPrintOutput) this.printOutput(187, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 131 and event "shipping_signs.upstream.button_red.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge131() {
        var guard = (spec.shipping_signs_upstream_button_red_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(188, true);
        if (this.doInfoEvent) this.infoEvent(188, true);

        spec.shipping_signs_upstream_button_red_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(188, false);
        if (this.doInfoPrintOutput) this.printOutput(188, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 132 and event "shipping_signs.upstream.button_red.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge132() {
        var guard = (spec.shipping_signs_upstream_button_red_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(189, true);
        if (this.doInfoEvent) this.infoEvent(189, true);

        spec.shipping_signs_upstream_button_red_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(189, false);
        if (this.doInfoPrintOutput) this.printOutput(189, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 133 and event "shipping_signs.upstream.button_redgreen.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge133() {
        var guard = (spec.shipping_signs_upstream_button_redgreen_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(190, true);
        if (this.doInfoEvent) this.infoEvent(190, true);

        spec.shipping_signs_upstream_button_redgreen_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(190, false);
        if (this.doInfoPrintOutput) this.printOutput(190, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 134 and event "shipping_signs.upstream.button_redgreen.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge134() {
        var guard = (spec.shipping_signs_upstream_button_redgreen_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(191, true);
        if (this.doInfoEvent) this.infoEvent(191, true);

        spec.shipping_signs_upstream_button_redgreen_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(191, false);
        if (this.doInfoPrintOutput) this.printOutput(191, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 135 and event "shipping_signs.upstream.button_redred.u_pushed".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge135() {
        var guard = (spec.shipping_signs_upstream_button_redred_) == (spec.specEnum._released);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(192, true);
        if (this.doInfoEvent) this.infoEvent(192, true);

        spec.shipping_signs_upstream_button_redred_ = spec.specEnum._pushed;

        if (this.doInfoEvent) this.infoEvent(192, false);
        if (this.doInfoPrintOutput) this.printOutput(192, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 136 and event "shipping_signs.upstream.button_redred.u_released".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge136() {
        var guard = (spec.shipping_signs_upstream_button_redred_) == (spec.specEnum._pushed);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(193, true);
        if (this.doInfoEvent) this.infoEvent(193, true);

        spec.shipping_signs_upstream_button_redred_ = spec.specEnum._released;

        if (this.doInfoEvent) this.infoEvent(193, false);
        if (this.doInfoPrintOutput) this.printOutput(193, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 137 and event "shipping_signs.upstream.N.u_green_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge137() {
        var guard = (((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._red)) || ((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._redred))) && ((spec.shipping_signs_upstream_N_S_G_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(198, true);
        if (this.doInfoEvent) this.infoEvent(198, true);

        spec.shipping_signs_upstream_N_S_G_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(198, false);
        if (this.doInfoPrintOutput) this.printOutput(198, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 138 and event "shipping_signs.upstream.N.u_green_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge138() {
        var guard = (((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._green)) || ((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._redgreen))) && ((spec.shipping_signs_upstream_N_S_G_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(199, true);
        if (this.doInfoEvent) this.infoEvent(199, true);

        spec.shipping_signs_upstream_N_S_G_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(199, false);
        if (this.doInfoPrintOutput) this.printOutput(199, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 139 and event "shipping_signs.upstream.N.u_red2_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge139() {
        var guard = (((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._red)) || (((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._redgreen)) || ((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._green)))) && ((spec.shipping_signs_upstream_N_S_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(200, true);
        if (this.doInfoEvent) this.infoEvent(200, true);

        spec.shipping_signs_upstream_N_S_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(200, false);
        if (this.doInfoPrintOutput) this.printOutput(200, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 140 and event "shipping_signs.upstream.N.u_red2_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge140() {
        var guard = ((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._redred)) && ((spec.shipping_signs_upstream_N_S_S_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(201, true);
        if (this.doInfoEvent) this.infoEvent(201, true);

        spec.shipping_signs_upstream_N_S_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(201, false);
        if (this.doInfoPrintOutput) this.printOutput(201, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 141 and event "shipping_signs.upstream.N.u_red_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge141() {
        var guard = ((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._green)) && ((spec.shipping_signs_upstream_N_S_R_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(202, true);
        if (this.doInfoEvent) this.infoEvent(202, true);

        spec.shipping_signs_upstream_N_S_R_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(202, false);
        if (this.doInfoPrintOutput) this.printOutput(202, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 142 and event "shipping_signs.upstream.N.u_red_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge142() {
        var guard = (((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._red)) || (((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._redgreen)) || ((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._redred)))) && ((spec.shipping_signs_upstream_N_S_R_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(203, true);
        if (this.doInfoEvent) this.infoEvent(203, true);

        spec.shipping_signs_upstream_N_S_R_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(203, false);
        if (this.doInfoPrintOutput) this.printOutput(203, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 143 and event "shipping_signs.upstream.S.u_green_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge143() {
        var guard = (((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._red)) || ((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._redred))) && ((spec.shipping_signs_upstream_S_S_G_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(208, true);
        if (this.doInfoEvent) this.infoEvent(208, true);

        spec.shipping_signs_upstream_S_S_G_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(208, false);
        if (this.doInfoPrintOutput) this.printOutput(208, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 144 and event "shipping_signs.upstream.S.u_green_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge144() {
        var guard = (((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._green)) || ((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._redgreen))) && ((spec.shipping_signs_upstream_S_S_G_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(209, true);
        if (this.doInfoEvent) this.infoEvent(209, true);

        spec.shipping_signs_upstream_S_S_G_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(209, false);
        if (this.doInfoPrintOutput) this.printOutput(209, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 145 and event "shipping_signs.upstream.S.u_red2_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge145() {
        var guard = (((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._red)) || (((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._redgreen)) || ((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._green)))) && ((spec.shipping_signs_upstream_S_S_S_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(210, true);
        if (this.doInfoEvent) this.infoEvent(210, true);

        spec.shipping_signs_upstream_S_S_S_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(210, false);
        if (this.doInfoPrintOutput) this.printOutput(210, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 146 and event "shipping_signs.upstream.S.u_red2_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge146() {
        var guard = ((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._redred)) && ((spec.shipping_signs_upstream_S_S_S_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(211, true);
        if (this.doInfoEvent) this.infoEvent(211, true);

        spec.shipping_signs_upstream_S_S_S_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(211, false);
        if (this.doInfoPrintOutput) this.printOutput(211, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 147 and event "shipping_signs.upstream.S.u_red_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge147() {
        var guard = ((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._green)) && ((spec.shipping_signs_upstream_S_S_R_) == (spec.specEnum._on));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(212, true);
        if (this.doInfoEvent) this.infoEvent(212, true);

        spec.shipping_signs_upstream_S_S_R_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(212, false);
        if (this.doInfoPrintOutput) this.printOutput(212, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 148 and event "shipping_signs.upstream.S.u_red_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge148() {
        var guard = (((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._red)) || (((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._redgreen)) || ((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._redred)))) && ((spec.shipping_signs_upstream_S_S_R_) == (spec.specEnum._off));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(213, true);
        if (this.doInfoEvent) this.infoEvent(213, true);

        spec.shipping_signs_upstream_S_S_R_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(213, false);
        if (this.doInfoPrintOutput) this.printOutput(213, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 149 and event "barriers.barrier1.c_close".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge149() {
        var guard = (spec.barriers_barrier1_A_) == (spec.specEnum._rest);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        spec.barriers_barrier1_A_ = spec.specEnum._closing;

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 150 and event "barriers.barrier1.c_open".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge150() {
        var guard = (spec.barriers_barrier1_A_) == (spec.specEnum._rest);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        spec.barriers_barrier1_A_ = spec.specEnum._opening;

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 151 and event "barriers.barrier1.c_stop".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge151() {
        var guard = ((spec.barriers_barrier1_A_) == (spec.specEnum._opening)) || ((spec.barriers_barrier1_A_) == (spec.specEnum._closing));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        if ((spec.barriers_barrier1_A_) == (spec.specEnum._opening)) {
            spec.barriers_barrier1_A_ = spec.specEnum._rest;
        } else if ((spec.barriers_barrier1_A_) == (spec.specEnum._closing)) {
            spec.barriers_barrier1_A_ = spec.specEnum._rest;
        }

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 152 and event "barriers.barrier2.c_close".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge152() {
        var guard = (spec.barriers_barrier2_A_) == (spec.specEnum._rest);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.barriers_barrier2_A_ = spec.specEnum._closing;

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 153 and event "barriers.barrier2.c_open".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge153() {
        var guard = (spec.barriers_barrier2_A_) == (spec.specEnum._rest);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.barriers_barrier2_A_ = spec.specEnum._opening;

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 154 and event "barriers.barrier2.c_stop".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge154() {
        var guard = ((spec.barriers_barrier2_A_) == (spec.specEnum._opening)) || ((spec.barriers_barrier2_A_) == (spec.specEnum._closing));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        if ((spec.barriers_barrier2_A_) == (spec.specEnum._opening)) {
            spec.barriers_barrier2_A_ = spec.specEnum._rest;
        } else if ((spec.barriers_barrier2_A_) == (spec.specEnum._closing)) {
            spec.barriers_barrier2_A_ = spec.specEnum._rest;
        }

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 155 and event "barriers.barrier3.c_close".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge155() {
        var guard = (spec.barriers_barrier3_A_) == (spec.specEnum._rest);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(14, true);
        if (this.doInfoEvent) this.infoEvent(14, true);

        spec.barriers_barrier3_A_ = spec.specEnum._closing;

        if (this.doInfoEvent) this.infoEvent(14, false);
        if (this.doInfoPrintOutput) this.printOutput(14, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 156 and event "barriers.barrier3.c_open".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge156() {
        var guard = (spec.barriers_barrier3_A_) == (spec.specEnum._rest);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(15, true);
        if (this.doInfoEvent) this.infoEvent(15, true);

        spec.barriers_barrier3_A_ = spec.specEnum._opening;

        if (this.doInfoEvent) this.infoEvent(15, false);
        if (this.doInfoPrintOutput) this.printOutput(15, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 157 and event "barriers.barrier3.c_stop".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge157() {
        var guard = ((spec.barriers_barrier3_A_) == (spec.specEnum._opening)) || ((spec.barriers_barrier3_A_) == (spec.specEnum._closing));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(16, true);
        if (this.doInfoEvent) this.infoEvent(16, true);

        if ((spec.barriers_barrier3_A_) == (spec.specEnum._opening)) {
            spec.barriers_barrier3_A_ = spec.specEnum._rest;
        } else if ((spec.barriers_barrier3_A_) == (spec.specEnum._closing)) {
            spec.barriers_barrier3_A_ = spec.specEnum._rest;
        }

        if (this.doInfoEvent) this.infoEvent(16, false);
        if (this.doInfoPrintOutput) this.printOutput(16, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 158 and event "barriers.barrier4.c_close".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge158() {
        var guard = (spec.barriers_barrier4_A_) == (spec.specEnum._rest);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(21, true);
        if (this.doInfoEvent) this.infoEvent(21, true);

        spec.barriers_barrier4_A_ = spec.specEnum._closing;

        if (this.doInfoEvent) this.infoEvent(21, false);
        if (this.doInfoPrintOutput) this.printOutput(21, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 159 and event "barriers.barrier4.c_open".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge159() {
        var guard = (spec.barriers_barrier4_A_) == (spec.specEnum._rest);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(22, true);
        if (this.doInfoEvent) this.infoEvent(22, true);

        spec.barriers_barrier4_A_ = spec.specEnum._opening;

        if (this.doInfoEvent) this.infoEvent(22, false);
        if (this.doInfoPrintOutput) this.printOutput(22, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 160 and event "barriers.barrier4.c_stop".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge160() {
        var guard = ((spec.barriers_barrier4_A_) == (spec.specEnum._opening)) || ((spec.barriers_barrier4_A_) == (spec.specEnum._closing));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(23, true);
        if (this.doInfoEvent) this.infoEvent(23, true);

        if ((spec.barriers_barrier4_A_) == (spec.specEnum._opening)) {
            spec.barriers_barrier4_A_ = spec.specEnum._rest;
        } else if ((spec.barriers_barrier4_A_) == (spec.specEnum._closing)) {
            spec.barriers_barrier4_A_ = spec.specEnum._rest;
        }

        if (this.doInfoEvent) this.infoEvent(23, false);
        if (this.doInfoPrintOutput) this.printOutput(23, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 161 and event "barriers.barrier5.c_close".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge161() {
        var guard = (spec.barriers_barrier5_A_) == (spec.specEnum._rest);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(28, true);
        if (this.doInfoEvent) this.infoEvent(28, true);

        spec.barriers_barrier5_A_ = spec.specEnum._closing;

        if (this.doInfoEvent) this.infoEvent(28, false);
        if (this.doInfoPrintOutput) this.printOutput(28, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 162 and event "barriers.barrier5.c_open".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge162() {
        var guard = (spec.barriers_barrier5_A_) == (spec.specEnum._rest);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(29, true);
        if (this.doInfoEvent) this.infoEvent(29, true);

        spec.barriers_barrier5_A_ = spec.specEnum._opening;

        if (this.doInfoEvent) this.infoEvent(29, false);
        if (this.doInfoPrintOutput) this.printOutput(29, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 163 and event "barriers.barrier5.c_stop".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge163() {
        var guard = ((spec.barriers_barrier5_A_) == (spec.specEnum._opening)) || ((spec.barriers_barrier5_A_) == (spec.specEnum._closing));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(30, true);
        if (this.doInfoEvent) this.infoEvent(30, true);

        if ((spec.barriers_barrier5_A_) == (spec.specEnum._opening)) {
            spec.barriers_barrier5_A_ = spec.specEnum._rest;
        } else if ((spec.barriers_barrier5_A_) == (spec.specEnum._closing)) {
            spec.barriers_barrier5_A_ = spec.specEnum._rest;
        }

        if (this.doInfoEvent) this.infoEvent(30, false);
        if (this.doInfoPrintOutput) this.printOutput(30, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 164 and event "barriers.barrier6.c_close".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge164() {
        var guard = (spec.barriers_barrier6_A_) == (spec.specEnum._rest);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(35, true);
        if (this.doInfoEvent) this.infoEvent(35, true);

        spec.barriers_barrier6_A_ = spec.specEnum._closing;

        if (this.doInfoEvent) this.infoEvent(35, false);
        if (this.doInfoPrintOutput) this.printOutput(35, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 165 and event "barriers.barrier6.c_open".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge165() {
        var guard = (spec.barriers_barrier6_A_) == (spec.specEnum._rest);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(36, true);
        if (this.doInfoEvent) this.infoEvent(36, true);

        spec.barriers_barrier6_A_ = spec.specEnum._opening;

        if (this.doInfoEvent) this.infoEvent(36, false);
        if (this.doInfoPrintOutput) this.printOutput(36, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 166 and event "barriers.barrier6.c_stop".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge166() {
        var guard = ((spec.barriers_barrier6_A_) == (spec.specEnum._opening)) || ((spec.barriers_barrier6_A_) == (spec.specEnum._closing));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(37, true);
        if (this.doInfoEvent) this.infoEvent(37, true);

        if ((spec.barriers_barrier6_A_) == (spec.specEnum._opening)) {
            spec.barriers_barrier6_A_ = spec.specEnum._rest;
        } else if ((spec.barriers_barrier6_A_) == (spec.specEnum._closing)) {
            spec.barriers_barrier6_A_ = spec.specEnum._rest;
        }

        if (this.doInfoEvent) this.infoEvent(37, false);
        if (this.doInfoPrintOutput) this.printOutput(37, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 167 and event "bridgedeck.c_close".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge167() {
        var guard = (spec.bridgedeck_A_) == (spec.specEnum._stopped);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(66, true);
        if (this.doInfoEvent) this.infoEvent(66, true);

        spec.bridgedeck_A_ = spec.specEnum._closing;

        if (this.doInfoEvent) this.infoEvent(66, false);
        if (this.doInfoPrintOutput) this.printOutput(66, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 168 and event "bridgedeck.c_open".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge168() {
        var guard = (spec.bridgedeck_A_) == (spec.specEnum._stopped);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(67, true);
        if (this.doInfoEvent) this.infoEvent(67, true);

        spec.bridgedeck_A_ = spec.specEnum._opening;

        if (this.doInfoEvent) this.infoEvent(67, false);
        if (this.doInfoPrintOutput) this.printOutput(67, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 169 and event "bridgedeck.c_stop".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge169() {
        var guard = ((spec.bridgedeck_A_) == (spec.specEnum._opening)) || ((spec.bridgedeck_A_) == (spec.specEnum._closing));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(68, true);
        if (this.doInfoEvent) this.infoEvent(68, true);

        if ((spec.bridgedeck_A_) == (spec.specEnum._opening)) {
            spec.bridgedeck_A_ = spec.specEnum._stopped;
        } else if ((spec.bridgedeck_A_) == (spec.specEnum._closing)) {
            spec.bridgedeck_A_ = spec.specEnum._stopped;
        }

        if (this.doInfoEvent) this.infoEvent(68, false);
        if (this.doInfoPrintOutput) this.printOutput(68, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 170 and event "LTS.presigns.ps1.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge170() {
        var guard = (spec.LTS_presigns_ps1_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(102, true);
        if (this.doInfoEvent) this.infoEvent(102, true);

        spec.LTS_presigns_ps1_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(102, false);
        if (this.doInfoPrintOutput) this.printOutput(102, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 171 and event "LTS.presigns.ps1.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge171() {
        var guard = (spec.LTS_presigns_ps1_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(103, true);
        if (this.doInfoEvent) this.infoEvent(103, true);

        spec.LTS_presigns_ps1_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(103, false);
        if (this.doInfoPrintOutput) this.printOutput(103, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 172 and event "LTS.presigns.ps2.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge172() {
        var guard = (spec.LTS_presigns_ps2_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(106, true);
        if (this.doInfoEvent) this.infoEvent(106, true);

        spec.LTS_presigns_ps2_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(106, false);
        if (this.doInfoPrintOutput) this.printOutput(106, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 173 and event "LTS.presigns.ps2.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge173() {
        var guard = (spec.LTS_presigns_ps2_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(107, true);
        if (this.doInfoEvent) this.infoEvent(107, true);

        spec.LTS_presigns_ps2_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(107, false);
        if (this.doInfoPrintOutput) this.printOutput(107, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 174 and event "LTS.presigns.ps3.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge174() {
        var guard = (spec.LTS_presigns_ps3_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(110, true);
        if (this.doInfoEvent) this.infoEvent(110, true);

        spec.LTS_presigns_ps3_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(110, false);
        if (this.doInfoPrintOutput) this.printOutput(110, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 175 and event "LTS.presigns.ps3.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge175() {
        var guard = (spec.LTS_presigns_ps3_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(111, true);
        if (this.doInfoEvent) this.infoEvent(111, true);

        spec.LTS_presigns_ps3_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(111, false);
        if (this.doInfoPrintOutput) this.printOutput(111, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 176 and event "LTS.presigns.ps4.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge176() {
        var guard = (spec.LTS_presigns_ps4_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(114, true);
        if (this.doInfoEvent) this.infoEvent(114, true);

        spec.LTS_presigns_ps4_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(114, false);
        if (this.doInfoPrintOutput) this.printOutput(114, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 177 and event "LTS.presigns.ps4.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge177() {
        var guard = (spec.LTS_presigns_ps4_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(115, true);
        if (this.doInfoEvent) this.infoEvent(115, true);

        spec.LTS_presigns_ps4_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(115, false);
        if (this.doInfoPrintOutput) this.printOutput(115, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 178 and event "LTS.presigns.ps5.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge178() {
        var guard = (spec.LTS_presigns_ps5_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(118, true);
        if (this.doInfoEvent) this.infoEvent(118, true);

        spec.LTS_presigns_ps5_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(118, false);
        if (this.doInfoPrintOutput) this.printOutput(118, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 179 and event "LTS.presigns.ps5.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge179() {
        var guard = (spec.LTS_presigns_ps5_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(119, true);
        if (this.doInfoEvent) this.infoEvent(119, true);

        spec.LTS_presigns_ps5_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(119, false);
        if (this.doInfoPrintOutput) this.printOutput(119, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 180 and event "LTS.presigns.ps6.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge180() {
        var guard = (spec.LTS_presigns_ps6_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(122, true);
        if (this.doInfoEvent) this.infoEvent(122, true);

        spec.LTS_presigns_ps6_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(122, false);
        if (this.doInfoPrintOutput) this.printOutput(122, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 181 and event "LTS.presigns.ps6.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge181() {
        var guard = (spec.LTS_presigns_ps6_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(123, true);
        if (this.doInfoEvent) this.infoEvent(123, true);

        spec.LTS_presigns_ps6_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(123, false);
        if (this.doInfoPrintOutput) this.printOutput(123, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 182 and event "LTS.stopsigns.stop1.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge182() {
        var guard = (spec.LTS_stopsigns_stop1_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(126, true);
        if (this.doInfoEvent) this.infoEvent(126, true);

        spec.LTS_stopsigns_stop1_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(126, false);
        if (this.doInfoPrintOutput) this.printOutput(126, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 183 and event "LTS.stopsigns.stop1.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge183() {
        var guard = (spec.LTS_stopsigns_stop1_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(127, true);
        if (this.doInfoEvent) this.infoEvent(127, true);

        spec.LTS_stopsigns_stop1_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(127, false);
        if (this.doInfoPrintOutput) this.printOutput(127, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 184 and event "LTS.stopsigns.stop2.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge184() {
        var guard = (spec.LTS_stopsigns_stop2_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(130, true);
        if (this.doInfoEvent) this.infoEvent(130, true);

        spec.LTS_stopsigns_stop2_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(130, false);
        if (this.doInfoPrintOutput) this.printOutput(130, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 185 and event "LTS.stopsigns.stop2.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge185() {
        var guard = (spec.LTS_stopsigns_stop2_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(131, true);
        if (this.doInfoEvent) this.infoEvent(131, true);

        spec.LTS_stopsigns_stop2_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(131, false);
        if (this.doInfoPrintOutput) this.printOutput(131, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 186 and event "LTS.stopsigns.stop3.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge186() {
        var guard = (spec.LTS_stopsigns_stop3_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(134, true);
        if (this.doInfoEvent) this.infoEvent(134, true);

        spec.LTS_stopsigns_stop3_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(134, false);
        if (this.doInfoPrintOutput) this.printOutput(134, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 187 and event "LTS.stopsigns.stop3.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge187() {
        var guard = (spec.LTS_stopsigns_stop3_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(135, true);
        if (this.doInfoEvent) this.infoEvent(135, true);

        spec.LTS_stopsigns_stop3_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(135, false);
        if (this.doInfoPrintOutput) this.printOutput(135, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 188 and event "LTS.stopsigns.stop4.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge188() {
        var guard = (spec.LTS_stopsigns_stop4_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(138, true);
        if (this.doInfoEvent) this.infoEvent(138, true);

        spec.LTS_stopsigns_stop4_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(138, false);
        if (this.doInfoPrintOutput) this.printOutput(138, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 189 and event "LTS.stopsigns.stop4.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge189() {
        var guard = (spec.LTS_stopsigns_stop4_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(139, true);
        if (this.doInfoEvent) this.infoEvent(139, true);

        spec.LTS_stopsigns_stop4_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(139, false);
        if (this.doInfoPrintOutput) this.printOutput(139, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 190 and event "LTS.stopsigns.stop5.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge190() {
        var guard = (spec.LTS_stopsigns_stop5_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(142, true);
        if (this.doInfoEvent) this.infoEvent(142, true);

        spec.LTS_stopsigns_stop5_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(142, false);
        if (this.doInfoPrintOutput) this.printOutput(142, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 191 and event "LTS.stopsigns.stop5.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge191() {
        var guard = (spec.LTS_stopsigns_stop5_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(143, true);
        if (this.doInfoEvent) this.infoEvent(143, true);

        spec.LTS_stopsigns_stop5_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(143, false);
        if (this.doInfoPrintOutput) this.printOutput(143, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 192 and event "LTS.stopsigns.stop6.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge192() {
        var guard = (spec.LTS_stopsigns_stop6_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(146, true);
        if (this.doInfoEvent) this.infoEvent(146, true);

        spec.LTS_stopsigns_stop6_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(146, false);
        if (this.doInfoPrintOutput) this.printOutput(146, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 193 and event "LTS.stopsigns.stop6.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge193() {
        var guard = (spec.LTS_stopsigns_stop6_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(147, true);
        if (this.doInfoEvent) this.infoEvent(147, true);

        spec.LTS_stopsigns_stop6_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(147, false);
        if (this.doInfoPrintOutput) this.printOutput(147, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 194 and event "LTS.stopsigns.stop7.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge194() {
        var guard = (spec.LTS_stopsigns_stop7_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(150, true);
        if (this.doInfoEvent) this.infoEvent(150, true);

        spec.LTS_stopsigns_stop7_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(150, false);
        if (this.doInfoPrintOutput) this.printOutput(150, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 195 and event "LTS.stopsigns.stop7.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge195() {
        var guard = (spec.LTS_stopsigns_stop7_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(151, true);
        if (this.doInfoEvent) this.infoEvent(151, true);

        spec.LTS_stopsigns_stop7_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(151, false);
        if (this.doInfoPrintOutput) this.printOutput(151, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 196 and event "LTS.stopsigns.stop8.c_off".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge196() {
        var guard = (spec.LTS_stopsigns_stop8_A_) == (spec.specEnum._on);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(154, true);
        if (this.doInfoEvent) this.infoEvent(154, true);

        spec.LTS_stopsigns_stop8_A_ = spec.specEnum._off;

        if (this.doInfoEvent) this.infoEvent(154, false);
        if (this.doInfoPrintOutput) this.printOutput(154, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 197 and event "LTS.stopsigns.stop8.c_on".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge197() {
        var guard = (spec.LTS_stopsigns_stop8_A_) == (spec.specEnum._off);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(155, true);
        if (this.doInfoEvent) this.infoEvent(155, true);

        spec.LTS_stopsigns_stop8_A_ = spec.specEnum._on;

        if (this.doInfoEvent) this.infoEvent(155, false);
        if (this.doInfoPrintOutput) this.printOutput(155, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 198 and event "shipping_signs.downstream.N.c_green".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge198() {
        var guard = (spec.shipping_signs_downstream_N_A_) == (spec.specEnum._redgreen);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(166, true);
        if (this.doInfoEvent) this.infoEvent(166, true);

        spec.shipping_signs_downstream_N_A_ = spec.specEnum._green;

        if (this.doInfoEvent) this.infoEvent(166, false);
        if (this.doInfoPrintOutput) this.printOutput(166, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 199 and event "shipping_signs.downstream.N.c_red".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge199() {
        var guard = ((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._redred)) || (((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._redgreen)) || ((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._green)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(167, true);
        if (this.doInfoEvent) this.infoEvent(167, true);

        if ((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._redred)) {
            spec.shipping_signs_downstream_N_A_ = spec.specEnum._red;
        } else if ((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._redgreen)) {
            spec.shipping_signs_downstream_N_A_ = spec.specEnum._red;
        } else if ((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._green)) {
            spec.shipping_signs_downstream_N_A_ = spec.specEnum._red;
        }

        if (this.doInfoEvent) this.infoEvent(167, false);
        if (this.doInfoPrintOutput) this.printOutput(167, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 200 and event "shipping_signs.downstream.N.c_redgreen".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge200() {
        var guard = (spec.shipping_signs_downstream_N_A_) == (spec.specEnum._red);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(168, true);
        if (this.doInfoEvent) this.infoEvent(168, true);

        spec.shipping_signs_downstream_N_A_ = spec.specEnum._redgreen;

        if (this.doInfoEvent) this.infoEvent(168, false);
        if (this.doInfoPrintOutput) this.printOutput(168, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 201 and event "shipping_signs.downstream.N.c_redred".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge201() {
        var guard = (spec.shipping_signs_downstream_N_A_) == (spec.specEnum._red);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(169, true);
        if (this.doInfoEvent) this.infoEvent(169, true);

        spec.shipping_signs_downstream_N_A_ = spec.specEnum._redred;

        if (this.doInfoEvent) this.infoEvent(169, false);
        if (this.doInfoPrintOutput) this.printOutput(169, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 202 and event "shipping_signs.downstream.S.c_green".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge202() {
        var guard = (spec.shipping_signs_downstream_S_A_) == (spec.specEnum._redgreen);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(176, true);
        if (this.doInfoEvent) this.infoEvent(176, true);

        spec.shipping_signs_downstream_S_A_ = spec.specEnum._green;

        if (this.doInfoEvent) this.infoEvent(176, false);
        if (this.doInfoPrintOutput) this.printOutput(176, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 203 and event "shipping_signs.downstream.S.c_red".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge203() {
        var guard = ((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._redred)) || (((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._redgreen)) || ((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._green)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(177, true);
        if (this.doInfoEvent) this.infoEvent(177, true);

        if ((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._redred)) {
            spec.shipping_signs_downstream_S_A_ = spec.specEnum._red;
        } else if ((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._redgreen)) {
            spec.shipping_signs_downstream_S_A_ = spec.specEnum._red;
        } else if ((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._green)) {
            spec.shipping_signs_downstream_S_A_ = spec.specEnum._red;
        }

        if (this.doInfoEvent) this.infoEvent(177, false);
        if (this.doInfoPrintOutput) this.printOutput(177, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 204 and event "shipping_signs.downstream.S.c_redgreen".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge204() {
        var guard = (spec.shipping_signs_downstream_S_A_) == (spec.specEnum._red);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(178, true);
        if (this.doInfoEvent) this.infoEvent(178, true);

        spec.shipping_signs_downstream_S_A_ = spec.specEnum._redgreen;

        if (this.doInfoEvent) this.infoEvent(178, false);
        if (this.doInfoPrintOutput) this.printOutput(178, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 205 and event "shipping_signs.downstream.S.c_redred".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge205() {
        var guard = (spec.shipping_signs_downstream_S_A_) == (spec.specEnum._red);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(179, true);
        if (this.doInfoEvent) this.infoEvent(179, true);

        spec.shipping_signs_downstream_S_A_ = spec.specEnum._redred;

        if (this.doInfoEvent) this.infoEvent(179, false);
        if (this.doInfoPrintOutput) this.printOutput(179, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 206 and event "shipping_signs.upstream.N.c_green".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge206() {
        var guard = (spec.shipping_signs_upstream_N_A_) == (spec.specEnum._redgreen);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(194, true);
        if (this.doInfoEvent) this.infoEvent(194, true);

        spec.shipping_signs_upstream_N_A_ = spec.specEnum._green;

        if (this.doInfoEvent) this.infoEvent(194, false);
        if (this.doInfoPrintOutput) this.printOutput(194, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 207 and event "shipping_signs.upstream.N.c_red".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge207() {
        var guard = ((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._redred)) || (((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._redgreen)) || ((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._green)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(195, true);
        if (this.doInfoEvent) this.infoEvent(195, true);

        if ((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._redred)) {
            spec.shipping_signs_upstream_N_A_ = spec.specEnum._red;
        } else if ((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._redgreen)) {
            spec.shipping_signs_upstream_N_A_ = spec.specEnum._red;
        } else if ((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._green)) {
            spec.shipping_signs_upstream_N_A_ = spec.specEnum._red;
        }

        if (this.doInfoEvent) this.infoEvent(195, false);
        if (this.doInfoPrintOutput) this.printOutput(195, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 208 and event "shipping_signs.upstream.N.c_redgreen".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge208() {
        var guard = (spec.shipping_signs_upstream_N_A_) == (spec.specEnum._red);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(196, true);
        if (this.doInfoEvent) this.infoEvent(196, true);

        spec.shipping_signs_upstream_N_A_ = spec.specEnum._redgreen;

        if (this.doInfoEvent) this.infoEvent(196, false);
        if (this.doInfoPrintOutput) this.printOutput(196, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 209 and event "shipping_signs.upstream.N.c_redred".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge209() {
        var guard = (spec.shipping_signs_upstream_N_A_) == (spec.specEnum._red);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(197, true);
        if (this.doInfoEvent) this.infoEvent(197, true);

        spec.shipping_signs_upstream_N_A_ = spec.specEnum._redred;

        if (this.doInfoEvent) this.infoEvent(197, false);
        if (this.doInfoPrintOutput) this.printOutput(197, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 210 and event "shipping_signs.upstream.S.c_green".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge210() {
        var guard = (spec.shipping_signs_upstream_S_A_) == (spec.specEnum._redgreen);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(204, true);
        if (this.doInfoEvent) this.infoEvent(204, true);

        spec.shipping_signs_upstream_S_A_ = spec.specEnum._green;

        if (this.doInfoEvent) this.infoEvent(204, false);
        if (this.doInfoPrintOutput) this.printOutput(204, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 211 and event "shipping_signs.upstream.S.c_red".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge211() {
        var guard = ((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._redred)) || (((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._redgreen)) || ((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._green)));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(205, true);
        if (this.doInfoEvent) this.infoEvent(205, true);

        if ((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._redred)) {
            spec.shipping_signs_upstream_S_A_ = spec.specEnum._red;
        } else if ((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._redgreen)) {
            spec.shipping_signs_upstream_S_A_ = spec.specEnum._red;
        } else if ((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._green)) {
            spec.shipping_signs_upstream_S_A_ = spec.specEnum._red;
        }

        if (this.doInfoEvent) this.infoEvent(205, false);
        if (this.doInfoPrintOutput) this.printOutput(205, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 212 and event "shipping_signs.upstream.S.c_redgreen".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge212() {
        var guard = (spec.shipping_signs_upstream_S_A_) == (spec.specEnum._red);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(206, true);
        if (this.doInfoEvent) this.infoEvent(206, true);

        spec.shipping_signs_upstream_S_A_ = spec.specEnum._redgreen;

        if (this.doInfoEvent) this.infoEvent(206, false);
        if (this.doInfoPrintOutput) this.printOutput(206, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 213 and event "shipping_signs.upstream.S.c_redred".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge213() {
        var guard = (spec.shipping_signs_upstream_S_A_) == (spec.specEnum._red);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(207, true);
        if (this.doInfoEvent) this.infoEvent(207, true);

        spec.shipping_signs_upstream_S_A_ = spec.specEnum._redred;

        if (this.doInfoEvent) this.infoEvent(207, false);
        if (this.doInfoPrintOutput) this.printOutput(207, false);
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
        spec.barriers_barrier1_A_ = spec.specEnum._rest;
        spec.barriers_barrier1_S_ = spec.specEnum._open;
        spec.barriers_barrier2_A_ = spec.specEnum._rest;
        spec.barriers_barrier2_S_ = spec.specEnum._open;
        spec.barriers_barrier3_A_ = spec.specEnum._rest;
        spec.barriers_barrier3_S_ = spec.specEnum._open;
        spec.barriers_barrier4_A_ = spec.specEnum._rest;
        spec.barriers_barrier4_S_ = spec.specEnum._open;
        spec.barriers_barrier5_A_ = spec.specEnum._rest;
        spec.barriers_barrier5_S_ = spec.specEnum._open;
        spec.barriers_barrier6_A_ = spec.specEnum._rest;
        spec.barriers_barrier6_S_ = spec.specEnum._open;
        spec.barriers_button_close_entering_ = spec.specEnum._released;
        spec.barriers_button_close_leaving_ = spec.specEnum._released;
        spec.barriers_button_close_slow_ = spec.specEnum._released;
        spec.barriers_button_open_entering_ = spec.specEnum._released;
        spec.barriers_button_open_leaving_ = spec.specEnum._released;
        spec.barriers_button_open_slow_ = spec.specEnum._released;
        spec.barriers_button_stop_entering_ = spec.specEnum._released;
        spec.barriers_button_stop_leaving_ = spec.specEnum._released;
        spec.barriers_button_stop_slow_ = spec.specEnum._released;
        spec.bridgedeck_A_ = spec.specEnum._stopped;
        spec.bridgedeck_button_close_ = spec.specEnum._released;
        spec.bridgedeck_button_open_ = spec.specEnum._released;
        spec.bridgedeck_button_stop_ = spec.specEnum._released;
        spec.bridgedeck_S_ = spec.specEnum._closed;
        spec.FTC_D_ps1_f_ = false;
        spec.FTC_D_ps2_f_ = false;
        spec.FTC_D_ps3_f_ = false;
        spec.FTC_D_ps4_f_ = false;
        spec.FTC_D_ps5_f_ = false;
        spec.FTC_D_ps6_f_ = false;
        spec.FTC_D_s1_f_ = false;
        spec.FTC_D_s2_f_ = false;
        spec.FTC_D_s3_f_ = false;
        spec.FTC_D_s4_f_ = false;
        spec.FTC_D_s5_f_ = false;
        spec.FTC_D_s6_f_ = false;
        spec.FTC_D_s7_f_ = false;
        spec.FTC_D_s8_f_ = false;
        spec.FTC_D_bar1_f_ = false;
        spec.FTC_D_bar4_f_ = false;
        spec.FTC_D_bar3_f_ = false;
        spec.FTC_D_bar2_f_ = false;
        spec.FTC_D_bar5_f_ = false;
        spec.FTC_D_bar6_f_ = false;
        spec.FTC_D_bridge_f_ = false;
        spec.LTS_button_on_ = spec.specEnum._released;
        spec.LTS_presigns_ps1_A_ = spec.specEnum._off;
        spec.LTS_presigns_ps1_S_ = spec.specEnum._off;
        spec.LTS_presigns_ps2_A_ = spec.specEnum._off;
        spec.LTS_presigns_ps2_S_ = spec.specEnum._off;
        spec.LTS_presigns_ps3_A_ = spec.specEnum._off;
        spec.LTS_presigns_ps3_S_ = spec.specEnum._off;
        spec.LTS_presigns_ps4_A_ = spec.specEnum._off;
        spec.LTS_presigns_ps4_S_ = spec.specEnum._off;
        spec.LTS_presigns_ps5_A_ = spec.specEnum._off;
        spec.LTS_presigns_ps5_S_ = spec.specEnum._off;
        spec.LTS_presigns_ps6_A_ = spec.specEnum._off;
        spec.LTS_presigns_ps6_S_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop1_A_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop1_S_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop2_A_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop2_S_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop3_A_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop3_S_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop4_A_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop4_S_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop5_A_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop5_S_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop6_A_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop6_S_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop7_A_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop7_S_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop8_A_ = spec.specEnum._off;
        spec.LTS_stopsigns_stop8_S_ = spec.specEnum._off;
        spec.shipping_signs_downstream_button_green_ = spec.specEnum._released;
        spec.shipping_signs_downstream_button_red_ = spec.specEnum._released;
        spec.shipping_signs_downstream_button_redgreen_ = spec.specEnum._released;
        spec.shipping_signs_downstream_button_redred_ = spec.specEnum._released;
        spec.shipping_signs_downstream_N_A_ = spec.specEnum._red;
        spec.shipping_signs_downstream_N_S_G_ = spec.specEnum._off;
        spec.shipping_signs_downstream_N_S_R_ = spec.specEnum._on;
        spec.shipping_signs_downstream_N_S_S_ = spec.specEnum._off;
        spec.shipping_signs_downstream_S_A_ = spec.specEnum._red;
        spec.shipping_signs_downstream_S_S_G_ = spec.specEnum._off;
        spec.shipping_signs_downstream_S_S_R_ = spec.specEnum._on;
        spec.shipping_signs_downstream_S_S_S_ = spec.specEnum._off;
        spec.shipping_signs_upstream_button_green_ = spec.specEnum._released;
        spec.shipping_signs_upstream_button_red_ = spec.specEnum._released;
        spec.shipping_signs_upstream_button_redgreen_ = spec.specEnum._released;
        spec.shipping_signs_upstream_button_redred_ = spec.specEnum._released;
        spec.shipping_signs_upstream_N_A_ = spec.specEnum._red;
        spec.shipping_signs_upstream_N_S_G_ = spec.specEnum._off;
        spec.shipping_signs_upstream_N_S_R_ = spec.specEnum._on;
        spec.shipping_signs_upstream_N_S_S_ = spec.specEnum._off;
        spec.shipping_signs_upstream_S_A_ = spec.specEnum._red;
        spec.shipping_signs_upstream_S_S_G_ = spec.specEnum._off;
        spec.shipping_signs_upstream_S_S_R_ = spec.specEnum._on;
        spec.shipping_signs_upstream_S_S_S_ = spec.specEnum._off;
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
        state += specUtils.fmt(', barriers.barrier1.A=%s', specUtils.valueToStr(spec.barriers_barrier1_A_));
        state += specUtils.fmt(', barriers.barrier1.S=%s', specUtils.valueToStr(spec.barriers_barrier1_S_));
        state += specUtils.fmt(', barriers.barrier2.A=%s', specUtils.valueToStr(spec.barriers_barrier2_A_));
        state += specUtils.fmt(', barriers.barrier2.S=%s', specUtils.valueToStr(spec.barriers_barrier2_S_));
        state += specUtils.fmt(', barriers.barrier3.A=%s', specUtils.valueToStr(spec.barriers_barrier3_A_));
        state += specUtils.fmt(', barriers.barrier3.S=%s', specUtils.valueToStr(spec.barriers_barrier3_S_));
        state += specUtils.fmt(', barriers.barrier4.A=%s', specUtils.valueToStr(spec.barriers_barrier4_A_));
        state += specUtils.fmt(', barriers.barrier4.S=%s', specUtils.valueToStr(spec.barriers_barrier4_S_));
        state += specUtils.fmt(', barriers.barrier5.A=%s', specUtils.valueToStr(spec.barriers_barrier5_A_));
        state += specUtils.fmt(', barriers.barrier5.S=%s', specUtils.valueToStr(spec.barriers_barrier5_S_));
        state += specUtils.fmt(', barriers.barrier6.A=%s', specUtils.valueToStr(spec.barriers_barrier6_A_));
        state += specUtils.fmt(', barriers.barrier6.S=%s', specUtils.valueToStr(spec.barriers_barrier6_S_));
        state += specUtils.fmt(', barriers.button_close_entering=%s', specUtils.valueToStr(spec.barriers_button_close_entering_));
        state += specUtils.fmt(', barriers.button_close_leaving=%s', specUtils.valueToStr(spec.barriers_button_close_leaving_));
        state += specUtils.fmt(', barriers.button_close_slow=%s', specUtils.valueToStr(spec.barriers_button_close_slow_));
        state += specUtils.fmt(', barriers.button_open_entering=%s', specUtils.valueToStr(spec.barriers_button_open_entering_));
        state += specUtils.fmt(', barriers.button_open_leaving=%s', specUtils.valueToStr(spec.barriers_button_open_leaving_));
        state += specUtils.fmt(', barriers.button_open_slow=%s', specUtils.valueToStr(spec.barriers_button_open_slow_));
        state += specUtils.fmt(', barriers.button_stop_entering=%s', specUtils.valueToStr(spec.barriers_button_stop_entering_));
        state += specUtils.fmt(', barriers.button_stop_leaving=%s', specUtils.valueToStr(spec.barriers_button_stop_leaving_));
        state += specUtils.fmt(', barriers.button_stop_slow=%s', specUtils.valueToStr(spec.barriers_button_stop_slow_));
        state += specUtils.fmt(', bridgedeck.A=%s', specUtils.valueToStr(spec.bridgedeck_A_));
        state += specUtils.fmt(', bridgedeck.button_close=%s', specUtils.valueToStr(spec.bridgedeck_button_close_));
        state += specUtils.fmt(', bridgedeck.button_open=%s', specUtils.valueToStr(spec.bridgedeck_button_open_));
        state += specUtils.fmt(', bridgedeck.button_stop=%s', specUtils.valueToStr(spec.bridgedeck_button_stop_));
        state += specUtils.fmt(', bridgedeck.S=%s', specUtils.valueToStr(spec.bridgedeck_S_));
        state += specUtils.fmt(', FTC.D.bar1_f=%s', specUtils.valueToStr(spec.FTC_D_bar1_f_));
        state += specUtils.fmt(', FTC.D.bar2_f=%s', specUtils.valueToStr(spec.FTC_D_bar2_f_));
        state += specUtils.fmt(', FTC.D.bar3_f=%s', specUtils.valueToStr(spec.FTC_D_bar3_f_));
        state += specUtils.fmt(', FTC.D.bar4_f=%s', specUtils.valueToStr(spec.FTC_D_bar4_f_));
        state += specUtils.fmt(', FTC.D.bar5_f=%s', specUtils.valueToStr(spec.FTC_D_bar5_f_));
        state += specUtils.fmt(', FTC.D.bar6_f=%s', specUtils.valueToStr(spec.FTC_D_bar6_f_));
        state += specUtils.fmt(', FTC.D.bridge_f=%s', specUtils.valueToStr(spec.FTC_D_bridge_f_));
        state += specUtils.fmt(', FTC.D.ps1_f=%s', specUtils.valueToStr(spec.FTC_D_ps1_f_));
        state += specUtils.fmt(', FTC.D.ps2_f=%s', specUtils.valueToStr(spec.FTC_D_ps2_f_));
        state += specUtils.fmt(', FTC.D.ps3_f=%s', specUtils.valueToStr(spec.FTC_D_ps3_f_));
        state += specUtils.fmt(', FTC.D.ps4_f=%s', specUtils.valueToStr(spec.FTC_D_ps4_f_));
        state += specUtils.fmt(', FTC.D.ps5_f=%s', specUtils.valueToStr(spec.FTC_D_ps5_f_));
        state += specUtils.fmt(', FTC.D.ps6_f=%s', specUtils.valueToStr(spec.FTC_D_ps6_f_));
        state += specUtils.fmt(', FTC.D.s1_f=%s', specUtils.valueToStr(spec.FTC_D_s1_f_));
        state += specUtils.fmt(', FTC.D.s2_f=%s', specUtils.valueToStr(spec.FTC_D_s2_f_));
        state += specUtils.fmt(', FTC.D.s3_f=%s', specUtils.valueToStr(spec.FTC_D_s3_f_));
        state += specUtils.fmt(', FTC.D.s4_f=%s', specUtils.valueToStr(spec.FTC_D_s4_f_));
        state += specUtils.fmt(', FTC.D.s5_f=%s', specUtils.valueToStr(spec.FTC_D_s5_f_));
        state += specUtils.fmt(', FTC.D.s6_f=%s', specUtils.valueToStr(spec.FTC_D_s6_f_));
        state += specUtils.fmt(', FTC.D.s7_f=%s', specUtils.valueToStr(spec.FTC_D_s7_f_));
        state += specUtils.fmt(', FTC.D.s8_f=%s', specUtils.valueToStr(spec.FTC_D_s8_f_));
        state += specUtils.fmt(', LTS.button_on=%s', specUtils.valueToStr(spec.LTS_button_on_));
        state += specUtils.fmt(', LTS.presigns.ps1.A=%s', specUtils.valueToStr(spec.LTS_presigns_ps1_A_));
        state += specUtils.fmt(', LTS.presigns.ps1.S=%s', specUtils.valueToStr(spec.LTS_presigns_ps1_S_));
        state += specUtils.fmt(', LTS.presigns.ps2.A=%s', specUtils.valueToStr(spec.LTS_presigns_ps2_A_));
        state += specUtils.fmt(', LTS.presigns.ps2.S=%s', specUtils.valueToStr(spec.LTS_presigns_ps2_S_));
        state += specUtils.fmt(', LTS.presigns.ps3.A=%s', specUtils.valueToStr(spec.LTS_presigns_ps3_A_));
        state += specUtils.fmt(', LTS.presigns.ps3.S=%s', specUtils.valueToStr(spec.LTS_presigns_ps3_S_));
        state += specUtils.fmt(', LTS.presigns.ps4.A=%s', specUtils.valueToStr(spec.LTS_presigns_ps4_A_));
        state += specUtils.fmt(', LTS.presigns.ps4.S=%s', specUtils.valueToStr(spec.LTS_presigns_ps4_S_));
        state += specUtils.fmt(', LTS.presigns.ps5.A=%s', specUtils.valueToStr(spec.LTS_presigns_ps5_A_));
        state += specUtils.fmt(', LTS.presigns.ps5.S=%s', specUtils.valueToStr(spec.LTS_presigns_ps5_S_));
        state += specUtils.fmt(', LTS.presigns.ps6.A=%s', specUtils.valueToStr(spec.LTS_presigns_ps6_A_));
        state += specUtils.fmt(', LTS.presigns.ps6.S=%s', specUtils.valueToStr(spec.LTS_presigns_ps6_S_));
        state += specUtils.fmt(', LTS.stopsigns.stop1.A=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop1_A_));
        state += specUtils.fmt(', LTS.stopsigns.stop1.S=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop1_S_));
        state += specUtils.fmt(', LTS.stopsigns.stop2.A=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop2_A_));
        state += specUtils.fmt(', LTS.stopsigns.stop2.S=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop2_S_));
        state += specUtils.fmt(', LTS.stopsigns.stop3.A=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop3_A_));
        state += specUtils.fmt(', LTS.stopsigns.stop3.S=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop3_S_));
        state += specUtils.fmt(', LTS.stopsigns.stop4.A=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop4_A_));
        state += specUtils.fmt(', LTS.stopsigns.stop4.S=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop4_S_));
        state += specUtils.fmt(', LTS.stopsigns.stop5.A=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop5_A_));
        state += specUtils.fmt(', LTS.stopsigns.stop5.S=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop5_S_));
        state += specUtils.fmt(', LTS.stopsigns.stop6.A=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop6_A_));
        state += specUtils.fmt(', LTS.stopsigns.stop6.S=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop6_S_));
        state += specUtils.fmt(', LTS.stopsigns.stop7.A=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop7_A_));
        state += specUtils.fmt(', LTS.stopsigns.stop7.S=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop7_S_));
        state += specUtils.fmt(', LTS.stopsigns.stop8.A=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop8_A_));
        state += specUtils.fmt(', LTS.stopsigns.stop8.S=%s', specUtils.valueToStr(spec.LTS_stopsigns_stop8_S_));
        state += specUtils.fmt(', shipping_signs.downstream.button_green=%s', specUtils.valueToStr(spec.shipping_signs_downstream_button_green_));
        state += specUtils.fmt(', shipping_signs.downstream.button_red=%s', specUtils.valueToStr(spec.shipping_signs_downstream_button_red_));
        state += specUtils.fmt(', shipping_signs.downstream.button_redgreen=%s', specUtils.valueToStr(spec.shipping_signs_downstream_button_redgreen_));
        state += specUtils.fmt(', shipping_signs.downstream.button_redred=%s', specUtils.valueToStr(spec.shipping_signs_downstream_button_redred_));
        state += specUtils.fmt(', shipping_signs.downstream.N.A=%s', specUtils.valueToStr(spec.shipping_signs_downstream_N_A_));
        state += specUtils.fmt(', shipping_signs.downstream.N.S_G=%s', specUtils.valueToStr(spec.shipping_signs_downstream_N_S_G_));
        state += specUtils.fmt(', shipping_signs.downstream.N.S_R=%s', specUtils.valueToStr(spec.shipping_signs_downstream_N_S_R_));
        state += specUtils.fmt(', shipping_signs.downstream.N.S_S=%s', specUtils.valueToStr(spec.shipping_signs_downstream_N_S_S_));
        state += specUtils.fmt(', shipping_signs.downstream.S.A=%s', specUtils.valueToStr(spec.shipping_signs_downstream_S_A_));
        state += specUtils.fmt(', shipping_signs.downstream.S.S_G=%s', specUtils.valueToStr(spec.shipping_signs_downstream_S_S_G_));
        state += specUtils.fmt(', shipping_signs.downstream.S.S_R=%s', specUtils.valueToStr(spec.shipping_signs_downstream_S_S_R_));
        state += specUtils.fmt(', shipping_signs.downstream.S.S_S=%s', specUtils.valueToStr(spec.shipping_signs_downstream_S_S_S_));
        state += specUtils.fmt(', shipping_signs.upstream.button_green=%s', specUtils.valueToStr(spec.shipping_signs_upstream_button_green_));
        state += specUtils.fmt(', shipping_signs.upstream.button_red=%s', specUtils.valueToStr(spec.shipping_signs_upstream_button_red_));
        state += specUtils.fmt(', shipping_signs.upstream.button_redgreen=%s', specUtils.valueToStr(spec.shipping_signs_upstream_button_redgreen_));
        state += specUtils.fmt(', shipping_signs.upstream.button_redred=%s', specUtils.valueToStr(spec.shipping_signs_upstream_button_redred_));
        state += specUtils.fmt(', shipping_signs.upstream.N.A=%s', specUtils.valueToStr(spec.shipping_signs_upstream_N_A_));
        state += specUtils.fmt(', shipping_signs.upstream.N.S_G=%s', specUtils.valueToStr(spec.shipping_signs_upstream_N_S_G_));
        state += specUtils.fmt(', shipping_signs.upstream.N.S_R=%s', specUtils.valueToStr(spec.shipping_signs_upstream_N_S_R_));
        state += specUtils.fmt(', shipping_signs.upstream.N.S_S=%s', specUtils.valueToStr(spec.shipping_signs_upstream_N_S_S_));
        state += specUtils.fmt(', shipping_signs.upstream.S.A=%s', specUtils.valueToStr(spec.shipping_signs_upstream_S_A_));
        state += specUtils.fmt(', shipping_signs.upstream.S.S_G=%s', specUtils.valueToStr(spec.shipping_signs_upstream_S_S_G_));
        state += specUtils.fmt(', shipping_signs.upstream.S.S_R=%s', specUtils.valueToStr(spec.shipping_signs_upstream_S_S_R_));
        state += specUtils.fmt(', shipping_signs.upstream.S.S_S=%s', specUtils.valueToStr(spec.shipping_signs_upstream_S_S_S_));
        return state;
    }


    /**
     * Evaluates algebraic variable "barriers.entering_closed".
     *
     * @return The evaluation result.
     */
    barriers_entering_closed_() {
        return (spec.barriers_barrier2_closed_()) && (spec.barriers_barrier3_closed_());
    }

    /**
     * Evaluates algebraic variable "barriers.leaving_closed".
     *
     * @return The evaluation result.
     */
    barriers_leaving_closed_() {
        return (spec.barriers_barrier1_closed_()) && (spec.barriers_barrier4_closed_());
    }

    /**
     * Evaluates algebraic variable "barriers.slow_closed".
     *
     * @return The evaluation result.
     */
    barriers_slow_closed_() {
        return (spec.barriers_barrier5_closed_()) && (spec.barriers_barrier6_closed_());
    }

    /**
     * Evaluates algebraic variable "barriers.leaving_open".
     *
     * @return The evaluation result.
     */
    barriers_leaving_open_() {
        return (spec.barriers_barrier1_open_()) && (spec.barriers_barrier4_open_());
    }

    /**
     * Evaluates algebraic variable "barriers.CtoK_open".
     *
     * @return The evaluation result.
     */
    barriers_CtoK_open_() {
        return (spec.barriers_barrier3_open_()) && (spec.barriers_barrier4_open_());
    }

    /**
     * Evaluates algebraic variable "barriers.KtoC_open".
     *
     * @return The evaluation result.
     */
    barriers_KtoC_open_() {
        return (spec.barriers_barrier1_open_()) && (spec.barriers_barrier2_open_());
    }

    /**
     * Evaluates algebraic variable "barriers.slow_open".
     *
     * @return The evaluation result.
     */
    barriers_slow_open_() {
        return (spec.barriers_barrier5_open_()) && (spec.barriers_barrier6_open_());
    }

    /**
     * Evaluates algebraic variable "barriers.all_closed".
     *
     * @return The evaluation result.
     */
    barriers_all_closed_() {
        return ((spec.barriers_entering_closed_()) && (spec.barriers_leaving_closed_())) && (spec.barriers_slow_closed_());
    }

    /**
     * Evaluates algebraic variable "barriers.all_open".
     *
     * @return The evaluation result.
     */
    barriers_all_open_() {
        return ((spec.barriers_CtoK_open_()) && (spec.barriers_KtoC_open_())) && (spec.barriers_slow_open_());
    }

    /**
     * Evaluates algebraic variable "barriers.command_stop_entering".
     *
     * @return The evaluation result.
     */
    barriers_command_stop_entering_() {
        return (spec.barriers_button_stop_entering_) == (spec.specEnum._pushed);
    }

    /**
     * Evaluates algebraic variable "barriers.command_close_entering".
     *
     * @return The evaluation result.
     */
    barriers_command_close_entering_() {
        return ((spec.barriers_button_close_entering_) == (spec.specEnum._pushed)) && (!(spec.barriers_command_stop_entering_()));
    }

    /**
     * Evaluates algebraic variable "barriers.command_open_entering".
     *
     * @return The evaluation result.
     */
    barriers_command_open_entering_() {
        return (((spec.barriers_button_open_entering_) == (spec.specEnum._pushed)) && (!(spec.barriers_command_stop_entering_()))) && (!(spec.barriers_command_close_entering_()));
    }

    /**
     * Evaluates algebraic variable "barriers.command_stop_leaving".
     *
     * @return The evaluation result.
     */
    barriers_command_stop_leaving_() {
        return (spec.barriers_button_stop_leaving_) == (spec.specEnum._pushed);
    }

    /**
     * Evaluates algebraic variable "barriers.command_close_leaving".
     *
     * @return The evaluation result.
     */
    barriers_command_close_leaving_() {
        return ((spec.barriers_button_close_leaving_) == (spec.specEnum._pushed)) && (!(spec.barriers_command_stop_leaving_()));
    }

    /**
     * Evaluates algebraic variable "barriers.command_open_leaving".
     *
     * @return The evaluation result.
     */
    barriers_command_open_leaving_() {
        return (((spec.barriers_button_open_leaving_) == (spec.specEnum._pushed)) && (!(spec.barriers_command_stop_leaving_()))) && (!(spec.barriers_command_close_leaving_()));
    }

    /**
     * Evaluates algebraic variable "barriers.command_stop_slow".
     *
     * @return The evaluation result.
     */
    barriers_command_stop_slow_() {
        return (spec.barriers_button_stop_slow_) == (spec.specEnum._pushed);
    }

    /**
     * Evaluates algebraic variable "barriers.command_close_slow".
     *
     * @return The evaluation result.
     */
    barriers_command_close_slow_() {
        return ((spec.barriers_button_close_slow_) == (spec.specEnum._pushed)) && (!(spec.barriers_command_stop_slow_()));
    }

    /**
     * Evaluates algebraic variable "barriers.command_open_slow".
     *
     * @return The evaluation result.
     */
    barriers_command_open_slow_() {
        return (((spec.barriers_button_open_slow_) == (spec.specEnum._pushed)) && (!(spec.barriers_command_stop_slow_()))) && (!(spec.barriers_command_close_slow_()));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.RedOrRedRed".
     *
     * @return The evaluation result.
     */
    shipping_signs_RedOrRedRed_() {
        return (spec.shipping_signs_upstream_RedOrRedRed_()) && (spec.shipping_signs_downstream_RedOrRedRed_());
    }

    /**
     * Evaluates algebraic variable "bridgedeck.command_open".
     *
     * @return The evaluation result.
     */
    bridgedeck_command_open_() {
        return (((spec.bridgedeck_button_open_) == (spec.specEnum._pushed)) && ((spec.bridgedeck_button_stop_) != (spec.specEnum._pushed))) && ((spec.bridgedeck_button_close_) != (spec.specEnum._pushed));
    }

    /**
     * Evaluates algebraic variable "bridgedeck.command_close".
     *
     * @return The evaluation result.
     */
    bridgedeck_command_close_() {
        return ((spec.bridgedeck_button_close_) == (spec.specEnum._pushed)) && ((spec.bridgedeck_button_stop_) != (spec.specEnum._pushed));
    }

    /**
     * Evaluates algebraic variable "bridgedeck.command_stop".
     *
     * @return The evaluation result.
     */
    bridgedeck_command_stop_() {
        return (spec.bridgedeck_button_stop_) == (spec.specEnum._pushed);
    }

    /**
     * Evaluates algebraic variable "bridgedeck.bridgedeck_up".
     *
     * @return The evaluation result.
     */
    bridgedeck_bridgedeck_up_() {
        return ((spec.bridgedeck_S_) == (spec.specEnum._up)) && ((spec.bridgedeck_A_) == (spec.specEnum._stopped));
    }

    /**
     * Evaluates algebraic variable "bridgedeck.bridgedeck_closed".
     *
     * @return The evaluation result.
     */
    bridgedeck_bridgedeck_closed_() {
        return ((spec.bridgedeck_S_) == (spec.specEnum._closed)) && ((spec.bridgedeck_A_) == (spec.specEnum._stopped));
    }

    /**
     * Evaluates algebraic variable "bridgedeck.f_bridge".
     *
     * @return The evaluation result.
     */
    bridgedeck_f_bridge_() {
        return spec.FTC_D_bridge_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.C_on".
     *
     * @return The evaluation result.
     */
    LTS_presigns_C_on_() {
        return ((spec.LTS_presigns_ps1_on_()) && (spec.LTS_presigns_ps2_on_())) && (spec.LTS_presigns_ps3_on_());
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.K_on".
     *
     * @return The evaluation result.
     */
    LTS_presigns_K_on_() {
        return ((spec.LTS_presigns_ps4_on_()) && (spec.LTS_presigns_ps5_on_())) && (spec.LTS_presigns_ps6_on_());
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.C_onF".
     *
     * @return The evaluation result.
     */
    LTS_presigns_C_onF_() {
        return (((spec.LTS_presigns_ps2_on_()) && (spec.LTS_presigns_ps3_on_())) || ((spec.LTS_presigns_ps1_on_()) && (spec.LTS_presigns_ps3_on_()))) || ((spec.LTS_presigns_ps1_on_()) && (spec.LTS_presigns_ps2_on_()));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.K_onF".
     *
     * @return The evaluation result.
     */
    LTS_presigns_K_onF_() {
        return (((spec.LTS_presigns_ps5_on_()) && (spec.LTS_presigns_ps6_on_())) || ((spec.LTS_presigns_ps4_on_()) && (spec.LTS_presigns_ps6_on_()))) || ((spec.LTS_presigns_ps4_on_()) && (spec.LTS_presigns_ps5_on_()));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.C_on".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_C_on_() {
        return (spec.LTS_stopsigns_stop1_on_()) && (spec.LTS_stopsigns_stop2_on_());
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.K_on".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_K_on_() {
        return (spec.LTS_stopsigns_stop3_on_()) && (spec.LTS_stopsigns_stop4_on_());
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.SC_on".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_SC_on_() {
        return (spec.LTS_stopsigns_stop5_on_()) && (spec.LTS_stopsigns_stop6_on_());
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.SK_on".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_SK_on_() {
        return (spec.LTS_stopsigns_stop7_on_()) && (spec.LTS_stopsigns_stop8_on_());
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.C_off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_C_off_() {
        return (spec.LTS_stopsigns_stop1_off_()) && (spec.LTS_stopsigns_stop2_off_());
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.K_off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_K_off_() {
        return (spec.LTS_stopsigns_stop3_off_()) && (spec.LTS_stopsigns_stop4_off_());
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.SC_off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_SC_off_() {
        return (spec.LTS_stopsigns_stop5_off_()) && (spec.LTS_stopsigns_stop6_off_());
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.SK_off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_SK_off_() {
        return (spec.LTS_stopsigns_stop7_off_()) && (spec.LTS_stopsigns_stop8_off_());
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.slow_off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_slow_off_() {
        return (spec.LTS_stopsigns_SC_off_()) && (spec.LTS_stopsigns_SK_off_());
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.C_onF".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_C_onF_() {
        return (spec.LTS_stopsigns_stop1_on_()) || (spec.LTS_stopsigns_stop2_on_());
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.K_onF".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_K_onF_() {
        return (spec.LTS_stopsigns_stop3_on_()) || (spec.LTS_stopsigns_stop4_on_());
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.SC_onF".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_SC_onF_() {
        return (spec.LTS_stopsigns_stop5_on_()) || (spec.LTS_stopsigns_stop6_on_());
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.SK_onF".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_SK_onF_() {
        return (spec.LTS_stopsigns_stop7_on_()) || (spec.LTS_stopsigns_stop8_on_());
    }

    /**
     * Evaluates algebraic variable "barriers.barrier1.open".
     *
     * @return The evaluation result.
     */
    barriers_barrier1_open_() {
        return ((spec.barriers_barrier1_A_) == (spec.specEnum._rest)) && ((spec.barriers_barrier1_S_) == (spec.specEnum._open));
    }

    /**
     * Evaluates algebraic variable "barriers.barrier1.closed".
     *
     * @return The evaluation result.
     */
    barriers_barrier1_closed_() {
        return ((spec.barriers_barrier1_A_) == (spec.specEnum._rest)) && ((spec.barriers_barrier1_S_) == (spec.specEnum._closed));
    }

    /**
     * Evaluates algebraic variable "barriers.barrier1.f_sc".
     *
     * @return The evaluation result.
     */
    barriers_barrier1_f_sc_() {
        return spec.FTC_D_bar1_f_;
    }

    /**
     * Evaluates algebraic variable "barriers.barrier2.open".
     *
     * @return The evaluation result.
     */
    barriers_barrier2_open_() {
        return ((spec.barriers_barrier2_A_) == (spec.specEnum._rest)) && ((spec.barriers_barrier2_S_) == (spec.specEnum._open));
    }

    /**
     * Evaluates algebraic variable "barriers.barrier2.closed".
     *
     * @return The evaluation result.
     */
    barriers_barrier2_closed_() {
        return ((spec.barriers_barrier2_A_) == (spec.specEnum._rest)) && ((spec.barriers_barrier2_S_) == (spec.specEnum._closed));
    }

    /**
     * Evaluates algebraic variable "barriers.barrier2.f_sc".
     *
     * @return The evaluation result.
     */
    barriers_barrier2_f_sc_() {
        return spec.FTC_D_bar2_f_;
    }

    /**
     * Evaluates algebraic variable "barriers.barrier3.open".
     *
     * @return The evaluation result.
     */
    barriers_barrier3_open_() {
        return ((spec.barriers_barrier3_A_) == (spec.specEnum._rest)) && ((spec.barriers_barrier3_S_) == (spec.specEnum._open));
    }

    /**
     * Evaluates algebraic variable "barriers.barrier3.closed".
     *
     * @return The evaluation result.
     */
    barriers_barrier3_closed_() {
        return ((spec.barriers_barrier3_A_) == (spec.specEnum._rest)) && ((spec.barriers_barrier3_S_) == (spec.specEnum._closed));
    }

    /**
     * Evaluates algebraic variable "barriers.barrier3.f_sc".
     *
     * @return The evaluation result.
     */
    barriers_barrier3_f_sc_() {
        return spec.FTC_D_bar3_f_;
    }

    /**
     * Evaluates algebraic variable "barriers.barrier4.open".
     *
     * @return The evaluation result.
     */
    barriers_barrier4_open_() {
        return ((spec.barriers_barrier4_A_) == (spec.specEnum._rest)) && ((spec.barriers_barrier4_S_) == (spec.specEnum._open));
    }

    /**
     * Evaluates algebraic variable "barriers.barrier4.closed".
     *
     * @return The evaluation result.
     */
    barriers_barrier4_closed_() {
        return ((spec.barriers_barrier4_A_) == (spec.specEnum._rest)) && ((spec.barriers_barrier4_S_) == (spec.specEnum._closed));
    }

    /**
     * Evaluates algebraic variable "barriers.barrier4.f_sc".
     *
     * @return The evaluation result.
     */
    barriers_barrier4_f_sc_() {
        return spec.FTC_D_bar4_f_;
    }

    /**
     * Evaluates algebraic variable "barriers.barrier5.open".
     *
     * @return The evaluation result.
     */
    barriers_barrier5_open_() {
        return ((spec.barriers_barrier5_A_) == (spec.specEnum._rest)) && ((spec.barriers_barrier5_S_) == (spec.specEnum._open));
    }

    /**
     * Evaluates algebraic variable "barriers.barrier5.closed".
     *
     * @return The evaluation result.
     */
    barriers_barrier5_closed_() {
        return ((spec.barriers_barrier5_A_) == (spec.specEnum._rest)) && ((spec.barriers_barrier5_S_) == (spec.specEnum._closed));
    }

    /**
     * Evaluates algebraic variable "barriers.barrier5.f_sc".
     *
     * @return The evaluation result.
     */
    barriers_barrier5_f_sc_() {
        return spec.FTC_D_bar5_f_;
    }

    /**
     * Evaluates algebraic variable "barriers.barrier6.open".
     *
     * @return The evaluation result.
     */
    barriers_barrier6_open_() {
        return ((spec.barriers_barrier6_A_) == (spec.specEnum._rest)) && ((spec.barriers_barrier6_S_) == (spec.specEnum._open));
    }

    /**
     * Evaluates algebraic variable "barriers.barrier6.closed".
     *
     * @return The evaluation result.
     */
    barriers_barrier6_closed_() {
        return ((spec.barriers_barrier6_A_) == (spec.specEnum._rest)) && ((spec.barriers_barrier6_S_) == (spec.specEnum._closed));
    }

    /**
     * Evaluates algebraic variable "barriers.barrier6.f_sc".
     *
     * @return The evaluation result.
     */
    barriers_barrier6_f_sc_() {
        return spec.FTC_D_bar6_f_;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.RedOrRedRed".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_RedOrRedRed_() {
        return (spec.shipping_signs_upstream_N_RedOrRedRed_()) && (spec.shipping_signs_upstream_S_RedOrRedRed_());
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.command_rd".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_command_rd_() {
        return (spec.shipping_signs_upstream_button_red_) == (spec.specEnum._pushed);
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.command_rg".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_command_rg_() {
        return ((spec.shipping_signs_upstream_button_redgreen_) == (spec.specEnum._pushed)) && ((spec.shipping_signs_upstream_button_red_) != (spec.specEnum._pushed));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.command_gn".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_command_gn_() {
        return (((spec.shipping_signs_upstream_button_green_) == (spec.specEnum._pushed)) && ((spec.shipping_signs_upstream_button_red_) != (spec.specEnum._pushed))) && ((spec.shipping_signs_upstream_button_redgreen_) != (spec.specEnum._pushed));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.command_sp".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_command_sp_() {
        return ((spec.shipping_signs_upstream_button_redred_) == (spec.specEnum._pushed)) && ((spec.shipping_signs_upstream_button_red_) != (spec.specEnum._pushed));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.RedOrRedRed".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_RedOrRedRed_() {
        return (spec.shipping_signs_downstream_N_RedOrRedRed_()) && (spec.shipping_signs_downstream_S_RedOrRedRed_());
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.command_rd".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_command_rd_() {
        return (spec.shipping_signs_downstream_button_red_) == (spec.specEnum._pushed);
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.command_rg".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_command_rg_() {
        return ((spec.shipping_signs_downstream_button_redgreen_) == (spec.specEnum._pushed)) && ((spec.shipping_signs_downstream_button_red_) != (spec.specEnum._pushed));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.command_gn".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_command_gn_() {
        return (((spec.shipping_signs_downstream_button_green_) == (spec.specEnum._pushed)) && ((spec.shipping_signs_downstream_button_red_) != (spec.specEnum._pushed))) && ((spec.shipping_signs_downstream_button_redgreen_) != (spec.specEnum._pushed));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.command_sp".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_command_sp_() {
        return ((spec.shipping_signs_downstream_button_redred_) == (spec.specEnum._pushed)) && ((spec.shipping_signs_downstream_button_red_) != (spec.specEnum._pushed));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps1.on".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps1_on_() {
        return ((spec.LTS_presigns_ps1_A_) == (spec.specEnum._on)) && ((spec.LTS_presigns_ps1_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps1.off".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps1_off_() {
        return ((spec.LTS_presigns_ps1_A_) == (spec.specEnum._off)) && ((spec.LTS_presigns_ps1_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps1.f".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps1_f_() {
        return spec.FTC_D_ps1_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps2.on".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps2_on_() {
        return ((spec.LTS_presigns_ps2_A_) == (spec.specEnum._on)) && ((spec.LTS_presigns_ps2_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps2.off".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps2_off_() {
        return ((spec.LTS_presigns_ps2_A_) == (spec.specEnum._off)) && ((spec.LTS_presigns_ps2_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps2.f".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps2_f_() {
        return spec.FTC_D_ps2_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps3.on".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps3_on_() {
        return ((spec.LTS_presigns_ps3_A_) == (spec.specEnum._on)) && ((spec.LTS_presigns_ps3_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps3.off".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps3_off_() {
        return ((spec.LTS_presigns_ps3_A_) == (spec.specEnum._off)) && ((spec.LTS_presigns_ps3_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps3.f".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps3_f_() {
        return spec.FTC_D_ps3_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps4.on".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps4_on_() {
        return ((spec.LTS_presigns_ps4_A_) == (spec.specEnum._on)) && ((spec.LTS_presigns_ps4_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps4.off".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps4_off_() {
        return ((spec.LTS_presigns_ps4_A_) == (spec.specEnum._off)) && ((spec.LTS_presigns_ps4_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps4.f".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps4_f_() {
        return spec.FTC_D_ps4_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps5.on".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps5_on_() {
        return ((spec.LTS_presigns_ps5_A_) == (spec.specEnum._on)) && ((spec.LTS_presigns_ps5_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps5.off".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps5_off_() {
        return ((spec.LTS_presigns_ps5_A_) == (spec.specEnum._off)) && ((spec.LTS_presigns_ps5_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps5.f".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps5_f_() {
        return spec.FTC_D_ps5_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps6.on".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps6_on_() {
        return ((spec.LTS_presigns_ps6_A_) == (spec.specEnum._on)) && ((spec.LTS_presigns_ps6_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps6.off".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps6_off_() {
        return ((spec.LTS_presigns_ps6_A_) == (spec.specEnum._off)) && ((spec.LTS_presigns_ps6_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.presigns.ps6.f".
     *
     * @return The evaluation result.
     */
    LTS_presigns_ps6_f_() {
        return spec.FTC_D_ps6_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop1.on".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop1_on_() {
        return ((spec.LTS_stopsigns_stop1_A_) == (spec.specEnum._on)) && ((spec.LTS_stopsigns_stop1_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop1.off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop1_off_() {
        return ((spec.LTS_stopsigns_stop1_A_) == (spec.specEnum._off)) && ((spec.LTS_stopsigns_stop1_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop1.f".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop1_f_() {
        return spec.FTC_D_s1_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop2.on".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop2_on_() {
        return ((spec.LTS_stopsigns_stop2_A_) == (spec.specEnum._on)) && ((spec.LTS_stopsigns_stop2_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop2.off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop2_off_() {
        return ((spec.LTS_stopsigns_stop2_A_) == (spec.specEnum._off)) && ((spec.LTS_stopsigns_stop2_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop2.f".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop2_f_() {
        return spec.FTC_D_s2_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop3.on".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop3_on_() {
        return ((spec.LTS_stopsigns_stop3_A_) == (spec.specEnum._on)) && ((spec.LTS_stopsigns_stop3_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop3.off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop3_off_() {
        return ((spec.LTS_stopsigns_stop3_A_) == (spec.specEnum._off)) && ((spec.LTS_stopsigns_stop3_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop3.f".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop3_f_() {
        return spec.FTC_D_s3_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop4.on".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop4_on_() {
        return ((spec.LTS_stopsigns_stop4_A_) == (spec.specEnum._on)) && ((spec.LTS_stopsigns_stop4_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop4.off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop4_off_() {
        return ((spec.LTS_stopsigns_stop4_A_) == (spec.specEnum._off)) && ((spec.LTS_stopsigns_stop4_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop4.f".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop4_f_() {
        return spec.FTC_D_s4_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop5.on".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop5_on_() {
        return ((spec.LTS_stopsigns_stop5_A_) == (spec.specEnum._on)) && ((spec.LTS_stopsigns_stop5_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop5.off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop5_off_() {
        return ((spec.LTS_stopsigns_stop5_A_) == (spec.specEnum._off)) && ((spec.LTS_stopsigns_stop5_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop5.f".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop5_f_() {
        return spec.FTC_D_s5_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop6.on".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop6_on_() {
        return ((spec.LTS_stopsigns_stop6_A_) == (spec.specEnum._on)) && ((spec.LTS_stopsigns_stop6_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop6.off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop6_off_() {
        return ((spec.LTS_stopsigns_stop6_A_) == (spec.specEnum._off)) && ((spec.LTS_stopsigns_stop6_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop6.f".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop6_f_() {
        return spec.FTC_D_s6_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop7.on".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop7_on_() {
        return ((spec.LTS_stopsigns_stop7_A_) == (spec.specEnum._on)) && ((spec.LTS_stopsigns_stop7_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop7.off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop7_off_() {
        return ((spec.LTS_stopsigns_stop7_A_) == (spec.specEnum._off)) && ((spec.LTS_stopsigns_stop7_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop7.f".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop7_f_() {
        return spec.FTC_D_s7_f_;
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop8.on".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop8_on_() {
        return ((spec.LTS_stopsigns_stop8_A_) == (spec.specEnum._on)) && ((spec.LTS_stopsigns_stop8_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop8.off".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop8_off_() {
        return ((spec.LTS_stopsigns_stop8_A_) == (spec.specEnum._off)) && ((spec.LTS_stopsigns_stop8_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "LTS.stopsigns.stop8.f".
     *
     * @return The evaluation result.
     */
    LTS_stopsigns_stop8_f_() {
        return spec.FTC_D_s8_f_;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.RedOrRedRed".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_RedOrRedRed_() {
        return (((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._red)) && (spec.shipping_signs_upstream_N_S_red_())) || (((spec.shipping_signs_upstream_N_A_) == (spec.specEnum._redred)) && (spec.shipping_signs_upstream_N_S_redred_()));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_red".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_red_() {
        return (((spec.shipping_signs_upstream_N_S_R_) == (spec.specEnum._on)) && ((spec.shipping_signs_upstream_N_S_G_) == (spec.specEnum._off))) && ((spec.shipping_signs_upstream_N_S_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_green".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_green_() {
        return (((spec.shipping_signs_upstream_N_S_R_) == (spec.specEnum._off)) && ((spec.shipping_signs_upstream_N_S_G_) == (spec.specEnum._on))) && ((spec.shipping_signs_upstream_N_S_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_redgreen".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_redgreen_() {
        return (((spec.shipping_signs_upstream_N_S_R_) == (spec.specEnum._on)) && ((spec.shipping_signs_upstream_N_S_G_) == (spec.specEnum._on))) && ((spec.shipping_signs_upstream_N_S_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_redred".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_redred_() {
        return (((spec.shipping_signs_upstream_N_S_R_) == (spec.specEnum._on)) && ((spec.shipping_signs_upstream_N_S_G_) == (spec.specEnum._off))) && ((spec.shipping_signs_upstream_N_S_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.RedOrRedRed".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_RedOrRedRed_() {
        return (((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._red)) && (spec.shipping_signs_upstream_S_S_red_())) || (((spec.shipping_signs_upstream_S_A_) == (spec.specEnum._redred)) && (spec.shipping_signs_upstream_S_S_redred_()));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_red".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_red_() {
        return (((spec.shipping_signs_upstream_S_S_R_) == (spec.specEnum._on)) && ((spec.shipping_signs_upstream_S_S_G_) == (spec.specEnum._off))) && ((spec.shipping_signs_upstream_S_S_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_green".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_green_() {
        return (((spec.shipping_signs_upstream_S_S_R_) == (spec.specEnum._off)) && ((spec.shipping_signs_upstream_S_S_G_) == (spec.specEnum._on))) && ((spec.shipping_signs_upstream_S_S_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_redgreen".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_redgreen_() {
        return (((spec.shipping_signs_upstream_S_S_R_) == (spec.specEnum._on)) && ((spec.shipping_signs_upstream_S_S_G_) == (spec.specEnum._on))) && ((spec.shipping_signs_upstream_S_S_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_redred".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_redred_() {
        return (((spec.shipping_signs_upstream_S_S_R_) == (spec.specEnum._on)) && ((spec.shipping_signs_upstream_S_S_G_) == (spec.specEnum._off))) && ((spec.shipping_signs_upstream_S_S_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.RedOrRedRed".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_RedOrRedRed_() {
        return (((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._red)) && (spec.shipping_signs_downstream_N_S_red_())) || (((spec.shipping_signs_downstream_N_A_) == (spec.specEnum._redred)) && (spec.shipping_signs_downstream_N_S_redred_()));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_red".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_red_() {
        return (((spec.shipping_signs_downstream_N_S_R_) == (spec.specEnum._on)) && ((spec.shipping_signs_downstream_N_S_G_) == (spec.specEnum._off))) && ((spec.shipping_signs_downstream_N_S_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_green".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_green_() {
        return (((spec.shipping_signs_downstream_N_S_R_) == (spec.specEnum._off)) && ((spec.shipping_signs_downstream_N_S_G_) == (spec.specEnum._on))) && ((spec.shipping_signs_downstream_N_S_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_redgreen".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_redgreen_() {
        return (((spec.shipping_signs_downstream_N_S_R_) == (spec.specEnum._on)) && ((spec.shipping_signs_downstream_N_S_G_) == (spec.specEnum._on))) && ((spec.shipping_signs_downstream_N_S_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_redred".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_redred_() {
        return (((spec.shipping_signs_downstream_N_S_R_) == (spec.specEnum._on)) && ((spec.shipping_signs_downstream_N_S_G_) == (spec.specEnum._off))) && ((spec.shipping_signs_downstream_N_S_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.RedOrRedRed".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_RedOrRedRed_() {
        return (((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._red)) && (spec.shipping_signs_downstream_S_S_red_())) || (((spec.shipping_signs_downstream_S_A_) == (spec.specEnum._redred)) && (spec.shipping_signs_downstream_S_S_redred_()));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_red".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_red_() {
        return (((spec.shipping_signs_downstream_S_S_R_) == (spec.specEnum._on)) && ((spec.shipping_signs_downstream_S_S_G_) == (spec.specEnum._off))) && ((spec.shipping_signs_downstream_S_S_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_green".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_green_() {
        return (((spec.shipping_signs_downstream_S_S_R_) == (spec.specEnum._off)) && ((spec.shipping_signs_downstream_S_S_G_) == (spec.specEnum._on))) && ((spec.shipping_signs_downstream_S_S_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_redgreen".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_redgreen_() {
        return (((spec.shipping_signs_downstream_S_S_R_) == (spec.specEnum._on)) && ((spec.shipping_signs_downstream_S_S_G_) == (spec.specEnum._on))) && ((spec.shipping_signs_downstream_S_S_S_) == (spec.specEnum._off));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_redred".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_redred_() {
        return (((spec.shipping_signs_downstream_S_S_R_) == (spec.specEnum._on)) && ((spec.shipping_signs_downstream_S_S_G_) == (spec.specEnum._off))) && ((spec.shipping_signs_downstream_S_S_S_) == (spec.specEnum._on));
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_R.init_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_R_init_on_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_R.mark_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_R_mark_on_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_R.mark_off".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_R_mark_off_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_G.init_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_G_init_on_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_G.mark_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_G_mark_on_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_G.mark_off".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_G_mark_off_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_S.init_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_S_init_on_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_S.mark_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_S_mark_on_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.N.S_S.mark_off".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_N_S_S_mark_off_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_R.init_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_R_init_on_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_R.mark_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_R_mark_on_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_R.mark_off".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_R_mark_off_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_G.init_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_G_init_on_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_G.mark_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_G_mark_on_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_G.mark_off".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_G_mark_off_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_S.init_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_S_init_on_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_S.mark_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_S_mark_on_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.upstream.S.S_S.mark_off".
     *
     * @return The evaluation result.
     */
    shipping_signs_upstream_S_S_S_mark_off_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_R.init_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_R_init_on_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_R.mark_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_R_mark_on_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_R.mark_off".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_R_mark_off_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_G.init_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_G_init_on_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_G.mark_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_G_mark_on_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_G.mark_off".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_G_mark_off_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_S.init_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_S_init_on_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_S.mark_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_S_mark_on_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.N.S_S.mark_off".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_N_S_S_mark_off_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_R.init_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_R_init_on_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_R.mark_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_R_mark_on_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_R.mark_off".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_R_mark_off_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_G.init_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_G_init_on_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_G.mark_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_G_mark_on_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_G.mark_off".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_G_mark_off_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_S.init_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_S_init_on_() {
        return false;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_S.mark_on".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_S_mark_on_() {
        return true;
    }

    /**
     * Evaluates algebraic variable "shipping_signs.downstream.S.S_S.mark_off".
     *
     * @return The evaluation result.
     */
    shipping_signs_downstream_S_S_S_mark_off_() {
        return true;
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
