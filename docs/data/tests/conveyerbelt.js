const eventMap = [
    "conveyor1.exit1",
    "conveyor2.exit2",
    "move"
];


const xml_conveyerbelt = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;spec.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
  <declarations xmi:type="declarations:Event" xmi:id="3" name="move" controllable="false">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;spec.cif&quot;: " startLine="1" endOffset="24" startColumn="22" endLine="1" endColumn="25" startOffset="21" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
  </declarations>
  <components xmi:type="automata:Automaton" xmi:id="5" name="conveyor1">
    <position xmi:type="position:Position" xmi:id="6" source="File &quot;spec.cif&quot;: " startLine="3" endOffset="48" startColumn="11" endLine="3" endColumn="19" startOffset="40" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="7" name="exit1" controllable="false">
      <position xmi:type="position:Position" xmi:id="8" source="File &quot;spec.cif&quot;: " startLine="5" endOffset="96" startColumn="24" endLine="5" endColumn="28" startOffset="92" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
    </declarations>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="9" name="pos">
      <position xmi:type="position:Position" xmi:id="10" source="File &quot;spec.cif&quot;: " startLine="6" endOffset="113" startColumn="12" endLine="6" endColumn="14" startOffset="111" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
      <type xmi:type="types:IntType" xmi:id="11">
        <position xmi:type="position:Position" xmi:id="12" source="File &quot;spec.cif&quot;: " startLine="6" endOffset="109" startColumn="8" endLine="6" endColumn="10" startOffset="107" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="13">
        <position xmi:type="position:Position" xmi:id="14" source="File &quot;spec.cif&quot;: " startLine="6" endOffset="113" startColumn="12" endLine="6" endColumn="14" startOffset="111" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        <values xmi:type="expressions:IntExpression" xmi:id="15">
          <position xmi:type="position:Position" xmi:id="16" source="File &quot;spec.cif&quot;: " startLine="6" endOffset="117" startColumn="18" endLine="6" endColumn="18" startOffset="117" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <type xmi:type="types:IntType" xmi:id="17" lower="0" upper="0">
            <position xmi:type="position:Position" xmi:id="18" source="File &quot;spec.cif&quot;: " startLine="6" endOffset="117" startColumn="18" endLine="6" endColumn="18" startOffset="117" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          </type>
        </values>
      </value>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="19">
      <position xmi:type="position:Position" xmi:id="20" source="File &quot;spec.cif&quot;: " startLine="8" endOffset="132" startColumn="3" endLine="8" endColumn="10" startOffset="125" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="21" value="true">
        <position xmi:type="position:Position" xmi:id="22" source="File &quot;spec.cif&quot;: " startLine="9" endOffset="146" startColumn="5" endLine="9" endColumn="11" startOffset="140" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        <type xmi:type="types:BoolType" xmi:id="23">
          <position xmi:type="position:Position" xmi:id="24" source="File &quot;spec.cif&quot;: " startLine="9" endOffset="146" startColumn="5" endLine="9" endColumn="11" startOffset="140" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="25">
        <position xmi:type="position:Position" xmi:id="26" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="157" startColumn="5" endLine="10" endColumn="8" startOffset="154" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="27">
          <position xmi:type="position:Position" xmi:id="28" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="162" startColumn="10" endLine="10" endColumn="13" startOffset="159" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="29" event="3">
            <position xmi:type="position:Position" xmi:id="30" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="162" startColumn="10" endLine="10" endColumn="13" startOffset="159" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:BoolType" xmi:id="31">
              <position xmi:type="position:Position" xmi:id="32" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="162" startColumn="10" endLine="10" endColumn="13" startOffset="159" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="33" operator="LessThan">
          <position xmi:type="position:Position" xmi:id="34" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="174" startColumn="25" endLine="10" endColumn="25" startOffset="174" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <type xmi:type="types:BoolType" xmi:id="35">
            <position xmi:type="position:Position" xmi:id="36" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="174" startColumn="25" endLine="10" endColumn="25" startOffset="174" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="37" variable="9">
            <position xmi:type="position:Position" xmi:id="38" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="172" startColumn="21" endLine="10" endColumn="23" startOffset="170" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="39">
              <position xmi:type="position:Position" xmi:id="40" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="172" startColumn="21" endLine="10" endColumn="23" startOffset="170" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="41" value="4">
            <position xmi:type="position:Position" xmi:id="42" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="176" startColumn="27" endLine="10" endColumn="27" startOffset="176" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="43" lower="4" upper="4">
              <position xmi:type="position:Position" xmi:id="44" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="176" startColumn="27" endLine="10" endColumn="27" startOffset="176" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="45">
          <position xmi:type="position:Position" xmi:id="46" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="186" startColumn="36" endLine="10" endColumn="37" startOffset="185" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="47" variable="9">
            <position xmi:type="position:Position" xmi:id="48" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="183" startColumn="32" endLine="10" endColumn="34" startOffset="181" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="49">
              <position xmi:type="position:Position" xmi:id="50" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="183" startColumn="32" endLine="10" endColumn="34" startOffset="181" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:BinaryExpression" xmi:id="51" operator="Addition">
            <position xmi:type="position:Position" xmi:id="52" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="192" startColumn="43" endLine="10" endColumn="43" startOffset="192" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="53">
              <position xmi:type="position:Position" xmi:id="54" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="192" startColumn="43" endLine="10" endColumn="43" startOffset="192" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="55" variable="9">
              <position xmi:type="position:Position" xmi:id="56" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="190" startColumn="39" endLine="10" endColumn="41" startOffset="188" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              <type xmi:type="types:IntType" xmi:id="57">
                <position xmi:type="position:Position" xmi:id="58" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="190" startColumn="39" endLine="10" endColumn="41" startOffset="188" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="59" value="1">
              <position xmi:type="position:Position" xmi:id="60" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="194" startColumn="45" endLine="10" endColumn="45" startOffset="194" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              <type xmi:type="types:IntType" xmi:id="61" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="62" source="File &quot;spec.cif&quot;: " startLine="10" endOffset="194" startColumn="45" endLine="10" endColumn="45" startOffset="194" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              </type>
            </right>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="63">
        <position xmi:type="position:Position" xmi:id="64" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="205" startColumn="5" endLine="11" endColumn="8" startOffset="202" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="65">
          <position xmi:type="position:Position" xmi:id="66" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="211" startColumn="10" endLine="11" endColumn="14" startOffset="207" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="67" event="7">
            <position xmi:type="position:Position" xmi:id="68" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="211" startColumn="10" endLine="11" endColumn="14" startOffset="207" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:BoolType" xmi:id="69">
              <position xmi:type="position:Position" xmi:id="70" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="211" startColumn="10" endLine="11" endColumn="14" startOffset="207" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="71" operator="Equal">
          <position xmi:type="position:Position" xmi:id="72" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="222" startColumn="25" endLine="11" endColumn="25" startOffset="222" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <type xmi:type="types:BoolType" xmi:id="73">
            <position xmi:type="position:Position" xmi:id="74" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="222" startColumn="25" endLine="11" endColumn="25" startOffset="222" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="75" variable="9">
            <position xmi:type="position:Position" xmi:id="76" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="220" startColumn="21" endLine="11" endColumn="23" startOffset="218" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="77">
              <position xmi:type="position:Position" xmi:id="78" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="220" startColumn="21" endLine="11" endColumn="23" startOffset="218" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="79" value="4">
            <position xmi:type="position:Position" xmi:id="80" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="224" startColumn="27" endLine="11" endColumn="27" startOffset="224" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="81" lower="4" upper="4">
              <position xmi:type="position:Position" xmi:id="82" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="224" startColumn="27" endLine="11" endColumn="27" startOffset="224" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="83">
          <position xmi:type="position:Position" xmi:id="84" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="234" startColumn="36" endLine="11" endColumn="37" startOffset="233" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="85" variable="9">
            <position xmi:type="position:Position" xmi:id="86" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="231" startColumn="32" endLine="11" endColumn="34" startOffset="229" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="87">
              <position xmi:type="position:Position" xmi:id="88" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="231" startColumn="32" endLine="11" endColumn="34" startOffset="229" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:IntExpression" xmi:id="89">
            <position xmi:type="position:Position" xmi:id="90" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="236" startColumn="39" endLine="11" endColumn="39" startOffset="236" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="91" lower="0" upper="0">
              <position xmi:type="position:Position" xmi:id="92" source="File &quot;spec.cif&quot;: " startLine="11" endOffset="236" startColumn="39" endLine="11" endColumn="39" startOffset="236" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </value>
        </updates>
      </edges>
    </locations>
    <monitors xmi:type="automata:Monitors" xmi:id="93">
      <position xmi:type="position:Position" xmi:id="94" source="File &quot;spec.cif&quot;: " startLine="4" endOffset="60" startColumn="3" endLine="4" endColumn="9" startOffset="54" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
      <events xmi:type="expressions:EventExpression" xmi:id="95" event="3">
        <position xmi:type="position:Position" xmi:id="96" source="File &quot;spec.cif&quot;: " startLine="4" endOffset="65" startColumn="11" endLine="4" endColumn="14" startOffset="62" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        <type xmi:type="types:BoolType" xmi:id="97">
          <position xmi:type="position:Position" xmi:id="98" source="File &quot;spec.cif&quot;: " startLine="4" endOffset="65" startColumn="11" endLine="4" endColumn="14" startOffset="62" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        </type>
      </events>
    </monitors>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="99" name="conveyor2">
    <position xmi:type="position:Position" xmi:id="100" source="File &quot;spec.cif&quot;: " startLine="14" endOffset="265" startColumn="11" endLine="14" endColumn="19" startOffset="257" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="101" name="exit2" controllable="false">
      <position xmi:type="position:Position" xmi:id="102" source="File &quot;spec.cif&quot;: " startLine="16" endOffset="313" startColumn="24" endLine="16" endColumn="28" startOffset="309" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
    </declarations>
    <declarations xmi:type="declarations:DiscVariable" xmi:id="103" name="pos">
      <position xmi:type="position:Position" xmi:id="104" source="File &quot;spec.cif&quot;: " startLine="17" endOffset="330" startColumn="12" endLine="17" endColumn="14" startOffset="328" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
      <type xmi:type="types:IntType" xmi:id="105">
        <position xmi:type="position:Position" xmi:id="106" source="File &quot;spec.cif&quot;: " startLine="17" endOffset="326" startColumn="8" endLine="17" endColumn="10" startOffset="324" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
      </type>
      <value xmi:type="declarations:VariableValue" xmi:id="107">
        <position xmi:type="position:Position" xmi:id="108" source="File &quot;spec.cif&quot;: " startLine="17" endOffset="330" startColumn="12" endLine="17" endColumn="14" startOffset="328" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        <values xmi:type="expressions:UnaryExpression" xmi:id="109" operator="Negate">
          <position xmi:type="position:Position" xmi:id="110" source="File &quot;spec.cif&quot;: " startLine="17" endOffset="334" startColumn="18" endLine="17" endColumn="18" startOffset="334" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <type xmi:type="types:IntType" xmi:id="111" lower="-1" upper="-1">
            <position xmi:type="position:Position" xmi:id="112" source="File &quot;spec.cif&quot;: " startLine="17" endOffset="334" startColumn="18" endLine="17" endColumn="18" startOffset="334" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          </type>
          <child xmi:type="expressions:IntExpression" xmi:id="113" value="1">
            <position xmi:type="position:Position" xmi:id="114" source="File &quot;spec.cif&quot;: " startLine="17" endOffset="335" startColumn="19" endLine="17" endColumn="19" startOffset="335" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="115" lower="1" upper="1">
              <position xmi:type="position:Position" xmi:id="116" source="File &quot;spec.cif&quot;: " startLine="17" endOffset="335" startColumn="19" endLine="17" endColumn="19" startOffset="335" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </child>
        </values>
      </value>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="117">
      <position xmi:type="position:Position" xmi:id="118" source="File &quot;spec.cif&quot;: " startLine="19" endOffset="350" startColumn="3" endLine="19" endColumn="10" startOffset="343" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="119" value="true">
        <position xmi:type="position:Position" xmi:id="120" source="File &quot;spec.cif&quot;: " startLine="20" endOffset="364" startColumn="5" endLine="20" endColumn="11" startOffset="358" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        <type xmi:type="types:BoolType" xmi:id="121">
          <position xmi:type="position:Position" xmi:id="122" source="File &quot;spec.cif&quot;: " startLine="20" endOffset="364" startColumn="5" endLine="20" endColumn="11" startOffset="358" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="123">
        <position xmi:type="position:Position" xmi:id="124" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="375" startColumn="5" endLine="21" endColumn="8" startOffset="372" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="125">
          <position xmi:type="position:Position" xmi:id="126" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="391" startColumn="10" endLine="21" endColumn="24" startOffset="377" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="127" event="7">
            <position xmi:type="position:Position" xmi:id="128" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="391" startColumn="10" endLine="21" endColumn="24" startOffset="377" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:BoolType" xmi:id="129">
              <position xmi:type="position:Position" xmi:id="130" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="391" startColumn="10" endLine="21" endColumn="24" startOffset="377" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="131" operator="Equal">
          <position xmi:type="position:Position" xmi:id="132" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="402" startColumn="35" endLine="21" endColumn="35" startOffset="402" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <type xmi:type="types:BoolType" xmi:id="133">
            <position xmi:type="position:Position" xmi:id="134" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="402" startColumn="35" endLine="21" endColumn="35" startOffset="402" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="135" variable="103">
            <position xmi:type="position:Position" xmi:id="136" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="400" startColumn="31" endLine="21" endColumn="33" startOffset="398" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="137">
              <position xmi:type="position:Position" xmi:id="138" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="400" startColumn="31" endLine="21" endColumn="33" startOffset="398" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:UnaryExpression" xmi:id="139" operator="Negate">
            <position xmi:type="position:Position" xmi:id="140" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="404" startColumn="37" endLine="21" endColumn="37" startOffset="404" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="141" lower="-1" upper="-1">
              <position xmi:type="position:Position" xmi:id="142" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="404" startColumn="37" endLine="21" endColumn="37" startOffset="404" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
            <child xmi:type="expressions:IntExpression" xmi:id="143" value="1">
              <position xmi:type="position:Position" xmi:id="144" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="405" startColumn="38" endLine="21" endColumn="38" startOffset="405" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              <type xmi:type="types:IntType" xmi:id="145" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="146" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="405" startColumn="38" endLine="21" endColumn="38" startOffset="405" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              </type>
            </child>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="147">
          <position xmi:type="position:Position" xmi:id="148" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="427" startColumn="59" endLine="21" endColumn="60" startOffset="426" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="149" variable="103">
            <position xmi:type="position:Position" xmi:id="150" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="424" startColumn="55" endLine="21" endColumn="57" startOffset="422" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="151">
              <position xmi:type="position:Position" xmi:id="152" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="424" startColumn="55" endLine="21" endColumn="57" startOffset="422" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:DiscVariableExpression" xmi:id="153" variable="9">
            <position xmi:type="position:Position" xmi:id="154" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="441" startColumn="62" endLine="21" endColumn="74" startOffset="429" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="155">
              <position xmi:type="position:Position" xmi:id="156" source="File &quot;spec.cif&quot;: " startLine="21" endOffset="441" startColumn="62" endLine="21" endColumn="74" startOffset="429" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="157">
        <position xmi:type="position:Position" xmi:id="158" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="452" startColumn="5" endLine="22" endColumn="8" startOffset="449" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="159">
          <position xmi:type="position:Position" xmi:id="160" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="457" startColumn="10" endLine="22" endColumn="13" startOffset="454" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="161" event="3">
            <position xmi:type="position:Position" xmi:id="162" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="457" startColumn="10" endLine="22" endColumn="13" startOffset="454" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:BoolType" xmi:id="163">
              <position xmi:type="position:Position" xmi:id="164" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="457" startColumn="10" endLine="22" endColumn="13" startOffset="454" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="165" operator="Conjunction">
          <position xmi:type="position:Position" xmi:id="166" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="486" startColumn="40" endLine="22" endColumn="42" startOffset="484" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <type xmi:type="types:BoolType" xmi:id="167">
            <position xmi:type="position:Position" xmi:id="168" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="486" startColumn="40" endLine="22" endColumn="42" startOffset="484" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          </type>
          <left xmi:type="expressions:BinaryExpression" xmi:id="169" operator="GreaterEqual">
            <position xmi:type="position:Position" xmi:id="170" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="480" startColumn="35" endLine="22" endColumn="36" startOffset="479" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:BoolType" xmi:id="171">
              <position xmi:type="position:Position" xmi:id="172" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="480" startColumn="35" endLine="22" endColumn="36" startOffset="479" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="173" variable="103">
              <position xmi:type="position:Position" xmi:id="174" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="477" startColumn="31" endLine="22" endColumn="33" startOffset="475" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              <type xmi:type="types:IntType" xmi:id="175">
                <position xmi:type="position:Position" xmi:id="176" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="477" startColumn="31" endLine="22" endColumn="33" startOffset="475" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="177">
              <position xmi:type="position:Position" xmi:id="178" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="482" startColumn="38" endLine="22" endColumn="38" startOffset="482" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              <type xmi:type="types:IntType" xmi:id="179" lower="0" upper="0">
                <position xmi:type="position:Position" xmi:id="180" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="482" startColumn="38" endLine="22" endColumn="38" startOffset="482" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              </type>
            </right>
          </left>
          <right xmi:type="expressions:BinaryExpression" xmi:id="181" operator="LessThan">
            <position xmi:type="position:Position" xmi:id="182" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="492" startColumn="48" endLine="22" endColumn="48" startOffset="492" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:BoolType" xmi:id="183">
              <position xmi:type="position:Position" xmi:id="184" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="492" startColumn="48" endLine="22" endColumn="48" startOffset="492" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="185" variable="103">
              <position xmi:type="position:Position" xmi:id="186" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="490" startColumn="44" endLine="22" endColumn="46" startOffset="488" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              <type xmi:type="types:IntType" xmi:id="187">
                <position xmi:type="position:Position" xmi:id="188" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="490" startColumn="44" endLine="22" endColumn="46" startOffset="488" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="189" value="7">
              <position xmi:type="position:Position" xmi:id="190" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="494" startColumn="50" endLine="22" endColumn="50" startOffset="494" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              <type xmi:type="types:IntType" xmi:id="191" lower="7" upper="7">
                <position xmi:type="position:Position" xmi:id="192" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="494" startColumn="50" endLine="22" endColumn="50" startOffset="494" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              </type>
            </right>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="193">
          <position xmi:type="position:Position" xmi:id="194" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="504" startColumn="59" endLine="22" endColumn="60" startOffset="503" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="195" variable="103">
            <position xmi:type="position:Position" xmi:id="196" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="501" startColumn="55" endLine="22" endColumn="57" startOffset="499" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="197">
              <position xmi:type="position:Position" xmi:id="198" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="501" startColumn="55" endLine="22" endColumn="57" startOffset="499" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:BinaryExpression" xmi:id="199" operator="Addition">
            <position xmi:type="position:Position" xmi:id="200" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="510" startColumn="66" endLine="22" endColumn="66" startOffset="510" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="201">
              <position xmi:type="position:Position" xmi:id="202" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="510" startColumn="66" endLine="22" endColumn="66" startOffset="510" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
            <left xmi:type="expressions:DiscVariableExpression" xmi:id="203" variable="103">
              <position xmi:type="position:Position" xmi:id="204" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="508" startColumn="62" endLine="22" endColumn="64" startOffset="506" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              <type xmi:type="types:IntType" xmi:id="205">
                <position xmi:type="position:Position" xmi:id="206" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="508" startColumn="62" endLine="22" endColumn="64" startOffset="506" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              </type>
            </left>
            <right xmi:type="expressions:IntExpression" xmi:id="207" value="1">
              <position xmi:type="position:Position" xmi:id="208" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="512" startColumn="68" endLine="22" endColumn="68" startOffset="512" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              <type xmi:type="types:IntType" xmi:id="209" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="210" source="File &quot;spec.cif&quot;: " startLine="22" endOffset="512" startColumn="68" endLine="22" endColumn="68" startOffset="512" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              </type>
            </right>
          </value>
        </updates>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="211">
        <position xmi:type="position:Position" xmi:id="212" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="523" startColumn="5" endLine="23" endColumn="8" startOffset="520" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="213">
          <position xmi:type="position:Position" xmi:id="214" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="529" startColumn="10" endLine="23" endColumn="14" startOffset="525" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="215" event="101">
            <position xmi:type="position:Position" xmi:id="216" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="529" startColumn="10" endLine="23" endColumn="14" startOffset="525" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:BoolType" xmi:id="217">
              <position xmi:type="position:Position" xmi:id="218" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="529" startColumn="10" endLine="23" endColumn="14" startOffset="525" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </event>
        </events>
        <guards xmi:type="expressions:BinaryExpression" xmi:id="219" operator="Equal">
          <position xmi:type="position:Position" xmi:id="220" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="550" startColumn="35" endLine="23" endColumn="35" startOffset="550" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <type xmi:type="types:BoolType" xmi:id="221">
            <position xmi:type="position:Position" xmi:id="222" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="550" startColumn="35" endLine="23" endColumn="35" startOffset="550" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          </type>
          <left xmi:type="expressions:DiscVariableExpression" xmi:id="223" variable="103">
            <position xmi:type="position:Position" xmi:id="224" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="548" startColumn="31" endLine="23" endColumn="33" startOffset="546" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="225">
              <position xmi:type="position:Position" xmi:id="226" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="548" startColumn="31" endLine="23" endColumn="33" startOffset="546" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </left>
          <right xmi:type="expressions:IntExpression" xmi:id="227" value="7">
            <position xmi:type="position:Position" xmi:id="228" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="552" startColumn="37" endLine="23" endColumn="37" startOffset="552" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="229" lower="7" upper="7">
              <position xmi:type="position:Position" xmi:id="230" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="552" startColumn="37" endLine="23" endColumn="37" startOffset="552" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </right>
        </guards>
        <updates xmi:type="automata:Assignment" xmi:id="231">
          <position xmi:type="position:Position" xmi:id="232" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="575" startColumn="59" endLine="23" endColumn="60" startOffset="574" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
          <addressable xmi:type="expressions:DiscVariableExpression" xmi:id="233" variable="103">
            <position xmi:type="position:Position" xmi:id="234" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="572" startColumn="55" endLine="23" endColumn="57" startOffset="570" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="235">
              <position xmi:type="position:Position" xmi:id="236" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="572" startColumn="55" endLine="23" endColumn="57" startOffset="570" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
          </addressable>
          <value xmi:type="expressions:UnaryExpression" xmi:id="237" operator="Negate">
            <position xmi:type="position:Position" xmi:id="238" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="577" startColumn="62" endLine="23" endColumn="62" startOffset="577" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            <type xmi:type="types:IntType" xmi:id="239" lower="-1" upper="-1">
              <position xmi:type="position:Position" xmi:id="240" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="577" startColumn="62" endLine="23" endColumn="62" startOffset="577" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
            </type>
            <child xmi:type="expressions:IntExpression" xmi:id="241" value="1">
              <position xmi:type="position:Position" xmi:id="242" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="578" startColumn="63" endLine="23" endColumn="63" startOffset="578" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              <type xmi:type="types:IntType" xmi:id="243" lower="1" upper="1">
                <position xmi:type="position:Position" xmi:id="244" source="File &quot;spec.cif&quot;: " startLine="23" endOffset="578" startColumn="63" endLine="23" endColumn="63" startOffset="578" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
              </type>
            </child>
          </value>
        </updates>
      </edges>
    </locations>
    <monitors xmi:type="automata:Monitors" xmi:id="245">
      <position xmi:type="position:Position" xmi:id="246" source="File &quot;spec.cif&quot;: " startLine="15" endOffset="277" startColumn="3" endLine="15" endColumn="9" startOffset="271" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
      <events xmi:type="expressions:EventExpression" xmi:id="247" event="3">
        <position xmi:type="position:Position" xmi:id="248" source="File &quot;spec.cif&quot;: " startLine="15" endOffset="282" startColumn="11" endLine="15" endColumn="14" startOffset="279" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        <type xmi:type="types:BoolType" xmi:id="249">
          <position xmi:type="position:Position" xmi:id="250" source="File &quot;spec.cif&quot;: " startLine="15" endOffset="282" startColumn="11" endLine="15" endColumn="14" startOffset="279" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\spec.cif"/>
        </type>
      </events>
    </monitors>
  </components>
</cif:Specification>`;