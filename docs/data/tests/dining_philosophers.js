const eventMap = [
  "p1f",
  "p1f1",
  "p1f2",
  "p2f",
  "p2f1",
  "p2f2"
];

const xml_dining_philosophers = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;dining_philosophers.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
  <declarations xmi:type="declarations:Event" xmi:id="3" name="p1f1">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;dining_philosophers.cif&quot;: " startLine="1" endOffset="9" startColumn="7" endLine="1" endColumn="10" startOffset="6" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="5" name="p1f2">
    <position xmi:type="position:Position" xmi:id="6" source="File &quot;dining_philosophers.cif&quot;: " startLine="1" endOffset="15" startColumn="13" endLine="1" endColumn="16" startOffset="12" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="7" name="p2f1">
    <position xmi:type="position:Position" xmi:id="8" source="File &quot;dining_philosophers.cif&quot;: " startLine="1" endOffset="21" startColumn="19" endLine="1" endColumn="22" startOffset="18" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="9" name="p2f2">
    <position xmi:type="position:Position" xmi:id="10" source="File &quot;dining_philosophers.cif&quot;: " startLine="1" endOffset="27" startColumn="25" endLine="1" endColumn="28" startOffset="24" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="11" name="p1f">
    <position xmi:type="position:Position" xmi:id="12" source="File &quot;dining_philosophers.cif&quot;: " startLine="1" endOffset="31" startColumn="30" endLine="1" endColumn="32" startOffset="29" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
  </declarations>
  <declarations xmi:type="declarations:Event" xmi:id="13" name="p2f">
    <position xmi:type="position:Position" xmi:id="14" source="File &quot;dining_philosophers.cif&quot;: " startLine="1" endOffset="36" startColumn="35" endLine="1" endColumn="37" startOffset="34" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
  </declarations>
  <components xmi:type="automata:Automaton" xmi:id="15" name="philosopher1">
    <position xmi:type="position:Position" xmi:id="16" source="File &quot;dining_philosophers.cif&quot;: " startLine="3" endOffset="63" startColumn="11" endLine="3" endColumn="22" startOffset="52" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
    <locations xmi:type="automata:Location" xmi:id="17" name="T">
      <position xmi:type="position:Position" xmi:id="18" source="File &quot;dining_philosophers.cif&quot;: " startLine="4" endOffset="80" startColumn="14" endLine="4" endColumn="14" startOffset="80" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="19" value="true">
        <position xmi:type="position:Position" xmi:id="20" source="File &quot;dining_philosophers.cif&quot;: " startLine="5" endOffset="98" startColumn="9" endLine="5" endColumn="15" startOffset="92" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <type xmi:type="types:BoolType" xmi:id="21">
          <position xmi:type="position:Position" xmi:id="22" source="File &quot;dining_philosophers.cif&quot;: " startLine="5" endOffset="98" startColumn="9" endLine="5" endColumn="15" startOffset="92" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="23" target="39">
        <position xmi:type="position:Position" xmi:id="24" source="File &quot;dining_philosophers.cif&quot;: " startLine="6" endOffset="113" startColumn="9" endLine="6" endColumn="12" startOffset="110" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="25">
          <position xmi:type="position:Position" xmi:id="26" source="File &quot;dining_philosophers.cif&quot;: " startLine="6" endOffset="118" startColumn="14" endLine="6" endColumn="17" startOffset="115" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="27" event="3">
            <position xmi:type="position:Position" xmi:id="28" source="File &quot;dining_philosophers.cif&quot;: " startLine="6" endOffset="118" startColumn="14" endLine="6" endColumn="17" startOffset="115" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="29">
              <position xmi:type="position:Position" xmi:id="30" source="File &quot;dining_philosophers.cif&quot;: " startLine="6" endOffset="118" startColumn="14" endLine="6" endColumn="17" startOffset="115" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="31" target="49">
        <position xmi:type="position:Position" xmi:id="32" source="File &quot;dining_philosophers.cif&quot;: " startLine="7" endOffset="141" startColumn="9" endLine="7" endColumn="12" startOffset="138" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="33">
          <position xmi:type="position:Position" xmi:id="34" source="File &quot;dining_philosophers.cif&quot;: " startLine="7" endOffset="146" startColumn="14" endLine="7" endColumn="17" startOffset="143" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="35" event="5">
            <position xmi:type="position:Position" xmi:id="36" source="File &quot;dining_philosophers.cif&quot;: " startLine="7" endOffset="146" startColumn="14" endLine="7" endColumn="17" startOffset="143" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="37">
              <position xmi:type="position:Position" xmi:id="38" source="File &quot;dining_philosophers.cif&quot;: " startLine="7" endOffset="146" startColumn="14" endLine="7" endColumn="17" startOffset="143" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="39" name="F1">
      <position xmi:type="position:Position" xmi:id="40" source="File &quot;dining_philosophers.cif&quot;: " startLine="9" endOffset="174" startColumn="14" endLine="9" endColumn="15" startOffset="173" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="41" target="59">
        <position xmi:type="position:Position" xmi:id="42" source="File &quot;dining_philosophers.cif&quot;: " startLine="10" endOffset="189" startColumn="9" endLine="10" endColumn="12" startOffset="186" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="43">
          <position xmi:type="position:Position" xmi:id="44" source="File &quot;dining_philosophers.cif&quot;: " startLine="10" endOffset="194" startColumn="14" endLine="10" endColumn="17" startOffset="191" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="45" event="5">
            <position xmi:type="position:Position" xmi:id="46" source="File &quot;dining_philosophers.cif&quot;: " startLine="10" endOffset="194" startColumn="14" endLine="10" endColumn="17" startOffset="191" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="47">
              <position xmi:type="position:Position" xmi:id="48" source="File &quot;dining_philosophers.cif&quot;: " startLine="10" endOffset="194" startColumn="14" endLine="10" endColumn="17" startOffset="191" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="49" name="F2">
      <position xmi:type="position:Position" xmi:id="50" source="File &quot;dining_philosophers.cif&quot;: " startLine="12" endOffset="221" startColumn="14" endLine="12" endColumn="15" startOffset="220" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="51" target="59">
        <position xmi:type="position:Position" xmi:id="52" source="File &quot;dining_philosophers.cif&quot;: " startLine="13" endOffset="236" startColumn="9" endLine="13" endColumn="12" startOffset="233" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="53">
          <position xmi:type="position:Position" xmi:id="54" source="File &quot;dining_philosophers.cif&quot;: " startLine="13" endOffset="241" startColumn="14" endLine="13" endColumn="17" startOffset="238" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="55" event="3">
            <position xmi:type="position:Position" xmi:id="56" source="File &quot;dining_philosophers.cif&quot;: " startLine="13" endOffset="241" startColumn="14" endLine="13" endColumn="17" startOffset="238" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="57">
              <position xmi:type="position:Position" xmi:id="58" source="File &quot;dining_philosophers.cif&quot;: " startLine="13" endOffset="241" startColumn="14" endLine="13" endColumn="17" startOffset="238" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="59" name="E">
      <position xmi:type="position:Position" xmi:id="60" source="File &quot;dining_philosophers.cif&quot;: " startLine="15" endOffset="267" startColumn="14" endLine="15" endColumn="14" startOffset="267" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="61" target="17">
        <position xmi:type="position:Position" xmi:id="62" source="File &quot;dining_philosophers.cif&quot;: " startLine="16" endOffset="282" startColumn="9" endLine="16" endColumn="12" startOffset="279" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="63">
          <position xmi:type="position:Position" xmi:id="64" source="File &quot;dining_philosophers.cif&quot;: " startLine="16" endOffset="286" startColumn="14" endLine="16" endColumn="16" startOffset="284" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="65" event="11">
            <position xmi:type="position:Position" xmi:id="66" source="File &quot;dining_philosophers.cif&quot;: " startLine="16" endOffset="286" startColumn="14" endLine="16" endColumn="16" startOffset="284" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="67">
              <position xmi:type="position:Position" xmi:id="68" source="File &quot;dining_philosophers.cif&quot;: " startLine="16" endOffset="286" startColumn="14" endLine="16" endColumn="16" startOffset="284" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="69" name="philosopher2">
    <position xmi:type="position:Position" xmi:id="70" source="File &quot;dining_philosophers.cif&quot;: " startLine="19" endOffset="325" startColumn="11" endLine="19" endColumn="22" startOffset="314" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
    <locations xmi:type="automata:Location" xmi:id="71" name="T">
      <position xmi:type="position:Position" xmi:id="72" source="File &quot;dining_philosophers.cif&quot;: " startLine="20" endOffset="342" startColumn="14" endLine="20" endColumn="14" startOffset="342" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="73" value="true">
        <position xmi:type="position:Position" xmi:id="74" source="File &quot;dining_philosophers.cif&quot;: " startLine="21" endOffset="360" startColumn="9" endLine="21" endColumn="15" startOffset="354" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <type xmi:type="types:BoolType" xmi:id="75">
          <position xmi:type="position:Position" xmi:id="76" source="File &quot;dining_philosophers.cif&quot;: " startLine="21" endOffset="360" startColumn="9" endLine="21" endColumn="15" startOffset="354" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="77" target="93">
        <position xmi:type="position:Position" xmi:id="78" source="File &quot;dining_philosophers.cif&quot;: " startLine="22" endOffset="375" startColumn="9" endLine="22" endColumn="12" startOffset="372" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="79">
          <position xmi:type="position:Position" xmi:id="80" source="File &quot;dining_philosophers.cif&quot;: " startLine="22" endOffset="380" startColumn="14" endLine="22" endColumn="17" startOffset="377" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="81" event="7">
            <position xmi:type="position:Position" xmi:id="82" source="File &quot;dining_philosophers.cif&quot;: " startLine="22" endOffset="380" startColumn="14" endLine="22" endColumn="17" startOffset="377" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="83">
              <position xmi:type="position:Position" xmi:id="84" source="File &quot;dining_philosophers.cif&quot;: " startLine="22" endOffset="380" startColumn="14" endLine="22" endColumn="17" startOffset="377" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="85" target="103">
        <position xmi:type="position:Position" xmi:id="86" source="File &quot;dining_philosophers.cif&quot;: " startLine="23" endOffset="403" startColumn="9" endLine="23" endColumn="12" startOffset="400" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="87">
          <position xmi:type="position:Position" xmi:id="88" source="File &quot;dining_philosophers.cif&quot;: " startLine="23" endOffset="408" startColumn="14" endLine="23" endColumn="17" startOffset="405" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="89" event="9">
            <position xmi:type="position:Position" xmi:id="90" source="File &quot;dining_philosophers.cif&quot;: " startLine="23" endOffset="408" startColumn="14" endLine="23" endColumn="17" startOffset="405" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="91">
              <position xmi:type="position:Position" xmi:id="92" source="File &quot;dining_philosophers.cif&quot;: " startLine="23" endOffset="408" startColumn="14" endLine="23" endColumn="17" startOffset="405" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="93" name="F1">
      <position xmi:type="position:Position" xmi:id="94" source="File &quot;dining_philosophers.cif&quot;: " startLine="25" endOffset="436" startColumn="14" endLine="25" endColumn="15" startOffset="435" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="95" target="113">
        <position xmi:type="position:Position" xmi:id="96" source="File &quot;dining_philosophers.cif&quot;: " startLine="26" endOffset="451" startColumn="9" endLine="26" endColumn="12" startOffset="448" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="97">
          <position xmi:type="position:Position" xmi:id="98" source="File &quot;dining_philosophers.cif&quot;: " startLine="26" endOffset="456" startColumn="14" endLine="26" endColumn="17" startOffset="453" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="99" event="9">
            <position xmi:type="position:Position" xmi:id="100" source="File &quot;dining_philosophers.cif&quot;: " startLine="26" endOffset="456" startColumn="14" endLine="26" endColumn="17" startOffset="453" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="101">
              <position xmi:type="position:Position" xmi:id="102" source="File &quot;dining_philosophers.cif&quot;: " startLine="26" endOffset="456" startColumn="14" endLine="26" endColumn="17" startOffset="453" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="103" name="F2">
      <position xmi:type="position:Position" xmi:id="104" source="File &quot;dining_philosophers.cif&quot;: " startLine="28" endOffset="483" startColumn="14" endLine="28" endColumn="15" startOffset="482" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="105" target="113">
        <position xmi:type="position:Position" xmi:id="106" source="File &quot;dining_philosophers.cif&quot;: " startLine="29" endOffset="498" startColumn="9" endLine="29" endColumn="12" startOffset="495" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="107">
          <position xmi:type="position:Position" xmi:id="108" source="File &quot;dining_philosophers.cif&quot;: " startLine="29" endOffset="503" startColumn="14" endLine="29" endColumn="17" startOffset="500" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="109" event="7">
            <position xmi:type="position:Position" xmi:id="110" source="File &quot;dining_philosophers.cif&quot;: " startLine="29" endOffset="503" startColumn="14" endLine="29" endColumn="17" startOffset="500" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="111">
              <position xmi:type="position:Position" xmi:id="112" source="File &quot;dining_philosophers.cif&quot;: " startLine="29" endOffset="503" startColumn="14" endLine="29" endColumn="17" startOffset="500" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="113" name="E">
      <position xmi:type="position:Position" xmi:id="114" source="File &quot;dining_philosophers.cif&quot;: " startLine="31" endOffset="529" startColumn="14" endLine="31" endColumn="14" startOffset="529" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="115" target="71">
        <position xmi:type="position:Position" xmi:id="116" source="File &quot;dining_philosophers.cif&quot;: " startLine="32" endOffset="544" startColumn="9" endLine="32" endColumn="12" startOffset="541" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="117">
          <position xmi:type="position:Position" xmi:id="118" source="File &quot;dining_philosophers.cif&quot;: " startLine="32" endOffset="548" startColumn="14" endLine="32" endColumn="16" startOffset="546" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="119" event="13">
            <position xmi:type="position:Position" xmi:id="120" source="File &quot;dining_philosophers.cif&quot;: " startLine="32" endOffset="548" startColumn="14" endLine="32" endColumn="16" startOffset="546" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="121">
              <position xmi:type="position:Position" xmi:id="122" source="File &quot;dining_philosophers.cif&quot;: " startLine="32" endOffset="548" startColumn="14" endLine="32" endColumn="16" startOffset="546" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="123" name="fork1">
    <position xmi:type="position:Position" xmi:id="124" source="File &quot;dining_philosophers.cif&quot;: " startLine="35" endOffset="580" startColumn="11" endLine="35" endColumn="15" startOffset="576" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
    <locations xmi:type="automata:Location" xmi:id="125" name="I">
      <position xmi:type="position:Position" xmi:id="126" source="File &quot;dining_philosophers.cif&quot;: " startLine="36" endOffset="597" startColumn="14" endLine="36" endColumn="14" startOffset="597" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="127" value="true">
        <position xmi:type="position:Position" xmi:id="128" source="File &quot;dining_philosophers.cif&quot;: " startLine="37" endOffset="615" startColumn="9" endLine="37" endColumn="15" startOffset="609" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <type xmi:type="types:BoolType" xmi:id="129">
          <position xmi:type="position:Position" xmi:id="130" source="File &quot;dining_philosophers.cif&quot;: " startLine="37" endOffset="615" startColumn="9" endLine="37" endColumn="15" startOffset="609" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="131" target="147">
        <position xmi:type="position:Position" xmi:id="132" source="File &quot;dining_philosophers.cif&quot;: " startLine="38" endOffset="630" startColumn="9" endLine="38" endColumn="12" startOffset="627" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="133">
          <position xmi:type="position:Position" xmi:id="134" source="File &quot;dining_philosophers.cif&quot;: " startLine="38" endOffset="635" startColumn="14" endLine="38" endColumn="17" startOffset="632" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="135" event="3">
            <position xmi:type="position:Position" xmi:id="136" source="File &quot;dining_philosophers.cif&quot;: " startLine="38" endOffset="635" startColumn="14" endLine="38" endColumn="17" startOffset="632" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="137">
              <position xmi:type="position:Position" xmi:id="138" source="File &quot;dining_philosophers.cif&quot;: " startLine="38" endOffset="635" startColumn="14" endLine="38" endColumn="17" startOffset="632" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="139" target="157">
        <position xmi:type="position:Position" xmi:id="140" source="File &quot;dining_philosophers.cif&quot;: " startLine="39" endOffset="658" startColumn="9" endLine="39" endColumn="12" startOffset="655" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="141">
          <position xmi:type="position:Position" xmi:id="142" source="File &quot;dining_philosophers.cif&quot;: " startLine="39" endOffset="663" startColumn="14" endLine="39" endColumn="17" startOffset="660" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="143" event="7">
            <position xmi:type="position:Position" xmi:id="144" source="File &quot;dining_philosophers.cif&quot;: " startLine="39" endOffset="663" startColumn="14" endLine="39" endColumn="17" startOffset="660" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="145">
              <position xmi:type="position:Position" xmi:id="146" source="File &quot;dining_philosophers.cif&quot;: " startLine="39" endOffset="663" startColumn="14" endLine="39" endColumn="17" startOffset="660" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="147" name="P1">
      <position xmi:type="position:Position" xmi:id="148" source="File &quot;dining_philosophers.cif&quot;: " startLine="41" endOffset="691" startColumn="14" endLine="41" endColumn="15" startOffset="690" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="149" target="125">
        <position xmi:type="position:Position" xmi:id="150" source="File &quot;dining_philosophers.cif&quot;: " startLine="42" endOffset="706" startColumn="9" endLine="42" endColumn="12" startOffset="703" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="151">
          <position xmi:type="position:Position" xmi:id="152" source="File &quot;dining_philosophers.cif&quot;: " startLine="42" endOffset="710" startColumn="14" endLine="42" endColumn="16" startOffset="708" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="153" event="11">
            <position xmi:type="position:Position" xmi:id="154" source="File &quot;dining_philosophers.cif&quot;: " startLine="42" endOffset="710" startColumn="14" endLine="42" endColumn="16" startOffset="708" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="155">
              <position xmi:type="position:Position" xmi:id="156" source="File &quot;dining_philosophers.cif&quot;: " startLine="42" endOffset="710" startColumn="14" endLine="42" endColumn="16" startOffset="708" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="157" name="P2">
      <position xmi:type="position:Position" xmi:id="158" source="File &quot;dining_philosophers.cif&quot;: " startLine="44" endOffset="737" startColumn="14" endLine="44" endColumn="15" startOffset="736" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="159" target="125">
        <position xmi:type="position:Position" xmi:id="160" source="File &quot;dining_philosophers.cif&quot;: " startLine="45" endOffset="752" startColumn="9" endLine="45" endColumn="12" startOffset="749" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="161">
          <position xmi:type="position:Position" xmi:id="162" source="File &quot;dining_philosophers.cif&quot;: " startLine="45" endOffset="756" startColumn="14" endLine="45" endColumn="16" startOffset="754" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="163" event="13">
            <position xmi:type="position:Position" xmi:id="164" source="File &quot;dining_philosophers.cif&quot;: " startLine="45" endOffset="756" startColumn="14" endLine="45" endColumn="16" startOffset="754" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="165">
              <position xmi:type="position:Position" xmi:id="166" source="File &quot;dining_philosophers.cif&quot;: " startLine="45" endOffset="756" startColumn="14" endLine="45" endColumn="16" startOffset="754" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="167" name="fork2">
    <position xmi:type="position:Position" xmi:id="168" source="File &quot;dining_philosophers.cif&quot;: " startLine="48" endOffset="788" startColumn="11" endLine="48" endColumn="15" startOffset="784" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
    <locations xmi:type="automata:Location" xmi:id="169" name="I">
      <position xmi:type="position:Position" xmi:id="170" source="File &quot;dining_philosophers.cif&quot;: " startLine="49" endOffset="805" startColumn="14" endLine="49" endColumn="14" startOffset="805" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="171" value="true">
        <position xmi:type="position:Position" xmi:id="172" source="File &quot;dining_philosophers.cif&quot;: " startLine="50" endOffset="823" startColumn="9" endLine="50" endColumn="15" startOffset="817" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <type xmi:type="types:BoolType" xmi:id="173">
          <position xmi:type="position:Position" xmi:id="174" source="File &quot;dining_philosophers.cif&quot;: " startLine="50" endOffset="823" startColumn="9" endLine="50" endColumn="15" startOffset="817" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="175" target="191">
        <position xmi:type="position:Position" xmi:id="176" source="File &quot;dining_philosophers.cif&quot;: " startLine="51" endOffset="838" startColumn="9" endLine="51" endColumn="12" startOffset="835" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="177">
          <position xmi:type="position:Position" xmi:id="178" source="File &quot;dining_philosophers.cif&quot;: " startLine="51" endOffset="843" startColumn="14" endLine="51" endColumn="17" startOffset="840" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="179" event="5">
            <position xmi:type="position:Position" xmi:id="180" source="File &quot;dining_philosophers.cif&quot;: " startLine="51" endOffset="843" startColumn="14" endLine="51" endColumn="17" startOffset="840" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="181">
              <position xmi:type="position:Position" xmi:id="182" source="File &quot;dining_philosophers.cif&quot;: " startLine="51" endOffset="843" startColumn="14" endLine="51" endColumn="17" startOffset="840" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="183" target="201">
        <position xmi:type="position:Position" xmi:id="184" source="File &quot;dining_philosophers.cif&quot;: " startLine="52" endOffset="866" startColumn="9" endLine="52" endColumn="12" startOffset="863" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="185">
          <position xmi:type="position:Position" xmi:id="186" source="File &quot;dining_philosophers.cif&quot;: " startLine="52" endOffset="871" startColumn="14" endLine="52" endColumn="17" startOffset="868" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="187" event="9">
            <position xmi:type="position:Position" xmi:id="188" source="File &quot;dining_philosophers.cif&quot;: " startLine="52" endOffset="871" startColumn="14" endLine="52" endColumn="17" startOffset="868" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="189">
              <position xmi:type="position:Position" xmi:id="190" source="File &quot;dining_philosophers.cif&quot;: " startLine="52" endOffset="871" startColumn="14" endLine="52" endColumn="17" startOffset="868" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="191" name="P1">
      <position xmi:type="position:Position" xmi:id="192" source="File &quot;dining_philosophers.cif&quot;: " startLine="54" endOffset="899" startColumn="14" endLine="54" endColumn="15" startOffset="898" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="193" target="169">
        <position xmi:type="position:Position" xmi:id="194" source="File &quot;dining_philosophers.cif&quot;: " startLine="55" endOffset="914" startColumn="9" endLine="55" endColumn="12" startOffset="911" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="195">
          <position xmi:type="position:Position" xmi:id="196" source="File &quot;dining_philosophers.cif&quot;: " startLine="55" endOffset="918" startColumn="14" endLine="55" endColumn="16" startOffset="916" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="197" event="11">
            <position xmi:type="position:Position" xmi:id="198" source="File &quot;dining_philosophers.cif&quot;: " startLine="55" endOffset="918" startColumn="14" endLine="55" endColumn="16" startOffset="916" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="199">
              <position xmi:type="position:Position" xmi:id="200" source="File &quot;dining_philosophers.cif&quot;: " startLine="55" endOffset="918" startColumn="14" endLine="55" endColumn="16" startOffset="916" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="201" name="P2">
      <position xmi:type="position:Position" xmi:id="202" source="File &quot;dining_philosophers.cif&quot;: " startLine="57" endOffset="945" startColumn="14" endLine="57" endColumn="15" startOffset="944" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="203" target="169">
        <position xmi:type="position:Position" xmi:id="204" source="File &quot;dining_philosophers.cif&quot;: " startLine="58" endOffset="960" startColumn="9" endLine="58" endColumn="12" startOffset="957" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="205">
          <position xmi:type="position:Position" xmi:id="206" source="File &quot;dining_philosophers.cif&quot;: " startLine="58" endOffset="964" startColumn="14" endLine="58" endColumn="16" startOffset="962" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="207" event="13">
            <position xmi:type="position:Position" xmi:id="208" source="File &quot;dining_philosophers.cif&quot;: " startLine="58" endOffset="964" startColumn="14" endLine="58" endColumn="16" startOffset="962" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            <type xmi:type="types:BoolType" xmi:id="209">
              <position xmi:type="position:Position" xmi:id="210" source="File &quot;dining_philosophers.cif&quot;: " startLine="58" endOffset="964" startColumn="14" endLine="58" endColumn="16" startOffset="962" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\dining_philosophers\dining_philosophers.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
</cif:Specification>
`;  // XML content here

