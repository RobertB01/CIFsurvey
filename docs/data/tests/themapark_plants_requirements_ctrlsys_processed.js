const xml_themapark_plants_requirements_ctrlsys_processed = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
  <components xmi:type="automata:Automaton" xmi:id="3" name="RB" kind="Plant">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="1" endOffset="17" startColumn="17" endLine="1" endColumn="18" startOffset="16" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="5" name="u_press" controllable="false">
      <position xmi:type="position:Position" xmi:id="6" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="2" endOffset="44" startColumn="18" endLine="2" endColumn="24" startOffset="38" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="7" name="u_release" controllable="false">
      <position xmi:type="position:Position" xmi:id="8" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="3" endOffset="73" startColumn="18" endLine="3" endColumn="26" startOffset="65" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="9" name="Released">
      <position xmi:type="position:Position" xmi:id="10" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="4" endOffset="95" startColumn="12" endLine="4" endColumn="19" startOffset="88" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="11" value="true">
        <position xmi:type="position:Position" xmi:id="12" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="5" endOffset="109" startColumn="5" endLine="5" endColumn="11" startOffset="103" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="13">
          <position xmi:type="position:Position" xmi:id="14" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="5" endOffset="109" startColumn="5" endLine="5" endColumn="11" startOffset="103" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="15" target="27">
        <position xmi:type="position:Position" xmi:id="16" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="7" endOffset="133" startColumn="5" endLine="7" endColumn="8" startOffset="130" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="17">
          <position xmi:type="position:Position" xmi:id="18" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="7" endOffset="141" startColumn="10" endLine="7" endColumn="16" startOffset="135" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="19" event="5">
            <position xmi:type="position:Position" xmi:id="20" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="7" endOffset="141" startColumn="10" endLine="7" endColumn="16" startOffset="135" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="21">
              <position xmi:type="position:Position" xmi:id="22" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="7" endOffset="141" startColumn="10" endLine="7" endColumn="16" startOffset="135" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="23" value="true">
        <position xmi:type="position:Position" xmi:id="24" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="6" endOffset="122" startColumn="5" endLine="6" endColumn="10" startOffset="117" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="25">
          <position xmi:type="position:Position" xmi:id="26" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="6" endOffset="122" startColumn="5" endLine="6" endColumn="10" startOffset="117" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="27" name="Pressed">
      <position xmi:type="position:Position" xmi:id="28" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="8" endOffset="175" startColumn="12" endLine="8" endColumn="18" startOffset="169" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="29" target="9">
        <position xmi:type="position:Position" xmi:id="30" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="9" endOffset="186" startColumn="5" endLine="9" endColumn="8" startOffset="183" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="31">
          <position xmi:type="position:Position" xmi:id="32" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="9" endOffset="196" startColumn="10" endLine="9" endColumn="18" startOffset="188" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="33" event="7">
            <position xmi:type="position:Position" xmi:id="34" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="9" endOffset="196" startColumn="10" endLine="9" endColumn="18" startOffset="188" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="35">
              <position xmi:type="position:Position" xmi:id="36" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="9" endOffset="196" startColumn="10" endLine="9" endColumn="18" startOffset="188" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="37" name="FB" kind="Plant">
    <position xmi:type="position:Position" xmi:id="38" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="11" endOffset="236" startColumn="17" endLine="11" endColumn="18" startOffset="235" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="39" name="u_press" controllable="false">
      <position xmi:type="position:Position" xmi:id="40" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="12" endOffset="263" startColumn="18" endLine="12" endColumn="24" startOffset="257" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="41" name="u_release" controllable="false">
      <position xmi:type="position:Position" xmi:id="42" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="13" endOffset="292" startColumn="18" endLine="13" endColumn="26" startOffset="284" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="43" name="Released">
      <position xmi:type="position:Position" xmi:id="44" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="14" endOffset="314" startColumn="12" endLine="14" endColumn="19" startOffset="307" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="45" value="true">
        <position xmi:type="position:Position" xmi:id="46" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="15" endOffset="328" startColumn="5" endLine="15" endColumn="11" startOffset="322" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="47">
          <position xmi:type="position:Position" xmi:id="48" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="15" endOffset="328" startColumn="5" endLine="15" endColumn="11" startOffset="322" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="49" target="61">
        <position xmi:type="position:Position" xmi:id="50" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="17" endOffset="352" startColumn="5" endLine="17" endColumn="8" startOffset="349" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="51">
          <position xmi:type="position:Position" xmi:id="52" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="17" endOffset="360" startColumn="10" endLine="17" endColumn="16" startOffset="354" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="53" event="39">
            <position xmi:type="position:Position" xmi:id="54" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="17" endOffset="360" startColumn="10" endLine="17" endColumn="16" startOffset="354" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="55">
              <position xmi:type="position:Position" xmi:id="56" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="17" endOffset="360" startColumn="10" endLine="17" endColumn="16" startOffset="354" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="57" value="true">
        <position xmi:type="position:Position" xmi:id="58" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="16" endOffset="341" startColumn="5" endLine="16" endColumn="10" startOffset="336" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="59">
          <position xmi:type="position:Position" xmi:id="60" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="16" endOffset="341" startColumn="5" endLine="16" endColumn="10" startOffset="336" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="61" name="Pressed">
      <position xmi:type="position:Position" xmi:id="62" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="18" endOffset="394" startColumn="12" endLine="18" endColumn="18" startOffset="388" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="63" target="43">
        <position xmi:type="position:Position" xmi:id="64" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="19" endOffset="405" startColumn="5" endLine="19" endColumn="8" startOffset="402" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="65">
          <position xmi:type="position:Position" xmi:id="66" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="19" endOffset="415" startColumn="10" endLine="19" endColumn="18" startOffset="407" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="67" event="41">
            <position xmi:type="position:Position" xmi:id="68" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="19" endOffset="415" startColumn="10" endLine="19" endColumn="18" startOffset="407" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="69">
              <position xmi:type="position:Position" xmi:id="70" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="19" endOffset="415" startColumn="10" endLine="19" endColumn="18" startOffset="407" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="71" name="BB" kind="Plant">
    <position xmi:type="position:Position" xmi:id="72" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="21" endOffset="455" startColumn="17" endLine="21" endColumn="18" startOffset="454" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="73" name="u_press" controllable="false">
      <position xmi:type="position:Position" xmi:id="74" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="22" endOffset="482" startColumn="18" endLine="22" endColumn="24" startOffset="476" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="75" name="u_release" controllable="false">
      <position xmi:type="position:Position" xmi:id="76" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="23" endOffset="511" startColumn="18" endLine="23" endColumn="26" startOffset="503" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="77" name="Released">
      <position xmi:type="position:Position" xmi:id="78" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="24" endOffset="533" startColumn="12" endLine="24" endColumn="19" startOffset="526" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="79" value="true">
        <position xmi:type="position:Position" xmi:id="80" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="25" endOffset="547" startColumn="5" endLine="25" endColumn="11" startOffset="541" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="81">
          <position xmi:type="position:Position" xmi:id="82" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="25" endOffset="547" startColumn="5" endLine="25" endColumn="11" startOffset="541" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="83" target="95">
        <position xmi:type="position:Position" xmi:id="84" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="27" endOffset="571" startColumn="5" endLine="27" endColumn="8" startOffset="568" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="85">
          <position xmi:type="position:Position" xmi:id="86" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="27" endOffset="579" startColumn="10" endLine="27" endColumn="16" startOffset="573" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="87" event="73">
            <position xmi:type="position:Position" xmi:id="88" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="27" endOffset="579" startColumn="10" endLine="27" endColumn="16" startOffset="573" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="89">
              <position xmi:type="position:Position" xmi:id="90" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="27" endOffset="579" startColumn="10" endLine="27" endColumn="16" startOffset="573" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="91" value="true">
        <position xmi:type="position:Position" xmi:id="92" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="26" endOffset="560" startColumn="5" endLine="26" endColumn="10" startOffset="555" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="93">
          <position xmi:type="position:Position" xmi:id="94" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="26" endOffset="560" startColumn="5" endLine="26" endColumn="10" startOffset="555" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="95" name="Pressed">
      <position xmi:type="position:Position" xmi:id="96" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="28" endOffset="613" startColumn="12" endLine="28" endColumn="18" startOffset="607" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="97" target="77">
        <position xmi:type="position:Position" xmi:id="98" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="29" endOffset="624" startColumn="5" endLine="29" endColumn="8" startOffset="621" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="99">
          <position xmi:type="position:Position" xmi:id="100" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="29" endOffset="634" startColumn="10" endLine="29" endColumn="18" startOffset="626" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="101" event="75">
            <position xmi:type="position:Position" xmi:id="102" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="29" endOffset="634" startColumn="10" endLine="29" endColumn="18" startOffset="626" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="103">
              <position xmi:type="position:Position" xmi:id="104" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="29" endOffset="634" startColumn="10" endLine="29" endColumn="18" startOffset="626" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="105" name="RL" kind="Plant">
    <position xmi:type="position:Position" xmi:id="106" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="31" endOffset="674" startColumn="17" endLine="31" endColumn="18" startOffset="673" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="107" name="c_on" controllable="true">
      <position xmi:type="position:Position" xmi:id="108" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="32" endOffset="696" startColumn="16" endLine="32" endColumn="19" startOffset="693" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="109" name="c_off" controllable="true">
      <position xmi:type="position:Position" xmi:id="110" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="33" endOffset="719" startColumn="16" endLine="33" endColumn="20" startOffset="715" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:AlgVariable" xmi:id="111" name="startsWithOn">
      <position xmi:type="position:Position" xmi:id="112" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="34" endOffset="745" startColumn="12" endLine="34" endColumn="23" startOffset="734" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <value xmi:type="expressions:BoolExpression" xmi:id="113" value="true">
        <position xmi:type="position:Position" xmi:id="114" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="34" endOffset="752" startColumn="27" endLine="34" endColumn="30" startOffset="749" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="115">
          <position xmi:type="position:Position" xmi:id="116" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="34" endOffset="752" startColumn="27" endLine="34" endColumn="30" startOffset="749" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </value>
      <type xmi:type="types:BoolType" xmi:id="117">
        <position xmi:type="position:Position" xmi:id="118" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="34" endOffset="732" startColumn="7" endLine="34" endColumn="10" startOffset="729" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      </type>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="119" name="Off">
      <position xmi:type="position:Position" xmi:id="120" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="35" endOffset="769" startColumn="12" endLine="35" endColumn="14" startOffset="767" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:UnaryExpression" xmi:id="121">
        <position xmi:type="position:Position" xmi:id="122" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="36" endOffset="787" startColumn="13" endLine="36" endColumn="15" startOffset="785" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="123">
          <position xmi:type="position:Position" xmi:id="124" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="36" endOffset="787" startColumn="13" endLine="36" endColumn="15" startOffset="785" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
        <child xmi:type="expressions:AlgVariableExpression" xmi:id="125" variable="111">
          <position xmi:type="position:Position" xmi:id="126" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="36" endOffset="800" startColumn="17" endLine="36" endColumn="28" startOffset="789" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="127">
            <position xmi:type="position:Position" xmi:id="128" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="36" endOffset="800" startColumn="17" endLine="36" endColumn="28" startOffset="789" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
        </child>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="129" target="145">
        <position xmi:type="position:Position" xmi:id="130" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="38" endOffset="841" startColumn="5" endLine="38" endColumn="8" startOffset="838" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="131">
          <position xmi:type="position:Position" xmi:id="132" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="38" endOffset="846" startColumn="10" endLine="38" endColumn="13" startOffset="843" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="133" event="107">
            <position xmi:type="position:Position" xmi:id="134" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="38" endOffset="846" startColumn="10" endLine="38" endColumn="13" startOffset="843" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="135">
              <position xmi:type="position:Position" xmi:id="136" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="38" endOffset="846" startColumn="10" endLine="38" endColumn="13" startOffset="843" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:UnaryExpression" xmi:id="137">
        <position xmi:type="position:Position" xmi:id="138" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="37" endOffset="817" startColumn="12" endLine="37" endColumn="14" startOffset="815" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="139">
          <position xmi:type="position:Position" xmi:id="140" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="37" endOffset="817" startColumn="12" endLine="37" endColumn="14" startOffset="815" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
        <child xmi:type="expressions:AlgVariableExpression" xmi:id="141" variable="111">
          <position xmi:type="position:Position" xmi:id="142" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="37" endOffset="830" startColumn="16" endLine="37" endColumn="27" startOffset="819" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="143">
            <position xmi:type="position:Position" xmi:id="144" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="37" endOffset="830" startColumn="16" endLine="37" endColumn="27" startOffset="819" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
        </child>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="145" name="On">
      <position xmi:type="position:Position" xmi:id="146" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="39" endOffset="870" startColumn="12" endLine="39" endColumn="13" startOffset="869" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:AlgVariableExpression" xmi:id="147" variable="111">
        <position xmi:type="position:Position" xmi:id="148" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="40" endOffset="897" startColumn="13" endLine="40" endColumn="24" startOffset="886" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="149">
          <position xmi:type="position:Position" xmi:id="150" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="40" endOffset="897" startColumn="13" endLine="40" endColumn="24" startOffset="886" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="151" target="119">
        <position xmi:type="position:Position" xmi:id="152" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="42" endOffset="934" startColumn="5" endLine="42" endColumn="8" startOffset="931" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="153">
          <position xmi:type="position:Position" xmi:id="154" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="42" endOffset="940" startColumn="10" endLine="42" endColumn="14" startOffset="936" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="155" event="109">
            <position xmi:type="position:Position" xmi:id="156" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="42" endOffset="940" startColumn="10" endLine="42" endColumn="14" startOffset="936" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="157">
              <position xmi:type="position:Position" xmi:id="158" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="42" endOffset="940" startColumn="10" endLine="42" endColumn="14" startOffset="936" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:AlgVariableExpression" xmi:id="159" variable="111">
        <position xmi:type="position:Position" xmi:id="160" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="41" endOffset="923" startColumn="12" endLine="41" endColumn="23" startOffset="912" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="161">
          <position xmi:type="position:Position" xmi:id="162" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="41" endOffset="923" startColumn="12" endLine="41" endColumn="23" startOffset="912" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="163" name="FL" kind="Plant">
    <position xmi:type="position:Position" xmi:id="164" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="44" endOffset="975" startColumn="17" endLine="44" endColumn="18" startOffset="974" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="165" name="c_on" controllable="true">
      <position xmi:type="position:Position" xmi:id="166" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="45" endOffset="997" startColumn="16" endLine="45" endColumn="19" startOffset="994" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="167" name="c_off" controllable="true">
      <position xmi:type="position:Position" xmi:id="168" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="46" endOffset="1020" startColumn="16" endLine="46" endColumn="20" startOffset="1016" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:AlgVariable" xmi:id="169" name="startsWithOn">
      <position xmi:type="position:Position" xmi:id="170" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="47" endOffset="1046" startColumn="12" endLine="47" endColumn="23" startOffset="1035" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <value xmi:type="expressions:BoolExpression" xmi:id="171">
        <position xmi:type="position:Position" xmi:id="172" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="47" endOffset="1054" startColumn="27" endLine="47" endColumn="31" startOffset="1050" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="173">
          <position xmi:type="position:Position" xmi:id="174" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="47" endOffset="1054" startColumn="27" endLine="47" endColumn="31" startOffset="1050" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </value>
      <type xmi:type="types:BoolType" xmi:id="175">
        <position xmi:type="position:Position" xmi:id="176" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="47" endOffset="1033" startColumn="7" endLine="47" endColumn="10" startOffset="1030" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      </type>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="177" name="Off">
      <position xmi:type="position:Position" xmi:id="178" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="48" endOffset="1071" startColumn="12" endLine="48" endColumn="14" startOffset="1069" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:UnaryExpression" xmi:id="179">
        <position xmi:type="position:Position" xmi:id="180" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="49" endOffset="1089" startColumn="13" endLine="49" endColumn="15" startOffset="1087" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="181">
          <position xmi:type="position:Position" xmi:id="182" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="49" endOffset="1089" startColumn="13" endLine="49" endColumn="15" startOffset="1087" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
        <child xmi:type="expressions:AlgVariableExpression" xmi:id="183" variable="169">
          <position xmi:type="position:Position" xmi:id="184" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="49" endOffset="1102" startColumn="17" endLine="49" endColumn="28" startOffset="1091" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="185">
            <position xmi:type="position:Position" xmi:id="186" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="49" endOffset="1102" startColumn="17" endLine="49" endColumn="28" startOffset="1091" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
        </child>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="187" target="203">
        <position xmi:type="position:Position" xmi:id="188" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="51" endOffset="1143" startColumn="5" endLine="51" endColumn="8" startOffset="1140" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="189">
          <position xmi:type="position:Position" xmi:id="190" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="51" endOffset="1148" startColumn="10" endLine="51" endColumn="13" startOffset="1145" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="191" event="165">
            <position xmi:type="position:Position" xmi:id="192" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="51" endOffset="1148" startColumn="10" endLine="51" endColumn="13" startOffset="1145" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="193">
              <position xmi:type="position:Position" xmi:id="194" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="51" endOffset="1148" startColumn="10" endLine="51" endColumn="13" startOffset="1145" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:UnaryExpression" xmi:id="195">
        <position xmi:type="position:Position" xmi:id="196" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="50" endOffset="1119" startColumn="12" endLine="50" endColumn="14" startOffset="1117" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="197">
          <position xmi:type="position:Position" xmi:id="198" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="50" endOffset="1119" startColumn="12" endLine="50" endColumn="14" startOffset="1117" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
        <child xmi:type="expressions:AlgVariableExpression" xmi:id="199" variable="169">
          <position xmi:type="position:Position" xmi:id="200" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="50" endOffset="1132" startColumn="16" endLine="50" endColumn="27" startOffset="1121" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="201">
            <position xmi:type="position:Position" xmi:id="202" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="50" endOffset="1132" startColumn="16" endLine="50" endColumn="27" startOffset="1121" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
        </child>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="203" name="On">
      <position xmi:type="position:Position" xmi:id="204" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="52" endOffset="1172" startColumn="12" endLine="52" endColumn="13" startOffset="1171" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:AlgVariableExpression" xmi:id="205" variable="169">
        <position xmi:type="position:Position" xmi:id="206" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="53" endOffset="1199" startColumn="13" endLine="53" endColumn="24" startOffset="1188" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="207">
          <position xmi:type="position:Position" xmi:id="208" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="53" endOffset="1199" startColumn="13" endLine="53" endColumn="24" startOffset="1188" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="209" target="177">
        <position xmi:type="position:Position" xmi:id="210" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="55" endOffset="1236" startColumn="5" endLine="55" endColumn="8" startOffset="1233" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="211">
          <position xmi:type="position:Position" xmi:id="212" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="55" endOffset="1242" startColumn="10" endLine="55" endColumn="14" startOffset="1238" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="213" event="167">
            <position xmi:type="position:Position" xmi:id="214" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="55" endOffset="1242" startColumn="10" endLine="55" endColumn="14" startOffset="1238" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="215">
              <position xmi:type="position:Position" xmi:id="216" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="55" endOffset="1242" startColumn="10" endLine="55" endColumn="14" startOffset="1238" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:AlgVariableExpression" xmi:id="217" variable="169">
        <position xmi:type="position:Position" xmi:id="218" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="54" endOffset="1225" startColumn="12" endLine="54" endColumn="23" startOffset="1214" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="219">
          <position xmi:type="position:Position" xmi:id="220" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="54" endOffset="1225" startColumn="12" endLine="54" endColumn="23" startOffset="1214" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="221" name="BL" kind="Plant">
    <position xmi:type="position:Position" xmi:id="222" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="57" endOffset="1277" startColumn="17" endLine="57" endColumn="18" startOffset="1276" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="223" name="c_on" controllable="true">
      <position xmi:type="position:Position" xmi:id="224" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="58" endOffset="1299" startColumn="16" endLine="58" endColumn="19" startOffset="1296" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="225" name="c_off" controllable="true">
      <position xmi:type="position:Position" xmi:id="226" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="59" endOffset="1322" startColumn="16" endLine="59" endColumn="20" startOffset="1318" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:AlgVariable" xmi:id="227" name="startsWithOn">
      <position xmi:type="position:Position" xmi:id="228" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="60" endOffset="1348" startColumn="12" endLine="60" endColumn="23" startOffset="1337" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <value xmi:type="expressions:BoolExpression" xmi:id="229">
        <position xmi:type="position:Position" xmi:id="230" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="60" endOffset="1356" startColumn="27" endLine="60" endColumn="31" startOffset="1352" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="231">
          <position xmi:type="position:Position" xmi:id="232" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="60" endOffset="1356" startColumn="27" endLine="60" endColumn="31" startOffset="1352" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </value>
      <type xmi:type="types:BoolType" xmi:id="233">
        <position xmi:type="position:Position" xmi:id="234" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="60" endOffset="1335" startColumn="7" endLine="60" endColumn="10" startOffset="1332" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      </type>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="235" name="Off">
      <position xmi:type="position:Position" xmi:id="236" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="61" endOffset="1373" startColumn="12" endLine="61" endColumn="14" startOffset="1371" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:UnaryExpression" xmi:id="237">
        <position xmi:type="position:Position" xmi:id="238" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="62" endOffset="1391" startColumn="13" endLine="62" endColumn="15" startOffset="1389" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="239">
          <position xmi:type="position:Position" xmi:id="240" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="62" endOffset="1391" startColumn="13" endLine="62" endColumn="15" startOffset="1389" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
        <child xmi:type="expressions:AlgVariableExpression" xmi:id="241" variable="227">
          <position xmi:type="position:Position" xmi:id="242" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="62" endOffset="1404" startColumn="17" endLine="62" endColumn="28" startOffset="1393" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="243">
            <position xmi:type="position:Position" xmi:id="244" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="62" endOffset="1404" startColumn="17" endLine="62" endColumn="28" startOffset="1393" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
        </child>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="245" target="261">
        <position xmi:type="position:Position" xmi:id="246" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="64" endOffset="1445" startColumn="5" endLine="64" endColumn="8" startOffset="1442" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="247">
          <position xmi:type="position:Position" xmi:id="248" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="64" endOffset="1450" startColumn="10" endLine="64" endColumn="13" startOffset="1447" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="249" event="223">
            <position xmi:type="position:Position" xmi:id="250" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="64" endOffset="1450" startColumn="10" endLine="64" endColumn="13" startOffset="1447" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="251">
              <position xmi:type="position:Position" xmi:id="252" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="64" endOffset="1450" startColumn="10" endLine="64" endColumn="13" startOffset="1447" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:UnaryExpression" xmi:id="253">
        <position xmi:type="position:Position" xmi:id="254" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="63" endOffset="1421" startColumn="12" endLine="63" endColumn="14" startOffset="1419" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="255">
          <position xmi:type="position:Position" xmi:id="256" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="63" endOffset="1421" startColumn="12" endLine="63" endColumn="14" startOffset="1419" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
        <child xmi:type="expressions:AlgVariableExpression" xmi:id="257" variable="227">
          <position xmi:type="position:Position" xmi:id="258" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="63" endOffset="1434" startColumn="16" endLine="63" endColumn="27" startOffset="1423" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="259">
            <position xmi:type="position:Position" xmi:id="260" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="63" endOffset="1434" startColumn="16" endLine="63" endColumn="27" startOffset="1423" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
        </child>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="261" name="On">
      <position xmi:type="position:Position" xmi:id="262" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="65" endOffset="1474" startColumn="12" endLine="65" endColumn="13" startOffset="1473" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:AlgVariableExpression" xmi:id="263" variable="227">
        <position xmi:type="position:Position" xmi:id="264" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="66" endOffset="1501" startColumn="13" endLine="66" endColumn="24" startOffset="1490" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="265">
          <position xmi:type="position:Position" xmi:id="266" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="66" endOffset="1501" startColumn="13" endLine="66" endColumn="24" startOffset="1490" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="267" target="235">
        <position xmi:type="position:Position" xmi:id="268" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="68" endOffset="1538" startColumn="5" endLine="68" endColumn="8" startOffset="1535" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="269">
          <position xmi:type="position:Position" xmi:id="270" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="68" endOffset="1544" startColumn="10" endLine="68" endColumn="14" startOffset="1540" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="271" event="225">
            <position xmi:type="position:Position" xmi:id="272" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="68" endOffset="1544" startColumn="10" endLine="68" endColumn="14" startOffset="1540" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="273">
              <position xmi:type="position:Position" xmi:id="274" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="68" endOffset="1544" startColumn="10" endLine="68" endColumn="14" startOffset="1540" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:AlgVariableExpression" xmi:id="275" variable="227">
        <position xmi:type="position:Position" xmi:id="276" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="67" endOffset="1527" startColumn="12" endLine="67" endColumn="23" startOffset="1516" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="277">
          <position xmi:type="position:Position" xmi:id="278" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="67" endOffset="1527" startColumn="12" endLine="67" endColumn="23" startOffset="1516" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="279" name="BS" kind="Plant">
    <position xmi:type="position:Position" xmi:id="280" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="70" endOffset="1579" startColumn="17" endLine="70" endColumn="18" startOffset="1578" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="281" name="u_active" controllable="false">
      <position xmi:type="position:Position" xmi:id="282" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="71" endOffset="1607" startColumn="18" endLine="71" endColumn="25" startOffset="1600" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="283" name="u_inactive" controllable="false">
      <position xmi:type="position:Position" xmi:id="284" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="72" endOffset="1637" startColumn="18" endLine="72" endColumn="27" startOffset="1628" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="285" name="Inactive">
      <position xmi:type="position:Position" xmi:id="286" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="73" endOffset="1659" startColumn="12" endLine="73" endColumn="19" startOffset="1652" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="287" value="true">
        <position xmi:type="position:Position" xmi:id="288" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="74" endOffset="1673" startColumn="5" endLine="74" endColumn="11" startOffset="1667" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="289">
          <position xmi:type="position:Position" xmi:id="290" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="74" endOffset="1673" startColumn="5" endLine="74" endColumn="11" startOffset="1667" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="291" target="303">
        <position xmi:type="position:Position" xmi:id="292" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="76" endOffset="1697" startColumn="5" endLine="76" endColumn="8" startOffset="1694" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="293">
          <position xmi:type="position:Position" xmi:id="294" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="76" endOffset="1706" startColumn="10" endLine="76" endColumn="17" startOffset="1699" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="295" event="281">
            <position xmi:type="position:Position" xmi:id="296" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="76" endOffset="1706" startColumn="10" endLine="76" endColumn="17" startOffset="1699" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="297">
              <position xmi:type="position:Position" xmi:id="298" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="76" endOffset="1706" startColumn="10" endLine="76" endColumn="17" startOffset="1699" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="299" value="true">
        <position xmi:type="position:Position" xmi:id="300" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="75" endOffset="1686" startColumn="5" endLine="75" endColumn="10" startOffset="1681" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="301">
          <position xmi:type="position:Position" xmi:id="302" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="75" endOffset="1686" startColumn="5" endLine="75" endColumn="10" startOffset="1681" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="303" name="Active">
      <position xmi:type="position:Position" xmi:id="304" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="77" endOffset="1738" startColumn="12" endLine="77" endColumn="17" startOffset="1733" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="305" target="285">
        <position xmi:type="position:Position" xmi:id="306" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="78" endOffset="1749" startColumn="5" endLine="78" endColumn="8" startOffset="1746" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="307">
          <position xmi:type="position:Position" xmi:id="308" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="78" endOffset="1760" startColumn="10" endLine="78" endColumn="19" startOffset="1751" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="309" event="283">
            <position xmi:type="position:Position" xmi:id="310" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="78" endOffset="1760" startColumn="10" endLine="78" endColumn="19" startOffset="1751" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="311">
              <position xmi:type="position:Position" xmi:id="312" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="78" endOffset="1760" startColumn="10" endLine="78" endColumn="19" startOffset="1751" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="313" name="FLP" kind="Plant">
    <position xmi:type="position:Position" xmi:id="314" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="80" endOffset="1801" startColumn="17" endLine="80" endColumn="19" startOffset="1799" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="315" name="u_active" controllable="false">
      <position xmi:type="position:Position" xmi:id="316" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="81" endOffset="1829" startColumn="18" endLine="81" endColumn="25" startOffset="1822" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="317" name="u_inactive" controllable="false">
      <position xmi:type="position:Position" xmi:id="318" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="82" endOffset="1859" startColumn="18" endLine="82" endColumn="27" startOffset="1850" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="319" name="Inactive">
      <position xmi:type="position:Position" xmi:id="320" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="83" endOffset="1881" startColumn="12" endLine="83" endColumn="19" startOffset="1874" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="321" value="true">
        <position xmi:type="position:Position" xmi:id="322" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="84" endOffset="1895" startColumn="5" endLine="84" endColumn="11" startOffset="1889" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="323">
          <position xmi:type="position:Position" xmi:id="324" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="84" endOffset="1895" startColumn="5" endLine="84" endColumn="11" startOffset="1889" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="325" target="337">
        <position xmi:type="position:Position" xmi:id="326" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="86" endOffset="1919" startColumn="5" endLine="86" endColumn="8" startOffset="1916" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="327">
          <position xmi:type="position:Position" xmi:id="328" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="86" endOffset="1928" startColumn="10" endLine="86" endColumn="17" startOffset="1921" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="329" event="315">
            <position xmi:type="position:Position" xmi:id="330" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="86" endOffset="1928" startColumn="10" endLine="86" endColumn="17" startOffset="1921" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="331">
              <position xmi:type="position:Position" xmi:id="332" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="86" endOffset="1928" startColumn="10" endLine="86" endColumn="17" startOffset="1921" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="333" value="true">
        <position xmi:type="position:Position" xmi:id="334" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="85" endOffset="1908" startColumn="5" endLine="85" endColumn="10" startOffset="1903" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="335">
          <position xmi:type="position:Position" xmi:id="336" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="85" endOffset="1908" startColumn="5" endLine="85" endColumn="10" startOffset="1903" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="337" name="Active">
      <position xmi:type="position:Position" xmi:id="338" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="87" endOffset="1960" startColumn="12" endLine="87" endColumn="17" startOffset="1955" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="339" target="319">
        <position xmi:type="position:Position" xmi:id="340" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="88" endOffset="1971" startColumn="5" endLine="88" endColumn="8" startOffset="1968" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="341">
          <position xmi:type="position:Position" xmi:id="342" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="88" endOffset="1982" startColumn="10" endLine="88" endColumn="19" startOffset="1973" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="343" event="317">
            <position xmi:type="position:Position" xmi:id="344" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="88" endOffset="1982" startColumn="10" endLine="88" endColumn="19" startOffset="1973" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="345">
              <position xmi:type="position:Position" xmi:id="346" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="88" endOffset="1982" startColumn="10" endLine="88" endColumn="19" startOffset="1973" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="347" name="BLP" kind="Plant">
    <position xmi:type="position:Position" xmi:id="348" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="90" endOffset="2023" startColumn="17" endLine="90" endColumn="19" startOffset="2021" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="349" name="u_active" controllable="false">
      <position xmi:type="position:Position" xmi:id="350" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="91" endOffset="2051" startColumn="18" endLine="91" endColumn="25" startOffset="2044" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="351" name="u_inactive" controllable="false">
      <position xmi:type="position:Position" xmi:id="352" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="92" endOffset="2081" startColumn="18" endLine="92" endColumn="27" startOffset="2072" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="353" name="Inactive">
      <position xmi:type="position:Position" xmi:id="354" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="93" endOffset="2103" startColumn="12" endLine="93" endColumn="19" startOffset="2096" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="355" value="true">
        <position xmi:type="position:Position" xmi:id="356" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="94" endOffset="2117" startColumn="5" endLine="94" endColumn="11" startOffset="2111" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="357">
          <position xmi:type="position:Position" xmi:id="358" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="94" endOffset="2117" startColumn="5" endLine="94" endColumn="11" startOffset="2111" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="359" target="371">
        <position xmi:type="position:Position" xmi:id="360" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="96" endOffset="2141" startColumn="5" endLine="96" endColumn="8" startOffset="2138" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="361">
          <position xmi:type="position:Position" xmi:id="362" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="96" endOffset="2150" startColumn="10" endLine="96" endColumn="17" startOffset="2143" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="363" event="349">
            <position xmi:type="position:Position" xmi:id="364" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="96" endOffset="2150" startColumn="10" endLine="96" endColumn="17" startOffset="2143" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="365">
              <position xmi:type="position:Position" xmi:id="366" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="96" endOffset="2150" startColumn="10" endLine="96" endColumn="17" startOffset="2143" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="367" value="true">
        <position xmi:type="position:Position" xmi:id="368" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="95" endOffset="2130" startColumn="5" endLine="95" endColumn="10" startOffset="2125" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="369">
          <position xmi:type="position:Position" xmi:id="370" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="95" endOffset="2130" startColumn="5" endLine="95" endColumn="10" startOffset="2125" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="371" name="Active">
      <position xmi:type="position:Position" xmi:id="372" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="97" endOffset="2182" startColumn="12" endLine="97" endColumn="17" startOffset="2177" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="373" target="353">
        <position xmi:type="position:Position" xmi:id="374" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="98" endOffset="2193" startColumn="5" endLine="98" endColumn="8" startOffset="2190" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="375">
          <position xmi:type="position:Position" xmi:id="376" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="98" endOffset="2204" startColumn="10" endLine="98" endColumn="19" startOffset="2195" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="377" event="351">
            <position xmi:type="position:Position" xmi:id="378" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="98" endOffset="2204" startColumn="10" endLine="98" endColumn="19" startOffset="2195" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="379">
              <position xmi:type="position:Position" xmi:id="380" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="98" endOffset="2204" startColumn="10" endLine="98" endColumn="19" startOffset="2195" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="381" name="FSP" kind="Plant">
    <position xmi:type="position:Position" xmi:id="382" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="100" endOffset="2245" startColumn="17" endLine="100" endColumn="19" startOffset="2243" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="383" name="u_active" controllable="false">
      <position xmi:type="position:Position" xmi:id="384" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="101" endOffset="2273" startColumn="18" endLine="101" endColumn="25" startOffset="2266" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="385" name="u_inactive" controllable="false">
      <position xmi:type="position:Position" xmi:id="386" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="102" endOffset="2303" startColumn="18" endLine="102" endColumn="27" startOffset="2294" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="387" name="Inactive">
      <position xmi:type="position:Position" xmi:id="388" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="103" endOffset="2325" startColumn="12" endLine="103" endColumn="19" startOffset="2318" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="389" value="true">
        <position xmi:type="position:Position" xmi:id="390" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="104" endOffset="2339" startColumn="5" endLine="104" endColumn="11" startOffset="2333" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="391">
          <position xmi:type="position:Position" xmi:id="392" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="104" endOffset="2339" startColumn="5" endLine="104" endColumn="11" startOffset="2333" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="393" target="405">
        <position xmi:type="position:Position" xmi:id="394" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="106" endOffset="2363" startColumn="5" endLine="106" endColumn="8" startOffset="2360" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="395">
          <position xmi:type="position:Position" xmi:id="396" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="106" endOffset="2372" startColumn="10" endLine="106" endColumn="17" startOffset="2365" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="397" event="383">
            <position xmi:type="position:Position" xmi:id="398" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="106" endOffset="2372" startColumn="10" endLine="106" endColumn="17" startOffset="2365" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="399">
              <position xmi:type="position:Position" xmi:id="400" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="106" endOffset="2372" startColumn="10" endLine="106" endColumn="17" startOffset="2365" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="401" value="true">
        <position xmi:type="position:Position" xmi:id="402" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="105" endOffset="2352" startColumn="5" endLine="105" endColumn="10" startOffset="2347" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="403">
          <position xmi:type="position:Position" xmi:id="404" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="105" endOffset="2352" startColumn="5" endLine="105" endColumn="10" startOffset="2347" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="405" name="Active">
      <position xmi:type="position:Position" xmi:id="406" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="107" endOffset="2404" startColumn="12" endLine="107" endColumn="17" startOffset="2399" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="407" target="387">
        <position xmi:type="position:Position" xmi:id="408" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="108" endOffset="2415" startColumn="5" endLine="108" endColumn="8" startOffset="2412" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="409">
          <position xmi:type="position:Position" xmi:id="410" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="108" endOffset="2426" startColumn="10" endLine="108" endColumn="19" startOffset="2417" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="411" event="385">
            <position xmi:type="position:Position" xmi:id="412" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="108" endOffset="2426" startColumn="10" endLine="108" endColumn="19" startOffset="2417" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="413">
              <position xmi:type="position:Position" xmi:id="414" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="108" endOffset="2426" startColumn="10" endLine="108" endColumn="19" startOffset="2417" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="415" name="BSP" kind="Plant">
    <position xmi:type="position:Position" xmi:id="416" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="110" endOffset="2467" startColumn="17" endLine="110" endColumn="19" startOffset="2465" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="417" name="u_active" controllable="false">
      <position xmi:type="position:Position" xmi:id="418" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="111" endOffset="2495" startColumn="18" endLine="111" endColumn="25" startOffset="2488" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="419" name="u_inactive" controllable="false">
      <position xmi:type="position:Position" xmi:id="420" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="112" endOffset="2525" startColumn="18" endLine="112" endColumn="27" startOffset="2516" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="421" name="Inactive">
      <position xmi:type="position:Position" xmi:id="422" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="113" endOffset="2547" startColumn="12" endLine="113" endColumn="19" startOffset="2540" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="423" value="true">
        <position xmi:type="position:Position" xmi:id="424" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="114" endOffset="2561" startColumn="5" endLine="114" endColumn="11" startOffset="2555" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="425">
          <position xmi:type="position:Position" xmi:id="426" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="114" endOffset="2561" startColumn="5" endLine="114" endColumn="11" startOffset="2555" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="427" target="439">
        <position xmi:type="position:Position" xmi:id="428" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="116" endOffset="2585" startColumn="5" endLine="116" endColumn="8" startOffset="2582" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="429">
          <position xmi:type="position:Position" xmi:id="430" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="116" endOffset="2594" startColumn="10" endLine="116" endColumn="17" startOffset="2587" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="431" event="417">
            <position xmi:type="position:Position" xmi:id="432" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="116" endOffset="2594" startColumn="10" endLine="116" endColumn="17" startOffset="2587" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="433">
              <position xmi:type="position:Position" xmi:id="434" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="116" endOffset="2594" startColumn="10" endLine="116" endColumn="17" startOffset="2587" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="435" value="true">
        <position xmi:type="position:Position" xmi:id="436" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="115" endOffset="2574" startColumn="5" endLine="115" endColumn="10" startOffset="2569" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="437">
          <position xmi:type="position:Position" xmi:id="438" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="115" endOffset="2574" startColumn="5" endLine="115" endColumn="10" startOffset="2569" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="439" name="Active">
      <position xmi:type="position:Position" xmi:id="440" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="117" endOffset="2626" startColumn="12" endLine="117" endColumn="17" startOffset="2621" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="441" target="421">
        <position xmi:type="position:Position" xmi:id="442" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="118" endOffset="2637" startColumn="5" endLine="118" endColumn="8" startOffset="2634" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="443">
          <position xmi:type="position:Position" xmi:id="444" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="118" endOffset="2648" startColumn="10" endLine="118" endColumn="19" startOffset="2639" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="445" event="419">
            <position xmi:type="position:Position" xmi:id="446" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="118" endOffset="2648" startColumn="10" endLine="118" endColumn="19" startOffset="2639" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="447">
              <position xmi:type="position:Position" xmi:id="448" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="118" endOffset="2648" startColumn="10" endLine="118" endColumn="19" startOffset="2639" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="449" name="BA" kind="Plant">
    <position xmi:type="position:Position" xmi:id="450" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="120" endOffset="2688" startColumn="17" endLine="120" endColumn="18" startOffset="2687" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="451" name="u_OK" controllable="false">
      <position xmi:type="position:Position" xmi:id="452" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="121" endOffset="2712" startColumn="18" endLine="121" endColumn="21" startOffset="2709" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="453" name="u_Empty" controllable="false">
      <position xmi:type="position:Position" xmi:id="454" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="122" endOffset="2739" startColumn="18" endLine="122" endColumn="24" startOffset="2733" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="455" name="OK">
      <position xmi:type="position:Position" xmi:id="456" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="123" endOffset="2755" startColumn="12" endLine="123" endColumn="13" startOffset="2754" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="457" value="true">
        <position xmi:type="position:Position" xmi:id="458" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="124" endOffset="2769" startColumn="5" endLine="124" endColumn="11" startOffset="2763" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="459">
          <position xmi:type="position:Position" xmi:id="460" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="124" endOffset="2769" startColumn="5" endLine="124" endColumn="11" startOffset="2763" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="461" target="473">
        <position xmi:type="position:Position" xmi:id="462" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="126" endOffset="2793" startColumn="5" endLine="126" endColumn="8" startOffset="2790" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="463">
          <position xmi:type="position:Position" xmi:id="464" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="126" endOffset="2801" startColumn="10" endLine="126" endColumn="16" startOffset="2795" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="465" event="453">
            <position xmi:type="position:Position" xmi:id="466" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="126" endOffset="2801" startColumn="10" endLine="126" endColumn="16" startOffset="2795" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="467">
              <position xmi:type="position:Position" xmi:id="468" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="126" endOffset="2801" startColumn="10" endLine="126" endColumn="16" startOffset="2795" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="469" value="true">
        <position xmi:type="position:Position" xmi:id="470" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="125" endOffset="2782" startColumn="5" endLine="125" endColumn="10" startOffset="2777" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="471">
          <position xmi:type="position:Position" xmi:id="472" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="125" endOffset="2782" startColumn="5" endLine="125" endColumn="10" startOffset="2777" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="473" name="Empty">
      <position xmi:type="position:Position" xmi:id="474" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="127" endOffset="2831" startColumn="12" endLine="127" endColumn="16" startOffset="2827" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="475" target="455">
        <position xmi:type="position:Position" xmi:id="476" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="128" endOffset="2842" startColumn="5" endLine="128" endColumn="8" startOffset="2839" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="477">
          <position xmi:type="position:Position" xmi:id="478" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="128" endOffset="2847" startColumn="10" endLine="128" endColumn="13" startOffset="2844" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="479" event="451">
            <position xmi:type="position:Position" xmi:id="480" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="128" endOffset="2847" startColumn="10" endLine="128" endColumn="13" startOffset="2844" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="481">
              <position xmi:type="position:Position" xmi:id="482" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="128" endOffset="2847" startColumn="10" endLine="128" endColumn="13" startOffset="2844" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="483" name="RideControl" kind="Plant">
    <position xmi:type="position:Position" xmi:id="484" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="130" endOffset="2890" startColumn="17" endLine="130" endColumn="27" startOffset="2880" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="485" name="u_stop" controllable="false">
      <position xmi:type="position:Position" xmi:id="486" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="131" endOffset="2916" startColumn="18" endLine="131" endColumn="23" startOffset="2911" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="487" name="u_start" controllable="false">
      <position xmi:type="position:Position" xmi:id="488" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="132" endOffset="2943" startColumn="18" endLine="132" endColumn="24" startOffset="2937" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="489" name="Stop">
      <position xmi:type="position:Position" xmi:id="490" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="133" endOffset="2961" startColumn="12" endLine="133" endColumn="15" startOffset="2958" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="491" target="507">
        <position xmi:type="position:Position" xmi:id="492" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="134" endOffset="2972" startColumn="5" endLine="134" endColumn="8" startOffset="2969" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="493">
          <position xmi:type="position:Position" xmi:id="494" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="134" endOffset="2980" startColumn="10" endLine="134" endColumn="16" startOffset="2974" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="495" event="487">
            <position xmi:type="position:Position" xmi:id="496" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="134" endOffset="2980" startColumn="10" endLine="134" endColumn="16" startOffset="2974" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="497">
              <position xmi:type="position:Position" xmi:id="498" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="134" endOffset="2980" startColumn="10" endLine="134" endColumn="16" startOffset="2974" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="499">
        <position xmi:type="position:Position" xmi:id="500" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="135" endOffset="3002" startColumn="5" endLine="135" endColumn="8" startOffset="2999" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="501">
          <position xmi:type="position:Position" xmi:id="502" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="135" endOffset="3009" startColumn="10" endLine="135" endColumn="15" startOffset="3004" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="503" event="485">
            <position xmi:type="position:Position" xmi:id="504" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="135" endOffset="3009" startColumn="10" endLine="135" endColumn="15" startOffset="3004" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="505">
              <position xmi:type="position:Position" xmi:id="506" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="135" endOffset="3009" startColumn="10" endLine="135" endColumn="15" startOffset="3004" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="507" name="Start">
      <position xmi:type="position:Position" xmi:id="508" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="136" endOffset="3028" startColumn="12" endLine="136" endColumn="16" startOffset="3024" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="509" value="true">
        <position xmi:type="position:Position" xmi:id="510" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="137" endOffset="3042" startColumn="5" endLine="137" endColumn="11" startOffset="3036" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="511">
          <position xmi:type="position:Position" xmi:id="512" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="137" endOffset="3042" startColumn="5" endLine="137" endColumn="11" startOffset="3036" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="513" target="489">
        <position xmi:type="position:Position" xmi:id="514" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="139" endOffset="3066" startColumn="5" endLine="139" endColumn="8" startOffset="3063" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="515">
          <position xmi:type="position:Position" xmi:id="516" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="139" endOffset="3073" startColumn="10" endLine="139" endColumn="15" startOffset="3068" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="517" event="485">
            <position xmi:type="position:Position" xmi:id="518" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="139" endOffset="3073" startColumn="10" endLine="139" endColumn="15" startOffset="3068" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="519">
              <position xmi:type="position:Position" xmi:id="520" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="139" endOffset="3073" startColumn="10" endLine="139" endColumn="15" startOffset="3068" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="521">
        <position xmi:type="position:Position" xmi:id="522" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="140" endOffset="3094" startColumn="5" endLine="140" endColumn="8" startOffset="3091" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="523">
          <position xmi:type="position:Position" xmi:id="524" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="140" endOffset="3102" startColumn="10" endLine="140" endColumn="16" startOffset="3096" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="525" event="487">
            <position xmi:type="position:Position" xmi:id="526" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="140" endOffset="3102" startColumn="10" endLine="140" endColumn="16" startOffset="3096" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="527">
              <position xmi:type="position:Position" xmi:id="528" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="140" endOffset="3102" startColumn="10" endLine="140" endColumn="16" startOffset="3096" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="529" value="true">
        <position xmi:type="position:Position" xmi:id="530" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="138" endOffset="3055" startColumn="5" endLine="138" endColumn="10" startOffset="3050" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="531">
          <position xmi:type="position:Position" xmi:id="532" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="138" endOffset="3055" startColumn="5" endLine="138" endColumn="10" startOffset="3050" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="533" name="SH" kind="Plant">
    <position xmi:type="position:Position" xmi:id="534" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="142" endOffset="3128" startColumn="17" endLine="142" endColumn="18" startOffset="3127" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="535" name="c_enable" controllable="true">
      <position xmi:type="position:Position" xmi:id="536" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="143" endOffset="3154" startColumn="16" endLine="143" endColumn="23" startOffset="3147" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="537" name="c_disable" controllable="true">
      <position xmi:type="position:Position" xmi:id="538" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="144" endOffset="3181" startColumn="16" endLine="144" endColumn="24" startOffset="3173" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="539" name="u_error" controllable="false">
      <position xmi:type="position:Position" xmi:id="540" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="145" endOffset="3208" startColumn="18" endLine="145" endColumn="24" startOffset="3202" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="541" name="u_chdir" controllable="false">
      <position xmi:type="position:Position" xmi:id="542" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="146" endOffset="3235" startColumn="18" endLine="146" endColumn="24" startOffset="3229" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="543" name="Off">
      <position xmi:type="position:Position" xmi:id="544" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="147" endOffset="3252" startColumn="12" endLine="147" endColumn="14" startOffset="3250" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="545" value="true">
        <position xmi:type="position:Position" xmi:id="546" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="148" endOffset="3266" startColumn="5" endLine="148" endColumn="11" startOffset="3260" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="547">
          <position xmi:type="position:Position" xmi:id="548" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="148" endOffset="3266" startColumn="5" endLine="148" endColumn="11" startOffset="3260" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="549" target="561">
        <position xmi:type="position:Position" xmi:id="550" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="150" endOffset="3290" startColumn="5" endLine="150" endColumn="8" startOffset="3287" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="551">
          <position xmi:type="position:Position" xmi:id="552" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="150" endOffset="3299" startColumn="10" endLine="150" endColumn="17" startOffset="3292" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="553" event="535">
            <position xmi:type="position:Position" xmi:id="554" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="150" endOffset="3299" startColumn="10" endLine="150" endColumn="17" startOffset="3292" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="555">
              <position xmi:type="position:Position" xmi:id="556" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="150" endOffset="3299" startColumn="10" endLine="150" endColumn="17" startOffset="3292" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="557" value="true">
        <position xmi:type="position:Position" xmi:id="558" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="149" endOffset="3279" startColumn="5" endLine="149" endColumn="10" startOffset="3274" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="559">
          <position xmi:type="position:Position" xmi:id="560" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="149" endOffset="3279" startColumn="5" endLine="149" endColumn="10" startOffset="3274" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="561" name="On">
      <position xmi:type="position:Position" xmi:id="562" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="151" endOffset="3323" startColumn="12" endLine="151" endColumn="13" startOffset="3322" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="563">
        <position xmi:type="position:Position" xmi:id="564" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="152" endOffset="3334" startColumn="5" endLine="152" endColumn="8" startOffset="3331" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="565">
          <position xmi:type="position:Position" xmi:id="566" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="152" endOffset="3342" startColumn="10" endLine="152" endColumn="16" startOffset="3336" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="567" event="541">
            <position xmi:type="position:Position" xmi:id="568" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="152" endOffset="3342" startColumn="10" endLine="152" endColumn="16" startOffset="3336" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="569">
              <position xmi:type="position:Position" xmi:id="570" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="152" endOffset="3342" startColumn="10" endLine="152" endColumn="16" startOffset="3336" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="571">
        <position xmi:type="position:Position" xmi:id="572" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="153" endOffset="3353" startColumn="5" endLine="153" endColumn="8" startOffset="3350" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="573">
          <position xmi:type="position:Position" xmi:id="574" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="153" endOffset="3361" startColumn="10" endLine="153" endColumn="16" startOffset="3355" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="575" event="539">
            <position xmi:type="position:Position" xmi:id="576" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="153" endOffset="3361" startColumn="10" endLine="153" endColumn="16" startOffset="3355" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="577">
              <position xmi:type="position:Position" xmi:id="578" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="153" endOffset="3361" startColumn="10" endLine="153" endColumn="16" startOffset="3355" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="579" target="543">
        <position xmi:type="position:Position" xmi:id="580" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="154" endOffset="3372" startColumn="5" endLine="154" endColumn="8" startOffset="3369" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="581">
          <position xmi:type="position:Position" xmi:id="582" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="154" endOffset="3382" startColumn="10" endLine="154" endColumn="18" startOffset="3374" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="583" event="537">
            <position xmi:type="position:Position" xmi:id="584" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="154" endOffset="3382" startColumn="10" endLine="154" endColumn="18" startOffset="3374" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="585">
              <position xmi:type="position:Position" xmi:id="586" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="154" endOffset="3382" startColumn="10" endLine="154" endColumn="18" startOffset="3374" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="587" name="SM" kind="Plant">
    <position xmi:type="position:Position" xmi:id="588" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="156" endOffset="3417" startColumn="17" endLine="156" endColumn="18" startOffset="3416" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="589" name="c_enable" controllable="true">
      <position xmi:type="position:Position" xmi:id="590" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="157" endOffset="3443" startColumn="16" endLine="157" endColumn="23" startOffset="3436" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="591" name="c_disable" controllable="true">
      <position xmi:type="position:Position" xmi:id="592" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="158" endOffset="3470" startColumn="16" endLine="158" endColumn="24" startOffset="3462" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="593" name="u_error" controllable="false">
      <position xmi:type="position:Position" xmi:id="594" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="159" endOffset="3497" startColumn="18" endLine="159" endColumn="24" startOffset="3491" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="595" name="Off">
      <position xmi:type="position:Position" xmi:id="596" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="160" endOffset="3514" startColumn="12" endLine="160" endColumn="14" startOffset="3512" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="597" value="true">
        <position xmi:type="position:Position" xmi:id="598" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="161" endOffset="3528" startColumn="5" endLine="161" endColumn="11" startOffset="3522" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="599">
          <position xmi:type="position:Position" xmi:id="600" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="161" endOffset="3528" startColumn="5" endLine="161" endColumn="11" startOffset="3522" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="601" target="613">
        <position xmi:type="position:Position" xmi:id="602" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="163" endOffset="3552" startColumn="5" endLine="163" endColumn="8" startOffset="3549" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="603">
          <position xmi:type="position:Position" xmi:id="604" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="163" endOffset="3561" startColumn="10" endLine="163" endColumn="17" startOffset="3554" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="605" event="589">
            <position xmi:type="position:Position" xmi:id="606" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="163" endOffset="3561" startColumn="10" endLine="163" endColumn="17" startOffset="3554" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="607">
              <position xmi:type="position:Position" xmi:id="608" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="163" endOffset="3561" startColumn="10" endLine="163" endColumn="17" startOffset="3554" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="609" value="true">
        <position xmi:type="position:Position" xmi:id="610" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="162" endOffset="3541" startColumn="5" endLine="162" endColumn="10" startOffset="3536" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="611">
          <position xmi:type="position:Position" xmi:id="612" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="162" endOffset="3541" startColumn="5" endLine="162" endColumn="10" startOffset="3536" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="613" name="On">
      <position xmi:type="position:Position" xmi:id="614" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="164" endOffset="3585" startColumn="12" endLine="164" endColumn="13" startOffset="3584" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="615" target="595">
        <position xmi:type="position:Position" xmi:id="616" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="165" endOffset="3596" startColumn="5" endLine="165" endColumn="8" startOffset="3593" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="617">
          <position xmi:type="position:Position" xmi:id="618" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="165" endOffset="3604" startColumn="10" endLine="165" endColumn="16" startOffset="3598" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="619" event="593">
            <position xmi:type="position:Position" xmi:id="620" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="165" endOffset="3604" startColumn="10" endLine="165" endColumn="16" startOffset="3598" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="621">
              <position xmi:type="position:Position" xmi:id="622" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="165" endOffset="3604" startColumn="10" endLine="165" endColumn="16" startOffset="3598" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="623" target="595">
        <position xmi:type="position:Position" xmi:id="624" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="166" endOffset="3624" startColumn="5" endLine="166" endColumn="8" startOffset="3621" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="625">
          <position xmi:type="position:Position" xmi:id="626" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="166" endOffset="3634" startColumn="10" endLine="166" endColumn="18" startOffset="3626" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="627" event="591">
            <position xmi:type="position:Position" xmi:id="628" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="166" endOffset="3634" startColumn="10" endLine="166" endColumn="18" startOffset="3626" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="629">
              <position xmi:type="position:Position" xmi:id="630" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="166" endOffset="3634" startColumn="10" endLine="166" endColumn="18" startOffset="3626" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="631" name="DM" kind="Plant">
    <position xmi:type="position:Position" xmi:id="632" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="168" endOffset="3669" startColumn="17" endLine="168" endColumn="18" startOffset="3668" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="633" name="c_fw" controllable="true">
      <position xmi:type="position:Position" xmi:id="634" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="169" endOffset="3691" startColumn="16" endLine="169" endColumn="19" startOffset="3688" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="635" name="c_fwslow" controllable="true">
      <position xmi:type="position:Position" xmi:id="636" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="170" endOffset="3717" startColumn="16" endLine="170" endColumn="23" startOffset="3710" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="637" name="c_fwstop" controllable="true">
      <position xmi:type="position:Position" xmi:id="638" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="171" endOffset="3743" startColumn="16" endLine="171" endColumn="23" startOffset="3736" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="639" name="c_bw" controllable="true">
      <position xmi:type="position:Position" xmi:id="640" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="172" endOffset="3765" startColumn="16" endLine="172" endColumn="19" startOffset="3762" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="641" name="c_bwslow" controllable="true">
      <position xmi:type="position:Position" xmi:id="642" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="173" endOffset="3791" startColumn="16" endLine="173" endColumn="23" startOffset="3784" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="643" name="c_bwstop" controllable="true">
      <position xmi:type="position:Position" xmi:id="644" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="174" endOffset="3817" startColumn="16" endLine="174" endColumn="23" startOffset="3810" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="645" name="c_stop" controllable="true">
      <position xmi:type="position:Position" xmi:id="646" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="175" endOffset="3841" startColumn="16" endLine="175" endColumn="21" startOffset="3836" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="647" name="c_enable_fw" controllable="true">
      <position xmi:type="position:Position" xmi:id="648" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="176" endOffset="3870" startColumn="16" endLine="176" endColumn="26" startOffset="3860" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="649" name="c_enable_bw" controllable="true">
      <position xmi:type="position:Position" xmi:id="650" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="177" endOffset="3899" startColumn="16" endLine="177" endColumn="26" startOffset="3889" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="651" name="u_error" controllable="false">
      <position xmi:type="position:Position" xmi:id="652" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="178" endOffset="3926" startColumn="18" endLine="178" endColumn="24" startOffset="3920" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="653" name="u_disable" controllable="false">
      <position xmi:type="position:Position" xmi:id="654" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="179" endOffset="3955" startColumn="18" endLine="179" endColumn="26" startOffset="3947" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="655" name="Off">
      <position xmi:type="position:Position" xmi:id="656" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="180" endOffset="3972" startColumn="12" endLine="180" endColumn="14" startOffset="3970" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="657" value="true">
        <position xmi:type="position:Position" xmi:id="658" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="181" endOffset="3986" startColumn="5" endLine="181" endColumn="11" startOffset="3980" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="659">
          <position xmi:type="position:Position" xmi:id="660" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="181" endOffset="3986" startColumn="5" endLine="181" endColumn="11" startOffset="3980" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="661" target="689">
        <position xmi:type="position:Position" xmi:id="662" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="183" endOffset="4010" startColumn="5" endLine="183" endColumn="8" startOffset="4007" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="663">
          <position xmi:type="position:Position" xmi:id="664" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="183" endOffset="4022" startColumn="10" endLine="183" endColumn="20" startOffset="4012" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="665" event="647">
            <position xmi:type="position:Position" xmi:id="666" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="183" endOffset="4022" startColumn="10" endLine="183" endColumn="20" startOffset="4012" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="667">
              <position xmi:type="position:Position" xmi:id="668" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="183" endOffset="4022" startColumn="10" endLine="183" endColumn="20" startOffset="4012" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="669" target="689">
        <position xmi:type="position:Position" xmi:id="670" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="184" endOffset="4041" startColumn="5" endLine="184" endColumn="8" startOffset="4038" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="671">
          <position xmi:type="position:Position" xmi:id="672" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="184" endOffset="4053" startColumn="10" endLine="184" endColumn="20" startOffset="4043" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="673" event="649">
            <position xmi:type="position:Position" xmi:id="674" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="184" endOffset="4053" startColumn="10" endLine="184" endColumn="20" startOffset="4043" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="675">
              <position xmi:type="position:Position" xmi:id="676" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="184" endOffset="4053" startColumn="10" endLine="184" endColumn="20" startOffset="4043" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="677" target="755">
        <position xmi:type="position:Position" xmi:id="678" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="185" endOffset="4072" startColumn="5" endLine="185" endColumn="8" startOffset="4069" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="679">
          <position xmi:type="position:Position" xmi:id="680" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="185" endOffset="4079" startColumn="10" endLine="185" endColumn="15" startOffset="4074" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="681" event="645">
            <position xmi:type="position:Position" xmi:id="682" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="185" endOffset="4079" startColumn="10" endLine="185" endColumn="15" startOffset="4074" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="683">
              <position xmi:type="position:Position" xmi:id="684" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="185" endOffset="4079" startColumn="10" endLine="185" endColumn="15" startOffset="4074" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="685" value="true">
        <position xmi:type="position:Position" xmi:id="686" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="182" endOffset="3999" startColumn="5" endLine="182" endColumn="10" startOffset="3994" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="687">
          <position xmi:type="position:Position" xmi:id="688" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="182" endOffset="3999" startColumn="5" endLine="182" endColumn="10" startOffset="3994" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="689" name="On">
      <position xmi:type="position:Position" xmi:id="690" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="186" endOffset="4109" startColumn="12" endLine="186" endColumn="13" startOffset="4108" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="691">
        <position xmi:type="position:Position" xmi:id="692" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="187" endOffset="4120" startColumn="5" endLine="187" endColumn="8" startOffset="4117" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="693">
          <position xmi:type="position:Position" xmi:id="694" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="187" endOffset="4125" startColumn="10" endLine="187" endColumn="13" startOffset="4122" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="695" event="633">
            <position xmi:type="position:Position" xmi:id="696" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="187" endOffset="4125" startColumn="10" endLine="187" endColumn="13" startOffset="4122" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="697">
              <position xmi:type="position:Position" xmi:id="698" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="187" endOffset="4125" startColumn="10" endLine="187" endColumn="13" startOffset="4122" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="699">
        <position xmi:type="position:Position" xmi:id="700" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="188" endOffset="4136" startColumn="5" endLine="188" endColumn="8" startOffset="4133" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="701">
          <position xmi:type="position:Position" xmi:id="702" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="188" endOffset="4145" startColumn="10" endLine="188" endColumn="17" startOffset="4138" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="703" event="635">
            <position xmi:type="position:Position" xmi:id="704" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="188" endOffset="4145" startColumn="10" endLine="188" endColumn="17" startOffset="4138" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="705">
              <position xmi:type="position:Position" xmi:id="706" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="188" endOffset="4145" startColumn="10" endLine="188" endColumn="17" startOffset="4138" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="707">
        <position xmi:type="position:Position" xmi:id="708" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="189" endOffset="4156" startColumn="5" endLine="189" endColumn="8" startOffset="4153" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="709">
          <position xmi:type="position:Position" xmi:id="710" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="189" endOffset="4165" startColumn="10" endLine="189" endColumn="17" startOffset="4158" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="711" event="637">
            <position xmi:type="position:Position" xmi:id="712" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="189" endOffset="4165" startColumn="10" endLine="189" endColumn="17" startOffset="4158" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="713">
              <position xmi:type="position:Position" xmi:id="714" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="189" endOffset="4165" startColumn="10" endLine="189" endColumn="17" startOffset="4158" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="715">
        <position xmi:type="position:Position" xmi:id="716" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="190" endOffset="4176" startColumn="5" endLine="190" endColumn="8" startOffset="4173" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="717">
          <position xmi:type="position:Position" xmi:id="718" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="190" endOffset="4181" startColumn="10" endLine="190" endColumn="13" startOffset="4178" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="719" event="639">
            <position xmi:type="position:Position" xmi:id="720" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="190" endOffset="4181" startColumn="10" endLine="190" endColumn="13" startOffset="4178" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="721">
              <position xmi:type="position:Position" xmi:id="722" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="190" endOffset="4181" startColumn="10" endLine="190" endColumn="13" startOffset="4178" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="723">
        <position xmi:type="position:Position" xmi:id="724" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="191" endOffset="4192" startColumn="5" endLine="191" endColumn="8" startOffset="4189" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="725">
          <position xmi:type="position:Position" xmi:id="726" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="191" endOffset="4201" startColumn="10" endLine="191" endColumn="17" startOffset="4194" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="727" event="641">
            <position xmi:type="position:Position" xmi:id="728" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="191" endOffset="4201" startColumn="10" endLine="191" endColumn="17" startOffset="4194" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="729">
              <position xmi:type="position:Position" xmi:id="730" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="191" endOffset="4201" startColumn="10" endLine="191" endColumn="17" startOffset="4194" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="731">
        <position xmi:type="position:Position" xmi:id="732" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="192" endOffset="4212" startColumn="5" endLine="192" endColumn="8" startOffset="4209" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="733">
          <position xmi:type="position:Position" xmi:id="734" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="192" endOffset="4221" startColumn="10" endLine="192" endColumn="17" startOffset="4214" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="735" event="643">
            <position xmi:type="position:Position" xmi:id="736" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="192" endOffset="4221" startColumn="10" endLine="192" endColumn="17" startOffset="4214" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="737">
              <position xmi:type="position:Position" xmi:id="738" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="192" endOffset="4221" startColumn="10" endLine="192" endColumn="17" startOffset="4214" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="739" target="755">
        <position xmi:type="position:Position" xmi:id="740" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="193" endOffset="4232" startColumn="5" endLine="193" endColumn="8" startOffset="4229" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="741">
          <position xmi:type="position:Position" xmi:id="742" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="193" endOffset="4239" startColumn="10" endLine="193" endColumn="15" startOffset="4234" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="743" event="645">
            <position xmi:type="position:Position" xmi:id="744" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="193" endOffset="4239" startColumn="10" endLine="193" endColumn="15" startOffset="4234" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="745">
              <position xmi:type="position:Position" xmi:id="746" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="193" endOffset="4239" startColumn="10" endLine="193" endColumn="15" startOffset="4234" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="747" target="655">
        <position xmi:type="position:Position" xmi:id="748" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="194" endOffset="4264" startColumn="5" endLine="194" endColumn="8" startOffset="4261" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="749">
          <position xmi:type="position:Position" xmi:id="750" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="194" endOffset="4272" startColumn="10" endLine="194" endColumn="16" startOffset="4266" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="751" event="651">
            <position xmi:type="position:Position" xmi:id="752" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="194" endOffset="4272" startColumn="10" endLine="194" endColumn="16" startOffset="4266" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="753">
              <position xmi:type="position:Position" xmi:id="754" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="194" endOffset="4272" startColumn="10" endLine="194" endColumn="16" startOffset="4266" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="755" name="Stopping">
      <position xmi:type="position:Position" xmi:id="756" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="195" endOffset="4303" startColumn="12" endLine="195" endColumn="19" startOffset="4296" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="757" target="655">
        <position xmi:type="position:Position" xmi:id="758" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="196" endOffset="4314" startColumn="5" endLine="196" endColumn="8" startOffset="4311" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="759">
          <position xmi:type="position:Position" xmi:id="760" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="196" endOffset="4322" startColumn="10" endLine="196" endColumn="16" startOffset="4316" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="761" event="651">
            <position xmi:type="position:Position" xmi:id="762" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="196" endOffset="4322" startColumn="10" endLine="196" endColumn="16" startOffset="4316" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="763">
              <position xmi:type="position:Position" xmi:id="764" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="196" endOffset="4322" startColumn="10" endLine="196" endColumn="16" startOffset="4316" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="765" target="655">
        <position xmi:type="position:Position" xmi:id="766" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="197" endOffset="4342" startColumn="5" endLine="197" endColumn="8" startOffset="4339" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="767">
          <position xmi:type="position:Position" xmi:id="768" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="197" endOffset="4352" startColumn="10" endLine="197" endColumn="18" startOffset="4344" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="769" event="653">
            <position xmi:type="position:Position" xmi:id="770" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="197" endOffset="4352" startColumn="10" endLine="197" endColumn="18" startOffset="4344" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="771">
              <position xmi:type="position:Position" xmi:id="772" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="197" endOffset="4352" startColumn="10" endLine="197" endColumn="18" startOffset="4344" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="773" name="MM" kind="Plant">
    <position xmi:type="position:Position" xmi:id="774" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="199" endOffset="4387" startColumn="17" endLine="199" endColumn="18" startOffset="4386" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="775" name="c_reset" controllable="true">
      <position xmi:type="position:Position" xmi:id="776" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="200" endOffset="4412" startColumn="16" endLine="200" endColumn="22" startOffset="4406" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="777" name="c_active" controllable="true">
      <position xmi:type="position:Position" xmi:id="778" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="201" endOffset="4438" startColumn="16" endLine="201" endColumn="23" startOffset="4431" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="779" name="c_emergency" controllable="true">
      <position xmi:type="position:Position" xmi:id="780" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="202" endOffset="4467" startColumn="16" endLine="202" endColumn="26" startOffset="4457" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="781" name="Reset">
      <position xmi:type="position:Position" xmi:id="782" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="203" endOffset="4486" startColumn="12" endLine="203" endColumn="16" startOffset="4482" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="783" target="803">
        <position xmi:type="position:Position" xmi:id="784" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="205" endOffset="4510" startColumn="5" endLine="205" endColumn="8" startOffset="4507" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="785">
          <position xmi:type="position:Position" xmi:id="786" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="205" endOffset="4519" startColumn="10" endLine="205" endColumn="17" startOffset="4512" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="787" event="777">
            <position xmi:type="position:Position" xmi:id="788" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="205" endOffset="4519" startColumn="10" endLine="205" endColumn="17" startOffset="4512" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="789">
              <position xmi:type="position:Position" xmi:id="790" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="205" endOffset="4519" startColumn="10" endLine="205" endColumn="17" startOffset="4512" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="791" target="821">
        <position xmi:type="position:Position" xmi:id="792" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="206" endOffset="4542" startColumn="5" endLine="206" endColumn="8" startOffset="4539" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="793">
          <position xmi:type="position:Position" xmi:id="794" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="206" endOffset="4554" startColumn="10" endLine="206" endColumn="20" startOffset="4544" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="795" event="779">
            <position xmi:type="position:Position" xmi:id="796" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="206" endOffset="4554" startColumn="10" endLine="206" endColumn="20" startOffset="4544" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="797">
              <position xmi:type="position:Position" xmi:id="798" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="206" endOffset="4554" startColumn="10" endLine="206" endColumn="20" startOffset="4544" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="799" value="true">
        <position xmi:type="position:Position" xmi:id="800" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="204" endOffset="4499" startColumn="5" endLine="204" endColumn="10" startOffset="4494" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="801">
          <position xmi:type="position:Position" xmi:id="802" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="204" endOffset="4499" startColumn="5" endLine="204" endColumn="10" startOffset="4494" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="803" name="Active">
      <position xmi:type="position:Position" xmi:id="804" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="207" endOffset="4589" startColumn="12" endLine="207" endColumn="17" startOffset="4584" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="805" target="781">
        <position xmi:type="position:Position" xmi:id="806" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="208" endOffset="4600" startColumn="5" endLine="208" endColumn="8" startOffset="4597" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="807">
          <position xmi:type="position:Position" xmi:id="808" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="208" endOffset="4608" startColumn="10" endLine="208" endColumn="16" startOffset="4602" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="809" event="775">
            <position xmi:type="position:Position" xmi:id="810" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="208" endOffset="4608" startColumn="10" endLine="208" endColumn="16" startOffset="4602" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="811">
              <position xmi:type="position:Position" xmi:id="812" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="208" endOffset="4608" startColumn="10" endLine="208" endColumn="16" startOffset="4602" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="813" target="821">
        <position xmi:type="position:Position" xmi:id="814" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="209" endOffset="4630" startColumn="5" endLine="209" endColumn="8" startOffset="4627" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="815">
          <position xmi:type="position:Position" xmi:id="816" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="209" endOffset="4642" startColumn="10" endLine="209" endColumn="20" startOffset="4632" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="817" event="779">
            <position xmi:type="position:Position" xmi:id="818" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="209" endOffset="4642" startColumn="10" endLine="209" endColumn="20" startOffset="4632" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="819">
              <position xmi:type="position:Position" xmi:id="820" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="209" endOffset="4642" startColumn="10" endLine="209" endColumn="20" startOffset="4632" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="821" name="Emergency">
      <position xmi:type="position:Position" xmi:id="822" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="210" endOffset="4680" startColumn="12" endLine="210" endColumn="20" startOffset="4672" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="823" value="true">
        <position xmi:type="position:Position" xmi:id="824" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="211" endOffset="4694" startColumn="5" endLine="211" endColumn="11" startOffset="4688" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="825">
          <position xmi:type="position:Position" xmi:id="826" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="211" endOffset="4694" startColumn="5" endLine="211" endColumn="11" startOffset="4688" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="827" target="781">
        <position xmi:type="position:Position" xmi:id="828" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="212" endOffset="4705" startColumn="5" endLine="212" endColumn="8" startOffset="4702" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="829">
          <position xmi:type="position:Position" xmi:id="830" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="212" endOffset="4713" startColumn="10" endLine="212" endColumn="16" startOffset="4707" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="831" event="775">
            <position xmi:type="position:Position" xmi:id="832" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="212" endOffset="4713" startColumn="10" endLine="212" endColumn="16" startOffset="4707" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="833">
              <position xmi:type="position:Position" xmi:id="834" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="212" endOffset="4713" startColumn="10" endLine="212" endColumn="16" startOffset="4707" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="835" name="emergencyHandler" kind="Supervisor">
    <position xmi:type="position:Position" xmi:id="836" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="214" endOffset="4769" startColumn="22" endLine="214" endColumn="37" startOffset="4754" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="837" name="noError">
      <position xmi:type="position:Position" xmi:id="838" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="216" endOffset="4837" startColumn="12" endLine="216" endColumn="18" startOffset="4831" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="839" value="true">
        <position xmi:type="position:Position" xmi:id="840" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="217" endOffset="4851" startColumn="5" endLine="217" endColumn="11" startOffset="4845" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="841">
          <position xmi:type="position:Position" xmi:id="842" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="217" endOffset="4851" startColumn="5" endLine="217" endColumn="11" startOffset="4845" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="843" target="911">
        <position xmi:type="position:Position" xmi:id="844" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="219" endOffset="4875" startColumn="5" endLine="219" endColumn="8" startOffset="4872" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="845">
          <position xmi:type="position:Position" xmi:id="846" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="219" endOffset="4886" startColumn="10" endLine="219" endColumn="19" startOffset="4877" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="847" event="651">
            <position xmi:type="position:Position" xmi:id="848" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="219" endOffset="4886" startColumn="10" endLine="219" endColumn="19" startOffset="4877" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="849">
              <position xmi:type="position:Position" xmi:id="850" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="219" endOffset="4886" startColumn="10" endLine="219" endColumn="19" startOffset="4877" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="851" target="911">
        <position xmi:type="position:Position" xmi:id="852" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="220" endOffset="4912" startColumn="5" endLine="220" endColumn="8" startOffset="4909" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="853">
          <position xmi:type="position:Position" xmi:id="854" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="220" endOffset="4923" startColumn="10" endLine="220" endColumn="19" startOffset="4914" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="855" event="539">
            <position xmi:type="position:Position" xmi:id="856" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="220" endOffset="4923" startColumn="10" endLine="220" endColumn="19" startOffset="4914" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="857">
              <position xmi:type="position:Position" xmi:id="858" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="220" endOffset="4923" startColumn="10" endLine="220" endColumn="19" startOffset="4914" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="859" target="911">
        <position xmi:type="position:Position" xmi:id="860" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="221" endOffset="4949" startColumn="5" endLine="221" endColumn="8" startOffset="4946" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="861">
          <position xmi:type="position:Position" xmi:id="862" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="221" endOffset="4960" startColumn="10" endLine="221" endColumn="19" startOffset="4951" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="863" event="593">
            <position xmi:type="position:Position" xmi:id="864" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="221" endOffset="4960" startColumn="10" endLine="221" endColumn="19" startOffset="4951" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="865">
              <position xmi:type="position:Position" xmi:id="866" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="221" endOffset="4960" startColumn="10" endLine="221" endColumn="19" startOffset="4951" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="867">
        <position xmi:type="position:Position" xmi:id="868" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="222" endOffset="4986" startColumn="5" endLine="222" endColumn="8" startOffset="4983" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="869">
          <position xmi:type="position:Position" xmi:id="870" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="222" endOffset="4997" startColumn="10" endLine="222" endColumn="19" startOffset="4988" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="871" event="775">
            <position xmi:type="position:Position" xmi:id="872" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="222" endOffset="4997" startColumn="10" endLine="222" endColumn="19" startOffset="4988" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="873">
              <position xmi:type="position:Position" xmi:id="874" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="222" endOffset="4997" startColumn="10" endLine="222" endColumn="19" startOffset="4988" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="875">
        <position xmi:type="position:Position" xmi:id="876" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="223" endOffset="5008" startColumn="5" endLine="223" endColumn="8" startOffset="5005" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="877">
          <position xmi:type="position:Position" xmi:id="878" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="223" endOffset="5023" startColumn="10" endLine="223" endColumn="23" startOffset="5010" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="879" event="779">
            <position xmi:type="position:Position" xmi:id="880" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="223" endOffset="5023" startColumn="10" endLine="223" endColumn="23" startOffset="5010" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="881">
              <position xmi:type="position:Position" xmi:id="882" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="223" endOffset="5023" startColumn="10" endLine="223" endColumn="23" startOffset="5010" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="883">
        <position xmi:type="position:Position" xmi:id="884" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="224" endOffset="5034" startColumn="5" endLine="224" endColumn="8" startOffset="5031" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="885">
          <position xmi:type="position:Position" xmi:id="886" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="224" endOffset="5046" startColumn="10" endLine="224" endColumn="20" startOffset="5036" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="887" event="777">
            <position xmi:type="position:Position" xmi:id="888" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="224" endOffset="5046" startColumn="10" endLine="224" endColumn="20" startOffset="5036" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="889">
              <position xmi:type="position:Position" xmi:id="890" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="224" endOffset="5046" startColumn="10" endLine="224" endColumn="20" startOffset="5036" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="891">
        <position xmi:type="position:Position" xmi:id="892" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="225" endOffset="5057" startColumn="5" endLine="225" endColumn="8" startOffset="5054" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="893">
          <position xmi:type="position:Position" xmi:id="894" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="225" endOffset="5072" startColumn="10" endLine="225" endColumn="23" startOffset="5059" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="895" event="647">
            <position xmi:type="position:Position" xmi:id="896" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="225" endOffset="5072" startColumn="10" endLine="225" endColumn="23" startOffset="5059" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="897">
              <position xmi:type="position:Position" xmi:id="898" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="225" endOffset="5072" startColumn="10" endLine="225" endColumn="23" startOffset="5059" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="899">
        <position xmi:type="position:Position" xmi:id="900" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="226" endOffset="5083" startColumn="5" endLine="226" endColumn="8" startOffset="5080" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="901">
          <position xmi:type="position:Position" xmi:id="902" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="226" endOffset="5098" startColumn="10" endLine="226" endColumn="23" startOffset="5085" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="903" event="649">
            <position xmi:type="position:Position" xmi:id="904" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="226" endOffset="5098" startColumn="10" endLine="226" endColumn="23" startOffset="5085" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="905">
              <position xmi:type="position:Position" xmi:id="906" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="226" endOffset="5098" startColumn="10" endLine="226" endColumn="23" startOffset="5085" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="907" value="true">
        <position xmi:type="position:Position" xmi:id="908" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="218" endOffset="4864" startColumn="5" endLine="218" endColumn="10" startOffset="4859" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="909">
          <position xmi:type="position:Position" xmi:id="910" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="218" endOffset="4864" startColumn="5" endLine="218" endColumn="10" startOffset="4859" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="911" name="Emergency">
      <position xmi:type="position:Position" xmi:id="912" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="227" endOffset="5121" startColumn="12" endLine="227" endColumn="20" startOffset="5113" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="913" target="921">
        <position xmi:type="position:Position" xmi:id="914" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="228" endOffset="5132" startColumn="5" endLine="228" endColumn="8" startOffset="5129" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="915">
          <position xmi:type="position:Position" xmi:id="916" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="228" endOffset="5147" startColumn="10" endLine="228" endColumn="23" startOffset="5134" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="917" event="779">
            <position xmi:type="position:Position" xmi:id="918" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="228" endOffset="5147" startColumn="10" endLine="228" endColumn="23" startOffset="5134" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="919">
              <position xmi:type="position:Position" xmi:id="920" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="228" endOffset="5147" startColumn="10" endLine="228" endColumn="23" startOffset="5134" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="921" name="Stopped">
      <position xmi:type="position:Position" xmi:id="922" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="229" endOffset="5181" startColumn="12" endLine="229" endColumn="18" startOffset="5175" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="923" target="837">
        <position xmi:type="position:Position" xmi:id="924" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="230" endOffset="5192" startColumn="5" endLine="230" endColumn="8" startOffset="5189" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="925">
          <position xmi:type="position:Position" xmi:id="926" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="230" endOffset="5203" startColumn="10" endLine="230" endColumn="19" startOffset="5194" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="927" event="775">
            <position xmi:type="position:Position" xmi:id="928" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="230" endOffset="5203" startColumn="10" endLine="230" endColumn="19" startOffset="5194" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="929">
              <position xmi:type="position:Position" xmi:id="930" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="230" endOffset="5203" startColumn="10" endLine="230" endColumn="19" startOffset="5194" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <monitors xmi:type="automata:Monitors" xmi:id="931">
      <position xmi:type="position:Position" xmi:id="932" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="215" endOffset="4781" startColumn="3" endLine="215" endColumn="9" startOffset="4775" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <events xmi:type="expressions:EventExpression" xmi:id="933" event="651">
        <position xmi:type="position:Position" xmi:id="934" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="215" endOffset="4792" startColumn="11" endLine="215" endColumn="20" startOffset="4783" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="935">
          <position xmi:type="position:Position" xmi:id="936" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="215" endOffset="4792" startColumn="11" endLine="215" endColumn="20" startOffset="4783" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="937" event="539">
        <position xmi:type="position:Position" xmi:id="938" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="215" endOffset="4804" startColumn="23" endLine="215" endColumn="32" startOffset="4795" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="939">
          <position xmi:type="position:Position" xmi:id="940" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="215" endOffset="4804" startColumn="23" endLine="215" endColumn="32" startOffset="4795" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="941" event="593">
        <position xmi:type="position:Position" xmi:id="942" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="215" endOffset="4816" startColumn="35" endLine="215" endColumn="44" startOffset="4807" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="943">
          <position xmi:type="position:Position" xmi:id="944" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="215" endOffset="4816" startColumn="35" endLine="215" endColumn="44" startOffset="4807" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
    </monitors>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="945" name="onlyOneButtonAtATime" kind="Supervisor">
    <position xmi:type="position:Position" xmi:id="946" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="232" endOffset="5265" startColumn="22" endLine="232" endColumn="41" startOffset="5246" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="947" name="noActiveButton">
      <position xmi:type="position:Position" xmi:id="948" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="234" endOffset="5382" startColumn="12" endLine="234" endColumn="25" startOffset="5369" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="949" value="true">
        <position xmi:type="position:Position" xmi:id="950" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="235" endOffset="5396" startColumn="5" endLine="235" endColumn="11" startOffset="5390" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="951">
          <position xmi:type="position:Position" xmi:id="952" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="235" endOffset="5396" startColumn="5" endLine="235" endColumn="11" startOffset="5390" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="953" target="981">
        <position xmi:type="position:Position" xmi:id="954" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="237" endOffset="5420" startColumn="5" endLine="237" endColumn="8" startOffset="5417" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="955">
          <position xmi:type="position:Position" xmi:id="956" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="237" endOffset="5431" startColumn="10" endLine="237" endColumn="19" startOffset="5422" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="957" event="5">
            <position xmi:type="position:Position" xmi:id="958" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="237" endOffset="5431" startColumn="10" endLine="237" endColumn="19" startOffset="5422" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="959">
              <position xmi:type="position:Position" xmi:id="960" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="237" endOffset="5431" startColumn="10" endLine="237" endColumn="19" startOffset="5422" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="961" target="991">
        <position xmi:type="position:Position" xmi:id="962" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="238" endOffset="5459" startColumn="5" endLine="238" endColumn="8" startOffset="5456" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="963">
          <position xmi:type="position:Position" xmi:id="964" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="238" endOffset="5470" startColumn="10" endLine="238" endColumn="19" startOffset="5461" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="965" event="39">
            <position xmi:type="position:Position" xmi:id="966" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="238" endOffset="5470" startColumn="10" endLine="238" endColumn="19" startOffset="5461" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="967">
              <position xmi:type="position:Position" xmi:id="968" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="238" endOffset="5470" startColumn="10" endLine="238" endColumn="19" startOffset="5461" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="969" target="1001">
        <position xmi:type="position:Position" xmi:id="970" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="239" endOffset="5500" startColumn="5" endLine="239" endColumn="8" startOffset="5497" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="971">
          <position xmi:type="position:Position" xmi:id="972" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="239" endOffset="5511" startColumn="10" endLine="239" endColumn="19" startOffset="5502" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="973" event="73">
            <position xmi:type="position:Position" xmi:id="974" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="239" endOffset="5511" startColumn="10" endLine="239" endColumn="19" startOffset="5502" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="975">
              <position xmi:type="position:Position" xmi:id="976" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="239" endOffset="5511" startColumn="10" endLine="239" endColumn="19" startOffset="5502" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="977" value="true">
        <position xmi:type="position:Position" xmi:id="978" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="236" endOffset="5409" startColumn="5" endLine="236" endColumn="10" startOffset="5404" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="979">
          <position xmi:type="position:Position" xmi:id="980" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="236" endOffset="5409" startColumn="5" endLine="236" endColumn="10" startOffset="5404" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="981" name="selectReset">
      <position xmi:type="position:Position" xmi:id="982" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="240" endOffset="5556" startColumn="12" endLine="240" endColumn="22" startOffset="5546" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="983" target="947">
        <position xmi:type="position:Position" xmi:id="984" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="241" endOffset="5567" startColumn="5" endLine="241" endColumn="8" startOffset="5564" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="985">
          <position xmi:type="position:Position" xmi:id="986" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="241" endOffset="5580" startColumn="10" endLine="241" endColumn="21" startOffset="5569" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="987" event="7">
            <position xmi:type="position:Position" xmi:id="988" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="241" endOffset="5580" startColumn="10" endLine="241" endColumn="21" startOffset="5569" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="989">
              <position xmi:type="position:Position" xmi:id="990" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="241" endOffset="5580" startColumn="10" endLine="241" endColumn="21" startOffset="5569" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="991" name="selectForward">
      <position xmi:type="position:Position" xmi:id="992" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="242" endOffset="5627" startColumn="12" endLine="242" endColumn="24" startOffset="5615" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="993" target="947">
        <position xmi:type="position:Position" xmi:id="994" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="243" endOffset="5638" startColumn="5" endLine="243" endColumn="8" startOffset="5635" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="995">
          <position xmi:type="position:Position" xmi:id="996" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="243" endOffset="5651" startColumn="10" endLine="243" endColumn="21" startOffset="5640" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="997" event="41">
            <position xmi:type="position:Position" xmi:id="998" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="243" endOffset="5651" startColumn="10" endLine="243" endColumn="21" startOffset="5640" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="999">
              <position xmi:type="position:Position" xmi:id="1000" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="243" endOffset="5651" startColumn="10" endLine="243" endColumn="21" startOffset="5640" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1001" name="selectBackward">
      <position xmi:type="position:Position" xmi:id="1002" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="244" endOffset="5699" startColumn="12" endLine="244" endColumn="25" startOffset="5686" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1003" target="947">
        <position xmi:type="position:Position" xmi:id="1004" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="245" endOffset="5710" startColumn="5" endLine="245" endColumn="8" startOffset="5707" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1005">
          <position xmi:type="position:Position" xmi:id="1006" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="245" endOffset="5723" startColumn="10" endLine="245" endColumn="21" startOffset="5712" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1007" event="75">
            <position xmi:type="position:Position" xmi:id="1008" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="245" endOffset="5723" startColumn="10" endLine="245" endColumn="21" startOffset="5712" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1009">
              <position xmi:type="position:Position" xmi:id="1010" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="245" endOffset="5723" startColumn="10" endLine="245" endColumn="21" startOffset="5712" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <monitors xmi:type="automata:Monitors" xmi:id="1011">
      <position xmi:type="position:Position" xmi:id="1012" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5277" startColumn="3" endLine="233" endColumn="9" startOffset="5271" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <events xmi:type="expressions:EventExpression" xmi:id="1013" event="7">
        <position xmi:type="position:Position" xmi:id="1014" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5290" startColumn="11" endLine="233" endColumn="22" startOffset="5279" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1015">
          <position xmi:type="position:Position" xmi:id="1016" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5290" startColumn="11" endLine="233" endColumn="22" startOffset="5279" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="1017" event="41">
        <position xmi:type="position:Position" xmi:id="1018" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5304" startColumn="25" endLine="233" endColumn="36" startOffset="5293" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1019">
          <position xmi:type="position:Position" xmi:id="1020" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5304" startColumn="25" endLine="233" endColumn="36" startOffset="5293" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="1021" event="75">
        <position xmi:type="position:Position" xmi:id="1022" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5318" startColumn="39" endLine="233" endColumn="50" startOffset="5307" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1023">
          <position xmi:type="position:Position" xmi:id="1024" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5318" startColumn="39" endLine="233" endColumn="50" startOffset="5307" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="1025" event="73">
        <position xmi:type="position:Position" xmi:id="1026" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5330" startColumn="53" endLine="233" endColumn="62" startOffset="5321" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1027">
          <position xmi:type="position:Position" xmi:id="1028" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5330" startColumn="53" endLine="233" endColumn="62" startOffset="5321" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="1029" event="39">
        <position xmi:type="position:Position" xmi:id="1030" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5342" startColumn="65" endLine="233" endColumn="74" startOffset="5333" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1031">
          <position xmi:type="position:Position" xmi:id="1032" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5342" startColumn="65" endLine="233" endColumn="74" startOffset="5333" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="1033" event="5">
        <position xmi:type="position:Position" xmi:id="1034" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5354" startColumn="77" endLine="233" endColumn="86" startOffset="5345" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1035">
          <position xmi:type="position:Position" xmi:id="1036" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="233" endOffset="5354" startColumn="77" endLine="233" endColumn="86" startOffset="5345" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
    </monitors>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="1037" name="resetTracker" kind="Supervisor">
    <position xmi:type="position:Position" xmi:id="1038" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="247" endOffset="5784" startColumn="22" endLine="247" endColumn="33" startOffset="5773" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="1039" name="canReset">
      <position xmi:type="position:Position" xmi:id="1040" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="248" endOffset="5806" startColumn="12" endLine="248" endColumn="19" startOffset="5799" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1041">
        <position xmi:type="position:Position" xmi:id="1042" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="250" endOffset="5830" startColumn="5" endLine="250" endColumn="8" startOffset="5827" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1043">
          <position xmi:type="position:Position" xmi:id="1044" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="250" endOffset="5841" startColumn="10" endLine="250" endColumn="19" startOffset="5832" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1045" event="775">
            <position xmi:type="position:Position" xmi:id="1046" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="250" endOffset="5841" startColumn="10" endLine="250" endColumn="19" startOffset="5832" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1047">
              <position xmi:type="position:Position" xmi:id="1048" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="250" endOffset="5841" startColumn="10" endLine="250" endColumn="19" startOffset="5832" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1049" target="1077">
        <position xmi:type="position:Position" xmi:id="1050" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="251" endOffset="5852" startColumn="5" endLine="251" endColumn="8" startOffset="5849" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1051">
          <position xmi:type="position:Position" xmi:id="1052" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="251" endOffset="5864" startColumn="10" endLine="251" endColumn="20" startOffset="5854" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1053" event="777">
            <position xmi:type="position:Position" xmi:id="1054" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="251" endOffset="5864" startColumn="10" endLine="251" endColumn="20" startOffset="5854" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1055">
              <position xmi:type="position:Position" xmi:id="1056" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="251" endOffset="5864" startColumn="10" endLine="251" endColumn="20" startOffset="5854" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1057" target="1077">
        <position xmi:type="position:Position" xmi:id="1058" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="252" endOffset="5895" startColumn="5" endLine="252" endColumn="8" startOffset="5892" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1059">
          <position xmi:type="position:Position" xmi:id="1060" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="252" endOffset="5910" startColumn="10" endLine="252" endColumn="23" startOffset="5897" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1061" event="779">
            <position xmi:type="position:Position" xmi:id="1062" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="252" endOffset="5910" startColumn="10" endLine="252" endColumn="23" startOffset="5897" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1063">
              <position xmi:type="position:Position" xmi:id="1064" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="252" endOffset="5910" startColumn="10" endLine="252" endColumn="23" startOffset="5897" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1065">
        <position xmi:type="position:Position" xmi:id="1066" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="253" endOffset="5941" startColumn="5" endLine="253" endColumn="8" startOffset="5938" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1067">
          <position xmi:type="position:Position" xmi:id="1068" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="253" endOffset="5952" startColumn="10" endLine="253" endColumn="19" startOffset="5943" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1069" event="5">
            <position xmi:type="position:Position" xmi:id="1070" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="253" endOffset="5952" startColumn="10" endLine="253" endColumn="19" startOffset="5943" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1071">
              <position xmi:type="position:Position" xmi:id="1072" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="253" endOffset="5952" startColumn="10" endLine="253" endColumn="19" startOffset="5943" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1073" value="true">
        <position xmi:type="position:Position" xmi:id="1074" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="249" endOffset="5819" startColumn="5" endLine="249" endColumn="10" startOffset="5814" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1075">
          <position xmi:type="position:Position" xmi:id="1076" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="249" endOffset="5819" startColumn="5" endLine="249" endColumn="10" startOffset="5814" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1077" name="canNotResetYet">
      <position xmi:type="position:Position" xmi:id="1078" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="254" endOffset="5980" startColumn="12" endLine="254" endColumn="25" startOffset="5967" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="1079" value="true">
        <position xmi:type="position:Position" xmi:id="1080" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="255" endOffset="5994" startColumn="5" endLine="255" endColumn="11" startOffset="5988" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1081">
          <position xmi:type="position:Position" xmi:id="1082" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="255" endOffset="5994" startColumn="5" endLine="255" endColumn="11" startOffset="5988" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="1083">
        <position xmi:type="position:Position" xmi:id="1084" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="256" endOffset="6005" startColumn="5" endLine="256" endColumn="8" startOffset="6002" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1085">
          <position xmi:type="position:Position" xmi:id="1086" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="256" endOffset="6020" startColumn="10" endLine="256" endColumn="23" startOffset="6007" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1087" event="779">
            <position xmi:type="position:Position" xmi:id="1088" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="256" endOffset="6020" startColumn="10" endLine="256" endColumn="23" startOffset="6007" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1089">
              <position xmi:type="position:Position" xmi:id="1090" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="256" endOffset="6020" startColumn="10" endLine="256" endColumn="23" startOffset="6007" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1091" target="1039">
        <position xmi:type="position:Position" xmi:id="1092" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="257" endOffset="6031" startColumn="5" endLine="257" endColumn="8" startOffset="6028" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1093">
          <position xmi:type="position:Position" xmi:id="1094" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="257" endOffset="6042" startColumn="10" endLine="257" endColumn="19" startOffset="6033" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1095" event="5">
            <position xmi:type="position:Position" xmi:id="1096" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="257" endOffset="6042" startColumn="10" endLine="257" endColumn="19" startOffset="6033" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1097">
              <position xmi:type="position:Position" xmi:id="1098" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="257" endOffset="6042" startColumn="10" endLine="257" endColumn="19" startOffset="6033" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="1099" name="operator" kind="Supervisor">
    <position xmi:type="position:Position" xmi:id="1100" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="259" endOffset="6093" startColumn="22" endLine="259" endColumn="29" startOffset="6086" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="1101" name="still">
      <position xmi:type="position:Position" xmi:id="1102" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="261" endOffset="6192" startColumn="12" endLine="261" endColumn="16" startOffset="6188" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="1103" value="true">
        <position xmi:type="position:Position" xmi:id="1104" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="262" endOffset="6206" startColumn="5" endLine="262" endColumn="11" startOffset="6200" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1105">
          <position xmi:type="position:Position" xmi:id="1106" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="262" endOffset="6206" startColumn="5" endLine="262" endColumn="11" startOffset="6200" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="1107" target="1143">
        <position xmi:type="position:Position" xmi:id="1108" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="264" endOffset="6230" startColumn="5" endLine="264" endColumn="8" startOffset="6227" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1109">
          <position xmi:type="position:Position" xmi:id="1110" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="264" endOffset="6245" startColumn="10" endLine="264" endColumn="23" startOffset="6232" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1111" event="647">
            <position xmi:type="position:Position" xmi:id="1112" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="264" endOffset="6245" startColumn="10" endLine="264" endColumn="23" startOffset="6232" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1113">
              <position xmi:type="position:Position" xmi:id="1114" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="264" endOffset="6245" startColumn="10" endLine="264" endColumn="23" startOffset="6232" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1115" target="1201">
        <position xmi:type="position:Position" xmi:id="1116" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="265" endOffset="6269" startColumn="5" endLine="265" endColumn="8" startOffset="6266" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1117">
          <position xmi:type="position:Position" xmi:id="1118" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="265" endOffset="6284" startColumn="10" endLine="265" endColumn="23" startOffset="6271" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1119" event="649">
            <position xmi:type="position:Position" xmi:id="1120" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="265" endOffset="6284" startColumn="10" endLine="265" endColumn="23" startOffset="6271" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1121">
              <position xmi:type="position:Position" xmi:id="1122" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="265" endOffset="6284" startColumn="10" endLine="265" endColumn="23" startOffset="6271" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1123">
        <position xmi:type="position:Position" xmi:id="1124" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="266" endOffset="6309" startColumn="5" endLine="266" endColumn="8" startOffset="6306" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1125">
          <position xmi:type="position:Position" xmi:id="1126" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="266" endOffset="6318" startColumn="10" endLine="266" endColumn="17" startOffset="6311" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1127" event="167">
            <position xmi:type="position:Position" xmi:id="1128" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="266" endOffset="6318" startColumn="10" endLine="266" endColumn="17" startOffset="6311" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1129">
              <position xmi:type="position:Position" xmi:id="1130" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="266" endOffset="6318" startColumn="10" endLine="266" endColumn="17" startOffset="6311" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1131">
        <position xmi:type="position:Position" xmi:id="1132" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="267" endOffset="6329" startColumn="5" endLine="267" endColumn="8" startOffset="6326" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1133">
          <position xmi:type="position:Position" xmi:id="1134" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="267" endOffset="6338" startColumn="10" endLine="267" endColumn="17" startOffset="6331" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1135" event="225">
            <position xmi:type="position:Position" xmi:id="1136" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="267" endOffset="6338" startColumn="10" endLine="267" endColumn="17" startOffset="6331" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1137">
              <position xmi:type="position:Position" xmi:id="1138" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="267" endOffset="6338" startColumn="10" endLine="267" endColumn="17" startOffset="6331" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="1139" value="true">
        <position xmi:type="position:Position" xmi:id="1140" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="263" endOffset="6219" startColumn="5" endLine="263" endColumn="10" startOffset="6214" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1141">
          <position xmi:type="position:Position" xmi:id="1142" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="263" endOffset="6219" startColumn="5" endLine="263" endColumn="10" startOffset="6214" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1143" name="forward">
      <position xmi:type="position:Position" xmi:id="1144" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="268" endOffset="6359" startColumn="12" endLine="268" endColumn="18" startOffset="6353" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1145" target="1101">
        <position xmi:type="position:Position" xmi:id="1146" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="269" endOffset="6370" startColumn="5" endLine="269" endColumn="8" startOffset="6367" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1147">
          <position xmi:type="position:Position" xmi:id="1148" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="269" endOffset="6380" startColumn="10" endLine="269" endColumn="18" startOffset="6372" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1149" event="645">
            <position xmi:type="position:Position" xmi:id="1150" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="269" endOffset="6380" startColumn="10" endLine="269" endColumn="18" startOffset="6372" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1151">
              <position xmi:type="position:Position" xmi:id="1152" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="269" endOffset="6380" startColumn="10" endLine="269" endColumn="18" startOffset="6372" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1153">
        <position xmi:type="position:Position" xmi:id="1154" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="270" endOffset="6402" startColumn="5" endLine="270" endColumn="8" startOffset="6399" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1155">
          <position xmi:type="position:Position" xmi:id="1156" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="270" endOffset="6410" startColumn="10" endLine="270" endColumn="16" startOffset="6404" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1157" event="165">
            <position xmi:type="position:Position" xmi:id="1158" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="270" endOffset="6410" startColumn="10" endLine="270" endColumn="16" startOffset="6404" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1159">
              <position xmi:type="position:Position" xmi:id="1160" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="270" endOffset="6410" startColumn="10" endLine="270" endColumn="16" startOffset="6404" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1161">
        <position xmi:type="position:Position" xmi:id="1162" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="271" endOffset="6421" startColumn="5" endLine="271" endColumn="8" startOffset="6418" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1163">
          <position xmi:type="position:Position" xmi:id="1164" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="271" endOffset="6429" startColumn="10" endLine="271" endColumn="16" startOffset="6423" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1165" event="633">
            <position xmi:type="position:Position" xmi:id="1166" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="271" endOffset="6429" startColumn="10" endLine="271" endColumn="16" startOffset="6423" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1167">
              <position xmi:type="position:Position" xmi:id="1168" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="271" endOffset="6429" startColumn="10" endLine="271" endColumn="16" startOffset="6423" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1169">
        <position xmi:type="position:Position" xmi:id="1170" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="272" endOffset="6440" startColumn="5" endLine="272" endColumn="8" startOffset="6437" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1171">
          <position xmi:type="position:Position" xmi:id="1172" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="272" endOffset="6452" startColumn="10" endLine="272" endColumn="20" startOffset="6442" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1173" event="635">
            <position xmi:type="position:Position" xmi:id="1174" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="272" endOffset="6452" startColumn="10" endLine="272" endColumn="20" startOffset="6442" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1175">
              <position xmi:type="position:Position" xmi:id="1176" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="272" endOffset="6452" startColumn="10" endLine="272" endColumn="20" startOffset="6442" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1177">
        <position xmi:type="position:Position" xmi:id="1178" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="273" endOffset="6463" startColumn="5" endLine="273" endColumn="8" startOffset="6460" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1179">
          <position xmi:type="position:Position" xmi:id="1180" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="273" endOffset="6472" startColumn="10" endLine="273" endColumn="17" startOffset="6465" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1181" event="225">
            <position xmi:type="position:Position" xmi:id="1182" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="273" endOffset="6472" startColumn="10" endLine="273" endColumn="17" startOffset="6465" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1183">
              <position xmi:type="position:Position" xmi:id="1184" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="273" endOffset="6472" startColumn="10" endLine="273" endColumn="17" startOffset="6465" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1185" target="1101">
        <position xmi:type="position:Position" xmi:id="1186" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="274" endOffset="6483" startColumn="5" endLine="274" endColumn="8" startOffset="6480" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1187">
          <position xmi:type="position:Position" xmi:id="1188" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="274" endOffset="6494" startColumn="10" endLine="274" endColumn="19" startOffset="6485" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1189" event="651">
            <position xmi:type="position:Position" xmi:id="1190" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="274" endOffset="6494" startColumn="10" endLine="274" endColumn="19" startOffset="6485" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1191">
              <position xmi:type="position:Position" xmi:id="1192" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="274" endOffset="6494" startColumn="10" endLine="274" endColumn="19" startOffset="6485" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1193" target="1101">
        <position xmi:type="position:Position" xmi:id="1194" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="275" endOffset="6516" startColumn="5" endLine="275" endColumn="8" startOffset="6513" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1195">
          <position xmi:type="position:Position" xmi:id="1196" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="275" endOffset="6529" startColumn="10" endLine="275" endColumn="21" startOffset="6518" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1197" event="653">
            <position xmi:type="position:Position" xmi:id="1198" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="275" endOffset="6529" startColumn="10" endLine="275" endColumn="21" startOffset="6518" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1199">
              <position xmi:type="position:Position" xmi:id="1200" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="275" endOffset="6529" startColumn="10" endLine="275" endColumn="21" startOffset="6518" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="1201" name="backward">
      <position xmi:type="position:Position" xmi:id="1202" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="276" endOffset="6562" startColumn="12" endLine="276" endColumn="19" startOffset="6555" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="1203" target="1101">
        <position xmi:type="position:Position" xmi:id="1204" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="277" endOffset="6573" startColumn="5" endLine="277" endColumn="8" startOffset="6570" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1205">
          <position xmi:type="position:Position" xmi:id="1206" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="277" endOffset="6583" startColumn="10" endLine="277" endColumn="18" startOffset="6575" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1207" event="645">
            <position xmi:type="position:Position" xmi:id="1208" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="277" endOffset="6583" startColumn="10" endLine="277" endColumn="18" startOffset="6575" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1209">
              <position xmi:type="position:Position" xmi:id="1210" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="277" endOffset="6583" startColumn="10" endLine="277" endColumn="18" startOffset="6575" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1211">
        <position xmi:type="position:Position" xmi:id="1212" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="278" endOffset="6605" startColumn="5" endLine="278" endColumn="8" startOffset="6602" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1213">
          <position xmi:type="position:Position" xmi:id="1214" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="278" endOffset="6613" startColumn="10" endLine="278" endColumn="16" startOffset="6607" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1215" event="223">
            <position xmi:type="position:Position" xmi:id="1216" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="278" endOffset="6613" startColumn="10" endLine="278" endColumn="16" startOffset="6607" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1217">
              <position xmi:type="position:Position" xmi:id="1218" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="278" endOffset="6613" startColumn="10" endLine="278" endColumn="16" startOffset="6607" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1219">
        <position xmi:type="position:Position" xmi:id="1220" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="279" endOffset="6624" startColumn="5" endLine="279" endColumn="8" startOffset="6621" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1221">
          <position xmi:type="position:Position" xmi:id="1222" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="279" endOffset="6633" startColumn="10" endLine="279" endColumn="17" startOffset="6626" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1223" event="167">
            <position xmi:type="position:Position" xmi:id="1224" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="279" endOffset="6633" startColumn="10" endLine="279" endColumn="17" startOffset="6626" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1225">
              <position xmi:type="position:Position" xmi:id="1226" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="279" endOffset="6633" startColumn="10" endLine="279" endColumn="17" startOffset="6626" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1227">
        <position xmi:type="position:Position" xmi:id="1228" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="280" endOffset="6644" startColumn="5" endLine="280" endColumn="8" startOffset="6641" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1229">
          <position xmi:type="position:Position" xmi:id="1230" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="280" endOffset="6652" startColumn="10" endLine="280" endColumn="16" startOffset="6646" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1231" event="639">
            <position xmi:type="position:Position" xmi:id="1232" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="280" endOffset="6652" startColumn="10" endLine="280" endColumn="16" startOffset="6646" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1233">
              <position xmi:type="position:Position" xmi:id="1234" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="280" endOffset="6652" startColumn="10" endLine="280" endColumn="16" startOffset="6646" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1235">
        <position xmi:type="position:Position" xmi:id="1236" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="281" endOffset="6663" startColumn="5" endLine="281" endColumn="8" startOffset="6660" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1237">
          <position xmi:type="position:Position" xmi:id="1238" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="281" endOffset="6675" startColumn="10" endLine="281" endColumn="20" startOffset="6665" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1239" event="641">
            <position xmi:type="position:Position" xmi:id="1240" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="281" endOffset="6675" startColumn="10" endLine="281" endColumn="20" startOffset="6665" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1241">
              <position xmi:type="position:Position" xmi:id="1242" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="281" endOffset="6675" startColumn="10" endLine="281" endColumn="20" startOffset="6665" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1243" target="1101">
        <position xmi:type="position:Position" xmi:id="1244" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="282" endOffset="6686" startColumn="5" endLine="282" endColumn="8" startOffset="6683" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1245">
          <position xmi:type="position:Position" xmi:id="1246" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="282" endOffset="6697" startColumn="10" endLine="282" endColumn="19" startOffset="6688" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1247" event="651">
            <position xmi:type="position:Position" xmi:id="1248" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="282" endOffset="6697" startColumn="10" endLine="282" endColumn="19" startOffset="6688" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1249">
              <position xmi:type="position:Position" xmi:id="1250" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="282" endOffset="6697" startColumn="10" endLine="282" endColumn="19" startOffset="6688" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1251" target="1101">
        <position xmi:type="position:Position" xmi:id="1252" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="283" endOffset="6719" startColumn="5" endLine="283" endColumn="8" startOffset="6716" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1253">
          <position xmi:type="position:Position" xmi:id="1254" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="283" endOffset="6732" startColumn="10" endLine="283" endColumn="21" startOffset="6721" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1255" event="653">
            <position xmi:type="position:Position" xmi:id="1256" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="283" endOffset="6732" startColumn="10" endLine="283" endColumn="21" startOffset="6721" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1257">
              <position xmi:type="position:Position" xmi:id="1258" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="283" endOffset="6732" startColumn="10" endLine="283" endColumn="21" startOffset="6721" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <monitors xmi:type="automata:Monitors" xmi:id="1259">
      <position xmi:type="position:Position" xmi:id="1260" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="260" endOffset="6105" startColumn="3" endLine="260" endColumn="9" startOffset="6099" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <events xmi:type="expressions:EventExpression" xmi:id="1261" event="647">
        <position xmi:type="position:Position" xmi:id="1262" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="260" endOffset="6120" startColumn="11" endLine="260" endColumn="24" startOffset="6107" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1263">
          <position xmi:type="position:Position" xmi:id="1264" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="260" endOffset="6120" startColumn="11" endLine="260" endColumn="24" startOffset="6107" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="1265" event="649">
        <position xmi:type="position:Position" xmi:id="1266" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="260" endOffset="6136" startColumn="27" endLine="260" endColumn="40" startOffset="6123" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1267">
          <position xmi:type="position:Position" xmi:id="1268" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="260" endOffset="6136" startColumn="27" endLine="260" endColumn="40" startOffset="6123" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="1269" event="645">
        <position xmi:type="position:Position" xmi:id="1270" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="260" endOffset="6147" startColumn="43" endLine="260" endColumn="51" startOffset="6139" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1271">
          <position xmi:type="position:Position" xmi:id="1272" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="260" endOffset="6147" startColumn="43" endLine="260" endColumn="51" startOffset="6139" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="1273" event="651">
        <position xmi:type="position:Position" xmi:id="1274" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="260" endOffset="6159" startColumn="54" endLine="260" endColumn="63" startOffset="6150" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1275">
          <position xmi:type="position:Position" xmi:id="1276" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="260" endOffset="6159" startColumn="54" endLine="260" endColumn="63" startOffset="6150" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="1277" event="653">
        <position xmi:type="position:Position" xmi:id="1278" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="260" endOffset="6173" startColumn="66" endLine="260" endColumn="77" startOffset="6162" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1279">
          <position xmi:type="position:Position" xmi:id="1280" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="260" endOffset="6173" startColumn="66" endLine="260" endColumn="77" startOffset="6162" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
    </monitors>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="1281" name="sup" kind="Supervisor">
    <position xmi:type="position:Position" xmi:id="1282" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="285" endOffset="6775" startColumn="22" endLine="285" endColumn="24" startOffset="6773" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="1283">
      <position xmi:type="position:Position" xmi:id="1284" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="287" endOffset="7065" startColumn="3" endLine="287" endColumn="10" startOffset="7058" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="1285" value="true">
        <position xmi:type="position:Position" xmi:id="1286" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="288" endOffset="7079" startColumn="5" endLine="288" endColumn="11" startOffset="7073" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="1287">
          <position xmi:type="position:Position" xmi:id="1288" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="288" endOffset="7079" startColumn="5" endLine="288" endColumn="11" startOffset="7073" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="1289">
        <position xmi:type="position:Position" xmi:id="1290" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="290" endOffset="7103" startColumn="5" endLine="290" endColumn="8" startOffset="7100" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1291">
          <position xmi:type="position:Position" xmi:id="1292" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="290" endOffset="7112" startColumn="10" endLine="290" endColumn="17" startOffset="7105" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1293" event="225">
            <position xmi:type="position:Position" xmi:id="1294" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="290" endOffset="7112" startColumn="10" endLine="290" endColumn="17" startOffset="7105" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1295">
              <position xmi:type="position:Position" xmi:id="1296" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="290" endOffset="7112" startColumn="10" endLine="290" endColumn="17" startOffset="7105" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BoolExpression" xmi:id="1297" value="true">
          <position xmi:type="position:Position" xmi:id="1298" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="290" endOffset="7122" startColumn="24" endLine="290" endColumn="27" startOffset="7119" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1299">
            <position xmi:type="position:Position" xmi:id="1300" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="290" endOffset="7122" startColumn="24" endLine="290" endColumn="27" startOffset="7119" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1301">
        <position xmi:type="position:Position" xmi:id="1302" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="291" endOffset="7133" startColumn="5" endLine="291" endColumn="8" startOffset="7130" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1303">
          <position xmi:type="position:Position" xmi:id="1304" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="291" endOffset="7141" startColumn="10" endLine="291" endColumn="16" startOffset="7135" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1305" event="223">
            <position xmi:type="position:Position" xmi:id="1306" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="291" endOffset="7141" startColumn="10" endLine="291" endColumn="16" startOffset="7135" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1307">
              <position xmi:type="position:Position" xmi:id="1308" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="291" endOffset="7141" startColumn="10" endLine="291" endColumn="16" startOffset="7135" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1309" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1310" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="291" endOffset="7155" startColumn="28" endLine="291" endColumn="30" startOffset="7153" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1311">
            <position xmi:type="position:Position" xmi:id="1312" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="291" endOffset="7155" startColumn="28" endLine="291" endColumn="30" startOffset="7153" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BoolExpression" xmi:id="1313" value="true">
            <position xmi:type="position:Position" xmi:id="1314" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="291" endOffset="7151" startColumn="23" endLine="291" endColumn="26" startOffset="7148" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1315">
              <position xmi:type="position:Position" xmi:id="1316" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="291" endOffset="7151" startColumn="23" endLine="291" endColumn="26" startOffset="7148" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="1317" location="803">
            <position xmi:type="position:Position" xmi:id="1318" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="291" endOffset="7165" startColumn="32" endLine="291" endColumn="40" startOffset="7157" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1319">
              <position xmi:type="position:Position" xmi:id="1320" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="291" endOffset="7165" startColumn="32" endLine="291" endColumn="40" startOffset="7157" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1321">
        <position xmi:type="position:Position" xmi:id="1322" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7176" startColumn="5" endLine="292" endColumn="8" startOffset="7173" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1323">
          <position xmi:type="position:Position" xmi:id="1324" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7184" startColumn="10" endLine="292" endColumn="16" startOffset="7178" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1325" event="639">
            <position xmi:type="position:Position" xmi:id="1326" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7184" startColumn="10" endLine="292" endColumn="16" startOffset="7178" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1327">
              <position xmi:type="position:Position" xmi:id="1328" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7184" startColumn="10" endLine="292" endColumn="16" startOffset="7178" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1329" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1330" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7286" startColumn="116" endLine="292" endColumn="118" startOffset="7284" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1331">
            <position xmi:type="position:Position" xmi:id="1332" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7286" startColumn="116" endLine="292" endColumn="118" startOffset="7284" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="1333" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1334" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7234" startColumn="64" endLine="292" endColumn="66" startOffset="7232" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1335">
              <position xmi:type="position:Position" xmi:id="1336" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7234" startColumn="64" endLine="292" endColumn="66" startOffset="7232" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="1337" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1338" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7198" startColumn="28" endLine="292" endColumn="30" startOffset="7196" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1339">
                <position xmi:type="position:Position" xmi:id="1340" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7198" startColumn="28" endLine="292" endColumn="30" startOffset="7196" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:BoolExpression" xmi:id="1341" value="true">
                <position xmi:type="position:Position" xmi:id="1342" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7194" startColumn="23" endLine="292" endColumn="26" startOffset="7191" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1343">
                  <position xmi:type="position:Position" xmi:id="1344" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7194" startColumn="23" endLine="292" endColumn="26" startOffset="7191" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:BinaryExpression" xmi:id="1345" operator="Conjunction">
                <position xmi:type="position:Position" xmi:id="1346" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7216" startColumn="46" endLine="292" endColumn="48" startOffset="7214" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1347">
                  <position xmi:type="position:Position" xmi:id="1348" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7216" startColumn="46" endLine="292" endColumn="48" startOffset="7214" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
                <left xmi:type="expressions:LocationExpression" xmi:id="1349" location="387">
                  <position xmi:type="position:Position" xmi:id="1350" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7212" startColumn="33" endLine="292" endColumn="44" startOffset="7201" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1351">
                    <position xmi:type="position:Position" xmi:id="1352" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7212" startColumn="33" endLine="292" endColumn="44" startOffset="7201" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </left>
                <right xmi:type="expressions:LocationExpression" xmi:id="1353" location="421">
                  <position xmi:type="position:Position" xmi:id="1354" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7229" startColumn="50" endLine="292" endColumn="61" startOffset="7218" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1355">
                    <position xmi:type="position:Position" xmi:id="1356" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7229" startColumn="50" endLine="292" endColumn="61" startOffset="7218" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </right>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="1357" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1358" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7256" startColumn="86" endLine="292" endColumn="88" startOffset="7254" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1359">
                <position xmi:type="position:Position" xmi:id="1360" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7256" startColumn="86" endLine="292" endColumn="88" startOffset="7254" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:UnaryExpression" xmi:id="1361">
                <position xmi:type="position:Position" xmi:id="1362" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7239" startColumn="69" endLine="292" endColumn="71" startOffset="7237" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1363">
                  <position xmi:type="position:Position" xmi:id="1364" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7239" startColumn="69" endLine="292" endColumn="71" startOffset="7237" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
                <child xmi:type="expressions:LocationExpression" xmi:id="1365" location="821">
                  <position xmi:type="position:Position" xmi:id="1366" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7252" startColumn="73" endLine="292" endColumn="84" startOffset="7241" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1367">
                    <position xmi:type="position:Position" xmi:id="1368" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7252" startColumn="73" endLine="292" endColumn="84" startOffset="7241" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </child>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1369" location="837">
                <position xmi:type="position:Position" xmi:id="1370" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7281" startColumn="90" endLine="292" endColumn="113" startOffset="7258" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1371">
                  <position xmi:type="position:Position" xmi:id="1372" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7281" startColumn="90" endLine="292" endColumn="113" startOffset="7258" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="1373" location="353">
            <position xmi:type="position:Position" xmi:id="1374" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7299" startColumn="120" endLine="292" endColumn="131" startOffset="7288" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1375">
              <position xmi:type="position:Position" xmi:id="1376" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="292" endOffset="7299" startColumn="120" endLine="292" endColumn="131" startOffset="7288" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1377">
        <position xmi:type="position:Position" xmi:id="1378" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7310" startColumn="5" endLine="293" endColumn="8" startOffset="7307" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1379">
          <position xmi:type="position:Position" xmi:id="1380" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7322" startColumn="10" endLine="293" endColumn="20" startOffset="7312" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1381" event="641">
            <position xmi:type="position:Position" xmi:id="1382" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7322" startColumn="10" endLine="293" endColumn="20" startOffset="7312" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1383">
              <position xmi:type="position:Position" xmi:id="1384" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7322" startColumn="10" endLine="293" endColumn="20" startOffset="7312" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1385" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1386" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7372" startColumn="68" endLine="293" endColumn="70" startOffset="7370" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1387">
            <position xmi:type="position:Position" xmi:id="1388" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7372" startColumn="68" endLine="293" endColumn="70" startOffset="7370" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="1389" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1390" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7336" startColumn="32" endLine="293" endColumn="34" startOffset="7334" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1391">
              <position xmi:type="position:Position" xmi:id="1392" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7336" startColumn="32" endLine="293" endColumn="34" startOffset="7334" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BoolExpression" xmi:id="1393" value="true">
              <position xmi:type="position:Position" xmi:id="1394" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7332" startColumn="27" endLine="293" endColumn="30" startOffset="7329" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1395">
                <position xmi:type="position:Position" xmi:id="1396" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7332" startColumn="27" endLine="293" endColumn="30" startOffset="7329" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="1397" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1398" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7354" startColumn="50" endLine="293" endColumn="52" startOffset="7352" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1399">
                <position xmi:type="position:Position" xmi:id="1400" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7354" startColumn="50" endLine="293" endColumn="52" startOffset="7352" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="1401" location="387">
                <position xmi:type="position:Position" xmi:id="1402" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7350" startColumn="37" endLine="293" endColumn="48" startOffset="7339" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1403">
                  <position xmi:type="position:Position" xmi:id="1404" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7350" startColumn="37" endLine="293" endColumn="48" startOffset="7339" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1405" location="421">
                <position xmi:type="position:Position" xmi:id="1406" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7367" startColumn="54" endLine="293" endColumn="65" startOffset="7356" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1407">
                  <position xmi:type="position:Position" xmi:id="1408" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7367" startColumn="54" endLine="293" endColumn="65" startOffset="7356" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="1409" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1410" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7394" startColumn="90" endLine="293" endColumn="92" startOffset="7392" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1411">
              <position xmi:type="position:Position" xmi:id="1412" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7394" startColumn="90" endLine="293" endColumn="92" startOffset="7392" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:UnaryExpression" xmi:id="1413">
              <position xmi:type="position:Position" xmi:id="1414" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7377" startColumn="73" endLine="293" endColumn="75" startOffset="7375" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1415">
                <position xmi:type="position:Position" xmi:id="1416" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7377" startColumn="73" endLine="293" endColumn="75" startOffset="7375" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <child xmi:type="expressions:LocationExpression" xmi:id="1417" location="821">
                <position xmi:type="position:Position" xmi:id="1418" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7390" startColumn="77" endLine="293" endColumn="88" startOffset="7379" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1419">
                  <position xmi:type="position:Position" xmi:id="1420" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7390" startColumn="77" endLine="293" endColumn="88" startOffset="7379" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </child>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="1421" location="837">
              <position xmi:type="position:Position" xmi:id="1422" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7419" startColumn="94" endLine="293" endColumn="117" startOffset="7396" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1423">
                <position xmi:type="position:Position" xmi:id="1424" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="293" endOffset="7419" startColumn="94" endLine="293" endColumn="117" startOffset="7396" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </right>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1425">
        <position xmi:type="position:Position" xmi:id="1426" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7431" startColumn="5" endLine="294" endColumn="8" startOffset="7428" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1427">
          <position xmi:type="position:Position" xmi:id="1428" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7443" startColumn="10" endLine="294" endColumn="20" startOffset="7433" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1429" event="643">
            <position xmi:type="position:Position" xmi:id="1430" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7443" startColumn="10" endLine="294" endColumn="20" startOffset="7433" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1431">
              <position xmi:type="position:Position" xmi:id="1432" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7443" startColumn="10" endLine="294" endColumn="20" startOffset="7433" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1433" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1434" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7493" startColumn="68" endLine="294" endColumn="70" startOffset="7491" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1435">
            <position xmi:type="position:Position" xmi:id="1436" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7493" startColumn="68" endLine="294" endColumn="70" startOffset="7491" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="1437" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1438" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7457" startColumn="32" endLine="294" endColumn="34" startOffset="7455" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1439">
              <position xmi:type="position:Position" xmi:id="1440" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7457" startColumn="32" endLine="294" endColumn="34" startOffset="7455" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BoolExpression" xmi:id="1441" value="true">
              <position xmi:type="position:Position" xmi:id="1442" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7453" startColumn="27" endLine="294" endColumn="30" startOffset="7450" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1443">
                <position xmi:type="position:Position" xmi:id="1444" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7453" startColumn="27" endLine="294" endColumn="30" startOffset="7450" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="1445" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1446" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7475" startColumn="50" endLine="294" endColumn="52" startOffset="7473" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1447">
                <position xmi:type="position:Position" xmi:id="1448" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7475" startColumn="50" endLine="294" endColumn="52" startOffset="7473" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="1449" location="387">
                <position xmi:type="position:Position" xmi:id="1450" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7471" startColumn="37" endLine="294" endColumn="48" startOffset="7460" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1451">
                  <position xmi:type="position:Position" xmi:id="1452" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7471" startColumn="37" endLine="294" endColumn="48" startOffset="7460" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1453" location="421">
                <position xmi:type="position:Position" xmi:id="1454" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7488" startColumn="54" endLine="294" endColumn="65" startOffset="7477" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1455">
                  <position xmi:type="position:Position" xmi:id="1456" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7488" startColumn="54" endLine="294" endColumn="65" startOffset="7477" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="1457" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1458" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7515" startColumn="90" endLine="294" endColumn="92" startOffset="7513" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1459">
              <position xmi:type="position:Position" xmi:id="1460" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7515" startColumn="90" endLine="294" endColumn="92" startOffset="7513" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:UnaryExpression" xmi:id="1461">
              <position xmi:type="position:Position" xmi:id="1462" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7498" startColumn="73" endLine="294" endColumn="75" startOffset="7496" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1463">
                <position xmi:type="position:Position" xmi:id="1464" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7498" startColumn="73" endLine="294" endColumn="75" startOffset="7496" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <child xmi:type="expressions:LocationExpression" xmi:id="1465" location="821">
                <position xmi:type="position:Position" xmi:id="1466" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7511" startColumn="77" endLine="294" endColumn="88" startOffset="7500" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1467">
                  <position xmi:type="position:Position" xmi:id="1468" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7511" startColumn="77" endLine="294" endColumn="88" startOffset="7500" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </child>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="1469" location="837">
              <position xmi:type="position:Position" xmi:id="1470" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7540" startColumn="94" endLine="294" endColumn="117" startOffset="7517" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1471">
                <position xmi:type="position:Position" xmi:id="1472" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="294" endOffset="7540" startColumn="94" endLine="294" endColumn="117" startOffset="7517" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </right>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1473">
        <position xmi:type="position:Position" xmi:id="1474" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7552" startColumn="5" endLine="295" endColumn="8" startOffset="7549" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1475">
          <position xmi:type="position:Position" xmi:id="1476" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7567" startColumn="10" endLine="295" endColumn="23" startOffset="7554" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1477" event="649">
            <position xmi:type="position:Position" xmi:id="1478" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7567" startColumn="10" endLine="295" endColumn="23" startOffset="7554" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1479">
              <position xmi:type="position:Position" xmi:id="1480" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7567" startColumn="10" endLine="295" endColumn="23" startOffset="7554" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1481" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1482" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7647" startColumn="101" endLine="295" endColumn="103" startOffset="7645" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1483">
            <position xmi:type="position:Position" xmi:id="1484" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7647" startColumn="101" endLine="295" endColumn="103" startOffset="7645" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="1485" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1486" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7607" startColumn="61" endLine="295" endColumn="63" startOffset="7605" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1487">
              <position xmi:type="position:Position" xmi:id="1488" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7607" startColumn="61" endLine="295" endColumn="63" startOffset="7605" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="1489" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1490" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7581" startColumn="35" endLine="295" endColumn="37" startOffset="7579" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1491">
                <position xmi:type="position:Position" xmi:id="1492" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7581" startColumn="35" endLine="295" endColumn="37" startOffset="7579" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:BoolExpression" xmi:id="1493" value="true">
                <position xmi:type="position:Position" xmi:id="1494" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7577" startColumn="30" endLine="295" endColumn="33" startOffset="7574" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1495">
                  <position xmi:type="position:Position" xmi:id="1496" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7577" startColumn="30" endLine="295" endColumn="33" startOffset="7574" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:BinaryExpression" xmi:id="1497" operator="Conjunction">
                <position xmi:type="position:Position" xmi:id="1498" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7596" startColumn="50" endLine="295" endColumn="52" startOffset="7594" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1499">
                  <position xmi:type="position:Position" xmi:id="1500" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7596" startColumn="50" endLine="295" endColumn="52" startOffset="7594" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
                <left xmi:type="expressions:LocationExpression" xmi:id="1501" location="803">
                  <position xmi:type="position:Position" xmi:id="1502" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7592" startColumn="40" endLine="295" endColumn="48" startOffset="7584" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1503">
                    <position xmi:type="position:Position" xmi:id="1504" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7592" startColumn="40" endLine="295" endColumn="48" startOffset="7584" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </left>
                <right xmi:type="expressions:LocationExpression" xmi:id="1505" location="455">
                  <position xmi:type="position:Position" xmi:id="1506" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7602" startColumn="54" endLine="295" endColumn="58" startOffset="7598" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1507">
                    <position xmi:type="position:Position" xmi:id="1508" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7602" startColumn="54" endLine="295" endColumn="58" startOffset="7598" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </right>
              </right>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="1509" location="1001">
              <position xmi:type="position:Position" xmi:id="1510" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7643" startColumn="65" endLine="295" endColumn="99" startOffset="7609" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1511">
                <position xmi:type="position:Position" xmi:id="1512" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7643" startColumn="65" endLine="295" endColumn="99" startOffset="7609" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:UnaryExpression" xmi:id="1513">
            <position xmi:type="position:Position" xmi:id="1514" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7651" startColumn="105" endLine="295" endColumn="107" startOffset="7649" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1515">
              <position xmi:type="position:Position" xmi:id="1516" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7651" startColumn="105" endLine="295" endColumn="107" startOffset="7649" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <child xmi:type="expressions:BinaryExpression" xmi:id="1517">
              <position xmi:type="position:Position" xmi:id="1518" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7665" startColumn="120" endLine="295" endColumn="121" startOffset="7664" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1519">
                <position xmi:type="position:Position" xmi:id="1520" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7665" startColumn="120" endLine="295" endColumn="121" startOffset="7664" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="1521" location="405">
                <position xmi:type="position:Position" xmi:id="1522" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7662" startColumn="109" endLine="295" endColumn="118" startOffset="7653" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1523">
                  <position xmi:type="position:Position" xmi:id="1524" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7662" startColumn="109" endLine="295" endColumn="118" startOffset="7653" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1525" location="439">
                <position xmi:type="position:Position" xmi:id="1526" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7676" startColumn="123" endLine="295" endColumn="132" startOffset="7667" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1527">
                  <position xmi:type="position:Position" xmi:id="1528" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="295" endOffset="7676" startColumn="123" endLine="295" endColumn="132" startOffset="7667" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </child>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1529">
        <position xmi:type="position:Position" xmi:id="1530" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7688" startColumn="5" endLine="296" endColumn="8" startOffset="7685" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1531">
          <position xmi:type="position:Position" xmi:id="1532" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7703" startColumn="10" endLine="296" endColumn="23" startOffset="7690" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1533" event="647">
            <position xmi:type="position:Position" xmi:id="1534" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7703" startColumn="10" endLine="296" endColumn="23" startOffset="7690" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1535">
              <position xmi:type="position:Position" xmi:id="1536" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7703" startColumn="10" endLine="296" endColumn="23" startOffset="7690" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1537" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1538" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7782" startColumn="100" endLine="296" endColumn="102" startOffset="7780" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1539">
            <position xmi:type="position:Position" xmi:id="1540" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7782" startColumn="100" endLine="296" endColumn="102" startOffset="7780" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="1541" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1542" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7743" startColumn="61" endLine="296" endColumn="63" startOffset="7741" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1543">
              <position xmi:type="position:Position" xmi:id="1544" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7743" startColumn="61" endLine="296" endColumn="63" startOffset="7741" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="1545" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1546" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7717" startColumn="35" endLine="296" endColumn="37" startOffset="7715" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1547">
                <position xmi:type="position:Position" xmi:id="1548" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7717" startColumn="35" endLine="296" endColumn="37" startOffset="7715" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:BoolExpression" xmi:id="1549" value="true">
                <position xmi:type="position:Position" xmi:id="1550" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7713" startColumn="30" endLine="296" endColumn="33" startOffset="7710" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1551">
                  <position xmi:type="position:Position" xmi:id="1552" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7713" startColumn="30" endLine="296" endColumn="33" startOffset="7710" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:BinaryExpression" xmi:id="1553" operator="Conjunction">
                <position xmi:type="position:Position" xmi:id="1554" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7732" startColumn="50" endLine="296" endColumn="52" startOffset="7730" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1555">
                  <position xmi:type="position:Position" xmi:id="1556" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7732" startColumn="50" endLine="296" endColumn="52" startOffset="7730" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
                <left xmi:type="expressions:LocationExpression" xmi:id="1557" location="803">
                  <position xmi:type="position:Position" xmi:id="1558" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7728" startColumn="40" endLine="296" endColumn="48" startOffset="7720" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1559">
                    <position xmi:type="position:Position" xmi:id="1560" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7728" startColumn="40" endLine="296" endColumn="48" startOffset="7720" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </left>
                <right xmi:type="expressions:LocationExpression" xmi:id="1561" location="455">
                  <position xmi:type="position:Position" xmi:id="1562" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7738" startColumn="54" endLine="296" endColumn="58" startOffset="7734" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1563">
                    <position xmi:type="position:Position" xmi:id="1564" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7738" startColumn="54" endLine="296" endColumn="58" startOffset="7734" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </right>
              </right>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="1565" location="991">
              <position xmi:type="position:Position" xmi:id="1566" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7778" startColumn="65" endLine="296" endColumn="98" startOffset="7745" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1567">
                <position xmi:type="position:Position" xmi:id="1568" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7778" startColumn="65" endLine="296" endColumn="98" startOffset="7745" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:UnaryExpression" xmi:id="1569">
            <position xmi:type="position:Position" xmi:id="1570" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7786" startColumn="104" endLine="296" endColumn="106" startOffset="7784" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1571">
              <position xmi:type="position:Position" xmi:id="1572" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7786" startColumn="104" endLine="296" endColumn="106" startOffset="7784" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <child xmi:type="expressions:BinaryExpression" xmi:id="1573">
              <position xmi:type="position:Position" xmi:id="1574" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7800" startColumn="119" endLine="296" endColumn="120" startOffset="7799" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1575">
                <position xmi:type="position:Position" xmi:id="1576" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7800" startColumn="119" endLine="296" endColumn="120" startOffset="7799" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="1577" location="405">
                <position xmi:type="position:Position" xmi:id="1578" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7797" startColumn="108" endLine="296" endColumn="117" startOffset="7788" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1579">
                  <position xmi:type="position:Position" xmi:id="1580" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7797" startColumn="108" endLine="296" endColumn="117" startOffset="7788" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1581" location="439">
                <position xmi:type="position:Position" xmi:id="1582" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7811" startColumn="122" endLine="296" endColumn="131" startOffset="7802" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1583">
                  <position xmi:type="position:Position" xmi:id="1584" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="296" endOffset="7811" startColumn="122" endLine="296" endColumn="131" startOffset="7802" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </child>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1585">
        <position xmi:type="position:Position" xmi:id="1586" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7823" startColumn="5" endLine="297" endColumn="8" startOffset="7820" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1587">
          <position xmi:type="position:Position" xmi:id="1588" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7831" startColumn="10" endLine="297" endColumn="16" startOffset="7825" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1589" event="633">
            <position xmi:type="position:Position" xmi:id="1590" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7831" startColumn="10" endLine="297" endColumn="16" startOffset="7825" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1591">
              <position xmi:type="position:Position" xmi:id="1592" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7831" startColumn="10" endLine="297" endColumn="16" startOffset="7825" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1593" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1594" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7933" startColumn="116" endLine="297" endColumn="118" startOffset="7931" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1595">
            <position xmi:type="position:Position" xmi:id="1596" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7933" startColumn="116" endLine="297" endColumn="118" startOffset="7931" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="1597" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1598" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7881" startColumn="64" endLine="297" endColumn="66" startOffset="7879" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1599">
              <position xmi:type="position:Position" xmi:id="1600" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7881" startColumn="64" endLine="297" endColumn="66" startOffset="7879" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="1601" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1602" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7845" startColumn="28" endLine="297" endColumn="30" startOffset="7843" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1603">
                <position xmi:type="position:Position" xmi:id="1604" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7845" startColumn="28" endLine="297" endColumn="30" startOffset="7843" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:BoolExpression" xmi:id="1605" value="true">
                <position xmi:type="position:Position" xmi:id="1606" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7841" startColumn="23" endLine="297" endColumn="26" startOffset="7838" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1607">
                  <position xmi:type="position:Position" xmi:id="1608" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7841" startColumn="23" endLine="297" endColumn="26" startOffset="7838" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:BinaryExpression" xmi:id="1609" operator="Conjunction">
                <position xmi:type="position:Position" xmi:id="1610" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7863" startColumn="46" endLine="297" endColumn="48" startOffset="7861" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1611">
                  <position xmi:type="position:Position" xmi:id="1612" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7863" startColumn="46" endLine="297" endColumn="48" startOffset="7861" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
                <left xmi:type="expressions:LocationExpression" xmi:id="1613" location="387">
                  <position xmi:type="position:Position" xmi:id="1614" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7859" startColumn="33" endLine="297" endColumn="44" startOffset="7848" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1615">
                    <position xmi:type="position:Position" xmi:id="1616" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7859" startColumn="33" endLine="297" endColumn="44" startOffset="7848" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </left>
                <right xmi:type="expressions:LocationExpression" xmi:id="1617" location="421">
                  <position xmi:type="position:Position" xmi:id="1618" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7876" startColumn="50" endLine="297" endColumn="61" startOffset="7865" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1619">
                    <position xmi:type="position:Position" xmi:id="1620" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7876" startColumn="50" endLine="297" endColumn="61" startOffset="7865" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </right>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="1621" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1622" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7903" startColumn="86" endLine="297" endColumn="88" startOffset="7901" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1623">
                <position xmi:type="position:Position" xmi:id="1624" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7903" startColumn="86" endLine="297" endColumn="88" startOffset="7901" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:UnaryExpression" xmi:id="1625">
                <position xmi:type="position:Position" xmi:id="1626" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7886" startColumn="69" endLine="297" endColumn="71" startOffset="7884" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1627">
                  <position xmi:type="position:Position" xmi:id="1628" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7886" startColumn="69" endLine="297" endColumn="71" startOffset="7884" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
                <child xmi:type="expressions:LocationExpression" xmi:id="1629" location="821">
                  <position xmi:type="position:Position" xmi:id="1630" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7899" startColumn="73" endLine="297" endColumn="84" startOffset="7888" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1631">
                    <position xmi:type="position:Position" xmi:id="1632" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7899" startColumn="73" endLine="297" endColumn="84" startOffset="7888" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </child>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1633" location="837">
                <position xmi:type="position:Position" xmi:id="1634" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7928" startColumn="90" endLine="297" endColumn="113" startOffset="7905" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1635">
                  <position xmi:type="position:Position" xmi:id="1636" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7928" startColumn="90" endLine="297" endColumn="113" startOffset="7905" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="1637" location="319">
            <position xmi:type="position:Position" xmi:id="1638" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7946" startColumn="120" endLine="297" endColumn="131" startOffset="7935" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1639">
              <position xmi:type="position:Position" xmi:id="1640" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="297" endOffset="7946" startColumn="120" endLine="297" endColumn="131" startOffset="7935" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1641">
        <position xmi:type="position:Position" xmi:id="1642" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="7957" startColumn="5" endLine="298" endColumn="8" startOffset="7954" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1643">
          <position xmi:type="position:Position" xmi:id="1644" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="7969" startColumn="10" endLine="298" endColumn="20" startOffset="7959" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1645" event="635">
            <position xmi:type="position:Position" xmi:id="1646" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="7969" startColumn="10" endLine="298" endColumn="20" startOffset="7959" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1647">
              <position xmi:type="position:Position" xmi:id="1648" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="7969" startColumn="10" endLine="298" endColumn="20" startOffset="7959" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1649" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1650" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8019" startColumn="68" endLine="298" endColumn="70" startOffset="8017" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1651">
            <position xmi:type="position:Position" xmi:id="1652" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8019" startColumn="68" endLine="298" endColumn="70" startOffset="8017" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="1653" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1654" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="7983" startColumn="32" endLine="298" endColumn="34" startOffset="7981" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1655">
              <position xmi:type="position:Position" xmi:id="1656" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="7983" startColumn="32" endLine="298" endColumn="34" startOffset="7981" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BoolExpression" xmi:id="1657" value="true">
              <position xmi:type="position:Position" xmi:id="1658" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="7979" startColumn="27" endLine="298" endColumn="30" startOffset="7976" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1659">
                <position xmi:type="position:Position" xmi:id="1660" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="7979" startColumn="27" endLine="298" endColumn="30" startOffset="7976" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="1661" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1662" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8001" startColumn="50" endLine="298" endColumn="52" startOffset="7999" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1663">
                <position xmi:type="position:Position" xmi:id="1664" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8001" startColumn="50" endLine="298" endColumn="52" startOffset="7999" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="1665" location="387">
                <position xmi:type="position:Position" xmi:id="1666" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="7997" startColumn="37" endLine="298" endColumn="48" startOffset="7986" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1667">
                  <position xmi:type="position:Position" xmi:id="1668" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="7997" startColumn="37" endLine="298" endColumn="48" startOffset="7986" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1669" location="421">
                <position xmi:type="position:Position" xmi:id="1670" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8014" startColumn="54" endLine="298" endColumn="65" startOffset="8003" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1671">
                  <position xmi:type="position:Position" xmi:id="1672" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8014" startColumn="54" endLine="298" endColumn="65" startOffset="8003" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="1673" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1674" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8041" startColumn="90" endLine="298" endColumn="92" startOffset="8039" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1675">
              <position xmi:type="position:Position" xmi:id="1676" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8041" startColumn="90" endLine="298" endColumn="92" startOffset="8039" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:UnaryExpression" xmi:id="1677">
              <position xmi:type="position:Position" xmi:id="1678" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8024" startColumn="73" endLine="298" endColumn="75" startOffset="8022" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1679">
                <position xmi:type="position:Position" xmi:id="1680" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8024" startColumn="73" endLine="298" endColumn="75" startOffset="8022" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <child xmi:type="expressions:LocationExpression" xmi:id="1681" location="821">
                <position xmi:type="position:Position" xmi:id="1682" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8037" startColumn="77" endLine="298" endColumn="88" startOffset="8026" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1683">
                  <position xmi:type="position:Position" xmi:id="1684" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8037" startColumn="77" endLine="298" endColumn="88" startOffset="8026" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </child>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="1685" location="837">
              <position xmi:type="position:Position" xmi:id="1686" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8066" startColumn="94" endLine="298" endColumn="117" startOffset="8043" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1687">
                <position xmi:type="position:Position" xmi:id="1688" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="298" endOffset="8066" startColumn="94" endLine="298" endColumn="117" startOffset="8043" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </right>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1689">
        <position xmi:type="position:Position" xmi:id="1690" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8078" startColumn="5" endLine="299" endColumn="8" startOffset="8075" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1691">
          <position xmi:type="position:Position" xmi:id="1692" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8090" startColumn="10" endLine="299" endColumn="20" startOffset="8080" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1693" event="637">
            <position xmi:type="position:Position" xmi:id="1694" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8090" startColumn="10" endLine="299" endColumn="20" startOffset="8080" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1695">
              <position xmi:type="position:Position" xmi:id="1696" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8090" startColumn="10" endLine="299" endColumn="20" startOffset="8080" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1697" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1698" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8140" startColumn="68" endLine="299" endColumn="70" startOffset="8138" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1699">
            <position xmi:type="position:Position" xmi:id="1700" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8140" startColumn="68" endLine="299" endColumn="70" startOffset="8138" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="1701" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1702" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8104" startColumn="32" endLine="299" endColumn="34" startOffset="8102" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1703">
              <position xmi:type="position:Position" xmi:id="1704" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8104" startColumn="32" endLine="299" endColumn="34" startOffset="8102" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BoolExpression" xmi:id="1705" value="true">
              <position xmi:type="position:Position" xmi:id="1706" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8100" startColumn="27" endLine="299" endColumn="30" startOffset="8097" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1707">
                <position xmi:type="position:Position" xmi:id="1708" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8100" startColumn="27" endLine="299" endColumn="30" startOffset="8097" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="1709" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1710" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8122" startColumn="50" endLine="299" endColumn="52" startOffset="8120" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1711">
                <position xmi:type="position:Position" xmi:id="1712" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8122" startColumn="50" endLine="299" endColumn="52" startOffset="8120" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="1713" location="387">
                <position xmi:type="position:Position" xmi:id="1714" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8118" startColumn="37" endLine="299" endColumn="48" startOffset="8107" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1715">
                  <position xmi:type="position:Position" xmi:id="1716" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8118" startColumn="37" endLine="299" endColumn="48" startOffset="8107" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1717" location="421">
                <position xmi:type="position:Position" xmi:id="1718" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8135" startColumn="54" endLine="299" endColumn="65" startOffset="8124" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1719">
                  <position xmi:type="position:Position" xmi:id="1720" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8135" startColumn="54" endLine="299" endColumn="65" startOffset="8124" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="1721" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1722" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8162" startColumn="90" endLine="299" endColumn="92" startOffset="8160" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1723">
              <position xmi:type="position:Position" xmi:id="1724" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8162" startColumn="90" endLine="299" endColumn="92" startOffset="8160" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:UnaryExpression" xmi:id="1725">
              <position xmi:type="position:Position" xmi:id="1726" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8145" startColumn="73" endLine="299" endColumn="75" startOffset="8143" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1727">
                <position xmi:type="position:Position" xmi:id="1728" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8145" startColumn="73" endLine="299" endColumn="75" startOffset="8143" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <child xmi:type="expressions:LocationExpression" xmi:id="1729" location="821">
                <position xmi:type="position:Position" xmi:id="1730" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8158" startColumn="77" endLine="299" endColumn="88" startOffset="8147" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1731">
                  <position xmi:type="position:Position" xmi:id="1732" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8158" startColumn="77" endLine="299" endColumn="88" startOffset="8147" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </child>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="1733" location="837">
              <position xmi:type="position:Position" xmi:id="1734" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8187" startColumn="94" endLine="299" endColumn="117" startOffset="8164" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1735">
                <position xmi:type="position:Position" xmi:id="1736" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="299" endOffset="8187" startColumn="94" endLine="299" endColumn="117" startOffset="8164" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </right>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1737">
        <position xmi:type="position:Position" xmi:id="1738" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8199" startColumn="5" endLine="300" endColumn="8" startOffset="8196" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1739">
          <position xmi:type="position:Position" xmi:id="1740" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8209" startColumn="10" endLine="300" endColumn="18" startOffset="8201" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1741" event="645">
            <position xmi:type="position:Position" xmi:id="1742" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8209" startColumn="10" endLine="300" endColumn="18" startOffset="8201" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1743">
              <position xmi:type="position:Position" xmi:id="1744" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8209" startColumn="10" endLine="300" endColumn="18" startOffset="8201" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1745">
          <position xmi:type="position:Position" xmi:id="1746" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8246" startColumn="54" endLine="300" endColumn="55" startOffset="8245" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1747">
            <position xmi:type="position:Position" xmi:id="1748" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8246" startColumn="54" endLine="300" endColumn="55" startOffset="8245" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:UnaryExpression" xmi:id="1749">
            <position xmi:type="position:Position" xmi:id="1750" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8218" startColumn="25" endLine="300" endColumn="27" startOffset="8216" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1751">
              <position xmi:type="position:Position" xmi:id="1752" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8218" startColumn="25" endLine="300" endColumn="27" startOffset="8216" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <child xmi:type="expressions:LocationExpression" xmi:id="1753" location="837">
              <position xmi:type="position:Position" xmi:id="1754" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8243" startColumn="29" endLine="300" endColumn="52" startOffset="8220" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1755">
                <position xmi:type="position:Position" xmi:id="1756" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8243" startColumn="29" endLine="300" endColumn="52" startOffset="8220" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </child>
          </left>
          <right xmi:type="expressions:UnaryExpression" xmi:id="1757">
            <position xmi:type="position:Position" xmi:id="1758" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8250" startColumn="57" endLine="300" endColumn="59" startOffset="8248" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1759">
              <position xmi:type="position:Position" xmi:id="1760" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8250" startColumn="57" endLine="300" endColumn="59" startOffset="8248" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <child xmi:type="expressions:LocationExpression" xmi:id="1761" location="821">
              <position xmi:type="position:Position" xmi:id="1762" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8263" startColumn="61" endLine="300" endColumn="72" startOffset="8252" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1763">
                <position xmi:type="position:Position" xmi:id="1764" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="300" endOffset="8263" startColumn="61" endLine="300" endColumn="72" startOffset="8252" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </child>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1765">
        <position xmi:type="position:Position" xmi:id="1766" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="301" endOffset="8274" startColumn="5" endLine="301" endColumn="8" startOffset="8271" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1767">
          <position xmi:type="position:Position" xmi:id="1768" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="301" endOffset="8283" startColumn="10" endLine="301" endColumn="17" startOffset="8276" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1769" event="167">
            <position xmi:type="position:Position" xmi:id="1770" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="301" endOffset="8283" startColumn="10" endLine="301" endColumn="17" startOffset="8276" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1771">
              <position xmi:type="position:Position" xmi:id="1772" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="301" endOffset="8283" startColumn="10" endLine="301" endColumn="17" startOffset="8276" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BoolExpression" xmi:id="1773" value="true">
          <position xmi:type="position:Position" xmi:id="1774" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="301" endOffset="8293" startColumn="24" endLine="301" endColumn="27" startOffset="8290" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1775">
            <position xmi:type="position:Position" xmi:id="1776" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="301" endOffset="8293" startColumn="24" endLine="301" endColumn="27" startOffset="8290" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1777">
        <position xmi:type="position:Position" xmi:id="1778" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="302" endOffset="8304" startColumn="5" endLine="302" endColumn="8" startOffset="8301" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1779">
          <position xmi:type="position:Position" xmi:id="1780" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="302" endOffset="8312" startColumn="10" endLine="302" endColumn="16" startOffset="8306" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1781" event="165">
            <position xmi:type="position:Position" xmi:id="1782" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="302" endOffset="8312" startColumn="10" endLine="302" endColumn="16" startOffset="8306" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1783">
              <position xmi:type="position:Position" xmi:id="1784" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="302" endOffset="8312" startColumn="10" endLine="302" endColumn="16" startOffset="8306" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1785" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1786" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="302" endOffset="8326" startColumn="28" endLine="302" endColumn="30" startOffset="8324" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1787">
            <position xmi:type="position:Position" xmi:id="1788" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="302" endOffset="8326" startColumn="28" endLine="302" endColumn="30" startOffset="8324" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BoolExpression" xmi:id="1789" value="true">
            <position xmi:type="position:Position" xmi:id="1790" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="302" endOffset="8322" startColumn="23" endLine="302" endColumn="26" startOffset="8319" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1791">
              <position xmi:type="position:Position" xmi:id="1792" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="302" endOffset="8322" startColumn="23" endLine="302" endColumn="26" startOffset="8319" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="1793" location="803">
            <position xmi:type="position:Position" xmi:id="1794" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="302" endOffset="8336" startColumn="32" endLine="302" endColumn="40" startOffset="8328" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1795">
              <position xmi:type="position:Position" xmi:id="1796" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="302" endOffset="8336" startColumn="32" endLine="302" endColumn="40" startOffset="8328" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1797">
        <position xmi:type="position:Position" xmi:id="1798" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8347" startColumn="5" endLine="303" endColumn="8" startOffset="8344" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1799">
          <position xmi:type="position:Position" xmi:id="1800" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8359" startColumn="10" endLine="303" endColumn="20" startOffset="8349" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1801" event="777">
            <position xmi:type="position:Position" xmi:id="1802" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8359" startColumn="10" endLine="303" endColumn="20" startOffset="8349" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1803">
              <position xmi:type="position:Position" xmi:id="1804" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8359" startColumn="10" endLine="303" endColumn="20" startOffset="8349" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1805" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1806" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8418" startColumn="77" endLine="303" endColumn="79" startOffset="8416" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1807">
            <position xmi:type="position:Position" xmi:id="1808" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8418" startColumn="77" endLine="303" endColumn="79" startOffset="8416" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="1809" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1810" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8384" startColumn="43" endLine="303" endColumn="45" startOffset="8382" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1811">
              <position xmi:type="position:Position" xmi:id="1812" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8384" startColumn="43" endLine="303" endColumn="45" startOffset="8382" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="1813" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1814" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8373" startColumn="32" endLine="303" endColumn="34" startOffset="8371" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1815">
                <position xmi:type="position:Position" xmi:id="1816" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8373" startColumn="32" endLine="303" endColumn="34" startOffset="8371" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:BoolExpression" xmi:id="1817" value="true">
                <position xmi:type="position:Position" xmi:id="1818" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8369" startColumn="27" endLine="303" endColumn="30" startOffset="8366" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1819">
                  <position xmi:type="position:Position" xmi:id="1820" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8369" startColumn="27" endLine="303" endColumn="30" startOffset="8366" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1821" location="119">
                <position xmi:type="position:Position" xmi:id="1822" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8380" startColumn="36" endLine="303" endColumn="41" startOffset="8375" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1823">
                  <position xmi:type="position:Position" xmi:id="1824" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8380" startColumn="36" endLine="303" endColumn="41" startOffset="8375" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="1825" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1826" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8407" startColumn="66" endLine="303" endColumn="68" startOffset="8405" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1827">
                <position xmi:type="position:Position" xmi:id="1828" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8407" startColumn="66" endLine="303" endColumn="68" startOffset="8405" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:BinaryExpression" xmi:id="1829" operator="Conjunction">
                <position xmi:type="position:Position" xmi:id="1830" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8396" startColumn="55" endLine="303" endColumn="57" startOffset="8394" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1831">
                  <position xmi:type="position:Position" xmi:id="1832" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8396" startColumn="55" endLine="303" endColumn="57" startOffset="8394" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
                <left xmi:type="expressions:LocationExpression" xmi:id="1833" location="655">
                  <position xmi:type="position:Position" xmi:id="1834" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8392" startColumn="48" endLine="303" endColumn="53" startOffset="8387" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1835">
                    <position xmi:type="position:Position" xmi:id="1836" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8392" startColumn="48" endLine="303" endColumn="53" startOffset="8387" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </left>
                <right xmi:type="expressions:LocationExpression" xmi:id="1837" location="595">
                  <position xmi:type="position:Position" xmi:id="1838" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8403" startColumn="59" endLine="303" endColumn="64" startOffset="8398" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1839">
                    <position xmi:type="position:Position" xmi:id="1840" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8403" startColumn="59" endLine="303" endColumn="64" startOffset="8398" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </right>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1841" location="455">
                <position xmi:type="position:Position" xmi:id="1842" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8413" startColumn="70" endLine="303" endColumn="74" startOffset="8409" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1843">
                  <position xmi:type="position:Position" xmi:id="1844" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8413" startColumn="70" endLine="303" endColumn="74" startOffset="8409" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="1845" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1846" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8435" startColumn="94" endLine="303" endColumn="96" startOffset="8433" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1847">
              <position xmi:type="position:Position" xmi:id="1848" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8435" startColumn="94" endLine="303" endColumn="96" startOffset="8433" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:LocationExpression" xmi:id="1849" location="285">
              <position xmi:type="position:Position" xmi:id="1850" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8431" startColumn="82" endLine="303" endColumn="92" startOffset="8421" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1851">
                <position xmi:type="position:Position" xmi:id="1852" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8431" startColumn="82" endLine="303" endColumn="92" startOffset="8421" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="1853" location="455">
              <position xmi:type="position:Position" xmi:id="1854" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8441" startColumn="98" endLine="303" endColumn="102" startOffset="8437" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1855">
                <position xmi:type="position:Position" xmi:id="1856" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="303" endOffset="8441" startColumn="98" endLine="303" endColumn="102" startOffset="8437" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </right>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1857">
        <position xmi:type="position:Position" xmi:id="1858" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8453" startColumn="5" endLine="304" endColumn="8" startOffset="8450" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1859">
          <position xmi:type="position:Position" xmi:id="1860" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8468" startColumn="10" endLine="304" endColumn="23" startOffset="8455" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1861" event="779">
            <position xmi:type="position:Position" xmi:id="1862" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8468" startColumn="10" endLine="304" endColumn="23" startOffset="8455" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1863">
              <position xmi:type="position:Position" xmi:id="1864" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8468" startColumn="10" endLine="304" endColumn="23" startOffset="8455" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1865">
          <position xmi:type="position:Position" xmi:id="1866" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8542" startColumn="96" endLine="304" endColumn="97" startOffset="8541" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1867">
            <position xmi:type="position:Position" xmi:id="1868" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8542" startColumn="96" endLine="304" endColumn="97" startOffset="8541" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="1869" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1870" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8519" startColumn="72" endLine="304" endColumn="74" startOffset="8517" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1871">
              <position xmi:type="position:Position" xmi:id="1872" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8519" startColumn="72" endLine="304" endColumn="74" startOffset="8517" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="1873" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1874" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8484" startColumn="37" endLine="304" endColumn="39" startOffset="8482" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1875">
                <position xmi:type="position:Position" xmi:id="1876" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8484" startColumn="37" endLine="304" endColumn="39" startOffset="8482" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="1877" location="595">
                <position xmi:type="position:Position" xmi:id="1878" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8480" startColumn="30" endLine="304" endColumn="35" startOffset="8475" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1879">
                  <position xmi:type="position:Position" xmi:id="1880" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8480" startColumn="30" endLine="304" endColumn="35" startOffset="8475" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:UnaryExpression" xmi:id="1881">
                <position xmi:type="position:Position" xmi:id="1882" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8488" startColumn="41" endLine="304" endColumn="43" startOffset="8486" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1883">
                  <position xmi:type="position:Position" xmi:id="1884" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8488" startColumn="41" endLine="304" endColumn="43" startOffset="8486" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
                <child xmi:type="expressions:LocationExpression" xmi:id="1885" location="911">
                  <position xmi:type="position:Position" xmi:id="1886" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8515" startColumn="45" endLine="304" endColumn="70" startOffset="8490" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="1887">
                    <position xmi:type="position:Position" xmi:id="1888" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8515" startColumn="45" endLine="304" endColumn="70" startOffset="8490" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </child>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="1889" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1890" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8531" startColumn="84" endLine="304" endColumn="86" startOffset="8529" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1891">
                <position xmi:type="position:Position" xmi:id="1892" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8531" startColumn="84" endLine="304" endColumn="86" startOffset="8529" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="1893" location="655">
                <position xmi:type="position:Position" xmi:id="1894" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8527" startColumn="77" endLine="304" endColumn="82" startOffset="8522" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1895">
                  <position xmi:type="position:Position" xmi:id="1896" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8527" startColumn="77" endLine="304" endColumn="82" startOffset="8522" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1897" location="543">
                <position xmi:type="position:Position" xmi:id="1898" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8538" startColumn="88" endLine="304" endColumn="93" startOffset="8533" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1899">
                  <position xmi:type="position:Position" xmi:id="1900" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8538" startColumn="88" endLine="304" endColumn="93" startOffset="8533" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="1901">
            <position xmi:type="position:Position" xmi:id="1902" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8584" startColumn="138" endLine="304" endColumn="139" startOffset="8583" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1903">
              <position xmi:type="position:Position" xmi:id="1904" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8584" startColumn="138" endLine="304" endColumn="139" startOffset="8583" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="1905" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1906" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8554" startColumn="107" endLine="304" endColumn="109" startOffset="8552" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1907">
                <position xmi:type="position:Position" xmi:id="1908" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8554" startColumn="107" endLine="304" endColumn="109" startOffset="8552" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="1909" location="595">
                <position xmi:type="position:Position" xmi:id="1910" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8550" startColumn="100" endLine="304" endColumn="105" startOffset="8545" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1911">
                  <position xmi:type="position:Position" xmi:id="1912" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8550" startColumn="100" endLine="304" endColumn="105" startOffset="8545" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1913" location="911">
                <position xmi:type="position:Position" xmi:id="1914" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8581" startColumn="111" endLine="304" endColumn="136" startOffset="8556" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1915">
                  <position xmi:type="position:Position" xmi:id="1916" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8581" startColumn="111" endLine="304" endColumn="136" startOffset="8556" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="1917" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1918" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8594" startColumn="147" endLine="304" endColumn="149" startOffset="8592" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1919">
                <position xmi:type="position:Position" xmi:id="1920" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8594" startColumn="147" endLine="304" endColumn="149" startOffset="8592" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="1921" location="613">
                <position xmi:type="position:Position" xmi:id="1922" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8590" startColumn="141" endLine="304" endColumn="145" startOffset="8586" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1923">
                  <position xmi:type="position:Position" xmi:id="1924" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8590" startColumn="141" endLine="304" endColumn="145" startOffset="8586" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1925" location="911">
                <position xmi:type="position:Position" xmi:id="1926" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8621" startColumn="151" endLine="304" endColumn="176" startOffset="8596" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1927">
                  <position xmi:type="position:Position" xmi:id="1928" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="304" endOffset="8621" startColumn="151" endLine="304" endColumn="176" startOffset="8596" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </right>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1929">
        <position xmi:type="position:Position" xmi:id="1930" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8633" startColumn="5" endLine="305" endColumn="8" startOffset="8630" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1931">
          <position xmi:type="position:Position" xmi:id="1932" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8644" startColumn="10" endLine="305" endColumn="19" startOffset="8635" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1933" event="775">
            <position xmi:type="position:Position" xmi:id="1934" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8644" startColumn="10" endLine="305" endColumn="19" startOffset="8635" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1935">
              <position xmi:type="position:Position" xmi:id="1936" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8644" startColumn="10" endLine="305" endColumn="19" startOffset="8635" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1937" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1938" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8658" startColumn="31" endLine="305" endColumn="33" startOffset="8656" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1939">
            <position xmi:type="position:Position" xmi:id="1940" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8658" startColumn="31" endLine="305" endColumn="33" startOffset="8656" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BoolExpression" xmi:id="1941" value="true">
            <position xmi:type="position:Position" xmi:id="1942" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8654" startColumn="26" endLine="305" endColumn="29" startOffset="8651" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1943">
              <position xmi:type="position:Position" xmi:id="1944" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8654" startColumn="26" endLine="305" endColumn="29" startOffset="8651" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="1945" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="1946" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8681" startColumn="54" endLine="305" endColumn="56" startOffset="8679" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1947">
              <position xmi:type="position:Position" xmi:id="1948" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8681" startColumn="54" endLine="305" endColumn="56" startOffset="8679" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="1949" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="1950" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8670" startColumn="43" endLine="305" endColumn="45" startOffset="8668" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1951">
                <position xmi:type="position:Position" xmi:id="1952" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8670" startColumn="43" endLine="305" endColumn="45" startOffset="8668" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="1953" location="655">
                <position xmi:type="position:Position" xmi:id="1954" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8666" startColumn="36" endLine="305" endColumn="41" startOffset="8661" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1955">
                  <position xmi:type="position:Position" xmi:id="1956" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8666" startColumn="36" endLine="305" endColumn="41" startOffset="8661" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="1957" location="595">
                <position xmi:type="position:Position" xmi:id="1958" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8677" startColumn="47" endLine="305" endColumn="52" startOffset="8672" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="1959">
                  <position xmi:type="position:Position" xmi:id="1960" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8677" startColumn="47" endLine="305" endColumn="52" startOffset="8672" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="1961" location="455">
              <position xmi:type="position:Position" xmi:id="1962" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8687" startColumn="58" endLine="305" endColumn="62" startOffset="8683" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="1963">
                <position xmi:type="position:Position" xmi:id="1964" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="305" endOffset="8687" startColumn="58" endLine="305" endColumn="62" startOffset="8683" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </right>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1965">
        <position xmi:type="position:Position" xmi:id="1966" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="306" endOffset="8699" startColumn="5" endLine="306" endColumn="8" startOffset="8696" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1967">
          <position xmi:type="position:Position" xmi:id="1968" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="306" endOffset="8708" startColumn="10" endLine="306" endColumn="17" startOffset="8701" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1969" event="109">
            <position xmi:type="position:Position" xmi:id="1970" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="306" endOffset="8708" startColumn="10" endLine="306" endColumn="17" startOffset="8701" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1971">
              <position xmi:type="position:Position" xmi:id="1972" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="306" endOffset="8708" startColumn="10" endLine="306" endColumn="17" startOffset="8701" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1973" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1974" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="306" endOffset="8722" startColumn="29" endLine="306" endColumn="31" startOffset="8720" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1975">
            <position xmi:type="position:Position" xmi:id="1976" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="306" endOffset="8722" startColumn="29" endLine="306" endColumn="31" startOffset="8720" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BoolExpression" xmi:id="1977" value="true">
            <position xmi:type="position:Position" xmi:id="1978" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="306" endOffset="8718" startColumn="24" endLine="306" endColumn="27" startOffset="8715" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1979">
              <position xmi:type="position:Position" xmi:id="1980" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="306" endOffset="8718" startColumn="24" endLine="306" endColumn="27" startOffset="8715" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="1981" location="781">
            <position xmi:type="position:Position" xmi:id="1982" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="306" endOffset="8731" startColumn="33" endLine="306" endColumn="40" startOffset="8724" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1983">
              <position xmi:type="position:Position" xmi:id="1984" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="306" endOffset="8731" startColumn="33" endLine="306" endColumn="40" startOffset="8724" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="1985">
        <position xmi:type="position:Position" xmi:id="1986" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="307" endOffset="8742" startColumn="5" endLine="307" endColumn="8" startOffset="8739" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="1987">
          <position xmi:type="position:Position" xmi:id="1988" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="307" endOffset="8750" startColumn="10" endLine="307" endColumn="16" startOffset="8744" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="1989" event="107">
            <position xmi:type="position:Position" xmi:id="1990" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="307" endOffset="8750" startColumn="10" endLine="307" endColumn="16" startOffset="8744" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1991">
              <position xmi:type="position:Position" xmi:id="1992" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="307" endOffset="8750" startColumn="10" endLine="307" endColumn="16" startOffset="8744" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="1993" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="1994" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="307" endOffset="8764" startColumn="28" endLine="307" endColumn="30" startOffset="8762" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="1995">
            <position xmi:type="position:Position" xmi:id="1996" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="307" endOffset="8764" startColumn="28" endLine="307" endColumn="30" startOffset="8762" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BoolExpression" xmi:id="1997" value="true">
            <position xmi:type="position:Position" xmi:id="1998" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="307" endOffset="8760" startColumn="23" endLine="307" endColumn="26" startOffset="8757" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="1999">
              <position xmi:type="position:Position" xmi:id="2000" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="307" endOffset="8760" startColumn="23" endLine="307" endColumn="26" startOffset="8757" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="2001" location="821">
            <position xmi:type="position:Position" xmi:id="2002" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="307" endOffset="8777" startColumn="32" endLine="307" endColumn="43" startOffset="8766" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2003">
              <position xmi:type="position:Position" xmi:id="2004" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="307" endOffset="8777" startColumn="32" endLine="307" endColumn="43" startOffset="8766" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2005">
        <position xmi:type="position:Position" xmi:id="2006" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="308" endOffset="8788" startColumn="5" endLine="308" endColumn="8" startOffset="8785" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2007">
          <position xmi:type="position:Position" xmi:id="2008" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="308" endOffset="8801" startColumn="10" endLine="308" endColumn="21" startOffset="8790" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2009" event="537">
            <position xmi:type="position:Position" xmi:id="2010" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="308" endOffset="8801" startColumn="10" endLine="308" endColumn="21" startOffset="8790" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2011">
              <position xmi:type="position:Position" xmi:id="2012" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="308" endOffset="8801" startColumn="10" endLine="308" endColumn="21" startOffset="8790" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BoolExpression" xmi:id="2013" value="true">
          <position xmi:type="position:Position" xmi:id="2014" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="308" endOffset="8811" startColumn="28" endLine="308" endColumn="31" startOffset="8808" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="2015">
            <position xmi:type="position:Position" xmi:id="2016" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="308" endOffset="8811" startColumn="28" endLine="308" endColumn="31" startOffset="8808" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2017">
        <position xmi:type="position:Position" xmi:id="2018" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8822" startColumn="5" endLine="309" endColumn="8" startOffset="8819" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2019">
          <position xmi:type="position:Position" xmi:id="2020" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8834" startColumn="10" endLine="309" endColumn="20" startOffset="8824" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2021" event="535">
            <position xmi:type="position:Position" xmi:id="2022" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8834" startColumn="10" endLine="309" endColumn="20" startOffset="8824" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2023">
              <position xmi:type="position:Position" xmi:id="2024" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8834" startColumn="10" endLine="309" endColumn="20" startOffset="8824" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="2025" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="2026" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8910" startColumn="94" endLine="309" endColumn="96" startOffset="8908" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="2027">
            <position xmi:type="position:Position" xmi:id="2028" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8910" startColumn="94" endLine="309" endColumn="96" startOffset="8908" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="2029" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="2030" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8874" startColumn="58" endLine="309" endColumn="60" startOffset="8872" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2031">
              <position xmi:type="position:Position" xmi:id="2032" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8874" startColumn="58" endLine="309" endColumn="60" startOffset="8872" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="2033" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="2034" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8848" startColumn="32" endLine="309" endColumn="34" startOffset="8846" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="2035">
                <position xmi:type="position:Position" xmi:id="2036" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8848" startColumn="32" endLine="309" endColumn="34" startOffset="8846" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:BoolExpression" xmi:id="2037" value="true">
                <position xmi:type="position:Position" xmi:id="2038" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8844" startColumn="27" endLine="309" endColumn="30" startOffset="8841" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="2039">
                  <position xmi:type="position:Position" xmi:id="2040" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8844" startColumn="27" endLine="309" endColumn="30" startOffset="8841" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:BinaryExpression" xmi:id="2041" operator="Conjunction">
                <position xmi:type="position:Position" xmi:id="2042" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8863" startColumn="47" endLine="309" endColumn="49" startOffset="8861" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="2043">
                  <position xmi:type="position:Position" xmi:id="2044" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8863" startColumn="47" endLine="309" endColumn="49" startOffset="8861" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
                <left xmi:type="expressions:LocationExpression" xmi:id="2045" location="803">
                  <position xmi:type="position:Position" xmi:id="2046" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8859" startColumn="37" endLine="309" endColumn="45" startOffset="8851" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="2047">
                    <position xmi:type="position:Position" xmi:id="2048" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8859" startColumn="37" endLine="309" endColumn="45" startOffset="8851" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </left>
                <right xmi:type="expressions:LocationExpression" xmi:id="2049" location="455">
                  <position xmi:type="position:Position" xmi:id="2050" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8869" startColumn="51" endLine="309" endColumn="55" startOffset="8865" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="2051">
                    <position xmi:type="position:Position" xmi:id="2052" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8869" startColumn="51" endLine="309" endColumn="55" startOffset="8865" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </right>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="2053" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="2054" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8892" startColumn="76" endLine="309" endColumn="78" startOffset="8890" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="2055">
                <position xmi:type="position:Position" xmi:id="2056" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8892" startColumn="76" endLine="309" endColumn="78" startOffset="8890" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="2057" location="387">
                <position xmi:type="position:Position" xmi:id="2058" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8888" startColumn="63" endLine="309" endColumn="74" startOffset="8877" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="2059">
                  <position xmi:type="position:Position" xmi:id="2060" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8888" startColumn="63" endLine="309" endColumn="74" startOffset="8877" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="2061" location="421">
                <position xmi:type="position:Position" xmi:id="2062" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8905" startColumn="80" endLine="309" endColumn="91" startOffset="8894" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="2063">
                  <position xmi:type="position:Position" xmi:id="2064" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8905" startColumn="80" endLine="309" endColumn="91" startOffset="8894" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="2065" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="2066" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8932" startColumn="116" endLine="309" endColumn="118" startOffset="8930" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2067">
              <position xmi:type="position:Position" xmi:id="2068" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8932" startColumn="116" endLine="309" endColumn="118" startOffset="8930" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:UnaryExpression" xmi:id="2069">
              <position xmi:type="position:Position" xmi:id="2070" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8915" startColumn="99" endLine="309" endColumn="101" startOffset="8913" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="2071">
                <position xmi:type="position:Position" xmi:id="2072" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8915" startColumn="99" endLine="309" endColumn="101" startOffset="8913" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <child xmi:type="expressions:LocationExpression" xmi:id="2073" location="821">
                <position xmi:type="position:Position" xmi:id="2074" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8928" startColumn="103" endLine="309" endColumn="114" startOffset="8917" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="2075">
                  <position xmi:type="position:Position" xmi:id="2076" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8928" startColumn="103" endLine="309" endColumn="114" startOffset="8917" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </child>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="2077" location="837">
              <position xmi:type="position:Position" xmi:id="2078" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8957" startColumn="120" endLine="309" endColumn="143" startOffset="8934" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="2079">
                <position xmi:type="position:Position" xmi:id="2080" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="309" endOffset="8957" startColumn="120" endLine="309" endColumn="143" startOffset="8934" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </right>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2081">
        <position xmi:type="position:Position" xmi:id="2082" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="310" endOffset="8969" startColumn="5" endLine="310" endColumn="8" startOffset="8966" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2083">
          <position xmi:type="position:Position" xmi:id="2084" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="310" endOffset="8982" startColumn="10" endLine="310" endColumn="21" startOffset="8971" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2085" event="591">
            <position xmi:type="position:Position" xmi:id="2086" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="310" endOffset="8982" startColumn="10" endLine="310" endColumn="21" startOffset="8971" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2087">
              <position xmi:type="position:Position" xmi:id="2088" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="310" endOffset="8982" startColumn="10" endLine="310" endColumn="21" startOffset="8971" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BoolExpression" xmi:id="2089" value="true">
          <position xmi:type="position:Position" xmi:id="2090" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="310" endOffset="8992" startColumn="28" endLine="310" endColumn="31" startOffset="8989" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="2091">
            <position xmi:type="position:Position" xmi:id="2092" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="310" endOffset="8992" startColumn="28" endLine="310" endColumn="31" startOffset="8989" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="2093">
        <position xmi:type="position:Position" xmi:id="2094" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9003" startColumn="5" endLine="311" endColumn="8" startOffset="9000" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="2095">
          <position xmi:type="position:Position" xmi:id="2096" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9015" startColumn="10" endLine="311" endColumn="20" startOffset="9005" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="2097" event="589">
            <position xmi:type="position:Position" xmi:id="2098" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9015" startColumn="10" endLine="311" endColumn="20" startOffset="9005" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2099">
              <position xmi:type="position:Position" xmi:id="2100" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9015" startColumn="10" endLine="311" endColumn="20" startOffset="9005" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="2101" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="2102" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9091" startColumn="94" endLine="311" endColumn="96" startOffset="9089" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="2103">
            <position xmi:type="position:Position" xmi:id="2104" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9091" startColumn="94" endLine="311" endColumn="96" startOffset="9089" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="2105" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="2106" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9055" startColumn="58" endLine="311" endColumn="60" startOffset="9053" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2107">
              <position xmi:type="position:Position" xmi:id="2108" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9055" startColumn="58" endLine="311" endColumn="60" startOffset="9053" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:BinaryExpression" xmi:id="2109" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="2110" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9029" startColumn="32" endLine="311" endColumn="34" startOffset="9027" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="2111">
                <position xmi:type="position:Position" xmi:id="2112" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9029" startColumn="32" endLine="311" endColumn="34" startOffset="9027" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:BoolExpression" xmi:id="2113" value="true">
                <position xmi:type="position:Position" xmi:id="2114" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9025" startColumn="27" endLine="311" endColumn="30" startOffset="9022" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="2115">
                  <position xmi:type="position:Position" xmi:id="2116" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9025" startColumn="27" endLine="311" endColumn="30" startOffset="9022" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:BinaryExpression" xmi:id="2117" operator="Conjunction">
                <position xmi:type="position:Position" xmi:id="2118" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9044" startColumn="47" endLine="311" endColumn="49" startOffset="9042" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="2119">
                  <position xmi:type="position:Position" xmi:id="2120" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9044" startColumn="47" endLine="311" endColumn="49" startOffset="9042" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
                <left xmi:type="expressions:LocationExpression" xmi:id="2121" location="803">
                  <position xmi:type="position:Position" xmi:id="2122" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9040" startColumn="37" endLine="311" endColumn="45" startOffset="9032" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="2123">
                    <position xmi:type="position:Position" xmi:id="2124" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9040" startColumn="37" endLine="311" endColumn="45" startOffset="9032" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </left>
                <right xmi:type="expressions:LocationExpression" xmi:id="2125" location="455">
                  <position xmi:type="position:Position" xmi:id="2126" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9050" startColumn="51" endLine="311" endColumn="55" startOffset="9046" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  <type xmi:type="types:BoolType" xmi:id="2127">
                    <position xmi:type="position:Position" xmi:id="2128" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9050" startColumn="51" endLine="311" endColumn="55" startOffset="9046" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                  </type>
                </right>
              </right>
            </left>
            <right xmi:type="expressions:BinaryExpression" xmi:id="2129" operator="Conjunction">
              <position xmi:type="position:Position" xmi:id="2130" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9073" startColumn="76" endLine="311" endColumn="78" startOffset="9071" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="2131">
                <position xmi:type="position:Position" xmi:id="2132" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9073" startColumn="76" endLine="311" endColumn="78" startOffset="9071" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <left xmi:type="expressions:LocationExpression" xmi:id="2133" location="387">
                <position xmi:type="position:Position" xmi:id="2134" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9069" startColumn="63" endLine="311" endColumn="74" startOffset="9058" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="2135">
                  <position xmi:type="position:Position" xmi:id="2136" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9069" startColumn="63" endLine="311" endColumn="74" startOffset="9058" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </left>
              <right xmi:type="expressions:LocationExpression" xmi:id="2137" location="421">
                <position xmi:type="position:Position" xmi:id="2138" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9086" startColumn="80" endLine="311" endColumn="91" startOffset="9075" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="2139">
                  <position xmi:type="position:Position" xmi:id="2140" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9086" startColumn="80" endLine="311" endColumn="91" startOffset="9075" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </right>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="2141" operator="Conjunction">
            <position xmi:type="position:Position" xmi:id="2142" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9113" startColumn="116" endLine="311" endColumn="118" startOffset="9111" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="2143">
              <position xmi:type="position:Position" xmi:id="2144" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9113" startColumn="116" endLine="311" endColumn="118" startOffset="9111" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
            </type>
            <left xmi:type="expressions:UnaryExpression" xmi:id="2145">
              <position xmi:type="position:Position" xmi:id="2146" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9096" startColumn="99" endLine="311" endColumn="101" startOffset="9094" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="2147">
                <position xmi:type="position:Position" xmi:id="2148" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9096" startColumn="99" endLine="311" endColumn="101" startOffset="9094" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
              <child xmi:type="expressions:LocationExpression" xmi:id="2149" location="821">
                <position xmi:type="position:Position" xmi:id="2150" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9109" startColumn="103" endLine="311" endColumn="114" startOffset="9098" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                <type xmi:type="types:BoolType" xmi:id="2151">
                  <position xmi:type="position:Position" xmi:id="2152" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9109" startColumn="103" endLine="311" endColumn="114" startOffset="9098" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
                </type>
              </child>
            </left>
            <right xmi:type="expressions:LocationExpression" xmi:id="2153" location="837">
              <position xmi:type="position:Position" xmi:id="2154" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9138" startColumn="120" endLine="311" endColumn="143" startOffset="9115" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              <type xmi:type="types:BoolType" xmi:id="2155">
                <position xmi:type="position:Position" xmi:id="2156" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="311" endOffset="9138" startColumn="120" endLine="311" endColumn="143" startOffset="9115" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
              </type>
            </right>
          </right>
        </guards>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="2157" value="true">
        <position xmi:type="position:Position" xmi:id="2158" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="289" endOffset="7092" startColumn="5" endLine="289" endColumn="10" startOffset="7087" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2159">
          <position xmi:type="position:Position" xmi:id="2160" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="289" endOffset="7092" startColumn="5" endLine="289" endColumn="10" startOffset="7087" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <alphabet xmi:type="automata:Alphabet" xmi:id="2161">
      <position xmi:type="position:Position" xmi:id="2162" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6788" startColumn="3" endLine="286" endColumn="10" startOffset="6781" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
      <events xmi:type="expressions:EventExpression" xmi:id="2163" event="107">
        <position xmi:type="position:Position" xmi:id="2164" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6796" startColumn="12" endLine="286" endColumn="18" startOffset="6790" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2165">
          <position xmi:type="position:Position" xmi:id="2166" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6796" startColumn="12" endLine="286" endColumn="18" startOffset="6790" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2167" event="109">
        <position xmi:type="position:Position" xmi:id="2168" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6806" startColumn="21" endLine="286" endColumn="28" startOffset="6799" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2169">
          <position xmi:type="position:Position" xmi:id="2170" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6806" startColumn="21" endLine="286" endColumn="28" startOffset="6799" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2171" event="165">
        <position xmi:type="position:Position" xmi:id="2172" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6815" startColumn="31" endLine="286" endColumn="37" startOffset="6809" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2173">
          <position xmi:type="position:Position" xmi:id="2174" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6815" startColumn="31" endLine="286" endColumn="37" startOffset="6809" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2175" event="167">
        <position xmi:type="position:Position" xmi:id="2176" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6825" startColumn="40" endLine="286" endColumn="47" startOffset="6818" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2177">
          <position xmi:type="position:Position" xmi:id="2178" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6825" startColumn="40" endLine="286" endColumn="47" startOffset="6818" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2179" event="223">
        <position xmi:type="position:Position" xmi:id="2180" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6834" startColumn="50" endLine="286" endColumn="56" startOffset="6828" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2181">
          <position xmi:type="position:Position" xmi:id="2182" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6834" startColumn="50" endLine="286" endColumn="56" startOffset="6828" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2183" event="225">
        <position xmi:type="position:Position" xmi:id="2184" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6844" startColumn="59" endLine="286" endColumn="66" startOffset="6837" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2185">
          <position xmi:type="position:Position" xmi:id="2186" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6844" startColumn="59" endLine="286" endColumn="66" startOffset="6837" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2187" event="535">
        <position xmi:type="position:Position" xmi:id="2188" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6857" startColumn="69" endLine="286" endColumn="79" startOffset="6847" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2189">
          <position xmi:type="position:Position" xmi:id="2190" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6857" startColumn="69" endLine="286" endColumn="79" startOffset="6847" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2191" event="537">
        <position xmi:type="position:Position" xmi:id="2192" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6871" startColumn="82" endLine="286" endColumn="93" startOffset="6860" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2193">
          <position xmi:type="position:Position" xmi:id="2194" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6871" startColumn="82" endLine="286" endColumn="93" startOffset="6860" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2195" event="589">
        <position xmi:type="position:Position" xmi:id="2196" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6884" startColumn="96" endLine="286" endColumn="106" startOffset="6874" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2197">
          <position xmi:type="position:Position" xmi:id="2198" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6884" startColumn="96" endLine="286" endColumn="106" startOffset="6874" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2199" event="591">
        <position xmi:type="position:Position" xmi:id="2200" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6898" startColumn="109" endLine="286" endColumn="120" startOffset="6887" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2201">
          <position xmi:type="position:Position" xmi:id="2202" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6898" startColumn="109" endLine="286" endColumn="120" startOffset="6887" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2203" event="647">
        <position xmi:type="position:Position" xmi:id="2204" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6914" startColumn="123" endLine="286" endColumn="136" startOffset="6901" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2205">
          <position xmi:type="position:Position" xmi:id="2206" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6914" startColumn="123" endLine="286" endColumn="136" startOffset="6901" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2207" event="649">
        <position xmi:type="position:Position" xmi:id="2208" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6930" startColumn="139" endLine="286" endColumn="152" startOffset="6917" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2209">
          <position xmi:type="position:Position" xmi:id="2210" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6930" startColumn="139" endLine="286" endColumn="152" startOffset="6917" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2211" event="645">
        <position xmi:type="position:Position" xmi:id="2212" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6941" startColumn="155" endLine="286" endColumn="163" startOffset="6933" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2213">
          <position xmi:type="position:Position" xmi:id="2214" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6941" startColumn="155" endLine="286" endColumn="163" startOffset="6933" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2215" event="633">
        <position xmi:type="position:Position" xmi:id="2216" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6950" startColumn="166" endLine="286" endColumn="172" startOffset="6944" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2217">
          <position xmi:type="position:Position" xmi:id="2218" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6950" startColumn="166" endLine="286" endColumn="172" startOffset="6944" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2219" event="635">
        <position xmi:type="position:Position" xmi:id="2220" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6963" startColumn="175" endLine="286" endColumn="185" startOffset="6953" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2221">
          <position xmi:type="position:Position" xmi:id="2222" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6963" startColumn="175" endLine="286" endColumn="185" startOffset="6953" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2223" event="637">
        <position xmi:type="position:Position" xmi:id="2224" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6976" startColumn="188" endLine="286" endColumn="198" startOffset="6966" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2225">
          <position xmi:type="position:Position" xmi:id="2226" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6976" startColumn="188" endLine="286" endColumn="198" startOffset="6966" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2227" event="639">
        <position xmi:type="position:Position" xmi:id="2228" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6985" startColumn="201" endLine="286" endColumn="207" startOffset="6979" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2229">
          <position xmi:type="position:Position" xmi:id="2230" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6985" startColumn="201" endLine="286" endColumn="207" startOffset="6979" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2231" event="641">
        <position xmi:type="position:Position" xmi:id="2232" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6998" startColumn="210" endLine="286" endColumn="220" startOffset="6988" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2233">
          <position xmi:type="position:Position" xmi:id="2234" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="6998" startColumn="210" endLine="286" endColumn="220" startOffset="6988" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2235" event="643">
        <position xmi:type="position:Position" xmi:id="2236" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="7011" startColumn="223" endLine="286" endColumn="233" startOffset="7001" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2237">
          <position xmi:type="position:Position" xmi:id="2238" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="7011" startColumn="223" endLine="286" endColumn="233" startOffset="7001" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2239" event="777">
        <position xmi:type="position:Position" xmi:id="2240" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="7024" startColumn="236" endLine="286" endColumn="246" startOffset="7014" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2241">
          <position xmi:type="position:Position" xmi:id="2242" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="7024" startColumn="236" endLine="286" endColumn="246" startOffset="7014" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2243" event="779">
        <position xmi:type="position:Position" xmi:id="2244" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="7040" startColumn="249" endLine="286" endColumn="262" startOffset="7027" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2245">
          <position xmi:type="position:Position" xmi:id="2246" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="7040" startColumn="249" endLine="286" endColumn="262" startOffset="7027" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
      <events xmi:type="expressions:EventExpression" xmi:id="2247" event="775">
        <position xmi:type="position:Position" xmi:id="2248" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="7052" startColumn="265" endLine="286" endColumn="274" startOffset="7043" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="2249">
          <position xmi:type="position:Position" xmi:id="2250" source="File &quot;../data/tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif&quot;: " startLine="286" endOffset="7052" startColumn="265" endLine="286" endColumn="274" startOffset="7043" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\themapark_plants_requirements_ctrlsys_processed_transformed.cif"/>
        </type>
      </events>
    </alphabet>
  </components>
</cif:Specification>
`;
const eventMap = ['BA.u_Empty', 'BA.u_OK', 'BB.u_press', 'BB.u_release', 'BLP.u_active', 'BLP.u_inactive', 'BS.u_active', 'BS.u_inactive', 'BSP.u_active', 'BSP.u_inactive', 'DM.u_disable', 'DM.u_error', 'FB.u_press', 'FB.u_release', 'FLP.u_active', 'FLP.u_inactive', 'FSP.u_active', 'FSP.u_inactive', 'RB.u_press', 'RB.u_release', 'RideControl.u_start', 'RideControl.u_stop', 'SH.u_chdir', 'SH.u_error', 'SM.u_error', 'BL.c_off', 'BL.c_on', 'DM.c_bw', 'DM.c_bwslow', 'DM.c_bwstop', 'DM.c_enable_bw', 'DM.c_enable_fw', 'DM.c_fw', 'DM.c_fwslow', 'DM.c_fwstop', 'DM.c_stop', 'FL.c_off', 'FL.c_on', 'MM.c_active', 'MM.c_emergency', 'MM.c_reset', 'RL.c_off', 'RL.c_on', 'SH.c_disable', 'SH.c_enable', 'SM.c_disable', 'SM.c_enable'];
