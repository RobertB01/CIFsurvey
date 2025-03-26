const xml_machine_tool_with_simulator = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
  <components xmi:type="automata:Automaton" xmi:id="3" name="conveyor">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="1" endOffset="17" startColumn="11" endLine="1" endColumn="18" startOffset="10" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="5" name="product_in" controllable="true">
      <position xmi:type="position:Position" xmi:id="6" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="2" endOffset="53" startColumn="24" endLine="2" endColumn="33" startOffset="44" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="7" name="product_out" controllable="true">
      <position xmi:type="position:Position" xmi:id="8" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="2" endOffset="66" startColumn="36" endLine="2" endColumn="46" startOffset="56" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="9" name="noProductPresent">
      <position xmi:type="position:Position" xmi:id="10" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="4" endOffset="100" startColumn="14" endLine="4" endColumn="29" startOffset="85" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="11" value="true">
        <position xmi:type="position:Position" xmi:id="12" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="5" endOffset="118" startColumn="9" endLine="5" endColumn="15" startOffset="112" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="13">
          <position xmi:type="position:Position" xmi:id="14" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="5" endOffset="118" startColumn="9" endLine="5" endColumn="15" startOffset="112" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="15" target="27">
        <position xmi:type="position:Position" xmi:id="16" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="6" endOffset="141" startColumn="9" endLine="6" endColumn="12" startOffset="138" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="17">
          <position xmi:type="position:Position" xmi:id="18" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="6" endOffset="152" startColumn="14" endLine="6" endColumn="23" startOffset="143" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="19" event="5">
            <position xmi:type="position:Position" xmi:id="20" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="6" endOffset="152" startColumn="14" endLine="6" endColumn="23" startOffset="143" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="21">
              <position xmi:type="position:Position" xmi:id="22" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="6" endOffset="152" startColumn="14" endLine="6" endColumn="23" startOffset="143" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="23" value="true">
        <position xmi:type="position:Position" xmi:id="24" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="5" endOffset="126" startColumn="18" endLine="5" endColumn="23" startOffset="121" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="25">
          <position xmi:type="position:Position" xmi:id="26" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="5" endOffset="126" startColumn="18" endLine="5" endColumn="23" startOffset="121" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="27" name="productPresent">
      <position xmi:type="position:Position" xmi:id="28" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="8" endOffset="204" startColumn="14" endLine="8" endColumn="27" startOffset="191" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="29" target="9">
        <position xmi:type="position:Position" xmi:id="30" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="9" endOffset="219" startColumn="9" endLine="9" endColumn="12" startOffset="216" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="31">
          <position xmi:type="position:Position" xmi:id="32" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="9" endOffset="231" startColumn="14" endLine="9" endColumn="24" startOffset="221" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="33" event="7">
            <position xmi:type="position:Position" xmi:id="34" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="9" endOffset="231" startColumn="14" endLine="9" endColumn="24" startOffset="221" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="35">
              <position xmi:type="position:Position" xmi:id="36" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="9" endOffset="231" startColumn="14" endLine="9" endColumn="24" startOffset="221" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="37" name="machine_stand">
    <position xmi:type="position:Position" xmi:id="38" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="14" endOffset="290" startColumn="11" endLine="14" endColumn="23" startOffset="278" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="39" name="move_down" controllable="true">
      <position xmi:type="position:Position" xmi:id="40" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="16" endOffset="327" startColumn="24" endLine="16" endColumn="32" startOffset="319" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="41" name="move_up" controllable="true">
      <position xmi:type="position:Position" xmi:id="42" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="16" endOffset="336" startColumn="35" endLine="16" endColumn="41" startOffset="330" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="43" name="up">
      <position xmi:type="position:Position" xmi:id="44" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="19" endOffset="358" startColumn="14" endLine="19" endColumn="15" startOffset="357" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="45" value="true">
        <position xmi:type="position:Position" xmi:id="46" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="20" endOffset="376" startColumn="9" endLine="20" endColumn="15" startOffset="370" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="47">
          <position xmi:type="position:Position" xmi:id="48" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="20" endOffset="376" startColumn="9" endLine="20" endColumn="15" startOffset="370" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="49" target="61">
        <position xmi:type="position:Position" xmi:id="50" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="21" endOffset="399" startColumn="9" endLine="21" endColumn="12" startOffset="396" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="51">
          <position xmi:type="position:Position" xmi:id="52" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="21" endOffset="409" startColumn="14" endLine="21" endColumn="22" startOffset="401" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="53" event="39">
            <position xmi:type="position:Position" xmi:id="54" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="21" endOffset="409" startColumn="14" endLine="21" endColumn="22" startOffset="401" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="55">
              <position xmi:type="position:Position" xmi:id="56" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="21" endOffset="409" startColumn="14" endLine="21" endColumn="22" startOffset="401" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="57" value="true">
        <position xmi:type="position:Position" xmi:id="58" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="20" endOffset="384" startColumn="18" endLine="20" endColumn="23" startOffset="379" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="59">
          <position xmi:type="position:Position" xmi:id="60" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="20" endOffset="384" startColumn="18" endLine="20" endColumn="23" startOffset="379" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="61" name="down">
      <position xmi:type="position:Position" xmi:id="62" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="23" endOffset="441" startColumn="14" endLine="23" endColumn="17" startOffset="438" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="63" target="43">
        <position xmi:type="position:Position" xmi:id="64" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="24" endOffset="456" startColumn="9" endLine="24" endColumn="12" startOffset="453" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="65">
          <position xmi:type="position:Position" xmi:id="66" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="24" endOffset="464" startColumn="14" endLine="24" endColumn="20" startOffset="458" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="67" event="41">
            <position xmi:type="position:Position" xmi:id="68" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="24" endOffset="464" startColumn="14" endLine="24" endColumn="20" startOffset="458" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="69">
              <position xmi:type="position:Position" xmi:id="70" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="24" endOffset="464" startColumn="14" endLine="24" endColumn="20" startOffset="458" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="71" name="machine_head">
    <position xmi:type="position:Position" xmi:id="72" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="30" endOffset="510" startColumn="11" endLine="30" endColumn="22" startOffset="499" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="73" name="M_P" controllable="true">
      <position xmi:type="position:Position" xmi:id="74" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="31" endOffset="539" startColumn="24" endLine="31" endColumn="26" startOffset="537" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="75" name="P_M" controllable="true">
      <position xmi:type="position:Position" xmi:id="76" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="31" endOffset="544" startColumn="29" endLine="31" endColumn="31" startOffset="542" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="77" name="M_D" controllable="true">
      <position xmi:type="position:Position" xmi:id="78" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="31" endOffset="549" startColumn="34" endLine="31" endColumn="36" startOffset="547" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="79" name="D_M" controllable="true">
      <position xmi:type="position:Position" xmi:id="80" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="31" endOffset="554" startColumn="39" endLine="31" endColumn="41" startOffset="552" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="81" name="P_D" controllable="true">
      <position xmi:type="position:Position" xmi:id="82" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="31" endOffset="559" startColumn="44" endLine="31" endColumn="46" startOffset="557" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="83" name="D_P" controllable="true">
      <position xmi:type="position:Position" xmi:id="84" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="31" endOffset="564" startColumn="49" endLine="31" endColumn="51" startOffset="562" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="85" name="opD">
      <position xmi:type="position:Position" xmi:id="86" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="33" endOffset="626" startColumn="14" endLine="33" endColumn="16" startOffset="624" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="87" target="129">
        <position xmi:type="position:Position" xmi:id="88" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="34" endOffset="641" startColumn="9" endLine="34" endColumn="12" startOffset="638" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="89">
          <position xmi:type="position:Position" xmi:id="90" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="34" endOffset="645" startColumn="14" endLine="34" endColumn="16" startOffset="643" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="91" event="83">
            <position xmi:type="position:Position" xmi:id="92" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="34" endOffset="645" startColumn="14" endLine="34" endColumn="16" startOffset="643" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="93">
              <position xmi:type="position:Position" xmi:id="94" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="34" endOffset="645" startColumn="14" endLine="34" endColumn="16" startOffset="643" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="95" target="103">
        <position xmi:type="position:Position" xmi:id="96" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="35" endOffset="669" startColumn="9" endLine="35" endColumn="12" startOffset="666" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="97">
          <position xmi:type="position:Position" xmi:id="98" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="35" endOffset="673" startColumn="14" endLine="35" endColumn="16" startOffset="671" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="99" event="79">
            <position xmi:type="position:Position" xmi:id="100" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="35" endOffset="673" startColumn="14" endLine="35" endColumn="16" startOffset="671" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="101">
              <position xmi:type="position:Position" xmi:id="102" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="35" endOffset="673" startColumn="14" endLine="35" endColumn="16" startOffset="671" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="103" name="opM">
      <position xmi:type="position:Position" xmi:id="104" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="38" endOffset="705" startColumn="14" endLine="38" endColumn="16" startOffset="703" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="105" value="true">
        <position xmi:type="position:Position" xmi:id="106" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="39" endOffset="723" startColumn="9" endLine="39" endColumn="15" startOffset="717" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="107">
          <position xmi:type="position:Position" xmi:id="108" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="39" endOffset="723" startColumn="9" endLine="39" endColumn="15" startOffset="717" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="109" target="129">
        <position xmi:type="position:Position" xmi:id="110" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="40" endOffset="746" startColumn="9" endLine="40" endColumn="12" startOffset="743" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="111">
          <position xmi:type="position:Position" xmi:id="112" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="40" endOffset="750" startColumn="14" endLine="40" endColumn="16" startOffset="748" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="113" event="73">
            <position xmi:type="position:Position" xmi:id="114" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="40" endOffset="750" startColumn="14" endLine="40" endColumn="16" startOffset="748" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="115">
              <position xmi:type="position:Position" xmi:id="116" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="40" endOffset="750" startColumn="14" endLine="40" endColumn="16" startOffset="748" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="117" target="85">
        <position xmi:type="position:Position" xmi:id="118" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="41" endOffset="774" startColumn="9" endLine="41" endColumn="12" startOffset="771" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="119">
          <position xmi:type="position:Position" xmi:id="120" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="41" endOffset="778" startColumn="14" endLine="41" endColumn="16" startOffset="776" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="121" event="77">
            <position xmi:type="position:Position" xmi:id="122" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="41" endOffset="778" startColumn="14" endLine="41" endColumn="16" startOffset="776" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="123">
              <position xmi:type="position:Position" xmi:id="124" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="41" endOffset="778" startColumn="14" endLine="41" endColumn="16" startOffset="776" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="125" value="true">
        <position xmi:type="position:Position" xmi:id="126" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="39" endOffset="731" startColumn="18" endLine="39" endColumn="23" startOffset="726" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="127">
          <position xmi:type="position:Position" xmi:id="128" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="39" endOffset="731" startColumn="18" endLine="39" endColumn="23" startOffset="726" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="129" name="opP">
      <position xmi:type="position:Position" xmi:id="130" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="43" endOffset="808" startColumn="14" endLine="43" endColumn="16" startOffset="806" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="131" target="85">
        <position xmi:type="position:Position" xmi:id="132" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="44" endOffset="823" startColumn="9" endLine="44" endColumn="12" startOffset="820" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="133">
          <position xmi:type="position:Position" xmi:id="134" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="44" endOffset="827" startColumn="14" endLine="44" endColumn="16" startOffset="825" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="135" event="81">
            <position xmi:type="position:Position" xmi:id="136" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="44" endOffset="827" startColumn="14" endLine="44" endColumn="16" startOffset="825" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="137">
              <position xmi:type="position:Position" xmi:id="138" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="44" endOffset="827" startColumn="14" endLine="44" endColumn="16" startOffset="825" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="139" target="103">
        <position xmi:type="position:Position" xmi:id="140" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="45" endOffset="851" startColumn="9" endLine="45" endColumn="12" startOffset="848" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="141">
          <position xmi:type="position:Position" xmi:id="142" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="45" endOffset="855" startColumn="14" endLine="45" endColumn="16" startOffset="853" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="143" event="75">
            <position xmi:type="position:Position" xmi:id="144" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="45" endOffset="855" startColumn="14" endLine="45" endColumn="16" startOffset="853" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="145">
              <position xmi:type="position:Position" xmi:id="146" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="45" endOffset="855" startColumn="14" endLine="45" endColumn="16" startOffset="853" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="147" name="drill">
    <position xmi:type="position:Position" xmi:id="148" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="53" endOffset="899" startColumn="11" endLine="53" endColumn="15" startOffset="895" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="149" name="turn_on" controllable="true">
      <position xmi:type="position:Position" xmi:id="150" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="54" endOffset="932" startColumn="24" endLine="54" endColumn="30" startOffset="926" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="151" name="turn_off" controllable="true">
      <position xmi:type="position:Position" xmi:id="152" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="54" endOffset="942" startColumn="33" endLine="54" endColumn="40" startOffset="935" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="153" name="off">
      <position xmi:type="position:Position" xmi:id="154" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="56" endOffset="963" startColumn="14" endLine="56" endColumn="16" startOffset="961" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="155" value="true">
        <position xmi:type="position:Position" xmi:id="156" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="57" endOffset="981" startColumn="9" endLine="57" endColumn="15" startOffset="975" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="157">
          <position xmi:type="position:Position" xmi:id="158" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="57" endOffset="981" startColumn="9" endLine="57" endColumn="15" startOffset="975" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="159" target="171">
        <position xmi:type="position:Position" xmi:id="160" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="58" endOffset="1004" startColumn="9" endLine="58" endColumn="12" startOffset="1001" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="161">
          <position xmi:type="position:Position" xmi:id="162" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="58" endOffset="1012" startColumn="14" endLine="58" endColumn="20" startOffset="1006" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="163" event="149">
            <position xmi:type="position:Position" xmi:id="164" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="58" endOffset="1012" startColumn="14" endLine="58" endColumn="20" startOffset="1006" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="165">
              <position xmi:type="position:Position" xmi:id="166" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="58" endOffset="1012" startColumn="14" endLine="58" endColumn="20" startOffset="1006" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="167" value="true">
        <position xmi:type="position:Position" xmi:id="168" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="57" endOffset="989" startColumn="18" endLine="57" endColumn="23" startOffset="984" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="169">
          <position xmi:type="position:Position" xmi:id="170" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="57" endOffset="989" startColumn="18" endLine="57" endColumn="23" startOffset="984" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="171" name="on">
      <position xmi:type="position:Position" xmi:id="172" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="60" endOffset="1040" startColumn="14" endLine="60" endColumn="15" startOffset="1039" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="173" target="153">
        <position xmi:type="position:Position" xmi:id="174" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="61" endOffset="1055" startColumn="9" endLine="61" endColumn="12" startOffset="1052" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="175">
          <position xmi:type="position:Position" xmi:id="176" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="61" endOffset="1064" startColumn="14" endLine="61" endColumn="21" startOffset="1057" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="177" event="151">
            <position xmi:type="position:Position" xmi:id="178" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="61" endOffset="1064" startColumn="14" endLine="61" endColumn="21" startOffset="1057" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="179">
              <position xmi:type="position:Position" xmi:id="180" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="61" endOffset="1064" startColumn="14" endLine="61" endColumn="21" startOffset="1057" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="181" name="mill">
    <position xmi:type="position:Position" xmi:id="182" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="66" endOffset="1101" startColumn="11" endLine="66" endColumn="14" startOffset="1098" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="183" name="turn_on" controllable="true">
      <position xmi:type="position:Position" xmi:id="184" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="67" endOffset="1134" startColumn="24" endLine="67" endColumn="30" startOffset="1128" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="185" name="turn_off" controllable="true">
      <position xmi:type="position:Position" xmi:id="186" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="67" endOffset="1144" startColumn="33" endLine="67" endColumn="40" startOffset="1137" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="187" name="off">
      <position xmi:type="position:Position" xmi:id="188" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="69" endOffset="1165" startColumn="14" endLine="69" endColumn="16" startOffset="1163" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="189" value="true">
        <position xmi:type="position:Position" xmi:id="190" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="70" endOffset="1183" startColumn="9" endLine="70" endColumn="15" startOffset="1177" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="191">
          <position xmi:type="position:Position" xmi:id="192" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="70" endOffset="1183" startColumn="9" endLine="70" endColumn="15" startOffset="1177" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="193" target="205">
        <position xmi:type="position:Position" xmi:id="194" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="71" endOffset="1206" startColumn="9" endLine="71" endColumn="12" startOffset="1203" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="195">
          <position xmi:type="position:Position" xmi:id="196" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="71" endOffset="1214" startColumn="14" endLine="71" endColumn="20" startOffset="1208" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="197" event="183">
            <position xmi:type="position:Position" xmi:id="198" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="71" endOffset="1214" startColumn="14" endLine="71" endColumn="20" startOffset="1208" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="199">
              <position xmi:type="position:Position" xmi:id="200" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="71" endOffset="1214" startColumn="14" endLine="71" endColumn="20" startOffset="1208" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="201" value="true">
        <position xmi:type="position:Position" xmi:id="202" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="70" endOffset="1191" startColumn="18" endLine="70" endColumn="23" startOffset="1186" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="203">
          <position xmi:type="position:Position" xmi:id="204" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="70" endOffset="1191" startColumn="18" endLine="70" endColumn="23" startOffset="1186" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="205" name="on">
      <position xmi:type="position:Position" xmi:id="206" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="73" endOffset="1242" startColumn="14" endLine="73" endColumn="15" startOffset="1241" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="207" target="187">
        <position xmi:type="position:Position" xmi:id="208" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="74" endOffset="1257" startColumn="9" endLine="74" endColumn="12" startOffset="1254" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="209">
          <position xmi:type="position:Position" xmi:id="210" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="74" endOffset="1266" startColumn="14" endLine="74" endColumn="21" startOffset="1259" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="211" event="185">
            <position xmi:type="position:Position" xmi:id="212" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="74" endOffset="1266" startColumn="14" endLine="74" endColumn="21" startOffset="1259" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="213">
              <position xmi:type="position:Position" xmi:id="214" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="74" endOffset="1266" startColumn="14" endLine="74" endColumn="21" startOffset="1259" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="215" name="polishing_tool">
    <position xmi:type="position:Position" xmi:id="216" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="80" endOffset="1315" startColumn="11" endLine="80" endColumn="24" startOffset="1302" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="217" name="turn_on" controllable="true">
      <position xmi:type="position:Position" xmi:id="218" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="81" endOffset="1348" startColumn="24" endLine="81" endColumn="30" startOffset="1342" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="219" name="turn_off" controllable="true">
      <position xmi:type="position:Position" xmi:id="220" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="81" endOffset="1358" startColumn="33" endLine="81" endColumn="40" startOffset="1351" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="221" name="off">
      <position xmi:type="position:Position" xmi:id="222" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="83" endOffset="1379" startColumn="14" endLine="83" endColumn="16" startOffset="1377" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="223" value="true">
        <position xmi:type="position:Position" xmi:id="224" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="84" endOffset="1397" startColumn="9" endLine="84" endColumn="15" startOffset="1391" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="225">
          <position xmi:type="position:Position" xmi:id="226" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="84" endOffset="1397" startColumn="9" endLine="84" endColumn="15" startOffset="1391" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="227" target="239">
        <position xmi:type="position:Position" xmi:id="228" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="85" endOffset="1420" startColumn="9" endLine="85" endColumn="12" startOffset="1417" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="229">
          <position xmi:type="position:Position" xmi:id="230" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="85" endOffset="1428" startColumn="14" endLine="85" endColumn="20" startOffset="1422" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="231" event="217">
            <position xmi:type="position:Position" xmi:id="232" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="85" endOffset="1428" startColumn="14" endLine="85" endColumn="20" startOffset="1422" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="233">
              <position xmi:type="position:Position" xmi:id="234" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="85" endOffset="1428" startColumn="14" endLine="85" endColumn="20" startOffset="1422" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="235" value="true">
        <position xmi:type="position:Position" xmi:id="236" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="84" endOffset="1405" startColumn="18" endLine="84" endColumn="23" startOffset="1400" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="237">
          <position xmi:type="position:Position" xmi:id="238" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="84" endOffset="1405" startColumn="18" endLine="84" endColumn="23" startOffset="1400" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="239" name="on">
      <position xmi:type="position:Position" xmi:id="240" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="87" endOffset="1456" startColumn="14" endLine="87" endColumn="15" startOffset="1455" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="241" target="221">
        <position xmi:type="position:Position" xmi:id="242" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="88" endOffset="1471" startColumn="9" endLine="88" endColumn="12" startOffset="1468" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="243">
          <position xmi:type="position:Position" xmi:id="244" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="88" endOffset="1480" startColumn="14" endLine="88" endColumn="21" startOffset="1473" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="245" event="219">
            <position xmi:type="position:Position" xmi:id="246" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="88" endOffset="1480" startColumn="14" endLine="88" endColumn="21" startOffset="1473" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="247">
              <position xmi:type="position:Position" xmi:id="248" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="88" endOffset="1480" startColumn="14" endLine="88" endColumn="21" startOffset="1473" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="249" name="machine_tool_controller">
    <position xmi:type="position:Position" xmi:id="250" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="95" endOffset="1689" startColumn="11" endLine="95" endColumn="33" startOffset="1667" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    <locations xmi:type="automata:Location" xmi:id="251" name="notAllowed">
      <position xmi:type="position:Position" xmi:id="252" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="96" endOffset="1715" startColumn="14" endLine="96" endColumn="23" startOffset="1706" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="253" value="true">
        <position xmi:type="position:Position" xmi:id="254" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="97" endOffset="1733" startColumn="9" endLine="97" endColumn="15" startOffset="1727" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="255">
          <position xmi:type="position:Position" xmi:id="256" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="97" endOffset="1733" startColumn="9" endLine="97" endColumn="15" startOffset="1727" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="257" target="269">
        <position xmi:type="position:Position" xmi:id="258" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="98" endOffset="1755" startColumn="9" endLine="98" endColumn="12" startOffset="1752" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="259">
          <position xmi:type="position:Position" xmi:id="260" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="98" endOffset="1779" startColumn="14" endLine="98" endColumn="36" startOffset="1757" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="261" event="39">
            <position xmi:type="position:Position" xmi:id="262" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="98" endOffset="1779" startColumn="14" endLine="98" endColumn="36" startOffset="1757" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="263">
              <position xmi:type="position:Position" xmi:id="264" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="98" endOffset="1779" startColumn="14" endLine="98" endColumn="36" startOffset="1757" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="265" value="true">
        <position xmi:type="position:Position" xmi:id="266" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="97" endOffset="1740" startColumn="17" endLine="97" endColumn="22" startOffset="1735" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="267">
          <position xmi:type="position:Position" xmi:id="268" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="97" endOffset="1740" startColumn="17" endLine="97" endColumn="22" startOffset="1735" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="269" name="allowed">
      <position xmi:type="position:Position" xmi:id="270" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="100" endOffset="1817" startColumn="14" endLine="100" endColumn="20" startOffset="1811" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="271" target="251">
        <position xmi:type="position:Position" xmi:id="272" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1832" startColumn="9" endLine="101" endColumn="12" startOffset="1829" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="273">
          <position xmi:type="position:Position" xmi:id="274" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1854" startColumn="14" endLine="101" endColumn="34" startOffset="1834" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="275" event="41">
            <position xmi:type="position:Position" xmi:id="276" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1854" startColumn="14" endLine="101" endColumn="34" startOffset="1834" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="277">
              <position xmi:type="position:Position" xmi:id="278" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1854" startColumn="14" endLine="101" endColumn="34" startOffset="1834" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="279" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="280" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1886" startColumn="64" endLine="101" endColumn="66" startOffset="1884" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <type xmi:type="types:BoolType" xmi:id="281">
            <position xmi:type="position:Position" xmi:id="282" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1886" startColumn="64" endLine="101" endColumn="66" startOffset="1884" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="283" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="284" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1872" startColumn="50" endLine="101" endColumn="52" startOffset="1870" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="285">
              <position xmi:type="position:Position" xmi:id="286" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1872" startColumn="50" endLine="101" endColumn="52" startOffset="1870" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
            <left xmi:type="expressions:LocationExpression" xmi:id="287" location="187">
              <position xmi:type="position:Position" xmi:id="288" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1868" startColumn="41" endLine="101" endColumn="48" startOffset="1861" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="289">
                <position xmi:type="position:Position" xmi:id="290" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1868" startColumn="41" endLine="101" endColumn="48" startOffset="1861" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="291" location="153">
              <position xmi:type="position:Position" xmi:id="292" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1882" startColumn="54" endLine="101" endColumn="62" startOffset="1874" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="293">
                <position xmi:type="position:Position" xmi:id="294" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1882" startColumn="54" endLine="101" endColumn="62" startOffset="1874" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="295" location="221">
            <position xmi:type="position:Position" xmi:id="296" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1905" startColumn="68" endLine="101" endColumn="85" startOffset="1888" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="297">
              <position xmi:type="position:Position" xmi:id="298" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="101" endOffset="1905" startColumn="68" endLine="101" endColumn="85" startOffset="1888" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="299">
        <position xmi:type="position:Position" xmi:id="300" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="102" endOffset="1936" startColumn="9" endLine="102" endColumn="12" startOffset="1933" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="301">
          <position xmi:type="position:Position" xmi:id="302" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="102" endOffset="1949" startColumn="14" endLine="102" endColumn="25" startOffset="1938" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="303" event="183">
            <position xmi:type="position:Position" xmi:id="304" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="102" endOffset="1949" startColumn="14" endLine="102" endColumn="25" startOffset="1938" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="305">
              <position xmi:type="position:Position" xmi:id="306" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="102" endOffset="1949" startColumn="14" endLine="102" endColumn="25" startOffset="1938" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="307">
        <position xmi:type="position:Position" xmi:id="308" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="103" endOffset="1964" startColumn="9" endLine="103" endColumn="12" startOffset="1961" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="309">
          <position xmi:type="position:Position" xmi:id="310" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="103" endOffset="1978" startColumn="14" endLine="103" endColumn="26" startOffset="1966" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="311" event="149">
            <position xmi:type="position:Position" xmi:id="312" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="103" endOffset="1978" startColumn="14" endLine="103" endColumn="26" startOffset="1966" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="313">
              <position xmi:type="position:Position" xmi:id="314" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="103" endOffset="1978" startColumn="14" endLine="103" endColumn="26" startOffset="1966" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="315">
        <position xmi:type="position:Position" xmi:id="316" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="104" endOffset="1993" startColumn="9" endLine="104" endColumn="12" startOffset="1990" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="317">
          <position xmi:type="position:Position" xmi:id="318" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="104" endOffset="2016" startColumn="14" endLine="104" endColumn="35" startOffset="1995" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="319" event="217">
            <position xmi:type="position:Position" xmi:id="320" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="104" endOffset="2016" startColumn="14" endLine="104" endColumn="35" startOffset="1995" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="321">
              <position xmi:type="position:Position" xmi:id="322" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="104" endOffset="2016" startColumn="14" endLine="104" endColumn="35" startOffset="1995" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="323" name="machine_stand_controller">
    <position xmi:type="position:Position" xmi:id="324" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="110" endOffset="2156" startColumn="11" endLine="110" endColumn="34" startOffset="2133" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    <locations xmi:type="automata:Location" xmi:id="325">
      <position xmi:type="position:Position" xmi:id="326" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="111" endOffset="2171" startColumn="5" endLine="111" endColumn="12" startOffset="2164" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="327" value="true">
        <position xmi:type="position:Position" xmi:id="328" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="112" endOffset="2189" startColumn="9" endLine="112" endColumn="15" startOffset="2183" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="329">
          <position xmi:type="position:Position" xmi:id="330" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="112" endOffset="2189" startColumn="9" endLine="112" endColumn="15" startOffset="2183" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="331">
        <position xmi:type="position:Position" xmi:id="332" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="113" endOffset="2211" startColumn="9" endLine="113" endColumn="12" startOffset="2208" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="333">
          <position xmi:type="position:Position" xmi:id="334" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="113" endOffset="2235" startColumn="14" endLine="113" endColumn="36" startOffset="2213" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="335" event="39">
            <position xmi:type="position:Position" xmi:id="336" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="113" endOffset="2235" startColumn="14" endLine="113" endColumn="36" startOffset="2213" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="337">
              <position xmi:type="position:Position" xmi:id="338" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="113" endOffset="2235" startColumn="14" endLine="113" endColumn="36" startOffset="2213" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:LocationExpression" xmi:id="339" location="27">
          <position xmi:type="position:Position" xmi:id="340" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="113" endOffset="2264" startColumn="43" endLine="113" endColumn="65" startOffset="2242" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <type xmi:type="types:BoolType" xmi:id="341">
            <position xmi:type="position:Position" xmi:id="342" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="113" endOffset="2264" startColumn="43" endLine="113" endColumn="65" startOffset="2242" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          </type>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="343">
        <position xmi:type="position:Position" xmi:id="344" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="114" endOffset="2279" startColumn="9" endLine="114" endColumn="12" startOffset="2276" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="345">
          <position xmi:type="position:Position" xmi:id="346" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="114" endOffset="2300" startColumn="14" endLine="114" endColumn="33" startOffset="2281" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="347" event="7">
            <position xmi:type="position:Position" xmi:id="348" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="114" endOffset="2300" startColumn="14" endLine="114" endColumn="33" startOffset="2281" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="349">
              <position xmi:type="position:Position" xmi:id="350" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="114" endOffset="2300" startColumn="14" endLine="114" endColumn="33" startOffset="2281" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:LocationExpression" xmi:id="351" location="43">
          <position xmi:type="position:Position" xmi:id="352" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="114" endOffset="2322" startColumn="40" endLine="114" endColumn="55" startOffset="2307" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <type xmi:type="types:BoolType" xmi:id="353">
            <position xmi:type="position:Position" xmi:id="354" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="114" endOffset="2322" startColumn="40" endLine="114" endColumn="55" startOffset="2307" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          </type>
        </guards>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="355" value="true">
        <position xmi:type="position:Position" xmi:id="356" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="112" endOffset="2196" startColumn="17" endLine="112" endColumn="22" startOffset="2191" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="357">
          <position xmi:type="position:Position" xmi:id="358" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="112" endOffset="2196" startColumn="17" endLine="112" endColumn="22" startOffset="2191" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="359" name="machine_head_controller">
    <position xmi:type="position:Position" xmi:id="360" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="118" endOffset="2471" startColumn="11" endLine="118" endColumn="33" startOffset="2449" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
    <locations xmi:type="automata:Location" xmi:id="361">
      <position xmi:type="position:Position" xmi:id="362" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="119" endOffset="2486" startColumn="5" endLine="119" endColumn="12" startOffset="2479" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="363" value="true">
        <position xmi:type="position:Position" xmi:id="364" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="120" endOffset="2504" startColumn="9" endLine="120" endColumn="15" startOffset="2498" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="365">
          <position xmi:type="position:Position" xmi:id="366" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="120" endOffset="2504" startColumn="9" endLine="120" endColumn="15" startOffset="2498" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="367">
        <position xmi:type="position:Position" xmi:id="368" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="121" endOffset="2526" startColumn="9" endLine="121" endColumn="12" startOffset="2523" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="369">
          <position xmi:type="position:Position" xmi:id="370" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="121" endOffset="2539" startColumn="14" endLine="121" endColumn="25" startOffset="2528" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="371" event="183">
            <position xmi:type="position:Position" xmi:id="372" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="121" endOffset="2539" startColumn="14" endLine="121" endColumn="25" startOffset="2528" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="373">
              <position xmi:type="position:Position" xmi:id="374" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="121" endOffset="2539" startColumn="14" endLine="121" endColumn="25" startOffset="2528" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:LocationExpression" xmi:id="375" location="103">
          <position xmi:type="position:Position" xmi:id="376" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="121" endOffset="2561" startColumn="32" endLine="121" endColumn="47" startOffset="2546" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <type xmi:type="types:BoolType" xmi:id="377">
            <position xmi:type="position:Position" xmi:id="378" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="121" endOffset="2561" startColumn="32" endLine="121" endColumn="47" startOffset="2546" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          </type>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="379">
        <position xmi:type="position:Position" xmi:id="380" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="122" endOffset="2576" startColumn="9" endLine="122" endColumn="12" startOffset="2573" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="381">
          <position xmi:type="position:Position" xmi:id="382" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="122" endOffset="2590" startColumn="14" endLine="122" endColumn="26" startOffset="2578" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="383" event="149">
            <position xmi:type="position:Position" xmi:id="384" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="122" endOffset="2590" startColumn="14" endLine="122" endColumn="26" startOffset="2578" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="385">
              <position xmi:type="position:Position" xmi:id="386" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="122" endOffset="2590" startColumn="14" endLine="122" endColumn="26" startOffset="2578" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:LocationExpression" xmi:id="387" location="85">
          <position xmi:type="position:Position" xmi:id="388" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="122" endOffset="2612" startColumn="33" endLine="122" endColumn="48" startOffset="2597" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <type xmi:type="types:BoolType" xmi:id="389">
            <position xmi:type="position:Position" xmi:id="390" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="122" endOffset="2612" startColumn="33" endLine="122" endColumn="48" startOffset="2597" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          </type>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="391">
        <position xmi:type="position:Position" xmi:id="392" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="123" endOffset="2627" startColumn="9" endLine="123" endColumn="12" startOffset="2624" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="393">
          <position xmi:type="position:Position" xmi:id="394" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="123" endOffset="2650" startColumn="14" endLine="123" endColumn="35" startOffset="2629" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="395" event="217">
            <position xmi:type="position:Position" xmi:id="396" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="123" endOffset="2650" startColumn="14" endLine="123" endColumn="35" startOffset="2629" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="397">
              <position xmi:type="position:Position" xmi:id="398" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="123" endOffset="2650" startColumn="14" endLine="123" endColumn="35" startOffset="2629" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:LocationExpression" xmi:id="399" location="129">
          <position xmi:type="position:Position" xmi:id="400" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="123" endOffset="2672" startColumn="42" endLine="123" endColumn="57" startOffset="2657" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <type xmi:type="types:BoolType" xmi:id="401">
            <position xmi:type="position:Position" xmi:id="402" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="123" endOffset="2672" startColumn="42" endLine="123" endColumn="57" startOffset="2657" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          </type>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="403">
        <position xmi:type="position:Position" xmi:id="404" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2687" startColumn="9" endLine="124" endColumn="12" startOffset="2684" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="405">
          <position xmi:type="position:Position" xmi:id="406" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2704" startColumn="14" endLine="124" endColumn="29" startOffset="2689" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="407" event="73">
            <position xmi:type="position:Position" xmi:id="408" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2704" startColumn="14" endLine="124" endColumn="29" startOffset="2689" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="409">
              <position xmi:type="position:Position" xmi:id="410" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2704" startColumn="14" endLine="124" endColumn="29" startOffset="2689" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="411" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="412" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2759" startColumn="82" endLine="124" endColumn="84" startOffset="2757" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <type xmi:type="types:BoolType" xmi:id="413">
            <position xmi:type="position:Position" xmi:id="414" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2759" startColumn="82" endLine="124" endColumn="84" startOffset="2757" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="415" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="416" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2736" startColumn="59" endLine="124" endColumn="61" startOffset="2734" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="417">
              <position xmi:type="position:Position" xmi:id="418" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2736" startColumn="59" endLine="124" endColumn="61" startOffset="2734" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="419" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="420" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2722" startColumn="45" endLine="124" endColumn="47" startOffset="2720" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="421">
                <position xmi:type="position:Position" xmi:id="422" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2722" startColumn="45" endLine="124" endColumn="47" startOffset="2720" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="423" location="187">
                <position xmi:type="position:Position" xmi:id="424" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2718" startColumn="36" endLine="124" endColumn="43" startOffset="2711" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                <type xmi:type="types:BoolType" xmi:id="425">
                  <position xmi:type="position:Position" xmi:id="426" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2718" startColumn="36" endLine="124" endColumn="43" startOffset="2711" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="427" location="153">
                <position xmi:type="position:Position" xmi:id="428" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2732" startColumn="49" endLine="124" endColumn="57" startOffset="2724" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                <type xmi:type="types:BoolType" xmi:id="429">
                  <position xmi:type="position:Position" xmi:id="430" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2732" startColumn="49" endLine="124" endColumn="57" startOffset="2724" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="431" location="221">
              <position xmi:type="position:Position" xmi:id="432" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2755" startColumn="63" endLine="124" endColumn="80" startOffset="2738" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="433">
                <position xmi:type="position:Position" xmi:id="434" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2755" startColumn="63" endLine="124" endColumn="80" startOffset="2738" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="435" location="43">
            <position xmi:type="position:Position" xmi:id="436" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2776" startColumn="86" endLine="124" endColumn="101" startOffset="2761" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="437">
              <position xmi:type="position:Position" xmi:id="438" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="124" endOffset="2776" startColumn="86" endLine="124" endColumn="101" startOffset="2761" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="439">
        <position xmi:type="position:Position" xmi:id="440" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2791" startColumn="9" endLine="125" endColumn="12" startOffset="2788" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="441">
          <position xmi:type="position:Position" xmi:id="442" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2808" startColumn="14" endLine="125" endColumn="29" startOffset="2793" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="443" event="77">
            <position xmi:type="position:Position" xmi:id="444" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2808" startColumn="14" endLine="125" endColumn="29" startOffset="2793" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="445">
              <position xmi:type="position:Position" xmi:id="446" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2808" startColumn="14" endLine="125" endColumn="29" startOffset="2793" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="447" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="448" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2863" startColumn="82" endLine="125" endColumn="84" startOffset="2861" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <type xmi:type="types:BoolType" xmi:id="449">
            <position xmi:type="position:Position" xmi:id="450" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2863" startColumn="82" endLine="125" endColumn="84" startOffset="2861" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="451" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="452" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2840" startColumn="59" endLine="125" endColumn="61" startOffset="2838" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="453">
              <position xmi:type="position:Position" xmi:id="454" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2840" startColumn="59" endLine="125" endColumn="61" startOffset="2838" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="455" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="456" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2826" startColumn="45" endLine="125" endColumn="47" startOffset="2824" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="457">
                <position xmi:type="position:Position" xmi:id="458" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2826" startColumn="45" endLine="125" endColumn="47" startOffset="2824" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="459" location="187">
                <position xmi:type="position:Position" xmi:id="460" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2822" startColumn="36" endLine="125" endColumn="43" startOffset="2815" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                <type xmi:type="types:BoolType" xmi:id="461">
                  <position xmi:type="position:Position" xmi:id="462" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2822" startColumn="36" endLine="125" endColumn="43" startOffset="2815" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="463" location="153">
                <position xmi:type="position:Position" xmi:id="464" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2836" startColumn="49" endLine="125" endColumn="57" startOffset="2828" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                <type xmi:type="types:BoolType" xmi:id="465">
                  <position xmi:type="position:Position" xmi:id="466" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2836" startColumn="49" endLine="125" endColumn="57" startOffset="2828" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="467" location="221">
              <position xmi:type="position:Position" xmi:id="468" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2859" startColumn="63" endLine="125" endColumn="80" startOffset="2842" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="469">
                <position xmi:type="position:Position" xmi:id="470" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2859" startColumn="63" endLine="125" endColumn="80" startOffset="2842" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="471" location="43">
            <position xmi:type="position:Position" xmi:id="472" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2880" startColumn="86" endLine="125" endColumn="101" startOffset="2865" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="473">
              <position xmi:type="position:Position" xmi:id="474" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="125" endOffset="2880" startColumn="86" endLine="125" endColumn="101" startOffset="2865" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="475">
        <position xmi:type="position:Position" xmi:id="476" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2895" startColumn="9" endLine="126" endColumn="12" startOffset="2892" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="477">
          <position xmi:type="position:Position" xmi:id="478" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2912" startColumn="14" endLine="126" endColumn="29" startOffset="2897" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="479" event="75">
            <position xmi:type="position:Position" xmi:id="480" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2912" startColumn="14" endLine="126" endColumn="29" startOffset="2897" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="481">
              <position xmi:type="position:Position" xmi:id="482" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2912" startColumn="14" endLine="126" endColumn="29" startOffset="2897" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="483" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="484" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2967" startColumn="82" endLine="126" endColumn="84" startOffset="2965" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <type xmi:type="types:BoolType" xmi:id="485">
            <position xmi:type="position:Position" xmi:id="486" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2967" startColumn="82" endLine="126" endColumn="84" startOffset="2965" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="487" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="488" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2944" startColumn="59" endLine="126" endColumn="61" startOffset="2942" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="489">
              <position xmi:type="position:Position" xmi:id="490" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2944" startColumn="59" endLine="126" endColumn="61" startOffset="2942" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="491" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="492" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2930" startColumn="45" endLine="126" endColumn="47" startOffset="2928" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="493">
                <position xmi:type="position:Position" xmi:id="494" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2930" startColumn="45" endLine="126" endColumn="47" startOffset="2928" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="495" location="187">
                <position xmi:type="position:Position" xmi:id="496" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2926" startColumn="36" endLine="126" endColumn="43" startOffset="2919" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                <type xmi:type="types:BoolType" xmi:id="497">
                  <position xmi:type="position:Position" xmi:id="498" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2926" startColumn="36" endLine="126" endColumn="43" startOffset="2919" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="499" location="153">
                <position xmi:type="position:Position" xmi:id="500" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2940" startColumn="49" endLine="126" endColumn="57" startOffset="2932" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                <type xmi:type="types:BoolType" xmi:id="501">
                  <position xmi:type="position:Position" xmi:id="502" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2940" startColumn="49" endLine="126" endColumn="57" startOffset="2932" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="503" location="221">
              <position xmi:type="position:Position" xmi:id="504" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2963" startColumn="63" endLine="126" endColumn="80" startOffset="2946" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="505">
                <position xmi:type="position:Position" xmi:id="506" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2963" startColumn="63" endLine="126" endColumn="80" startOffset="2946" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="507" location="43">
            <position xmi:type="position:Position" xmi:id="508" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2984" startColumn="86" endLine="126" endColumn="101" startOffset="2969" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="509">
              <position xmi:type="position:Position" xmi:id="510" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="126" endOffset="2984" startColumn="86" endLine="126" endColumn="101" startOffset="2969" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="511">
        <position xmi:type="position:Position" xmi:id="512" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="2999" startColumn="9" endLine="127" endColumn="12" startOffset="2996" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="513">
          <position xmi:type="position:Position" xmi:id="514" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3016" startColumn="14" endLine="127" endColumn="29" startOffset="3001" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="515" event="83">
            <position xmi:type="position:Position" xmi:id="516" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3016" startColumn="14" endLine="127" endColumn="29" startOffset="3001" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="517">
              <position xmi:type="position:Position" xmi:id="518" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3016" startColumn="14" endLine="127" endColumn="29" startOffset="3001" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="519" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="520" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3071" startColumn="82" endLine="127" endColumn="84" startOffset="3069" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <type xmi:type="types:BoolType" xmi:id="521">
            <position xmi:type="position:Position" xmi:id="522" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3071" startColumn="82" endLine="127" endColumn="84" startOffset="3069" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="523" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="524" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3048" startColumn="59" endLine="127" endColumn="61" startOffset="3046" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="525">
              <position xmi:type="position:Position" xmi:id="526" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3048" startColumn="59" endLine="127" endColumn="61" startOffset="3046" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="527" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="528" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3034" startColumn="45" endLine="127" endColumn="47" startOffset="3032" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="529">
                <position xmi:type="position:Position" xmi:id="530" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3034" startColumn="45" endLine="127" endColumn="47" startOffset="3032" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="531" location="187">
                <position xmi:type="position:Position" xmi:id="532" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3030" startColumn="36" endLine="127" endColumn="43" startOffset="3023" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                <type xmi:type="types:BoolType" xmi:id="533">
                  <position xmi:type="position:Position" xmi:id="534" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3030" startColumn="36" endLine="127" endColumn="43" startOffset="3023" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="535" location="153">
                <position xmi:type="position:Position" xmi:id="536" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3044" startColumn="49" endLine="127" endColumn="57" startOffset="3036" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                <type xmi:type="types:BoolType" xmi:id="537">
                  <position xmi:type="position:Position" xmi:id="538" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3044" startColumn="49" endLine="127" endColumn="57" startOffset="3036" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="539" location="221">
              <position xmi:type="position:Position" xmi:id="540" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3067" startColumn="63" endLine="127" endColumn="80" startOffset="3050" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="541">
                <position xmi:type="position:Position" xmi:id="542" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3067" startColumn="63" endLine="127" endColumn="80" startOffset="3050" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="543" location="43">
            <position xmi:type="position:Position" xmi:id="544" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3088" startColumn="86" endLine="127" endColumn="101" startOffset="3073" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="545">
              <position xmi:type="position:Position" xmi:id="546" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="127" endOffset="3088" startColumn="86" endLine="127" endColumn="101" startOffset="3073" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="547">
        <position xmi:type="position:Position" xmi:id="548" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3103" startColumn="9" endLine="128" endColumn="12" startOffset="3100" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="549">
          <position xmi:type="position:Position" xmi:id="550" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3120" startColumn="14" endLine="128" endColumn="29" startOffset="3105" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="551" event="81">
            <position xmi:type="position:Position" xmi:id="552" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3120" startColumn="14" endLine="128" endColumn="29" startOffset="3105" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="553">
              <position xmi:type="position:Position" xmi:id="554" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3120" startColumn="14" endLine="128" endColumn="29" startOffset="3105" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="555" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="556" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3175" startColumn="82" endLine="128" endColumn="84" startOffset="3173" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <type xmi:type="types:BoolType" xmi:id="557">
            <position xmi:type="position:Position" xmi:id="558" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3175" startColumn="82" endLine="128" endColumn="84" startOffset="3173" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="559" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="560" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3152" startColumn="59" endLine="128" endColumn="61" startOffset="3150" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="561">
              <position xmi:type="position:Position" xmi:id="562" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3152" startColumn="59" endLine="128" endColumn="61" startOffset="3150" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="563" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="564" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3138" startColumn="45" endLine="128" endColumn="47" startOffset="3136" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="565">
                <position xmi:type="position:Position" xmi:id="566" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3138" startColumn="45" endLine="128" endColumn="47" startOffset="3136" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="567" location="187">
                <position xmi:type="position:Position" xmi:id="568" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3134" startColumn="36" endLine="128" endColumn="43" startOffset="3127" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                <type xmi:type="types:BoolType" xmi:id="569">
                  <position xmi:type="position:Position" xmi:id="570" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3134" startColumn="36" endLine="128" endColumn="43" startOffset="3127" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="571" location="153">
                <position xmi:type="position:Position" xmi:id="572" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3148" startColumn="49" endLine="128" endColumn="57" startOffset="3140" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                <type xmi:type="types:BoolType" xmi:id="573">
                  <position xmi:type="position:Position" xmi:id="574" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3148" startColumn="49" endLine="128" endColumn="57" startOffset="3140" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="575" location="221">
              <position xmi:type="position:Position" xmi:id="576" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3171" startColumn="63" endLine="128" endColumn="80" startOffset="3154" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="577">
                <position xmi:type="position:Position" xmi:id="578" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3171" startColumn="63" endLine="128" endColumn="80" startOffset="3154" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="579" location="43">
            <position xmi:type="position:Position" xmi:id="580" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3192" startColumn="86" endLine="128" endColumn="101" startOffset="3177" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="581">
              <position xmi:type="position:Position" xmi:id="582" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="128" endOffset="3192" startColumn="86" endLine="128" endColumn="101" startOffset="3177" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="583">
        <position xmi:type="position:Position" xmi:id="584" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3207" startColumn="9" endLine="129" endColumn="12" startOffset="3204" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="585">
          <position xmi:type="position:Position" xmi:id="586" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3224" startColumn="14" endLine="129" endColumn="29" startOffset="3209" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="587" event="79">
            <position xmi:type="position:Position" xmi:id="588" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3224" startColumn="14" endLine="129" endColumn="29" startOffset="3209" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="589">
              <position xmi:type="position:Position" xmi:id="590" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3224" startColumn="14" endLine="129" endColumn="29" startOffset="3209" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="591" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="592" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3279" startColumn="82" endLine="129" endColumn="84" startOffset="3277" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          <type xmi:type="types:BoolType" xmi:id="593">
            <position xmi:type="position:Position" xmi:id="594" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3279" startColumn="82" endLine="129" endColumn="84" startOffset="3277" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="595" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="596" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3256" startColumn="59" endLine="129" endColumn="61" startOffset="3254" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="597">
              <position xmi:type="position:Position" xmi:id="598" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3256" startColumn="59" endLine="129" endColumn="61" startOffset="3254" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="599" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="600" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3242" startColumn="45" endLine="129" endColumn="47" startOffset="3240" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="601">
                <position xmi:type="position:Position" xmi:id="602" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3242" startColumn="45" endLine="129" endColumn="47" startOffset="3240" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="603" location="187">
                <position xmi:type="position:Position" xmi:id="604" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3238" startColumn="36" endLine="129" endColumn="43" startOffset="3231" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                <type xmi:type="types:BoolType" xmi:id="605">
                  <position xmi:type="position:Position" xmi:id="606" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3238" startColumn="36" endLine="129" endColumn="43" startOffset="3231" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="607" location="153">
                <position xmi:type="position:Position" xmi:id="608" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3252" startColumn="49" endLine="129" endColumn="57" startOffset="3244" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                <type xmi:type="types:BoolType" xmi:id="609">
                  <position xmi:type="position:Position" xmi:id="610" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3252" startColumn="49" endLine="129" endColumn="57" startOffset="3244" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="611" location="221">
              <position xmi:type="position:Position" xmi:id="612" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3275" startColumn="63" endLine="129" endColumn="80" startOffset="3258" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              <type xmi:type="types:BoolType" xmi:id="613">
                <position xmi:type="position:Position" xmi:id="614" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3275" startColumn="63" endLine="129" endColumn="80" startOffset="3258" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="615" location="43">
            <position xmi:type="position:Position" xmi:id="616" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3296" startColumn="86" endLine="129" endColumn="101" startOffset="3281" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            <type xmi:type="types:BoolType" xmi:id="617">
              <position xmi:type="position:Position" xmi:id="618" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="129" endOffset="3296" startColumn="86" endLine="129" endColumn="101" startOffset="3281" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="619" value="true">
        <position xmi:type="position:Position" xmi:id="620" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="120" endOffset="2511" startColumn="17" endLine="120" endColumn="22" startOffset="2506" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        <type xmi:type="types:BoolType" xmi:id="621">
          <position xmi:type="position:Position" xmi:id="622" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif&quot;: " startLine="120" endOffset="2511" startColumn="17" endLine="120" endColumn="22" startOffset="2506" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\chapter_3_networks\machine_router_met_simulator.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
</cif:Specification>
`;
const eventMap = ['conveyor.product_in', 'conveyor.product_out', 'drill.turn_off', 'drill.turn_on', 'machine_head.D_M', 'machine_head.D_P', 'machine_head.M_D', 'machine_head.M_P', 'machine_head.P_D', 'machine_head.P_M', 'machine_stand.move_down', 'machine_stand.move_up', 'mill.turn_off', 'mill.turn_on', 'polishing_tool.turn_off', 'polishing_tool.turn_on'];
