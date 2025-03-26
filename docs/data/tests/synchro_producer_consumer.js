const xml_synchro_producer_consumer = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
  <components xmi:type="automata:Automaton" xmi:id="3" name="producer">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="1" endOffset="17" startColumn="11" endLine="1" endColumn="18" startOffset="10" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="5" name="produce" controllable="true">
      <position xmi:type="position:Position" xmi:id="6" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="2" endOffset="48" startColumn="22" endLine="2" endColumn="28" startOffset="42" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="7" name="provide" controllable="true">
      <position xmi:type="position:Position" xmi:id="8" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="2" endOffset="57" startColumn="31" endLine="2" endColumn="37" startOffset="51" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="9" name="producing">
      <position xmi:type="position:Position" xmi:id="10" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="4" endOffset="82" startColumn="12" endLine="4" endColumn="20" startOffset="74" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="11" value="true">
        <position xmi:type="position:Position" xmi:id="12" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="5" endOffset="96" startColumn="5" endLine="5" endColumn="11" startOffset="90" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
        <type xmi:type="types:BoolType" xmi:id="13">
          <position xmi:type="position:Position" xmi:id="14" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="5" endOffset="96" startColumn="5" endLine="5" endColumn="11" startOffset="90" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="15" target="23">
        <position xmi:type="position:Position" xmi:id="16" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="6" endOffset="107" startColumn="5" endLine="6" endColumn="8" startOffset="104" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="17">
          <position xmi:type="position:Position" xmi:id="18" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="6" endOffset="115" startColumn="10" endLine="6" endColumn="16" startOffset="109" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="19" event="5">
            <position xmi:type="position:Position" xmi:id="20" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="6" endOffset="115" startColumn="10" endLine="6" endColumn="16" startOffset="109" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
            <type xmi:type="types:BoolType" xmi:id="21">
              <position xmi:type="position:Position" xmi:id="22" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="6" endOffset="115" startColumn="10" endLine="6" endColumn="16" startOffset="109" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="23" name="idle">
      <position xmi:type="position:Position" xmi:id="24" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="8" endOffset="145" startColumn="12" endLine="8" endColumn="15" startOffset="142" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="25" target="9">
        <position xmi:type="position:Position" xmi:id="26" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="9" endOffset="156" startColumn="5" endLine="9" endColumn="8" startOffset="153" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="27">
          <position xmi:type="position:Position" xmi:id="28" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="9" endOffset="164" startColumn="10" endLine="9" endColumn="16" startOffset="158" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="29" event="7">
            <position xmi:type="position:Position" xmi:id="30" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="9" endOffset="164" startColumn="10" endLine="9" endColumn="16" startOffset="158" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
            <type xmi:type="types:BoolType" xmi:id="31">
              <position xmi:type="position:Position" xmi:id="32" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="9" endOffset="164" startColumn="10" endLine="9" endColumn="16" startOffset="158" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="33" name="consumer">
    <position xmi:type="position:Position" xmi:id="34" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="12" endOffset="207" startColumn="11" endLine="12" endColumn="18" startOffset="200" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="35" name="consume" controllable="true">
      <position xmi:type="position:Position" xmi:id="36" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="13" endOffset="238" startColumn="22" endLine="13" endColumn="28" startOffset="232" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="37" name="idle">
      <position xmi:type="position:Position" xmi:id="38" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="15" endOffset="258" startColumn="12" endLine="15" endColumn="15" startOffset="255" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="39" value="true">
        <position xmi:type="position:Position" xmi:id="40" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="16" endOffset="272" startColumn="5" endLine="16" endColumn="11" startOffset="266" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
        <type xmi:type="types:BoolType" xmi:id="41">
          <position xmi:type="position:Position" xmi:id="42" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="16" endOffset="272" startColumn="5" endLine="16" endColumn="11" startOffset="266" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="43" target="51">
        <position xmi:type="position:Position" xmi:id="44" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="17" endOffset="283" startColumn="5" endLine="17" endColumn="8" startOffset="280" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="45">
          <position xmi:type="position:Position" xmi:id="46" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="17" endOffset="300" startColumn="10" endLine="17" endColumn="25" startOffset="285" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="47" event="7">
            <position xmi:type="position:Position" xmi:id="48" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="17" endOffset="300" startColumn="10" endLine="17" endColumn="25" startOffset="285" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
            <type xmi:type="types:BoolType" xmi:id="49">
              <position xmi:type="position:Position" xmi:id="50" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="17" endOffset="300" startColumn="10" endLine="17" endColumn="25" startOffset="285" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="51" name="consuming">
      <position xmi:type="position:Position" xmi:id="52" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="19" endOffset="340" startColumn="12" endLine="19" endColumn="20" startOffset="332" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="53" target="37">
        <position xmi:type="position:Position" xmi:id="54" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="20" endOffset="351" startColumn="5" endLine="20" endColumn="8" startOffset="348" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="55">
          <position xmi:type="position:Position" xmi:id="56" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="20" endOffset="359" startColumn="10" endLine="20" endColumn="16" startOffset="353" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="57" event="35">
            <position xmi:type="position:Position" xmi:id="58" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="20" endOffset="359" startColumn="10" endLine="20" endColumn="16" startOffset="353" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
            <type xmi:type="types:BoolType" xmi:id="59">
              <position xmi:type="position:Position" xmi:id="60" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif&quot;: " startLine="20" endOffset="359" startColumn="10" endLine="20" endColumn="16" startOffset="353" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\synchro_producer_consumer.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
</cif:Specification>
`;
const eventMap = ['consumer.consume', 'producer.produce', 'producer.provide'];
