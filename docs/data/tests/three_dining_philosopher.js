const xml_three_dining_philosopher = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
  <declarations xmi:type="declarations:Event" xmi:id="3" name="p1f1" controllable="false">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="1" endOffset="18" startColumn="16" endLine="1" endColumn="19" startOffset="15" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="5" name="p1f3" controllable="false">
    <position xmi:type="position:Position" xmi:id="6" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="2" endOffset="40" startColumn="16" endLine="2" endColumn="19" startOffset="37" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="7" name="p2f1" controllable="false">
    <position xmi:type="position:Position" xmi:id="8" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="3" endOffset="62" startColumn="16" endLine="3" endColumn="19" startOffset="59" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="9" name="p2f2" controllable="false">
    <position xmi:type="position:Position" xmi:id="10" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="4" endOffset="84" startColumn="16" endLine="4" endColumn="19" startOffset="81" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="11" name="p3f2" controllable="false">
    <position xmi:type="position:Position" xmi:id="12" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="5" endOffset="106" startColumn="16" endLine="5" endColumn="19" startOffset="103" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="13" name="p3f3" controllable="false">
    <position xmi:type="position:Position" xmi:id="14" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="6" endOffset="128" startColumn="16" endLine="6" endColumn="19" startOffset="125" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="15" name="p1f" controllable="false">
    <position xmi:type="position:Position" xmi:id="16" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="7" endOffset="149" startColumn="16" endLine="7" endColumn="18" startOffset="147" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="17" name="p2f" controllable="false">
    <position xmi:type="position:Position" xmi:id="18" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="8" endOffset="170" startColumn="16" endLine="8" endColumn="18" startOffset="168" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="19" name="p3f" controllable="false">
    <position xmi:type="position:Position" xmi:id="20" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="9" endOffset="191" startColumn="16" endLine="9" endColumn="18" startOffset="189" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
  </declarations>
  <components xmi:type="automata:Automaton" xmi:id="21" name="philosopher1">
    <position xmi:type="position:Position" xmi:id="22" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="10" endOffset="216" startColumn="11" endLine="10" endColumn="22" startOffset="205" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="23" name="T">
      <position xmi:type="position:Position" xmi:id="24" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="11" endOffset="231" startColumn="12" endLine="11" endColumn="12" startOffset="231" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="25" value="true">
        <position xmi:type="position:Position" xmi:id="26" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="12" endOffset="245" startColumn="5" endLine="12" endColumn="11" startOffset="239" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="27">
          <position xmi:type="position:Position" xmi:id="28" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="12" endOffset="245" startColumn="5" endLine="12" endColumn="11" startOffset="239" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="29" target="45">
        <position xmi:type="position:Position" xmi:id="30" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="13" endOffset="256" startColumn="5" endLine="13" endColumn="8" startOffset="253" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="31">
          <position xmi:type="position:Position" xmi:id="32" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="13" endOffset="261" startColumn="10" endLine="13" endColumn="13" startOffset="258" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="33" event="3">
            <position xmi:type="position:Position" xmi:id="34" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="13" endOffset="261" startColumn="10" endLine="13" endColumn="13" startOffset="258" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="35">
              <position xmi:type="position:Position" xmi:id="36" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="13" endOffset="261" startColumn="10" endLine="13" endColumn="13" startOffset="258" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="37" target="55">
        <position xmi:type="position:Position" xmi:id="38" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="14" endOffset="280" startColumn="5" endLine="14" endColumn="8" startOffset="277" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="39">
          <position xmi:type="position:Position" xmi:id="40" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="14" endOffset="285" startColumn="10" endLine="14" endColumn="13" startOffset="282" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="41" event="5">
            <position xmi:type="position:Position" xmi:id="42" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="14" endOffset="285" startColumn="10" endLine="14" endColumn="13" startOffset="282" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="43">
              <position xmi:type="position:Position" xmi:id="44" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="14" endOffset="285" startColumn="10" endLine="14" endColumn="13" startOffset="282" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="45" name="F1">
      <position xmi:type="position:Position" xmi:id="46" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="15" endOffset="309" startColumn="12" endLine="15" endColumn="13" startOffset="308" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="47" target="65">
        <position xmi:type="position:Position" xmi:id="48" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="16" endOffset="320" startColumn="5" endLine="16" endColumn="8" startOffset="317" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="49">
          <position xmi:type="position:Position" xmi:id="50" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="16" endOffset="325" startColumn="10" endLine="16" endColumn="13" startOffset="322" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="51" event="5">
            <position xmi:type="position:Position" xmi:id="52" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="16" endOffset="325" startColumn="10" endLine="16" endColumn="13" startOffset="322" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="53">
              <position xmi:type="position:Position" xmi:id="54" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="16" endOffset="325" startColumn="10" endLine="16" endColumn="13" startOffset="322" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="55" name="F3">
      <position xmi:type="position:Position" xmi:id="56" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="17" endOffset="348" startColumn="12" endLine="17" endColumn="13" startOffset="347" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="57" target="65">
        <position xmi:type="position:Position" xmi:id="58" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="18" endOffset="359" startColumn="5" endLine="18" endColumn="8" startOffset="356" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="59">
          <position xmi:type="position:Position" xmi:id="60" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="18" endOffset="364" startColumn="10" endLine="18" endColumn="13" startOffset="361" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="61" event="3">
            <position xmi:type="position:Position" xmi:id="62" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="18" endOffset="364" startColumn="10" endLine="18" endColumn="13" startOffset="361" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="63">
              <position xmi:type="position:Position" xmi:id="64" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="18" endOffset="364" startColumn="10" endLine="18" endColumn="13" startOffset="361" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="65" name="E">
      <position xmi:type="position:Position" xmi:id="66" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="19" endOffset="386" startColumn="12" endLine="19" endColumn="12" startOffset="386" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="67" target="23">
        <position xmi:type="position:Position" xmi:id="68" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="20" endOffset="397" startColumn="5" endLine="20" endColumn="8" startOffset="394" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="69">
          <position xmi:type="position:Position" xmi:id="70" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="20" endOffset="401" startColumn="10" endLine="20" endColumn="12" startOffset="399" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="71" event="15">
            <position xmi:type="position:Position" xmi:id="72" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="20" endOffset="401" startColumn="10" endLine="20" endColumn="12" startOffset="399" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="73">
              <position xmi:type="position:Position" xmi:id="74" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="20" endOffset="401" startColumn="10" endLine="20" endColumn="12" startOffset="399" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="75" name="philosopher2">
    <position xmi:type="position:Position" xmi:id="76" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="22" endOffset="438" startColumn="11" endLine="22" endColumn="22" startOffset="427" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="77" name="T">
      <position xmi:type="position:Position" xmi:id="78" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="23" endOffset="453" startColumn="12" endLine="23" endColumn="12" startOffset="453" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="79" value="true">
        <position xmi:type="position:Position" xmi:id="80" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="24" endOffset="467" startColumn="5" endLine="24" endColumn="11" startOffset="461" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="81">
          <position xmi:type="position:Position" xmi:id="82" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="24" endOffset="467" startColumn="5" endLine="24" endColumn="11" startOffset="461" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="83" target="99">
        <position xmi:type="position:Position" xmi:id="84" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="25" endOffset="478" startColumn="5" endLine="25" endColumn="8" startOffset="475" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="85">
          <position xmi:type="position:Position" xmi:id="86" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="25" endOffset="483" startColumn="10" endLine="25" endColumn="13" startOffset="480" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="87" event="7">
            <position xmi:type="position:Position" xmi:id="88" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="25" endOffset="483" startColumn="10" endLine="25" endColumn="13" startOffset="480" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="89">
              <position xmi:type="position:Position" xmi:id="90" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="25" endOffset="483" startColumn="10" endLine="25" endColumn="13" startOffset="480" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="91" target="109">
        <position xmi:type="position:Position" xmi:id="92" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="26" endOffset="502" startColumn="5" endLine="26" endColumn="8" startOffset="499" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="93">
          <position xmi:type="position:Position" xmi:id="94" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="26" endOffset="507" startColumn="10" endLine="26" endColumn="13" startOffset="504" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="95" event="9">
            <position xmi:type="position:Position" xmi:id="96" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="26" endOffset="507" startColumn="10" endLine="26" endColumn="13" startOffset="504" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="97">
              <position xmi:type="position:Position" xmi:id="98" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="26" endOffset="507" startColumn="10" endLine="26" endColumn="13" startOffset="504" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="99" name="F1">
      <position xmi:type="position:Position" xmi:id="100" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="27" endOffset="531" startColumn="12" endLine="27" endColumn="13" startOffset="530" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="101" target="119">
        <position xmi:type="position:Position" xmi:id="102" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="28" endOffset="542" startColumn="5" endLine="28" endColumn="8" startOffset="539" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="103">
          <position xmi:type="position:Position" xmi:id="104" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="28" endOffset="547" startColumn="10" endLine="28" endColumn="13" startOffset="544" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="105" event="9">
            <position xmi:type="position:Position" xmi:id="106" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="28" endOffset="547" startColumn="10" endLine="28" endColumn="13" startOffset="544" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="107">
              <position xmi:type="position:Position" xmi:id="108" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="28" endOffset="547" startColumn="10" endLine="28" endColumn="13" startOffset="544" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="109" name="F2">
      <position xmi:type="position:Position" xmi:id="110" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="29" endOffset="570" startColumn="12" endLine="29" endColumn="13" startOffset="569" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="111" target="119">
        <position xmi:type="position:Position" xmi:id="112" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="30" endOffset="581" startColumn="5" endLine="30" endColumn="8" startOffset="578" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="113">
          <position xmi:type="position:Position" xmi:id="114" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="30" endOffset="586" startColumn="10" endLine="30" endColumn="13" startOffset="583" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="115" event="7">
            <position xmi:type="position:Position" xmi:id="116" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="30" endOffset="586" startColumn="10" endLine="30" endColumn="13" startOffset="583" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="117">
              <position xmi:type="position:Position" xmi:id="118" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="30" endOffset="586" startColumn="10" endLine="30" endColumn="13" startOffset="583" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="119" name="E">
      <position xmi:type="position:Position" xmi:id="120" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="31" endOffset="608" startColumn="12" endLine="31" endColumn="12" startOffset="608" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="121" target="77">
        <position xmi:type="position:Position" xmi:id="122" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="32" endOffset="619" startColumn="5" endLine="32" endColumn="8" startOffset="616" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="123">
          <position xmi:type="position:Position" xmi:id="124" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="32" endOffset="623" startColumn="10" endLine="32" endColumn="12" startOffset="621" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="125" event="17">
            <position xmi:type="position:Position" xmi:id="126" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="32" endOffset="623" startColumn="10" endLine="32" endColumn="12" startOffset="621" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="127">
              <position xmi:type="position:Position" xmi:id="128" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="32" endOffset="623" startColumn="10" endLine="32" endColumn="12" startOffset="621" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="129" name="philosopher3">
    <position xmi:type="position:Position" xmi:id="130" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="34" endOffset="660" startColumn="11" endLine="34" endColumn="22" startOffset="649" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="131" name="T">
      <position xmi:type="position:Position" xmi:id="132" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="35" endOffset="675" startColumn="12" endLine="35" endColumn="12" startOffset="675" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="133" value="true">
        <position xmi:type="position:Position" xmi:id="134" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="36" endOffset="689" startColumn="5" endLine="36" endColumn="11" startOffset="683" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="135">
          <position xmi:type="position:Position" xmi:id="136" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="36" endOffset="689" startColumn="5" endLine="36" endColumn="11" startOffset="683" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="137" target="153">
        <position xmi:type="position:Position" xmi:id="138" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="37" endOffset="700" startColumn="5" endLine="37" endColumn="8" startOffset="697" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="139">
          <position xmi:type="position:Position" xmi:id="140" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="37" endOffset="705" startColumn="10" endLine="37" endColumn="13" startOffset="702" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="141" event="11">
            <position xmi:type="position:Position" xmi:id="142" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="37" endOffset="705" startColumn="10" endLine="37" endColumn="13" startOffset="702" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="143">
              <position xmi:type="position:Position" xmi:id="144" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="37" endOffset="705" startColumn="10" endLine="37" endColumn="13" startOffset="702" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="145" target="163">
        <position xmi:type="position:Position" xmi:id="146" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="38" endOffset="724" startColumn="5" endLine="38" endColumn="8" startOffset="721" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="147">
          <position xmi:type="position:Position" xmi:id="148" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="38" endOffset="729" startColumn="10" endLine="38" endColumn="13" startOffset="726" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="149" event="13">
            <position xmi:type="position:Position" xmi:id="150" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="38" endOffset="729" startColumn="10" endLine="38" endColumn="13" startOffset="726" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="151">
              <position xmi:type="position:Position" xmi:id="152" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="38" endOffset="729" startColumn="10" endLine="38" endColumn="13" startOffset="726" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="153" name="F2">
      <position xmi:type="position:Position" xmi:id="154" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="39" endOffset="753" startColumn="12" endLine="39" endColumn="13" startOffset="752" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="155" target="173">
        <position xmi:type="position:Position" xmi:id="156" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="40" endOffset="764" startColumn="5" endLine="40" endColumn="8" startOffset="761" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="157">
          <position xmi:type="position:Position" xmi:id="158" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="40" endOffset="769" startColumn="10" endLine="40" endColumn="13" startOffset="766" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="159" event="13">
            <position xmi:type="position:Position" xmi:id="160" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="40" endOffset="769" startColumn="10" endLine="40" endColumn="13" startOffset="766" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="161">
              <position xmi:type="position:Position" xmi:id="162" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="40" endOffset="769" startColumn="10" endLine="40" endColumn="13" startOffset="766" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="163" name="F3">
      <position xmi:type="position:Position" xmi:id="164" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="41" endOffset="792" startColumn="12" endLine="41" endColumn="13" startOffset="791" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="165" target="173">
        <position xmi:type="position:Position" xmi:id="166" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="42" endOffset="803" startColumn="5" endLine="42" endColumn="8" startOffset="800" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="167">
          <position xmi:type="position:Position" xmi:id="168" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="42" endOffset="808" startColumn="10" endLine="42" endColumn="13" startOffset="805" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="169" event="11">
            <position xmi:type="position:Position" xmi:id="170" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="42" endOffset="808" startColumn="10" endLine="42" endColumn="13" startOffset="805" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="171">
              <position xmi:type="position:Position" xmi:id="172" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="42" endOffset="808" startColumn="10" endLine="42" endColumn="13" startOffset="805" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="173" name="E">
      <position xmi:type="position:Position" xmi:id="174" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="43" endOffset="830" startColumn="12" endLine="43" endColumn="12" startOffset="830" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="175" target="131">
        <position xmi:type="position:Position" xmi:id="176" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="44" endOffset="841" startColumn="5" endLine="44" endColumn="8" startOffset="838" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="177">
          <position xmi:type="position:Position" xmi:id="178" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="44" endOffset="845" startColumn="10" endLine="44" endColumn="12" startOffset="843" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="179" event="19">
            <position xmi:type="position:Position" xmi:id="180" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="44" endOffset="845" startColumn="10" endLine="44" endColumn="12" startOffset="843" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="181">
              <position xmi:type="position:Position" xmi:id="182" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="44" endOffset="845" startColumn="10" endLine="44" endColumn="12" startOffset="843" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="183" name="fork1">
    <position xmi:type="position:Position" xmi:id="184" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="46" endOffset="875" startColumn="11" endLine="46" endColumn="15" startOffset="871" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="185" name="I">
      <position xmi:type="position:Position" xmi:id="186" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="47" endOffset="890" startColumn="12" endLine="47" endColumn="12" startOffset="890" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="187" value="true">
        <position xmi:type="position:Position" xmi:id="188" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="48" endOffset="904" startColumn="5" endLine="48" endColumn="11" startOffset="898" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="189">
          <position xmi:type="position:Position" xmi:id="190" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="48" endOffset="904" startColumn="5" endLine="48" endColumn="11" startOffset="898" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="191" target="207">
        <position xmi:type="position:Position" xmi:id="192" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="49" endOffset="915" startColumn="5" endLine="49" endColumn="8" startOffset="912" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="193">
          <position xmi:type="position:Position" xmi:id="194" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="49" endOffset="920" startColumn="10" endLine="49" endColumn="13" startOffset="917" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="195" event="3">
            <position xmi:type="position:Position" xmi:id="196" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="49" endOffset="920" startColumn="10" endLine="49" endColumn="13" startOffset="917" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="197">
              <position xmi:type="position:Position" xmi:id="198" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="49" endOffset="920" startColumn="10" endLine="49" endColumn="13" startOffset="917" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="199" target="217">
        <position xmi:type="position:Position" xmi:id="200" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="50" endOffset="939" startColumn="5" endLine="50" endColumn="8" startOffset="936" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="201">
          <position xmi:type="position:Position" xmi:id="202" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="50" endOffset="944" startColumn="10" endLine="50" endColumn="13" startOffset="941" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="203" event="7">
            <position xmi:type="position:Position" xmi:id="204" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="50" endOffset="944" startColumn="10" endLine="50" endColumn="13" startOffset="941" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="205">
              <position xmi:type="position:Position" xmi:id="206" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="50" endOffset="944" startColumn="10" endLine="50" endColumn="13" startOffset="941" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="207" name="P1">
      <position xmi:type="position:Position" xmi:id="208" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="51" endOffset="968" startColumn="12" endLine="51" endColumn="13" startOffset="967" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="209" target="185">
        <position xmi:type="position:Position" xmi:id="210" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="52" endOffset="979" startColumn="5" endLine="52" endColumn="8" startOffset="976" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="211">
          <position xmi:type="position:Position" xmi:id="212" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="52" endOffset="983" startColumn="10" endLine="52" endColumn="12" startOffset="981" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="213" event="15">
            <position xmi:type="position:Position" xmi:id="214" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="52" endOffset="983" startColumn="10" endLine="52" endColumn="12" startOffset="981" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="215">
              <position xmi:type="position:Position" xmi:id="216" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="52" endOffset="983" startColumn="10" endLine="52" endColumn="12" startOffset="981" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="217" name="P2">
      <position xmi:type="position:Position" xmi:id="218" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="53" endOffset="1006" startColumn="12" endLine="53" endColumn="13" startOffset="1005" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="219" target="185">
        <position xmi:type="position:Position" xmi:id="220" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="54" endOffset="1017" startColumn="5" endLine="54" endColumn="8" startOffset="1014" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="221">
          <position xmi:type="position:Position" xmi:id="222" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="54" endOffset="1021" startColumn="10" endLine="54" endColumn="12" startOffset="1019" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="223" event="17">
            <position xmi:type="position:Position" xmi:id="224" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="54" endOffset="1021" startColumn="10" endLine="54" endColumn="12" startOffset="1019" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="225">
              <position xmi:type="position:Position" xmi:id="226" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="54" endOffset="1021" startColumn="10" endLine="54" endColumn="12" startOffset="1019" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="227" name="fork2">
    <position xmi:type="position:Position" xmi:id="228" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="56" endOffset="1051" startColumn="11" endLine="56" endColumn="15" startOffset="1047" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="229" name="I">
      <position xmi:type="position:Position" xmi:id="230" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="57" endOffset="1066" startColumn="12" endLine="57" endColumn="12" startOffset="1066" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="231" value="true">
        <position xmi:type="position:Position" xmi:id="232" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="58" endOffset="1080" startColumn="5" endLine="58" endColumn="11" startOffset="1074" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="233">
          <position xmi:type="position:Position" xmi:id="234" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="58" endOffset="1080" startColumn="5" endLine="58" endColumn="11" startOffset="1074" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="235" target="261">
        <position xmi:type="position:Position" xmi:id="236" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="59" endOffset="1091" startColumn="5" endLine="59" endColumn="8" startOffset="1088" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="237">
          <position xmi:type="position:Position" xmi:id="238" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="59" endOffset="1096" startColumn="10" endLine="59" endColumn="13" startOffset="1093" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="239" event="11">
            <position xmi:type="position:Position" xmi:id="240" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="59" endOffset="1096" startColumn="10" endLine="59" endColumn="13" startOffset="1093" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="241">
              <position xmi:type="position:Position" xmi:id="242" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="59" endOffset="1096" startColumn="10" endLine="59" endColumn="13" startOffset="1093" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="243" target="251">
        <position xmi:type="position:Position" xmi:id="244" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="60" endOffset="1115" startColumn="5" endLine="60" endColumn="8" startOffset="1112" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="245">
          <position xmi:type="position:Position" xmi:id="246" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="60" endOffset="1120" startColumn="10" endLine="60" endColumn="13" startOffset="1117" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="247" event="9">
            <position xmi:type="position:Position" xmi:id="248" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="60" endOffset="1120" startColumn="10" endLine="60" endColumn="13" startOffset="1117" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="249">
              <position xmi:type="position:Position" xmi:id="250" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="60" endOffset="1120" startColumn="10" endLine="60" endColumn="13" startOffset="1117" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="251" name="P2">
      <position xmi:type="position:Position" xmi:id="252" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="61" endOffset="1144" startColumn="12" endLine="61" endColumn="13" startOffset="1143" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="253" target="229">
        <position xmi:type="position:Position" xmi:id="254" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="62" endOffset="1155" startColumn="5" endLine="62" endColumn="8" startOffset="1152" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="255">
          <position xmi:type="position:Position" xmi:id="256" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="62" endOffset="1159" startColumn="10" endLine="62" endColumn="12" startOffset="1157" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="257" event="17">
            <position xmi:type="position:Position" xmi:id="258" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="62" endOffset="1159" startColumn="10" endLine="62" endColumn="12" startOffset="1157" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="259">
              <position xmi:type="position:Position" xmi:id="260" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="62" endOffset="1159" startColumn="10" endLine="62" endColumn="12" startOffset="1157" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="261" name="P3">
      <position xmi:type="position:Position" xmi:id="262" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="63" endOffset="1182" startColumn="12" endLine="63" endColumn="13" startOffset="1181" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="263" target="229">
        <position xmi:type="position:Position" xmi:id="264" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="64" endOffset="1193" startColumn="5" endLine="64" endColumn="8" startOffset="1190" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="265">
          <position xmi:type="position:Position" xmi:id="266" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="64" endOffset="1197" startColumn="10" endLine="64" endColumn="12" startOffset="1195" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="267" event="19">
            <position xmi:type="position:Position" xmi:id="268" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="64" endOffset="1197" startColumn="10" endLine="64" endColumn="12" startOffset="1195" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="269">
              <position xmi:type="position:Position" xmi:id="270" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="64" endOffset="1197" startColumn="10" endLine="64" endColumn="12" startOffset="1195" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="271" name="fork3">
    <position xmi:type="position:Position" xmi:id="272" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="66" endOffset="1227" startColumn="11" endLine="66" endColumn="15" startOffset="1223" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="273" name="I">
      <position xmi:type="position:Position" xmi:id="274" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="67" endOffset="1242" startColumn="12" endLine="67" endColumn="12" startOffset="1242" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="275" value="true">
        <position xmi:type="position:Position" xmi:id="276" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="68" endOffset="1256" startColumn="5" endLine="68" endColumn="11" startOffset="1250" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="277">
          <position xmi:type="position:Position" xmi:id="278" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="68" endOffset="1256" startColumn="5" endLine="68" endColumn="11" startOffset="1250" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="279" target="305">
        <position xmi:type="position:Position" xmi:id="280" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="69" endOffset="1267" startColumn="5" endLine="69" endColumn="8" startOffset="1264" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="281">
          <position xmi:type="position:Position" xmi:id="282" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="69" endOffset="1272" startColumn="10" endLine="69" endColumn="13" startOffset="1269" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="283" event="13">
            <position xmi:type="position:Position" xmi:id="284" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="69" endOffset="1272" startColumn="10" endLine="69" endColumn="13" startOffset="1269" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="285">
              <position xmi:type="position:Position" xmi:id="286" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="69" endOffset="1272" startColumn="10" endLine="69" endColumn="13" startOffset="1269" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="287" target="295">
        <position xmi:type="position:Position" xmi:id="288" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="70" endOffset="1291" startColumn="5" endLine="70" endColumn="8" startOffset="1288" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="289">
          <position xmi:type="position:Position" xmi:id="290" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="70" endOffset="1296" startColumn="10" endLine="70" endColumn="13" startOffset="1293" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="291" event="5">
            <position xmi:type="position:Position" xmi:id="292" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="70" endOffset="1296" startColumn="10" endLine="70" endColumn="13" startOffset="1293" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="293">
              <position xmi:type="position:Position" xmi:id="294" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="70" endOffset="1296" startColumn="10" endLine="70" endColumn="13" startOffset="1293" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="295" name="P1">
      <position xmi:type="position:Position" xmi:id="296" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="71" endOffset="1320" startColumn="12" endLine="71" endColumn="13" startOffset="1319" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="297" target="273">
        <position xmi:type="position:Position" xmi:id="298" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="72" endOffset="1331" startColumn="5" endLine="72" endColumn="8" startOffset="1328" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="299">
          <position xmi:type="position:Position" xmi:id="300" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="72" endOffset="1335" startColumn="10" endLine="72" endColumn="12" startOffset="1333" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="301" event="15">
            <position xmi:type="position:Position" xmi:id="302" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="72" endOffset="1335" startColumn="10" endLine="72" endColumn="12" startOffset="1333" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="303">
              <position xmi:type="position:Position" xmi:id="304" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="72" endOffset="1335" startColumn="10" endLine="72" endColumn="12" startOffset="1333" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="305" name="P3">
      <position xmi:type="position:Position" xmi:id="306" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="73" endOffset="1358" startColumn="12" endLine="73" endColumn="13" startOffset="1357" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="307" target="273">
        <position xmi:type="position:Position" xmi:id="308" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="74" endOffset="1369" startColumn="5" endLine="74" endColumn="8" startOffset="1366" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="309">
          <position xmi:type="position:Position" xmi:id="310" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="74" endOffset="1373" startColumn="10" endLine="74" endColumn="12" startOffset="1371" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="311" event="19">
            <position xmi:type="position:Position" xmi:id="312" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="74" endOffset="1373" startColumn="10" endLine="74" endColumn="12" startOffset="1371" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="313">
              <position xmi:type="position:Position" xmi:id="314" source="File &quot;../data/tests\three_dining_philosopher_transformed.cif&quot;: " startLine="74" endOffset="1373" startColumn="10" endLine="74" endColumn="12" startOffset="1371" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\three_dining_philosopher_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
</cif:Specification>
`;
const eventMap = ['p1f', 'p1f1', 'p1f3', 'p2f', 'p2f1', 'p2f2', 'p3f', 'p3f2', 'p3f3'];
