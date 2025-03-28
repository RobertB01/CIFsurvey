const xml_fifo_manually_modeled_supervisor = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
  <declarations xmi:type="declarations:Constant" xmi:id="3" name="MAX_NR_OF_PRODS">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;fifo.plants.cif&quot;: " startLine="16" endOffset="587" startColumn="11" endLine="16" endColumn="25" startOffset="573" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <type xmi:type="types:IntType" xmi:id="5" lower="5" upper="5">
      <position xmi:type="position:Position" xmi:id="6" source="File &quot;fifo.plants.cif&quot;: " startLine="16" endOffset="591" startColumn="29" endLine="16" endColumn="29" startOffset="591" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    </type>
    <value xmi:type="expressions:IntExpression" xmi:id="7" value="5">
      <position xmi:type="position:Position" xmi:id="8" source="File &quot;fifo.plants.cif&quot;: " startLine="16" endOffset="591" startColumn="29" endLine="16" endColumn="29" startOffset="591" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <type xmi:type="types:IntType" xmi:id="9" lower="5" upper="5">
        <position xmi:type="position:Position" xmi:id="10" source="File &quot;fifo.plants.cif&quot;: " startLine="16" endOffset="591" startColumn="29" endLine="16" endColumn="29" startOffset="591" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      </type>
    </value>
  </declarations>
  <declarations xmi:type="declarations:TypeDecl" xmi:id="11" name="ProductId">
    <position xmi:type="position:Position" xmi:id="12" source="File &quot;fifo.plants.cif&quot;: " startLine="17" endOffset="607" startColumn="6" endLine="17" endColumn="14" startOffset="599" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <type xmi:type="types:IntType" xmi:id="13" lower="0" upper="4">
      <position xmi:type="position:Position" xmi:id="14" source="File &quot;fifo.plants.cif&quot;: " startLine="17" endOffset="613" startColumn="18" endLine="17" endColumn="20" startOffset="611" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    </type>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="15" name="c_enter" controllable="true">
    <position xmi:type="position:Position" xmi:id="16" source="File &quot;fifo.plants.cif&quot;: " startLine="19" endOffset="662" startColumn="14" endLine="19" endColumn="20" startOffset="656" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="17" name="c_start" controllable="true">
    <position xmi:type="position:Position" xmi:id="18" source="File &quot;fifo.plants.cif&quot;: " startLine="20" endOffset="694" startColumn="24" endLine="20" endColumn="30" startOffset="688" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <type xmi:type="types:TypeRef" xmi:id="19" type="11">
      <position xmi:type="position:Position" xmi:id="20" source="File &quot;fifo.plants.cif&quot;: " startLine="20" endOffset="686" startColumn="14" endLine="20" endColumn="22" startOffset="678" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    </type>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="21" name="c_do1" controllable="true">
    <position xmi:type="position:Position" xmi:id="22" source="File &quot;fifo.plants.cif&quot;: " startLine="21" endOffset="724" startColumn="24" endLine="21" endColumn="28" startOffset="720" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <type xmi:type="types:TypeRef" xmi:id="23" type="11">
      <position xmi:type="position:Position" xmi:id="24" source="File &quot;fifo.plants.cif&quot;: " startLine="21" endOffset="718" startColumn="14" endLine="21" endColumn="22" startOffset="710" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    </type>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="25" name="c_do2" controllable="true">
    <position xmi:type="position:Position" xmi:id="26" source="File &quot;fifo.plants.cif&quot;: " startLine="22" endOffset="754" startColumn="24" endLine="22" endColumn="28" startOffset="750" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <type xmi:type="types:TypeRef" xmi:id="27" type="11">
      <position xmi:type="position:Position" xmi:id="28" source="File &quot;fifo.plants.cif&quot;: " startLine="22" endOffset="748" startColumn="14" endLine="22" endColumn="22" startOffset="740" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    </type>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="29" name="c_done1" controllable="true">
    <position xmi:type="position:Position" xmi:id="30" source="File &quot;fifo.plants.cif&quot;: " startLine="23" endOffset="786" startColumn="24" endLine="23" endColumn="30" startOffset="780" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <type xmi:type="types:TypeRef" xmi:id="31" type="11">
      <position xmi:type="position:Position" xmi:id="32" source="File &quot;fifo.plants.cif&quot;: " startLine="23" endOffset="778" startColumn="14" endLine="23" endColumn="22" startOffset="770" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    </type>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="33" name="c_done2" controllable="true">
    <position xmi:type="position:Position" xmi:id="34" source="File &quot;fifo.plants.cif&quot;: " startLine="24" endOffset="818" startColumn="24" endLine="24" endColumn="30" startOffset="812" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <type xmi:type="types:TypeRef" xmi:id="35" type="11">
      <position xmi:type="position:Position" xmi:id="36" source="File &quot;fifo.plants.cif&quot;: " startLine="24" endOffset="810" startColumn="14" endLine="24" endColumn="22" startOffset="802" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    </type>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="37" name="u_success" controllable="false">
    <position xmi:type="position:Position" xmi:id="38" source="File &quot;fifo.plants.cif&quot;: " startLine="25" endOffset="844" startColumn="16" endLine="25" endColumn="24" startOffset="836" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="39" name="u_failure" controllable="false">
    <position xmi:type="position:Position" xmi:id="40" source="File &quot;fifo.plants.cif&quot;: " startLine="26" endOffset="870" startColumn="16" endLine="26" endColumn="24" startOffset="862" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="41" name="c_redo" controllable="true">
    <position xmi:type="position:Position" xmi:id="42" source="File &quot;fifo.plants.cif&quot;: " startLine="27" endOffset="901" startColumn="24" endLine="27" endColumn="29" startOffset="896" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <type xmi:type="types:TypeRef" xmi:id="43" type="11">
      <position xmi:type="position:Position" xmi:id="44" source="File &quot;fifo.plants.cif&quot;: " startLine="27" endOffset="894" startColumn="14" endLine="27" endColumn="22" startOffset="886" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    </type>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="45" name="c_leave" controllable="true">
    <position xmi:type="position:Position" xmi:id="46" source="File &quot;fifo.plants.cif&quot;: " startLine="28" endOffset="933" startColumn="24" endLine="28" endColumn="30" startOffset="927" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <type xmi:type="types:TypeRef" xmi:id="47" type="11">
      <position xmi:type="position:Position" xmi:id="48" source="File &quot;fifo.plants.cif&quot;: " startLine="28" endOffset="925" startColumn="14" endLine="28" endColumn="22" startOffset="917" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    </type>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="49" name="c_finished" controllable="true">
    <position xmi:type="position:Position" xmi:id="50" source="File &quot;fifo.plants.cif&quot;: " startLine="29" endOffset="968" startColumn="24" endLine="29" endColumn="33" startOffset="959" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <type xmi:type="types:TypeRef" xmi:id="51" type="11">
      <position xmi:type="position:Position" xmi:id="52" source="File &quot;fifo.plants.cif&quot;: " startLine="29" endOffset="957" startColumn="14" endLine="29" endColumn="22" startOffset="949" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    </type>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="53" name="c_exit" controllable="true">
    <position xmi:type="position:Position" xmi:id="54" source="File &quot;fifo.plants.cif&quot;: " startLine="30" endOffset="989" startColumn="14" endLine="30" endColumn="19" startOffset="984" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
  </declarations>
  <components xmi:type="automata:Automaton" xmi:id="55" name="sup" kind="Supervisor">
    <position xmi:type="position:Position" xmi:id="56" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="18" endOffset="619" startColumn="12" endLine="18" endColumn="14" startOffset="617" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
    <declarations xmi:type="declarations:AlgVariable" xmi:id="57" name="nrOfProdsInLoop">
      <position xmi:type="position:Position" xmi:id="58" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="646" startColumn="11" endLine="19" endColumn="25" startOffset="632" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
      <value xmi:type="expressions:BinaryExpression" xmi:id="59" operator="Addition">
        <position xmi:type="position:Position" xmi:id="60" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="839" startColumn="72" endLine="21" endColumn="72" startOffset="839" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
        <type xmi:type="types:IntType" xmi:id="61" lower="0" upper="4">
          <position xmi:type="position:Position" xmi:id="62" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="839" startColumn="72" endLine="21" endColumn="72" startOffset="839" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
        </type>
        <left xmi:type="expressions:BinaryExpression" xmi:id="63" operator="Addition">
          <position xmi:type="position:Position" xmi:id="64" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="766" startColumn="72" endLine="20" endColumn="72" startOffset="766" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          <type xmi:type="types:IntType" xmi:id="65" lower="0" upper="3">
            <position xmi:type="position:Position" xmi:id="66" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="766" startColumn="72" endLine="20" endColumn="72" startOffset="766" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="67" operator="Addition">
            <position xmi:type="position:Position" xmi:id="68" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="693" startColumn="72" endLine="19" endColumn="72" startOffset="693" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:IntType" xmi:id="69" lower="0" upper="2">
              <position xmi:type="position:Position" xmi:id="70" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="693" startColumn="72" endLine="19" endColumn="72" startOffset="693" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
            <left xmi:type="expressions:SwitchExpression" xmi:id="71">
              <position xmi:type="position:Position" xmi:id="72" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="655" startColumn="29" endLine="19" endColumn="34" startOffset="650" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:IntType" xmi:id="73" lower="0" upper="1">
                <position xmi:type="position:Position" xmi:id="74" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="655" startColumn="29" endLine="19" endColumn="34" startOffset="650" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
              <value xmi:type="expressions:ComponentExpression" xmi:id="75" component="639">
                <position xmi:type="position:Position" xmi:id="76" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="660" startColumn="36" endLine="19" endColumn="39" startOffset="657" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:ComponentType" xmi:id="77" component="639">
                  <position xmi:type="position:Position" xmi:id="78" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="660" startColumn="36" endLine="19" endColumn="39" startOffset="657" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
              </value>
              <cases xmi:type="expressions:SwitchCase" xmi:id="79">
                <position xmi:type="position:Position" xmi:id="80" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="666" startColumn="42" endLine="19" endColumn="45" startOffset="663" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <key xmi:type="expressions:LocationExpression" xmi:id="81" location="651">
                  <position xmi:type="position:Position" xmi:id="82" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="671" startColumn="47" endLine="19" endColumn="50" startOffset="668" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="83">
                    <position xmi:type="position:Position" xmi:id="84" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="671" startColumn="47" endLine="19" endColumn="50" startOffset="668" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </key>
                <value xmi:type="expressions:IntExpression" xmi:id="85">
                  <position xmi:type="position:Position" xmi:id="86" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="674" startColumn="53" endLine="19" endColumn="53" startOffset="674" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:IntType" xmi:id="87" lower="0" upper="0">
                    <position xmi:type="position:Position" xmi:id="88" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="674" startColumn="53" endLine="19" endColumn="53" startOffset="674" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </value>
              </cases>
              <cases xmi:type="expressions:SwitchCase" xmi:id="89">
                <position xmi:type="position:Position" xmi:id="90" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="679" startColumn="55" endLine="19" endColumn="58" startOffset="676" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <key xmi:type="expressions:LocationExpression" xmi:id="91" location="685">
                  <position xmi:type="position:Position" xmi:id="92" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="684" startColumn="60" endLine="19" endColumn="63" startOffset="681" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="93">
                    <position xmi:type="position:Position" xmi:id="94" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="684" startColumn="60" endLine="19" endColumn="63" startOffset="681" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </key>
                <value xmi:type="expressions:IntExpression" xmi:id="95" value="1">
                  <position xmi:type="position:Position" xmi:id="96" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="687" startColumn="66" endLine="19" endColumn="66" startOffset="687" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:IntType" xmi:id="97" lower="1" upper="1">
                    <position xmi:type="position:Position" xmi:id="98" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="19" endOffset="687" startColumn="66" endLine="19" endColumn="66" startOffset="687" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </value>
              </cases>
            </left>
            <right xmi:type="expressions:SwitchExpression" xmi:id="99">
              <position xmi:type="position:Position" xmi:id="100" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="728" startColumn="29" endLine="20" endColumn="34" startOffset="723" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:IntType" xmi:id="101" lower="0" upper="1">
                <position xmi:type="position:Position" xmi:id="102" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="728" startColumn="29" endLine="20" endColumn="34" startOffset="723" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
              <value xmi:type="expressions:ComponentExpression" xmi:id="103" component="731">
                <position xmi:type="position:Position" xmi:id="104" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="732" startColumn="36" endLine="20" endColumn="38" startOffset="730" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:ComponentType" xmi:id="105" component="731">
                  <position xmi:type="position:Position" xmi:id="106" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="732" startColumn="36" endLine="20" endColumn="38" startOffset="730" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
              </value>
              <cases xmi:type="expressions:SwitchCase" xmi:id="107">
                <position xmi:type="position:Position" xmi:id="108" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="739" startColumn="42" endLine="20" endColumn="45" startOffset="736" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <key xmi:type="expressions:LocationExpression" xmi:id="109" location="743">
                  <position xmi:type="position:Position" xmi:id="110" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="744" startColumn="47" endLine="20" endColumn="50" startOffset="741" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="111">
                    <position xmi:type="position:Position" xmi:id="112" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="744" startColumn="47" endLine="20" endColumn="50" startOffset="741" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </key>
                <value xmi:type="expressions:IntExpression" xmi:id="113">
                  <position xmi:type="position:Position" xmi:id="114" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="747" startColumn="53" endLine="20" endColumn="53" startOffset="747" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:IntType" xmi:id="115" lower="0" upper="0">
                    <position xmi:type="position:Position" xmi:id="116" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="747" startColumn="53" endLine="20" endColumn="53" startOffset="747" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </value>
              </cases>
              <cases xmi:type="expressions:SwitchCase" xmi:id="117">
                <position xmi:type="position:Position" xmi:id="118" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="752" startColumn="55" endLine="20" endColumn="58" startOffset="749" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <key xmi:type="expressions:LocationExpression" xmi:id="119" location="771">
                  <position xmi:type="position:Position" xmi:id="120" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="757" startColumn="60" endLine="20" endColumn="63" startOffset="754" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="121">
                    <position xmi:type="position:Position" xmi:id="122" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="757" startColumn="60" endLine="20" endColumn="63" startOffset="754" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </key>
                <value xmi:type="expressions:IntExpression" xmi:id="123" value="1">
                  <position xmi:type="position:Position" xmi:id="124" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="760" startColumn="66" endLine="20" endColumn="66" startOffset="760" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:IntType" xmi:id="125" lower="1" upper="1">
                    <position xmi:type="position:Position" xmi:id="126" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="20" endOffset="760" startColumn="66" endLine="20" endColumn="66" startOffset="760" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </value>
              </cases>
            </right>
          </left>
          <right xmi:type="expressions:SwitchExpression" xmi:id="127">
            <position xmi:type="position:Position" xmi:id="128" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="801" startColumn="29" endLine="21" endColumn="34" startOffset="796" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:IntType" xmi:id="129" lower="0" upper="1">
              <position xmi:type="position:Position" xmi:id="130" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="801" startColumn="29" endLine="21" endColumn="34" startOffset="796" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
            <value xmi:type="expressions:ComponentExpression" xmi:id="131" component="795">
              <position xmi:type="position:Position" xmi:id="132" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="805" startColumn="36" endLine="21" endColumn="38" startOffset="803" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:ComponentType" xmi:id="133" component="795">
                <position xmi:type="position:Position" xmi:id="134" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="805" startColumn="36" endLine="21" endColumn="38" startOffset="803" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
            </value>
            <cases xmi:type="expressions:SwitchCase" xmi:id="135">
              <position xmi:type="position:Position" xmi:id="136" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="812" startColumn="42" endLine="21" endColumn="45" startOffset="809" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <key xmi:type="expressions:LocationExpression" xmi:id="137" location="807">
                <position xmi:type="position:Position" xmi:id="138" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="817" startColumn="47" endLine="21" endColumn="50" startOffset="814" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:BoolType" xmi:id="139">
                  <position xmi:type="position:Position" xmi:id="140" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="817" startColumn="47" endLine="21" endColumn="50" startOffset="814" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
              </key>
              <value xmi:type="expressions:IntExpression" xmi:id="141">
                <position xmi:type="position:Position" xmi:id="142" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="820" startColumn="53" endLine="21" endColumn="53" startOffset="820" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:IntType" xmi:id="143" lower="0" upper="0">
                  <position xmi:type="position:Position" xmi:id="144" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="820" startColumn="53" endLine="21" endColumn="53" startOffset="820" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
              </value>
            </cases>
            <cases xmi:type="expressions:SwitchCase" xmi:id="145">
              <position xmi:type="position:Position" xmi:id="146" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="825" startColumn="55" endLine="21" endColumn="58" startOffset="822" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <key xmi:type="expressions:LocationExpression" xmi:id="147" location="835">
                <position xmi:type="position:Position" xmi:id="148" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="830" startColumn="60" endLine="21" endColumn="63" startOffset="827" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:BoolType" xmi:id="149">
                  <position xmi:type="position:Position" xmi:id="150" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="830" startColumn="60" endLine="21" endColumn="63" startOffset="827" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
              </key>
              <value xmi:type="expressions:IntExpression" xmi:id="151" value="1">
                <position xmi:type="position:Position" xmi:id="152" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="833" startColumn="66" endLine="21" endColumn="66" startOffset="833" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:IntType" xmi:id="153" lower="1" upper="1">
                  <position xmi:type="position:Position" xmi:id="154" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="833" startColumn="66" endLine="21" endColumn="66" startOffset="833" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
              </value>
            </cases>
          </right>
        </left>
        <right xmi:type="expressions:SwitchExpression" xmi:id="155">
          <position xmi:type="position:Position" xmi:id="156" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="22" endOffset="874" startColumn="29" endLine="22" endColumn="34" startOffset="869" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          <type xmi:type="types:IntType" xmi:id="157" lower="0" upper="1">
            <position xmi:type="position:Position" xmi:id="158" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="22" endOffset="874" startColumn="29" endLine="22" endColumn="34" startOffset="869" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          </type>
          <value xmi:type="expressions:ComponentExpression" xmi:id="159" component="859">
            <position xmi:type="position:Position" xmi:id="160" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="22" endOffset="878" startColumn="36" endLine="22" endColumn="38" startOffset="876" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:ComponentType" xmi:id="161" component="859">
              <position xmi:type="position:Position" xmi:id="162" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="22" endOffset="878" startColumn="36" endLine="22" endColumn="38" startOffset="876" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
          </value>
          <cases xmi:type="expressions:SwitchCase" xmi:id="163">
            <position xmi:type="position:Position" xmi:id="164" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="22" endOffset="885" startColumn="42" endLine="22" endColumn="45" startOffset="882" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <key xmi:type="expressions:LocationExpression" xmi:id="165" location="871">
              <position xmi:type="position:Position" xmi:id="166" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="22" endOffset="890" startColumn="47" endLine="22" endColumn="50" startOffset="887" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:BoolType" xmi:id="167">
                <position xmi:type="position:Position" xmi:id="168" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="22" endOffset="890" startColumn="47" endLine="22" endColumn="50" startOffset="887" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
            </key>
            <value xmi:type="expressions:IntExpression" xmi:id="169">
              <position xmi:type="position:Position" xmi:id="170" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="22" endOffset="893" startColumn="53" endLine="22" endColumn="53" startOffset="893" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:IntType" xmi:id="171" lower="0" upper="0">
                <position xmi:type="position:Position" xmi:id="172" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="22" endOffset="893" startColumn="53" endLine="22" endColumn="53" startOffset="893" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
            </value>
          </cases>
          <cases xmi:type="expressions:SwitchCase" xmi:id="173">
            <position xmi:type="position:Position" xmi:id="174" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="22" endOffset="898" startColumn="55" endLine="22" endColumn="58" startOffset="895" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <value xmi:type="expressions:IntExpression" xmi:id="175" value="1">
              <position xmi:type="position:Position" xmi:id="176" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="22" endOffset="906" startColumn="66" endLine="22" endColumn="66" startOffset="906" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:IntType" xmi:id="177" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="178" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="22" endOffset="906" startColumn="66" endLine="22" endColumn="66" startOffset="906" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
            </value>
          </cases>
        </right>
      </value>
      <type xmi:type="types:IntType" xmi:id="179" lower="0" upper="4">
        <position xmi:type="position:Position" xmi:id="180" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="21" endOffset="839" startColumn="72" endLine="21" endColumn="72" startOffset="839" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
      </type>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="181">
      <position xmi:type="position:Position" xmi:id="182" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="24" endOffset="923" startColumn="3" endLine="24" endColumn="10" startOffset="916" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="183" value="true">
        <position xmi:type="position:Position" xmi:id="184" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="25" endOffset="936" startColumn="5" endLine="25" endColumn="11" startOffset="930" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
        <type xmi:type="types:BoolType" xmi:id="185">
          <position xmi:type="position:Position" xmi:id="186" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="25" endOffset="936" startColumn="5" endLine="25" endColumn="11" startOffset="930" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="187">
        <position xmi:type="position:Position" xmi:id="188" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="28" endOffset="959" startColumn="5" endLine="28" endColumn="8" startOffset="956" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="189">
          <position xmi:type="position:Position" xmi:id="190" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="28" endOffset="967" startColumn="10" endLine="28" endColumn="16" startOffset="961" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="191" event="29">
            <position xmi:type="position:Position" xmi:id="192" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="28" endOffset="967" startColumn="10" endLine="28" endColumn="16" startOffset="961" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="193">
              <position xmi:type="position:Position" xmi:id="194" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="28" endOffset="967" startColumn="10" endLine="28" endColumn="16" startOffset="961" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="195">
          <position xmi:type="position:Position" xmi:id="196" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1068" startColumn="23" endLine="29" endColumn="24" startOffset="1067" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          <type xmi:type="types:BoolType" xmi:id="197">
            <position xmi:type="position:Position" xmi:id="198" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1068" startColumn="23" endLine="29" endColumn="24" startOffset="1067" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          </type>
          <left xmi:type="expressions:LocationExpression" xmi:id="199" location="651">
            <position xmi:type="position:Position" xmi:id="200" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1065" startColumn="13" endLine="29" endColumn="21" startOffset="1057" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="201">
              <position xmi:type="position:Position" xmi:id="202" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1065" startColumn="13" endLine="29" endColumn="21" startOffset="1057" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="203" operator="Equal">
            <position xmi:type="position:Position" xmi:id="204" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1081" startColumn="37" endLine="29" endColumn="37" startOffset="1081" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="205">
              <position xmi:type="position:Position" xmi:id="206" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1081" startColumn="37" endLine="29" endColumn="37" startOffset="1081" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="207" variable="641">
              <position xmi:type="position:Position" xmi:id="208" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1079" startColumn="26" endLine="29" endColumn="35" startOffset="1070" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:TypeRef" xmi:id="209" type="11">
                <position xmi:type="position:Position" xmi:id="210" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1079" startColumn="26" endLine="29" endColumn="35" startOffset="1070" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="211" operator="Modulus">
              <position xmi:type="position:Position" xmi:id="212" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1101" startColumn="55" endLine="29" endColumn="57" startOffset="1099" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:IntType" xmi:id="213" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="214" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1101" startColumn="55" endLine="29" endColumn="57" startOffset="1099" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
              <left xmi:type="expressions:BinaryExpression" xmi:id="215" operator="Addition">
                <position xmi:type="position:Position" xmi:id="216" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1094" startColumn="50" endLine="29" endColumn="50" startOffset="1094" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:IntType" xmi:id="217" lower="1" upper="5">
                  <position xmi:type="position:Position" xmi:id="218" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1094" startColumn="50" endLine="29" endColumn="50" startOffset="1094" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
                <left xmi:type="expressions:DiscVariableExpression" xmi:id="219" variable="733">
                  <position xmi:type="position:Position" xmi:id="220" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1092" startColumn="40" endLine="29" endColumn="48" startOffset="1084" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:TypeRef" xmi:id="221" type="11">
                    <position xmi:type="position:Position" xmi:id="222" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1092" startColumn="40" endLine="29" endColumn="48" startOffset="1084" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </left>
                <right xmi:type="expressions:IntExpression" xmi:id="223" value="1">
                  <position xmi:type="position:Position" xmi:id="224" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1096" startColumn="52" endLine="29" endColumn="52" startOffset="1096" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:IntType" xmi:id="225" lower="1" upper="1">
                    <position xmi:type="position:Position" xmi:id="226" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1096" startColumn="52" endLine="29" endColumn="52" startOffset="1096" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </right>
              </left>
              <right xmi:type="expressions:ConstantExpression" xmi:id="227" constant="3">
                <position xmi:type="position:Position" xmi:id="228" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1117" startColumn="59" endLine="29" endColumn="73" startOffset="1103" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:IntType" xmi:id="229" lower="5" upper="5">
                  <position xmi:type="position:Position" xmi:id="230" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="29" endOffset="1117" startColumn="59" endLine="29" endColumn="73" startOffset="1103" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
              </right>
            </right>
          </right>
        </guards>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="231">
          <position xmi:type="position:Position" xmi:id="232" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1143" startColumn="23" endLine="30" endColumn="24" startOffset="1142" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          <type xmi:type="types:BoolType" xmi:id="233">
            <position xmi:type="position:Position" xmi:id="234" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1143" startColumn="23" endLine="30" endColumn="24" startOffset="1142" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          </type>
          <left xmi:type="expressions:LocationExpression" xmi:id="235" location="807">
            <position xmi:type="position:Position" xmi:id="236" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1139" startColumn="13" endLine="30" endColumn="20" startOffset="1132" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="237">
              <position xmi:type="position:Position" xmi:id="238" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1139" startColumn="13" endLine="30" endColumn="20" startOffset="1132" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="239" operator="Equal">
            <position xmi:type="position:Position" xmi:id="240" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1156" startColumn="37" endLine="30" endColumn="37" startOffset="1156" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="241">
              <position xmi:type="position:Position" xmi:id="242" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1156" startColumn="37" endLine="30" endColumn="37" startOffset="1156" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="243" variable="797">
              <position xmi:type="position:Position" xmi:id="244" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1153" startColumn="26" endLine="30" endColumn="34" startOffset="1145" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:TypeRef" xmi:id="245" type="11">
                <position xmi:type="position:Position" xmi:id="246" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1153" startColumn="26" endLine="30" endColumn="34" startOffset="1145" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="247" operator="Modulus">
              <position xmi:type="position:Position" xmi:id="248" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1176" startColumn="55" endLine="30" endColumn="57" startOffset="1174" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:IntType" xmi:id="249" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="250" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1176" startColumn="55" endLine="30" endColumn="57" startOffset="1174" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
              <left xmi:type="expressions:BinaryExpression" xmi:id="251" operator="Addition">
                <position xmi:type="position:Position" xmi:id="252" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1169" startColumn="50" endLine="30" endColumn="50" startOffset="1169" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:IntType" xmi:id="253" lower="1" upper="5">
                  <position xmi:type="position:Position" xmi:id="254" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1169" startColumn="50" endLine="30" endColumn="50" startOffset="1169" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
                <left xmi:type="expressions:DiscVariableExpression" xmi:id="255" variable="733">
                  <position xmi:type="position:Position" xmi:id="256" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1167" startColumn="40" endLine="30" endColumn="48" startOffset="1159" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:TypeRef" xmi:id="257" type="11">
                    <position xmi:type="position:Position" xmi:id="258" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1167" startColumn="40" endLine="30" endColumn="48" startOffset="1159" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </left>
                <right xmi:type="expressions:IntExpression" xmi:id="259" value="1">
                  <position xmi:type="position:Position" xmi:id="260" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1171" startColumn="52" endLine="30" endColumn="52" startOffset="1171" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:IntType" xmi:id="261" lower="1" upper="1">
                    <position xmi:type="position:Position" xmi:id="262" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1171" startColumn="52" endLine="30" endColumn="52" startOffset="1171" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </right>
              </left>
              <right xmi:type="expressions:ConstantExpression" xmi:id="263" constant="3">
                <position xmi:type="position:Position" xmi:id="264" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1192" startColumn="59" endLine="30" endColumn="73" startOffset="1178" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:IntType" xmi:id="265" lower="5" upper="5">
                  <position xmi:type="position:Position" xmi:id="266" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="30" endOffset="1192" startColumn="59" endLine="30" endColumn="73" startOffset="1178" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
              </right>
            </right>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="267">
        <position xmi:type="position:Position" xmi:id="268" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="32" endOffset="1203" startColumn="5" endLine="32" endColumn="8" startOffset="1200" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="269">
          <position xmi:type="position:Position" xmi:id="270" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="32" endOffset="1211" startColumn="10" endLine="32" endColumn="16" startOffset="1205" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="271" event="33">
            <position xmi:type="position:Position" xmi:id="272" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="32" endOffset="1211" startColumn="10" endLine="32" endColumn="16" startOffset="1205" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="273">
              <position xmi:type="position:Position" xmi:id="274" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="32" endOffset="1211" startColumn="10" endLine="32" endColumn="16" startOffset="1205" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="275">
          <position xmi:type="position:Position" xmi:id="276" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1312" startColumn="23" endLine="33" endColumn="24" startOffset="1311" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          <type xmi:type="types:BoolType" xmi:id="277">
            <position xmi:type="position:Position" xmi:id="278" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1312" startColumn="23" endLine="33" endColumn="24" startOffset="1311" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          </type>
          <left xmi:type="expressions:LocationExpression" xmi:id="279" location="651">
            <position xmi:type="position:Position" xmi:id="280" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1309" startColumn="13" endLine="33" endColumn="21" startOffset="1301" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="281">
              <position xmi:type="position:Position" xmi:id="282" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1309" startColumn="13" endLine="33" endColumn="21" startOffset="1301" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="283" operator="Equal">
            <position xmi:type="position:Position" xmi:id="284" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1325" startColumn="37" endLine="33" endColumn="37" startOffset="1325" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="285">
              <position xmi:type="position:Position" xmi:id="286" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1325" startColumn="37" endLine="33" endColumn="37" startOffset="1325" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="287" variable="641">
              <position xmi:type="position:Position" xmi:id="288" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1323" startColumn="26" endLine="33" endColumn="35" startOffset="1314" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:TypeRef" xmi:id="289" type="11">
                <position xmi:type="position:Position" xmi:id="290" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1323" startColumn="26" endLine="33" endColumn="35" startOffset="1314" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="291" operator="Modulus">
              <position xmi:type="position:Position" xmi:id="292" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1345" startColumn="55" endLine="33" endColumn="57" startOffset="1343" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:IntType" xmi:id="293" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="294" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1345" startColumn="55" endLine="33" endColumn="57" startOffset="1343" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
              <left xmi:type="expressions:BinaryExpression" xmi:id="295" operator="Addition">
                <position xmi:type="position:Position" xmi:id="296" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1338" startColumn="50" endLine="33" endColumn="50" startOffset="1338" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:IntType" xmi:id="297" lower="1" upper="5">
                  <position xmi:type="position:Position" xmi:id="298" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1338" startColumn="50" endLine="33" endColumn="50" startOffset="1338" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
                <left xmi:type="expressions:DiscVariableExpression" xmi:id="299" variable="797">
                  <position xmi:type="position:Position" xmi:id="300" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1336" startColumn="40" endLine="33" endColumn="48" startOffset="1328" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:TypeRef" xmi:id="301" type="11">
                    <position xmi:type="position:Position" xmi:id="302" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1336" startColumn="40" endLine="33" endColumn="48" startOffset="1328" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </left>
                <right xmi:type="expressions:IntExpression" xmi:id="303" value="1">
                  <position xmi:type="position:Position" xmi:id="304" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1340" startColumn="52" endLine="33" endColumn="52" startOffset="1340" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:IntType" xmi:id="305" lower="1" upper="1">
                    <position xmi:type="position:Position" xmi:id="306" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1340" startColumn="52" endLine="33" endColumn="52" startOffset="1340" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </right>
              </left>
              <right xmi:type="expressions:ConstantExpression" xmi:id="307" constant="3">
                <position xmi:type="position:Position" xmi:id="308" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1361" startColumn="59" endLine="33" endColumn="73" startOffset="1347" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:IntType" xmi:id="309" lower="5" upper="5">
                  <position xmi:type="position:Position" xmi:id="310" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="33" endOffset="1361" startColumn="59" endLine="33" endColumn="73" startOffset="1347" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
              </right>
            </right>
          </right>
        </guards>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="311">
          <position xmi:type="position:Position" xmi:id="312" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1387" startColumn="23" endLine="34" endColumn="24" startOffset="1386" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          <type xmi:type="types:BoolType" xmi:id="313">
            <position xmi:type="position:Position" xmi:id="314" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1387" startColumn="23" endLine="34" endColumn="24" startOffset="1386" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          </type>
          <left xmi:type="expressions:LocationExpression" xmi:id="315" location="743">
            <position xmi:type="position:Position" xmi:id="316" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1383" startColumn="13" endLine="34" endColumn="20" startOffset="1376" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="317">
              <position xmi:type="position:Position" xmi:id="318" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1383" startColumn="13" endLine="34" endColumn="20" startOffset="1376" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="319" operator="Equal">
            <position xmi:type="position:Position" xmi:id="320" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1400" startColumn="37" endLine="34" endColumn="37" startOffset="1400" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="321">
              <position xmi:type="position:Position" xmi:id="322" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1400" startColumn="37" endLine="34" endColumn="37" startOffset="1400" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="323" variable="733">
              <position xmi:type="position:Position" xmi:id="324" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1397" startColumn="26" endLine="34" endColumn="34" startOffset="1389" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:TypeRef" xmi:id="325" type="11">
                <position xmi:type="position:Position" xmi:id="326" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1397" startColumn="26" endLine="34" endColumn="34" startOffset="1389" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="327" operator="Modulus">
              <position xmi:type="position:Position" xmi:id="328" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1420" startColumn="55" endLine="34" endColumn="57" startOffset="1418" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:IntType" xmi:id="329" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="330" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1420" startColumn="55" endLine="34" endColumn="57" startOffset="1418" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
              <left xmi:type="expressions:BinaryExpression" xmi:id="331" operator="Addition">
                <position xmi:type="position:Position" xmi:id="332" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1413" startColumn="50" endLine="34" endColumn="50" startOffset="1413" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:IntType" xmi:id="333" lower="1" upper="5">
                  <position xmi:type="position:Position" xmi:id="334" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1413" startColumn="50" endLine="34" endColumn="50" startOffset="1413" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
                <left xmi:type="expressions:DiscVariableExpression" xmi:id="335" variable="797">
                  <position xmi:type="position:Position" xmi:id="336" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1411" startColumn="40" endLine="34" endColumn="48" startOffset="1403" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:TypeRef" xmi:id="337" type="11">
                    <position xmi:type="position:Position" xmi:id="338" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1411" startColumn="40" endLine="34" endColumn="48" startOffset="1403" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </left>
                <right xmi:type="expressions:IntExpression" xmi:id="339" value="1">
                  <position xmi:type="position:Position" xmi:id="340" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1415" startColumn="52" endLine="34" endColumn="52" startOffset="1415" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  <type xmi:type="types:IntType" xmi:id="341" lower="1" upper="1">
                    <position xmi:type="position:Position" xmi:id="342" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1415" startColumn="52" endLine="34" endColumn="52" startOffset="1415" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                  </type>
                </right>
              </left>
              <right xmi:type="expressions:ConstantExpression" xmi:id="343" constant="3">
                <position xmi:type="position:Position" xmi:id="344" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1436" startColumn="59" endLine="34" endColumn="73" startOffset="1422" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:IntType" xmi:id="345" lower="5" upper="5">
                  <position xmi:type="position:Position" xmi:id="346" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="34" endOffset="1436" startColumn="59" endLine="34" endColumn="73" startOffset="1422" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
              </right>
            </right>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="347">
        <position xmi:type="position:Position" xmi:id="348" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1447" startColumn="5" endLine="36" endColumn="8" startOffset="1444" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="349">
          <position xmi:type="position:Position" xmi:id="350" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1455" startColumn="10" endLine="36" endColumn="16" startOffset="1449" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="351" event="17">
            <position xmi:type="position:Position" xmi:id="352" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1455" startColumn="10" endLine="36" endColumn="16" startOffset="1449" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="353">
              <position xmi:type="position:Position" xmi:id="354" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1455" startColumn="10" endLine="36" endColumn="16" startOffset="1449" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="355">
          <position xmi:type="position:Position" xmi:id="356" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1483" startColumn="43" endLine="36" endColumn="44" startOffset="1482" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          <type xmi:type="types:BoolType" xmi:id="357">
            <position xmi:type="position:Position" xmi:id="358" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1483" startColumn="43" endLine="36" endColumn="44" startOffset="1482" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="359" operator="LessThan">
            <position xmi:type="position:Position" xmi:id="360" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1478" startColumn="39" endLine="36" endColumn="39" startOffset="1478" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="361">
              <position xmi:type="position:Position" xmi:id="362" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1478" startColumn="39" endLine="36" endColumn="39" startOffset="1478" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
            <left xmi:type="expressions:AlgVariableExpression" xmi:id="363" variable="57">
              <position xmi:type="position:Position" xmi:id="364" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1476" startColumn="23" endLine="36" endColumn="37" startOffset="1462" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:IntType" xmi:id="365" lower="0" upper="4">
                <position xmi:type="position:Position" xmi:id="366" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1476" startColumn="23" endLine="36" endColumn="37" startOffset="1462" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="367" value="2">
              <position xmi:type="position:Position" xmi:id="368" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1480" startColumn="41" endLine="36" endColumn="41" startOffset="1480" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:IntType" xmi:id="369" lower="2" upper="2">
                <position xmi:type="position:Position" xmi:id="370" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1480" startColumn="41" endLine="36" endColumn="41" startOffset="1480" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="371" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="372" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1508" startColumn="67" endLine="36" endColumn="69" startOffset="1506" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="373">
              <position xmi:type="position:Position" xmi:id="374" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1508" startColumn="67" endLine="36" endColumn="69" startOffset="1506" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="375" operator="Equal">
              <position xmi:type="position:Position" xmi:id="376" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1502" startColumn="63" endLine="36" endColumn="63" startOffset="1502" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:BoolType" xmi:id="377">
                <position xmi:type="position:Position" xmi:id="378" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1502" startColumn="63" endLine="36" endColumn="63" startOffset="1502" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
              <left xmi:type="expressions:AlgVariableExpression" xmi:id="379" variable="57">
                <position xmi:type="position:Position" xmi:id="380" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1500" startColumn="47" endLine="36" endColumn="61" startOffset="1486" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:IntType" xmi:id="381" lower="0" upper="4">
                  <position xmi:type="position:Position" xmi:id="382" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1500" startColumn="47" endLine="36" endColumn="61" startOffset="1486" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:IntExpression" xmi:id="383" value="2">
                <position xmi:type="position:Position" xmi:id="384" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1504" startColumn="65" endLine="36" endColumn="65" startOffset="1504" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                <type xmi:type="types:IntType" xmi:id="385" lower="2" upper="2">
                  <position xmi:type="position:Position" xmi:id="386" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1504" startColumn="65" endLine="36" endColumn="65" startOffset="1504" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="387" location="923">
              <position xmi:type="position:Position" xmi:id="388" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1520" startColumn="71" endLine="36" endColumn="81" startOffset="1510" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              <type xmi:type="types:BoolType" xmi:id="389">
                <position xmi:type="position:Position" xmi:id="390" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="36" endOffset="1520" startColumn="71" endLine="36" endColumn="81" startOffset="1510" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
              </type>
            </right>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="391">
        <position xmi:type="position:Position" xmi:id="392" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="39" endOffset="1586" startColumn="5" endLine="39" endColumn="8" startOffset="1583" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="393">
          <position xmi:type="position:Position" xmi:id="394" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="39" endOffset="1594" startColumn="10" endLine="39" endColumn="16" startOffset="1588" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="395" event="15">
            <position xmi:type="position:Position" xmi:id="396" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="39" endOffset="1594" startColumn="10" endLine="39" endColumn="16" startOffset="1588" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:BoolType" xmi:id="397">
              <position xmi:type="position:Position" xmi:id="398" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="39" endOffset="1594" startColumn="10" endLine="39" endColumn="16" startOffset="1588" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="399" operator="LessThan">
          <position xmi:type="position:Position" xmi:id="400" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="39" endOffset="1611" startColumn="33" endLine="39" endColumn="33" startOffset="1611" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          <type xmi:type="types:BoolType" xmi:id="401">
            <position xmi:type="position:Position" xmi:id="402" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="39" endOffset="1611" startColumn="33" endLine="39" endColumn="33" startOffset="1611" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="403" variable="455">
            <position xmi:type="position:Position" xmi:id="404" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="39" endOffset="1609" startColumn="23" endLine="39" endColumn="31" startOffset="1601" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:IntType" xmi:id="405" lower="0" upper="5">
              <position xmi:type="position:Position" xmi:id="406" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="39" endOffset="1609" startColumn="23" endLine="39" endColumn="31" startOffset="1601" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="407" value="4">
            <position xmi:type="position:Position" xmi:id="408" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="39" endOffset="1613" startColumn="35" endLine="39" endColumn="35" startOffset="1613" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            <type xmi:type="types:IntType" xmi:id="409" lower="4" upper="4">
              <position xmi:type="position:Position" xmi:id="410" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="39" endOffset="1613" startColumn="35" endLine="39" endColumn="35" startOffset="1613" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="411" value="true">
        <position xmi:type="position:Position" xmi:id="412" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="26" endOffset="948" startColumn="5" endLine="26" endColumn="10" startOffset="943" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
        <type xmi:type="types:BoolType" xmi:id="413">
          <position xmi:type="position:Position" xmi:id="414" source="File &quot;C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif&quot;: " startLine="26" endOffset="948" startColumn="5" endLine="26" endColumn="10" startOffset="943" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.manually_modeled_supervisor.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="415" name="INOUT" kind="Plant">
    <position xmi:type="position:Position" xmi:id="416" source="File &quot;fifo.plants.cif&quot;: " startLine="32" endOffset="1003" startColumn="7" endLine="32" endColumn="11" startOffset="999" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="417" name="nextId">
      <position xmi:type="position:Position" xmi:id="418" source="File &quot;fifo.plants.cif&quot;: " startLine="33" endOffset="1028" startColumn="18" endLine="33" endColumn="23" startOffset="1023" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <type xmi:type="types:TypeRef" xmi:id="419" type="11">
        <position xmi:type="position:Position" xmi:id="420" source="File &quot;fifo.plants.cif&quot;: " startLine="33" endOffset="1021" startColumn="8" endLine="33" endColumn="16" startOffset="1013" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="421">
        <position xmi:type="position:Position" xmi:id="422" source="File &quot;fifo.plants.cif&quot;: " startLine="33" endOffset="1028" startColumn="18" endLine="33" endColumn="23" startOffset="1023" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <values xmi:type="expressions:IntExpression" xmi:id="423">
          <position xmi:type="position:Position" xmi:id="424" source="File &quot;fifo.plants.cif&quot;: " startLine="33" endOffset="1032" startColumn="27" endLine="33" endColumn="27" startOffset="1032" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <type xmi:type="types:IntType" xmi:id="425" lower="0" upper="0">
            <position xmi:type="position:Position" xmi:id="426" source="File &quot;fifo.plants.cif&quot;: " startLine="33" endOffset="1032" startColumn="27" endLine="33" endColumn="27" startOffset="1032" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          </type>
        </values>
      </value>
    </declarations>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="427" name="curId">
      <position xmi:type="position:Position" xmi:id="428" source="File &quot;fifo.plants.cif&quot;: " startLine="34" endOffset="1056" startColumn="18" endLine="34" endColumn="22" startOffset="1052" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <type xmi:type="types:TypeRef" xmi:id="429" type="11">
        <position xmi:type="position:Position" xmi:id="430" source="File &quot;fifo.plants.cif&quot;: " startLine="34" endOffset="1050" startColumn="8" endLine="34" endColumn="16" startOffset="1042" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="431">
        <position xmi:type="position:Position" xmi:id="432" source="File &quot;fifo.plants.cif&quot;: " startLine="34" endOffset="1056" startColumn="18" endLine="34" endColumn="22" startOffset="1052" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <values xmi:type="expressions:IntExpression" xmi:id="433">
          <position xmi:type="position:Position" xmi:id="434" source="File &quot;fifo.plants.cif&quot;: " startLine="34" endOffset="1060" startColumn="26" endLine="34" endColumn="26" startOffset="1060" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <type xmi:type="types:IntType" xmi:id="435" lower="0" upper="0">
            <position xmi:type="position:Position" xmi:id="436" source="File &quot;fifo.plants.cif&quot;: " startLine="34" endOffset="1060" startColumn="26" endLine="34" endColumn="26" startOffset="1060" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          </type>
        </values>
      </value>
    </declarations>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="437" name="lastExitId">
      <position xmi:type="position:Position" xmi:id="438" source="File &quot;fifo.plants.cif&quot;: " startLine="35" endOffset="1089" startColumn="18" endLine="35" endColumn="27" startOffset="1080" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <type xmi:type="types:TypeRef" xmi:id="439" type="11">
        <position xmi:type="position:Position" xmi:id="440" source="File &quot;fifo.plants.cif&quot;: " startLine="35" endOffset="1078" startColumn="8" endLine="35" endColumn="16" startOffset="1070" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="441">
        <position xmi:type="position:Position" xmi:id="442" source="File &quot;fifo.plants.cif&quot;: " startLine="35" endOffset="1089" startColumn="18" endLine="35" endColumn="27" startOffset="1080" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <values xmi:type="expressions:BinaryExpression" xmi:id="443" operator="Subtraction">
          <position xmi:type="position:Position" xmi:id="444" source="File &quot;fifo.plants.cif&quot;: " startLine="35" endOffset="1109" startColumn="47" endLine="35" endColumn="47" startOffset="1109" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <type xmi:type="types:IntType" xmi:id="445" lower="4" upper="4">
            <position xmi:type="position:Position" xmi:id="446" source="File &quot;fifo.plants.cif&quot;: " startLine="35" endOffset="1109" startColumn="47" endLine="35" endColumn="47" startOffset="1109" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          </type>
          <left xmi:type="expressions:ConstantExpression" xmi:id="447" constant="3">
            <position xmi:type="position:Position" xmi:id="448" source="File &quot;fifo.plants.cif&quot;: " startLine="35" endOffset="1107" startColumn="31" endLine="35" endColumn="45" startOffset="1093" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="449" lower="5" upper="5">
              <position xmi:type="position:Position" xmi:id="450" source="File &quot;fifo.plants.cif&quot;: " startLine="35" endOffset="1107" startColumn="31" endLine="35" endColumn="45" startOffset="1093" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="451" value="1">
            <position xmi:type="position:Position" xmi:id="452" source="File &quot;fifo.plants.cif&quot;: " startLine="35" endOffset="1111" startColumn="49" endLine="35" endColumn="49" startOffset="1111" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="453" lower="1" upper="1">
              <position xmi:type="position:Position" xmi:id="454" source="File &quot;fifo.plants.cif&quot;: " startLine="35" endOffset="1111" startColumn="49" endLine="35" endColumn="49" startOffset="1111" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </right>
        </values>
      </value>
    </declarations>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="455" name="cnt">
      <position xmi:type="position:Position" xmi:id="456" source="File &quot;fifo.plants.cif&quot;: " startLine="36" endOffset="1147" startColumn="32" endLine="36" endColumn="34" startOffset="1145" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <type xmi:type="types:IntType" xmi:id="457" lower="0" upper="5">
        <position xmi:type="position:Position" xmi:id="458" source="File &quot;fifo.plants.cif&quot;: " startLine="36" endOffset="1123" startColumn="8" endLine="36" endColumn="10" startOffset="1121" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="459">
        <position xmi:type="position:Position" xmi:id="460" source="File &quot;fifo.plants.cif&quot;: " startLine="36" endOffset="1147" startColumn="32" endLine="36" endColumn="34" startOffset="1145" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <values xmi:type="expressions:IntExpression" xmi:id="461">
          <position xmi:type="position:Position" xmi:id="462" source="File &quot;fifo.plants.cif&quot;: " startLine="36" endOffset="1151" startColumn="38" endLine="36" endColumn="38" startOffset="1151" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <type xmi:type="types:IntType" xmi:id="463" lower="0" upper="0">
            <position xmi:type="position:Position" xmi:id="464" source="File &quot;fifo.plants.cif&quot;: " startLine="36" endOffset="1151" startColumn="38" endLine="36" endColumn="38" startOffset="1151" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          </type>
        </values>
      </value>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="465" name="Idle">
      <position xmi:type="position:Position" xmi:id="466" source="File &quot;fifo.plants.cif&quot;: " startLine="38" endOffset="1169" startColumn="12" endLine="38" endColumn="15" startOffset="1166" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="467" value="true">
        <position xmi:type="position:Position" xmi:id="468" source="File &quot;fifo.plants.cif&quot;: " startLine="39" endOffset="1182" startColumn="5" endLine="39" endColumn="11" startOffset="1176" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <type xmi:type="types:BoolType" xmi:id="469">
          <position xmi:type="position:Position" xmi:id="470" source="File &quot;fifo.plants.cif&quot;: " startLine="39" endOffset="1182" startColumn="5" endLine="39" endColumn="11" startOffset="1176" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="471" target="567">
        <position xmi:type="position:Position" xmi:id="472" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1204" startColumn="5" endLine="41" endColumn="8" startOffset="1201" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="473">
          <position xmi:type="position:Position" xmi:id="474" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1212" startColumn="10" endLine="41" endColumn="16" startOffset="1206" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="475" event="15">
            <position xmi:type="position:Position" xmi:id="476" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1212" startColumn="10" endLine="41" endColumn="16" startOffset="1206" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="477">
              <position xmi:type="position:Position" xmi:id="478" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1212" startColumn="10" endLine="41" endColumn="16" startOffset="1206" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="479" operator="LessThan">
          <position xmi:type="position:Position" xmi:id="480" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1223" startColumn="27" endLine="41" endColumn="27" startOffset="1223" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <type xmi:type="types:BoolType" xmi:id="481">
            <position xmi:type="position:Position" xmi:id="482" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1223" startColumn="27" endLine="41" endColumn="27" startOffset="1223" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="483" variable="455">
            <position xmi:type="position:Position" xmi:id="484" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1221" startColumn="23" endLine="41" endColumn="25" startOffset="1219" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="485" lower="0" upper="5">
              <position xmi:type="position:Position" xmi:id="486" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1221" startColumn="23" endLine="41" endColumn="25" startOffset="1219" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:ConstantExpression" xmi:id="487" constant="3">
            <position xmi:type="position:Position" xmi:id="488" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1239" startColumn="29" endLine="41" endColumn="43" startOffset="1225" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="489" lower="5" upper="5">
              <position xmi:type="position:Position" xmi:id="490" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1239" startColumn="29" endLine="41" endColumn="43" startOffset="1225" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="491">
          <position xmi:type="position:Position" xmi:id="492" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1251" startColumn="54" endLine="41" endColumn="55" startOffset="1250" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="493" variable="427">
            <position xmi:type="position:Position" xmi:id="494" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1248" startColumn="48" endLine="41" endColumn="52" startOffset="1244" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="495" type="11">
              <position xmi:type="position:Position" xmi:id="496" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1248" startColumn="48" endLine="41" endColumn="52" startOffset="1244" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:DiscVariableExpression" xmi:id="497" variable="417">
            <position xmi:type="position:Position" xmi:id="498" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1258" startColumn="57" endLine="41" endColumn="62" startOffset="1253" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="499" type="11">
              <position xmi:type="position:Position" xmi:id="500" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1258" startColumn="57" endLine="41" endColumn="62" startOffset="1253" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
        <updates xmi:type="automata:Assignment" xmi:id="501">
          <position xmi:type="position:Position" xmi:id="502" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1269" startColumn="72" endLine="41" endColumn="73" startOffset="1268" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="503" variable="417">
            <position xmi:type="position:Position" xmi:id="504" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1266" startColumn="65" endLine="41" endColumn="70" startOffset="1261" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="505" type="11">
              <position xmi:type="position:Position" xmi:id="506" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1266" startColumn="65" endLine="41" endColumn="70" startOffset="1261" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:BinaryExpression" xmi:id="507" operator="Modulus">
            <position xmi:type="position:Position" xmi:id="508" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1286" startColumn="88" endLine="41" endColumn="90" startOffset="1284" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="509" lower="0" upper="4">
              <position xmi:type="position:Position" xmi:id="510" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1286" startColumn="88" endLine="41" endColumn="90" startOffset="1284" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="511" operator="Addition">
              <position xmi:type="position:Position" xmi:id="512" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1279" startColumn="83" endLine="41" endColumn="83" startOffset="1279" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
              <type xmi:type="types:IntType" xmi:id="513" lower="1" upper="5">
                <position xmi:type="position:Position" xmi:id="514" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1279" startColumn="83" endLine="41" endColumn="83" startOffset="1279" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
              </type>
              <left xmi:type="expressions:DiscVariableExpression" xmi:id="515" variable="417">
                <position xmi:type="position:Position" xmi:id="516" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1277" startColumn="76" endLine="41" endColumn="81" startOffset="1272" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
                <type xmi:type="types:TypeRef" xmi:id="517" type="11">
                  <position xmi:type="position:Position" xmi:id="518" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1277" startColumn="76" endLine="41" endColumn="81" startOffset="1272" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:IntExpression" xmi:id="519" value="1">
                <position xmi:type="position:Position" xmi:id="520" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1281" startColumn="85" endLine="41" endColumn="85" startOffset="1281" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
                <type xmi:type="types:IntType" xmi:id="521" lower="1" upper="1">
                  <position xmi:type="position:Position" xmi:id="522" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1281" startColumn="85" endLine="41" endColumn="85" startOffset="1281" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:ConstantExpression" xmi:id="523" constant="3">
              <position xmi:type="position:Position" xmi:id="524" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1302" startColumn="92" endLine="41" endColumn="106" startOffset="1288" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
              <type xmi:type="types:IntType" xmi:id="525" lower="5" upper="5">
                <position xmi:type="position:Position" xmi:id="526" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1302" startColumn="92" endLine="41" endColumn="106" startOffset="1288" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
              </type>
            </right>
          </value>
        </updates>
        <updates xmi:type="automata:Assignment" xmi:id="527">
          <position xmi:type="position:Position" xmi:id="528" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1310" startColumn="113" endLine="41" endColumn="114" startOffset="1309" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="529" variable="455">
            <position xmi:type="position:Position" xmi:id="530" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1307" startColumn="109" endLine="41" endColumn="111" startOffset="1305" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="531" lower="0" upper="5">
              <position xmi:type="position:Position" xmi:id="532" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1307" startColumn="109" endLine="41" endColumn="111" startOffset="1305" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:BinaryExpression" xmi:id="533" operator="Addition">
            <position xmi:type="position:Position" xmi:id="534" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1316" startColumn="120" endLine="41" endColumn="120" startOffset="1316" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="535" lower="1" upper="6">
              <position xmi:type="position:Position" xmi:id="536" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1316" startColumn="120" endLine="41" endColumn="120" startOffset="1316" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="537" variable="455">
              <position xmi:type="position:Position" xmi:id="538" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1314" startColumn="116" endLine="41" endColumn="118" startOffset="1312" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
              <type xmi:type="types:IntType" xmi:id="539" lower="0" upper="5">
                <position xmi:type="position:Position" xmi:id="540" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1314" startColumn="116" endLine="41" endColumn="118" startOffset="1312" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="541" value="1">
              <position xmi:type="position:Position" xmi:id="542" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1318" startColumn="122" endLine="41" endColumn="122" startOffset="1318" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
              <type xmi:type="types:IntType" xmi:id="543" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="544" source="File &quot;fifo.plants.cif&quot;: " startLine="41" endOffset="1318" startColumn="122" endLine="41" endColumn="122" startOffset="1318" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
              </type>
            </right>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="545" target="591">
        <position xmi:type="position:Position" xmi:id="546" source="File &quot;fifo.plants.cif&quot;: " startLine="42" endOffset="1344" startColumn="5" endLine="42" endColumn="8" startOffset="1341" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeReceive" xmi:id="547">
          <position xmi:type="position:Position" xmi:id="548" source="File &quot;fifo.plants.cif&quot;: " startLine="42" endOffset="1356" startColumn="20" endLine="42" endColumn="20" startOffset="1356" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="549" event="49">
            <position xmi:type="position:Position" xmi:id="550" source="File &quot;fifo.plants.cif&quot;: " startLine="42" endOffset="1355" startColumn="10" endLine="42" endColumn="19" startOffset="1346" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="551">
              <position xmi:type="position:Position" xmi:id="552" source="File &quot;fifo.plants.cif&quot;: " startLine="42" endOffset="1355" startColumn="10" endLine="42" endColumn="19" startOffset="1346" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="553">
          <position xmi:type="position:Position" xmi:id="554" source="File &quot;fifo.plants.cif&quot;: " startLine="42" endOffset="1368" startColumn="31" endLine="42" endColumn="32" startOffset="1367" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="555" variable="427">
            <position xmi:type="position:Position" xmi:id="556" source="File &quot;fifo.plants.cif&quot;: " startLine="42" endOffset="1365" startColumn="25" endLine="42" endColumn="29" startOffset="1361" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="557" type="11">
              <position xmi:type="position:Position" xmi:id="558" source="File &quot;fifo.plants.cif&quot;: " startLine="42" endOffset="1365" startColumn="25" endLine="42" endColumn="29" startOffset="1361" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:ReceivedExpression" xmi:id="559">
            <position xmi:type="position:Position" xmi:id="560" source="File &quot;fifo.plants.cif&quot;: " startLine="42" endOffset="1370" startColumn="34" endLine="42" endColumn="34" startOffset="1370" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="561" type="11">
              <position xmi:type="position:Position" xmi:id="562" source="File &quot;fifo.plants.cif&quot;: " startLine="42" endOffset="1370" startColumn="34" endLine="42" endColumn="34" startOffset="1370" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="563" value="true">
        <position xmi:type="position:Position" xmi:id="564" source="File &quot;fifo.plants.cif&quot;: " startLine="40" endOffset="1194" startColumn="5" endLine="40" endColumn="10" startOffset="1189" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <type xmi:type="types:BoolType" xmi:id="565">
          <position xmi:type="position:Position" xmi:id="566" source="File &quot;fifo.plants.cif&quot;: " startLine="40" endOffset="1194" startColumn="5" endLine="40" endColumn="10" startOffset="1189" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="567" name="NewProduct">
      <position xmi:type="position:Position" xmi:id="568" source="File &quot;fifo.plants.cif&quot;: " startLine="44" endOffset="1415" startColumn="12" endLine="44" endColumn="21" startOffset="1406" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="569" target="465">
        <position xmi:type="position:Position" xmi:id="570" source="File &quot;fifo.plants.cif&quot;: " startLine="45" endOffset="1425" startColumn="5" endLine="45" endColumn="8" startOffset="1422" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeSend" xmi:id="571">
          <position xmi:type="position:Position" xmi:id="572" source="File &quot;fifo.plants.cif&quot;: " startLine="45" endOffset="1434" startColumn="17" endLine="45" endColumn="17" startOffset="1434" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="573" event="17">
            <position xmi:type="position:Position" xmi:id="574" source="File &quot;fifo.plants.cif&quot;: " startLine="45" endOffset="1433" startColumn="10" endLine="45" endColumn="16" startOffset="1427" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="575">
              <position xmi:type="position:Position" xmi:id="576" source="File &quot;fifo.plants.cif&quot;: " startLine="45" endOffset="1433" startColumn="10" endLine="45" endColumn="16" startOffset="1427" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
          <value xmi:type="expressions:DiscVariableExpression" xmi:id="577" variable="427">
            <position xmi:type="position:Position" xmi:id="578" source="File &quot;fifo.plants.cif&quot;: " startLine="45" endOffset="1439" startColumn="18" endLine="45" endColumn="22" startOffset="1435" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="579" type="11">
              <position xmi:type="position:Position" xmi:id="580" source="File &quot;fifo.plants.cif&quot;: " startLine="45" endOffset="1439" startColumn="18" endLine="45" endColumn="22" startOffset="1435" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="581">
          <position xmi:type="position:Position" xmi:id="582" source="File &quot;fifo.plants.cif&quot;: " startLine="45" endOffset="1451" startColumn="33" endLine="45" endColumn="34" startOffset="1450" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="583" variable="427">
            <position xmi:type="position:Position" xmi:id="584" source="File &quot;fifo.plants.cif&quot;: " startLine="45" endOffset="1448" startColumn="27" endLine="45" endColumn="31" startOffset="1444" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="585" type="11">
              <position xmi:type="position:Position" xmi:id="586" source="File &quot;fifo.plants.cif&quot;: " startLine="45" endOffset="1448" startColumn="27" endLine="45" endColumn="31" startOffset="1444" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="587">
            <position xmi:type="position:Position" xmi:id="588" source="File &quot;fifo.plants.cif&quot;: " startLine="45" endOffset="1453" startColumn="36" endLine="45" endColumn="36" startOffset="1453" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="589" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="590" source="File &quot;fifo.plants.cif&quot;: " startLine="45" endOffset="1453" startColumn="36" endLine="45" endColumn="36" startOffset="1453" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="591" name="FinishedProduct">
      <position xmi:type="position:Position" xmi:id="592" source="File &quot;fifo.plants.cif&quot;: " startLine="47" endOffset="1492" startColumn="12" endLine="47" endColumn="26" startOffset="1478" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="593" target="465">
        <position xmi:type="position:Position" xmi:id="594" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1502" startColumn="5" endLine="48" endColumn="8" startOffset="1499" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="595">
          <position xmi:type="position:Position" xmi:id="596" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1509" startColumn="10" endLine="48" endColumn="15" startOffset="1504" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="597" event="53">
            <position xmi:type="position:Position" xmi:id="598" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1509" startColumn="10" endLine="48" endColumn="15" startOffset="1504" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="599">
              <position xmi:type="position:Position" xmi:id="600" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1509" startColumn="10" endLine="48" endColumn="15" startOffset="1504" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="601">
          <position xmi:type="position:Position" xmi:id="602" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1526" startColumn="31" endLine="48" endColumn="32" startOffset="1525" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="603" variable="437">
            <position xmi:type="position:Position" xmi:id="604" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1523" startColumn="20" endLine="48" endColumn="29" startOffset="1514" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="605" type="11">
              <position xmi:type="position:Position" xmi:id="606" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1523" startColumn="20" endLine="48" endColumn="29" startOffset="1514" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:DiscVariableExpression" xmi:id="607" variable="427">
            <position xmi:type="position:Position" xmi:id="608" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1532" startColumn="34" endLine="48" endColumn="38" startOffset="1528" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="609" type="11">
              <position xmi:type="position:Position" xmi:id="610" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1532" startColumn="34" endLine="48" endColumn="38" startOffset="1528" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
        <updates xmi:type="automata:Assignment" xmi:id="611">
          <position xmi:type="position:Position" xmi:id="612" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1542" startColumn="47" endLine="48" endColumn="48" startOffset="1541" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="613" variable="427">
            <position xmi:type="position:Position" xmi:id="614" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1539" startColumn="41" endLine="48" endColumn="45" startOffset="1535" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="615" type="11">
              <position xmi:type="position:Position" xmi:id="616" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1539" startColumn="41" endLine="48" endColumn="45" startOffset="1535" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="617">
            <position xmi:type="position:Position" xmi:id="618" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1544" startColumn="50" endLine="48" endColumn="50" startOffset="1544" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="619" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="620" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1544" startColumn="50" endLine="48" endColumn="50" startOffset="1544" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
        <updates xmi:type="automata:Assignment" xmi:id="621">
          <position xmi:type="position:Position" xmi:id="622" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1552" startColumn="57" endLine="48" endColumn="58" startOffset="1551" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="623" variable="455">
            <position xmi:type="position:Position" xmi:id="624" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1549" startColumn="53" endLine="48" endColumn="55" startOffset="1547" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="625" lower="0" upper="5">
              <position xmi:type="position:Position" xmi:id="626" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1549" startColumn="53" endLine="48" endColumn="55" startOffset="1547" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:BinaryExpression" xmi:id="627" operator="Subtraction">
            <position xmi:type="position:Position" xmi:id="628" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1558" startColumn="64" endLine="48" endColumn="64" startOffset="1558" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="629" lower="-1" upper="4">
              <position xmi:type="position:Position" xmi:id="630" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1558" startColumn="64" endLine="48" endColumn="64" startOffset="1558" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="631" variable="455">
              <position xmi:type="position:Position" xmi:id="632" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1556" startColumn="60" endLine="48" endColumn="62" startOffset="1554" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
              <type xmi:type="types:IntType" xmi:id="633" lower="0" upper="5">
                <position xmi:type="position:Position" xmi:id="634" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1556" startColumn="60" endLine="48" endColumn="62" startOffset="1554" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="635" value="1">
              <position xmi:type="position:Position" xmi:id="636" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1560" startColumn="66" endLine="48" endColumn="66" startOffset="1560" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
              <type xmi:type="types:IntType" xmi:id="637" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="638" source="File &quot;fifo.plants.cif&quot;: " startLine="48" endOffset="1560" startColumn="66" endLine="48" endColumn="66" startOffset="1560" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
              </type>
            </right>
          </value>
        </updates>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="639" name="DISP" kind="Plant">
    <position xmi:type="position:Position" xmi:id="640" source="File &quot;fifo.plants.cif&quot;: " startLine="51" endOffset="1587" startColumn="7" endLine="51" endColumn="10" startOffset="1584" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="641" name="curId">
      <position xmi:type="position:Position" xmi:id="642" source="File &quot;fifo.plants.cif&quot;: " startLine="52" endOffset="1611" startColumn="18" endLine="52" endColumn="22" startOffset="1607" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <type xmi:type="types:TypeRef" xmi:id="643" type="11">
        <position xmi:type="position:Position" xmi:id="644" source="File &quot;fifo.plants.cif&quot;: " startLine="52" endOffset="1605" startColumn="8" endLine="52" endColumn="16" startOffset="1597" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="645">
        <position xmi:type="position:Position" xmi:id="646" source="File &quot;fifo.plants.cif&quot;: " startLine="52" endOffset="1611" startColumn="18" endLine="52" endColumn="22" startOffset="1607" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <values xmi:type="expressions:IntExpression" xmi:id="647">
          <position xmi:type="position:Position" xmi:id="648" source="File &quot;fifo.plants.cif&quot;: " startLine="52" endOffset="1615" startColumn="26" endLine="52" endColumn="26" startOffset="1615" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <type xmi:type="types:IntType" xmi:id="649" lower="0" upper="0">
            <position xmi:type="position:Position" xmi:id="650" source="File &quot;fifo.plants.cif&quot;: " startLine="52" endOffset="1615" startColumn="26" endLine="52" endColumn="26" startOffset="1615" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          </type>
        </values>
      </value>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="651" name="Idle">
      <position xmi:type="position:Position" xmi:id="652" source="File &quot;fifo.plants.cif&quot;: " startLine="54" endOffset="1633" startColumn="12" endLine="54" endColumn="15" startOffset="1630" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="653" value="true">
        <position xmi:type="position:Position" xmi:id="654" source="File &quot;fifo.plants.cif&quot;: " startLine="55" endOffset="1646" startColumn="5" endLine="55" endColumn="11" startOffset="1640" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <type xmi:type="types:BoolType" xmi:id="655">
          <position xmi:type="position:Position" xmi:id="656" source="File &quot;fifo.plants.cif&quot;: " startLine="55" endOffset="1646" startColumn="5" endLine="55" endColumn="11" startOffset="1640" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="657" target="685">
        <position xmi:type="position:Position" xmi:id="658" source="File &quot;fifo.plants.cif&quot;: " startLine="57" endOffset="1668" startColumn="5" endLine="57" endColumn="8" startOffset="1665" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeReceive" xmi:id="659">
          <position xmi:type="position:Position" xmi:id="660" source="File &quot;fifo.plants.cif&quot;: " startLine="57" endOffset="1677" startColumn="17" endLine="57" endColumn="17" startOffset="1677" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="661" event="17">
            <position xmi:type="position:Position" xmi:id="662" source="File &quot;fifo.plants.cif&quot;: " startLine="57" endOffset="1676" startColumn="10" endLine="57" endColumn="16" startOffset="1670" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="663">
              <position xmi:type="position:Position" xmi:id="664" source="File &quot;fifo.plants.cif&quot;: " startLine="57" endOffset="1676" startColumn="10" endLine="57" endColumn="16" startOffset="1670" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
        </events>
        <events xmi:type="automata:EdgeReceive" xmi:id="665">
          <position xmi:type="position:Position" xmi:id="666" source="File &quot;fifo.plants.cif&quot;: " startLine="57" endOffset="1686" startColumn="26" endLine="57" endColumn="26" startOffset="1686" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="667" event="41">
            <position xmi:type="position:Position" xmi:id="668" source="File &quot;fifo.plants.cif&quot;: " startLine="57" endOffset="1685" startColumn="20" endLine="57" endColumn="25" startOffset="1680" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="669">
              <position xmi:type="position:Position" xmi:id="670" source="File &quot;fifo.plants.cif&quot;: " startLine="57" endOffset="1685" startColumn="20" endLine="57" endColumn="25" startOffset="1680" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="671">
          <position xmi:type="position:Position" xmi:id="672" source="File &quot;fifo.plants.cif&quot;: " startLine="57" endOffset="1698" startColumn="37" endLine="57" endColumn="38" startOffset="1697" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="673" variable="641">
            <position xmi:type="position:Position" xmi:id="674" source="File &quot;fifo.plants.cif&quot;: " startLine="57" endOffset="1695" startColumn="31" endLine="57" endColumn="35" startOffset="1691" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="675" type="11">
              <position xmi:type="position:Position" xmi:id="676" source="File &quot;fifo.plants.cif&quot;: " startLine="57" endOffset="1695" startColumn="31" endLine="57" endColumn="35" startOffset="1691" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:ReceivedExpression" xmi:id="677">
            <position xmi:type="position:Position" xmi:id="678" source="File &quot;fifo.plants.cif&quot;: " startLine="57" endOffset="1700" startColumn="40" endLine="57" endColumn="40" startOffset="1700" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="679" type="11">
              <position xmi:type="position:Position" xmi:id="680" source="File &quot;fifo.plants.cif&quot;: " startLine="57" endOffset="1700" startColumn="40" endLine="57" endColumn="40" startOffset="1700" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="681" value="true">
        <position xmi:type="position:Position" xmi:id="682" source="File &quot;fifo.plants.cif&quot;: " startLine="56" endOffset="1658" startColumn="5" endLine="56" endColumn="10" startOffset="1653" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <type xmi:type="types:BoolType" xmi:id="683">
          <position xmi:type="position:Position" xmi:id="684" source="File &quot;fifo.plants.cif&quot;: " startLine="56" endOffset="1658" startColumn="5" endLine="56" endColumn="10" startOffset="1653" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="685" name="Busy">
      <position xmi:type="position:Position" xmi:id="686" source="File &quot;fifo.plants.cif&quot;: " startLine="59" endOffset="1728" startColumn="12" endLine="59" endColumn="15" startOffset="1725" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="687" target="651">
        <position xmi:type="position:Position" xmi:id="688" source="File &quot;fifo.plants.cif&quot;: " startLine="60" endOffset="1738" startColumn="5" endLine="60" endColumn="8" startOffset="1735" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeSend" xmi:id="689">
          <position xmi:type="position:Position" xmi:id="690" source="File &quot;fifo.plants.cif&quot;: " startLine="60" endOffset="1745" startColumn="15" endLine="60" endColumn="15" startOffset="1745" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="691" event="21">
            <position xmi:type="position:Position" xmi:id="692" source="File &quot;fifo.plants.cif&quot;: " startLine="60" endOffset="1744" startColumn="10" endLine="60" endColumn="14" startOffset="1740" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="693">
              <position xmi:type="position:Position" xmi:id="694" source="File &quot;fifo.plants.cif&quot;: " startLine="60" endOffset="1744" startColumn="10" endLine="60" endColumn="14" startOffset="1740" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
          <value xmi:type="expressions:DiscVariableExpression" xmi:id="695" variable="641">
            <position xmi:type="position:Position" xmi:id="696" source="File &quot;fifo.plants.cif&quot;: " startLine="60" endOffset="1750" startColumn="16" endLine="60" endColumn="20" startOffset="1746" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="697" type="11">
              <position xmi:type="position:Position" xmi:id="698" source="File &quot;fifo.plants.cif&quot;: " startLine="60" endOffset="1750" startColumn="16" endLine="60" endColumn="20" startOffset="1746" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="699">
          <position xmi:type="position:Position" xmi:id="700" source="File &quot;fifo.plants.cif&quot;: " startLine="60" endOffset="1762" startColumn="31" endLine="60" endColumn="32" startOffset="1761" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="701" variable="641">
            <position xmi:type="position:Position" xmi:id="702" source="File &quot;fifo.plants.cif&quot;: " startLine="60" endOffset="1759" startColumn="25" endLine="60" endColumn="29" startOffset="1755" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="703" type="11">
              <position xmi:type="position:Position" xmi:id="704" source="File &quot;fifo.plants.cif&quot;: " startLine="60" endOffset="1759" startColumn="25" endLine="60" endColumn="29" startOffset="1755" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="705">
            <position xmi:type="position:Position" xmi:id="706" source="File &quot;fifo.plants.cif&quot;: " startLine="60" endOffset="1764" startColumn="34" endLine="60" endColumn="34" startOffset="1764" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="707" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="708" source="File &quot;fifo.plants.cif&quot;: " startLine="60" endOffset="1764" startColumn="34" endLine="60" endColumn="34" startOffset="1764" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="709" target="651">
        <position xmi:type="position:Position" xmi:id="710" source="File &quot;fifo.plants.cif&quot;: " startLine="61" endOffset="1784" startColumn="5" endLine="61" endColumn="8" startOffset="1781" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeSend" xmi:id="711">
          <position xmi:type="position:Position" xmi:id="712" source="File &quot;fifo.plants.cif&quot;: " startLine="61" endOffset="1791" startColumn="15" endLine="61" endColumn="15" startOffset="1791" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="713" event="25">
            <position xmi:type="position:Position" xmi:id="714" source="File &quot;fifo.plants.cif&quot;: " startLine="61" endOffset="1790" startColumn="10" endLine="61" endColumn="14" startOffset="1786" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="715">
              <position xmi:type="position:Position" xmi:id="716" source="File &quot;fifo.plants.cif&quot;: " startLine="61" endOffset="1790" startColumn="10" endLine="61" endColumn="14" startOffset="1786" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
          <value xmi:type="expressions:DiscVariableExpression" xmi:id="717" variable="641">
            <position xmi:type="position:Position" xmi:id="718" source="File &quot;fifo.plants.cif&quot;: " startLine="61" endOffset="1796" startColumn="16" endLine="61" endColumn="20" startOffset="1792" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="719" type="11">
              <position xmi:type="position:Position" xmi:id="720" source="File &quot;fifo.plants.cif&quot;: " startLine="61" endOffset="1796" startColumn="16" endLine="61" endColumn="20" startOffset="1792" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="721">
          <position xmi:type="position:Position" xmi:id="722" source="File &quot;fifo.plants.cif&quot;: " startLine="61" endOffset="1808" startColumn="31" endLine="61" endColumn="32" startOffset="1807" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="723" variable="641">
            <position xmi:type="position:Position" xmi:id="724" source="File &quot;fifo.plants.cif&quot;: " startLine="61" endOffset="1805" startColumn="25" endLine="61" endColumn="29" startOffset="1801" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="725" type="11">
              <position xmi:type="position:Position" xmi:id="726" source="File &quot;fifo.plants.cif&quot;: " startLine="61" endOffset="1805" startColumn="25" endLine="61" endColumn="29" startOffset="1801" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="727">
            <position xmi:type="position:Position" xmi:id="728" source="File &quot;fifo.plants.cif&quot;: " startLine="61" endOffset="1810" startColumn="34" endLine="61" endColumn="34" startOffset="1810" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="729" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="730" source="File &quot;fifo.plants.cif&quot;: " startLine="61" endOffset="1810" startColumn="34" endLine="61" endColumn="34" startOffset="1810" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="731" name="OP1" kind="Plant">
    <position xmi:type="position:Position" xmi:id="732" source="File &quot;fifo.plants.cif&quot;: " startLine="64" endOffset="1836" startColumn="7" endLine="64" endColumn="9" startOffset="1834" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="733" name="curId">
      <position xmi:type="position:Position" xmi:id="734" source="File &quot;fifo.plants.cif&quot;: " startLine="65" endOffset="1860" startColumn="18" endLine="65" endColumn="22" startOffset="1856" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <type xmi:type="types:TypeRef" xmi:id="735" type="11">
        <position xmi:type="position:Position" xmi:id="736" source="File &quot;fifo.plants.cif&quot;: " startLine="65" endOffset="1854" startColumn="8" endLine="65" endColumn="16" startOffset="1846" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="737">
        <position xmi:type="position:Position" xmi:id="738" source="File &quot;fifo.plants.cif&quot;: " startLine="65" endOffset="1860" startColumn="18" endLine="65" endColumn="22" startOffset="1856" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <values xmi:type="expressions:IntExpression" xmi:id="739">
          <position xmi:type="position:Position" xmi:id="740" source="File &quot;fifo.plants.cif&quot;: " startLine="65" endOffset="1864" startColumn="26" endLine="65" endColumn="26" startOffset="1864" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <type xmi:type="types:IntType" xmi:id="741" lower="0" upper="0">
            <position xmi:type="position:Position" xmi:id="742" source="File &quot;fifo.plants.cif&quot;: " startLine="65" endOffset="1864" startColumn="26" endLine="65" endColumn="26" startOffset="1864" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          </type>
        </values>
      </value>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="743" name="Idle">
      <position xmi:type="position:Position" xmi:id="744" source="File &quot;fifo.plants.cif&quot;: " startLine="67" endOffset="1882" startColumn="12" endLine="67" endColumn="15" startOffset="1879" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="745" value="true">
        <position xmi:type="position:Position" xmi:id="746" source="File &quot;fifo.plants.cif&quot;: " startLine="68" endOffset="1895" startColumn="5" endLine="68" endColumn="11" startOffset="1889" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <type xmi:type="types:BoolType" xmi:id="747">
          <position xmi:type="position:Position" xmi:id="748" source="File &quot;fifo.plants.cif&quot;: " startLine="68" endOffset="1895" startColumn="5" endLine="68" endColumn="11" startOffset="1889" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="749" target="771">
        <position xmi:type="position:Position" xmi:id="750" source="File &quot;fifo.plants.cif&quot;: " startLine="70" endOffset="1917" startColumn="5" endLine="70" endColumn="8" startOffset="1914" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeReceive" xmi:id="751">
          <position xmi:type="position:Position" xmi:id="752" source="File &quot;fifo.plants.cif&quot;: " startLine="70" endOffset="1924" startColumn="15" endLine="70" endColumn="15" startOffset="1924" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="753" event="21">
            <position xmi:type="position:Position" xmi:id="754" source="File &quot;fifo.plants.cif&quot;: " startLine="70" endOffset="1923" startColumn="10" endLine="70" endColumn="14" startOffset="1919" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="755">
              <position xmi:type="position:Position" xmi:id="756" source="File &quot;fifo.plants.cif&quot;: " startLine="70" endOffset="1923" startColumn="10" endLine="70" endColumn="14" startOffset="1919" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="757">
          <position xmi:type="position:Position" xmi:id="758" source="File &quot;fifo.plants.cif&quot;: " startLine="70" endOffset="1936" startColumn="26" endLine="70" endColumn="27" startOffset="1935" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="759" variable="733">
            <position xmi:type="position:Position" xmi:id="760" source="File &quot;fifo.plants.cif&quot;: " startLine="70" endOffset="1933" startColumn="20" endLine="70" endColumn="24" startOffset="1929" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="761" type="11">
              <position xmi:type="position:Position" xmi:id="762" source="File &quot;fifo.plants.cif&quot;: " startLine="70" endOffset="1933" startColumn="20" endLine="70" endColumn="24" startOffset="1929" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:ReceivedExpression" xmi:id="763">
            <position xmi:type="position:Position" xmi:id="764" source="File &quot;fifo.plants.cif&quot;: " startLine="70" endOffset="1938" startColumn="29" endLine="70" endColumn="29" startOffset="1938" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="765" type="11">
              <position xmi:type="position:Position" xmi:id="766" source="File &quot;fifo.plants.cif&quot;: " startLine="70" endOffset="1938" startColumn="29" endLine="70" endColumn="29" startOffset="1938" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="767" value="true">
        <position xmi:type="position:Position" xmi:id="768" source="File &quot;fifo.plants.cif&quot;: " startLine="69" endOffset="1907" startColumn="5" endLine="69" endColumn="10" startOffset="1902" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <type xmi:type="types:BoolType" xmi:id="769">
          <position xmi:type="position:Position" xmi:id="770" source="File &quot;fifo.plants.cif&quot;: " startLine="69" endOffset="1907" startColumn="5" endLine="69" endColumn="10" startOffset="1902" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="771" name="Busy">
      <position xmi:type="position:Position" xmi:id="772" source="File &quot;fifo.plants.cif&quot;: " startLine="72" endOffset="1966" startColumn="12" endLine="72" endColumn="15" startOffset="1963" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="773" target="743">
        <position xmi:type="position:Position" xmi:id="774" source="File &quot;fifo.plants.cif&quot;: " startLine="73" endOffset="1976" startColumn="5" endLine="73" endColumn="8" startOffset="1973" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeSend" xmi:id="775">
          <position xmi:type="position:Position" xmi:id="776" source="File &quot;fifo.plants.cif&quot;: " startLine="73" endOffset="1985" startColumn="17" endLine="73" endColumn="17" startOffset="1985" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="777" event="29">
            <position xmi:type="position:Position" xmi:id="778" source="File &quot;fifo.plants.cif&quot;: " startLine="73" endOffset="1984" startColumn="10" endLine="73" endColumn="16" startOffset="1978" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="779">
              <position xmi:type="position:Position" xmi:id="780" source="File &quot;fifo.plants.cif&quot;: " startLine="73" endOffset="1984" startColumn="10" endLine="73" endColumn="16" startOffset="1978" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
          <value xmi:type="expressions:DiscVariableExpression" xmi:id="781" variable="733">
            <position xmi:type="position:Position" xmi:id="782" source="File &quot;fifo.plants.cif&quot;: " startLine="73" endOffset="1990" startColumn="18" endLine="73" endColumn="22" startOffset="1986" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="783" type="11">
              <position xmi:type="position:Position" xmi:id="784" source="File &quot;fifo.plants.cif&quot;: " startLine="73" endOffset="1990" startColumn="18" endLine="73" endColumn="22" startOffset="1986" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="785">
          <position xmi:type="position:Position" xmi:id="786" source="File &quot;fifo.plants.cif&quot;: " startLine="73" endOffset="2002" startColumn="33" endLine="73" endColumn="34" startOffset="2001" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="787" variable="733">
            <position xmi:type="position:Position" xmi:id="788" source="File &quot;fifo.plants.cif&quot;: " startLine="73" endOffset="1999" startColumn="27" endLine="73" endColumn="31" startOffset="1995" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="789" type="11">
              <position xmi:type="position:Position" xmi:id="790" source="File &quot;fifo.plants.cif&quot;: " startLine="73" endOffset="1999" startColumn="27" endLine="73" endColumn="31" startOffset="1995" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="791">
            <position xmi:type="position:Position" xmi:id="792" source="File &quot;fifo.plants.cif&quot;: " startLine="73" endOffset="2004" startColumn="36" endLine="73" endColumn="36" startOffset="2004" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="793" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="794" source="File &quot;fifo.plants.cif&quot;: " startLine="73" endOffset="2004" startColumn="36" endLine="73" endColumn="36" startOffset="2004" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="795" name="OP2" kind="Plant">
    <position xmi:type="position:Position" xmi:id="796" source="File &quot;fifo.plants.cif&quot;: " startLine="76" endOffset="2030" startColumn="7" endLine="76" endColumn="9" startOffset="2028" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="797" name="curId">
      <position xmi:type="position:Position" xmi:id="798" source="File &quot;fifo.plants.cif&quot;: " startLine="77" endOffset="2054" startColumn="18" endLine="77" endColumn="22" startOffset="2050" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <type xmi:type="types:TypeRef" xmi:id="799" type="11">
        <position xmi:type="position:Position" xmi:id="800" source="File &quot;fifo.plants.cif&quot;: " startLine="77" endOffset="2048" startColumn="8" endLine="77" endColumn="16" startOffset="2040" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="801">
        <position xmi:type="position:Position" xmi:id="802" source="File &quot;fifo.plants.cif&quot;: " startLine="77" endOffset="2054" startColumn="18" endLine="77" endColumn="22" startOffset="2050" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <values xmi:type="expressions:IntExpression" xmi:id="803">
          <position xmi:type="position:Position" xmi:id="804" source="File &quot;fifo.plants.cif&quot;: " startLine="77" endOffset="2058" startColumn="26" endLine="77" endColumn="26" startOffset="2058" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <type xmi:type="types:IntType" xmi:id="805" lower="0" upper="0">
            <position xmi:type="position:Position" xmi:id="806" source="File &quot;fifo.plants.cif&quot;: " startLine="77" endOffset="2058" startColumn="26" endLine="77" endColumn="26" startOffset="2058" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          </type>
        </values>
      </value>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="807" name="Idle">
      <position xmi:type="position:Position" xmi:id="808" source="File &quot;fifo.plants.cif&quot;: " startLine="79" endOffset="2076" startColumn="12" endLine="79" endColumn="15" startOffset="2073" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="809" value="true">
        <position xmi:type="position:Position" xmi:id="810" source="File &quot;fifo.plants.cif&quot;: " startLine="80" endOffset="2089" startColumn="5" endLine="80" endColumn="11" startOffset="2083" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <type xmi:type="types:BoolType" xmi:id="811">
          <position xmi:type="position:Position" xmi:id="812" source="File &quot;fifo.plants.cif&quot;: " startLine="80" endOffset="2089" startColumn="5" endLine="80" endColumn="11" startOffset="2083" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="813" target="835">
        <position xmi:type="position:Position" xmi:id="814" source="File &quot;fifo.plants.cif&quot;: " startLine="82" endOffset="2111" startColumn="5" endLine="82" endColumn="8" startOffset="2108" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeReceive" xmi:id="815">
          <position xmi:type="position:Position" xmi:id="816" source="File &quot;fifo.plants.cif&quot;: " startLine="82" endOffset="2118" startColumn="15" endLine="82" endColumn="15" startOffset="2118" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="817" event="25">
            <position xmi:type="position:Position" xmi:id="818" source="File &quot;fifo.plants.cif&quot;: " startLine="82" endOffset="2117" startColumn="10" endLine="82" endColumn="14" startOffset="2113" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="819">
              <position xmi:type="position:Position" xmi:id="820" source="File &quot;fifo.plants.cif&quot;: " startLine="82" endOffset="2117" startColumn="10" endLine="82" endColumn="14" startOffset="2113" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="821">
          <position xmi:type="position:Position" xmi:id="822" source="File &quot;fifo.plants.cif&quot;: " startLine="82" endOffset="2130" startColumn="26" endLine="82" endColumn="27" startOffset="2129" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="823" variable="797">
            <position xmi:type="position:Position" xmi:id="824" source="File &quot;fifo.plants.cif&quot;: " startLine="82" endOffset="2127" startColumn="20" endLine="82" endColumn="24" startOffset="2123" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="825" type="11">
              <position xmi:type="position:Position" xmi:id="826" source="File &quot;fifo.plants.cif&quot;: " startLine="82" endOffset="2127" startColumn="20" endLine="82" endColumn="24" startOffset="2123" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:ReceivedExpression" xmi:id="827">
            <position xmi:type="position:Position" xmi:id="828" source="File &quot;fifo.plants.cif&quot;: " startLine="82" endOffset="2132" startColumn="29" endLine="82" endColumn="29" startOffset="2132" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="829" type="11">
              <position xmi:type="position:Position" xmi:id="830" source="File &quot;fifo.plants.cif&quot;: " startLine="82" endOffset="2132" startColumn="29" endLine="82" endColumn="29" startOffset="2132" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="831" value="true">
        <position xmi:type="position:Position" xmi:id="832" source="File &quot;fifo.plants.cif&quot;: " startLine="81" endOffset="2101" startColumn="5" endLine="81" endColumn="10" startOffset="2096" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <type xmi:type="types:BoolType" xmi:id="833">
          <position xmi:type="position:Position" xmi:id="834" source="File &quot;fifo.plants.cif&quot;: " startLine="81" endOffset="2101" startColumn="5" endLine="81" endColumn="10" startOffset="2096" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="835" name="Busy">
      <position xmi:type="position:Position" xmi:id="836" source="File &quot;fifo.plants.cif&quot;: " startLine="84" endOffset="2160" startColumn="12" endLine="84" endColumn="15" startOffset="2157" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="837" target="807">
        <position xmi:type="position:Position" xmi:id="838" source="File &quot;fifo.plants.cif&quot;: " startLine="85" endOffset="2170" startColumn="5" endLine="85" endColumn="8" startOffset="2167" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeSend" xmi:id="839">
          <position xmi:type="position:Position" xmi:id="840" source="File &quot;fifo.plants.cif&quot;: " startLine="85" endOffset="2179" startColumn="17" endLine="85" endColumn="17" startOffset="2179" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="841" event="33">
            <position xmi:type="position:Position" xmi:id="842" source="File &quot;fifo.plants.cif&quot;: " startLine="85" endOffset="2178" startColumn="10" endLine="85" endColumn="16" startOffset="2172" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="843">
              <position xmi:type="position:Position" xmi:id="844" source="File &quot;fifo.plants.cif&quot;: " startLine="85" endOffset="2178" startColumn="10" endLine="85" endColumn="16" startOffset="2172" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
          <value xmi:type="expressions:DiscVariableExpression" xmi:id="845" variable="797">
            <position xmi:type="position:Position" xmi:id="846" source="File &quot;fifo.plants.cif&quot;: " startLine="85" endOffset="2184" startColumn="18" endLine="85" endColumn="22" startOffset="2180" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="847" type="11">
              <position xmi:type="position:Position" xmi:id="848" source="File &quot;fifo.plants.cif&quot;: " startLine="85" endOffset="2184" startColumn="18" endLine="85" endColumn="22" startOffset="2180" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="849">
          <position xmi:type="position:Position" xmi:id="850" source="File &quot;fifo.plants.cif&quot;: " startLine="85" endOffset="2196" startColumn="33" endLine="85" endColumn="34" startOffset="2195" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="851" variable="797">
            <position xmi:type="position:Position" xmi:id="852" source="File &quot;fifo.plants.cif&quot;: " startLine="85" endOffset="2193" startColumn="27" endLine="85" endColumn="31" startOffset="2189" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="853" type="11">
              <position xmi:type="position:Position" xmi:id="854" source="File &quot;fifo.plants.cif&quot;: " startLine="85" endOffset="2193" startColumn="27" endLine="85" endColumn="31" startOffset="2189" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="855">
            <position xmi:type="position:Position" xmi:id="856" source="File &quot;fifo.plants.cif&quot;: " startLine="85" endOffset="2198" startColumn="36" endLine="85" endColumn="36" startOffset="2198" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="857" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="858" source="File &quot;fifo.plants.cif&quot;: " startLine="85" endOffset="2198" startColumn="36" endLine="85" endColumn="36" startOffset="2198" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="859" name="CHK" kind="Plant">
    <position xmi:type="position:Position" xmi:id="860" source="File &quot;fifo.plants.cif&quot;: " startLine="88" endOffset="2224" startColumn="7" endLine="88" endColumn="9" startOffset="2222" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="861" name="curId">
      <position xmi:type="position:Position" xmi:id="862" source="File &quot;fifo.plants.cif&quot;: " startLine="89" endOffset="2248" startColumn="18" endLine="89" endColumn="22" startOffset="2244" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <type xmi:type="types:TypeRef" xmi:id="863" type="11">
        <position xmi:type="position:Position" xmi:id="864" source="File &quot;fifo.plants.cif&quot;: " startLine="89" endOffset="2242" startColumn="8" endLine="89" endColumn="16" startOffset="2234" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="865">
        <position xmi:type="position:Position" xmi:id="866" source="File &quot;fifo.plants.cif&quot;: " startLine="89" endOffset="2248" startColumn="18" endLine="89" endColumn="22" startOffset="2244" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <values xmi:type="expressions:IntExpression" xmi:id="867">
          <position xmi:type="position:Position" xmi:id="868" source="File &quot;fifo.plants.cif&quot;: " startLine="89" endOffset="2252" startColumn="26" endLine="89" endColumn="26" startOffset="2252" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <type xmi:type="types:IntType" xmi:id="869" lower="0" upper="0">
            <position xmi:type="position:Position" xmi:id="870" source="File &quot;fifo.plants.cif&quot;: " startLine="89" endOffset="2252" startColumn="26" endLine="89" endColumn="26" startOffset="2252" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          </type>
        </values>
      </value>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="871" name="Idle">
      <position xmi:type="position:Position" xmi:id="872" source="File &quot;fifo.plants.cif&quot;: " startLine="91" endOffset="2270" startColumn="12" endLine="91" endColumn="15" startOffset="2267" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="873" value="true">
        <position xmi:type="position:Position" xmi:id="874" source="File &quot;fifo.plants.cif&quot;: " startLine="92" endOffset="2283" startColumn="5" endLine="92" endColumn="11" startOffset="2277" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <type xmi:type="types:BoolType" xmi:id="875">
          <position xmi:type="position:Position" xmi:id="876" source="File &quot;fifo.plants.cif&quot;: " startLine="92" endOffset="2283" startColumn="5" endLine="92" endColumn="11" startOffset="2277" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="877" target="905">
        <position xmi:type="position:Position" xmi:id="878" source="File &quot;fifo.plants.cif&quot;: " startLine="94" endOffset="2305" startColumn="5" endLine="94" endColumn="8" startOffset="2302" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeReceive" xmi:id="879">
          <position xmi:type="position:Position" xmi:id="880" source="File &quot;fifo.plants.cif&quot;: " startLine="94" endOffset="2314" startColumn="17" endLine="94" endColumn="17" startOffset="2314" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="881" event="29">
            <position xmi:type="position:Position" xmi:id="882" source="File &quot;fifo.plants.cif&quot;: " startLine="94" endOffset="2313" startColumn="10" endLine="94" endColumn="16" startOffset="2307" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="883">
              <position xmi:type="position:Position" xmi:id="884" source="File &quot;fifo.plants.cif&quot;: " startLine="94" endOffset="2313" startColumn="10" endLine="94" endColumn="16" startOffset="2307" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
        </events>
        <events xmi:type="automata:EdgeReceive" xmi:id="885">
          <position xmi:type="position:Position" xmi:id="886" source="File &quot;fifo.plants.cif&quot;: " startLine="94" endOffset="2324" startColumn="27" endLine="94" endColumn="27" startOffset="2324" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="887" event="33">
            <position xmi:type="position:Position" xmi:id="888" source="File &quot;fifo.plants.cif&quot;: " startLine="94" endOffset="2323" startColumn="20" endLine="94" endColumn="26" startOffset="2317" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="889">
              <position xmi:type="position:Position" xmi:id="890" source="File &quot;fifo.plants.cif&quot;: " startLine="94" endOffset="2323" startColumn="20" endLine="94" endColumn="26" startOffset="2317" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="891">
          <position xmi:type="position:Position" xmi:id="892" source="File &quot;fifo.plants.cif&quot;: " startLine="94" endOffset="2336" startColumn="38" endLine="94" endColumn="39" startOffset="2335" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="893" variable="861">
            <position xmi:type="position:Position" xmi:id="894" source="File &quot;fifo.plants.cif&quot;: " startLine="94" endOffset="2333" startColumn="32" endLine="94" endColumn="36" startOffset="2329" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="895" type="11">
              <position xmi:type="position:Position" xmi:id="896" source="File &quot;fifo.plants.cif&quot;: " startLine="94" endOffset="2333" startColumn="32" endLine="94" endColumn="36" startOffset="2329" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:ReceivedExpression" xmi:id="897">
            <position xmi:type="position:Position" xmi:id="898" source="File &quot;fifo.plants.cif&quot;: " startLine="94" endOffset="2338" startColumn="41" endLine="94" endColumn="41" startOffset="2338" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="899" type="11">
              <position xmi:type="position:Position" xmi:id="900" source="File &quot;fifo.plants.cif&quot;: " startLine="94" endOffset="2338" startColumn="41" endLine="94" endColumn="41" startOffset="2338" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="901" value="true">
        <position xmi:type="position:Position" xmi:id="902" source="File &quot;fifo.plants.cif&quot;: " startLine="93" endOffset="2295" startColumn="5" endLine="93" endColumn="10" startOffset="2290" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <type xmi:type="types:BoolType" xmi:id="903">
          <position xmi:type="position:Position" xmi:id="904" source="File &quot;fifo.plants.cif&quot;: " startLine="93" endOffset="2295" startColumn="5" endLine="93" endColumn="10" startOffset="2290" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="905" name="Busy">
      <position xmi:type="position:Position" xmi:id="906" source="File &quot;fifo.plants.cif&quot;: " startLine="96" endOffset="2366" startColumn="12" endLine="96" endColumn="15" startOffset="2363" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="907" target="923">
        <position xmi:type="position:Position" xmi:id="908" source="File &quot;fifo.plants.cif&quot;: " startLine="97" endOffset="2376" startColumn="5" endLine="97" endColumn="8" startOffset="2373" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="909">
          <position xmi:type="position:Position" xmi:id="910" source="File &quot;fifo.plants.cif&quot;: " startLine="97" endOffset="2386" startColumn="10" endLine="97" endColumn="18" startOffset="2378" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="911" event="37">
            <position xmi:type="position:Position" xmi:id="912" source="File &quot;fifo.plants.cif&quot;: " startLine="97" endOffset="2386" startColumn="10" endLine="97" endColumn="18" startOffset="2378" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="913">
              <position xmi:type="position:Position" xmi:id="914" source="File &quot;fifo.plants.cif&quot;: " startLine="97" endOffset="2386" startColumn="10" endLine="97" endColumn="18" startOffset="2378" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="915" target="947">
        <position xmi:type="position:Position" xmi:id="916" source="File &quot;fifo.plants.cif&quot;: " startLine="98" endOffset="2409" startColumn="5" endLine="98" endColumn="8" startOffset="2406" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="917">
          <position xmi:type="position:Position" xmi:id="918" source="File &quot;fifo.plants.cif&quot;: " startLine="98" endOffset="2419" startColumn="10" endLine="98" endColumn="18" startOffset="2411" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="919" event="39">
            <position xmi:type="position:Position" xmi:id="920" source="File &quot;fifo.plants.cif&quot;: " startLine="98" endOffset="2419" startColumn="10" endLine="98" endColumn="18" startOffset="2411" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="921">
              <position xmi:type="position:Position" xmi:id="922" source="File &quot;fifo.plants.cif&quot;: " startLine="98" endOffset="2419" startColumn="10" endLine="98" endColumn="18" startOffset="2411" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="923" name="Success">
      <position xmi:type="position:Position" xmi:id="924" source="File &quot;fifo.plants.cif&quot;: " startLine="100" endOffset="2453" startColumn="12" endLine="100" endColumn="18" startOffset="2447" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="925" target="871">
        <position xmi:type="position:Position" xmi:id="926" source="File &quot;fifo.plants.cif&quot;: " startLine="101" endOffset="2463" startColumn="5" endLine="101" endColumn="8" startOffset="2460" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeSend" xmi:id="927">
          <position xmi:type="position:Position" xmi:id="928" source="File &quot;fifo.plants.cif&quot;: " startLine="101" endOffset="2472" startColumn="17" endLine="101" endColumn="17" startOffset="2472" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="929" event="45">
            <position xmi:type="position:Position" xmi:id="930" source="File &quot;fifo.plants.cif&quot;: " startLine="101" endOffset="2471" startColumn="10" endLine="101" endColumn="16" startOffset="2465" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="931">
              <position xmi:type="position:Position" xmi:id="932" source="File &quot;fifo.plants.cif&quot;: " startLine="101" endOffset="2471" startColumn="10" endLine="101" endColumn="16" startOffset="2465" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
          <value xmi:type="expressions:DiscVariableExpression" xmi:id="933" variable="861">
            <position xmi:type="position:Position" xmi:id="934" source="File &quot;fifo.plants.cif&quot;: " startLine="101" endOffset="2477" startColumn="18" endLine="101" endColumn="22" startOffset="2473" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="935" type="11">
              <position xmi:type="position:Position" xmi:id="936" source="File &quot;fifo.plants.cif&quot;: " startLine="101" endOffset="2477" startColumn="18" endLine="101" endColumn="22" startOffset="2473" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="937">
          <position xmi:type="position:Position" xmi:id="938" source="File &quot;fifo.plants.cif&quot;: " startLine="101" endOffset="2489" startColumn="33" endLine="101" endColumn="34" startOffset="2488" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="939" variable="861">
            <position xmi:type="position:Position" xmi:id="940" source="File &quot;fifo.plants.cif&quot;: " startLine="101" endOffset="2486" startColumn="27" endLine="101" endColumn="31" startOffset="2482" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="941" type="11">
              <position xmi:type="position:Position" xmi:id="942" source="File &quot;fifo.plants.cif&quot;: " startLine="101" endOffset="2486" startColumn="27" endLine="101" endColumn="31" startOffset="2482" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="943">
            <position xmi:type="position:Position" xmi:id="944" source="File &quot;fifo.plants.cif&quot;: " startLine="101" endOffset="2491" startColumn="36" endLine="101" endColumn="36" startOffset="2491" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="945" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="946" source="File &quot;fifo.plants.cif&quot;: " startLine="101" endOffset="2491" startColumn="36" endLine="101" endColumn="36" startOffset="2491" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="947" name="Failure">
      <position xmi:type="position:Position" xmi:id="948" source="File &quot;fifo.plants.cif&quot;: " startLine="102" endOffset="2521" startColumn="12" endLine="102" endColumn="18" startOffset="2515" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="949" target="871">
        <position xmi:type="position:Position" xmi:id="950" source="File &quot;fifo.plants.cif&quot;: " startLine="103" endOffset="2531" startColumn="5" endLine="103" endColumn="8" startOffset="2528" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeSend" xmi:id="951">
          <position xmi:type="position:Position" xmi:id="952" source="File &quot;fifo.plants.cif&quot;: " startLine="103" endOffset="2539" startColumn="16" endLine="103" endColumn="16" startOffset="2539" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="953" event="41">
            <position xmi:type="position:Position" xmi:id="954" source="File &quot;fifo.plants.cif&quot;: " startLine="103" endOffset="2538" startColumn="10" endLine="103" endColumn="15" startOffset="2533" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="955">
              <position xmi:type="position:Position" xmi:id="956" source="File &quot;fifo.plants.cif&quot;: " startLine="103" endOffset="2538" startColumn="10" endLine="103" endColumn="15" startOffset="2533" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
          <value xmi:type="expressions:DiscVariableExpression" xmi:id="957" variable="861">
            <position xmi:type="position:Position" xmi:id="958" source="File &quot;fifo.plants.cif&quot;: " startLine="103" endOffset="2544" startColumn="17" endLine="103" endColumn="21" startOffset="2540" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="959" type="11">
              <position xmi:type="position:Position" xmi:id="960" source="File &quot;fifo.plants.cif&quot;: " startLine="103" endOffset="2544" startColumn="17" endLine="103" endColumn="21" startOffset="2540" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="961">
          <position xmi:type="position:Position" xmi:id="962" source="File &quot;fifo.plants.cif&quot;: " startLine="103" endOffset="2556" startColumn="32" endLine="103" endColumn="33" startOffset="2555" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="963" variable="861">
            <position xmi:type="position:Position" xmi:id="964" source="File &quot;fifo.plants.cif&quot;: " startLine="103" endOffset="2553" startColumn="26" endLine="103" endColumn="30" startOffset="2549" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="965" type="11">
              <position xmi:type="position:Position" xmi:id="966" source="File &quot;fifo.plants.cif&quot;: " startLine="103" endOffset="2553" startColumn="26" endLine="103" endColumn="30" startOffset="2549" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="967">
            <position xmi:type="position:Position" xmi:id="968" source="File &quot;fifo.plants.cif&quot;: " startLine="103" endOffset="2558" startColumn="35" endLine="103" endColumn="35" startOffset="2558" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="969" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="970" source="File &quot;fifo.plants.cif&quot;: " startLine="103" endOffset="2558" startColumn="35" endLine="103" endColumn="35" startOffset="2558" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="971" name="DONE" kind="Plant">
    <position xmi:type="position:Position" xmi:id="972" source="File &quot;fifo.plants.cif&quot;: " startLine="106" endOffset="2585" startColumn="7" endLine="106" endColumn="10" startOffset="2582" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="973" name="curId">
      <position xmi:type="position:Position" xmi:id="974" source="File &quot;fifo.plants.cif&quot;: " startLine="107" endOffset="2609" startColumn="18" endLine="107" endColumn="22" startOffset="2605" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <type xmi:type="types:TypeRef" xmi:id="975" type="11">
        <position xmi:type="position:Position" xmi:id="976" source="File &quot;fifo.plants.cif&quot;: " startLine="107" endOffset="2603" startColumn="8" endLine="107" endColumn="16" startOffset="2595" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="977">
        <position xmi:type="position:Position" xmi:id="978" source="File &quot;fifo.plants.cif&quot;: " startLine="107" endOffset="2609" startColumn="18" endLine="107" endColumn="22" startOffset="2605" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <values xmi:type="expressions:IntExpression" xmi:id="979">
          <position xmi:type="position:Position" xmi:id="980" source="File &quot;fifo.plants.cif&quot;: " startLine="107" endOffset="2613" startColumn="26" endLine="107" endColumn="26" startOffset="2613" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <type xmi:type="types:IntType" xmi:id="981" lower="0" upper="0">
            <position xmi:type="position:Position" xmi:id="982" source="File &quot;fifo.plants.cif&quot;: " startLine="107" endOffset="2613" startColumn="26" endLine="107" endColumn="26" startOffset="2613" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          </type>
        </values>
      </value>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="983" name="Idle">
      <position xmi:type="position:Position" xmi:id="984" source="File &quot;fifo.plants.cif&quot;: " startLine="109" endOffset="2631" startColumn="12" endLine="109" endColumn="15" startOffset="2628" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="985" value="true">
        <position xmi:type="position:Position" xmi:id="986" source="File &quot;fifo.plants.cif&quot;: " startLine="110" endOffset="2644" startColumn="5" endLine="110" endColumn="11" startOffset="2638" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <type xmi:type="types:BoolType" xmi:id="987">
          <position xmi:type="position:Position" xmi:id="988" source="File &quot;fifo.plants.cif&quot;: " startLine="110" endOffset="2644" startColumn="5" endLine="110" endColumn="11" startOffset="2638" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="989" target="1011">
        <position xmi:type="position:Position" xmi:id="990" source="File &quot;fifo.plants.cif&quot;: " startLine="112" endOffset="2666" startColumn="5" endLine="112" endColumn="8" startOffset="2663" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeReceive" xmi:id="991">
          <position xmi:type="position:Position" xmi:id="992" source="File &quot;fifo.plants.cif&quot;: " startLine="112" endOffset="2675" startColumn="17" endLine="112" endColumn="17" startOffset="2675" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="993" event="45">
            <position xmi:type="position:Position" xmi:id="994" source="File &quot;fifo.plants.cif&quot;: " startLine="112" endOffset="2674" startColumn="10" endLine="112" endColumn="16" startOffset="2668" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="995">
              <position xmi:type="position:Position" xmi:id="996" source="File &quot;fifo.plants.cif&quot;: " startLine="112" endOffset="2674" startColumn="10" endLine="112" endColumn="16" startOffset="2668" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="997">
          <position xmi:type="position:Position" xmi:id="998" source="File &quot;fifo.plants.cif&quot;: " startLine="112" endOffset="2687" startColumn="28" endLine="112" endColumn="29" startOffset="2686" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="999" variable="973">
            <position xmi:type="position:Position" xmi:id="1000" source="File &quot;fifo.plants.cif&quot;: " startLine="112" endOffset="2684" startColumn="22" endLine="112" endColumn="26" startOffset="2680" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="1001" type="11">
              <position xmi:type="position:Position" xmi:id="1002" source="File &quot;fifo.plants.cif&quot;: " startLine="112" endOffset="2684" startColumn="22" endLine="112" endColumn="26" startOffset="2680" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:ReceivedExpression" xmi:id="1003">
            <position xmi:type="position:Position" xmi:id="1004" source="File &quot;fifo.plants.cif&quot;: " startLine="112" endOffset="2689" startColumn="31" endLine="112" endColumn="31" startOffset="2689" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="1005" type="11">
              <position xmi:type="position:Position" xmi:id="1006" source="File &quot;fifo.plants.cif&quot;: " startLine="112" endOffset="2689" startColumn="31" endLine="112" endColumn="31" startOffset="2689" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1007" value="true">
        <position xmi:type="position:Position" xmi:id="1008" source="File &quot;fifo.plants.cif&quot;: " startLine="111" endOffset="2656" startColumn="5" endLine="111" endColumn="10" startOffset="2651" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1009">
          <position xmi:type="position:Position" xmi:id="1010" source="File &quot;fifo.plants.cif&quot;: " startLine="111" endOffset="2656" startColumn="5" endLine="111" endColumn="10" startOffset="2651" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1011" name="Busy">
      <position xmi:type="position:Position" xmi:id="1012" source="File &quot;fifo.plants.cif&quot;: " startLine="114" endOffset="2717" startColumn="12" endLine="114" endColumn="15" startOffset="2714" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1013" target="983">
        <position xmi:type="position:Position" xmi:id="1014" source="File &quot;fifo.plants.cif&quot;: " startLine="115" endOffset="2727" startColumn="5" endLine="115" endColumn="8" startOffset="2724" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
        <events xmi:type="automata:EdgeSend" xmi:id="1015">
          <position xmi:type="position:Position" xmi:id="1016" source="File &quot;fifo.plants.cif&quot;: " startLine="115" endOffset="2739" startColumn="20" endLine="115" endColumn="20" startOffset="2739" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1017" event="49">
            <position xmi:type="position:Position" xmi:id="1018" source="File &quot;fifo.plants.cif&quot;: " startLine="115" endOffset="2738" startColumn="10" endLine="115" endColumn="19" startOffset="2729" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1019">
              <position xmi:type="position:Position" xmi:id="1020" source="File &quot;fifo.plants.cif&quot;: " startLine="115" endOffset="2738" startColumn="10" endLine="115" endColumn="19" startOffset="2729" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </event>
          <value xmi:type="expressions:DiscVariableExpression" xmi:id="1021" variable="973">
            <position xmi:type="position:Position" xmi:id="1022" source="File &quot;fifo.plants.cif&quot;: " startLine="115" endOffset="2744" startColumn="21" endLine="115" endColumn="25" startOffset="2740" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="1023" type="11">
              <position xmi:type="position:Position" xmi:id="1024" source="File &quot;fifo.plants.cif&quot;: " startLine="115" endOffset="2744" startColumn="21" endLine="115" endColumn="25" startOffset="2740" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="1025">
          <position xmi:type="position:Position" xmi:id="1026" source="File &quot;fifo.plants.cif&quot;: " startLine="115" endOffset="2756" startColumn="36" endLine="115" endColumn="37" startOffset="2755" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="1027" variable="973">
            <position xmi:type="position:Position" xmi:id="1028" source="File &quot;fifo.plants.cif&quot;: " startLine="115" endOffset="2753" startColumn="30" endLine="115" endColumn="34" startOffset="2749" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:TypeRef" xmi:id="1029" type="11">
              <position xmi:type="position:Position" xmi:id="1030" source="File &quot;fifo.plants.cif&quot;: " startLine="115" endOffset="2753" startColumn="30" endLine="115" endColumn="34" startOffset="2749" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="1031">
            <position xmi:type="position:Position" xmi:id="1032" source="File &quot;fifo.plants.cif&quot;: " startLine="115" endOffset="2758" startColumn="39" endLine="115" endColumn="39" startOffset="2758" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            <type xmi:type="types:IntType" xmi:id="1033" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="1034" source="File &quot;fifo.plants.cif&quot;: " startLine="115" endOffset="2758" startColumn="39" endLine="115" endColumn="39" startOffset="2758" location="C:\\Users\\rober\\Downloads\\eclipse-escet-v5.0-win32.win32.x86_64\\eclipse-escet-v5.0\\workspace\\CIFExamples-5.0.0.v20241003-060816\\synthesis\\fifo\\fifo.plants.cif"/>
            </type>
          </value>
        </updates>
      </edges>
    </locations>
  </components>
</cif:Specification>
`;
const eventMap = ['u_failure', 'u_success', 'c_do1', 'c_do2', 'c_done1', 'c_done2', 'c_enter', 'c_exit', 'c_finished', 'c_leave', 'c_redo', 'c_start'];
