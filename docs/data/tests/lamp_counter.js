const xml_lamp_counter = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
  <declarations xmi:type="declarations:Event" xmi:id="3" name="turn_on" controllable="false">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="12" endOffset="198" startColumn="22" endLine="12" endColumn="28" startOffset="192" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="5" name="turn_off" controllable="false">
    <position xmi:type="position:Position" xmi:id="6" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="12" endOffset="208" startColumn="31" endLine="12" endColumn="38" startOffset="201" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
  </declarations>
  <components xmi:type="automata:Automaton" xmi:id="7" name="lamp">
    <position xmi:type="position:Position" xmi:id="8" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="1" endOffset="13" startColumn="11" endLine="1" endColumn="14" startOffset="10" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="9" name="count">
      <position xmi:type="position:Position" xmi:id="10" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="2" endOffset="32" startColumn="12" endLine="2" endColumn="16" startOffset="28" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
      <type xmi:type="types:IntType" xmi:id="11">
        <position xmi:type="position:Position" xmi:id="12" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="2" endOffset="26" startColumn="8" endLine="2" endColumn="10" startOffset="24" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
      </type>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="13" name="Off">
      <position xmi:type="position:Position" xmi:id="14" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="4" endOffset="51" startColumn="12" endLine="4" endColumn="14" startOffset="49" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="15" value="true">
        <position xmi:type="position:Position" xmi:id="16" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="5" endOffset="65" startColumn="5" endLine="5" endColumn="11" startOffset="59" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
        <type xmi:type="types:BoolType" xmi:id="17">
          <position xmi:type="position:Position" xmi:id="18" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="5" endOffset="65" startColumn="5" endLine="5" endColumn="11" startOffset="59" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="19" target="45">
        <position xmi:type="position:Position" xmi:id="20" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="76" startColumn="5" endLine="6" endColumn="8" startOffset="73" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="21">
          <position xmi:type="position:Position" xmi:id="22" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="84" startColumn="10" endLine="6" endColumn="16" startOffset="78" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="23" event="3">
            <position xmi:type="position:Position" xmi:id="24" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="84" startColumn="10" endLine="6" endColumn="16" startOffset="78" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
            <type xmi:type="types:BoolType" xmi:id="25">
              <position xmi:type="position:Position" xmi:id="26" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="84" startColumn="10" endLine="6" endColumn="16" startOffset="78" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
            </type>
          </event>
        </events>
        <updates xmi:type="automata:Assignment" xmi:id="27">
          <position xmi:type="position:Position" xmi:id="28" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="97" startColumn="28" endLine="6" endColumn="29" startOffset="96" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="29" variable="9">
            <position xmi:type="position:Position" xmi:id="30" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="94" startColumn="22" endLine="6" endColumn="26" startOffset="90" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
            <type xmi:type="types:IntType" xmi:id="31">
              <position xmi:type="position:Position" xmi:id="32" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="94" startColumn="22" endLine="6" endColumn="26" startOffset="90" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:BinaryExpression" xmi:id="33" operator="Addition">
            <position xmi:type="position:Position" xmi:id="34" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="104" startColumn="36" endLine="6" endColumn="36" startOffset="104" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
            <type xmi:type="types:IntType" xmi:id="35">
              <position xmi:type="position:Position" xmi:id="36" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="104" startColumn="36" endLine="6" endColumn="36" startOffset="104" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="37" variable="9">
              <position xmi:type="position:Position" xmi:id="38" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="103" startColumn="31" endLine="6" endColumn="35" startOffset="99" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
              <type xmi:type="types:IntType" xmi:id="39">
                <position xmi:type="position:Position" xmi:id="40" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="103" startColumn="31" endLine="6" endColumn="35" startOffset="99" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="41" value="1">
              <position xmi:type="position:Position" xmi:id="42" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="105" startColumn="37" endLine="6" endColumn="37" startOffset="105" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
              <type xmi:type="types:IntType" xmi:id="43" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="44" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="6" endOffset="105" startColumn="37" endLine="6" endColumn="37" startOffset="105" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
              </type>
            </right>
          </value>
        </updates>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="45" name="On">
      <position xmi:type="position:Position" xmi:id="46" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="8" endOffset="131" startColumn="12" endLine="8" endColumn="13" startOffset="130" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="47" target="13">
        <position xmi:type="position:Position" xmi:id="48" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="9" endOffset="142" startColumn="5" endLine="9" endColumn="8" startOffset="139" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="49">
          <position xmi:type="position:Position" xmi:id="50" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="9" endOffset="151" startColumn="10" endLine="9" endColumn="17" startOffset="144" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="51" event="5">
            <position xmi:type="position:Position" xmi:id="52" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="9" endOffset="151" startColumn="10" endLine="9" endColumn="17" startOffset="144" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
            <type xmi:type="types:BoolType" xmi:id="53">
              <position xmi:type="position:Position" xmi:id="54" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif&quot;: " startLine="9" endOffset="151" startColumn="10" endLine="9" endColumn="17" startOffset="144" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\lamp_counter\lamp_counter.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
</cif:Specification>
`;
const eventMap = ['turn_off', 'turn_on'];
