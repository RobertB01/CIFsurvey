const xml_washing_machien = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
  <declarations xmi:type="declarations:Event" xmi:id="3" name="insertCoin" controllable="false">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="1" endOffset="24" startColumn="16" endLine="1" endColumn="25" startOffset="15" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="5" name="returnCoin" controllable="false">
    <position xmi:type="position:Position" xmi:id="6" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="2" endOffset="52" startColumn="16" endLine="2" endColumn="25" startOffset="43" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="7" name="select90" controllable="false">
    <position xmi:type="position:Position" xmi:id="8" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="3" endOffset="78" startColumn="16" endLine="3" endColumn="23" startOffset="71" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="9" name="select40" controllable="false">
    <position xmi:type="position:Position" xmi:id="10" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="4" endOffset="104" startColumn="16" endLine="4" endColumn="23" startOffset="97" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="11" name="refill" controllable="false">
    <position xmi:type="position:Position" xmi:id="12" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="5" endOffset="128" startColumn="16" endLine="5" endColumn="21" startOffset="123" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="13" name="openDoor" controllable="true">
    <position xmi:type="position:Position" xmi:id="14" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="6" endOffset="152" startColumn="14" endLine="6" endColumn="21" startOffset="145" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="15" name="dispense" controllable="true">
    <position xmi:type="position:Position" xmi:id="16" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="7" endOffset="176" startColumn="14" endLine="7" endColumn="21" startOffset="169" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
  </declarations>
  <components xmi:type="automata:Automaton" xmi:id="17" name="washer">
    <position xmi:type="position:Position" xmi:id="18" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="8" endOffset="195" startColumn="11" endLine="8" endColumn="16" startOffset="190" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="19" name="ready">
      <position xmi:type="position:Position" xmi:id="20" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="9" endOffset="214" startColumn="12" endLine="9" endColumn="16" startOffset="210" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="21" value="true">
        <position xmi:type="position:Position" xmi:id="22" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="10" endOffset="228" startColumn="5" endLine="10" endColumn="11" startOffset="222" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="23">
          <position xmi:type="position:Position" xmi:id="24" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="10" endOffset="228" startColumn="5" endLine="10" endColumn="11" startOffset="222" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="25" target="19">
        <position xmi:type="position:Position" xmi:id="26" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="12" endOffset="252" startColumn="5" endLine="12" endColumn="8" startOffset="249" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="27">
          <position xmi:type="position:Position" xmi:id="28" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="12" endOffset="261" startColumn="10" endLine="12" endColumn="17" startOffset="254" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="29" event="13">
            <position xmi:type="position:Position" xmi:id="30" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="12" endOffset="261" startColumn="10" endLine="12" endColumn="17" startOffset="254" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="31">
              <position xmi:type="position:Position" xmi:id="32" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="12" endOffset="261" startColumn="10" endLine="12" endColumn="17" startOffset="254" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="33" target="113">
        <position xmi:type="position:Position" xmi:id="34" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="283" startColumn="5" endLine="13" endColumn="8" startOffset="280" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="35">
          <position xmi:type="position:Position" xmi:id="36" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="292" startColumn="10" endLine="13" endColumn="17" startOffset="285" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="37" event="9">
            <position xmi:type="position:Position" xmi:id="38" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="292" startColumn="10" endLine="13" endColumn="17" startOffset="285" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="39">
              <position xmi:type="position:Position" xmi:id="40" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="292" startColumn="10" endLine="13" endColumn="17" startOffset="285" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="41" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="42" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="326" startColumn="49" endLine="13" endColumn="51" startOffset="324" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="43">
            <position xmi:type="position:Position" xmi:id="44" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="326" startColumn="49" endLine="13" endColumn="51" startOffset="324" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="45" operator="Equal">
            <position xmi:type="position:Position" xmi:id="46" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="320" startColumn="45" endLine="13" endColumn="45" startOffset="320" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="47">
              <position xmi:type="position:Position" xmi:id="48" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="320" startColumn="45" endLine="13" endColumn="45" startOffset="320" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="49" variable="169">
              <position xmi:type="position:Position" xmi:id="50" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="318" startColumn="24" endLine="13" endColumn="43" startOffset="299" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              <type xmi:type="types:IntType" xmi:id="51">
                <position xmi:type="position:Position" xmi:id="52" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="318" startColumn="24" endLine="13" endColumn="43" startOffset="299" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="53" value="2">
              <position xmi:type="position:Position" xmi:id="54" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="322" startColumn="47" endLine="13" endColumn="47" startOffset="322" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              <type xmi:type="types:IntType" xmi:id="55" lower="2" upper="2">
                <position xmi:type="position:Position" xmi:id="56" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="322" startColumn="47" endLine="13" endColumn="47" startOffset="322" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="57" location="153">
            <position xmi:type="position:Position" xmi:id="58" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="351" startColumn="53" endLine="13" endColumn="76" startOffset="328" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="59">
              <position xmi:type="position:Position" xmi:id="60" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="13" endOffset="351" startColumn="53" endLine="13" endColumn="76" startOffset="328" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="61" target="93">
        <position xmi:type="position:Position" xmi:id="62" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="376" startColumn="5" endLine="14" endColumn="8" startOffset="373" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="63">
          <position xmi:type="position:Position" xmi:id="64" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="385" startColumn="10" endLine="14" endColumn="17" startOffset="378" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="65" event="7">
            <position xmi:type="position:Position" xmi:id="66" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="385" startColumn="10" endLine="14" endColumn="17" startOffset="378" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="67">
              <position xmi:type="position:Position" xmi:id="68" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="385" startColumn="10" endLine="14" endColumn="17" startOffset="378" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="69" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="70" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="419" startColumn="49" endLine="14" endColumn="51" startOffset="417" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="71">
            <position xmi:type="position:Position" xmi:id="72" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="419" startColumn="49" endLine="14" endColumn="51" startOffset="417" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="73" operator="Equal">
            <position xmi:type="position:Position" xmi:id="74" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="413" startColumn="45" endLine="14" endColumn="45" startOffset="413" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="75">
              <position xmi:type="position:Position" xmi:id="76" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="413" startColumn="45" endLine="14" endColumn="45" startOffset="413" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="77" variable="169">
              <position xmi:type="position:Position" xmi:id="78" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="411" startColumn="24" endLine="14" endColumn="43" startOffset="392" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              <type xmi:type="types:IntType" xmi:id="79">
                <position xmi:type="position:Position" xmi:id="80" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="411" startColumn="24" endLine="14" endColumn="43" startOffset="392" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="81" value="3">
              <position xmi:type="position:Position" xmi:id="82" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="415" startColumn="47" endLine="14" endColumn="47" startOffset="415" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              <type xmi:type="types:IntType" xmi:id="83" lower="3" upper="3">
                <position xmi:type="position:Position" xmi:id="84" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="415" startColumn="47" endLine="14" endColumn="47" startOffset="415" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:LocationExpression" xmi:id="85" location="153">
            <position xmi:type="position:Position" xmi:id="86" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="444" startColumn="53" endLine="14" endColumn="76" startOffset="421" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="87">
              <position xmi:type="position:Position" xmi:id="88" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="14" endOffset="444" startColumn="53" endLine="14" endColumn="76" startOffset="421" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </right>
        </guards>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="89" value="true">
        <position xmi:type="position:Position" xmi:id="90" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="11" endOffset="241" startColumn="5" endLine="11" endColumn="10" startOffset="236" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="91">
          <position xmi:type="position:Position" xmi:id="92" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="11" endOffset="241" startColumn="5" endLine="11" endColumn="10" startOffset="236" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="93" name="washAt90">
      <position xmi:type="position:Position" xmi:id="94" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="15" endOffset="480" startColumn="12" endLine="15" endColumn="19" startOffset="473" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="95" target="103">
        <position xmi:type="position:Position" xmi:id="96" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="16" endOffset="491" startColumn="5" endLine="16" endColumn="8" startOffset="488" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="97">
          <position xmi:type="position:Position" xmi:id="98" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="16" endOffset="500" startColumn="10" endLine="16" endColumn="17" startOffset="493" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="99" event="15">
            <position xmi:type="position:Position" xmi:id="100" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="16" endOffset="500" startColumn="10" endLine="16" endColumn="17" startOffset="493" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="101">
              <position xmi:type="position:Position" xmi:id="102" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="16" endOffset="500" startColumn="10" endLine="16" endColumn="17" startOffset="493" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="103" name="washing90">
      <position xmi:type="position:Position" xmi:id="104" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="17" endOffset="538" startColumn="12" endLine="17" endColumn="20" startOffset="530" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="105" target="19">
        <position xmi:type="position:Position" xmi:id="106" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="18" endOffset="549" startColumn="5" endLine="18" endColumn="8" startOffset="546" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="107">
          <position xmi:type="position:Position" xmi:id="108" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="18" endOffset="558" startColumn="10" endLine="18" endColumn="17" startOffset="551" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="109" event="13">
            <position xmi:type="position:Position" xmi:id="110" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="18" endOffset="558" startColumn="10" endLine="18" endColumn="17" startOffset="551" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="111">
              <position xmi:type="position:Position" xmi:id="112" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="18" endOffset="558" startColumn="10" endLine="18" endColumn="17" startOffset="551" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="113" name="washAt40">
      <position xmi:type="position:Position" xmi:id="114" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="19" endOffset="591" startColumn="12" endLine="19" endColumn="19" startOffset="584" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="115" target="123">
        <position xmi:type="position:Position" xmi:id="116" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="20" endOffset="602" startColumn="5" endLine="20" endColumn="8" startOffset="599" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="117">
          <position xmi:type="position:Position" xmi:id="118" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="20" endOffset="611" startColumn="10" endLine="20" endColumn="17" startOffset="604" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="119" event="15">
            <position xmi:type="position:Position" xmi:id="120" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="20" endOffset="611" startColumn="10" endLine="20" endColumn="17" startOffset="604" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="121">
              <position xmi:type="position:Position" xmi:id="122" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="20" endOffset="611" startColumn="10" endLine="20" endColumn="17" startOffset="604" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="123" name="washing40">
      <position xmi:type="position:Position" xmi:id="124" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="21" endOffset="649" startColumn="12" endLine="21" endColumn="20" startOffset="641" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="125" target="19">
        <position xmi:type="position:Position" xmi:id="126" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="22" endOffset="660" startColumn="5" endLine="22" endColumn="8" startOffset="657" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="127">
          <position xmi:type="position:Position" xmi:id="128" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="22" endOffset="669" startColumn="10" endLine="22" endColumn="17" startOffset="662" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="129" event="13">
            <position xmi:type="position:Position" xmi:id="130" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="22" endOffset="669" startColumn="10" endLine="22" endColumn="17" startOffset="662" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="131">
              <position xmi:type="position:Position" xmi:id="132" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="22" endOffset="669" startColumn="10" endLine="22" endColumn="17" startOffset="662" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="133" name="detergent_dispenser">
    <position xmi:type="position:Position" xmi:id="134" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="24" endOffset="717" startColumn="11" endLine="24" endColumn="29" startOffset="699" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
    <locations xmi:type="automata:Location" xmi:id="135" name="isEmpty">
      <position xmi:type="position:Position" xmi:id="136" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="25" endOffset="738" startColumn="12" endLine="25" endColumn="18" startOffset="732" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="137" value="true">
        <position xmi:type="position:Position" xmi:id="138" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="26" endOffset="752" startColumn="5" endLine="26" endColumn="11" startOffset="746" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="139">
          <position xmi:type="position:Position" xmi:id="140" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="26" endOffset="752" startColumn="5" endLine="26" endColumn="11" startOffset="746" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="141" target="153">
        <position xmi:type="position:Position" xmi:id="142" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="28" endOffset="776" startColumn="5" endLine="28" endColumn="8" startOffset="773" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="143">
          <position xmi:type="position:Position" xmi:id="144" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="28" endOffset="783" startColumn="10" endLine="28" endColumn="15" startOffset="778" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="145" event="11">
            <position xmi:type="position:Position" xmi:id="146" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="28" endOffset="783" startColumn="10" endLine="28" endColumn="15" startOffset="778" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="147">
              <position xmi:type="position:Position" xmi:id="148" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="28" endOffset="783" startColumn="10" endLine="28" endColumn="15" startOffset="778" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="149" value="true">
        <position xmi:type="position:Position" xmi:id="150" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="27" endOffset="765" startColumn="5" endLine="27" endColumn="10" startOffset="760" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="151">
          <position xmi:type="position:Position" xmi:id="152" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="27" endOffset="765" startColumn="5" endLine="27" endColumn="10" startOffset="760" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        </type>
      </markeds>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="153" name="full">
      <position xmi:type="position:Position" xmi:id="154" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="29" endOffset="811" startColumn="12" endLine="29" endColumn="15" startOffset="808" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="155" target="135">
        <position xmi:type="position:Position" xmi:id="156" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="31" endOffset="835" startColumn="5" endLine="31" endColumn="8" startOffset="832" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="157">
          <position xmi:type="position:Position" xmi:id="158" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="31" endOffset="844" startColumn="10" endLine="31" endColumn="17" startOffset="837" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="159" event="15">
            <position xmi:type="position:Position" xmi:id="160" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="31" endOffset="844" startColumn="10" endLine="31" endColumn="17" startOffset="837" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="161">
              <position xmi:type="position:Position" xmi:id="162" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="31" endOffset="844" startColumn="10" endLine="31" endColumn="17" startOffset="837" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="163" value="true">
        <position xmi:type="position:Position" xmi:id="164" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="30" endOffset="824" startColumn="5" endLine="30" endColumn="10" startOffset="819" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="165">
          <position xmi:type="position:Position" xmi:id="166" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="30" endOffset="824" startColumn="5" endLine="30" endColumn="10" startOffset="819" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="167" name="coin_collector">
    <position xmi:type="position:Position" xmi:id="168" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="33" endOffset="889" startColumn="11" endLine="33" endColumn="24" startOffset="876" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="169" name="coins">
      <position xmi:type="position:Position" xmi:id="170" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="34" endOffset="908" startColumn="12" endLine="34" endColumn="16" startOffset="904" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
      <type xmi:type="types:IntType" xmi:id="171">
        <position xmi:type="position:Position" xmi:id="172" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="34" endOffset="902" startColumn="8" endLine="34" endColumn="10" startOffset="900" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="173">
        <position xmi:type="position:Position" xmi:id="174" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="34" endOffset="908" startColumn="12" endLine="34" endColumn="16" startOffset="904" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <values xmi:type="expressions:IntExpression" xmi:id="175">
          <position xmi:type="position:Position" xmi:id="176" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="34" endOffset="912" startColumn="20" endLine="34" endColumn="20" startOffset="912" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <type xmi:type="types:IntType" xmi:id="177" lower="0" upper="0">
            <position xmi:type="position:Position" xmi:id="178" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="34" endOffset="912" startColumn="20" endLine="34" endColumn="20" startOffset="912" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          </type>
        </values>
      </value>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="179">
      <position xmi:type="position:Position" xmi:id="180" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="35" endOffset="925" startColumn="3" endLine="35" endColumn="10" startOffset="918" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="181" value="true">
        <position xmi:type="position:Position" xmi:id="182" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="36" endOffset="939" startColumn="5" endLine="36" endColumn="11" startOffset="933" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="183">
          <position xmi:type="position:Position" xmi:id="184" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="36" endOffset="939" startColumn="5" endLine="36" endColumn="11" startOffset="933" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="185">
        <position xmi:type="position:Position" xmi:id="186" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="963" startColumn="5" endLine="38" endColumn="8" startOffset="960" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="187">
          <position xmi:type="position:Position" xmi:id="188" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="972" startColumn="10" endLine="38" endColumn="17" startOffset="965" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="189" event="9">
            <position xmi:type="position:Position" xmi:id="190" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="972" startColumn="10" endLine="38" endColumn="17" startOffset="965" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="191">
              <position xmi:type="position:Position" xmi:id="192" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="972" startColumn="10" endLine="38" endColumn="17" startOffset="965" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="193" operator="GreaterThan">
          <position xmi:type="position:Position" xmi:id="194" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="985" startColumn="30" endLine="38" endColumn="30" startOffset="985" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="195">
            <position xmi:type="position:Position" xmi:id="196" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="985" startColumn="30" endLine="38" endColumn="30" startOffset="985" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="197" variable="169">
            <position xmi:type="position:Position" xmi:id="198" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="983" startColumn="24" endLine="38" endColumn="28" startOffset="979" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="199">
              <position xmi:type="position:Position" xmi:id="200" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="983" startColumn="24" endLine="38" endColumn="28" startOffset="979" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="201">
            <position xmi:type="position:Position" xmi:id="202" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="987" startColumn="32" endLine="38" endColumn="32" startOffset="987" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="203" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="204" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="987" startColumn="32" endLine="38" endColumn="32" startOffset="987" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="205">
          <position xmi:type="position:Position" xmi:id="206" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="999" startColumn="43" endLine="38" endColumn="44" startOffset="998" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="207" variable="169">
            <position xmi:type="position:Position" xmi:id="208" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="996" startColumn="37" endLine="38" endColumn="41" startOffset="992" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="209">
              <position xmi:type="position:Position" xmi:id="210" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="996" startColumn="37" endLine="38" endColumn="41" startOffset="992" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="211">
            <position xmi:type="position:Position" xmi:id="212" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="1001" startColumn="46" endLine="38" endColumn="46" startOffset="1001" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="213" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="214" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="38" endOffset="1001" startColumn="46" endLine="38" endColumn="46" startOffset="1001" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="215">
        <position xmi:type="position:Position" xmi:id="216" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1012" startColumn="5" endLine="39" endColumn="8" startOffset="1009" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="217">
          <position xmi:type="position:Position" xmi:id="218" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1021" startColumn="10" endLine="39" endColumn="17" startOffset="1014" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="219" event="7">
            <position xmi:type="position:Position" xmi:id="220" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1021" startColumn="10" endLine="39" endColumn="17" startOffset="1014" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="221">
              <position xmi:type="position:Position" xmi:id="222" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1021" startColumn="10" endLine="39" endColumn="17" startOffset="1014" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="223" operator="GreaterThan">
          <position xmi:type="position:Position" xmi:id="224" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1034" startColumn="30" endLine="39" endColumn="30" startOffset="1034" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="225">
            <position xmi:type="position:Position" xmi:id="226" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1034" startColumn="30" endLine="39" endColumn="30" startOffset="1034" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="227" variable="169">
            <position xmi:type="position:Position" xmi:id="228" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1032" startColumn="24" endLine="39" endColumn="28" startOffset="1028" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="229">
              <position xmi:type="position:Position" xmi:id="230" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1032" startColumn="24" endLine="39" endColumn="28" startOffset="1028" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="231" value="3">
            <position xmi:type="position:Position" xmi:id="232" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1036" startColumn="32" endLine="39" endColumn="32" startOffset="1036" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="233" lower="3" upper="3">
              <position xmi:type="position:Position" xmi:id="234" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1036" startColumn="32" endLine="39" endColumn="32" startOffset="1036" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="235">
          <position xmi:type="position:Position" xmi:id="236" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1048" startColumn="43" endLine="39" endColumn="44" startOffset="1047" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="237" variable="169">
            <position xmi:type="position:Position" xmi:id="238" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1045" startColumn="37" endLine="39" endColumn="41" startOffset="1041" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="239">
              <position xmi:type="position:Position" xmi:id="240" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1045" startColumn="37" endLine="39" endColumn="41" startOffset="1041" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="241">
            <position xmi:type="position:Position" xmi:id="242" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1050" startColumn="46" endLine="39" endColumn="46" startOffset="1050" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="243" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="244" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="39" endOffset="1050" startColumn="46" endLine="39" endColumn="46" startOffset="1050" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="245">
        <position xmi:type="position:Position" xmi:id="246" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1061" startColumn="5" endLine="40" endColumn="8" startOffset="1058" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="247">
          <position xmi:type="position:Position" xmi:id="248" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1072" startColumn="10" endLine="40" endColumn="19" startOffset="1063" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="249" event="3">
            <position xmi:type="position:Position" xmi:id="250" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1072" startColumn="10" endLine="40" endColumn="19" startOffset="1063" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="251">
              <position xmi:type="position:Position" xmi:id="252" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1072" startColumn="10" endLine="40" endColumn="19" startOffset="1063" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="253">
          <position xmi:type="position:Position" xmi:id="254" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1084" startColumn="30" endLine="40" endColumn="31" startOffset="1083" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="255" variable="169">
            <position xmi:type="position:Position" xmi:id="256" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1081" startColumn="24" endLine="40" endColumn="28" startOffset="1077" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="257">
              <position xmi:type="position:Position" xmi:id="258" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1081" startColumn="24" endLine="40" endColumn="28" startOffset="1077" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:BinaryExpression" xmi:id="259" operator="Addition">
            <position xmi:type="position:Position" xmi:id="260" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1092" startColumn="39" endLine="40" endColumn="39" startOffset="1092" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="261">
              <position xmi:type="position:Position" xmi:id="262" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1092" startColumn="39" endLine="40" endColumn="39" startOffset="1092" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="263" variable="169">
              <position xmi:type="position:Position" xmi:id="264" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1090" startColumn="33" endLine="40" endColumn="37" startOffset="1086" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              <type xmi:type="types:IntType" xmi:id="265">
                <position xmi:type="position:Position" xmi:id="266" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1090" startColumn="33" endLine="40" endColumn="37" startOffset="1086" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="267" value="1">
              <position xmi:type="position:Position" xmi:id="268" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1094" startColumn="41" endLine="40" endColumn="41" startOffset="1094" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              <type xmi:type="types:IntType" xmi:id="269" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="270" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="40" endOffset="1094" startColumn="41" endLine="40" endColumn="41" startOffset="1094" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              </type>
            </right>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="271">
        <position xmi:type="position:Position" xmi:id="272" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1105" startColumn="5" endLine="41" endColumn="8" startOffset="1102" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="273">
          <position xmi:type="position:Position" xmi:id="274" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1116" startColumn="10" endLine="41" endColumn="19" startOffset="1107" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="275" event="5">
            <position xmi:type="position:Position" xmi:id="276" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1116" startColumn="10" endLine="41" endColumn="19" startOffset="1107" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:BoolType" xmi:id="277">
              <position xmi:type="position:Position" xmi:id="278" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1116" startColumn="10" endLine="41" endColumn="19" startOffset="1107" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="279" operator="GreaterThan">
          <position xmi:type="position:Position" xmi:id="280" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1129" startColumn="32" endLine="41" endColumn="32" startOffset="1129" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <type xmi:type="types:BoolType" xmi:id="281">
            <position xmi:type="position:Position" xmi:id="282" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1129" startColumn="32" endLine="41" endColumn="32" startOffset="1129" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="283" variable="169">
            <position xmi:type="position:Position" xmi:id="284" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1127" startColumn="26" endLine="41" endColumn="30" startOffset="1123" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="285">
              <position xmi:type="position:Position" xmi:id="286" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1127" startColumn="26" endLine="41" endColumn="30" startOffset="1123" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="287">
            <position xmi:type="position:Position" xmi:id="288" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1131" startColumn="34" endLine="41" endColumn="34" startOffset="1131" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="289" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="290" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1131" startColumn="34" endLine="41" endColumn="34" startOffset="1131" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="291">
          <position xmi:type="position:Position" xmi:id="292" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1143" startColumn="45" endLine="41" endColumn="46" startOffset="1142" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="293" variable="169">
            <position xmi:type="position:Position" xmi:id="294" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1140" startColumn="39" endLine="41" endColumn="43" startOffset="1136" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="295">
              <position xmi:type="position:Position" xmi:id="296" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1140" startColumn="39" endLine="41" endColumn="43" startOffset="1136" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:BinaryExpression" xmi:id="297" operator="Subtraction">
            <position xmi:type="position:Position" xmi:id="298" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1151" startColumn="54" endLine="41" endColumn="54" startOffset="1151" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            <type xmi:type="types:IntType" xmi:id="299">
              <position xmi:type="position:Position" xmi:id="300" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1151" startColumn="54" endLine="41" endColumn="54" startOffset="1151" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="301" variable="169">
              <position xmi:type="position:Position" xmi:id="302" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1149" startColumn="48" endLine="41" endColumn="52" startOffset="1145" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              <type xmi:type="types:IntType" xmi:id="303">
                <position xmi:type="position:Position" xmi:id="304" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1149" startColumn="48" endLine="41" endColumn="52" startOffset="1145" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="305" value="1">
              <position xmi:type="position:Position" xmi:id="306" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1153" startColumn="56" endLine="41" endColumn="56" startOffset="1153" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              <type xmi:type="types:IntType" xmi:id="307" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="308" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="41" endOffset="1153" startColumn="56" endLine="41" endColumn="56" startOffset="1153" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
              </type>
            </right>
          </value>
        </updates>
      </edges>
      <markeds xmi:type="expressions:BoolExpression" xmi:id="309" value="true">
        <position xmi:type="position:Position" xmi:id="310" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="37" endOffset="952" startColumn="5" endLine="37" endColumn="10" startOffset="947" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        <type xmi:type="types:BoolType" xmi:id="311">
          <position xmi:type="position:Position" xmi:id="312" source="File &quot;../data/tests\washing_machien_transformed.cif&quot;: " startLine="37" endOffset="952" startColumn="5" endLine="37" endColumn="10" startOffset="947" location="C:\Users\rober\Documents\studie\afstuderen\development\simulator_via_code_generator\data\tests\washing_machien_transformed.cif"/>
        </type>
      </markeds>
    </locations>
  </components>
</cif:Specification>
`;
const eventMap = ['insertCoin', 'refill', 'returnCoin', 'select40', 'select90', 'dispense', 'openDoor'];
