const xml_nondeterminism = `<?xml version="1.0" encoding="UTF-8"?>
<cif:Specification xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:automata="http://eclipse.org/escet/cif/automata" xmlns:cif="http://eclipse.org/escet/cif" xmlns:declarations="http://eclipse.org/escet/cif/declarations" xmlns:expressions="http://eclipse.org/escet/cif/expressions" xmlns:position="http://eclipse.org/escet/position" xmlns:types="http://eclipse.org/escet/cif/types" xsi:schemaLocation="http://eclipse.org/escet/cif/automata http://eclipse.org/escet/cif#//automata http://eclipse.org/escet/cif/declarations http://eclipse.org/escet/cif#//declarations http://eclipse.org/escet/cif/expressions http://eclipse.org/escet/cif#//expressions http://eclipse.org/escet/cif/types http://eclipse.org/escet/cif#//types" xmi:id="1" name="specification">
  <position xmi:type="position:Position" xmi:id="2" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="1" startColumn="1" endLine="1" endColumn="1" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
  <components xmi:type="automata:Automaton" xmi:id="3" name="coin">
    <position xmi:type="position:Position" xmi:id="4" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="1" endOffset="13" startColumn="11" endLine="1" endColumn="14" startOffset="10" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
    <declarations xmi:type="declarations:Event" xmi:id="5" name="toss" controllable="false">
      <position xmi:type="position:Position" xmi:id="6" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="2" endOffset="43" startColumn="24" endLine="2" endColumn="27" startOffset="40" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="7" name="land" controllable="false">
      <position xmi:type="position:Position" xmi:id="8" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="2" endOffset="49" startColumn="30" endLine="2" endColumn="33" startOffset="46" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
    </declarations>
    <declarations xmi:type="declarations:Event" xmi:id="9" name="pick_up" controllable="false">
      <position xmi:type="position:Position" xmi:id="10" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="2" endOffset="58" startColumn="36" endLine="2" endColumn="42" startOffset="52" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
    </declarations>
    <locations xmi:type="automata:Location" xmi:id="11" name="hand">
      <position xmi:type="position:Position" xmi:id="12" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="4" endOffset="78" startColumn="12" endLine="4" endColumn="15" startOffset="75" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="13" value="true">
        <position xmi:type="position:Position" xmi:id="14" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="5" endOffset="92" startColumn="5" endLine="5" endColumn="11" startOffset="86" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
        <type xmi:type="types:BoolType" xmi:id="15">
          <position xmi:type="position:Position" xmi:id="16" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="5" endOffset="92" startColumn="5" endLine="5" endColumn="11" startOffset="86" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="17" target="25">
        <position xmi:type="position:Position" xmi:id="18" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="6" endOffset="103" startColumn="5" endLine="6" endColumn="8" startOffset="100" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="19">
          <position xmi:type="position:Position" xmi:id="20" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="6" endOffset="108" startColumn="10" endLine="6" endColumn="13" startOffset="105" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="21" event="5">
            <position xmi:type="position:Position" xmi:id="22" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="6" endOffset="108" startColumn="10" endLine="6" endColumn="13" startOffset="105" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            <type xmi:type="types:BoolType" xmi:id="23">
              <position xmi:type="position:Position" xmi:id="24" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="6" endOffset="108" startColumn="10" endLine="6" endColumn="13" startOffset="105" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="25" name="air">
      <position xmi:type="position:Position" xmi:id="26" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="8" endOffset="136" startColumn="12" endLine="8" endColumn="14" startOffset="134" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="27" target="35">
        <position xmi:type="position:Position" xmi:id="28" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="9" endOffset="147" startColumn="5" endLine="9" endColumn="8" startOffset="144" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="29">
          <position xmi:type="position:Position" xmi:id="30" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="9" endOffset="152" startColumn="10" endLine="9" endColumn="13" startOffset="149" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="31" event="7">
            <position xmi:type="position:Position" xmi:id="32" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="9" endOffset="152" startColumn="10" endLine="9" endColumn="13" startOffset="149" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            <type xmi:type="types:BoolType" xmi:id="33">
              <position xmi:type="position:Position" xmi:id="34" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="9" endOffset="152" startColumn="10" endLine="9" endColumn="13" startOffset="149" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="35" name="ground">
      <position xmi:type="position:Position" xmi:id="36" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="11" endOffset="186" startColumn="12" endLine="11" endColumn="17" startOffset="181" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="37" target="11">
        <position xmi:type="position:Position" xmi:id="38" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="12" endOffset="197" startColumn="5" endLine="12" endColumn="8" startOffset="194" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="39">
          <position xmi:type="position:Position" xmi:id="40" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="12" endOffset="205" startColumn="10" endLine="12" endColumn="16" startOffset="199" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="41" event="9">
            <position xmi:type="position:Position" xmi:id="42" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="12" endOffset="205" startColumn="10" endLine="12" endColumn="16" startOffset="199" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            <type xmi:type="types:BoolType" xmi:id="43">
              <position xmi:type="position:Position" xmi:id="44" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="12" endOffset="205" startColumn="10" endLine="12" endColumn="16" startOffset="199" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
  <components xmi:type="automata:Automaton" xmi:id="45" name="outcome">
    <position xmi:type="position:Position" xmi:id="46" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="15" endOffset="242" startColumn="11" endLine="15" endColumn="17" startOffset="236" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
    <locations xmi:type="automata:Location" xmi:id="47" name="unknown">
      <position xmi:type="position:Position" xmi:id="48" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="16" endOffset="263" startColumn="12" endLine="16" endColumn="18" startOffset="257" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
      <initials xmi:type="expressions:BoolExpression" xmi:id="49" value="true">
        <position xmi:type="position:Position" xmi:id="50" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="17" endOffset="277" startColumn="5" endLine="17" endColumn="11" startOffset="271" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
        <type xmi:type="types:BoolType" xmi:id="51">
          <position xmi:type="position:Position" xmi:id="52" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="17" endOffset="277" startColumn="5" endLine="17" endColumn="11" startOffset="271" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
        </type>
      </initials>
      <edges xmi:type="automata:Edge" xmi:id="53" target="69">
        <position xmi:type="position:Position" xmi:id="54" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="18" endOffset="288" startColumn="5" endLine="18" endColumn="8" startOffset="285" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="55">
          <position xmi:type="position:Position" xmi:id="56" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="18" endOffset="298" startColumn="10" endLine="18" endColumn="18" startOffset="290" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="57" event="7">
            <position xmi:type="position:Position" xmi:id="58" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="18" endOffset="298" startColumn="10" endLine="18" endColumn="18" startOffset="290" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            <type xmi:type="types:BoolType" xmi:id="59">
              <position xmi:type="position:Position" xmi:id="60" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="18" endOffset="298" startColumn="10" endLine="18" endColumn="18" startOffset="290" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            </type>
          </event>
        </events>
      </edges>
      <edges xmi:type="automata:Edge" xmi:id="61" target="79">
        <position xmi:type="position:Position" xmi:id="62" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="19" endOffset="342" startColumn="5" endLine="19" endColumn="8" startOffset="339" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="63">
          <position xmi:type="position:Position" xmi:id="64" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="19" endOffset="352" startColumn="10" endLine="19" endColumn="18" startOffset="344" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="65" event="7">
            <position xmi:type="position:Position" xmi:id="66" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="19" endOffset="352" startColumn="10" endLine="19" endColumn="18" startOffset="344" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            <type xmi:type="types:BoolType" xmi:id="67">
              <position xmi:type="position:Position" xmi:id="68" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="19" endOffset="352" startColumn="10" endLine="19" endColumn="18" startOffset="344" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="69" name="heads">
      <position xmi:type="position:Position" xmi:id="70" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="21" endOffset="407" startColumn="12" endLine="21" endColumn="16" startOffset="403" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="71" target="47">
        <position xmi:type="position:Position" xmi:id="72" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="22" endOffset="418" startColumn="5" endLine="22" endColumn="8" startOffset="415" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="73">
          <position xmi:type="position:Position" xmi:id="74" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="22" endOffset="431" startColumn="10" endLine="22" endColumn="21" startOffset="420" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="75" event="9">
            <position xmi:type="position:Position" xmi:id="76" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="22" endOffset="431" startColumn="10" endLine="22" endColumn="21" startOffset="420" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            <type xmi:type="types:BoolType" xmi:id="77">
              <position xmi:type="position:Position" xmi:id="78" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="22" endOffset="431" startColumn="10" endLine="22" endColumn="21" startOffset="420" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
    <locations xmi:type="automata:Location" xmi:id="79" name="tails">
      <position xmi:type="position:Position" xmi:id="80" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="24" endOffset="465" startColumn="12" endLine="24" endColumn="16" startOffset="461" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
      <edges xmi:type="automata:Edge" xmi:id="81" target="47">
        <position xmi:type="position:Position" xmi:id="82" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="25" endOffset="476" startColumn="5" endLine="25" endColumn="8" startOffset="473" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
        <events xmi:type="automata:EdgeEvent" xmi:id="83">
          <position xmi:type="position:Position" xmi:id="84" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="25" endOffset="489" startColumn="10" endLine="25" endColumn="21" startOffset="478" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
          <event xmi:type="expressions:EventExpression" xmi:id="85" event="9">
            <position xmi:type="position:Position" xmi:id="86" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="25" endOffset="489" startColumn="10" endLine="25" endColumn="21" startOffset="478" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            <type xmi:type="types:BoolType" xmi:id="87">
              <position xmi:type="position:Position" xmi:id="88" source="File &quot;C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif&quot;: " startLine="25" endOffset="489" startColumn="10" endLine="25" endColumn="21" startOffset="478" location="C:\Users\rober\Downloads\eclipse-escet-v5.0-win32.win32.x86_64\eclipse-escet-v5.0\workspace\selfmade\tests\nondeterminism.cif"/>
            </type>
          </event>
        </events>
      </edges>
    </locations>
  </components>
</cif:Specification>
`;
const eventMap = ['coin.land', 'coin.pick_up', 'coin.toss'];
