/** Tuples. */


/** spec code generated from a CIF specification. */
class spec_class {
    /** specEnum declaration. It contains the single merged enum from the CIF model. */
    specEnum = Object.freeze({
        /** Literal "CH0". */
        _CH0: Symbol("CH0"),

        /** Literal "CH0_ExposeRunning". */
        _CH0_ExposeRunning: Symbol("CH0_ExposeRunning"),

        /** Literal "CH0_MeasureRunning". */
        _CH0_MeasureRunning: Symbol("CH0_MeasureRunning"),

        /** Literal "CH0toLR". */
        _CH0toLR: Symbol("CH0toLR"),

        /** Literal "CH0toUR". */
        _CH0toUR: Symbol("CH0toUR"),

        /** Literal "CH1". */
        _CH1: Symbol("CH1"),

        /** Literal "CH1_ExposeRunning". */
        _CH1_ExposeRunning: Symbol("CH1_ExposeRunning"),

        /** Literal "CH1_MeasureRunning". */
        _CH1_MeasureRunning: Symbol("CH1_MeasureRunning"),

        /** Literal "CH1toLR". */
        _CH1toLR: Symbol("CH1toLR"),

        /** Literal "CH1toUR". */
        _CH1toUR: Symbol("CH1toUR"),

        /** Literal "CTC0". */
        _CTC0: Symbol("CTC0"),

        /** Literal "CTC0toLR". */
        _CTC0toLR: Symbol("CTC0toLR"),

        /** Literal "CTC1". */
        _CTC1: Symbol("CTC1"),

        /** Literal "CTC1toUR". */
        _CTC1toUR: Symbol("CTC1toUR"),

        /** Literal "DU". */
        _DU: Symbol("DU"),

        /** Literal "DUtoLR". */
        _DUtoLR: Symbol("DUtoLR"),

        /** Literal "DUtoTR". */
        _DUtoTR: Symbol("DUtoTR"),

        /** Literal "DUtoUR". */
        _DUtoUR: Symbol("DUtoUR"),

        /** Literal "LR". */
        _LR: Symbol("LR"),

        /** Literal "LRtoCH0". */
        _LRtoCH0: Symbol("LRtoCH0"),

        /** Literal "LRtoCH1". */
        _LRtoCH1: Symbol("LRtoCH1"),

        /** Literal "LRtoCTC0". */
        _LRtoCTC0: Symbol("LRtoCTC0"),

        /** Literal "LRtoDU". */
        _LRtoDU: Symbol("LRtoDU"),

        /** Literal "LRtoPA". */
        _LRtoPA: Symbol("LRtoPA"),

        /** Literal "PA". */
        _PA: Symbol("PA"),

        /** Literal "PA_AlignRunning". */
        _PA_AlignRunning: Symbol("PA_AlignRunning"),

        /** Literal "PAtoLR". */
        _PAtoLR: Symbol("PAtoLR"),

        /** Literal "PAtoUR". */
        _PAtoUR: Symbol("PAtoUR"),

        /** Literal "s0". */
        _s0: Symbol("s0"),

        /** Literal "s1". */
        _s1: Symbol("s1"),

        /** Literal "s2". */
        _s2: Symbol("s2"),

        /** Literal "s3". */
        _s3: Symbol("s3"),

        /** Literal "s4". */
        _s4: Symbol("s4"),

        /** Literal "s5". */
        _s5: Symbol("s5"),

        /** Literal "s6". */
        _s6: Symbol("s6"),

        /** Literal "s7". */
        _s7: Symbol("s7"),

        /** Literal "s8". */
        _s8: Symbol("s8"),

        /** Literal "SUB". */
        _SUB: Symbol("SUB"),

        /** Literal "SUB_ConditionRunning". */
        _SUB_ConditionRunning: Symbol("SUB_ConditionRunning"),

        /** Literal "SUBtoUR". */
        _SUBtoUR: Symbol("SUBtoUR"),

        /** Literal "TR". */
        _TR: Symbol("TR"),

        /** Literal "TRtoSUB". */
        _TRtoSUB: Symbol("TRtoSUB"),

        /** Literal "UR". */
        _UR: Symbol("UR"),

        /** Literal "URtoCTC1". */
        _URtoCTC1: Symbol("URtoCTC1"),

        /** Literal "URtoDU". */
        _URtoDU: Symbol("URtoDU"),

        /** Literal "URtoPA". */
        _URtoPA: Symbol("URtoPA"),

        /** Literal "URtoSUB". */
        _URtoSUB: Symbol("URtoSUB")
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
        "assignCH0_0",
        "assignCH0orCH1_0",
        "assignCH1_0",
        "CH0_Expose_0_e",
        "CH0_Expose_0_s",
        "CH0_Measure_0_e",
        "CH0_Measure_0_s",
        "CH0toLR_0_e",
        "CH0toLR_0_s",
        "CH0toLR_1_e",
        "CH0toLR_1_s",
        "CH0toLR_2_e",
        "CH0toLR_2_s",
        "CH0toUR_0_e",
        "CH0toUR_0_s",
        "CH0toUR_1_e",
        "CH0toUR_1_s",
        "CH0toUR_2_e",
        "CH0toUR_2_s",
        "CH1_Expose_0_e",
        "CH1_Expose_0_s",
        "CH1_Measure_0_e",
        "CH1_Measure_0_s",
        "CH1toLR_0_e",
        "CH1toLR_0_s",
        "CH1toLR_1_e",
        "CH1toLR_1_s",
        "CH1toLR_2_e",
        "CH1toLR_2_s",
        "CH1toUR_0_e",
        "CH1toUR_0_s",
        "CH1toUR_1_e",
        "CH1toUR_1_s",
        "CH1toUR_2_e",
        "CH1toUR_2_s",
        "CTC0toLR_0_e",
        "CTC0toLR_0_s",
        "CTC0toLR_1_e",
        "CTC0toLR_1_s",
        "CTC0toLR_2_e",
        "CTC0toLR_2_s",
        "CTC1toUR_0_e",
        "CTC1toUR_0_s",
        "CTC1toUR_1_e",
        "CTC1toUR_1_s",
        "CTC1toUR_2_e",
        "CTC1toUR_2_s",
        "DUtoLR_0_e",
        "DUtoLR_0_s",
        "DUtoLR_1_e",
        "DUtoLR_1_s",
        "DUtoLR_2_e",
        "DUtoLR_2_s",
        "DUtoTR_0_e",
        "DUtoTR_0_s",
        "DUtoTR_1_e",
        "DUtoTR_1_s",
        "DUtoTR_2_e",
        "DUtoTR_2_s",
        "DUtoUR_0_e",
        "DUtoUR_0_s",
        "DUtoUR_1_e",
        "DUtoUR_1_s",
        "DUtoUR_2_e",
        "DUtoUR_2_s",
        "LRtoCH0_0_e",
        "LRtoCH0_0_s",
        "LRtoCH0_1_e",
        "LRtoCH0_1_s",
        "LRtoCH0_2_e",
        "LRtoCH0_2_s",
        "LRtoCH1_0_e",
        "LRtoCH1_0_s",
        "LRtoCH1_1_e",
        "LRtoCH1_1_s",
        "LRtoCH1_2_e",
        "LRtoCH1_2_s",
        "LRtoCTC0_0_e",
        "LRtoCTC0_0_s",
        "LRtoCTC0_1_e",
        "LRtoCTC0_1_s",
        "LRtoCTC0_2_e",
        "LRtoCTC0_2_s",
        "LRtoDU_0_e",
        "LRtoDU_0_s",
        "LRtoDU_1_e",
        "LRtoDU_1_s",
        "LRtoDU_2_e",
        "LRtoDU_2_s",
        "LRtoPA_0_e",
        "LRtoPA_0_s",
        "LRtoPA_1_e",
        "LRtoPA_1_s",
        "LRtoPA_2_e",
        "LRtoPA_2_s",
        "PA_Align_0_e",
        "PA_Align_0_s",
        "PA_Align_1_e",
        "PA_Align_1_s",
        "PA_Align_2_e",
        "PA_Align_2_s",
        "PAtoLR_0_e",
        "PAtoLR_0_s",
        "PAtoLR_1_e",
        "PAtoLR_1_s",
        "PAtoLR_2_e",
        "PAtoLR_2_s",
        "PAtoUR_0_e",
        "PAtoUR_0_s",
        "PAtoUR_1_e",
        "PAtoUR_1_s",
        "PAtoUR_2_e",
        "PAtoUR_2_s",
        "SUB_Condition_0_e",
        "SUB_Condition_0_s",
        "SUBtoUR_0_e",
        "SUBtoUR_0_s",
        "SUBtoUR_1_e",
        "SUBtoUR_1_s",
        "SUBtoUR_2_e",
        "SUBtoUR_2_s",
        "swalmen.c_0",
        "swalmen.c_1",
        "swalmen.c_2",
        "swalmen.c_3",
        "swalmen.c_4",
        "swalmen.c_5",
        "swalmen.c_6",
        "swalmen.c_7",
        "swalmen.c_8",
        "TRtoSUB_0_e",
        "TRtoSUB_0_s",
        "TRtoSUB_1_e",
        "TRtoSUB_1_s",
        "TRtoSUB_2_e",
        "TRtoSUB_2_s",
        "URtoCTC1_0_e",
        "URtoCTC1_0_s",
        "URtoCTC1_1_e",
        "URtoCTC1_1_s",
        "URtoCTC1_2_e",
        "URtoCTC1_2_s",
        "URtoDU_0_e",
        "URtoDU_0_s",
        "URtoDU_1_e",
        "URtoDU_1_s",
        "URtoDU_2_e",
        "URtoDU_2_s",
        "URtoPA_0_e",
        "URtoPA_0_s",
        "URtoPA_1_e",
        "URtoPA_1_s",
        "URtoPA_2_e",
        "URtoPA_2_s",
        "URtoSUB_0_e",
        "URtoSUB_0_s",
        "URtoSUB_1_e",
        "URtoSUB_1_s",
        "URtoSUB_2_e",
        "URtoSUB_2_s"
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


    /** Discrete variable "swalmen". */
    swalmen_;

    /** Discrete variable "WaferPlant_0". */
    WaferPlant_0_;

    /** Discrete variable "WaferPlant_1". */
    WaferPlant_1_;

    /** Discrete variable "WaferPlant_2". */
    WaferPlant_2_;


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

            // Event "assignCH0_0".
            edgeExecuted |= this.execEdge0();

            // Event "assignCH0orCH1_0".
            edgeExecuted |= this.execEdge1();

            // Event "assignCH1_0".
            edgeExecuted |= this.execEdge2();

            // Event "CH0_Expose_0_e".
            edgeExecuted |= this.execEdge3();

            // Event "CH0_Measure_0_e".
            edgeExecuted |= this.execEdge4();

            // Event "CH0toLR_0_e".
            edgeExecuted |= this.execEdge5();

            // Event "CH0toLR_1_e".
            edgeExecuted |= this.execEdge6();

            // Event "CH0toLR_2_e".
            edgeExecuted |= this.execEdge7();

            // Event "CH0toUR_0_e".
            edgeExecuted |= this.execEdge8();

            // Event "CH0toUR_1_e".
            edgeExecuted |= this.execEdge9();

            // Event "CH0toUR_2_e".
            edgeExecuted |= this.execEdge10();

            // Event "CH1_Expose_0_e".
            edgeExecuted |= this.execEdge11();

            // Event "CH1_Measure_0_e".
            edgeExecuted |= this.execEdge12();

            // Event "CH1toLR_0_e".
            edgeExecuted |= this.execEdge13();

            // Event "CH1toLR_1_e".
            edgeExecuted |= this.execEdge14();

            // Event "CH1toLR_2_e".
            edgeExecuted |= this.execEdge15();

            // Event "CH1toUR_0_e".
            edgeExecuted |= this.execEdge16();

            // Event "CH1toUR_1_e".
            edgeExecuted |= this.execEdge17();

            // Event "CH1toUR_2_e".
            edgeExecuted |= this.execEdge18();

            // Event "CTC0toLR_0_e".
            edgeExecuted |= this.execEdge19();

            // Event "CTC0toLR_1_e".
            edgeExecuted |= this.execEdge20();

            // Event "CTC0toLR_2_e".
            edgeExecuted |= this.execEdge21();

            // Event "CTC1toUR_0_e".
            edgeExecuted |= this.execEdge22();

            // Event "CTC1toUR_1_e".
            edgeExecuted |= this.execEdge23();

            // Event "CTC1toUR_2_e".
            edgeExecuted |= this.execEdge24();

            // Event "DUtoLR_0_e".
            edgeExecuted |= this.execEdge25();

            // Event "DUtoLR_1_e".
            edgeExecuted |= this.execEdge26();

            // Event "DUtoLR_2_e".
            edgeExecuted |= this.execEdge27();

            // Event "DUtoTR_0_e".
            edgeExecuted |= this.execEdge28();

            // Event "DUtoTR_1_e".
            edgeExecuted |= this.execEdge29();

            // Event "DUtoTR_2_e".
            edgeExecuted |= this.execEdge30();

            // Event "DUtoUR_0_e".
            edgeExecuted |= this.execEdge31();

            // Event "DUtoUR_1_e".
            edgeExecuted |= this.execEdge32();

            // Event "DUtoUR_2_e".
            edgeExecuted |= this.execEdge33();

            // Event "LRtoCH0_0_e".
            edgeExecuted |= this.execEdge34();

            // Event "LRtoCH0_1_e".
            edgeExecuted |= this.execEdge35();

            // Event "LRtoCH0_2_e".
            edgeExecuted |= this.execEdge36();

            // Event "LRtoCH1_0_e".
            edgeExecuted |= this.execEdge37();

            // Event "LRtoCH1_1_e".
            edgeExecuted |= this.execEdge38();

            // Event "LRtoCH1_2_e".
            edgeExecuted |= this.execEdge39();

            // Event "LRtoCTC0_0_e".
            edgeExecuted |= this.execEdge40();

            // Event "LRtoCTC0_1_e".
            edgeExecuted |= this.execEdge41();

            // Event "LRtoCTC0_2_e".
            edgeExecuted |= this.execEdge42();

            // Event "LRtoDU_0_e".
            edgeExecuted |= this.execEdge43();

            // Event "LRtoDU_1_e".
            edgeExecuted |= this.execEdge44();

            // Event "LRtoDU_2_e".
            edgeExecuted |= this.execEdge45();

            // Event "LRtoPA_0_e".
            edgeExecuted |= this.execEdge46();

            // Event "LRtoPA_1_e".
            edgeExecuted |= this.execEdge47();

            // Event "LRtoPA_2_e".
            edgeExecuted |= this.execEdge48();

            // Event "PA_Align_0_e".
            edgeExecuted |= this.execEdge49();

            // Event "PA_Align_1_e".
            edgeExecuted |= this.execEdge50();

            // Event "PA_Align_2_e".
            edgeExecuted |= this.execEdge51();

            // Event "PAtoLR_0_e".
            edgeExecuted |= this.execEdge52();

            // Event "PAtoLR_1_e".
            edgeExecuted |= this.execEdge53();

            // Event "PAtoLR_2_e".
            edgeExecuted |= this.execEdge54();

            // Event "PAtoUR_0_e".
            edgeExecuted |= this.execEdge55();

            // Event "PAtoUR_1_e".
            edgeExecuted |= this.execEdge56();

            // Event "PAtoUR_2_e".
            edgeExecuted |= this.execEdge57();

            // Event "SUB_Condition_0_e".
            edgeExecuted |= this.execEdge58();

            // Event "SUBtoUR_0_e".
            edgeExecuted |= this.execEdge59();

            // Event "SUBtoUR_1_e".
            edgeExecuted |= this.execEdge60();

            // Event "SUBtoUR_2_e".
            edgeExecuted |= this.execEdge61();

            // Event "TRtoSUB_0_e".
            edgeExecuted |= this.execEdge62();

            // Event "TRtoSUB_1_e".
            edgeExecuted |= this.execEdge63();

            // Event "TRtoSUB_2_e".
            edgeExecuted |= this.execEdge64();

            // Event "URtoCTC1_0_e".
            edgeExecuted |= this.execEdge65();

            // Event "URtoCTC1_1_e".
            edgeExecuted |= this.execEdge66();

            // Event "URtoCTC1_2_e".
            edgeExecuted |= this.execEdge67();

            // Event "URtoDU_0_e".
            edgeExecuted |= this.execEdge68();

            // Event "URtoDU_1_e".
            edgeExecuted |= this.execEdge69();

            // Event "URtoDU_2_e".
            edgeExecuted |= this.execEdge70();

            // Event "URtoPA_0_e".
            edgeExecuted |= this.execEdge71();

            // Event "URtoPA_1_e".
            edgeExecuted |= this.execEdge72();

            // Event "URtoPA_2_e".
            edgeExecuted |= this.execEdge73();

            // Event "URtoSUB_0_e".
            edgeExecuted |= this.execEdge74();

            // Event "URtoSUB_1_e".
            edgeExecuted |= this.execEdge75();

            // Event "URtoSUB_2_e".
            edgeExecuted |= this.execEdge76();

            // Stop if no edge was executed.
            if (!edgeExecuted) {
                break;
            }
        }

        // Execute controllable edges as long as they are possible.
        while (true) {
            // Try to execute an edge for each event.
            var edgeExecuted = false;

            // Event "CH0_Expose_0_s".
            edgeExecuted |= this.execEdge77();

            // Event "CH0_Measure_0_s".
            edgeExecuted |= this.execEdge78();

            // Event "CH0toLR_0_s".
            edgeExecuted |= this.execEdge79();

            // Event "CH0toLR_1_s".
            edgeExecuted |= this.execEdge80();

            // Event "CH0toLR_2_s".
            edgeExecuted |= this.execEdge81();

            // Event "CH0toUR_0_s".
            edgeExecuted |= this.execEdge82();

            // Event "CH0toUR_1_s".
            edgeExecuted |= this.execEdge83();

            // Event "CH0toUR_2_s".
            edgeExecuted |= this.execEdge84();

            // Event "CH1_Expose_0_s".
            edgeExecuted |= this.execEdge85();

            // Event "CH1_Measure_0_s".
            edgeExecuted |= this.execEdge86();

            // Event "CH1toLR_0_s".
            edgeExecuted |= this.execEdge87();

            // Event "CH1toLR_1_s".
            edgeExecuted |= this.execEdge88();

            // Event "CH1toLR_2_s".
            edgeExecuted |= this.execEdge89();

            // Event "CH1toUR_0_s".
            edgeExecuted |= this.execEdge90();

            // Event "CH1toUR_1_s".
            edgeExecuted |= this.execEdge91();

            // Event "CH1toUR_2_s".
            edgeExecuted |= this.execEdge92();

            // Event "CTC0toLR_0_s".
            edgeExecuted |= this.execEdge93();

            // Event "CTC0toLR_1_s".
            edgeExecuted |= this.execEdge94();

            // Event "CTC0toLR_2_s".
            edgeExecuted |= this.execEdge95();

            // Event "CTC1toUR_0_s".
            edgeExecuted |= this.execEdge96();

            // Event "CTC1toUR_1_s".
            edgeExecuted |= this.execEdge97();

            // Event "CTC1toUR_2_s".
            edgeExecuted |= this.execEdge98();

            // Event "DUtoLR_0_s".
            edgeExecuted |= this.execEdge99();

            // Event "DUtoLR_1_s".
            edgeExecuted |= this.execEdge100();

            // Event "DUtoLR_2_s".
            edgeExecuted |= this.execEdge101();

            // Event "DUtoTR_0_s".
            edgeExecuted |= this.execEdge102();

            // Event "DUtoTR_1_s".
            edgeExecuted |= this.execEdge103();

            // Event "DUtoTR_2_s".
            edgeExecuted |= this.execEdge104();

            // Event "DUtoUR_0_s".
            edgeExecuted |= this.execEdge105();

            // Event "DUtoUR_1_s".
            edgeExecuted |= this.execEdge106();

            // Event "DUtoUR_2_s".
            edgeExecuted |= this.execEdge107();

            // Event "LRtoCH0_0_s".
            edgeExecuted |= this.execEdge108();

            // Event "LRtoCH0_1_s".
            edgeExecuted |= this.execEdge109();

            // Event "LRtoCH0_2_s".
            edgeExecuted |= this.execEdge110();

            // Event "LRtoCH1_0_s".
            edgeExecuted |= this.execEdge111();

            // Event "LRtoCH1_1_s".
            edgeExecuted |= this.execEdge112();

            // Event "LRtoCH1_2_s".
            edgeExecuted |= this.execEdge113();

            // Event "LRtoCTC0_0_s".
            edgeExecuted |= this.execEdge114();

            // Event "LRtoCTC0_1_s".
            edgeExecuted |= this.execEdge115();

            // Event "LRtoCTC0_2_s".
            edgeExecuted |= this.execEdge116();

            // Event "LRtoDU_0_s".
            edgeExecuted |= this.execEdge117();

            // Event "LRtoDU_1_s".
            edgeExecuted |= this.execEdge118();

            // Event "LRtoDU_2_s".
            edgeExecuted |= this.execEdge119();

            // Event "LRtoPA_0_s".
            edgeExecuted |= this.execEdge120();

            // Event "LRtoPA_1_s".
            edgeExecuted |= this.execEdge121();

            // Event "LRtoPA_2_s".
            edgeExecuted |= this.execEdge122();

            // Event "PA_Align_0_s".
            edgeExecuted |= this.execEdge123();

            // Event "PA_Align_1_s".
            edgeExecuted |= this.execEdge124();

            // Event "PA_Align_2_s".
            edgeExecuted |= this.execEdge125();

            // Event "PAtoLR_0_s".
            edgeExecuted |= this.execEdge126();

            // Event "PAtoLR_1_s".
            edgeExecuted |= this.execEdge127();

            // Event "PAtoLR_2_s".
            edgeExecuted |= this.execEdge128();

            // Event "PAtoUR_0_s".
            edgeExecuted |= this.execEdge129();

            // Event "PAtoUR_1_s".
            edgeExecuted |= this.execEdge130();

            // Event "PAtoUR_2_s".
            edgeExecuted |= this.execEdge131();

            // Event "SUB_Condition_0_s".
            edgeExecuted |= this.execEdge132();

            // Event "SUBtoUR_0_s".
            edgeExecuted |= this.execEdge133();

            // Event "SUBtoUR_1_s".
            edgeExecuted |= this.execEdge134();

            // Event "SUBtoUR_2_s".
            edgeExecuted |= this.execEdge135();

            // Event "swalmen.c_0".
            edgeExecuted |= this.execEdge136();

            // Event "swalmen.c_1".
            edgeExecuted |= this.execEdge137();

            // Event "swalmen.c_2".
            edgeExecuted |= this.execEdge138();

            // Event "swalmen.c_3".
            edgeExecuted |= this.execEdge139();

            // Event "swalmen.c_4".
            edgeExecuted |= this.execEdge140();

            // Event "swalmen.c_5".
            edgeExecuted |= this.execEdge141();

            // Event "swalmen.c_6".
            edgeExecuted |= this.execEdge142();

            // Event "swalmen.c_7".
            edgeExecuted |= this.execEdge143();

            // Event "swalmen.c_8".
            edgeExecuted |= this.execEdge144();

            // Event "TRtoSUB_0_s".
            edgeExecuted |= this.execEdge145();

            // Event "TRtoSUB_1_s".
            edgeExecuted |= this.execEdge146();

            // Event "TRtoSUB_2_s".
            edgeExecuted |= this.execEdge147();

            // Event "URtoCTC1_0_s".
            edgeExecuted |= this.execEdge148();

            // Event "URtoCTC1_1_s".
            edgeExecuted |= this.execEdge149();

            // Event "URtoCTC1_2_s".
            edgeExecuted |= this.execEdge150();

            // Event "URtoDU_0_s".
            edgeExecuted |= this.execEdge151();

            // Event "URtoDU_1_s".
            edgeExecuted |= this.execEdge152();

            // Event "URtoDU_2_s".
            edgeExecuted |= this.execEdge153();

            // Event "URtoPA_0_s".
            edgeExecuted |= this.execEdge154();

            // Event "URtoPA_1_s".
            edgeExecuted |= this.execEdge155();

            // Event "URtoPA_2_s".
            edgeExecuted |= this.execEdge156();

            // Event "URtoSUB_0_s".
            edgeExecuted |= this.execEdge157();

            // Event "URtoSUB_1_s".
            edgeExecuted |= this.execEdge158();

            // Event "URtoSUB_2_s".
            edgeExecuted |= this.execEdge159();

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
     * Execute code for edge with index 0 and event "assignCH0_0".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge0() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._TR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(0, true);
        if (this.doInfoEvent) this.infoEvent(0, true);

        if (this.doInfoEvent) this.infoEvent(0, false);
        if (this.doInfoPrintOutput) this.printOutput(0, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 1 and event "assignCH0orCH1_0".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge1() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._TR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(1, true);
        if (this.doInfoEvent) this.infoEvent(1, true);

        if (this.doInfoEvent) this.infoEvent(1, false);
        if (this.doInfoPrintOutput) this.printOutput(1, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 2 and event "assignCH1_0".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge2() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._TR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(2, true);
        if (this.doInfoEvent) this.infoEvent(2, true);

        if (this.doInfoEvent) this.infoEvent(2, false);
        if (this.doInfoPrintOutput) this.printOutput(2, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 3 and event "CH0_Expose_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge3() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH0_ExposeRunning);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(3, true);
        if (this.doInfoEvent) this.infoEvent(3, true);

        spec.WaferPlant_0_ = spec.specEnum._CH0;

        if (this.doInfoEvent) this.infoEvent(3, false);
        if (this.doInfoPrintOutput) this.printOutput(3, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 4 and event "CH0_Measure_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge4() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH0_MeasureRunning);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(5, true);
        if (this.doInfoEvent) this.infoEvent(5, true);

        spec.WaferPlant_0_ = spec.specEnum._CH0;

        if (this.doInfoEvent) this.infoEvent(5, false);
        if (this.doInfoPrintOutput) this.printOutput(5, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 5 and event "CH0toLR_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge5() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH0toLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(7, true);
        if (this.doInfoEvent) this.infoEvent(7, true);

        spec.WaferPlant_0_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(7, false);
        if (this.doInfoPrintOutput) this.printOutput(7, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 6 and event "CH0toLR_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge6() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._CH0toLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(9, true);
        if (this.doInfoEvent) this.infoEvent(9, true);

        spec.WaferPlant_1_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(9, false);
        if (this.doInfoPrintOutput) this.printOutput(9, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 7 and event "CH0toLR_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge7() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._CH0toLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(11, true);
        if (this.doInfoEvent) this.infoEvent(11, true);

        spec.WaferPlant_2_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(11, false);
        if (this.doInfoPrintOutput) this.printOutput(11, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 8 and event "CH0toUR_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge8() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH0toUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(13, true);
        if (this.doInfoEvent) this.infoEvent(13, true);

        spec.WaferPlant_0_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(13, false);
        if (this.doInfoPrintOutput) this.printOutput(13, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 9 and event "CH0toUR_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge9() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._CH0toUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(15, true);
        if (this.doInfoEvent) this.infoEvent(15, true);

        spec.WaferPlant_1_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(15, false);
        if (this.doInfoPrintOutput) this.printOutput(15, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 10 and event "CH0toUR_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge10() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._CH0toUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(17, true);
        if (this.doInfoEvent) this.infoEvent(17, true);

        spec.WaferPlant_2_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(17, false);
        if (this.doInfoPrintOutput) this.printOutput(17, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 11 and event "CH1_Expose_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge11() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH1_ExposeRunning);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(19, true);
        if (this.doInfoEvent) this.infoEvent(19, true);

        spec.WaferPlant_0_ = spec.specEnum._CH1;

        if (this.doInfoEvent) this.infoEvent(19, false);
        if (this.doInfoPrintOutput) this.printOutput(19, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 12 and event "CH1_Measure_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge12() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH1_MeasureRunning);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(21, true);
        if (this.doInfoEvent) this.infoEvent(21, true);

        spec.WaferPlant_0_ = spec.specEnum._CH1;

        if (this.doInfoEvent) this.infoEvent(21, false);
        if (this.doInfoPrintOutput) this.printOutput(21, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 13 and event "CH1toLR_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge13() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH1toLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(23, true);
        if (this.doInfoEvent) this.infoEvent(23, true);

        spec.WaferPlant_0_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(23, false);
        if (this.doInfoPrintOutput) this.printOutput(23, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 14 and event "CH1toLR_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge14() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._CH1toLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(25, true);
        if (this.doInfoEvent) this.infoEvent(25, true);

        spec.WaferPlant_1_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(25, false);
        if (this.doInfoPrintOutput) this.printOutput(25, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 15 and event "CH1toLR_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge15() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._CH1toLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(27, true);
        if (this.doInfoEvent) this.infoEvent(27, true);

        spec.WaferPlant_2_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(27, false);
        if (this.doInfoPrintOutput) this.printOutput(27, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 16 and event "CH1toUR_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge16() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH1toUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(29, true);
        if (this.doInfoEvent) this.infoEvent(29, true);

        spec.WaferPlant_0_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(29, false);
        if (this.doInfoPrintOutput) this.printOutput(29, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 17 and event "CH1toUR_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge17() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._CH1toUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(31, true);
        if (this.doInfoEvent) this.infoEvent(31, true);

        spec.WaferPlant_1_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(31, false);
        if (this.doInfoPrintOutput) this.printOutput(31, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 18 and event "CH1toUR_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge18() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._CH1toUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(33, true);
        if (this.doInfoEvent) this.infoEvent(33, true);

        spec.WaferPlant_2_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(33, false);
        if (this.doInfoPrintOutput) this.printOutput(33, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 19 and event "CTC0toLR_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge19() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CTC0toLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(35, true);
        if (this.doInfoEvent) this.infoEvent(35, true);

        spec.WaferPlant_0_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(35, false);
        if (this.doInfoPrintOutput) this.printOutput(35, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 20 and event "CTC0toLR_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge20() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._CTC0toLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(37, true);
        if (this.doInfoEvent) this.infoEvent(37, true);

        spec.WaferPlant_1_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(37, false);
        if (this.doInfoPrintOutput) this.printOutput(37, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 21 and event "CTC0toLR_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge21() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._CTC0toLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(39, true);
        if (this.doInfoEvent) this.infoEvent(39, true);

        spec.WaferPlant_2_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(39, false);
        if (this.doInfoPrintOutput) this.printOutput(39, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 22 and event "CTC1toUR_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge22() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CTC1toUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(41, true);
        if (this.doInfoEvent) this.infoEvent(41, true);

        spec.WaferPlant_0_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(41, false);
        if (this.doInfoPrintOutput) this.printOutput(41, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 23 and event "CTC1toUR_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge23() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._CTC1toUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(43, true);
        if (this.doInfoEvent) this.infoEvent(43, true);

        spec.WaferPlant_1_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(43, false);
        if (this.doInfoPrintOutput) this.printOutput(43, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 24 and event "CTC1toUR_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge24() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._CTC1toUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(45, true);
        if (this.doInfoEvent) this.infoEvent(45, true);

        spec.WaferPlant_2_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(45, false);
        if (this.doInfoPrintOutput) this.printOutput(45, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 25 and event "DUtoLR_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge25() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._DUtoLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(47, true);
        if (this.doInfoEvent) this.infoEvent(47, true);

        spec.WaferPlant_0_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(47, false);
        if (this.doInfoPrintOutput) this.printOutput(47, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 26 and event "DUtoLR_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge26() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._DUtoLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(49, true);
        if (this.doInfoEvent) this.infoEvent(49, true);

        spec.WaferPlant_1_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(49, false);
        if (this.doInfoPrintOutput) this.printOutput(49, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 27 and event "DUtoLR_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge27() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._DUtoLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(51, true);
        if (this.doInfoEvent) this.infoEvent(51, true);

        spec.WaferPlant_2_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(51, false);
        if (this.doInfoPrintOutput) this.printOutput(51, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 28 and event "DUtoTR_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge28() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._DUtoTR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(53, true);
        if (this.doInfoEvent) this.infoEvent(53, true);

        spec.WaferPlant_0_ = spec.specEnum._TR;

        if (this.doInfoEvent) this.infoEvent(53, false);
        if (this.doInfoPrintOutput) this.printOutput(53, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 29 and event "DUtoTR_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge29() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._DUtoTR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(55, true);
        if (this.doInfoEvent) this.infoEvent(55, true);

        spec.WaferPlant_1_ = spec.specEnum._TR;

        if (this.doInfoEvent) this.infoEvent(55, false);
        if (this.doInfoPrintOutput) this.printOutput(55, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 30 and event "DUtoTR_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge30() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._DUtoTR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(57, true);
        if (this.doInfoEvent) this.infoEvent(57, true);

        spec.WaferPlant_2_ = spec.specEnum._TR;

        if (this.doInfoEvent) this.infoEvent(57, false);
        if (this.doInfoPrintOutput) this.printOutput(57, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 31 and event "DUtoUR_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge31() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._DUtoUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(59, true);
        if (this.doInfoEvent) this.infoEvent(59, true);

        spec.WaferPlant_0_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(59, false);
        if (this.doInfoPrintOutput) this.printOutput(59, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 32 and event "DUtoUR_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge32() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._DUtoUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(61, true);
        if (this.doInfoEvent) this.infoEvent(61, true);

        spec.WaferPlant_1_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(61, false);
        if (this.doInfoPrintOutput) this.printOutput(61, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 33 and event "DUtoUR_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge33() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._DUtoUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(63, true);
        if (this.doInfoEvent) this.infoEvent(63, true);

        spec.WaferPlant_2_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(63, false);
        if (this.doInfoPrintOutput) this.printOutput(63, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 34 and event "LRtoCH0_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge34() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._LRtoCH0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(65, true);
        if (this.doInfoEvent) this.infoEvent(65, true);

        spec.WaferPlant_0_ = spec.specEnum._CH0;

        if (this.doInfoEvent) this.infoEvent(65, false);
        if (this.doInfoPrintOutput) this.printOutput(65, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 35 and event "LRtoCH0_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge35() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._LRtoCH0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(67, true);
        if (this.doInfoEvent) this.infoEvent(67, true);

        spec.WaferPlant_1_ = spec.specEnum._CH0;

        if (this.doInfoEvent) this.infoEvent(67, false);
        if (this.doInfoPrintOutput) this.printOutput(67, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 36 and event "LRtoCH0_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge36() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._LRtoCH0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(69, true);
        if (this.doInfoEvent) this.infoEvent(69, true);

        spec.WaferPlant_2_ = spec.specEnum._CH0;

        if (this.doInfoEvent) this.infoEvent(69, false);
        if (this.doInfoPrintOutput) this.printOutput(69, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 37 and event "LRtoCH1_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge37() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._LRtoCH1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(71, true);
        if (this.doInfoEvent) this.infoEvent(71, true);

        spec.WaferPlant_0_ = spec.specEnum._CH1;

        if (this.doInfoEvent) this.infoEvent(71, false);
        if (this.doInfoPrintOutput) this.printOutput(71, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 38 and event "LRtoCH1_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge38() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._LRtoCH1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(73, true);
        if (this.doInfoEvent) this.infoEvent(73, true);

        spec.WaferPlant_1_ = spec.specEnum._CH1;

        if (this.doInfoEvent) this.infoEvent(73, false);
        if (this.doInfoPrintOutput) this.printOutput(73, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 39 and event "LRtoCH1_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge39() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._LRtoCH1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(75, true);
        if (this.doInfoEvent) this.infoEvent(75, true);

        spec.WaferPlant_2_ = spec.specEnum._CH1;

        if (this.doInfoEvent) this.infoEvent(75, false);
        if (this.doInfoPrintOutput) this.printOutput(75, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 40 and event "LRtoCTC0_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge40() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._LRtoCTC0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(77, true);
        if (this.doInfoEvent) this.infoEvent(77, true);

        spec.WaferPlant_0_ = spec.specEnum._CTC0;

        if (this.doInfoEvent) this.infoEvent(77, false);
        if (this.doInfoPrintOutput) this.printOutput(77, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 41 and event "LRtoCTC0_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge41() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._LRtoCTC0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(79, true);
        if (this.doInfoEvent) this.infoEvent(79, true);

        spec.WaferPlant_1_ = spec.specEnum._CTC0;

        if (this.doInfoEvent) this.infoEvent(79, false);
        if (this.doInfoPrintOutput) this.printOutput(79, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 42 and event "LRtoCTC0_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge42() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._LRtoCTC0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(81, true);
        if (this.doInfoEvent) this.infoEvent(81, true);

        spec.WaferPlant_2_ = spec.specEnum._CTC0;

        if (this.doInfoEvent) this.infoEvent(81, false);
        if (this.doInfoPrintOutput) this.printOutput(81, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 43 and event "LRtoDU_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge43() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._LRtoDU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(83, true);
        if (this.doInfoEvent) this.infoEvent(83, true);

        spec.WaferPlant_0_ = spec.specEnum._DU;

        if (this.doInfoEvent) this.infoEvent(83, false);
        if (this.doInfoPrintOutput) this.printOutput(83, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 44 and event "LRtoDU_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge44() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._LRtoDU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(85, true);
        if (this.doInfoEvent) this.infoEvent(85, true);

        spec.WaferPlant_1_ = spec.specEnum._DU;

        if (this.doInfoEvent) this.infoEvent(85, false);
        if (this.doInfoPrintOutput) this.printOutput(85, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 45 and event "LRtoDU_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge45() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._LRtoDU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(87, true);
        if (this.doInfoEvent) this.infoEvent(87, true);

        spec.WaferPlant_2_ = spec.specEnum._DU;

        if (this.doInfoEvent) this.infoEvent(87, false);
        if (this.doInfoPrintOutput) this.printOutput(87, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 46 and event "LRtoPA_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge46() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._LRtoPA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(89, true);
        if (this.doInfoEvent) this.infoEvent(89, true);

        spec.WaferPlant_0_ = spec.specEnum._PA;

        if (this.doInfoEvent) this.infoEvent(89, false);
        if (this.doInfoPrintOutput) this.printOutput(89, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 47 and event "LRtoPA_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge47() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._LRtoPA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(91, true);
        if (this.doInfoEvent) this.infoEvent(91, true);

        spec.WaferPlant_1_ = spec.specEnum._PA;

        if (this.doInfoEvent) this.infoEvent(91, false);
        if (this.doInfoPrintOutput) this.printOutput(91, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 48 and event "LRtoPA_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge48() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._LRtoPA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(93, true);
        if (this.doInfoEvent) this.infoEvent(93, true);

        spec.WaferPlant_2_ = spec.specEnum._PA;

        if (this.doInfoEvent) this.infoEvent(93, false);
        if (this.doInfoPrintOutput) this.printOutput(93, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 49 and event "PA_Align_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge49() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._PA_AlignRunning);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(95, true);
        if (this.doInfoEvent) this.infoEvent(95, true);

        spec.WaferPlant_0_ = spec.specEnum._PA;

        if (this.doInfoEvent) this.infoEvent(95, false);
        if (this.doInfoPrintOutput) this.printOutput(95, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 50 and event "PA_Align_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge50() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._PA_AlignRunning);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(97, true);
        if (this.doInfoEvent) this.infoEvent(97, true);

        spec.WaferPlant_1_ = spec.specEnum._PA;

        if (this.doInfoEvent) this.infoEvent(97, false);
        if (this.doInfoPrintOutput) this.printOutput(97, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 51 and event "PA_Align_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge51() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._PA_AlignRunning);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(99, true);
        if (this.doInfoEvent) this.infoEvent(99, true);

        spec.WaferPlant_2_ = spec.specEnum._PA;

        if (this.doInfoEvent) this.infoEvent(99, false);
        if (this.doInfoPrintOutput) this.printOutput(99, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 52 and event "PAtoLR_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge52() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._PAtoLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(101, true);
        if (this.doInfoEvent) this.infoEvent(101, true);

        spec.WaferPlant_0_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(101, false);
        if (this.doInfoPrintOutput) this.printOutput(101, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 53 and event "PAtoLR_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge53() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._PAtoLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(103, true);
        if (this.doInfoEvent) this.infoEvent(103, true);

        spec.WaferPlant_1_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(103, false);
        if (this.doInfoPrintOutput) this.printOutput(103, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 54 and event "PAtoLR_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge54() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._PAtoLR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(105, true);
        if (this.doInfoEvent) this.infoEvent(105, true);

        spec.WaferPlant_2_ = spec.specEnum._LR;

        if (this.doInfoEvent) this.infoEvent(105, false);
        if (this.doInfoPrintOutput) this.printOutput(105, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 55 and event "PAtoUR_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge55() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._PAtoUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(107, true);
        if (this.doInfoEvent) this.infoEvent(107, true);

        spec.WaferPlant_0_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(107, false);
        if (this.doInfoPrintOutput) this.printOutput(107, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 56 and event "PAtoUR_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge56() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._PAtoUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(109, true);
        if (this.doInfoEvent) this.infoEvent(109, true);

        spec.WaferPlant_1_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(109, false);
        if (this.doInfoPrintOutput) this.printOutput(109, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 57 and event "PAtoUR_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge57() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._PAtoUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(111, true);
        if (this.doInfoEvent) this.infoEvent(111, true);

        spec.WaferPlant_2_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(111, false);
        if (this.doInfoPrintOutput) this.printOutput(111, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 58 and event "SUB_Condition_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge58() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._SUB_ConditionRunning);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(113, true);
        if (this.doInfoEvent) this.infoEvent(113, true);

        spec.WaferPlant_0_ = spec.specEnum._SUB;

        if (this.doInfoEvent) this.infoEvent(113, false);
        if (this.doInfoPrintOutput) this.printOutput(113, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 59 and event "SUBtoUR_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge59() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._SUBtoUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(115, true);
        if (this.doInfoEvent) this.infoEvent(115, true);

        spec.WaferPlant_0_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(115, false);
        if (this.doInfoPrintOutput) this.printOutput(115, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 60 and event "SUBtoUR_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge60() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._SUBtoUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(117, true);
        if (this.doInfoEvent) this.infoEvent(117, true);

        spec.WaferPlant_1_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(117, false);
        if (this.doInfoPrintOutput) this.printOutput(117, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 61 and event "SUBtoUR_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge61() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._SUBtoUR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(119, true);
        if (this.doInfoEvent) this.infoEvent(119, true);

        spec.WaferPlant_2_ = spec.specEnum._UR;

        if (this.doInfoEvent) this.infoEvent(119, false);
        if (this.doInfoPrintOutput) this.printOutput(119, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 62 and event "TRtoSUB_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge62() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._TRtoSUB);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(130, true);
        if (this.doInfoEvent) this.infoEvent(130, true);

        spec.WaferPlant_0_ = spec.specEnum._SUB;

        if (this.doInfoEvent) this.infoEvent(130, false);
        if (this.doInfoPrintOutput) this.printOutput(130, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 63 and event "TRtoSUB_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge63() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._TRtoSUB);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(132, true);
        if (this.doInfoEvent) this.infoEvent(132, true);

        spec.WaferPlant_1_ = spec.specEnum._SUB;

        if (this.doInfoEvent) this.infoEvent(132, false);
        if (this.doInfoPrintOutput) this.printOutput(132, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 64 and event "TRtoSUB_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge64() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._TRtoSUB);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(134, true);
        if (this.doInfoEvent) this.infoEvent(134, true);

        spec.WaferPlant_2_ = spec.specEnum._SUB;

        if (this.doInfoEvent) this.infoEvent(134, false);
        if (this.doInfoPrintOutput) this.printOutput(134, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 65 and event "URtoCTC1_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge65() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._URtoCTC1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(136, true);
        if (this.doInfoEvent) this.infoEvent(136, true);

        spec.WaferPlant_0_ = spec.specEnum._CTC1;

        if (this.doInfoEvent) this.infoEvent(136, false);
        if (this.doInfoPrintOutput) this.printOutput(136, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 66 and event "URtoCTC1_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge66() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._URtoCTC1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(138, true);
        if (this.doInfoEvent) this.infoEvent(138, true);

        spec.WaferPlant_1_ = spec.specEnum._CTC1;

        if (this.doInfoEvent) this.infoEvent(138, false);
        if (this.doInfoPrintOutput) this.printOutput(138, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 67 and event "URtoCTC1_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge67() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._URtoCTC1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(140, true);
        if (this.doInfoEvent) this.infoEvent(140, true);

        spec.WaferPlant_2_ = spec.specEnum._CTC1;

        if (this.doInfoEvent) this.infoEvent(140, false);
        if (this.doInfoPrintOutput) this.printOutput(140, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 68 and event "URtoDU_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge68() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._URtoDU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(142, true);
        if (this.doInfoEvent) this.infoEvent(142, true);

        spec.WaferPlant_0_ = spec.specEnum._DU;

        if (this.doInfoEvent) this.infoEvent(142, false);
        if (this.doInfoPrintOutput) this.printOutput(142, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 69 and event "URtoDU_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge69() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._URtoDU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(144, true);
        if (this.doInfoEvent) this.infoEvent(144, true);

        spec.WaferPlant_1_ = spec.specEnum._DU;

        if (this.doInfoEvent) this.infoEvent(144, false);
        if (this.doInfoPrintOutput) this.printOutput(144, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 70 and event "URtoDU_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge70() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._URtoDU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(146, true);
        if (this.doInfoEvent) this.infoEvent(146, true);

        spec.WaferPlant_2_ = spec.specEnum._DU;

        if (this.doInfoEvent) this.infoEvent(146, false);
        if (this.doInfoPrintOutput) this.printOutput(146, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 71 and event "URtoPA_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge71() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._URtoPA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(148, true);
        if (this.doInfoEvent) this.infoEvent(148, true);

        spec.WaferPlant_0_ = spec.specEnum._PA;

        if (this.doInfoEvent) this.infoEvent(148, false);
        if (this.doInfoPrintOutput) this.printOutput(148, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 72 and event "URtoPA_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge72() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._URtoPA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(150, true);
        if (this.doInfoEvent) this.infoEvent(150, true);

        spec.WaferPlant_1_ = spec.specEnum._PA;

        if (this.doInfoEvent) this.infoEvent(150, false);
        if (this.doInfoPrintOutput) this.printOutput(150, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 73 and event "URtoPA_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge73() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._URtoPA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(152, true);
        if (this.doInfoEvent) this.infoEvent(152, true);

        spec.WaferPlant_2_ = spec.specEnum._PA;

        if (this.doInfoEvent) this.infoEvent(152, false);
        if (this.doInfoPrintOutput) this.printOutput(152, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 74 and event "URtoSUB_0_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge74() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._URtoSUB);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(154, true);
        if (this.doInfoEvent) this.infoEvent(154, true);

        spec.WaferPlant_0_ = spec.specEnum._SUB;

        if (this.doInfoEvent) this.infoEvent(154, false);
        if (this.doInfoPrintOutput) this.printOutput(154, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 75 and event "URtoSUB_1_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge75() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._URtoSUB);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(156, true);
        if (this.doInfoEvent) this.infoEvent(156, true);

        spec.WaferPlant_1_ = spec.specEnum._SUB;

        if (this.doInfoEvent) this.infoEvent(156, false);
        if (this.doInfoPrintOutput) this.printOutput(156, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 76 and event "URtoSUB_2_e".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge76() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._URtoSUB);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(158, true);
        if (this.doInfoEvent) this.infoEvent(158, true);

        spec.WaferPlant_2_ = spec.specEnum._SUB;

        if (this.doInfoEvent) this.infoEvent(158, false);
        if (this.doInfoPrintOutput) this.printOutput(158, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 77 and event "CH0_Expose_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge77() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(4, true);
        if (this.doInfoEvent) this.infoEvent(4, true);

        spec.WaferPlant_0_ = spec.specEnum._CH0_ExposeRunning;

        if (this.doInfoEvent) this.infoEvent(4, false);
        if (this.doInfoPrintOutput) this.printOutput(4, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 78 and event "CH0_Measure_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge78() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(6, true);
        if (this.doInfoEvent) this.infoEvent(6, true);

        spec.WaferPlant_0_ = spec.specEnum._CH0_MeasureRunning;

        if (this.doInfoEvent) this.infoEvent(6, false);
        if (this.doInfoPrintOutput) this.printOutput(6, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 79 and event "CH0toLR_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge79() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(8, true);
        if (this.doInfoEvent) this.infoEvent(8, true);

        spec.WaferPlant_0_ = spec.specEnum._CH0toLR;

        if (this.doInfoEvent) this.infoEvent(8, false);
        if (this.doInfoPrintOutput) this.printOutput(8, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 80 and event "CH0toLR_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge80() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._CH0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(10, true);
        if (this.doInfoEvent) this.infoEvent(10, true);

        spec.WaferPlant_1_ = spec.specEnum._CH0toLR;

        if (this.doInfoEvent) this.infoEvent(10, false);
        if (this.doInfoPrintOutput) this.printOutput(10, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 81 and event "CH0toLR_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge81() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._CH0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(12, true);
        if (this.doInfoEvent) this.infoEvent(12, true);

        spec.WaferPlant_2_ = spec.specEnum._CH0toLR;

        if (this.doInfoEvent) this.infoEvent(12, false);
        if (this.doInfoPrintOutput) this.printOutput(12, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 82 and event "CH0toUR_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge82() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(14, true);
        if (this.doInfoEvent) this.infoEvent(14, true);

        spec.WaferPlant_0_ = spec.specEnum._CH0toUR;

        if (this.doInfoEvent) this.infoEvent(14, false);
        if (this.doInfoPrintOutput) this.printOutput(14, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 83 and event "CH0toUR_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge83() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._CH0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(16, true);
        if (this.doInfoEvent) this.infoEvent(16, true);

        spec.WaferPlant_1_ = spec.specEnum._CH0toUR;

        if (this.doInfoEvent) this.infoEvent(16, false);
        if (this.doInfoPrintOutput) this.printOutput(16, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 84 and event "CH0toUR_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge84() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._CH0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(18, true);
        if (this.doInfoEvent) this.infoEvent(18, true);

        spec.WaferPlant_2_ = spec.specEnum._CH0toUR;

        if (this.doInfoEvent) this.infoEvent(18, false);
        if (this.doInfoPrintOutput) this.printOutput(18, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 85 and event "CH1_Expose_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge85() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(20, true);
        if (this.doInfoEvent) this.infoEvent(20, true);

        spec.WaferPlant_0_ = spec.specEnum._CH1_ExposeRunning;

        if (this.doInfoEvent) this.infoEvent(20, false);
        if (this.doInfoPrintOutput) this.printOutput(20, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 86 and event "CH1_Measure_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge86() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(22, true);
        if (this.doInfoEvent) this.infoEvent(22, true);

        spec.WaferPlant_0_ = spec.specEnum._CH1_MeasureRunning;

        if (this.doInfoEvent) this.infoEvent(22, false);
        if (this.doInfoPrintOutput) this.printOutput(22, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 87 and event "CH1toLR_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge87() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(24, true);
        if (this.doInfoEvent) this.infoEvent(24, true);

        spec.WaferPlant_0_ = spec.specEnum._CH1toLR;

        if (this.doInfoEvent) this.infoEvent(24, false);
        if (this.doInfoPrintOutput) this.printOutput(24, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 88 and event "CH1toLR_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge88() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._CH1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(26, true);
        if (this.doInfoEvent) this.infoEvent(26, true);

        spec.WaferPlant_1_ = spec.specEnum._CH1toLR;

        if (this.doInfoEvent) this.infoEvent(26, false);
        if (this.doInfoPrintOutput) this.printOutput(26, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 89 and event "CH1toLR_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge89() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._CH1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(28, true);
        if (this.doInfoEvent) this.infoEvent(28, true);

        spec.WaferPlant_2_ = spec.specEnum._CH1toLR;

        if (this.doInfoEvent) this.infoEvent(28, false);
        if (this.doInfoPrintOutput) this.printOutput(28, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 90 and event "CH1toUR_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge90() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CH1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(30, true);
        if (this.doInfoEvent) this.infoEvent(30, true);

        spec.WaferPlant_0_ = spec.specEnum._CH1toUR;

        if (this.doInfoEvent) this.infoEvent(30, false);
        if (this.doInfoPrintOutput) this.printOutput(30, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 91 and event "CH1toUR_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge91() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._CH1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(32, true);
        if (this.doInfoEvent) this.infoEvent(32, true);

        spec.WaferPlant_1_ = spec.specEnum._CH1toUR;

        if (this.doInfoEvent) this.infoEvent(32, false);
        if (this.doInfoPrintOutput) this.printOutput(32, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 92 and event "CH1toUR_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge92() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._CH1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(34, true);
        if (this.doInfoEvent) this.infoEvent(34, true);

        spec.WaferPlant_2_ = spec.specEnum._CH1toUR;

        if (this.doInfoEvent) this.infoEvent(34, false);
        if (this.doInfoPrintOutput) this.printOutput(34, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 93 and event "CTC0toLR_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge93() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CTC0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(36, true);
        if (this.doInfoEvent) this.infoEvent(36, true);

        spec.WaferPlant_0_ = spec.specEnum._CTC0toLR;

        if (this.doInfoEvent) this.infoEvent(36, false);
        if (this.doInfoPrintOutput) this.printOutput(36, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 94 and event "CTC0toLR_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge94() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._CTC0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(38, true);
        if (this.doInfoEvent) this.infoEvent(38, true);

        spec.WaferPlant_1_ = spec.specEnum._CTC0toLR;

        if (this.doInfoEvent) this.infoEvent(38, false);
        if (this.doInfoPrintOutput) this.printOutput(38, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 95 and event "CTC0toLR_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge95() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._CTC0);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(40, true);
        if (this.doInfoEvent) this.infoEvent(40, true);

        spec.WaferPlant_2_ = spec.specEnum._CTC0toLR;

        if (this.doInfoEvent) this.infoEvent(40, false);
        if (this.doInfoPrintOutput) this.printOutput(40, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 96 and event "CTC1toUR_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge96() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._CTC1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(42, true);
        if (this.doInfoEvent) this.infoEvent(42, true);

        spec.WaferPlant_0_ = spec.specEnum._CTC1toUR;

        if (this.doInfoEvent) this.infoEvent(42, false);
        if (this.doInfoPrintOutput) this.printOutput(42, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 97 and event "CTC1toUR_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge97() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._CTC1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(44, true);
        if (this.doInfoEvent) this.infoEvent(44, true);

        spec.WaferPlant_1_ = spec.specEnum._CTC1toUR;

        if (this.doInfoEvent) this.infoEvent(44, false);
        if (this.doInfoPrintOutput) this.printOutput(44, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 98 and event "CTC1toUR_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge98() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._CTC1);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(46, true);
        if (this.doInfoEvent) this.infoEvent(46, true);

        spec.WaferPlant_2_ = spec.specEnum._CTC1toUR;

        if (this.doInfoEvent) this.infoEvent(46, false);
        if (this.doInfoPrintOutput) this.printOutput(46, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 99 and event "DUtoLR_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge99() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._DU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(48, true);
        if (this.doInfoEvent) this.infoEvent(48, true);

        spec.WaferPlant_0_ = spec.specEnum._DUtoLR;

        if (this.doInfoEvent) this.infoEvent(48, false);
        if (this.doInfoPrintOutput) this.printOutput(48, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 100 and event "DUtoLR_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge100() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._DU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(50, true);
        if (this.doInfoEvent) this.infoEvent(50, true);

        spec.WaferPlant_1_ = spec.specEnum._DUtoLR;

        if (this.doInfoEvent) this.infoEvent(50, false);
        if (this.doInfoPrintOutput) this.printOutput(50, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 101 and event "DUtoLR_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge101() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._DU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(52, true);
        if (this.doInfoEvent) this.infoEvent(52, true);

        spec.WaferPlant_2_ = spec.specEnum._DUtoLR;

        if (this.doInfoEvent) this.infoEvent(52, false);
        if (this.doInfoPrintOutput) this.printOutput(52, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 102 and event "DUtoTR_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge102() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._DU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(54, true);
        if (this.doInfoEvent) this.infoEvent(54, true);

        spec.WaferPlant_0_ = spec.specEnum._DUtoTR;

        if (this.doInfoEvent) this.infoEvent(54, false);
        if (this.doInfoPrintOutput) this.printOutput(54, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 103 and event "DUtoTR_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge103() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._DU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(56, true);
        if (this.doInfoEvent) this.infoEvent(56, true);

        spec.WaferPlant_1_ = spec.specEnum._DUtoTR;

        if (this.doInfoEvent) this.infoEvent(56, false);
        if (this.doInfoPrintOutput) this.printOutput(56, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 104 and event "DUtoTR_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge104() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._DU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(58, true);
        if (this.doInfoEvent) this.infoEvent(58, true);

        spec.WaferPlant_2_ = spec.specEnum._DUtoTR;

        if (this.doInfoEvent) this.infoEvent(58, false);
        if (this.doInfoPrintOutput) this.printOutput(58, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 105 and event "DUtoUR_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge105() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._DU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(60, true);
        if (this.doInfoEvent) this.infoEvent(60, true);

        spec.WaferPlant_0_ = spec.specEnum._DUtoUR;

        if (this.doInfoEvent) this.infoEvent(60, false);
        if (this.doInfoPrintOutput) this.printOutput(60, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 106 and event "DUtoUR_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge106() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._DU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(62, true);
        if (this.doInfoEvent) this.infoEvent(62, true);

        spec.WaferPlant_1_ = spec.specEnum._DUtoUR;

        if (this.doInfoEvent) this.infoEvent(62, false);
        if (this.doInfoPrintOutput) this.printOutput(62, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 107 and event "DUtoUR_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge107() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._DU);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(64, true);
        if (this.doInfoEvent) this.infoEvent(64, true);

        spec.WaferPlant_2_ = spec.specEnum._DUtoUR;

        if (this.doInfoEvent) this.infoEvent(64, false);
        if (this.doInfoPrintOutput) this.printOutput(64, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 108 and event "LRtoCH0_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge108() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(66, true);
        if (this.doInfoEvent) this.infoEvent(66, true);

        spec.WaferPlant_0_ = spec.specEnum._LRtoCH0;

        if (this.doInfoEvent) this.infoEvent(66, false);
        if (this.doInfoPrintOutput) this.printOutput(66, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 109 and event "LRtoCH0_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge109() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(68, true);
        if (this.doInfoEvent) this.infoEvent(68, true);

        spec.WaferPlant_1_ = spec.specEnum._LRtoCH0;

        if (this.doInfoEvent) this.infoEvent(68, false);
        if (this.doInfoPrintOutput) this.printOutput(68, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 110 and event "LRtoCH0_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge110() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(70, true);
        if (this.doInfoEvent) this.infoEvent(70, true);

        spec.WaferPlant_2_ = spec.specEnum._LRtoCH0;

        if (this.doInfoEvent) this.infoEvent(70, false);
        if (this.doInfoPrintOutput) this.printOutput(70, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 111 and event "LRtoCH1_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge111() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(72, true);
        if (this.doInfoEvent) this.infoEvent(72, true);

        spec.WaferPlant_0_ = spec.specEnum._LRtoCH1;

        if (this.doInfoEvent) this.infoEvent(72, false);
        if (this.doInfoPrintOutput) this.printOutput(72, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 112 and event "LRtoCH1_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge112() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(74, true);
        if (this.doInfoEvent) this.infoEvent(74, true);

        spec.WaferPlant_1_ = spec.specEnum._LRtoCH1;

        if (this.doInfoEvent) this.infoEvent(74, false);
        if (this.doInfoPrintOutput) this.printOutput(74, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 113 and event "LRtoCH1_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge113() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(76, true);
        if (this.doInfoEvent) this.infoEvent(76, true);

        spec.WaferPlant_2_ = spec.specEnum._LRtoCH1;

        if (this.doInfoEvent) this.infoEvent(76, false);
        if (this.doInfoPrintOutput) this.printOutput(76, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 114 and event "LRtoCTC0_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge114() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(78, true);
        if (this.doInfoEvent) this.infoEvent(78, true);

        spec.WaferPlant_0_ = spec.specEnum._LRtoCTC0;

        if (this.doInfoEvent) this.infoEvent(78, false);
        if (this.doInfoPrintOutput) this.printOutput(78, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 115 and event "LRtoCTC0_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge115() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(80, true);
        if (this.doInfoEvent) this.infoEvent(80, true);

        spec.WaferPlant_1_ = spec.specEnum._LRtoCTC0;

        if (this.doInfoEvent) this.infoEvent(80, false);
        if (this.doInfoPrintOutput) this.printOutput(80, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 116 and event "LRtoCTC0_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge116() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(82, true);
        if (this.doInfoEvent) this.infoEvent(82, true);

        spec.WaferPlant_2_ = spec.specEnum._LRtoCTC0;

        if (this.doInfoEvent) this.infoEvent(82, false);
        if (this.doInfoPrintOutput) this.printOutput(82, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 117 and event "LRtoDU_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge117() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(84, true);
        if (this.doInfoEvent) this.infoEvent(84, true);

        spec.WaferPlant_0_ = spec.specEnum._LRtoDU;

        if (this.doInfoEvent) this.infoEvent(84, false);
        if (this.doInfoPrintOutput) this.printOutput(84, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 118 and event "LRtoDU_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge118() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(86, true);
        if (this.doInfoEvent) this.infoEvent(86, true);

        spec.WaferPlant_1_ = spec.specEnum._LRtoDU;

        if (this.doInfoEvent) this.infoEvent(86, false);
        if (this.doInfoPrintOutput) this.printOutput(86, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 119 and event "LRtoDU_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge119() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(88, true);
        if (this.doInfoEvent) this.infoEvent(88, true);

        spec.WaferPlant_2_ = spec.specEnum._LRtoDU;

        if (this.doInfoEvent) this.infoEvent(88, false);
        if (this.doInfoPrintOutput) this.printOutput(88, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 120 and event "LRtoPA_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge120() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(90, true);
        if (this.doInfoEvent) this.infoEvent(90, true);

        spec.WaferPlant_0_ = spec.specEnum._LRtoPA;

        if (this.doInfoEvent) this.infoEvent(90, false);
        if (this.doInfoPrintOutput) this.printOutput(90, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 121 and event "LRtoPA_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge121() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(92, true);
        if (this.doInfoEvent) this.infoEvent(92, true);

        spec.WaferPlant_1_ = spec.specEnum._LRtoPA;

        if (this.doInfoEvent) this.infoEvent(92, false);
        if (this.doInfoPrintOutput) this.printOutput(92, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 122 and event "LRtoPA_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge122() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._LR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(94, true);
        if (this.doInfoEvent) this.infoEvent(94, true);

        spec.WaferPlant_2_ = spec.specEnum._LRtoPA;

        if (this.doInfoEvent) this.infoEvent(94, false);
        if (this.doInfoPrintOutput) this.printOutput(94, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 123 and event "PA_Align_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge123() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._PA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(96, true);
        if (this.doInfoEvent) this.infoEvent(96, true);

        spec.WaferPlant_0_ = spec.specEnum._PA_AlignRunning;

        if (this.doInfoEvent) this.infoEvent(96, false);
        if (this.doInfoPrintOutput) this.printOutput(96, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 124 and event "PA_Align_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge124() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._PA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(98, true);
        if (this.doInfoEvent) this.infoEvent(98, true);

        spec.WaferPlant_1_ = spec.specEnum._PA_AlignRunning;

        if (this.doInfoEvent) this.infoEvent(98, false);
        if (this.doInfoPrintOutput) this.printOutput(98, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 125 and event "PA_Align_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge125() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._PA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(100, true);
        if (this.doInfoEvent) this.infoEvent(100, true);

        spec.WaferPlant_2_ = spec.specEnum._PA_AlignRunning;

        if (this.doInfoEvent) this.infoEvent(100, false);
        if (this.doInfoPrintOutput) this.printOutput(100, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 126 and event "PAtoLR_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge126() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._PA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(102, true);
        if (this.doInfoEvent) this.infoEvent(102, true);

        spec.WaferPlant_0_ = spec.specEnum._PAtoLR;

        if (this.doInfoEvent) this.infoEvent(102, false);
        if (this.doInfoPrintOutput) this.printOutput(102, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 127 and event "PAtoLR_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge127() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._PA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(104, true);
        if (this.doInfoEvent) this.infoEvent(104, true);

        spec.WaferPlant_1_ = spec.specEnum._PAtoLR;

        if (this.doInfoEvent) this.infoEvent(104, false);
        if (this.doInfoPrintOutput) this.printOutput(104, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 128 and event "PAtoLR_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge128() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._PA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(106, true);
        if (this.doInfoEvent) this.infoEvent(106, true);

        spec.WaferPlant_2_ = spec.specEnum._PAtoLR;

        if (this.doInfoEvent) this.infoEvent(106, false);
        if (this.doInfoPrintOutput) this.printOutput(106, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 129 and event "PAtoUR_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge129() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._PA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(108, true);
        if (this.doInfoEvent) this.infoEvent(108, true);

        spec.WaferPlant_0_ = spec.specEnum._PAtoUR;

        if (this.doInfoEvent) this.infoEvent(108, false);
        if (this.doInfoPrintOutput) this.printOutput(108, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 130 and event "PAtoUR_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge130() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._PA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(110, true);
        if (this.doInfoEvent) this.infoEvent(110, true);

        spec.WaferPlant_1_ = spec.specEnum._PAtoUR;

        if (this.doInfoEvent) this.infoEvent(110, false);
        if (this.doInfoPrintOutput) this.printOutput(110, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 131 and event "PAtoUR_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge131() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._PA);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(112, true);
        if (this.doInfoEvent) this.infoEvent(112, true);

        spec.WaferPlant_2_ = spec.specEnum._PAtoUR;

        if (this.doInfoEvent) this.infoEvent(112, false);
        if (this.doInfoPrintOutput) this.printOutput(112, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 132 and event "SUB_Condition_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge132() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._SUB);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(114, true);
        if (this.doInfoEvent) this.infoEvent(114, true);

        spec.WaferPlant_0_ = spec.specEnum._SUB_ConditionRunning;

        if (this.doInfoEvent) this.infoEvent(114, false);
        if (this.doInfoPrintOutput) this.printOutput(114, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 133 and event "SUBtoUR_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge133() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._SUB);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(116, true);
        if (this.doInfoEvent) this.infoEvent(116, true);

        spec.WaferPlant_0_ = spec.specEnum._SUBtoUR;

        if (this.doInfoEvent) this.infoEvent(116, false);
        if (this.doInfoPrintOutput) this.printOutput(116, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 134 and event "SUBtoUR_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge134() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._SUB);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(118, true);
        if (this.doInfoEvent) this.infoEvent(118, true);

        spec.WaferPlant_1_ = spec.specEnum._SUBtoUR;

        if (this.doInfoEvent) this.infoEvent(118, false);
        if (this.doInfoPrintOutput) this.printOutput(118, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 135 and event "SUBtoUR_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge135() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._SUB);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(120, true);
        if (this.doInfoEvent) this.infoEvent(120, true);

        spec.WaferPlant_2_ = spec.specEnum._SUBtoUR;

        if (this.doInfoEvent) this.infoEvent(120, false);
        if (this.doInfoPrintOutput) this.printOutput(120, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 136 and event "swalmen.c_0".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge136() {
        var guard = (((spec.swalmen_) == (spec.specEnum._s1)) || (((spec.swalmen_) == (spec.specEnum._s2)) || ((spec.swalmen_) == (spec.specEnum._s3)))) || ((((spec.swalmen_) == (spec.specEnum._s4)) || ((spec.swalmen_) == (spec.specEnum._s5))) || (((spec.swalmen_) == (spec.specEnum._s6)) || (((spec.swalmen_) == (spec.specEnum._s7)) || ((spec.swalmen_) == (spec.specEnum._s8)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(121, true);
        if (this.doInfoEvent) this.infoEvent(121, true);

        if ((spec.swalmen_) == (spec.specEnum._s1)) {
            spec.swalmen_ = spec.specEnum._s0;
        } else if ((spec.swalmen_) == (spec.specEnum._s2)) {
            spec.swalmen_ = spec.specEnum._s0;
        } else if ((spec.swalmen_) == (spec.specEnum._s3)) {
            spec.swalmen_ = spec.specEnum._s0;
        } else if ((spec.swalmen_) == (spec.specEnum._s4)) {
            spec.swalmen_ = spec.specEnum._s0;
        } else if ((spec.swalmen_) == (spec.specEnum._s5)) {
            spec.swalmen_ = spec.specEnum._s0;
        } else if ((spec.swalmen_) == (spec.specEnum._s6)) {
            spec.swalmen_ = spec.specEnum._s0;
        } else if ((spec.swalmen_) == (spec.specEnum._s7)) {
            spec.swalmen_ = spec.specEnum._s0;
        } else if ((spec.swalmen_) == (spec.specEnum._s8)) {
            spec.swalmen_ = spec.specEnum._s0;
        }

        if (this.doInfoEvent) this.infoEvent(121, false);
        if (this.doInfoPrintOutput) this.printOutput(121, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 137 and event "swalmen.c_1".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge137() {
        var guard = (((spec.swalmen_) == (spec.specEnum._s0)) || (((spec.swalmen_) == (spec.specEnum._s2)) || ((spec.swalmen_) == (spec.specEnum._s3)))) || ((((spec.swalmen_) == (spec.specEnum._s4)) || ((spec.swalmen_) == (spec.specEnum._s5))) || (((spec.swalmen_) == (spec.specEnum._s6)) || (((spec.swalmen_) == (spec.specEnum._s7)) || ((spec.swalmen_) == (spec.specEnum._s8)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(122, true);
        if (this.doInfoEvent) this.infoEvent(122, true);

        if ((spec.swalmen_) == (spec.specEnum._s0)) {
            spec.swalmen_ = spec.specEnum._s1;
        } else if ((spec.swalmen_) == (spec.specEnum._s2)) {
            spec.swalmen_ = spec.specEnum._s1;
        } else if ((spec.swalmen_) == (spec.specEnum._s3)) {
            spec.swalmen_ = spec.specEnum._s1;
        } else if ((spec.swalmen_) == (spec.specEnum._s4)) {
            spec.swalmen_ = spec.specEnum._s1;
        } else if ((spec.swalmen_) == (spec.specEnum._s5)) {
            spec.swalmen_ = spec.specEnum._s1;
        } else if ((spec.swalmen_) == (spec.specEnum._s6)) {
            spec.swalmen_ = spec.specEnum._s1;
        } else if ((spec.swalmen_) == (spec.specEnum._s7)) {
            spec.swalmen_ = spec.specEnum._s1;
        } else if ((spec.swalmen_) == (spec.specEnum._s8)) {
            spec.swalmen_ = spec.specEnum._s1;
        }

        if (this.doInfoEvent) this.infoEvent(122, false);
        if (this.doInfoPrintOutput) this.printOutput(122, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 138 and event "swalmen.c_2".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge138() {
        var guard = ((((spec.swalmen_) == (spec.specEnum._s0)) || ((spec.swalmen_) == (spec.specEnum._s1))) || ((spec.swalmen_) == (spec.specEnum._s3))) || ((((spec.swalmen_) == (spec.specEnum._s4)) || ((spec.swalmen_) == (spec.specEnum._s5))) || (((spec.swalmen_) == (spec.specEnum._s6)) || (((spec.swalmen_) == (spec.specEnum._s7)) || ((spec.swalmen_) == (spec.specEnum._s8)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(123, true);
        if (this.doInfoEvent) this.infoEvent(123, true);

        if ((spec.swalmen_) == (spec.specEnum._s0)) {
            spec.swalmen_ = spec.specEnum._s2;
        } else if ((spec.swalmen_) == (spec.specEnum._s1)) {
            spec.swalmen_ = spec.specEnum._s2;
        } else if ((spec.swalmen_) == (spec.specEnum._s3)) {
            spec.swalmen_ = spec.specEnum._s2;
        } else if ((spec.swalmen_) == (spec.specEnum._s4)) {
            spec.swalmen_ = spec.specEnum._s2;
        } else if ((spec.swalmen_) == (spec.specEnum._s5)) {
            spec.swalmen_ = spec.specEnum._s2;
        } else if ((spec.swalmen_) == (spec.specEnum._s6)) {
            spec.swalmen_ = spec.specEnum._s2;
        } else if ((spec.swalmen_) == (spec.specEnum._s7)) {
            spec.swalmen_ = spec.specEnum._s2;
        } else if ((spec.swalmen_) == (spec.specEnum._s8)) {
            spec.swalmen_ = spec.specEnum._s2;
        }

        if (this.doInfoEvent) this.infoEvent(123, false);
        if (this.doInfoPrintOutput) this.printOutput(123, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 139 and event "swalmen.c_3".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge139() {
        var guard = ((((spec.swalmen_) == (spec.specEnum._s0)) || ((spec.swalmen_) == (spec.specEnum._s1))) || ((spec.swalmen_) == (spec.specEnum._s2))) || ((((spec.swalmen_) == (spec.specEnum._s4)) || ((spec.swalmen_) == (spec.specEnum._s5))) || (((spec.swalmen_) == (spec.specEnum._s6)) || (((spec.swalmen_) == (spec.specEnum._s7)) || ((spec.swalmen_) == (spec.specEnum._s8)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(124, true);
        if (this.doInfoEvent) this.infoEvent(124, true);

        if ((spec.swalmen_) == (spec.specEnum._s0)) {
            spec.swalmen_ = spec.specEnum._s3;
        } else if ((spec.swalmen_) == (spec.specEnum._s1)) {
            spec.swalmen_ = spec.specEnum._s3;
        } else if ((spec.swalmen_) == (spec.specEnum._s2)) {
            spec.swalmen_ = spec.specEnum._s3;
        } else if ((spec.swalmen_) == (spec.specEnum._s4)) {
            spec.swalmen_ = spec.specEnum._s3;
        } else if ((spec.swalmen_) == (spec.specEnum._s5)) {
            spec.swalmen_ = spec.specEnum._s3;
        } else if ((spec.swalmen_) == (spec.specEnum._s6)) {
            spec.swalmen_ = spec.specEnum._s3;
        } else if ((spec.swalmen_) == (spec.specEnum._s7)) {
            spec.swalmen_ = spec.specEnum._s3;
        } else if ((spec.swalmen_) == (spec.specEnum._s8)) {
            spec.swalmen_ = spec.specEnum._s3;
        }

        if (this.doInfoEvent) this.infoEvent(124, false);
        if (this.doInfoPrintOutput) this.printOutput(124, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 140 and event "swalmen.c_4".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge140() {
        var guard = ((((spec.swalmen_) == (spec.specEnum._s0)) || ((spec.swalmen_) == (spec.specEnum._s1))) || (((spec.swalmen_) == (spec.specEnum._s2)) || ((spec.swalmen_) == (spec.specEnum._s3)))) || (((spec.swalmen_) == (spec.specEnum._s5)) || (((spec.swalmen_) == (spec.specEnum._s6)) || (((spec.swalmen_) == (spec.specEnum._s7)) || ((spec.swalmen_) == (spec.specEnum._s8)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(125, true);
        if (this.doInfoEvent) this.infoEvent(125, true);

        if ((spec.swalmen_) == (spec.specEnum._s0)) {
            spec.swalmen_ = spec.specEnum._s4;
        } else if ((spec.swalmen_) == (spec.specEnum._s1)) {
            spec.swalmen_ = spec.specEnum._s4;
        } else if ((spec.swalmen_) == (spec.specEnum._s2)) {
            spec.swalmen_ = spec.specEnum._s4;
        } else if ((spec.swalmen_) == (spec.specEnum._s3)) {
            spec.swalmen_ = spec.specEnum._s4;
        } else if ((spec.swalmen_) == (spec.specEnum._s5)) {
            spec.swalmen_ = spec.specEnum._s4;
        } else if ((spec.swalmen_) == (spec.specEnum._s6)) {
            spec.swalmen_ = spec.specEnum._s4;
        } else if ((spec.swalmen_) == (spec.specEnum._s7)) {
            spec.swalmen_ = spec.specEnum._s4;
        } else if ((spec.swalmen_) == (spec.specEnum._s8)) {
            spec.swalmen_ = spec.specEnum._s4;
        }

        if (this.doInfoEvent) this.infoEvent(125, false);
        if (this.doInfoPrintOutput) this.printOutput(125, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 141 and event "swalmen.c_5".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge141() {
        var guard = ((((spec.swalmen_) == (spec.specEnum._s0)) || ((spec.swalmen_) == (spec.specEnum._s1))) || (((spec.swalmen_) == (spec.specEnum._s2)) || ((spec.swalmen_) == (spec.specEnum._s3)))) || (((spec.swalmen_) == (spec.specEnum._s4)) || (((spec.swalmen_) == (spec.specEnum._s6)) || (((spec.swalmen_) == (spec.specEnum._s7)) || ((spec.swalmen_) == (spec.specEnum._s8)))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(126, true);
        if (this.doInfoEvent) this.infoEvent(126, true);

        if ((spec.swalmen_) == (spec.specEnum._s0)) {
            spec.swalmen_ = spec.specEnum._s5;
        } else if ((spec.swalmen_) == (spec.specEnum._s1)) {
            spec.swalmen_ = spec.specEnum._s5;
        } else if ((spec.swalmen_) == (spec.specEnum._s2)) {
            spec.swalmen_ = spec.specEnum._s5;
        } else if ((spec.swalmen_) == (spec.specEnum._s3)) {
            spec.swalmen_ = spec.specEnum._s5;
        } else if ((spec.swalmen_) == (spec.specEnum._s4)) {
            spec.swalmen_ = spec.specEnum._s5;
        } else if ((spec.swalmen_) == (spec.specEnum._s6)) {
            spec.swalmen_ = spec.specEnum._s5;
        } else if ((spec.swalmen_) == (spec.specEnum._s7)) {
            spec.swalmen_ = spec.specEnum._s5;
        } else if ((spec.swalmen_) == (spec.specEnum._s8)) {
            spec.swalmen_ = spec.specEnum._s5;
        }

        if (this.doInfoEvent) this.infoEvent(126, false);
        if (this.doInfoPrintOutput) this.printOutput(126, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 142 and event "swalmen.c_6".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge142() {
        var guard = ((((spec.swalmen_) == (spec.specEnum._s0)) || ((spec.swalmen_) == (spec.specEnum._s1))) || (((spec.swalmen_) == (spec.specEnum._s2)) || ((spec.swalmen_) == (spec.specEnum._s3)))) || ((((spec.swalmen_) == (spec.specEnum._s4)) || ((spec.swalmen_) == (spec.specEnum._s5))) || (((spec.swalmen_) == (spec.specEnum._s7)) || ((spec.swalmen_) == (spec.specEnum._s8))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(127, true);
        if (this.doInfoEvent) this.infoEvent(127, true);

        if ((spec.swalmen_) == (spec.specEnum._s0)) {
            spec.swalmen_ = spec.specEnum._s6;
        } else if ((spec.swalmen_) == (spec.specEnum._s1)) {
            spec.swalmen_ = spec.specEnum._s6;
        } else if ((spec.swalmen_) == (spec.specEnum._s2)) {
            spec.swalmen_ = spec.specEnum._s6;
        } else if ((spec.swalmen_) == (spec.specEnum._s3)) {
            spec.swalmen_ = spec.specEnum._s6;
        } else if ((spec.swalmen_) == (spec.specEnum._s4)) {
            spec.swalmen_ = spec.specEnum._s6;
        } else if ((spec.swalmen_) == (spec.specEnum._s5)) {
            spec.swalmen_ = spec.specEnum._s6;
        } else if ((spec.swalmen_) == (spec.specEnum._s7)) {
            spec.swalmen_ = spec.specEnum._s6;
        } else if ((spec.swalmen_) == (spec.specEnum._s8)) {
            spec.swalmen_ = spec.specEnum._s6;
        }

        if (this.doInfoEvent) this.infoEvent(127, false);
        if (this.doInfoPrintOutput) this.printOutput(127, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 143 and event "swalmen.c_7".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge143() {
        var guard = ((((spec.swalmen_) == (spec.specEnum._s0)) || ((spec.swalmen_) == (spec.specEnum._s1))) || (((spec.swalmen_) == (spec.specEnum._s2)) || ((spec.swalmen_) == (spec.specEnum._s3)))) || ((((spec.swalmen_) == (spec.specEnum._s4)) || ((spec.swalmen_) == (spec.specEnum._s5))) || (((spec.swalmen_) == (spec.specEnum._s6)) || ((spec.swalmen_) == (spec.specEnum._s8))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(128, true);
        if (this.doInfoEvent) this.infoEvent(128, true);

        if ((spec.swalmen_) == (spec.specEnum._s0)) {
            spec.swalmen_ = spec.specEnum._s7;
        } else if ((spec.swalmen_) == (spec.specEnum._s1)) {
            spec.swalmen_ = spec.specEnum._s7;
        } else if ((spec.swalmen_) == (spec.specEnum._s2)) {
            spec.swalmen_ = spec.specEnum._s7;
        } else if ((spec.swalmen_) == (spec.specEnum._s3)) {
            spec.swalmen_ = spec.specEnum._s7;
        } else if ((spec.swalmen_) == (spec.specEnum._s4)) {
            spec.swalmen_ = spec.specEnum._s7;
        } else if ((spec.swalmen_) == (spec.specEnum._s5)) {
            spec.swalmen_ = spec.specEnum._s7;
        } else if ((spec.swalmen_) == (spec.specEnum._s6)) {
            spec.swalmen_ = spec.specEnum._s7;
        } else if ((spec.swalmen_) == (spec.specEnum._s8)) {
            spec.swalmen_ = spec.specEnum._s7;
        }

        if (this.doInfoEvent) this.infoEvent(128, false);
        if (this.doInfoPrintOutput) this.printOutput(128, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 144 and event "swalmen.c_8".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge144() {
        var guard = ((((spec.swalmen_) == (spec.specEnum._s0)) || ((spec.swalmen_) == (spec.specEnum._s1))) || (((spec.swalmen_) == (spec.specEnum._s2)) || ((spec.swalmen_) == (spec.specEnum._s3)))) || ((((spec.swalmen_) == (spec.specEnum._s4)) || ((spec.swalmen_) == (spec.specEnum._s5))) || (((spec.swalmen_) == (spec.specEnum._s6)) || ((spec.swalmen_) == (spec.specEnum._s7))));

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(129, true);
        if (this.doInfoEvent) this.infoEvent(129, true);

        if ((spec.swalmen_) == (spec.specEnum._s0)) {
            spec.swalmen_ = spec.specEnum._s8;
        } else if ((spec.swalmen_) == (spec.specEnum._s1)) {
            spec.swalmen_ = spec.specEnum._s8;
        } else if ((spec.swalmen_) == (spec.specEnum._s2)) {
            spec.swalmen_ = spec.specEnum._s8;
        } else if ((spec.swalmen_) == (spec.specEnum._s3)) {
            spec.swalmen_ = spec.specEnum._s8;
        } else if ((spec.swalmen_) == (spec.specEnum._s4)) {
            spec.swalmen_ = spec.specEnum._s8;
        } else if ((spec.swalmen_) == (spec.specEnum._s5)) {
            spec.swalmen_ = spec.specEnum._s8;
        } else if ((spec.swalmen_) == (spec.specEnum._s6)) {
            spec.swalmen_ = spec.specEnum._s8;
        } else if ((spec.swalmen_) == (spec.specEnum._s7)) {
            spec.swalmen_ = spec.specEnum._s8;
        }

        if (this.doInfoEvent) this.infoEvent(129, false);
        if (this.doInfoPrintOutput) this.printOutput(129, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 145 and event "TRtoSUB_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge145() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._TR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(131, true);
        if (this.doInfoEvent) this.infoEvent(131, true);

        spec.WaferPlant_0_ = spec.specEnum._TRtoSUB;

        if (this.doInfoEvent) this.infoEvent(131, false);
        if (this.doInfoPrintOutput) this.printOutput(131, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 146 and event "TRtoSUB_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge146() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._TR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(133, true);
        if (this.doInfoEvent) this.infoEvent(133, true);

        spec.WaferPlant_1_ = spec.specEnum._TRtoSUB;

        if (this.doInfoEvent) this.infoEvent(133, false);
        if (this.doInfoPrintOutput) this.printOutput(133, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 147 and event "TRtoSUB_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge147() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._TR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(135, true);
        if (this.doInfoEvent) this.infoEvent(135, true);

        spec.WaferPlant_2_ = spec.specEnum._TRtoSUB;

        if (this.doInfoEvent) this.infoEvent(135, false);
        if (this.doInfoPrintOutput) this.printOutput(135, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 148 and event "URtoCTC1_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge148() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._UR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(137, true);
        if (this.doInfoEvent) this.infoEvent(137, true);

        spec.WaferPlant_0_ = spec.specEnum._URtoCTC1;

        if (this.doInfoEvent) this.infoEvent(137, false);
        if (this.doInfoPrintOutput) this.printOutput(137, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 149 and event "URtoCTC1_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge149() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._UR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(139, true);
        if (this.doInfoEvent) this.infoEvent(139, true);

        spec.WaferPlant_1_ = spec.specEnum._URtoCTC1;

        if (this.doInfoEvent) this.infoEvent(139, false);
        if (this.doInfoPrintOutput) this.printOutput(139, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 150 and event "URtoCTC1_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge150() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._UR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(141, true);
        if (this.doInfoEvent) this.infoEvent(141, true);

        spec.WaferPlant_2_ = spec.specEnum._URtoCTC1;

        if (this.doInfoEvent) this.infoEvent(141, false);
        if (this.doInfoPrintOutput) this.printOutput(141, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 151 and event "URtoDU_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge151() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._UR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(143, true);
        if (this.doInfoEvent) this.infoEvent(143, true);

        spec.WaferPlant_0_ = spec.specEnum._URtoDU;

        if (this.doInfoEvent) this.infoEvent(143, false);
        if (this.doInfoPrintOutput) this.printOutput(143, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 152 and event "URtoDU_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge152() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._UR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(145, true);
        if (this.doInfoEvent) this.infoEvent(145, true);

        spec.WaferPlant_1_ = spec.specEnum._URtoDU;

        if (this.doInfoEvent) this.infoEvent(145, false);
        if (this.doInfoPrintOutput) this.printOutput(145, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 153 and event "URtoDU_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge153() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._UR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(147, true);
        if (this.doInfoEvent) this.infoEvent(147, true);

        spec.WaferPlant_2_ = spec.specEnum._URtoDU;

        if (this.doInfoEvent) this.infoEvent(147, false);
        if (this.doInfoPrintOutput) this.printOutput(147, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 154 and event "URtoPA_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge154() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._UR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(149, true);
        if (this.doInfoEvent) this.infoEvent(149, true);

        spec.WaferPlant_0_ = spec.specEnum._URtoPA;

        if (this.doInfoEvent) this.infoEvent(149, false);
        if (this.doInfoPrintOutput) this.printOutput(149, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 155 and event "URtoPA_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge155() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._UR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(151, true);
        if (this.doInfoEvent) this.infoEvent(151, true);

        spec.WaferPlant_1_ = spec.specEnum._URtoPA;

        if (this.doInfoEvent) this.infoEvent(151, false);
        if (this.doInfoPrintOutput) this.printOutput(151, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 156 and event "URtoPA_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge156() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._UR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(153, true);
        if (this.doInfoEvent) this.infoEvent(153, true);

        spec.WaferPlant_2_ = spec.specEnum._URtoPA;

        if (this.doInfoEvent) this.infoEvent(153, false);
        if (this.doInfoPrintOutput) this.printOutput(153, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 157 and event "URtoSUB_0_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge157() {
        var guard = (spec.WaferPlant_0_) == (spec.specEnum._UR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(155, true);
        if (this.doInfoEvent) this.infoEvent(155, true);

        spec.WaferPlant_0_ = spec.specEnum._URtoSUB;

        if (this.doInfoEvent) this.infoEvent(155, false);
        if (this.doInfoPrintOutput) this.printOutput(155, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 158 and event "URtoSUB_1_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge158() {
        var guard = (spec.WaferPlant_1_) == (spec.specEnum._UR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(157, true);
        if (this.doInfoEvent) this.infoEvent(157, true);

        spec.WaferPlant_1_ = spec.specEnum._URtoSUB;

        if (this.doInfoEvent) this.infoEvent(157, false);
        if (this.doInfoPrintOutput) this.printOutput(157, false);
        if (this.doStateOutput || this.doTransitionOutput) this.log('');
        return true;
    }

    /**
     * Execute code for edge with index 159 and event "URtoSUB_2_s".
     *
     * @return 'true' if the edge was executed, 'false' otherwise.
     */
    execEdge159() {
        var guard = (spec.WaferPlant_2_) == (spec.specEnum._UR);

        if (!guard) {
            return false;
        }

        if (this.doInfoPrintOutput) this.printOutput(159, true);
        if (this.doInfoEvent) this.infoEvent(159, true);

        spec.WaferPlant_2_ = spec.specEnum._URtoSUB;

        if (this.doInfoEvent) this.infoEvent(159, false);
        if (this.doInfoPrintOutput) this.printOutput(159, false);
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
        spec.swalmen_ = spec.specEnum._s0;
        spec.WaferPlant_0_ = spec.specEnum._TR;
        spec.WaferPlant_1_ = spec.specEnum._CH0;
        spec.WaferPlant_2_ = spec.specEnum._CH1;
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
        state += specUtils.fmt(', swalmen=%s', specUtils.valueToStr(spec.swalmen_));
        state += specUtils.fmt(', WaferPlant_0=%s', specUtils.valueToStr(spec.WaferPlant_0_));
        state += specUtils.fmt(', WaferPlant_1=%s', specUtils.valueToStr(spec.WaferPlant_1_));
        state += specUtils.fmt(', WaferPlant_2=%s', specUtils.valueToStr(spec.WaferPlant_2_));
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
