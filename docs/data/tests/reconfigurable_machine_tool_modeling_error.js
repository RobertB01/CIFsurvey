const xml_reconfigurable_machine_tool_modeling_error = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
  <components xmi:type="automata:Automaton" xmi:id="3" name="conveyor">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="1" endOffset="17" startColumn="11" endLine="1" endColumn="18" startOffset="10" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="5" name="enterConveyor" controllable="false">
      <position xmi:type="position:Position" xmi:id="6" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="2" endOffset="50" startColumn="18" endLine="2" endColumn="30" startOffset="38" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="7" name="leaveConveyor" controllable="false">
      <position xmi:type="position:Position" xmi:id="8" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="3" endOffset="83" startColumn="18" endLine="3" endColumn="30" startOffset="71" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="9" name="noProduct">
      <position xmi:type="position:Position" xmi:id="10" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="4" endOffset="106" startColumn="12" endLine="4" endColumn="20" startOffset="98" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="11" value="true">
        <position xmi:type="position:Position" xmi:id="12" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="5" endOffset="120" startColumn="5" endLine="5" endColumn="11" startOffset="114" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="13">
          <position xmi:type="position:Position" xmi:id="14" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="5" endOffset="120" startColumn="5" endLine="5" endColumn="11" startOffset="114" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="15" target="27">
        <position xmi:type="position:Position" xmi:id="16" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="7" endOffset="144" startColumn="5" endLine="7" endColumn="8" startOffset="141" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="17">
          <position xmi:type="position:Position" xmi:id="18" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="7" endOffset="158" startColumn="10" endLine="7" endColumn="22" startOffset="146" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="19" event="5">
            <position xmi:type="position:Position" xmi:id="20" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="7" endOffset="158" startColumn="10" endLine="7" endColumn="22" startOffset="146" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="21">
              <position xmi:type="position:Position" xmi:id="22" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="7" endOffset="158" startColumn="10" endLine="7" endColumn="22" startOffset="146" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="23" value="true">
        <position xmi:type="position:Position" xmi:id="24" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="6" endOffset="133" startColumn="5" endLine="6" endColumn="10" startOffset="128" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="25">
          <position xmi:type="position:Position" xmi:id="26" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="6" endOffset="133" startColumn="5" endLine="6" endColumn="10" startOffset="128" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="27" name="productPresent">
      <position xmi:type="position:Position" xmi:id="28" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="8" endOffset="206" startColumn="12" endLine="8" endColumn="25" startOffset="193" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="29" target="9">
        <position xmi:type="position:Position" xmi:id="30" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="9" endOffset="217" startColumn="5" endLine="9" endColumn="8" startOffset="214" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="31">
          <position xmi:type="position:Position" xmi:id="32" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="9" endOffset="231" startColumn="10" endLine="9" endColumn="22" startOffset="219" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="33" event="7">
            <position xmi:type="position:Position" xmi:id="34" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="9" endOffset="231" startColumn="10" endLine="9" endColumn="22" startOffset="219" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="35">
              <position xmi:type="position:Position" xmi:id="36" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="9" endOffset="231" startColumn="10" endLine="9" endColumn="22" startOffset="219" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="37" name="machineStand">
    <position xmi:type="position:Position" xmi:id="38" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="11" endOffset="276" startColumn="11" endLine="11" endColumn="22" startOffset="265" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="39" name="moveDown" controllable="false">
      <position xmi:type="position:Position" xmi:id="40" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="12" endOffset="304" startColumn="18" endLine="12" endColumn="25" startOffset="297" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="41" name="moveUp" controllable="false">
      <position xmi:type="position:Position" xmi:id="42" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="13" endOffset="330" startColumn="18" endLine="13" endColumn="23" startOffset="325" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="43" name="up">
      <position xmi:type="position:Position" xmi:id="44" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="14" endOffset="346" startColumn="12" endLine="14" endColumn="13" startOffset="345" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="45" value="true">
        <position xmi:type="position:Position" xmi:id="46" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="15" endOffset="360" startColumn="5" endLine="15" endColumn="11" startOffset="354" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="47">
          <position xmi:type="position:Position" xmi:id="48" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="15" endOffset="360" startColumn="5" endLine="15" endColumn="11" startOffset="354" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="49" target="61">
        <position xmi:type="position:Position" xmi:id="50" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="17" endOffset="384" startColumn="5" endLine="17" endColumn="8" startOffset="381" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="51">
          <position xmi:type="position:Position" xmi:id="52" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="17" endOffset="393" startColumn="10" endLine="17" endColumn="17" startOffset="386" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="53" event="39">
            <position xmi:type="position:Position" xmi:id="54" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="17" endOffset="393" startColumn="10" endLine="17" endColumn="17" startOffset="386" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="55">
              <position xmi:type="position:Position" xmi:id="56" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="17" endOffset="393" startColumn="10" endLine="17" endColumn="17" startOffset="386" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="57" value="true">
        <position xmi:type="position:Position" xmi:id="58" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="16" endOffset="373" startColumn="5" endLine="16" endColumn="10" startOffset="368" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="59">
          <position xmi:type="position:Position" xmi:id="60" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="16" endOffset="373" startColumn="5" endLine="16" endColumn="10" startOffset="368" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="61" name="down">
      <position xmi:type="position:Position" xmi:id="62" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="18" endOffset="421" startColumn="12" endLine="18" endColumn="15" startOffset="418" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="63" target="43">
        <position xmi:type="position:Position" xmi:id="64" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="19" endOffset="432" startColumn="5" endLine="19" endColumn="8" startOffset="429" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="65">
          <position xmi:type="position:Position" xmi:id="66" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="19" endOffset="439" startColumn="10" endLine="19" endColumn="15" startOffset="434" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="67" event="41">
            <position xmi:type="position:Position" xmi:id="68" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="19" endOffset="439" startColumn="10" endLine="19" endColumn="15" startOffset="434" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="69">
              <position xmi:type="position:Position" xmi:id="70" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="19" endOffset="439" startColumn="10" endLine="19" endColumn="15" startOffset="434" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="71" name="machineHead">
    <position xmi:type="position:Position" xmi:id="72" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="21" endOffset="476" startColumn="11" endLine="21" endColumn="21" startOffset="466" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="73" name="M2D" controllable="false">
      <position xmi:type="position:Position" xmi:id="74" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="22" endOffset="499" startColumn="18" endLine="22" endColumn="20" startOffset="497" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="75" name="D2M" controllable="false">
      <position xmi:type="position:Position" xmi:id="76" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="23" endOffset="522" startColumn="18" endLine="23" endColumn="20" startOffset="520" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="77" name="D2P" controllable="false">
      <position xmi:type="position:Position" xmi:id="78" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="24" endOffset="545" startColumn="18" endLine="24" endColumn="20" startOffset="543" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="79" name="P2D" controllable="false">
      <position xmi:type="position:Position" xmi:id="80" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="25" endOffset="568" startColumn="18" endLine="25" endColumn="20" startOffset="566" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="81" name="M2P" controllable="false">
      <position xmi:type="position:Position" xmi:id="82" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="26" endOffset="591" startColumn="18" endLine="26" endColumn="20" startOffset="589" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="83" name="P2M" controllable="false">
      <position xmi:type="position:Position" xmi:id="84" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="27" endOffset="614" startColumn="18" endLine="27" endColumn="20" startOffset="612" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="85" name="opD">
      <position xmi:type="position:Position" xmi:id="86" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="28" endOffset="631" startColumn="12" endLine="28" endColumn="14" startOffset="629" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="87" value="true">
        <position xmi:type="position:Position" xmi:id="88" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="29" endOffset="645" startColumn="5" endLine="29" endColumn="11" startOffset="639" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="89">
          <position xmi:type="position:Position" xmi:id="90" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="29" endOffset="645" startColumn="5" endLine="29" endColumn="11" startOffset="639" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="91" target="111">
        <position xmi:type="position:Position" xmi:id="92" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="31" endOffset="669" startColumn="5" endLine="31" endColumn="8" startOffset="666" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="93">
          <position xmi:type="position:Position" xmi:id="94" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="31" endOffset="673" startColumn="10" endLine="31" endColumn="12" startOffset="671" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="95" event="75">
            <position xmi:type="position:Position" xmi:id="96" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="31" endOffset="673" startColumn="10" endLine="31" endColumn="12" startOffset="671" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="97">
              <position xmi:type="position:Position" xmi:id="98" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="31" endOffset="673" startColumn="10" endLine="31" endColumn="12" startOffset="671" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="99" target="129">
        <position xmi:type="position:Position" xmi:id="100" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="32" endOffset="693" startColumn="5" endLine="32" endColumn="8" startOffset="690" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="101">
          <position xmi:type="position:Position" xmi:id="102" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="32" endOffset="697" startColumn="10" endLine="32" endColumn="12" startOffset="695" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="103" event="77">
            <position xmi:type="position:Position" xmi:id="104" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="32" endOffset="697" startColumn="10" endLine="32" endColumn="12" startOffset="695" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="105">
              <position xmi:type="position:Position" xmi:id="106" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="32" endOffset="697" startColumn="10" endLine="32" endColumn="12" startOffset="695" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="107" value="true">
        <position xmi:type="position:Position" xmi:id="108" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="30" endOffset="658" startColumn="5" endLine="30" endColumn="10" startOffset="653" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="109">
          <position xmi:type="position:Position" xmi:id="110" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="30" endOffset="658" startColumn="5" endLine="30" endColumn="10" startOffset="653" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="111" name="opM">
      <position xmi:type="position:Position" xmi:id="112" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="33" endOffset="723" startColumn="12" endLine="33" endColumn="14" startOffset="721" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="113" target="85">
        <position xmi:type="position:Position" xmi:id="114" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="34" endOffset="734" startColumn="5" endLine="34" endColumn="8" startOffset="731" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="115">
          <position xmi:type="position:Position" xmi:id="116" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="34" endOffset="738" startColumn="10" endLine="34" endColumn="12" startOffset="736" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="117" event="73">
            <position xmi:type="position:Position" xmi:id="118" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="34" endOffset="738" startColumn="10" endLine="34" endColumn="12" startOffset="736" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="119">
              <position xmi:type="position:Position" xmi:id="120" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="34" endOffset="738" startColumn="10" endLine="34" endColumn="12" startOffset="736" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="121" target="129">
        <position xmi:type="position:Position" xmi:id="122" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="35" endOffset="758" startColumn="5" endLine="35" endColumn="8" startOffset="755" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="123">
          <position xmi:type="position:Position" xmi:id="124" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="35" endOffset="762" startColumn="10" endLine="35" endColumn="12" startOffset="760" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="125" event="81">
            <position xmi:type="position:Position" xmi:id="126" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="35" endOffset="762" startColumn="10" endLine="35" endColumn="12" startOffset="760" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="127">
              <position xmi:type="position:Position" xmi:id="128" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="35" endOffset="762" startColumn="10" endLine="35" endColumn="12" startOffset="760" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="129" name="opP">
      <position xmi:type="position:Position" xmi:id="130" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="36" endOffset="788" startColumn="12" endLine="36" endColumn="14" startOffset="786" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="131" target="85">
        <position xmi:type="position:Position" xmi:id="132" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="37" endOffset="799" startColumn="5" endLine="37" endColumn="8" startOffset="796" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="133">
          <position xmi:type="position:Position" xmi:id="134" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="37" endOffset="803" startColumn="10" endLine="37" endColumn="12" startOffset="801" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="135" event="79">
            <position xmi:type="position:Position" xmi:id="136" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="37" endOffset="803" startColumn="10" endLine="37" endColumn="12" startOffset="801" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="137">
              <position xmi:type="position:Position" xmi:id="138" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="37" endOffset="803" startColumn="10" endLine="37" endColumn="12" startOffset="801" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="139" target="111">
        <position xmi:type="position:Position" xmi:id="140" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="38" endOffset="823" startColumn="5" endLine="38" endColumn="8" startOffset="820" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="141">
          <position xmi:type="position:Position" xmi:id="142" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="38" endOffset="827" startColumn="10" endLine="38" endColumn="12" startOffset="825" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="143" event="83">
            <position xmi:type="position:Position" xmi:id="144" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="38" endOffset="827" startColumn="10" endLine="38" endColumn="12" startOffset="825" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="145">
              <position xmi:type="position:Position" xmi:id="146" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="38" endOffset="827" startColumn="10" endLine="38" endColumn="12" startOffset="825" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="147" name="drill">
    <position xmi:type="position:Position" xmi:id="148" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="40" endOffset="859" startColumn="11" endLine="40" endColumn="15" startOffset="855" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="149" name="startDrill" controllable="false">
      <position xmi:type="position:Position" xmi:id="150" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="41" endOffset="889" startColumn="18" endLine="41" endColumn="27" startOffset="880" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="151" name="stopDrill" controllable="false">
      <position xmi:type="position:Position" xmi:id="152" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="42" endOffset="918" startColumn="18" endLine="42" endColumn="26" startOffset="910" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="153" name="off">
      <position xmi:type="position:Position" xmi:id="154" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="43" endOffset="935" startColumn="12" endLine="43" endColumn="14" startOffset="933" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="155" value="true">
        <position xmi:type="position:Position" xmi:id="156" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="44" endOffset="949" startColumn="5" endLine="44" endColumn="11" startOffset="943" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="157">
          <position xmi:type="position:Position" xmi:id="158" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="44" endOffset="949" startColumn="5" endLine="44" endColumn="11" startOffset="943" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="159" target="171">
        <position xmi:type="position:Position" xmi:id="160" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="46" endOffset="973" startColumn="5" endLine="46" endColumn="8" startOffset="970" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="161">
          <position xmi:type="position:Position" xmi:id="162" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="46" endOffset="984" startColumn="10" endLine="46" endColumn="19" startOffset="975" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="163" event="149">
            <position xmi:type="position:Position" xmi:id="164" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="46" endOffset="984" startColumn="10" endLine="46" endColumn="19" startOffset="975" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="165">
              <position xmi:type="position:Position" xmi:id="166" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="46" endOffset="984" startColumn="10" endLine="46" endColumn="19" startOffset="975" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="167" value="true">
        <position xmi:type="position:Position" xmi:id="168" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="45" endOffset="962" startColumn="5" endLine="45" endColumn="10" startOffset="957" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="169">
          <position xmi:type="position:Position" xmi:id="170" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="45" endOffset="962" startColumn="5" endLine="45" endColumn="10" startOffset="957" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="171" name="on">
      <position xmi:type="position:Position" xmi:id="172" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="47" endOffset="1008" startColumn="12" endLine="47" endColumn="13" startOffset="1007" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="173" target="153">
        <position xmi:type="position:Position" xmi:id="174" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="48" endOffset="1019" startColumn="5" endLine="48" endColumn="8" startOffset="1016" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="175">
          <position xmi:type="position:Position" xmi:id="176" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="48" endOffset="1029" startColumn="10" endLine="48" endColumn="18" startOffset="1021" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="177" event="151">
            <position xmi:type="position:Position" xmi:id="178" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="48" endOffset="1029" startColumn="10" endLine="48" endColumn="18" startOffset="1021" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="179">
              <position xmi:type="position:Position" xmi:id="180" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="48" endOffset="1029" startColumn="10" endLine="48" endColumn="18" startOffset="1021" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="181" name="mill">
    <position xmi:type="position:Position" xmi:id="182" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="50" endOffset="1060" startColumn="11" endLine="50" endColumn="14" startOffset="1057" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="183" name="startMill" controllable="false">
      <position xmi:type="position:Position" xmi:id="184" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="51" endOffset="1089" startColumn="18" endLine="51" endColumn="26" startOffset="1081" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="185" name="stopMill" controllable="false">
      <position xmi:type="position:Position" xmi:id="186" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="52" endOffset="1117" startColumn="18" endLine="52" endColumn="25" startOffset="1110" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="187" name="off">
      <position xmi:type="position:Position" xmi:id="188" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="53" endOffset="1134" startColumn="12" endLine="53" endColumn="14" startOffset="1132" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="189" value="true">
        <position xmi:type="position:Position" xmi:id="190" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="54" endOffset="1148" startColumn="5" endLine="54" endColumn="11" startOffset="1142" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="191">
          <position xmi:type="position:Position" xmi:id="192" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="54" endOffset="1148" startColumn="5" endLine="54" endColumn="11" startOffset="1142" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="193" target="205">
        <position xmi:type="position:Position" xmi:id="194" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="56" endOffset="1172" startColumn="5" endLine="56" endColumn="8" startOffset="1169" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="195">
          <position xmi:type="position:Position" xmi:id="196" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="56" endOffset="1182" startColumn="10" endLine="56" endColumn="18" startOffset="1174" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="197" event="183">
            <position xmi:type="position:Position" xmi:id="198" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="56" endOffset="1182" startColumn="10" endLine="56" endColumn="18" startOffset="1174" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="199">
              <position xmi:type="position:Position" xmi:id="200" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="56" endOffset="1182" startColumn="10" endLine="56" endColumn="18" startOffset="1174" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="201" value="true">
        <position xmi:type="position:Position" xmi:id="202" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="55" endOffset="1161" startColumn="5" endLine="55" endColumn="10" startOffset="1156" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="203">
          <position xmi:type="position:Position" xmi:id="204" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="55" endOffset="1161" startColumn="5" endLine="55" endColumn="10" startOffset="1156" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="205" name="on">
      <position xmi:type="position:Position" xmi:id="206" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="57" endOffset="1206" startColumn="12" endLine="57" endColumn="13" startOffset="1205" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="207" target="187">
        <position xmi:type="position:Position" xmi:id="208" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="58" endOffset="1217" startColumn="5" endLine="58" endColumn="8" startOffset="1214" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="209">
          <position xmi:type="position:Position" xmi:id="210" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="58" endOffset="1226" startColumn="10" endLine="58" endColumn="17" startOffset="1219" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="211" event="185">
            <position xmi:type="position:Position" xmi:id="212" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="58" endOffset="1226" startColumn="10" endLine="58" endColumn="17" startOffset="1219" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="213">
              <position xmi:type="position:Position" xmi:id="214" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="58" endOffset="1226" startColumn="10" endLine="58" endColumn="17" startOffset="1219" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="215" name="polisher">
    <position xmi:type="position:Position" xmi:id="216" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="60" endOffset="1261" startColumn="11" endLine="60" endColumn="18" startOffset="1254" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="217" name="startPolisher" controllable="false">
      <position xmi:type="position:Position" xmi:id="218" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="61" endOffset="1294" startColumn="18" endLine="61" endColumn="30" startOffset="1282" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="219" name="stopPolisher" controllable="false">
      <position xmi:type="position:Position" xmi:id="220" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="62" endOffset="1326" startColumn="18" endLine="62" endColumn="29" startOffset="1315" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="221" name="off">
      <position xmi:type="position:Position" xmi:id="222" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="63" endOffset="1343" startColumn="12" endLine="63" endColumn="14" startOffset="1341" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="223" value="true">
        <position xmi:type="position:Position" xmi:id="224" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="64" endOffset="1357" startColumn="5" endLine="64" endColumn="11" startOffset="1351" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="225">
          <position xmi:type="position:Position" xmi:id="226" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="64" endOffset="1357" startColumn="5" endLine="64" endColumn="11" startOffset="1351" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="227" target="239">
        <position xmi:type="position:Position" xmi:id="228" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="66" endOffset="1381" startColumn="5" endLine="66" endColumn="8" startOffset="1378" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="229">
          <position xmi:type="position:Position" xmi:id="230" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="66" endOffset="1395" startColumn="10" endLine="66" endColumn="22" startOffset="1383" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="231" event="217">
            <position xmi:type="position:Position" xmi:id="232" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="66" endOffset="1395" startColumn="10" endLine="66" endColumn="22" startOffset="1383" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="233">
              <position xmi:type="position:Position" xmi:id="234" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="66" endOffset="1395" startColumn="10" endLine="66" endColumn="22" startOffset="1383" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="235" value="true">
        <position xmi:type="position:Position" xmi:id="236" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="65" endOffset="1370" startColumn="5" endLine="65" endColumn="10" startOffset="1365" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="237">
          <position xmi:type="position:Position" xmi:id="238" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="65" endOffset="1370" startColumn="5" endLine="65" endColumn="10" startOffset="1365" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="239" name="on">
      <position xmi:type="position:Position" xmi:id="240" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="67" endOffset="1419" startColumn="12" endLine="67" endColumn="13" startOffset="1418" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="241" target="221">
        <position xmi:type="position:Position" xmi:id="242" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="68" endOffset="1430" startColumn="5" endLine="68" endColumn="8" startOffset="1427" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="243">
          <position xmi:type="position:Position" xmi:id="244" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="68" endOffset="1443" startColumn="10" endLine="68" endColumn="21" startOffset="1432" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="245" event="219">
            <position xmi:type="position:Position" xmi:id="246" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="68" endOffset="1443" startColumn="10" endLine="68" endColumn="21" startOffset="1432" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="247">
              <position xmi:type="position:Position" xmi:id="248" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="68" endOffset="1443" startColumn="10" endLine="68" endColumn="21" startOffset="1432" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="249" name="r_C" kind="Requirement">
    <position xmi:type="position:Position" xmi:id="250" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="70" endOffset="1485" startColumn="23" endLine="70" endColumn="25" startOffset="1483" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="251" name="a">
      <position xmi:type="position:Position" xmi:id="252" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="71" endOffset="1500" startColumn="12" endLine="71" endColumn="12" startOffset="1500" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="253" value="true">
        <position xmi:type="position:Position" xmi:id="254" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="72" endOffset="1514" startColumn="5" endLine="72" endColumn="11" startOffset="1508" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="255">
          <position xmi:type="position:Position" xmi:id="256" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="72" endOffset="1514" startColumn="5" endLine="72" endColumn="11" startOffset="1508" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="257" target="269">
        <position xmi:type="position:Position" xmi:id="258" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="74" endOffset="1538" startColumn="5" endLine="74" endColumn="8" startOffset="1535" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="259">
          <position xmi:type="position:Position" xmi:id="260" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="74" endOffset="1560" startColumn="10" endLine="74" endColumn="30" startOffset="1540" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="261" event="39">
            <position xmi:type="position:Position" xmi:id="262" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="74" endOffset="1560" startColumn="10" endLine="74" endColumn="30" startOffset="1540" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="263">
              <position xmi:type="position:Position" xmi:id="264" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="74" endOffset="1560" startColumn="10" endLine="74" endColumn="30" startOffset="1540" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="265" value="true">
        <position xmi:type="position:Position" xmi:id="266" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="73" endOffset="1527" startColumn="5" endLine="73" endColumn="10" startOffset="1522" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="267">
          <position xmi:type="position:Position" xmi:id="268" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="73" endOffset="1527" startColumn="5" endLine="73" endColumn="10" startOffset="1522" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="269" name="b">
      <position xmi:type="position:Position" xmi:id="270" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="75" endOffset="1582" startColumn="12" endLine="75" endColumn="12" startOffset="1582" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="271" target="251">
        <position xmi:type="position:Position" xmi:id="272" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="76" endOffset="1593" startColumn="5" endLine="76" endColumn="8" startOffset="1590" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="273">
          <position xmi:type="position:Position" xmi:id="274" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="76" endOffset="1613" startColumn="10" endLine="76" endColumn="28" startOffset="1595" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="275" event="41">
            <position xmi:type="position:Position" xmi:id="276" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="76" endOffset="1613" startColumn="10" endLine="76" endColumn="28" startOffset="1595" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="277">
              <position xmi:type="position:Position" xmi:id="278" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="76" endOffset="1613" startColumn="10" endLine="76" endColumn="28" startOffset="1595" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="279" target="303">
        <position xmi:type="position:Position" xmi:id="280" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="77" endOffset="1631" startColumn="5" endLine="77" endColumn="8" startOffset="1628" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="281">
          <position xmi:type="position:Position" xmi:id="282" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="77" endOffset="1646" startColumn="10" endLine="77" endColumn="23" startOffset="1633" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="283" event="183">
            <position xmi:type="position:Position" xmi:id="284" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="77" endOffset="1646" startColumn="10" endLine="77" endColumn="23" startOffset="1633" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="285">
              <position xmi:type="position:Position" xmi:id="286" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="77" endOffset="1646" startColumn="10" endLine="77" endColumn="23" startOffset="1633" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="287" target="313">
        <position xmi:type="position:Position" xmi:id="288" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="78" endOffset="1664" startColumn="5" endLine="78" endColumn="8" startOffset="1661" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="289">
          <position xmi:type="position:Position" xmi:id="290" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="78" endOffset="1681" startColumn="10" endLine="78" endColumn="25" startOffset="1666" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="291" event="149">
            <position xmi:type="position:Position" xmi:id="292" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="78" endOffset="1681" startColumn="10" endLine="78" endColumn="25" startOffset="1666" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="293">
              <position xmi:type="position:Position" xmi:id="294" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="78" endOffset="1681" startColumn="10" endLine="78" endColumn="25" startOffset="1666" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="295" target="323">
        <position xmi:type="position:Position" xmi:id="296" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="79" endOffset="1699" startColumn="5" endLine="79" endColumn="8" startOffset="1696" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="297">
          <position xmi:type="position:Position" xmi:id="298" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="79" endOffset="1722" startColumn="10" endLine="79" endColumn="31" startOffset="1701" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="299" event="217">
            <position xmi:type="position:Position" xmi:id="300" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="79" endOffset="1722" startColumn="10" endLine="79" endColumn="31" startOffset="1701" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="301">
              <position xmi:type="position:Position" xmi:id="302" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="79" endOffset="1722" startColumn="10" endLine="79" endColumn="31" startOffset="1701" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="303" name="c">
      <position xmi:type="position:Position" xmi:id="304" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="80" endOffset="1744" startColumn="12" endLine="80" endColumn="12" startOffset="1744" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="305" target="269">
        <position xmi:type="position:Position" xmi:id="306" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="81" endOffset="1755" startColumn="5" endLine="81" endColumn="8" startOffset="1752" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="307">
          <position xmi:type="position:Position" xmi:id="308" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="81" endOffset="1769" startColumn="10" endLine="81" endColumn="22" startOffset="1757" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="309" event="185">
            <position xmi:type="position:Position" xmi:id="310" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="81" endOffset="1769" startColumn="10" endLine="81" endColumn="22" startOffset="1757" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="311">
              <position xmi:type="position:Position" xmi:id="312" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="81" endOffset="1769" startColumn="10" endLine="81" endColumn="22" startOffset="1757" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="313" name="d">
      <position xmi:type="position:Position" xmi:id="314" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="82" endOffset="1791" startColumn="12" endLine="82" endColumn="12" startOffset="1791" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="315" target="269">
        <position xmi:type="position:Position" xmi:id="316" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="83" endOffset="1802" startColumn="5" endLine="83" endColumn="8" startOffset="1799" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="317">
          <position xmi:type="position:Position" xmi:id="318" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="83" endOffset="1818" startColumn="10" endLine="83" endColumn="24" startOffset="1804" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="319" event="151">
            <position xmi:type="position:Position" xmi:id="320" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="83" endOffset="1818" startColumn="10" endLine="83" endColumn="24" startOffset="1804" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="321">
              <position xmi:type="position:Position" xmi:id="322" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="83" endOffset="1818" startColumn="10" endLine="83" endColumn="24" startOffset="1804" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="323" name="e">
      <position xmi:type="position:Position" xmi:id="324" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="84" endOffset="1840" startColumn="12" endLine="84" endColumn="12" startOffset="1840" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="325" target="269">
        <position xmi:type="position:Position" xmi:id="326" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="85" endOffset="1851" startColumn="5" endLine="85" endColumn="8" startOffset="1848" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="327">
          <position xmi:type="position:Position" xmi:id="328" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="85" endOffset="1873" startColumn="10" endLine="85" endColumn="30" startOffset="1853" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="329" event="219">
            <position xmi:type="position:Position" xmi:id="330" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="85" endOffset="1873" startColumn="10" endLine="85" endColumn="30" startOffset="1853" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="331">
              <position xmi:type="position:Position" xmi:id="332" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="85" endOffset="1873" startColumn="10" endLine="85" endColumn="30" startOffset="1853" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="333" name="r_A" kind="Supervisor">
    <position xmi:type="position:Position" xmi:id="334" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="87" endOffset="1912" startColumn="22" endLine="87" endColumn="24" startOffset="1910" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="335" name="a">
      <position xmi:type="position:Position" xmi:id="336" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="88" endOffset="1927" startColumn="12" endLine="88" endColumn="12" startOffset="1927" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="337" value="true">
        <position xmi:type="position:Position" xmi:id="338" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="89" endOffset="1941" startColumn="5" endLine="89" endColumn="11" startOffset="1935" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="339">
          <position xmi:type="position:Position" xmi:id="340" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="89" endOffset="1941" startColumn="5" endLine="89" endColumn="11" startOffset="1935" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="341" target="353">
        <position xmi:type="position:Position" xmi:id="342" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="91" endOffset="1965" startColumn="5" endLine="91" endColumn="8" startOffset="1962" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="343">
          <position xmi:type="position:Position" xmi:id="344" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="91" endOffset="1988" startColumn="10" endLine="91" endColumn="31" startOffset="1967" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="345" event="5">
            <position xmi:type="position:Position" xmi:id="346" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="91" endOffset="1988" startColumn="10" endLine="91" endColumn="31" startOffset="1967" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="347">
              <position xmi:type="position:Position" xmi:id="348" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="91" endOffset="1988" startColumn="10" endLine="91" endColumn="31" startOffset="1967" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="349" value="true">
        <position xmi:type="position:Position" xmi:id="350" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="90" endOffset="1954" startColumn="5" endLine="90" endColumn="10" startOffset="1949" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="351">
          <position xmi:type="position:Position" xmi:id="352" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="90" endOffset="1954" startColumn="5" endLine="90" endColumn="10" startOffset="1949" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="353" name="b">
      <position xmi:type="position:Position" xmi:id="354" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="92" endOffset="2010" startColumn="12" endLine="92" endColumn="12" startOffset="2010" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="355">
        <position xmi:type="position:Position" xmi:id="356" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="93" endOffset="2021" startColumn="5" endLine="93" endColumn="8" startOffset="2018" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="357">
          <position xmi:type="position:Position" xmi:id="358" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="93" endOffset="2043" startColumn="10" endLine="93" endColumn="30" startOffset="2023" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="359" event="39">
            <position xmi:type="position:Position" xmi:id="360" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="93" endOffset="2043" startColumn="10" endLine="93" endColumn="30" startOffset="2023" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="361">
              <position xmi:type="position:Position" xmi:id="362" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="93" endOffset="2043" startColumn="10" endLine="93" endColumn="30" startOffset="2023" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="363" target="335">
        <position xmi:type="position:Position" xmi:id="364" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="94" endOffset="2054" startColumn="5" endLine="94" endColumn="8" startOffset="2051" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="365">
          <position xmi:type="position:Position" xmi:id="366" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="94" endOffset="2077" startColumn="10" endLine="94" endColumn="31" startOffset="2056" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="367" event="7">
            <position xmi:type="position:Position" xmi:id="368" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="94" endOffset="2077" startColumn="10" endLine="94" endColumn="31" startOffset="2056" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="369">
              <position xmi:type="position:Position" xmi:id="370" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="94" endOffset="2077" startColumn="10" endLine="94" endColumn="31" startOffset="2056" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="371" name="r_B" kind="Requirement">
    <position xmi:type="position:Position" xmi:id="372" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="96" endOffset="2117" startColumn="23" endLine="96" endColumn="25" startOffset="2115" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="373" name="a">
      <position xmi:type="position:Position" xmi:id="374" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="97" endOffset="2132" startColumn="12" endLine="97" endColumn="12" startOffset="2132" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="375">
        <position xmi:type="position:Position" xmi:id="376" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="98" endOffset="2143" startColumn="5" endLine="98" endColumn="8" startOffset="2140" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="377">
          <position xmi:type="position:Position" xmi:id="378" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="98" endOffset="2158" startColumn="10" endLine="98" endColumn="23" startOffset="2145" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="379" event="183">
            <position xmi:type="position:Position" xmi:id="380" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="98" endOffset="2158" startColumn="10" endLine="98" endColumn="23" startOffset="2145" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="381">
              <position xmi:type="position:Position" xmi:id="382" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="98" endOffset="2158" startColumn="10" endLine="98" endColumn="23" startOffset="2145" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="383" target="391">
        <position xmi:type="position:Position" xmi:id="384" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="99" endOffset="2169" startColumn="5" endLine="99" endColumn="8" startOffset="2166" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="385">
          <position xmi:type="position:Position" xmi:id="386" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="99" endOffset="2185" startColumn="10" endLine="99" endColumn="24" startOffset="2171" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="387" event="73">
            <position xmi:type="position:Position" xmi:id="388" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="99" endOffset="2185" startColumn="10" endLine="99" endColumn="24" startOffset="2171" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="389">
              <position xmi:type="position:Position" xmi:id="390" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="99" endOffset="2185" startColumn="10" endLine="99" endColumn="24" startOffset="2171" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="391" name="b">
      <position xmi:type="position:Position" xmi:id="392" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="100" endOffset="2207" startColumn="12" endLine="100" endColumn="12" startOffset="2207" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="393" value="true">
        <position xmi:type="position:Position" xmi:id="394" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="101" endOffset="2221" startColumn="5" endLine="101" endColumn="11" startOffset="2215" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="395">
          <position xmi:type="position:Position" xmi:id="396" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="101" endOffset="2221" startColumn="5" endLine="101" endColumn="11" startOffset="2215" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="397">
        <position xmi:type="position:Position" xmi:id="398" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="103" endOffset="2245" startColumn="5" endLine="103" endColumn="8" startOffset="2242" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="399">
          <position xmi:type="position:Position" xmi:id="400" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="103" endOffset="2262" startColumn="10" endLine="103" endColumn="25" startOffset="2247" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="401" event="149">
            <position xmi:type="position:Position" xmi:id="402" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="103" endOffset="2262" startColumn="10" endLine="103" endColumn="25" startOffset="2247" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="403">
              <position xmi:type="position:Position" xmi:id="404" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="103" endOffset="2262" startColumn="10" endLine="103" endColumn="25" startOffset="2247" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="405" target="373">
        <position xmi:type="position:Position" xmi:id="406" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="104" endOffset="2273" startColumn="5" endLine="104" endColumn="8" startOffset="2270" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="407">
          <position xmi:type="position:Position" xmi:id="408" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="104" endOffset="2289" startColumn="10" endLine="104" endColumn="24" startOffset="2275" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="409" event="75">
            <position xmi:type="position:Position" xmi:id="410" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="104" endOffset="2289" startColumn="10" endLine="104" endColumn="24" startOffset="2275" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="411">
              <position xmi:type="position:Position" xmi:id="412" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="104" endOffset="2289" startColumn="10" endLine="104" endColumn="24" startOffset="2275" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="413" target="425">
        <position xmi:type="position:Position" xmi:id="414" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="105" endOffset="2307" startColumn="5" endLine="105" endColumn="8" startOffset="2304" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="415">
          <position xmi:type="position:Position" xmi:id="416" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="105" endOffset="2323" startColumn="10" endLine="105" endColumn="24" startOffset="2309" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="417" event="77">
            <position xmi:type="position:Position" xmi:id="418" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="105" endOffset="2323" startColumn="10" endLine="105" endColumn="24" startOffset="2309" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="419">
              <position xmi:type="position:Position" xmi:id="420" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="105" endOffset="2323" startColumn="10" endLine="105" endColumn="24" startOffset="2309" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="421" value="true">
        <position xmi:type="position:Position" xmi:id="422" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="102" endOffset="2234" startColumn="5" endLine="102" endColumn="10" startOffset="2229" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="423">
          <position xmi:type="position:Position" xmi:id="424" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="102" endOffset="2234" startColumn="5" endLine="102" endColumn="10" startOffset="2229" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="425" name="c">
      <position xmi:type="position:Position" xmi:id="426" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="106" endOffset="2345" startColumn="12" endLine="106" endColumn="12" startOffset="2345" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="427">
        <position xmi:type="position:Position" xmi:id="428" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="107" endOffset="2356" startColumn="5" endLine="107" endColumn="8" startOffset="2353" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="429">
          <position xmi:type="position:Position" xmi:id="430" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="107" endOffset="2379" startColumn="10" endLine="107" endColumn="31" startOffset="2358" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="431" event="217">
            <position xmi:type="position:Position" xmi:id="432" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="107" endOffset="2379" startColumn="10" endLine="107" endColumn="31" startOffset="2358" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="433">
              <position xmi:type="position:Position" xmi:id="434" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="107" endOffset="2379" startColumn="10" endLine="107" endColumn="31" startOffset="2358" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="435" target="391">
        <position xmi:type="position:Position" xmi:id="436" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="108" endOffset="2390" startColumn="5" endLine="108" endColumn="8" startOffset="2387" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="437">
          <position xmi:type="position:Position" xmi:id="438" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="108" endOffset="2406" startColumn="10" endLine="108" endColumn="24" startOffset="2392" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="439" event="79">
            <position xmi:type="position:Position" xmi:id="440" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="108" endOffset="2406" startColumn="10" endLine="108" endColumn="24" startOffset="2392" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="441">
              <position xmi:type="position:Position" xmi:id="442" source="File &quot;../data/tests\reconfigurable_machine_tool_modeling_error_transformed.cif&quot;: " startLine="108" endOffset="2406" startColumn="10" endLine="108" endColumn="24" startOffset="2392" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\reconfigurable_machine_tool_modeling_error_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
</cif:Specification>
`;
const eventMap = ['conveyor.enterConveyor', 'conveyor.leaveConveyor', 'drill.startDrill', 'drill.stopDrill', 'machineHead.D2M', 'machineHead.D2P', 'machineHead.M2D', 'machineHead.M2P', 'machineHead.P2D', 'machineHead.P2M', 'machineStand.moveDown', 'machineStand.moveUp', 'mill.startMill', 'mill.stopMill', 'polisher.startPolisher', 'polisher.stopPolisher'];
